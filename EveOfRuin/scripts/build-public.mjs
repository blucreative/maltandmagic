import { createHash } from 'node:crypto';
import { mkdir, readdir, readFile, writeFile, lstat } from 'node:fs/promises';
import { dirname, extname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildPack, validatePack, EXPECTED_FILES } from '../model.mjs';
import { validateAssets } from '../storage.mjs';
import { buildPreparationGuides } from './prepare-guidance.mjs';
import { chapterSixGuidance } from './chapter-six-guidance.mjs';

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const repository = dirname(scriptDir);
const privateDir = join(repository, '.private');
const publicDataDir = join(repository, 'data');
const publicMediaDir = join(repository, 'media');
const maxTextBytes = 10_000_000;
const maxImageBytes = 50_000_000;
const rasterExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp']);

function fail(message) {
  throw new Error(message);
}

async function ensureRegularDirectory(path) {
  const stat = await lstat(path);
  if (!stat.isDirectory() || stat.isSymbolicLink()) fail(`The source directory must be a regular directory: ${path}`);
}

async function listEntries(directory) {
  return (await readdir(directory, { withFileTypes: true })).sort((left, right) => left.name.localeCompare(right.name));
}

function normalizeTokens(value) {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter(Boolean)
    .filter(token => token !== 'gm' && token !== 'gamemaster' && token !== 'game' && token !== 'master')
    .map(token => (/^\d+$/.test(token) ? String(Number(token)) : token));
}

function normalizeMatchKey(value) {
  const stem = value.replace(/\.(?:png|jpe?g|webp)$/i, '').replace(/^map-/i, '');
  return normalizeTokens(stem).join('-');
}

function splitImageName(fileName) {
  const extension = extname(fileName).toLowerCase();
  const stem = basename(fileName).slice(0, extension ? -extension.length : undefined);
  const tokens = normalizeTokens(stem);
  const player = tokens.includes('player');
  const filtered = tokens.filter(token => token !== 'player');
  let numberIndex = filtered.findIndex(token => /^\d+$/.test(token));
  let number = numberIndex >= 0 ? filtered.splice(numberIndex, 1)[0] : null;
  if (filtered[0] === 'map') filtered.shift();
  if (!number) number = null;
  return { stem, tokens: filtered, player, number, extension };
}

function buildImageName(fileName, fallbackIndex) {
  const { tokens, player, number } = splitImageName(fileName);
  const mapNumber = number ? String(Number(number)).padStart(2, '0') : String(fallbackIndex).padStart(2, '0');
  const suffix = tokens.length ? `-${tokens.join('-')}` : '';
  return `map-${mapNumber}${suffix}${player ? '-player' : ''}`;
}

function decodeImageReferences(markdown) {
  const references = [];
  const inlineImage = /!?\[[^\]]*]\((?:<([^>]+)>|([^\s)]+))(?:\s+(?:"[^"]*"|'[^']*'|\([^)]*\)))?\)/g;
  const htmlImage = /<img\b[^>]*\bsrc=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi;
  for (const match of markdown.matchAll(inlineImage)) references.push(match[1] ?? match[2]);
  for (const match of markdown.matchAll(htmlImage)) references.push(match[1] ?? match[2] ?? match[3]);
  return references.filter(reference => reference && /\.(?:png|jpe?g|webp)(?:[?#]|$)/i.test(reference));
}

function referenceKey(reference) {
  const cleaned = reference.split('#')[0].split('?')[0];
  const segment = cleaned.split(/[\\/]/).pop() ?? cleaned;
  return normalizeMatchKey(segment);
}

async function readTextSource(path, label) {
  const stat = await lstat(path);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > maxTextBytes) {
    fail(`${label} must be a regular text file smaller than ${Math.round(maxTextBytes / 1_000_000)} MB.`);
  }
  return readFile(path, 'utf8');
}

async function readBinarySource(path, label) {
  const stat = await lstat(path);
  if (!stat.isFile() || stat.isSymbolicLink() || stat.size > maxImageBytes) {
    fail(`${label} must be a regular image file smaller than ${Math.round(maxImageBytes / 1_000_000)} MB.`);
  }
  return readFile(path);
}

async function collectMarkdownSources() {
  const entries = await listEntries(privateDir);
  const sourceFiles = [];
  for (const entry of entries) {
    if (!entry.isFile() || entry.isSymbolicLink() || !EXPECTED_FILES.includes(entry.name)) continue;
    sourceFiles.push({
      name: entry.name,
      markdown: await readTextSource(join(privateDir, entry.name), `.private/${entry.name}`)
    });
  }
  return sourceFiles;
}

async function collectGuideBundles() {
  const entries = await listEntries(privateDir);
  const guides = [];
  for (const entry of entries) {
    if (!entry.isFile() || entry.isSymbolicLink() || !/^guide-.*\.json$/i.test(entry.name)) continue;
    guides.push(JSON.parse(await readTextSource(join(privateDir, entry.name), `.private/${entry.name}`)));
  }
  return guides;
}

async function collectImageSources() {
  const assets = [];
  async function walk(directory, relativePath = '') {
    const entries = await listEntries(directory);
    for (const entry of entries) {
      const nestedPath = join(directory, entry.name);
      const nestedRelative = join(relativePath, entry.name);
      if (entry.isSymbolicLink()) fail(`Image sources must not be symbolic links: ${nestedRelative}`);
      if (entry.isDirectory()) {
        await walk(nestedPath, nestedRelative);
        continue;
      }
      const extension = extname(entry.name).toLowerCase();
      if (!rasterExtensions.has(extension)) continue;
      const data = await readBinarySource(nestedPath, `.private/${nestedRelative}`);
      assets.push({
        fileName: entry.name,
        relativePath: nestedRelative,
        data,
        hash: createHash('sha256').update(data).digest('hex'),
        extension
      });
    }
  }
  await ensureRegularDirectory(join(privateDir, 'images'));
  await walk(join(privateDir, 'images'));
  return assets;
}

function assignReferences(images, markdownSources) {
  const byKey = new Map();
  for (const image of images) {
    const key = normalizeMatchKey(basename(image.fileName).slice(0, image.extension.length ? -image.extension.length : undefined));
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(image);
    image.references = [];
  }

  const candidates = [];
  for (const source of markdownSources) {
    for (const reference of decodeImageReferences(source.markdown)) {
      const key = referenceKey(reference);
      if (!key) continue;
      candidates.push({ reference, key });
    }
  }

  const missing = [];
  for (const candidate of candidates) {
    let matches = byKey.get(candidate.key) ?? [];
    if (!matches.length) {
      const number = candidate.key.match(/^(\d+)-(\d+)-/)?.[0];
      const player = candidate.key.includes('-player');
      if (number) matches = images.filter(image => {
        const key = normalizeMatchKey(image.fileName);
        return key.startsWith(number) && key.includes('-player') === player;
      });
    }
    if (!matches.length || new Set(matches.map(image => image.hash)).size !== 1) {
      missing.push(candidate.reference);
      continue;
    }
    const choice = matches[0];
    choice.references.push(candidate.reference);
  }
  return missing;
}

async function writeMediaFile(targetPath, data) {
  await writeFile(targetPath, data);
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length) fail(`Usage: node EveOfRuin/scripts/build-public.mjs`);

  await ensureRegularDirectory(privateDir);
  const sourceFiles = await collectMarkdownSources();
  const guides = await collectGuideBundles();
  const markdownSources = sourceFiles.filter(source => source.markdown.trim().length > 0);
  const sourcePack = buildPack(sourceFiles);
  const prepared = buildPreparationGuides(sourcePack.documents, sourcePack.statblocks);
  const chapterSix = prepared.chapters.find(chapter => chapter.file === '06-night-of-blue-fire.md');
  if (chapterSix) {
    prepared.chapters[prepared.chapters.indexOf(chapterSix)] = chapterSixGuidance(
      sourcePack.documents.find(document => document.filename === chapterSix.file), chapterSix);
  }
  const authoredFiles = new Set(guides.flatMap(guide => guide.chapters.map(chapter => chapter.file)));
  prepared.chapters = prepared.chapters.filter(chapter => !authoredFiles.has(chapter.file));
  const pack = validatePack(buildPack(sourceFiles, [prepared, ...guides]));

  const sourceImages = await collectImageSources();
  const missingReferences = assignReferences(sourceImages, markdownSources);
  const usedNames = new Map();
  const mediaFiles = new Map();
  const assets = sourceImages.map((image, index) => {
    const canonical = buildImageName(image.fileName, index + 1);
    const suffixCount = (usedNames.get(canonical) ?? 0) + 1;
    usedNames.set(canonical, suffixCount);
    const uniqueName = suffixCount === 1 ? canonical : `${canonical}-${suffixCount}`;
    const mediaName = `${image.hash}${image.extension}`;
    if (!mediaFiles.has(mediaName)) mediaFiles.set(mediaName, image.data);
    return {
      id: uniqueName,
      name: image.fileName,
      reference: '',
      references: [...new Set(image.references)].sort(),
      src: `./media/${mediaName}`
    };
  });

  validateAssets(assets);

  await mkdir(publicDataDir, { recursive: true });
  await mkdir(publicMediaDir, { recursive: true });

  for (const [fileName, data] of mediaFiles) {
    await writeMediaFile(join(publicMediaDir, fileName), data);
  }

  const publicCampaign = {
    format: 'eve-of-ruin-site',
    version: 1,
    pack,
    assets
  };
  const mediaCoverage = {
    format: 'eve-of-ruin-media-coverage',
    version: 1,
    counts: {
      documents: pack.documents.length,
      guides: pack.guides.chapters.length + pack.guides.sanctum.length + pack.guides.gaps.length,
      sourceImages: sourceImages.length,
      publicAssets: assets.length,
      uniqueMediaFiles: mediaFiles.size,
      referencedAssets: assets.filter(asset => asset.references.length > 0).length,
      unreferencedAssets: assets.filter(asset => asset.references.length === 0).length,
      missingReferences: missingReferences.length
    },
    missingReferences: [...new Set(missingReferences)].sort()
  };

  await writeFile(join(publicDataDir, 'campaign.json'), `${JSON.stringify(publicCampaign, null, 2)}\n`);
  await writeFile(join(publicDataDir, 'media-coverage.json'), `${JSON.stringify(mediaCoverage, null, 2)}\n`);

  console.log(`Built public campaign: ${pack.documents.length} documents, ${pack.statblocks.length} statblocks, ${assets.length} assets.`);
  console.log(`Media coverage: ${mediaCoverage.counts.referencedAssets} referenced, ${mediaCoverage.counts.unreferencedAssets} unreferenced, ${mediaCoverage.counts.missingReferences} missing references, ${mediaFiles.size} unique media files.`);
  if (!guides.length) console.warn('No authored guidance bundles were found. Source-cue preparation checklists are included.');
  for (const warning of pack.coverage.warnings) console.warn(`Warning: ${warning}`);
  if (mediaCoverage.missingReferences.length) {
    console.warn(`Unmatched image references: ${mediaCoverage.missingReferences.length}`);
  }
}

await main();

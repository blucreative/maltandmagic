import { createHash } from 'node:crypto';
import { readFile, readdir, lstat, realpath, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { buildPack, validatePack, EXPECTED_FILES } from '../model.mjs';

const privateDirectory = fileURLToPath(new URL('../.private/', import.meta.url));
const output = join(privateDirectory, 'campaign-pack.json');
const guideNames = ['guide-early.json', 'guide-late.json'];
const argumentsList = process.argv.slice(2);
if (argumentsList.some(argument => argument !== '--require-guides')) {
  throw new Error('Usage: node EveOfRuin/scripts/build-pack.mjs [--require-guides]. Output is always .private/campaign-pack.json.');
}

if ((await lstat(privateDirectory)).isSymbolicLink() || await realpath(privateDirectory) !== join(await realpath(dirname(privateDirectory)), '.private')) {
  throw new Error('The private source directory must not be a symbolic link.');
}
const entries = await readdir(privateDirectory, { withFileTypes: true });
const byName = new Map(entries.map(entry => [entry.name, entry]));
const missing = EXPECTED_FILES.filter(name => !byName.get(name)?.isFile());
if (missing.length) throw new Error(`Missing expected private source files: ${missing.join(', ')}. No pack written.`);

async function readPrivate(name) {
  const entry = byName.get(name);
  if (!entry?.isFile() || entry.isSymbolicLink()) throw new Error(`Private input must be a regular top-level file: ${name}.`);
  const path = join(privateDirectory, name);
  const info = await lstat(path);
  if (!info.isFile() || info.size > 10_000_000) throw new Error(`Private input is not a regular file or exceeds 10 MB: ${name}.`);
  return readFile(path, 'utf8');
}

const sourceFiles = [];
for (const entry of entries.filter(entry => /\.md$/i.test(entry.name)).sort((a, b) => a.name.localeCompare(b.name))) {
  sourceFiles.push({ name: entry.name, markdown: await readPrivate(entry.name) });
}
const guides = [];
const warnings = [];
for (const name of guideNames) {
  if (!byName.has(name)) {
    if (argumentsList.includes('--require-guides')) throw new Error(`Required guide missing: .private/${name}. No pack written.`);
    warnings.push(`Optional guide missing: ${name}. Prepared guidance is incomplete.`);
    continue;
  }
  const source = await readPrivate(name);
  try {
    guides.push(JSON.parse(source));
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
    throw new Error(`Cannot parse private guide ${name}: ${error.message}`, { cause: error });
  }
}
const pack = buildPack(sourceFiles, guides);
pack.coverage.warnings.push(...warnings);
pack.coverage.sources = pack.documents.map(document => ({
  filename: document.filename,
  characters: document.markdown.length,
  sha256: createHash('sha256').update(document.markdown, 'utf8').digest('hex')
}));
validatePack(pack);
if (byName.has('campaign-pack.json')) {
  const info = await lstat(output);
  if (!info.isFile() || info.isSymbolicLink() || info.nlink !== 1) throw new Error('Refusing to write through a linked or nonregular campaign-pack.json.');
}
await writeFile(output, `${JSON.stringify(pack, null, 2)}\n`, { mode: 0o600 });
console.log(`Wrote private campaign pack: ${pack.documents.length}/15 documents, ${pack.statblocks.length} complete statblocks, ${pack.guides.chapters.length} chapter guides.`);
console.log(`Output: ${output}`);
for (const warning of pack.coverage.warnings) console.warn(`Warning: ${warning}`);

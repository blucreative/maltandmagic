import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, writeFile, readFile, copyFile, readdir, rm } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const repository = fileURLToPath(new URL('../../', import.meta.url));
const publicFiles = [
  'index.html', 'portal.css', 'app.mjs', 'model.mjs', 'storage.mjs',
  'markdown.mjs', 'sw.js', 'vendor/marked.esm.js', 'vendor/LICENSE',
  'data/campaign.json', 'data/media-coverage.json', 'media/aa.png'
];

async function filesBelow(directory, root = directory) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...await filesBelow(path, root));
    else found.push(relative(root, path));
  }
  return found.sort();
}

test('Pages assembly publishes only allowlisted public assets and copies generated data/media', async context => {
  const fixture = join(repository, '.test-output', `deploy-${randomUUID()}`);
  context.after(() => rm(fixture, { recursive: true, force: true }));
  await mkdir(join(fixture, 'EveOfRuin/vendor'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/data'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/media'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/.private/nested'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/accidental-source'), { recursive: true });
  await mkdir(join(fixture, '.git'), { recursive: true });
  for (const file of ['index.html', 'EveOfRuin/index.html', 'EveOfRuin/portal.css', 'EveOfRuin/app.mjs', 'EveOfRuin/model.mjs', 'EveOfRuin/storage.mjs', 'EveOfRuin/markdown.mjs', 'EveOfRuin/sw.js', 'EveOfRuin/vendor/marked.esm.js', 'EveOfRuin/vendor/LICENSE']) {
    await copyFile(join(repository, file), join(fixture, file));
  }
  await writeFile(join(fixture, 'EveOfRuin/data/campaign.json'), '{"format":"eve-of-ruin-site","version":1,"pack":{"documents":[],"statblocks":[],"guides":{"chapters":[],"sanctum":[],"gaps":[]},"coverage":{"expected":15,"imported":0,"missing":[],"warnings":[]}},"assets":[]}');
  await writeFile(join(fixture, 'EveOfRuin/data/media-coverage.json'), '{"format":"eve-of-ruin-media-coverage","version":1,"counts":{"documents":0,"guides":0,"sourceImages":1,"publicAssets":1,"uniqueMediaFiles":1,"referencedAssets":1,"unreferencedAssets":0,"missingReferences":0},"missingReferences":[]}');
  await writeFile(join(fixture, 'EveOfRuin/media/aa.png'), 'PUBLIC_IMAGE');
  const privateFiles = [
    'EveOfRuin/.private/06-private.md',
    'EveOfRuin/.private/nested/guide.json',
    'EveOfRuin/campaign-pack.json',
    'EveOfRuin/stray-source.md',
    'EveOfRuin/accidental-source/chapter.md',
    'EveOfRuin/accidental-source/source.js'
  ];
  for (const file of privateFiles) await writeFile(join(fixture, file), 'PRIVATE_SOURCE_SENTINEL');
  await writeFile(join(fixture, 'index.html'), '<h1>Existing site remains</h1>');
  const workflow = await readFile(join(repository, '.github/workflows/deploy.yml'), 'utf8');
  const block = workflow.match(/- name: Assemble Pages site\s+run: \|\n([\s\S]*?)(?=\n      - name:)/);
  assert.ok(block, 'Pages assembly block must exist');
  const script = block[1].split('\n').map(line => line.replace(/^ {10}/, '')).join('\n');
  const result = spawnSync('bash', ['-e', '-c', script], { cwd: fixture, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(await filesBelow(join(fixture, 'site/EveOfRuin')), [...publicFiles].sort());
  assert.match(await readFile(join(fixture, 'site/index.html'), 'utf8'), /Existing site remains/);
  for (const file of publicFiles) {
    assert.doesNotMatch(await readFile(join(fixture, 'site/EveOfRuin', file), 'utf8'), /PRIVATE_SOURCE_SENTINEL/);
  }
});

test('offline cache and application code have no remote dependencies or adventure fetches', async () => {
  const worker = await readFile(join(repository, 'EveOfRuin/sw.js'), 'utf8');
  assert.doesNotMatch(worker, /\.private|campaign-pack|https?:\/\//);
  const app = await readFile(join(repository, 'EveOfRuin/app.mjs'), 'utf8');
  assert.match(app, /fetch\(\s*['"]\.\/data\/campaign\.json['"]\s*\)/);
  assert.doesNotMatch(app, /fetch\(\s*['"]https?:\/\//);
  for (const file of ['index.html', 'markdown.mjs', 'storage.mjs']) {
    const source = await readFile(join(repository, 'EveOfRuin', file), 'utf8');
    assert.doesNotMatch(source, /(?:src|href)=["']https?:\/\//);
    assert.doesNotMatch(source, /\bfetch\s*\(/);
  }
});

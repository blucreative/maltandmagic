import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, copyFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repository = fileURLToPath(new URL('../../', import.meta.url));
const publicFiles = [
  'index.html', 'portal.css', 'app.mjs', 'model.mjs', 'storage.mjs',
  'markdown.mjs', 'sw.js', 'vendor/marked.esm.js', 'vendor/LICENSE'
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

test('actual Pages assembly publishes only allowlisted portal assets, never Markdown or private data', async context => {
  const fixture = await mkdtemp(join(tmpdir(), 'eve-of-ruin-deploy-test-'));
  context.after(() => rm(fixture, { recursive: true, force: true }));
  await mkdir(join(fixture, 'EveOfRuin/vendor'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/.private/nested'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/accidental-source'), { recursive: true });
  await mkdir(join(fixture, '.git'), { recursive: true });
  for (const file of publicFiles) {
    await copyFile(join(repository, 'EveOfRuin', file), join(fixture, 'EveOfRuin', file));
  }
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
  for (const file of ['index.html', 'app.mjs', 'markdown.mjs', 'storage.mjs']) {
    const source = await readFile(join(repository, 'EveOfRuin', file), 'utf8');
    assert.doesNotMatch(source, /(?:src|href)=["']https?:\/\//);
    assert.doesNotMatch(source, /\bfetch\s*\(/);
  }
});

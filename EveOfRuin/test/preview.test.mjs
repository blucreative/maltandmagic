import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdir, writeFile, copyFile, rm, symlink } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

const repository = fileURLToPath(new URL('../../', import.meta.url));

test('preview binds locally and serves only allowlisted public files', async context => {
  const fixture = join(repository, '.test-output', `preview-${randomUUID()}`);
  context.after(() => rm(fixture, { recursive: true, force: true }));
  await mkdir(join(fixture, 'EveOfRuin/scripts'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/test'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/vendor'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/data'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/media'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/.private/nested'), { recursive: true });
  await mkdir(join(fixture, 'EveOfRuin/README'), { recursive: true });
  for (const file of ['index.html', 'EveOfRuin/index.html', 'EveOfRuin/portal.css', 'EveOfRuin/app.mjs', 'EveOfRuin/model.mjs', 'EveOfRuin/storage.mjs', 'EveOfRuin/markdown.mjs', 'EveOfRuin/sw.js', 'EveOfRuin/vendor/marked.esm.js', 'EveOfRuin/vendor/LICENSE']) {
    await copyFile(join(repository, file), join(fixture, file));
  }
  await copyFile(join(repository, 'EveOfRuin/scripts/preview.mjs'), join(fixture, 'EveOfRuin/scripts/preview.mjs'));
  await writeFile(join(fixture, 'EveOfRuin/data/campaign.json'), '{"format":"eve-of-ruin-site","version":1,"pack":{"documents":[],"statblocks":[],"guides":{"chapters":[],"sanctum":[],"gaps":[]},"coverage":{"expected":15,"imported":0,"missing":[],"warnings":[]}},"assets":[]}');
  await writeFile(join(fixture, 'EveOfRuin/data/media-coverage.json'), '{"format":"eve-of-ruin-media-coverage","version":1,"counts":{"documents":0,"guides":0,"sourceImages":1,"publicAssets":1,"uniqueMediaFiles":1,"referencedAssets":1,"unreferencedAssets":0,"missingReferences":0},"missingReferences":[]}');
  await writeFile(join(fixture, 'EveOfRuin/media/aa.png'), 'PUBLIC_IMAGE');
  await writeFile(join(fixture, 'EveOfRuin/.private/00-introduction.md'), 'PRIVATE_SOURCE_SENTINEL');
  await writeFile(join(fixture, 'EveOfRuin/.private/campaign-pack.json'), 'PRIVATE_SOURCE_SENTINEL');
  await writeFile(join(fixture, 'EveOfRuin/README.md'), 'PRIVATE_SOURCE_SENTINEL');
  await writeFile(join(fixture, 'EveOfRuin/scripts/build-public.mjs'), 'PRIVATE_SOURCE_SENTINEL');
  await writeFile(join(fixture, 'EveOfRuin/test/preview.test.mjs'), 'PRIVATE_SOURCE_SENTINEL');
  await symlink('../media/aa.png', join(fixture, 'EveOfRuin/media/linked.png'));
  const reservation = createServer();
  await new Promise(resolve => reservation.listen(0, '127.0.0.1', resolve));
  const port = reservation.address().port;
  await new Promise(resolve => reservation.close(resolve));
  const child = spawn(process.execPath, [join(fixture, 'EveOfRuin/scripts/preview.mjs')], {
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  context.after(() => {
    if (child.exitCode === null) child.kill('SIGTERM');
  });
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Preview server did not start.')), 5000);
    child.stdout.on('data', chunk => {
      if (chunk.toString().includes('Public-app-only preview:')) {
        clearTimeout(timer);
        resolve();
      }
    });
    child.once('error', failure => {
      clearTimeout(timer);
      reject(failure);
    });
    child.once('exit', code => {
      clearTimeout(timer);
      reject(new Error(`Preview server exited early with ${code}.`));
    });
  });
  const base = `http://127.0.0.1:${port}`;
  assert.equal((await fetch(`${base}/EveOfRuin/`)).status, 200);
  assert.equal((await fetch(`${base}/EveOfRuin/portal.css`)).headers.get('content-type'), 'text/css; charset=utf-8');
  assert.equal((await fetch(`${base}/EveOfRuin/data/campaign.json`)).headers.get('content-type'), 'application/json; charset=utf-8');
  assert.equal((await fetch(`${base}/EveOfRuin/media/aa.png`)).status, 200);
  for (const path of [
    '/EveOfRuin/.private/00-introduction.md', '/EveOfRuin/.private/campaign-pack.json',
    '/EveOfRuin/README.md', '/EveOfRuin/scripts/build-public.mjs',
    '/EveOfRuin/test/preview.test.mjs', '/.git/config',
    '/DnD/index.html', '/EveOfRuin/%2e%2e/.git/config',
    '/EveOfRuin/media/linked.png'
  ]) assert.equal((await fetch(`${base}${path}`)).status, 404, path);
  assert.equal((await fetch(`${base}/EveOfRuin/index.html`, { method: 'POST' })).status, 404);
});

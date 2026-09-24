import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';

test('preview binds locally and never exposes the repository or private inputs', async context => {
  const reservation = createServer();
  await new Promise(resolve => reservation.listen(0, '127.0.0.1', resolve));
  const port = reservation.address().port;
  await new Promise(resolve => reservation.close(resolve));
  const child = spawn(process.execPath, [new URL('../scripts/preview.mjs', import.meta.url).pathname], {
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
  for (const path of [
    '/EveOfRuin/.private/00-introduction.md', '/EveOfRuin/.private/campaign-pack.json',
    '/EveOfRuin/README.md', '/EveOfRuin/scripts/build-pack.mjs',
    '/EveOfRuin/test/preview.test.mjs', '/.git/config',
    '/DnD/index.html', '/EveOfRuin/%2e%2e/.git/config'
  ]) assert.equal((await fetch(`${base}${path}`)).status, 404, path);
  assert.equal((await fetch(`${base}/EveOfRuin/index.html`, { method: 'POST' })).status, 404);
});

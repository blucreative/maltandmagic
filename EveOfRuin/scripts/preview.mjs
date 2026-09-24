import { createServer } from 'node:http';
import { lstat, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicFiles = new Set([
  'index.html', 'portal.css', 'app.mjs', 'model.mjs', 'storage.mjs',
  'markdown.mjs', 'sw.js', 'vendor/marked.esm.js', 'vendor/LICENSE'
]);
const publicDataFiles = new Set(['data/campaign.json', 'data/media-coverage.json']);
const publicMedia = /^media\/[A-Za-z0-9_-]+\.(?:png|jpe?g|webp)$/;
const types = {
  html: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  mjs: 'text/javascript; charset=utf-8',
  js: 'text/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8'
};
const port = Number(process.env.PORT || 8769);

if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be an integer from 1 to 65535.');

function servedPath(pathname) {
  if (pathname === '/' || pathname === '/EveOfRuin') return null;
  if (pathname === '/EveOfRuin/' || pathname === '/EveOfRuin/index.html') return 'index.html';
  if (!pathname.startsWith('/EveOfRuin/')) return null;
  const relative = pathname.slice('/EveOfRuin/'.length);
  if (publicFiles.has(relative) || publicDataFiles.has(relative) || publicMedia.test(relative)) return relative;
  return null;
}

async function readPublicFile(filename) {
  const absolute = join(root, filename);
  const stat = await lstat(absolute).catch(() => null);
  if (!stat || !stat.isFile() || stat.isSymbolicLink()) return null;
  return readFile(absolute);
}

const server = createServer(async (request, response) => {
  const rawPath = request.url.split('?')[0];
  let decodedPath = rawPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found. Only public portal app assets are served.');
    return;
  }
  if (/(^|\/)\.\.(\/|$)/.test(decodedPath)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found. Only public portal app assets are served.');
    return;
  }
  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (pathname === '/') {
    response.writeHead(302, { Location: '/EveOfRuin/' });
    response.end();
    return;
  }
  if (pathname === '/EveOfRuin') {
    response.writeHead(302, { Location: '/EveOfRuin/' });
    response.end();
    return;
  }
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found. Only public portal app assets are served.');
    return;
  }
  const filename = servedPath(pathname);
  if (!filename) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found. Only public portal app assets are served.');
    return;
  }
  try {
    const content = await readPublicFile(filename);
    if (!content) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found. Only public portal app assets are served.');
      return;
    }
    response.writeHead(200, {
      'Content-Type': types[filename.split('.').pop()] || 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer'
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (failure) {
    console.error(`Cannot serve ${filename}: ${failure.message}`);
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('A required portal app asset could not be read.');
  }
});

server.on('error', error => {
  console.error(`Preview server failed: ${error.message}`);
  process.exitCode = 1;
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Public-app-only preview: http://127.0.0.1:${port}/EveOfRuin/`);
  console.log('Private source files are never served. The published adventure lives in data/campaign.json and media/.');
});

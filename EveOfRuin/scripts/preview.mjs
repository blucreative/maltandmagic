import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const files = new Set([
  'index.html', 'portal.css', 'app.mjs', 'model.mjs', 'storage.mjs',
  'markdown.mjs', 'sw.js', 'vendor/marked.esm.js', 'vendor/LICENSE'
]);
const types = { html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8', mjs: 'text/javascript; charset=utf-8', js: 'text/javascript; charset=utf-8' };
const port = Number(process.env.PORT || 8769);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PORT must be an integer from 1 to 65535.');

const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (pathname === '/') {
    response.writeHead(302, { Location: '/EveOfRuin/' });
    response.end();
    return;
  }
  const filename = pathname.startsWith('/EveOfRuin/') ? pathname.slice('/EveOfRuin/'.length) || 'index.html' : null;
  if (!files.has(filename) || !['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found. Only public portal app assets are served.');
    return;
  }
  try {
    const content = await readFile(new URL(filename, root));
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
  console.log('Private source files and packs are never served. Import the private pack through the browser file picker.');
});

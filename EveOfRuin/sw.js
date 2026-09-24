const CACHE = 'eve-of-ruin-shell-v1';
const FILES = [
  './', './index.html', './portal.css', './app.mjs', './model.mjs',
  './storage.mjs', './markdown.mjs', './vendor/marked.esm.js'
];
const urls = new Set(FILES.map(path => new URL(path, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('eve-of-ruin-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || !urls.has(event.request.url)) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch (failure) {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      throw failure;
    }
  }));
});

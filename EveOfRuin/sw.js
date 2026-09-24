const CACHE = 'eve-of-ruin-shell-v3';
const FILES = [
  './', './index.html', './portal.css', './app.mjs', './model.mjs',
  './storage.mjs', './markdown.mjs', './vendor/marked.esm.js', './data/campaign.json'
];
const urls = new Set(FILES.map(path => new URL(path, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('eve-of-ruin-shell-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const requestURL = new URL(event.request.url);
  requestURL.hash = '';
  const mediaRoot = new URL('./media/', self.registration.scope).href;
  const isMedia = requestURL.href.startsWith(mediaRoot) && /\.(png|jpe?g|webp)$/.test(requestURL.href);
  if (event.request.method !== 'GET' || (!urls.has(requestURL.href) && !isMedia)) return;
  event.respondWith(caches.open(CACHE).then(async cache => {
    try {
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch (failure) {
      const cached = await cache.match(requestURL.href);
      if (cached) return cached;
      throw failure;
    }
  }));
});

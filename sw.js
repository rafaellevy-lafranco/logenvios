// v5 - no cache, always network
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  // Always go to network, no caching
  e.respondWith(fetch(e.request).catch(() => new Response('Offline - abrí Chrome para reconectar', {headers:{'Content-Type':'text/plain'}})));
});

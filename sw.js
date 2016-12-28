const cacheName = 'v1'

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => 
    cache.addAll([
        '/',
        '/breathe.css',
        '/manifest.json',
        'images/android-chrome-192x192.png',
        'images/android-chrome-512x512.png',
        'images/apple-touch-icon.png',
        'images/browserconfig.xml',
        'images/favicon-16x16.png',
        'images/favicon-32x32.png',
        'images/favicon.ico',
        'images/mstile-150x150.png',
        'images/safari-pinned-tab.svg'
      ]).then(() => self.skipWaiting())
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
    .then(cache => cache.match(event.request))
    .then(res => res || fetch(event.request))
  );
});
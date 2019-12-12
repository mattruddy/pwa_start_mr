/*var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/tones',
  '/comments',
  'app.js',
  'manifest.json',
  'views/index.ejs',
  'views/tones.ejs',
  'views/comments.ejs',
  'css/style.css',
  'main.js'
];
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    console.log("installing");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});


/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
*/

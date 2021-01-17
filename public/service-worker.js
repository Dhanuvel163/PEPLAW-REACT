const PRECACHE = 'precache-';
const RUNTIME = 'runtime';
const PRECACHE_URLS = [
  './',
  '/offline.html',
  '/assets/add1.svg',
  '/assets/edit.svg',
  '/assets/home1.webp',
  '/assets/home2.webp',
  '/assets/home3.webp',
  '/assets/home4.webp',
  '/assets/homecardbg.webp',
  '/assets/lawlogo64.webp',
  '/assets/lawlogo192.webp',
  '/assets/lawlogo512.webp',
  '/assets/lawyersignup.svg',
  '/assets/loginlawyer.svg',
  '/assets/userlogin.svg',
  '/assets/usersignup.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      }).catch(()=>{
        if(event.request.mode == 'navigate'){
          return caches.match('/offline.html')
        }
      })
    );
  }
});

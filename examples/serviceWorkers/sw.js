const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'about.html',
    '/demo/serviceWorkers/css/main.css',
    '/demo/serviceWorkers/js/main.js'
]


// call install Event
self.addEventListener('install', e => {
    console.log('Service Worker installed');

    e.waitUntil(
        caches
          .open(cacheName)
          .then(cache => {
              console.log('Service Worker: Cache Files')
              cache.addAll(cacheAssets);
          })
          .then( () => self.skipWaiting())
    )
})

// call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker activated')

    // remove  old caches
    e.waitUntil(
        caches.keys().then(cacheNames =>{
            return Promise.all(
                cacheNames.map(cache =>{
                    if(cache !== cacheName){
                        console.log('Services Worker Clear Old Cache')
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// call detch Event

self.addEventListener('fetch', e => {
    console.log('Services Woker ; fetch')

    e.respondWith(
        fetch( e.request)
           .catch( 
                () => caches.match(e.request)
            )
    )
});
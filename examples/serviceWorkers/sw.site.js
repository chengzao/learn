const cacheName = 'v2';

// call install Event
self.addEventListener('install', e => {
    console.log('Service Worker installed');

})

// call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker activated')

    // remove  old caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Services Worker Clear Old Cache')
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

// call detch Event
// self.addEventListener('fetch', e => {
//     e.respondWith(
//         fetch(e.request,{credentials: 'include'})
//             .then(res => {
//                 console.log('res',res)
//                 const resClone = res.clone();
//                 caches
//                     .open(cacheName)
//                     .then(cache => {
//                       cache.put(e.request, resClone);
//                 });
//                 return res;
//         }).catch(err => caches.match(e.request).then(res => res))
//     );
// });

self.addEventListener('fetch', function(event) {
    event.respondWith(
      // 该方法查询请求然后返回 Service Worker 创建的任何缓存数据。
      caches.match(event.request)
        .then(function(response) {
          // 若有缓存，则返回
          if (response) {
            return response;
          }
  
          // 复制请求。请求是一个流且只能被使用一次。因为之前已经通过缓存使用过一次了，所以为了在浏览器中使用 fetch，需要复制下该请求。
          var fetchRequest = event.request.clone();
          
        //   console.log(fetchRequest)

          // 没有找到缓存。所以我们需要执行 fetch 以发起请求并返回请求数据。
          return fetch(fetchRequest).then(
            function(response) {
              // 检测返回数据是否有效
              if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
  
              // 复制返回数据，因为它也是流。因为我们想要浏览器和缓存一样使用返回数据，所以必须复制它。这样就有两个流
              var responseToCache = response.clone();
  
              caches.open(cacheName)
                .then(function(cache) {
                  // 把请求添加到缓存中以备之后的查询用
                  cache.put(event.request, responseToCache);
                });
  
              return response;
            }
          );
        })
      );
  });
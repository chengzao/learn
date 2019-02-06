

if('serviceWorker' in navigator){
    // console.log('service worker supported')

    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/demo/serviceWorkers/sw.site.js')
            .then(reg => console.log('Service Worker : Registered'))
            .catch( err => console.log(`Service Worker : Error ${err}`))
    },false)
}
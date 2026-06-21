const CACHE_NAME = "pwa-cache-v1";

const BASE = "https://deyvson-paulino.github.io/Pix-premiado-KEY-mw400zau3-1781973836498/";
const urlsToCache = [
    BASE,
    BASE + "index.html",
    BASE + "home.html",
    BASE + "login.html",
    BASE + "manifest.json",
    BASE + "script.js",
    BASE + "css/style.css",
    BASE + "js/array.js",
    BASE + "pix-premiado.html",
    
    // imagens
    //BASE + "screens/Sem título (7).png",
    
    
    // videos
    BASE + "v_login.mp4",

    // ícones
    BASE + "icon-192.png",
    BASE + "icon-512.png"
];

// INSTALL
self.addEventListener("install", event => {
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.all(
                urlsToCache.map(url =>
                    cache.add(url).catch(err => {
                        console.warn("Erro ao cachear:", url);
                    })
                )
            );
        })
    );
});

// ACTIVATE
self.addEventListener("activate", event => {
    self.clients.claim();

    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});

// FETCH (cache first + fallback)
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return (
                response ||
                fetch(event.request).catch(() => {
                    return caches.match(BASE + "index.html");
                })
            );
        })
    );
});

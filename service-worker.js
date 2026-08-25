const CACHE_NAME = "pwa-pix-premiado-24-08-2026_3-cache-v1";

const BASE = "/Pix-premiado-KEY-mw400zau3-1781973836498/";
const urlsToCache = [
    BASE,
    BASE + "index.html",
    BASE + "pix-premiado.html",
    BASE + "login.html",
    BASE + "gerar-bola-da-sorte.html",
    BASE + "manifest.json",
    
    // css
    BASE + "script.js",
    BASE + "js/array.js",
    BASE + "js/cod-sorteio.js",
    BASE + "js/hacker.js",
    BASE + "js/maior-cota.js",
    
    // css
    BASE + "style.css",
    BASE + "css/style.css",
    BASE + "css/u-style.css",
    
    // imagens
    BASE + "image/13256919.jpg",
    BASE + "image/4034599.png",
    BASE + "image/Adobe_Express_20250323_0749370_1.png",
    BASE + "image/jogo-6-6-1130x580.jpg",
    
    BASE + "image/ouro_1346430_1.png",
    BASE + "image/qr-code-pix.jpg",
    BASE + "image/sorteio-100-construcao-plataforma-19-marco_2025-000000000001.jpeg-1024x574.webp",
    BASE + "image/9.png",
    BASE + "image/9.png",
    
    // imagens/comprar
    BASE + "image/como_comprar/compra-1.png",
    BASE + "image/como_comprar/compra-2.png",
    BASE + "image/como_comprar/compra-3.png",
    BASE + "image/como_comprar/compra-4.png",
    BASE + "image/como_comprar/compra-5.png",
    BASE + "image/como_comprar/compra-6.png",
    BASE + "image/como_comprar/compra-7.png",
    BASE + "image/como_comprar/compra-8.png",
    
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

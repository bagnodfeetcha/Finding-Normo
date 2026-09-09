const CACHE_NAME = "finding-normo-v46";

const APP_FILES = [
  "./index.html",
  "./style.css",
  "./game.js",
  "./manifest.webmanifest",
  "./background.png",
  "./background-mobile.png",
  "./abschlussbildschirm-desktop.png",
  "./abschlussbildschirm-mobile.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES))
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  // Webseiten-Aufrufe immer zuerst frisch aus dem Netz laden
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put("./index.html", copy);
          });

          return response;
        })
        .catch(() => caches.match("./index.html"))
    );

    return;
  }

  // Andere Dateien weiterhin aus dem Cache laden
  event.respondWith(
    caches.match(event.request).then(
      cached =>
        cached ||
        fetch(event.request).then(response => {
          const copy = response.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, copy);
          });

          return response;
        })
    )
  );
});

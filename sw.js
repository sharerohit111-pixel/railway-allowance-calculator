const CACHE = "railway-allowance-v3";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", (e) => {
  self.skipWaiting();

  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method === "GET") {
    e.respondWith(
      caches.match(e.request).then((cached) =>
        cached ||
        fetch(e.request)
          .then((response) => {
            const copy = response.clone();
            caches.open(CACHE).then((cache) =>
              cache.put(e.request, copy)
            );
            return response;
          })
          .catch(() => caches.match("./index.html"))
      )
    );
  }
});

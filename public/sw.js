self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("pediatria-cache").then((cache) => {
      return cache.addAll(["/", "/protocolos", "/calculadoras"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

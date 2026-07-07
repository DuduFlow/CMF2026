/* CMF 2026 手冊離線快取
   核心 shell 先快取，圖片採 stale-while-revalidate。
   改版時把 VERSION +1，舊快取會自動清掉。 */
const VERSION = "cmf2026-v1";
const CORE = [
  "./",
  "index.html",
  "assets/css/styles.css",
  "assets/js/app.js",
  "assets/js/train-data.js",
  "assets/js/latest-data.js",
  "site.webmanifest",
  "assets/images/user-src/logo-cmf-official.png",
  "assets/images/user-src/cover-jinan-mobile.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  // 外部資源（如 Google Fonts）：網路優先、失敗吃快取、再失敗放棄。
  if (url.origin !== location.origin) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // 同源：快取優先（stale-while-revalidate），確保離線可用。
  event.respondWith(
    caches.match(request).then((cached) => {
      const refresh = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || refresh;
    })
  );
});

/* CMF 2026 手冊離線快取
   HTML / CSS / JS：網路優先（有網路永遠拿最新版，離線才退回快取）
   圖片：快取優先（stale-while-revalidate，省流量）
   改版時把 VERSION +1，舊快取會自動清掉。 */
const VERSION = "cmf2026-v2";
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

const putCache = (request, response) => {
  const copy = response.clone();
  caches.open(VERSION).then((cache) => cache.put(request, copy));
};

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  const isImage = /\.(png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);

  // 圖片與外部資源（如字體）：快取優先，背景更新
  if (isImage || url.origin !== location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const refresh = fetch(request)
          .then((response) => {
            if (response && response.ok) putCache(request, response);
            return response;
          })
          .catch(() => cached);
        return cached || refresh;
      })
    );
    return;
  }

  // HTML / CSS / JS / 資料：網路優先，離線才用快取
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.ok) putCache(request, response);
        return response;
      })
      .catch(() =>
        caches.match(request).then((cached) => cached || caches.match("index.html"))
      )
  );
});

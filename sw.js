/* CMF 2026 精簡上傳版離線快取
   只快取本版網頁實際需要的檔案，避免弱網路上傳/安裝失敗。 */
const VERSION = "cmf2026-cn-v20-20260718-note4";
const CORE = [
  "./",
  "index.html",
  "learning-notes.html",
  "learning-notes.html?v=20260718-9",
  "notes/d5-01-baishidai-yinye.html",
  "notes/d5-02-zhangyifan.html",
  "notes/d5-03-chudongdong.html",
  "notes/d5-04-yuqiaoqin.html",
  "assets/css/styles.css",
  "assets/js/app.js",
  "assets/js/train-data.js",
  "assets/js/latest-data.js",
  "site.webmanifest",
  "browserconfig.xml",
  "favicon.ico",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "apple-touch-icon.png",
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "mstile-150x150.png",
  "assets/images/user-src/logo-cmf-official.png",
  "assets/images/user-src/cover-jinan-mobile.jpeg",
  "assets/images/user-src/day-travel-qingdao.jpeg",
  "assets/images/user-src/qingdao-beer-museum.jpeg",
  "assets/images/user-src/sight-taishan-peak.jpeg",
  "assets/images/user-src/sight-daming-chaoran.jpeg",
  "assets/images/user-src/hotel-jinan-meiyue.jpeg",
  "assets/images/user-src/shop-rsun-plaza.jpeg",
  "assets/images/user-src/shop-parc66.jpeg",
  "assets/images/user-src/airport-travel.jpeg",
  "assets/images/user-src/hotel-qingdao-crowne.jpeg",
  "assets/images/user-src/food-huifengyuan.jpeg",
  "assets/images/user-src/food-shenqi-hotel.jpeg",
  "assets/images/user-src/food-minghu-ju.jpeg",
  "assets/images/user-src/food-huanlian-night-market.jpeg",
  "assets/images/user-src/food-grand-metro.jpeg",
  "assets/images/user-src/sight-taishan.jpeg",
  "assets/images/user-src/sight-taishan-gates.jpeg",
  "assets/images/user-src/sight-baotu-spring.jpeg",
  "assets/images/user-src/sight-wulongtan.jpeg",
  "assets/images/user-src/sight-furong-street.jpeg",
  "assets/images/user-src/sight-qushuiting.jpeg",
  "assets/images/notes/d5-03/customer-sources.jpg",
  "assets/images/notes/d5-03/sales-flow.jpg",
  "assets/images/notes/d5-04/client-system.jpg",
  "assets/images/notes/d5-04/wealth-pyramid.jpg",
  "assets/images/notes/d5-04/eight-risks.jpg",
  "assets/images/notes/d5-04/service-dimensions.jpg",
  "assets/images/notes/d5-04/talent-reasons.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("cmf2026-cn-") && key !== VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

const shouldCache = (request) => {
  if (request.method !== "GET") return false;
  const url = new URL(request.url);
  return url.origin === self.location.origin;
};

const putCache = async (request, response) => {
  if (!shouldCache(request) || !response || !response.ok) return;
  const cache = await caches.open(VERSION);
  cache.put(request, response.clone());
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (!shouldCache(request)) return;

  const url = new URL(request.url);
  const isImage = /\.(png|jpe?g|webp|gif|svg|ico)$/i.test(url.pathname);

  if (isImage) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const refresh = fetch(request)
          .then((response) => {
            putCache(request, response);
            return response;
          })
          .catch(() => cached);
        return cached || refresh;
      })
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        putCache(request, response);
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || caches.match("index.html")))
  );
});

/* CMF 2026 手冊離線快取
   中國大陸穩定版：核心檔案與全部本機圖片預先快取。
   HTML / CSS / JS：網路優先（有網路永遠拿最新版，離線才退回快取）
   圖片：快取優先（stale-while-revalidate，省流量）
   改版時把 VERSION +1，舊快取會自動清掉。 */
const VERSION = "cmf2026-cn-v7-20260714-number-fix";
const CORE = [
  "./",
  "index.html",
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
  "data/濟南房號_總表_吃飯桌次更新.xlsx",
  "data/濟南房號_總表_回程車位更新.xlsx",
  "data/濟南房號_總表_桌次車次更新完整版.xlsx",
  "data/濟南房號_總表_桌次車次更新完整版_質感排版.xlsx",
  "data/濟南房號_總表_桌次車次更新完整版_分頁優化.xlsx",
  "data/濟南房號_總表_桌次車次房號更新完整版.xlsx",
  "data/濟南房號_總表_桌次車次房號更新完整版_姓名校正版.xlsx",
  "data/濟南房號_總表_桌次車次房號更新完整版_編號校正版.xlsx",
  "assets/images/user-src/airport-travel.jpeg",
  "assets/images/user-src/android-chrome-192x192.png",
  "assets/images/user-src/android-chrome-512x512.png",
  "assets/images/user-src/apple-touch-icon.png",
  "assets/images/user-src/cover-jinan-mobile.jpeg",
  "assets/images/user-src/day-travel-qingdao.jpeg",
  "assets/images/user-src/favicon-16x16.png",
  "assets/images/user-src/favicon-32.png",
  "assets/images/user-src/favicon-32x32.png",
  "assets/images/user-src/favicon-48x48.png",
  "assets/images/user-src/favicon.ico",
  "assets/images/user-src/favicon.png",
  "assets/images/user-src/food-grand-metro.jpeg",
  "assets/images/user-src/food-huanlian-night-market.jpeg",
  "assets/images/user-src/food-huifengyuan.jpeg",
  "assets/images/user-src/food-minghu-ju.jpeg",
  "assets/images/user-src/food-shenqi-hotel.jpeg",
  "assets/images/user-src/header-cmf-jinan.png",
  "assets/images/user-src/hotel-jinan-meiyue.jpeg",
  "assets/images/user-src/hotel-qingdao-crowne.jpeg",
  "assets/images/user-src/icon-192.png",
  "assets/images/user-src/icon-512.png",
  "assets/images/user-src/logo-cmf-cropped.png",
  "assets/images/user-src/logo-cmf-official.png",
  "assets/images/user-src/logo-cmf.png",
  "assets/images/user-src/mstile-150x150.png",
  "assets/images/user-src/qingdao-beer-museum.jpeg",
  "assets/images/user-src/shop-parc66.jpeg",
  "assets/images/user-src/shop-rsun-plaza.jpeg",
  "assets/images/user-src/sight-baotu-spring.jpeg",
  "assets/images/user-src/sight-daming-chaoran.jpeg",
  "assets/images/user-src/sight-furong-street.jpeg",
  "assets/images/user-src/sight-qushuiting.jpeg",
  "assets/images/user-src/sight-taishan-gates.jpeg",
  "assets/images/user-src/sight-taishan-peak.jpeg",
  "assets/images/user-src/sight-taishan.jpeg",
  "assets/images/user-src/sight-wulongtan.jpeg"
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

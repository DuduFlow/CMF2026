2026 CMF 濟南之旅網頁手冊｜精簡上傳版

打開 index.html 即可預覽。
整個資料夾可以直接上傳到 GitHub Pages 或靜態主機。

這一版是弱網路用的精簡資料夾：
- 保留主頁、查詢、行程、課程、景點/餐廳、學習筆記。
- 保留前三堂已整理筆記：
  1. 百歲時代｜尹燁
  2. 自媒體事件營銷｜張一凡
  3. 壽險常青樹｜褚東東
- 保留網頁實際會用到的圖片。
- 保留 PWA / Service Worker，可支援離線快取。
- 不放歷史 Excel 檔與未使用素材，降低上傳大小。

檔案結構：
- index.html：主手冊入口
- learning-notes.html：學習筆記入口
- notes/：各堂課獨立筆記頁
- sw.js：精簡版離線快取清單
- assets/css/styles.css：版面與手機 app 介面樣式
- assets/js/app.js：分頁、搜尋、篩選、課程與查詢介面
- assets/js/train-data.js：高鐵去回程資料
- assets/js/latest-data.js：用餐桌次、晚宴桌次、遊覽車次、房號等查詢資料
- assets/images/user-src/：行程、景點、餐廳、住宿圖片
- assets/images/notes/：課程筆記圖片素材

上傳提醒：
- 請整個 CMF2026-main-5-day1-note3-lite 資料夾內的檔案一起上傳。
- 第一次開啟仍需要網路；開過一次後，Service Worker 會快取主要頁面與圖片。
- 若手機看不到最新版，請重新整理一次，或刪除舊的主畫面捷徑後重新加入。

2026 CMF 濟南之旅網頁手冊

打開 index.html 即可預覽。
整個資料夾可以直接上傳到 GitHub Pages 或靜態主機。

檔案結構：
- index.html：頁面內容
- sw.js：Service Worker。HTML/CSS/JS 網路優先（更新即時可見）、圖片離線快取；改版時把 VERSION +1
- assets/css/styles.css：版面與手機 app 介面樣式
- assets/js/app.js：分頁、搜尋、篩選、房間查詢
- assets/js/train-data.js：由 Excel 匯入的 G1074 車廂與座位資料，並包含回程 G5597 高鐵班次
- assets/js/latest-data.js：由最新版 Excel 匯入的用餐桌次與遊覽車次資料
- assets/images/：正式使用的網頁圖片素材
- assets/images/user-src/：封面、行程、景點、餐廳、住宿圖片

內容依據：
- CMF濟南手冊（缺課表）.pdf
- 使用者提供之濟南、青島、泰山、住宿、餐飲與航班圖片素材
- data/濟南房號_總表_吃飯桌次更新.xlsx（最新版 85 人房號、桌次、晚宴、高鐵座位與遊覽車次）

備註：
- 首頁封面使用使用者提供的直式手機封面 cover-jinan-mobile.jpeg
- 手冊抽文中 Day 4 / Day 8 曾出現 2025，網頁已依整體行程統一修正為 2026。
- 圖片已轉為較輕量的 JPG，以利手機與網頁載入。
正式版更新：2026.07.13 桌次與遊覽車次已更新；data 資料夾內 Excel 已改為質感排版版。
正式版更新：2026.07.14 依「分房表」更新青島金水皇冠假日飯店房號（85 人／44 間），已同步至：
- data/濟南房號_總表_青島房號更新.xlsx（總表 F 欄；房間分頁公式連動）
- assets/js/app.js（每人 qingdaoRoom；房間查詢頁顯示青島房號與室友）
- sw.js VERSION 改為 v5，確保手機立即拿到新資料
濟南房號分房表尚未提供，維持「待補」。（提醒：分房表第 2 頁濟南欄位標題為「濟南潤華皇冠假日酒店」，與現行手冊之「美悅雲禧飯店」不同，請確認實際入住飯店。）

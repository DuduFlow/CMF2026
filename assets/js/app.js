    const image = {
      d1: "assets/images/user-src/day-travel-qingdao.jpeg",
      d2: "assets/images/user-src/qingdao-beer-museum.jpeg",
      d3: "assets/images/user-src/sight-taishan-peak.jpeg",
      d4: "assets/images/user-src/sight-daming-chaoran.jpeg",
      d5: "assets/images/user-src/hotel-jinan-meiyue.jpeg",
      d6: "assets/images/user-src/shop-rsun-plaza.jpeg",
      d7: "assets/images/user-src/shop-parc66.jpeg",
      d8: "assets/images/user-src/airport-travel.jpeg",
      hQingdao: "assets/images/user-src/hotel-qingdao-crowne.jpeg",
      hJinan: "assets/images/user-src/hotel-jinan-meiyue.jpeg",
      huifeng: "assets/images/user-src/food-huifengyuan.jpeg",
      taishanFood: "assets/images/user-src/food-shenqi-hotel.jpeg",
      minghuFood: "assets/images/user-src/food-minghu-ju.jpeg",
      night: "assets/images/user-src/food-huanlian-night-market.jpeg",
      weijing: "assets/images/user-src/food-grand-metro.jpeg",
      beer: "assets/images/user-src/qingdao-beer-museum.jpeg",
      taishan: "assets/images/user-src/sight-taishan.jpeg",
      taishanGate: "assets/images/user-src/sight-taishan-gates.jpeg",
      taishanPeak: "assets/images/user-src/sight-taishan-peak.jpeg",
      baotu: "assets/images/user-src/sight-baotu-spring.jpeg",
      wulong: "assets/images/user-src/sight-wulongtan.jpeg",
      furong: "assets/images/user-src/sight-furong-street.jpeg",
      qushui: "assets/images/user-src/sight-qushuiting.jpeg",
      daming: "assets/images/user-src/sight-daming-chaoran.jpeg",
      hongyang: "assets/images/user-src/shop-rsun-plaza.jpeg",
      henglong: "assets/images/user-src/shop-parc66.jpeg"
    };

    const tripStart = new Date(2026, 6, 14);
    const departureTime = new Date(2026, 6, 14, 16, 45);
    const tripEnd = new Date(2026, 6, 21);

    const days = [
      { id: "d1", no: "DAY 1", date: "2026.07.14（二）", key: "2026-07-14", title: "台北 → 青島", tone: "抵達青島，入住飯店。", img: image.d1, tags: ["move"], items: [
        ["16:45-19:15", "山東航空 SC4086 台北 → 青島", "桃園 T2 出發，抵達青島膠東機場。"],
        ["傍晚", "接駁入住青島金水皇冠假日飯店", "專車接駁。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d2", no: "DAY 2", date: "2026.07.15（三）", key: "2026-07-15", title: "青島 → 濟南", tone: "青島啤酒博物館、高鐵前往濟南。", img: image.d2, tags: ["move", "tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "青島啤酒博物館", "1903 年舊啤酒廠原址。"],
        ["午餐", "匯豐苑（中山路大鮑島店）", "膠東海鮮與經典魯菜。"],
        ["14:37-17:20", "高鐵 G1074 青島 → 濟南", "抵達濟南，入住飯店。"],
        ["晚餐", "環聯夜市自理", "小吃、燒烤。"]
      ]},
      { id: "d3", no: "DAY 3", date: "2026.07.16（四）", key: "2026-07-16", title: "泰山", tone: "中天門、南天門、天街、玉皇頂。", img: image.d3, tags: ["tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "泰山風景區、中天門", "泰山半山腰重要節點。"],
        ["午餐", "神憩賓館餐廳", "玉皇頂附近用餐。"],
        ["下午", "南天門、天街、碧霞祠、玉皇頂", "泰山山頂路線。"],
        ["晚餐", "晚餐自理", ""]
      ]},
      { id: "d4", no: "DAY 4", date: "2026.07.17（五）", key: "2026-07-17", title: "濟南市區", tone: "趵突泉、大明湖、超然樓。", img: image.d4, tags: ["tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "趵突泉、五龍潭公園、芙蓉街", "泉城代表景點。"],
        ["午餐", "明湖居魯菜館", "魯菜。"],
        ["下午", "曲水亭街、大明湖、超然樓", "老城、水巷、夜景。"],
        ["晚宴", "山東維景大酒店 CMF 晚宴", ""]
      ]},
      { id: "d5", no: "DAY 5", date: "2026.07.18（六）", key: "2026-07-18", title: "CMF DAY 1", tone: "開篇：探祕保險新生態。", img: image.d5, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-18:00", "山東國際博覽會議中心 CMF 課程", "開幕式、頒獎、課程。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d6", no: "DAY 6", date: "2026.07.19（日）", key: "2026-07-19", title: "CMF DAY 2", tone: "中篇：探求保險新生態之路。", img: image.d6, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-17:00", "山東國際博覽會議中心 CMF 課程", "全日課程。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d7", no: "DAY 7", date: "2026.07.20（一）", key: "2026-07-20", title: "CMF DAY 3", tone: "尾篇：探討保險新生態之策。", img: image.d7, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-17:30", "山東國際博覽會議中心 CMF 課程", "課程與閉幕式。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d8", no: "DAY 8", date: "2026.07.21（二）", key: "2026-07-21", title: "濟南 → 青島 → 台北", tone: "高鐵至青島機場，返台。", img: image.d8, tags: ["move"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["07:56-09:27", "高鐵 G5577 濟南東 → 青島機場", "回程第一段移動。"],
        ["13:25-15:45", "山東航空 SC4085 青島 → 台北", "返航，回台作戰。"]
      ]}
    ];

    const courses = [
      { id: "d5", title: "DAY 5｜7/18 開篇：探祕保險新生態", rows: [
        ["08:30-09:00", "第二十三屆國際保險精英圓桌大會（CMF）開幕式", "CMF 第 23 屆主禮嘉賓及 CMF 冠軍聯盟入場儀式"],
        ["09:00-09:20", "主禮嘉賓致辭", ""],
        ["09:20-09:40", "「CMF 國際十大保險明星」頒獎典禮", "開幕典禮"],
        ["09:40-10:10", "TMC 國際千萬圓桌大獎頒獎典禮", "開幕典禮"],
        ["10:10-10:20", "休息", ""],
        ["10:20-12:00", "百歲時代：生命科學重構健康與財富的底層邏輯", "尹燁（華大集團 CEO、生命科學科普領軍人）"],
        ["12:00-13:30", "午餐休息", ""],
        ["13:30-14:20", "時代趨勢－自媒體事件行銷", "張一凡（自媒體事件行銷第一人，頭條熱搜事件幕後策劃人）"],
        ["14:20-15:10", "壽險常青樹——超高淨值客戶銷售解析", "褚東東（「中國保險件數王」，中國人壽頂尖行銷精英）"],
        ["15:10-15:30", "休息", ""],
        ["15:30-16:20", "從券商首席到頂級銷售的進階之路", "唐思思（平安磐石家族辦公室合夥人，平安上海高才標杆）"],
        ["16:20-17:10", "財務視角下的保險本質", "齊昊（財務專家、實戰派 CFO、知名講師）"],
        ["17:10-17:30", "課程總結", ""]
      ]},
      { id: "d6", title: "DAY 6｜7/19 中篇：探求保險新生態之路", rows: [
        ["上午專場", "個人行銷新技能專場／組織發展專場", "版主：魏建宏、安建平"],
        ["08:30-09:20", "長期主義：20 年保險路，從個人績優到團隊領袖", "于忠濱（太平人壽連續二十年營業區、直轄部全省第一）"],
        ["09:20-10:10", "團隊經營與績優文化建設", "王利忠（中國人壽高級區域總監）"],
        ["10:10-10:20", "休息", ""],
        ["10:20-11:10", "00 後組織發展：年輕一代的團隊成長密碼", "吳修毅（中國臺灣金融保險產業新生代領導者，富邦人壽極具代表性的年輕企業家）"],
        ["11:10-12:00", "投保心理學：洞察人性，經營未來——AI 保險時代下的破局", "羅淑瓊（香港中銀人壽資深總監，PPGroup 創辦人之一，團隊規模超過 1200 人）"],
        ["12:00-13:30", "午餐休息", ""],
        ["下午專場", "CMF 行銷專場", "版主：呂啟彪、朱磊"],
        ["13:30-14:20", "家族保單拓客要領", "馮瑞霞（瑞眾持續績優明星）"],
        ["14:20-15:10", "IP 打造與直播獲客", "李洋（明亞北京頂級銷冠、直播億級保費締造者）"],
        ["15:10-15:30", "休息", ""],
        ["15:30-16:20", "職業轉型與保險從業成長", "錢文曦（太平人壽品質新生態代言人）"],
        ["16:20-17:10", "企業家客戶的銷售邏輯", "曹紀平（TMC 千萬圓桌會創始會員，連續二十二年山東省銷售冠軍）"],
        ["17:10-18:30", "晚餐休息", ""],
        ["18:30-21:30", "CMF 保險明星之夜", "地點：主會場。特邀嘉賓：魏建宏團隊、安建平團隊、泰國精英團隊等眾多保險之星歌舞串燒"]
      ]},
      { id: "d7", title: "DAY 7｜7/20 尾篇：探討保險新生態之策", rows: [
        ["上午場", "主會場課程", "版主：徐千水、韓綱"],
        ["08:30-09:20", "以質為王・精兵致遠——新行銷時代的高績優成長路徑", "余巧琴（平安高品質轉型代言人、高客服務典範、精兵團隊標杆）"],
        ["09:20-10:10", "人生經營三部曲——保險的智慧", "王辰（清華才子，CMF 特約首席講師）"],
        ["10:10-10:20", "休息", ""],
        ["10:20-11:10", "新經濟週期下，高客資產配置的保險核心邏輯", "趙楊（上海分公司資深業務總監、CMF 國際十大保險明星、太保壽險功勳導師）"],
        ["11:10-12:00", "如何建構保險新生態", "CMF 主席團（劉朝霞、李江紅、盧美、葉雲燕、吳征宇等）"],
        ["12:00-13:30", "午餐休息", ""],
        ["下午場", "CMF 嘉年華", "嘉賓主持：王妮、春雨"],
        ["13:30-14:10", "法商智慧：高客風險破解", "國旭（京師律所合夥人、家族財富管理法律專家）"],
        ["14:10-15:10", "國學與保險行銷", "趙玉平（中央電視台《百家講壇》最具人氣主講人，中國十大國學專家，管理學博士）"],
        ["15:10-15:50", "休息及節目", ""],
        ["15:50-16:40", "建構保險新生態", "林海川（CMF 大會創始人之一，CMF 大會執行祕書長）"],
        ["16:40-17:10", "柔韌的力量：女性企業家的破局與成長", "李巍（新希望集團聯合創始人）"],
        ["17:10-17:30", "精彩再現，再見濟南，相約長沙——閉幕式", ""]
      ]}
    ];

    const places = [
      { type: "stay", img: image.hQingdao, name: "青島金水皇冠假日飯店", meta: "7/14-7/15 · 青島", addr: "中國山東省青島市李滄區巨峰路175-2號", desc: "第一晚住宿，近李滄商圈。" },
      { type: "stay", img: image.hJinan, name: "美悅雲禧飯店", meta: "7/15-7/21 · 濟南", addr: "山東省濟南市槐蔭區興福寺路2660號", desc: "CMF 期間住宿，近濟南西站與會展中心。" },
      { type: "food", img: image.huifeng, name: "匯豐苑（中山路大鮑島店）", meta: "DAY 2 午餐 · 青島", addr: "青島市市南區大鮑島商圈", desc: "膠東海鮮與經典魯菜。", feat: ["明檔海鮮", "蔥燒海參", "大蝦水煎包"] },
      { type: "food", img: image.taishanFood, name: "神憩賓館餐廳", meta: "DAY 3 午餐 · 泰山", addr: "泰山玉皇頂", desc: "玉皇頂附近用餐，登頂後補給。" },
      { type: "food", img: image.minghuFood, name: "明湖居魯菜館", meta: "DAY 4 午餐 · 濟南", addr: "濟南市大明湖畔", desc: "湖畔魯菜，午餐安排。" },
      { type: "food", img: image.night, name: "環聯夜市", meta: "DAY 2 晚餐自理 · 濟南", addr: "濟南市環聯夜市", desc: "夜市小吃、燒烤與飲品。", feat: ["晚餐自理", "備少量現金"] },
      { type: "food", img: image.weijing, name: "山東維景大酒店", meta: "DAY 4 晚宴 · 濟南", addr: "中國山東省濟南市歷下區縣西巷10號", desc: "CMF 晚宴地點。" },
      { type: "sight", img: image.beer, name: "青島啤酒博物館", meta: "DAY 2 · 青島", addr: "青島啤酒博物館", desc: "1903 年舊啤酒廠原址。" },
      { type: "sight", img: image.taishan, name: "泰山風景區", meta: "DAY 3 · 泰安", addr: "泰山風景區", desc: "五嶽之首，當日主行程。" },
      { type: "sight", img: image.taishanGate, name: "中天門 / 南天門", meta: "DAY 3 · 泰山", addr: "泰山中天門", desc: "泰山登山與索道重要節點。" },
      { type: "sight", img: image.taishanPeak, name: "天街 / 玉皇頂", meta: "DAY 3 · 泰山", addr: "泰山玉皇頂", desc: "山頂路線與最高點。" },
      { type: "sight", img: image.baotu, name: "趵突泉", meta: "DAY 4 · 濟南", addr: "趵突泉", desc: "濟南代表名泉。" },
      { type: "sight", img: image.wulong, name: "五龍潭公園", meta: "DAY 4 · 濟南", addr: "五龍潭公園", desc: "趵突泉旁的泉水公園。" },
      { type: "sight", img: image.furong, name: "芙蓉街", meta: "DAY 4 · 濟南", addr: "芙蓉街 濟南", desc: "老城小吃街。" },
      { type: "sight", img: image.qushui, name: "曲水亭街", meta: "DAY 4 · 濟南", addr: "曲水亭街 濟南", desc: "泉水穿街的老城巷弄。" },
      { type: "sight", img: image.daming, name: "大明湖與超然樓", meta: "DAY 4 · 濟南", addr: "大明湖超然樓", desc: "湖區與夜景地標。" },
      { type: "shop", img: image.hongyang, name: "弘陽廣場", meta: "近飯店", addr: "濟南弘陽廣場", desc: "餐飲與生活補給，步行可達。" },
      { type: "shop", img: image.henglong, name: "恆隆廣場", meta: "泉城路商圈", addr: "濟南恆隆廣場", desc: "購物、餐飲。車程約 20-30 分鐘。" }
    ];

    const checklist = [
      ["護照 / 台胞證", "效期六個月以上，影本或照片離線備份。"],
      ["行動支付", "支付寶或微信支付提前開通，綁卡前先向銀行報備。"],
      ["網路 / 漫遊 SIM", "確認可用地圖、通訊軟體與必要服務。"],
      ["人民幣現金", "夜市小攤、零錢與備用情境。"],
      ["泰山裝備", "好走鞋、薄外套、雨具，山頂溫差大。"],
      ["常備藥品", "腸胃藥、暈車藥、防曬與個人用藥。"],
      ["CMF 課程用品", "名片、筆記工具、輕便包與可充電設備。"],
      ["充電器 / 行動電源", "中國多為兩腳扁插，可備轉接頭。"]
    ];

    const roster = [
      [1,"許智雄","高天通訊處"],[2,"謝政男","高天通訊處"],[3,"何宜家","高天通訊處"],[4,"蕭宇晴","高天通訊處"],
      [5,"蕭如菁","高天通訊處"],[6,"何宜庭","高天通訊處"],[7,"戴東志","高天通訊處"],[8,"詹政杰","高天通訊處"],
      [9,"吳睿綝","高天通訊處"],[10,"陳懷柔","高天通訊處"],[11,"黃柏瑞","高貴通訊處"],[12,"陳其呈","高貴通訊處"],
      [13,"陳武均","富予二通訊處"],[14,"陳尚禾","富予二通訊處"],[15,"陳昶聿","富予二通訊處"],[16,"宋里安","富予二通訊處"],
      [17,"賴芯甯","富予二通訊處"],[18,"高泰琳","富予二通訊處"],[19,"許瓊云","富予二通訊處"],[20,"王姵慈","富吳通訊處"],
      [21,"賴含怡","富則通訊處"],[22,"吳佩姗","富吳通訊處"],[23,"王鄆郅","富吳通訊處"],[24,"廖冠傑","富吳通訊處"],
      [25,"王騌捷","富吳通訊處"],[26,"黃金隆","富吳通訊處"],[27,"呂顏伃","富吳通訊處"],[28,"陳怡諳","富吳通訊處"],
      [29,"彭莉柔","富吳通訊處"],[30,"陳盈蓁","富吳通訊處"],[31,"周易慶","富吳通訊處"],[32,"林建璋","富吳通訊處"],
      [33,"李奕寬","富吳通訊處"],[34,"黃彥融","富吳通訊處"],[35,"吳修毅","富吳通訊處"],[36,"李孟珊","富則通訊處"],
      [37,"鄭丞哲","富吳通訊處"],[38,"謝宇軒","富吳通訊處"],[39,"戴孜安","富吳通訊處"],[40,"徐瀚","富吳通訊處"],
      [41,"許嘉晉","富則通訊處"],[42,"侯宏詣","富則通訊處"],[43,"簡宏鈞","富能通訊處"],[44,"王昱文","富則通訊處"],
      [45,"管卓鈞","富能通訊處"],[46,"林桂安","富則通訊處"],[47,"簡姵萱","富能通訊處"],[48,"潘韻竹","富則通訊處"],
      [49,"傅佳旻","富占通訊處"],[50,"徐維鈴","富占通訊處"],[51,"鍾怡婷","富占通訊處"],[52,"林宜潔","富占通訊處"],
      [53,"顏明儀","富則通訊處"],[54,"王思嵐","富則通訊處"],[55,"吳品萱","富則通訊處"],[56,"林芳誼","富則通訊處"],
      [57,"余妏珊","富則通訊處"],[58,"余若馨","富則通訊處"],[59,"吳沛錞","富則通訊處"],[60,"李婕詠","富則通訊處"],
      [61,"張芫菁","富則通訊處"],[62,"黃馨葦","富則通訊處"],[63,"蔡承遠","富則通訊處"],[64,"張國興","富則通訊處"],
      [65,"高智源","富則通訊處"],[66,"王銘宏","富則通訊處"],[67,"洪敬忠","富則六通訊處"],[68,"廖宇翔","富則六通訊處"],
      [69,"張祐珮","富后通訊處"],[70,"施昕余","中銘通訊處"],[71,"吳皓誠","富亨通訊處"],[72,"張家瑋","富亨通訊處"],
      [73,"馬英傑","富亨通訊處"],[74,"林宏威","富亨通訊處"],[75,"陳怡萍","富亨通訊處"],[76,"廖家慧","富亨通訊處"],
      [77,"陳龍生","富鑽通訊處"],[78,"葉金玲","富鑽通訊處"],[79,"吳士侃","富北通訊處"],[80,"林瑋","富北通訊處"],
      [81,"曾翊雯","中沐通訊處"],[82,"王原軍","中沐通訊處"],[83,"鄭占禮","富占通訊處"],[84,"孫振文","富北通訊處"],
      [85,"邱仲恩","富吳通訊處"],[86,"范毓斌","富占通訊處"]
    ];

    const stayPlans = [
      { key: "qingdao", city: "青島", hotel: "青島金水皇冠假日飯店" },
      { key: "jinan", city: "濟南", hotel: "濟南美悅雲禧飯店" }
    ];

    const singleRoomNames = new Set();

    const roomAssignments = {
      // 由濟南房號.xlsx 匯入；同一房號組只需填一次飯店房號，整組會共用。
      "許智雄": {"group": "1", "single": false},
      "謝政男": {"group": "1", "single": false},
      "何宜家": {"group": "2", "single": false},
      "蕭宇晴": {"group": "2", "single": false},
      "何宜庭": {"group": "3", "single": false},
      "蕭如菁": {"group": "3", "single": false},
      "戴東志": {"group": "4", "single": false},
      "詹政杰": {"group": "4", "single": false},
      "吳睿綝": {"group": "5", "single": false},
      "陳懷柔": {"group": "5", "single": false},
      "陳其呈": {"group": "6", "single": false},
      "黃柏瑞": {"group": "6", "single": false},
      "陳尚禾": {"group": "7", "single": false},
      "陳武均": {"group": "7", "single": false},
      "宋里安": {"group": "8", "single": false},
      "陳昶聿": {"group": "8", "single": false},
      "賴芯甯": {"group": "9", "single": false},
      "高泰琳": {"group": "9", "single": false},
      "王姵慈": {"group": "10", "single": false},
      "許瓊云": {"group": "10", "single": false},
      "吳佩姗": {"group": "11", "single": false},
      "賴含怡": {"group": "11", "single": false},
      "廖冠傑": {"group": "12", "single": false},
      "王鄆郅": {"group": "12", "single": false},
      "王騌捷": {"group": "13", "single": false},
      "黃金隆": {"group": "13", "single": false},
      "呂顏伃": {"group": "14", "single": false},
      "陳怡諳": {"group": "14", "single": false},
      "彭莉柔": {"group": "15", "single": false},
      "陳盈蓁": {"group": "15", "single": false},
      "周易慶": {"group": "16", "single": false},
      "林建璋": {"group": "16", "single": false},
      "李奕寬": {"group": "17", "single": false},
      "黃彥融": {"group": "17", "single": false},
      "吳修毅": {"group": "18", "single": false},
      "李孟珊": {"group": "18", "single": false},
      "謝宇軒": {"group": "19", "single": false},
      "鄭丞哲": {"group": "19", "single": false},
      "徐瀚": {"group": "20", "single": false},
      "戴孜安": {"group": "20", "single": false},
      "侯宏詣": {"group": "21", "single": false},
      "許嘉晉": {"group": "21", "single": false},
      "王昱文": {"group": "22", "single": false},
      "簡宏鈞": {"group": "22", "single": false},
      "林桂安": {"group": "23", "single": false},
      "管卓鈞": {"group": "23", "single": false},
      "潘韻竹": {"group": "24", "single": false},
      "簡姵萱": {"group": "24", "single": false},
      "傅佳旻": {"group": "25", "single": false},
      "徐維鈴": {"group": "25", "single": false},
      "林宜潔": {"group": "26", "single": false},
      "鍾怡婷": {"group": "26", "single": false},
      "王思嵐": {"group": "27", "single": false},
      "顏明儀": {"group": "27", "single": false},
      "吳品萱": {"group": "28", "single": false},
      "林芳誼": {"group": "28", "single": false},
      "余妏珊": {"group": "29", "single": false},
      "余若馨": {"group": "29", "single": false},
      "吳沛錞": {"group": "30", "single": false},
      "李婕詠": {"group": "30", "single": false},
      "黃馨葦": {"group": "31", "single": true},
      "張國興": {"group": "32", "single": false},
      "蔡承遠": {"group": "32", "single": false},
      "王銘宏": {"group": "33", "single": false},
      "高智源": {"group": "33", "single": false},
      "廖宇翔": {"group": "34", "single": false},
      "洪敬忠": {"group": "34", "single": false},
      "張祐珮": {"group": "35", "single": false},
      "施昕余": {"group": "35", "single": false},
      "吳皓誠": {"group": "36", "single": false},
      "張家瑋": {"group": "36", "single": false},
      "林宏威": {"group": "37", "single": false},
      "馬英傑": {"group": "37", "single": false},
      "廖家慧": {"group": "38", "single": false},
      "陳怡萍": {"group": "38", "single": false},
      "葉金玲": {"group": "39", "single": false},
      "陳龍生": {"group": "39", "single": false},
      "吳士侃": {"group": "40", "single": false},
      "林瑋": {"group": "40", "single": false},
      "曾翊雯": {"group": "41", "single": false},
      "王原軍": {"group": "41", "single": false},
      "孫振文": {"group": "42", "single": false, "qingdaoRoom": "1111", "jinanRoom": "2222"},
      "鄭占禮": {"group": "42", "single": false, "qingdaoRoom": "1111", "jinanRoom": "2222"},
      "邱仲恩": {"group": "43", "single": true},
      "范毓斌": {"group": "44", "single": true},
    };

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => [...document.querySelectorAll(selector)];
    const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
    const appPages = ["overview", "itinerary", "places", "course", "room", "prep"];

    function normalized(text) {
      return String(text).toLowerCase().replace(/\s+/g, "");
    }

    function showToast(text) {
      const toast = $("#toast");
      toast.textContent = text;
      toast.classList.add("show");
      clearTimeout(showToast.timer);
      showToast.timer = setTimeout(() => toast.classList.remove("show"), 1500);
    }

    function copyText(text) {
      const done = () => showToast("已複製地址");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
      } else {
        fallback();
      }
      function fallback() {
        const area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        done();
      }
    }

    function mapUrl(query) {
      return `https://uri.amap.com/search?keyword=${encodeURIComponent(query)}`;
    }

    function updateCountdown() {
      const now = new Date();
      const dayMs = 86400000;
      const toDeparture = departureTime - now;
      const toStart = Math.max(0, Math.floor(toDeparture / dayMs));
      const fromStart = Math.floor((now - tripStart) / dayMs) + 1;
      const countdownDays = $("#countdownDays");
      const countdownClock = $("#countdownClock");
      if (toDeparture > 0) {
        const hours = Math.floor((toDeparture % dayMs) / 3600000);
        const minutes = Math.floor((toDeparture % 3600000) / 60000);
        const seconds = Math.floor((toDeparture % 60000) / 1000);
        countdownDays.textContent = `${toStart} 天`;
        countdownClock.textContent = `${String(hours).padStart(2, "0")} 時 ${String(minutes).padStart(2, "0")} 分 ${String(seconds).padStart(2, "0")} 秒`;
        $("#todayHint").textContent = `距離出發 ${toStart} 天。`;
      } else if (now <= tripEnd) {
        countdownDays.textContent = `第 ${fromStart} 天`;
        countdownClock.textContent = "旅程進行中";
        $("#todayHint").textContent = `今日第 ${fromStart} 天。`;
      } else {
        countdownDays.textContent = "已完成";
        countdownClock.textContent = "旅程已結束";
        $("#todayHint").textContent = "查看行程與課程資料。";
      }
    }

    function renderDays() {
      $("#dayList").innerHTML = days.map((day) => {
        const search = normalized([day.no, day.date, day.title, day.tone, ...day.tags, ...day.items.flat()].join(" "));
        const items = day.items.map(([time, title, desc]) => `
          <div class="segment">
            <time>${esc(time)}</time>
            <div><b>${esc(title)}</b><span>${esc(desc)}</span></div>
          </div>
        `).join("");
        const tagText = day.tags.includes("course") ? "課程日" : day.tags.includes("move") ? "移動日" : "城市日";
        return `
          <article class="day-card reveal" data-tags="${esc(day.tags.join(" "))}" data-search="${esc(search)}">
            <div class="day-media">
              <img src="${esc(day.img)}" alt="${esc(day.title)}" width="1200" height="700" loading="lazy" decoding="async">
              <div class="day-stamp"><b>${esc(day.no)} · ${esc(day.date)}</b><span>${esc(tagText)}</span></div>
            </div>
            <div class="day-body">
              <div class="day-title-row">
                <div><h3>${esc(day.title)}</h3><p>${esc(day.tone)}</p></div>
                <span class="chip">${esc(day.date.slice(5))}</span>
              </div>
              <div class="segments">${items}</div>
            </div>
          </article>
        `;
      }).join("");
    }

    function filterDays() {
      const query = normalized($("#daySearch").value);
      const active = $("#dayFilters .active").dataset.filter;
      let visible = 0;
      $$(".day-card").forEach((card) => {
        const tagHit = active === "all" || card.dataset.tags.includes(active);
        const queryHit = !query || card.dataset.search.includes(query);
        const show = tagHit && queryHit;
        card.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });
      $("#dayEmpty").hidden = visible > 0;
    }

    function renderCourses() {
      $("#courseList").innerHTML = courses.map((day, index) => {
        const featuredDay = day.rows.some((row) => row.join("").includes("吳修毅"));
        const open = featuredDay || (!courses.some((item) => item.rows.some((row) => row.join("").includes("吳修毅"))) && index === 0);
        const rows = day.rows.map((row) => {
          const search = normalized(row.join(" "));
          const sectionRow = /專場|上午場|下午場/.test(row[0]);
          const featured = row.join("").includes("吳修毅");
          return `
            <div class="course-row${sectionRow ? " course-section-row" : ""}${featured ? " featured-course-row" : ""}" data-search="${esc(search)}">
              <div class="course-time">${esc(row[0])}</div>
              <div>
                ${featured ? '<div class="featured-note"><span class="featured-badge">本團主角</span><span>7/19 10:20｜吳修毅</span></div>' : ""}
                <div class="course-topic">${esc(row[1])}</div>
                ${row[2] ? `<div class="course-speaker">${esc(row[2])}</div>` : ""}
              </div>
            </div>
          `;
        }).join("");
        return `
          <article class="course-day reveal" data-course="${esc(day.id)}">
            <button class="course-head" type="button" aria-expanded="${open ? "true" : "false"}">
              <span>${esc(day.title)}${featuredDay ? '<em class="course-head-badge">本團主角</em>' : ""}</span><span>${open ? "收合" : "展開"}</span>
            </button>
            <div class="course-rows" ${open ? "" : 'style="display:none"'}>${rows}</div>
          </article>
        `;
      }).join("");
      $$(".course-head").forEach((button) => {
        button.addEventListener("click", () => {
          const rows = button.nextElementSibling;
          const open = rows.style.display !== "none";
          rows.style.display = open ? "none" : "block";
          button.setAttribute("aria-expanded", String(!open));
          button.lastElementChild.textContent = open ? "展開" : "收合";
        });
      });
    }

    function filterCourses() {
      const query = normalized($("#courseSearch").value);
      const active = $("#courseFilters .active").dataset.course;
      let visible = 0;
      $$(".course-day").forEach((day) => {
        const dateHit = active === "all" || day.dataset.course === active;
        let hasRow = false;
        day.querySelectorAll(".course-row").forEach((row) => {
          const rowHit = !query || row.dataset.search.includes(query);
          row.classList.toggle("hidden", !rowHit);
          if (rowHit) hasRow = true;
        });
        const show = dateHit && hasRow;
        day.classList.toggle("hidden", !show);
        if (show) visible += 1;
        if (query) {
          const head = day.querySelector(".course-head");
          day.querySelector(".course-rows").style.display = "block";
          head.setAttribute("aria-expanded", "true");
          head.lastElementChild.textContent = "收合";
        }
      });
      $("#courseEmpty").hidden = visible > 0;
    }

    function focusFeaturedCourse() {
      setActivePage("course");
      const featured = $(".featured-course-row");
      if (!featured) return;
      const day = featured.closest(".course-day");
      const head = day?.querySelector(".course-head");
      const rows = day?.querySelector(".course-rows");
      if (head && rows) {
        rows.style.display = "block";
        head.setAttribute("aria-expanded", "true");
        head.lastElementChild.textContent = "收合";
      }
      requestAnimationFrame(() => {
        const top = window.scrollY + featured.getBoundingClientRect().top - 170;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        featured.classList.add("featured-focus");
        clearTimeout(focusFeaturedCourse.timer);
        focusFeaturedCourse.timer = setTimeout(() => featured.classList.remove("featured-focus"), 1800);
      });
    }

    function renderPlaces() {
      const destinationPlaces = places.filter((place) => place.type !== "stay");
      $("#placeList").innerHTML = destinationPlaces.map((place) => {
        const search = normalized([place.type, place.name, place.meta, place.addr, place.desc, ...(place.feat || [])].join(" "));
        const features = place.feat ? `<div class="features">${place.feat.map((item) => `<span>${esc(item)}</span>`).join("")}</div>` : "";
        return `
          <article class="data-card reveal" data-place="${esc(place.type)}" data-search="${esc(search)}">
            <img src="${esc(place.img)}" alt="${esc(place.name)}" width="1200" height="700" loading="lazy" decoding="async">
            <div class="data-card-body">
              <h3>${esc(place.name)}</h3>
              <div class="meta">${esc(place.meta)}</div>
              <p>${esc(place.desc)}</p>
              ${features}
              <div class="addr">
                <span>${esc(place.addr)}</span>
                <button class="btn small jade" type="button" data-copy="${esc(place.addr)}">複製</button>
                <a class="btn small ghost" href="${esc(mapUrl(`${place.name} ${place.addr}`))}" target="_blank" rel="noopener">地圖</a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function renderHotels() {
      const hotels = places.filter((place) => place.type === "stay");
      $("#hotelList").innerHTML = hotels.map((place) => {
        const search = normalized([place.name, place.meta, place.addr, place.desc].join(" "));
        return `
          <article class="data-card reveal" data-search="${esc(search)}">
            <img src="${esc(place.img)}" alt="${esc(place.name)}" width="1200" height="700" loading="lazy" decoding="async">
            <div class="data-card-body">
              <h3>${esc(place.name)}</h3>
              <div class="meta">${esc(place.meta)}</div>
              <p>${esc(place.desc)}</p>
              <div class="addr">
                <span>${esc(place.addr)}</span>
                <button class="btn small jade" type="button" data-copy="${esc(place.addr)}">複製</button>
                <a class="btn small ghost" href="${esc(mapUrl(`${place.name} ${place.addr}`))}" target="_blank" rel="noopener">地圖</a>
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function bindCopyButtons() {
      $$("[data-copy]").forEach((button) => button.addEventListener("click", () => copyText(button.dataset.copy)));
    }

    function filterPlaces() {
      const query = normalized($("#placeSearch").value);
      const active = $("#placeFilters .active").dataset.place;
      let visible = 0;
      $$("#placeList .data-card").forEach((card) => {
        const typeHit = active === "all" || card.dataset.place === active;
        const queryHit = !query || card.dataset.search.includes(query);
        const show = typeHit && queryHit;
        card.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });
      $("#placeEmpty").hidden = visible > 0;
    }

    function renderChecklist() {
      $("#checkList").innerHTML = checklist.map(([title, desc], index) => `
        <label class="check-item">
          <input type="checkbox" data-key="cmf-check-${index}">
          <div><b>${esc(title)}</b><span>${esc(desc)}</span></div>
        </label>
      `).join("");
      $$("#checkList input").forEach((input) => {
        try {
          input.checked = localStorage.getItem(input.dataset.key) === "1";
        } catch (error) {}
        input.addEventListener("change", () => {
          try {
            localStorage.setItem(input.dataset.key, input.checked ? "1" : "0");
          } catch (error) {}
        });
      });
    }

    function renderRosterResult(person) {
      if (!person) {
        $("#rosterResult").innerHTML = `<div class="result-name">找不到資料</div><div>請確認姓名是否與名單一致，或只輸入其中一個字查詢。</div>`;
        return;
      }
      const personName = person[1];
      const personRoom = roomAssignments[personName] || {};
      const stayHtml = stayPlans.map((stay) => {
        const roomKey = `${stay.key}Room`;
        const roomNo = personRoom[roomKey] || "";
        const single = personRoom.single || personRoom[`${stay.key}Single`] || singleRoomNames.has(personName);
        const roommates = roomNo
          ? roster
              .filter((item) => item[1] !== personName && (roomAssignments[item[1]] || {})[roomKey] === roomNo)
              .map((item) => item[1])
          : [];
        const roommateText = single ? "單人房" : (roommates.length ? roommates.join("、") : "待補");
        return `
          <div class="room-stay">
            <div class="room-stay-head">
              <span>${esc(stay.city)}</span>
              <b>${esc(stay.hotel)}</b>
            </div>
            <div class="room-detail"><span>房號</span><b>${esc(roomNo || "待補")}</b></div>
            <div class="room-detail"><span>室友</span><b>${esc(roommateText)}</b></div>
          </div>
        `;
      }).join("");
      $("#rosterResult").innerHTML = `
        <div class="result-name">${esc(personName)}</div>
        <div class="result-unit">${esc(person[2])}</div>
        ${stayHtml}
      `;
    }

    function updateRoster() {
      const query = $("#nameSearch").value.trim();
      const matches = query ? roster.filter((person) => person[1].includes(query) || person[2].includes(query)).slice(0, 8) : [];
      $("#suggestions").innerHTML = matches.map((person) => `<button type="button" data-name="${esc(person[1])}">${esc(person[1])}<span> · ${esc(person[2].slice(0, 2))}</span></button>`).join("");
      $$("#suggestions button").forEach((button) => {
        button.addEventListener("click", () => {
          $("#nameSearch").value = button.dataset.name;
          $("#suggestions").innerHTML = "";
          renderRosterResult(roster.find((person) => person[1] === button.dataset.name));
        });
      });
      const exact = roster.find((person) => person[1] === query);
      if (exact) renderRosterResult(exact);
      if (!query) {
        $("#rosterResult").innerHTML = `<div class="result-name">尚未查詢</div><div>輸入姓名查住宿飯店、房號與室友。</div>`;
      }
    }

    function bindSegmented(containerId, callback) {
      $$(containerId + " button").forEach((button) => {
        button.addEventListener("click", () => {
          $$(containerId + " button").forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          callback();
          animateActivePage();
        });
      });
    }

    function setupScrollEffects() {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      }, { threshold: 0.12 });
      $$(".reveal").forEach((node) => revealObserver.observe(node));
    }

    function pageForHash(hash) {
      const id = String(hash || "").replace("#", "");
      if (appPages.includes(id)) return id;
      if (id === "top") return "overview";
      return "overview";
    }

    function updateTopbar(active) {
      $("#prepShortcut").classList.toggle("is-active", active === "prep");
    }

    function animateActivePage() {
      const page = $(".app-page.active:not(.hero)") || $(".app-page.active");
      if (!page) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const nodes = [...page.querySelectorAll(".reveal")];
      nodes.forEach((node, index) => {
        node.style.transitionDelay = reduceMotion ? "0ms" : `${Math.min(index * 35, 210)}ms`;
        node.classList.remove("show");
        requestAnimationFrame(() => node.classList.add("show"));
      });
    }

    function setActivePage(page, updateHash = true) {
      const active = pageForHash("#" + page);
      $$("[data-page]").forEach((node) => node.classList.toggle("active", node.dataset.page === active));
      $$("#bottomTabs .app-tab").forEach((button) => {
        const selected = button.dataset.tab === active;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-selected", String(selected));
      });
      updateTopbar(active);
      animateActivePage();
      window.scrollTo({ top: 0, behavior: "auto" });
      if (updateHash && location.hash !== "#" + active) history.replaceState(null, "", "#" + active);
    }

    function setupTabs() {
      $$("#bottomTabs .app-tab").forEach((button) => {
        button.addEventListener("click", () => setActivePage(button.dataset.tab));
      });
      $("#prepShortcut").addEventListener("click", () => setActivePage("prep"));
      $("#featuredCourseJump").addEventListener("click", focusFeaturedCourse);
      document.addEventListener("click", (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const page = pageForHash(link.getAttribute("href"));
        if (!page) return;
        event.preventDefault();
        setActivePage(page);
      });
      window.addEventListener("hashchange", () => setActivePage(pageForHash(location.hash), false));
      setActivePage(pageForHash(location.hash || "#overview"), false);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
    renderDays();
    renderCourses();
    renderPlaces();
    renderHotels();
    bindCopyButtons();
    renderChecklist();
    setupScrollEffects();
    setupTabs();

    $("#daySearch").addEventListener("input", filterDays);
    $("#courseSearch").addEventListener("input", filterCourses);
    $("#placeSearch").addEventListener("input", filterPlaces);
    $("#nameSearch").addEventListener("input", updateRoster);
    bindSegmented("#dayFilters", filterDays);
    bindSegmented("#courseFilters", filterCourses);
    bindSegmented("#placeFilters", filterPlaces);

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
        ["13:30", "桃園機場第二航廈集合", "山東航空 SC4086 團體櫃檯集合，統一辦理報到與托運。"],
        ["16:45-19:15", "山東航空 SC4086 台北 → 青島", "桃園 T2 出發，抵達青島膠東機場。"],
        ["傍晚", "接駁入住青島金水皇冠假日飯店", "專車接駁。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d2", no: "DAY 2", date: "2026.07.15（三）", key: "2026-07-15", title: "青島 → 濟南", tone: "青島啤酒博物館、高鐵前往濟南。", img: image.d2, tags: ["move", "tour", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["上午", "青島啤酒博物館", "1903 年舊啤酒廠原址。"],
        ["午餐", "匯豐苑（中山路大鮑島店）", "膠東海鮮與經典魯菜。"],
        ["14:36-17:20", "高鐵 G1074 青島 → 濟南", "抵達濟南，入住飯店。"],
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
        ["08:30-17:30", "山東國際會展中心 4 號廳 CMF 課程", "開幕式、頒獎、課程。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d6", no: "DAY 6", date: "2026.07.19（日）", key: "2026-07-19", title: "CMF DAY 2", tone: "中篇：探求保險新生態之路。", img: image.d6, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:20-17:10", "山東國際會展中心 4 號廳 CMF 課程", "最終版課程。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"]
      ]},
      { id: "d7", no: "DAY 7", date: "2026.07.20（一）", key: "2026-07-20", title: "CMF DAY 3", tone: "尾篇：探討保險新生態之策。", img: image.d7, tags: ["course", "food"], items: [
        ["07:00", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:30-17:30", "山東國際會展中心 4 號廳 CMF 課程", "課程與閉幕式。"],
        ["午餐", "中午提供便當餐盒", "課程場地用餐。"],
        ["晚餐", "晚餐自理", "飯店附近用餐。"]
      ]},
      { id: "d8", no: "DAY 8", date: "2026.07.21（二）", key: "2026-07-21", title: "濟南 → 青島 → 台北", tone: "高鐵至青島機場，返台。", img: image.d8, tags: ["move"], items: [
        ["06:30", "飯店早餐", "飯店餐廳自行用餐。"],
        ["08:37-10:38", "高鐵 G5597 濟南 → 青島機場", "直達，車程約 2 小時 1 分；車票 7/7 14:15 開賣。"],
        ["13:25-15:45", "山東航空 SC4085 青島 → 台北", "返航，回台作戰。"]
      ]}
    ];

    const courses = [
          {
                "id": "d5",
                "title": "DAY 5｜7/18 開篇：探秘保險新生態",
                "rows": [
                      [
                            "地點",
                            "主會場（山東國際會展中心 4 號館）",
                            "第 23 屆 CMF 國際保險精英圓桌大會"
                      ],
                      [
                            "08:30-09:00",
                            "第二十三屆國際保險精英圓桌大會（CMF）開幕式",
                            "CMF23 屆主禮嘉賓及 CMF 冠軍聯盟入場儀式"
                      ],
                      [
                            "09:00-09:20",
                            "主禮嘉賓致辭",
                            "開幕典禮"
                      ],
                      [
                            "09:20-09:40",
                            "「CMF 國際十大保險明星」頒獎典禮",
                            "開幕典禮"
                      ],
                      [
                            "09:40-09:50",
                            "「CMF 保險名人堂」頒獎典禮",
                            "開幕典禮"
                      ],
                      [
                            "09:50-10:20",
                            "TMC 千萬圓桌大獎頒獎典禮",
                            "開幕典禮"
                      ],
                      [
                            "10:20-12:00",
                            "百歲時代：生命科學重構健康與財富的底層邏輯",
                            "尹燁（華大集團 CEO、生命科學科普領軍人）"
                      ],
                      [
                            "12:00-13:30",
                            "午餐、休息",
                            ""
                      ],
                      [
                            "13:30-14:20",
                            "商業的頂級玩法——自媒體事件營銷",
                            "張一凡（自媒體事件營銷第一人，頭條熱搜事件幕後策劃人）"
                      ],
                      [
                            "14:20-15:10",
                            "壽險常青樹——高淨值客戶銷售解析",
                            "褚東東（「中國保險件數王」，中國人壽頂尖營銷精英）"
                      ],
                      [
                            "15:10-15:30",
                            "休息",
                            ""
                      ],
                      [
                            "15:30-16:20",
                            "用家辦思維撬動超高淨值客戶",
                            "余巧琴（平安高質量轉型代言人、高客服務典範、精兵團隊標桿）"
                      ],
                      [
                            "16:20-17:10",
                            "企業家家庭財富規劃與家企的風險隔離之道",
                            "國旭（京師律所合夥人、家族財富管理法律專家）"
                      ],
                      [
                            "17:10-17:40",
                            "從財富顧問，到康壽守護者",
                            "張朋（保險高淨值客戶健康經營賦能導師）"
                      ],
                      [
                            "17:40-17:50",
                            "課程總結",
                            ""
                      ]
                ]
          },
          {
                "id": "d6",
                "title": "DAY 6｜7/19 中篇：探求保險新生態之路",
                "rows": [
                      [
                            "地點",
                            "主會場（山東國際會展中心 4 號館）",
                            "第 23 屆 CMF 國際保險精英圓桌大會"
                      ],
                      [
                            "上午｜組織發展專場",
                            "組織發展專場",
                            "主理人：魏建宏、安建平"
                      ],
                      [
                            "08:20-09:00",
                            "認知突圍——業績倍增心法",
                            "李偉彬（實戰派銷售教練，累計培育百萬學員，憑藉一通電話斬獲 2600 萬淨利潤）"
                      ],
                      [
                            "09:00-09:45",
                            "長期主義：20 年保險路，從個人績優到團隊領袖",
                            "于忠濱（太平人壽連續二十年營業區、直轄部全省第一）"
                      ],
                      [
                            "09:45-10:30",
                            "團隊經營與績優文化建設",
                            "王利忠（中國人壽高級區域總監）"
                      ],
                      [
                            "10:30-10:40",
                            "休息",
                            ""
                      ],
                      [
                            "10:40-11:25",
                            "00 後組織發展：年輕一代的團隊成長密碼",
                            "吳修毅（中國台灣金融保險產業新生代領導者，富邦人壽極具代表性的年輕企業家）"
                      ],
                      [
                            "11:25-12:10",
                            "投保心理學：洞察人性，經營未來——AI 保險時代下的破局",
                            "羅淑瓊（香港中銀人壽資深總監，PP Group 創辦人之一，團隊規模超過 1200 人）"
                      ],
                      [
                            "12:10-13:30",
                            "午餐、休息",
                            ""
                      ],
                      [
                            "下午｜CMF 營銷專場",
                            "CMF 營銷專場",
                            "主理人：呂啟彪、朱磊"
                      ],
                      [
                            "13:30-14:30",
                            "企業家客戶的銷售邏輯",
                            "曹紀平（TMC 千萬圓桌會創始會員，連續二十三年山東省銷售冠軍）"
                      ],
                      [
                            "14:30-15:30",
                            "高客服務與面談的要點解析",
                            "錢文曦（中國太平人壽品質新生態代言人，中國太平 1929 家族辦公室資深事務專家）"
                      ],
                      [
                            "15:30-15:50",
                            "休息",
                            ""
                      ],
                      [
                            "15:50-16:50",
                            "IP 打造與直播獲客",
                            "李揚（明亞北京頂級銷冠、直播億級保費締造者）"
                      ],
                      [
                            "16:50-18:30",
                            "晚餐、休息",
                            ""
                      ],
                      [
                            "18:30-21:30",
                            "CMF 保險明星之夜（地點：主會場）",
                            "泰國精英團隊等眾多保險之星歌舞串燒"
                      ]
                ]
          },
          {
                "id": "d7",
                "title": "DAY 7｜7/20 尾篇：探討保險新生態之策",
                "rows": [
                      [
                            "地點",
                            "主會場（山東國際會展中心 4 號館）",
                            "第 23 屆 CMF 國際保險精英圓桌大會"
                      ],
                      [
                            "上午｜主理人",
                            "尾篇上午課程",
                            "主理人：徐千水、韓綱"
                      ],
                      [
                            "09:00-09:50",
                            "守正創新——2026 資產配置的底層邏輯",
                            "林海川（CMF 大會創始人之一、CMF 大會執行秘書長）"
                      ],
                      [
                            "09:50-10:10",
                            "休息",
                            ""
                      ],
                      [
                            "10:10-11:10",
                            "持續打造績優與高客深度經營",
                            "趙楊（上海分公司資深業務總監、CMF 國際十大保險明星、太保壽險功勳導師）"
                      ],
                      [
                            "11:10-12:00",
                            "如何構建保險新生態",
                            "CMF 主席團（劉朝霞、李江紅、盧小美、吳征宇等）"
                      ],
                      [
                            "12:00-13:30",
                            "午餐、休息",
                            ""
                      ],
                      [
                            "下午｜CMF 嘉年華",
                            "CMF 嘉年華",
                            "嘉賓主持：王妮、春雨"
                      ],
                      [
                            "13:30-14:10",
                            "企業家應具備四個財務思維",
                            "齊昊（財務專家、實戰派 CFO、知名講師）"
                      ],
                      [
                            "14:10-15:10",
                            "國學與保險營銷",
                            "趙玉平（中央電視台《百家講壇》最具人氣主講人，中國十大國學專家、管理學博士）"
                      ],
                      [
                            "15:10-15:50",
                            "休息及節目",
                            ""
                      ],
                      [
                            "15:50-16:40",
                            "人生經營三部曲——保險的智慧",
                            "王辰（清華才子，CMF 特約首席講師）"
                      ],
                      [
                            "16:40-17:10",
                            "柔韌的力量：女性企業家的破局與成長",
                            "李巍（新希望集團聯合創始人）"
                      ],
                      [
                            "17:10-17:30",
                            "閉幕式：精彩再現，再見濟南，相約長沙",
                            ""
                      ]
                ]
          }
    ];

    const courseNoteLinks = new Map([
          [
                "百歲時代：生命科學重構健康與財富的底層邏輯",
                "notes/d5-01-baishidai-yinye.html"
          ],
          [
                "商業的頂級玩法——自媒體事件營銷",
                "notes/d5-02-zhangyifan.html"
          ],
          [
                "壽險常青樹——高淨值客戶銷售解析",
                "notes/d5-03-chudongdong.html"
          ],
          [
                "用家辦思維撬動超高淨值客戶",
                "notes/d5-04-yuqiaoqin.html"
          ],
          [
                "企業家家庭財富規劃與家企的風險隔離之道",
                "notes/d5-05-guoxu.html"
          ],
          [
                "認知突圍——業績倍增心法",
                "notes/d6-01-liweibin.html"
          ],
          [
                "長期主義：20 年保險路，從個人績優到團隊領袖",
                "notes/d6-02-yuzhongbin.html"
          ],
          [
                "團隊經營與績優文化建設",
                "notes/d6-03-wanglizhong.html"
          ],
          [
                "00 後組織發展：年輕一代的團隊成長密碼",
                "notes/d6-04-wuxiuyi.html"
          ],
          [
                "投保心理學：洞察人性，經營未來——AI 保險時代下的破局",
                "notes/d6-05-luoshuking.html"
          ],
          [
                "企業家客戶的銷售邏輯",
                "notes/d6-06-caojiping.html"
          ],
          [
                "高客服務與面談的要點解析",
                "notes/d6-07-qianwenxi.html"
          ],
          [
                "IP 打造與直播獲客",
                "notes/d6-08-liyang.html"
          ],
          [
                "守正創新——2026 資產配置的底層邏輯",
                "notes/d7-01-linhaichuan.html"
          ],
          [
                "人生經營三部曲——保險的智慧",
                "notes/d7-02-wangchen.html"
          ],
          [
                "持續打造績優與高客深度經營",
                "notes/d7-03-zhaoyang.html"
          ],
          [
                "企業家應具備四個財務思維",
                "notes/d7-05-qihao.html"
          ]
    ]);

    const places = [
      { type: "stay", img: image.hQingdao, name: "青島金水皇冠假日飯店", meta: "7/14-7/15 · 青島", addr: "中國山東省青島市李滄區巨峰路175-2號", desc: "第一晚住宿，近李滄商圈。" },
      { type: "stay", img: image.hJinan, name: "美悅雲禧飯店", meta: "7/15-7/21 · 濟南", addr: "山東省濟南市槐蔭區興福寺路2660號", desc: "CMF 期間住宿，近濟南西站與會展中心。" },
      { type: "food", img: image.huifeng, name: "匯豐苑（中山路大鮑島店）", meta: "DAY 2 午餐 · 青島", addr: "青島市市南區大鮑島商圈", desc: "膠東海鮮與經典魯菜。", feat: ["明檔海鮮", "蔥燒海參", "大蝦水煎包"] },
      { type: "food", img: image.taishanFood, name: "神憩賓館餐廳", meta: "DAY 3 午餐 · 泰山", addr: "泰山玉皇頂", desc: "玉皇頂附近用餐，登頂後補給。" },
      { type: "food", img: image.minghuFood, name: "明湖居魯菜館", meta: "DAY 4 午餐 · 濟南", addr: "濟南市大明湖畔", desc: "湖畔魯菜，午餐安排。" },
      { type: "food", img: image.night, name: "環聯夜市", meta: "DAY 2 晚餐自理 · 濟南", addr: "濟南市環聯夜市", desc: "夜市小吃、燒烤與飲品。", feat: ["晚餐自理"] },
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
      ["一套正式服裝", "CMF 課程、晚宴或正式場合可穿著。"],
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
      [33,"李奕寬","富吳通訊處"],[34,"黃彥融","富吳通訊處"],[35,"鄭丞哲","富吳通訊處"],[36,"謝宇軒","富吳通訊處"],
      [37,"戴孜安","富吳通訊處"],[38,"徐瀚","富吳通訊處"],[39,"許嘉晉","富則通訊處"],[40,"侯宏詣","富則通訊處"],
      [41,"簡宏鈞","富能通訊處"],[42,"王昱文","富則通訊處"],[43,"管卓鈞","富能通訊處"],[44,"林桂安","富則通訊處"],
      [45,"簡姵萱","富能通訊處"],[46,"潘韻竹","富則通訊處"],[47,"顏明儀","富則通訊處"],[48,"王思嵐","富則通訊處"],
      [49,"鍾怡婷","富占通訊處"],[50,"林宜潔","富占通訊處"],[51,"傅佳旻","富占通訊處"],[52,"徐維鈴","富占通訊處"],
      [53,"吳品萱","富則通訊處"],[54,"林芳誼","富則通訊處"],[55,"余妏珊","富則通訊處"],[56,"余若馨","富則通訊處"],
      [57,"吳沛錞","富則通訊處"],[58,"李婕詠","富則通訊處"],[59,"李孟珊","富則通訊處"],[60,"黃馨葦","富則通訊處"],
      [61,"蔡承遠","富則通訊處"],[62,"張國興","富則通訊處"],[63,"高智源","富則通訊處"],[64,"王銘宏","富則通訊處"],
      [65,"洪敬忠","富則六通訊處"],[66,"廖宇翔","富則六通訊處"],[67,"張祐珮","富后通訊處"],[68,"施昕余","中銘通訊處"],
      [69,"吳皓誠","富亨通訊處"],[70,"張家瑋","富亨通訊處"],[71,"馬英傑","富亨通訊處"],[72,"林宏威","富亨通訊處"],
      [73,"陳怡萍","富亨通訊處"],[74,"廖家慧","富亨通訊處"],[75,"陳龍生","富鑽通訊處"],[76,"葉金玲","富鑽通訊處"],
      [77,"吳士侃","富北通訊處"],[78,"林瑋","富北通訊處"],[79,"曾翊雯","中沐通訊處"],[80,"王原軍","中沐通訊處"],
      [81,"鄭占禮","富占通訊處"],[82,"孫振文","富北通訊處"],[83,"范毓斌","富占通訊處"],[84,"邱仲恩","富吳通訊處"],
      [85,"吳修毅","富吳通訊處"]
    ];

    const stayPlans = [
      { key: "qingdao", city: "青島", hotel: "青島金水皇冠假日飯店" },
      { key: "jinan", city: "濟南", hotel: "濟南美悅雲禧飯店" }
    ];

    const singleRoomNames = new Set(["范毓斌", "邱仲恩", "吳修毅"]);

    const roomAssignments = {
      // 由 data/濟南房號_總表_吃飯桌次更新.xlsx 匯入；車次座位另由 train-data.js 同步。
      "許智雄": {"group": "1", "single": false, "diningTable": "第1桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "920", "jinanRoom": "2323"},
      "謝政男": {"group": "1", "single": false, "diningTable": "第1桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "920", "jinanRoom": "2323"},
      "何宜家": {"group": "2", "single": false, "diningTable": "第1桌", "dinnerTable": "主桌", "courseGroup": "", "courseLeader": "", "courseExempt": true, "isCourseLeader": false, "qingdaoRoom": "707", "jinanRoom": "2325"},
      "蕭宇晴": {"group": "2", "single": false, "diningTable": "第1桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "707", "jinanRoom": "2325"},
      "蕭如菁": {"group": "3", "single": false, "diningTable": "第1桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "915", "jinanRoom": "2326"},
      "何宜庭": {"group": "3", "single": false, "diningTable": "第1桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "915", "jinanRoom": "2326"},
      "戴東志": {"group": "4", "single": false, "diningTable": "第1桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "517", "jinanRoom": "2328"},
      "詹政杰": {"group": "4", "single": false, "diningTable": "第1桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "517", "jinanRoom": "2328"},
      "吳睿綝": {"group": "5", "single": false, "diningTable": "第1桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "908", "jinanRoom": "2329"},
      "陳懷柔": {"group": "5", "single": false, "diningTable": "第1桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "908", "jinanRoom": "2329"},
      "黃柏瑞": {"group": "6", "single": false, "diningTable": "第2桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "720", "jinanRoom": "2330"},
      "陳其呈": {"group": "6", "single": false, "diningTable": "第2桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "720", "jinanRoom": "2330"},
      "陳武均": {"group": "7", "single": false, "diningTable": "第6桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "515", "jinanRoom": "2331"},
      "陳尚禾": {"group": "7", "single": false, "diningTable": "第6桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "515", "jinanRoom": "2331"},
      "陳昶聿": {"group": "8", "single": false, "diningTable": "第6桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "511", "jinanRoom": "2503"},
      "宋里安": {"group": "8", "single": false, "diningTable": "第6桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "511", "jinanRoom": "2503"},
      "賴芯甯": {"group": "9", "single": false, "diningTable": "第6桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "617", "jinanRoom": "2506"},
      "高泰琳": {"group": "9", "single": false, "diningTable": "第6桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "617", "jinanRoom": "2506"},
      "許瓊云": {"group": "10", "single": false, "diningTable": "第6桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "917", "jinanRoom": "2508"},
      "王姵慈": {"group": "10", "single": false, "diningTable": "第8桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "917", "jinanRoom": "2508"},
      "賴含怡": {"group": "11", "single": false, "diningTable": "第4桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "616", "jinanRoom": "2509"},
      "吳佩姗": {"group": "11", "single": false, "diningTable": "第9桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "616", "jinanRoom": "2509"},
      "王鄆郅": {"group": "12", "single": false, "diningTable": "第9桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "811", "jinanRoom": "2512"},
      "廖冠傑": {"group": "12", "single": false, "diningTable": "第9桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "811", "jinanRoom": "2512"},
      "王騌捷": {"group": "13", "single": false, "diningTable": "第8桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "809", "jinanRoom": "2516"},
      "黃金隆": {"group": "13", "single": false, "diningTable": "第9桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "809", "jinanRoom": "2516"},
      "呂顏伃": {"group": "14", "single": false, "diningTable": "第9桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1108", "jinanRoom": "2519"},
      "陳怡諳": {"group": "14", "single": false, "diningTable": "第9桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1108", "jinanRoom": "2519"},
      "彭莉柔": {"group": "15", "single": false, "diningTable": "第9桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "806", "jinanRoom": "2520"},
      "陳盈蓁": {"group": "15", "single": false, "diningTable": "第9桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "806", "jinanRoom": "2520"},
      "周易慶": {"group": "16", "single": false, "diningTable": "第9桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1007", "jinanRoom": "2522"},
      "林建璋": {"group": "16", "single": false, "diningTable": "第8桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1007", "jinanRoom": "2522"},
      "李奕寬": {"group": "17", "single": false, "diningTable": "第8桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "713", "jinanRoom": "2528"},
      "黃彥融": {"group": "17", "single": false, "diningTable": "第8桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "713", "jinanRoom": "2528"},
      "鄭丞哲": {"group": "18", "single": false, "diningTable": "第4桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1006", "jinanRoom": "2529"},
      "謝宇軒": {"group": "18", "single": false, "diningTable": "第4桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1006", "jinanRoom": "2529"},
      "戴孜安": {"group": "19", "single": false, "diningTable": "第8桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "518", "jinanRoom": "2530"},
      "徐瀚": {"group": "19", "single": false, "diningTable": "第8桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "518", "jinanRoom": "2530"},
      "許嘉晉": {"group": "20", "single": false, "diningTable": "第8桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "916", "jinanRoom": "2531"},
      "侯宏詣": {"group": "20", "single": false, "diningTable": "第8桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "916", "jinanRoom": "2531"},
      "簡宏鈞": {"group": "21", "single": false, "diningTable": "第3桌", "dinnerTable": "主桌", "courseGroup": "", "courseLeader": "", "courseExempt": true, "isCourseLeader": false, "qingdaoRoom": "611", "jinanRoom": "2605"},
      "王昱文": {"group": "21", "single": false, "diningTable": "第7桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "611", "jinanRoom": "2605"},
      "管卓鈞": {"group": "22", "single": false, "diningTable": "第5桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "613", "jinanRoom": "2606"},
      "林桂安": {"group": "22", "single": false, "diningTable": "第7桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "613", "jinanRoom": "2606"},
      "簡姵萱": {"group": "23", "single": false, "diningTable": "第5桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "618", "jinanRoom": "2607"},
      "潘韻竹": {"group": "23", "single": false, "diningTable": "第5桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "618", "jinanRoom": "2607"},
      "傅佳旻": {"group": "24", "single": false, "diningTable": "第3桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "607", "jinanRoom": "2612"},
      "徐維鈴": {"group": "24", "single": false, "diningTable": "第3桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "607", "jinanRoom": "2612"},
      "鍾怡婷": {"group": "25", "single": false, "diningTable": "第3桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1015", "jinanRoom": "2609"},
      "林宜潔": {"group": "25", "single": false, "diningTable": "第3桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1015", "jinanRoom": "2609"},
      "顏明儀": {"group": "26", "single": false, "diningTable": "第5桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "603", "jinanRoom": "2608"},
      "王思嵐": {"group": "26", "single": false, "diningTable": "第5桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "603", "jinanRoom": "2608"},
      "吳品萱": {"group": "27", "single": false, "diningTable": "第4桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "907", "jinanRoom": "2613"},
      "林芳誼": {"group": "27", "single": false, "diningTable": "第7桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "907", "jinanRoom": "2613"},
      "余妏珊": {"group": "28", "single": false, "diningTable": "第4桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "703", "jinanRoom": "2615"},
      "余若馨": {"group": "28", "single": false, "diningTable": "第4桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "703", "jinanRoom": "2615"},
      "吳沛錞": {"group": "29", "single": false, "diningTable": "第7桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "906", "jinanRoom": "2616"},
      "李婕詠": {"group": "29", "single": false, "diningTable": "第7桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "906", "jinanRoom": "2616"},
      "李孟珊": {"group": "30", "single": false, "diningTable": "第4桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "1020", "jinanRoom": "2618"},
      "黃馨葦": {"group": "30", "single": false, "diningTable": "第7桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1020", "jinanRoom": "2618"},
      "蔡承遠": {"group": "31", "single": false, "diningTable": "第3桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "507", "jinanRoom": "2620"},
      "張國興": {"group": "31", "single": false, "diningTable": "第3桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "507", "jinanRoom": "2620"},
      "高智源": {"group": "32", "single": false, "diningTable": "第4桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "608", "jinanRoom": "2623"},
      "王銘宏": {"group": "32", "single": false, "diningTable": "第4桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "608", "jinanRoom": "2623"},
      "洪敬忠": {"group": "33", "single": false, "diningTable": "第7桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "716", "jinanRoom": "2626"},
      "廖宇翔": {"group": "33", "single": false, "diningTable": "第7桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "716", "jinanRoom": "2626"},
      "張祐珮": {"group": "34", "single": false, "diningTable": "第2桌", "dinnerTable": "第8桌", "courseGroup": "第8組", "courseLeader": "張祐珮", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "903", "jinanRoom": "2628"},
      "施昕余": {"group": "34", "single": false, "diningTable": "第2桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "903", "jinanRoom": "2628"},
      "吳皓誠": {"group": "35", "single": false, "diningTable": "第2桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "820", "jinanRoom": "2629"},
      "張家瑋": {"group": "35", "single": false, "diningTable": "第2桌", "dinnerTable": "第3桌", "courseGroup": "第3組", "courseLeader": "宋里安", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "820", "jinanRoom": "2629"},
      "馬英傑": {"group": "36", "single": false, "diningTable": "第2桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1106", "jinanRoom": "2630"},
      "林宏威": {"group": "36", "single": false, "diningTable": "第2桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "1106", "jinanRoom": "2630"},
      "陳怡萍": {"group": "37", "single": false, "diningTable": "第2桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "516", "jinanRoom": "2631"},
      "廖家慧": {"group": "37", "single": false, "diningTable": "第2桌", "dinnerTable": "第9桌", "courseGroup": "第9組", "courseLeader": "許智雄", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "516", "jinanRoom": "2631"},
      "陳龍生": {"group": "38", "single": false, "diningTable": "第5桌", "dinnerTable": "第6桌", "courseGroup": "第6組", "courseLeader": "洪敬忠", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "513", "jinanRoom": "3023"},
      "葉金玲": {"group": "38", "single": false, "diningTable": "第5桌", "dinnerTable": "第1桌", "courseGroup": "第1組", "courseLeader": "黃柏瑞", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "513", "jinanRoom": "3023"},
      "吳士侃": {"group": "39", "single": false, "diningTable": "第5桌", "dinnerTable": "第7桌", "courseGroup": "第7組", "courseLeader": "陳昶聿", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "911", "jinanRoom": "3025"},
      "林瑋": {"group": "39", "single": false, "diningTable": "第5桌", "dinnerTable": "第2桌", "courseGroup": "第2組", "courseLeader": "顏明儀", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "911", "jinanRoom": "3025"},
      "曾翊雯": {"group": "40", "single": false, "diningTable": "第6桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "803", "jinanRoom": "3026"},
      "王原軍": {"group": "40", "single": false, "diningTable": "第6桌", "dinnerTable": "主桌", "courseGroup": "", "courseLeader": "", "courseExempt": true, "isCourseLeader": false, "qingdaoRoom": "803", "jinanRoom": "3026"},
      "鄭占禮": {"group": "41", "single": false, "diningTable": "第3桌", "dinnerTable": "主桌", "courseGroup": "", "courseLeader": "", "courseExempt": true, "isCourseLeader": false, "qingdaoRoom": "1008", "jinanRoom": "3027"},
      "孫振文": {"group": "41", "single": false, "diningTable": "第3桌", "dinnerTable": "主桌", "courseGroup": "", "courseLeader": "", "courseExempt": true, "isCourseLeader": false, "qingdaoRoom": "1008", "jinanRoom": "3027"},
      "范毓斌": {"group": "42", "single": true, "diningTable": "第3桌", "dinnerTable": "第4桌", "courseGroup": "第4組", "courseLeader": "范毓斌", "courseExempt": false, "isCourseLeader": true, "qingdaoRoom": "606", "jinanRoom": "3011"},
      "邱仲恩": {"group": "43", "single": true, "diningTable": "第8桌", "dinnerTable": "第5桌", "courseGroup": "第5組", "courseLeader": "李孟珊", "courseExempt": false, "isCourseLeader": false, "qingdaoRoom": "807", "jinanRoom": "3018"},
      "吳修毅": {"group": "44", "single": true, "diningTable": "第4桌", "dinnerTable": "主桌", "courseGroup": "", "courseLeader": "", "courseExempt": true, "isCourseLeader": false, "qingdaoRoom": "913", "jinanRoom": "3022"},
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

    function todayKey() {
      const now = new Date();
      return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    }

    function updateCountdown() {
      if (document.hidden) return;
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
      const today = todayKey();
      $("#dayList").innerHTML = days.map((day) => {
        const search = normalized([day.no, day.date, day.title, day.tone, ...day.tags, ...day.items.flat()].join(" "));
        const items = day.items.map(([time, title, desc]) => `
          <div class="segment">
            <time>${esc(time)}</time>
            <div><b>${esc(title)}</b><span>${esc(desc)}</span></div>
          </div>
        `).join("");
        const tagText = day.tags.includes("course") ? "課程日" : day.tags.includes("move") ? "移動日" : "城市日";
        const isToday = day.key === today;
        return `
          <article class="day-card reveal" data-day="${esc(day.id)}" data-tags="${esc(day.tags.join(" "))}" data-search="${esc(search)}">
            <div class="day-media">
              <img src="${esc(day.img)}" alt="${esc(day.title)}" width="1200" height="700" loading="lazy" decoding="async">
              <div class="day-stamp"><b>${esc(day.no)} · ${esc(day.date)}</b><span>${esc(tagText)}${isToday ? '<i class="today-flag">今天</i>' : ""}</span></div>
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

    function scrollToDayCard(dayId) {
      const card = document.querySelector(`.day-card[data-day="${dayId}"]`);
      if (!card) return;
      const top = window.scrollY + card.getBoundingClientRect().top - 130;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      card.classList.add("day-focus");
      clearTimeout(scrollToDayCard.timer);
      scrollToDayCard.timer = setTimeout(() => card.classList.remove("day-focus"), 1600);
    }

    function renderDayJump() {
      const today = todayKey();
      $("#dayJump").innerHTML = days.map((day) => {
        const isToday = day.key === today;
        return `<button type="button" data-day="${esc(day.id)}"${isToday ? ' class="today"' : ""}>${esc(day.no.replace("DAY ", "D"))}<span>${esc(day.date.slice(5, 10))}</span></button>`;
      }).join("");
      $$("#dayJump button").forEach((button) => {
        button.addEventListener("click", () => scrollToDayCard(button.dataset.day));
      });
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
          const noteHref = courseNoteLinks.get(row[1]);
          return `
            <div class="course-row${sectionRow ? " course-section-row" : ""}${featured ? " featured-course-row" : ""}" data-search="${esc(search)}">
              <div class="course-time">
                <span>${esc(row[0])}</span>
                ${noteHref ? `<a class="course-note-link" href="${esc(noteHref)}">筆記</a>` : ""}
              </div>
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
            <div class="course-rows-wrap${open ? " open" : ""}"><div class="course-rows">${rows}</div></div>
          </article>
        `;
      }).join("");
      $$(".course-head").forEach((button) => {
        button.addEventListener("click", () => {
          const wrap = button.nextElementSibling;
          const open = wrap.classList.toggle("open");
          button.setAttribute("aria-expanded", String(open));
          button.lastElementChild.textContent = open ? "收合" : "展開";
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
          day.querySelector(".course-rows-wrap").classList.add("open");
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
      const wrap = day?.querySelector(".course-rows-wrap");
      const wasOpen = wrap?.classList.contains("open");
      if (head && wrap) {
        wrap.classList.add("open");
        head.setAttribute("aria-expanded", "true");
        head.lastElementChild.textContent = "收合";
      }
      setTimeout(() => {
        const top = window.scrollY + featured.getBoundingClientRect().top - 170;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        featured.classList.add("featured-focus");
        clearTimeout(focusFeaturedCourse.timer);
        focusFeaturedCourse.timer = setTimeout(() => featured.classList.remove("featured-focus"), 1800);
      }, wasOpen ? 30 : 330);
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

    function updateCheckProgress() {
      const inputs = $$("#checkList input");
      const done = inputs.filter((input) => input.checked).length;
      $("#checkProgressText").textContent = `已完成 ${done}/${inputs.length}`;
      $("#checkProgressFill").style.width = inputs.length ? `${Math.round((done / inputs.length) * 100)}%` : "0%";
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
          updateCheckProgress();
        });
      });
      updateCheckProgress();
    }

    function resolveRoomNo(personRoom, roomKey) {
      if (personRoom[roomKey]) return personRoom[roomKey];
      const match = Object.values(roomAssignments).find((item) => item.group === personRoom.group && item[roomKey]);
      return match ? match[roomKey] : "";
    }

    function renderRosterResult(person, options = {}) {
      if (!person) {
        $("#rosterResult").classList.remove("has-result", "result-updated");
        $("#rosterResult").innerHTML = `<div class="result-name">找不到資料</div><div>請確認姓名是否與名單一致，或只輸入其中一個字查詢。</div>`;
        return;
      }
      const personName = person[1];
      const personRoom = roomAssignments[personName] || {};
      const trainInfo = window.CMF_TRAIN_INFO || {};
      const returnTrain = trainInfo.return || {};
      const trainSeat = (window.CMF_TRAIN_ASSIGNMENTS || {})[personName] || {};
      const returnTrainSeat = (window.CMF_RETURN_TRAIN_ASSIGNMENTS || {})[personName] || {};
      const hasReturnTrainSeat = Boolean(returnTrainSeat.car && returnTrainSeat.seat);
      const latestAssignment = (window.CMF_LATEST_ASSIGNMENTS || {})[personName] || {};
      const courseMainText = personRoom.courseGroup || (personRoom.courseExempt ? "免分組" : "待補");
      const courseSubText = personRoom.courseLeader
        ? `組長：${esc(personRoom.courseLeader)}`
        : (personRoom.courseExempt ? "處經理" : "");
      const badge = (text, tone = "ok") => `<span class="status-pill ${esc(tone)}">${esc(text)}</span>`;
      const section = (title, badges, body) => `
        <section class="lookup-section">
          <div class="lookup-section-head">
            <h3>${esc(title)}</h3>
            <div class="status-row">${badges.join("")}</div>
          </div>
          ${body}
        </section>
      `;
      const assignmentHtml = `
        <div class="assignment-grid">
          <div class="assignment-box">
            <span>用餐桌次</span>
            <b>${esc(latestAssignment.diningTable || personRoom.diningTable || "待補")}</b>
          </div>
          <div class="assignment-box">
            <span>晚宴桌次</span>
            <b>${esc(personRoom.dinnerTable || "待補")}</b>
          </div>
          <div class="assignment-box">
            <span>課程分組</span>
            <b>${esc(courseMainText)}</b>
            ${courseSubText ? `<small>${courseSubText}</small>` : ""}
          </div>
        </div>
      `;
      const trainHtml = `
        <div class="transport-subhead">
          <span>高鐵車次</span>
          <b>${esc(trainInfo.trainNo || "G1074")} / ${esc(returnTrain.trainNo || "G5597")}</b>
        </div>
        <div class="train-timeline">
          <div class="timeline-leg confirmed">
            <span class="timeline-dot"></span>
            <div class="timeline-leg-main">
              <span>去程</span>
              <b>${esc(trainInfo.trainNo || "G1074")}｜${esc(trainInfo.route || "青島 → 濟南")}</b>
              <small>${esc(trainInfo.date || "7/15")}　${esc(trainInfo.time || "14:36–17:20")}</small>
            </div>
          </div>
          <div class="train-seat-strip">
            <div>
              <span>去程車廂</span>
              <b>${esc(trainSeat.car || "待補")}</b>
            </div>
            <div>
              <span>去程座位</span>
              <b>${esc(trainSeat.seat || "待補")}</b>
            </div>
          </div>
          <div class="timeline-leg ${hasReturnTrainSeat ? "confirmed" : "pending"}">
            <span class="timeline-dot"></span>
            <div class="timeline-leg-main">
              <span>回程</span>
              <b>${esc(returnTrain.trainNo || "G5597")}｜${esc(returnTrain.route || "濟南 → 青島機場")}</b>
              <small>${esc(returnTrain.date || "7/21")}　${esc(returnTrain.time || "08:37–10:38")}</small>
            </div>
          </div>
          <div class="train-seat-strip ${hasReturnTrainSeat ? "" : "pending"}">
            <div>
              <span>回程車廂</span>
              <b>${esc(returnTrainSeat.car || "後續更新")}</b>
            </div>
            <div>
              <span>回程座位</span>
              <b>${esc(returnTrainSeat.seat || "後續更新")}</b>
            </div>
          </div>
        </div>
      `;
      const busHtml = `
        <div class="bus-assignment">
          <span>遊覽車次</span>
          <b>${esc(latestAssignment.tourBus || "待補")}</b>
          <small>全程請依此車次集合</small>
        </div>
      `;
      const stayHtml = stayPlans.map((stay) => {
        const roomKey = `${stay.key}Room`;
        const roomNo = resolveRoomNo(personRoom, roomKey);
        const single = personRoom.single || personRoom[`${stay.key}Single`] || singleRoomNames.has(personName);
        const roommates = roster
          .filter((item) => item[1] !== personName)
          .filter((item) => {
            const otherRoom = roomAssignments[item[1]] || {};
            if (roomNo && resolveRoomNo(otherRoom, roomKey) === roomNo) return true;
            return personRoom.group && otherRoom.group === personRoom.group;
          })
          .map((item) => item[1]);
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
      const result = $("#rosterResult");
      result.classList.add("has-result");
      result.innerHTML = `
        <div class="result-name">${esc(personName)}</div>
        <div class="result-unit">${esc(person[2])}</div>
        <div class="lookup-sections">
          ${section("交通資訊", [badge("遊覽車已確認"), badge("去程高鐵已確認"), hasReturnTrainSeat ? badge("回程座位已確認") : badge("回程座位待更新", "pending")], `${busHtml}${trainHtml}`)}
          ${section("住宿資訊", [badge("住宿已列"), badge("房號待補", "pending")], stayHtml)}
          ${section("活動資訊", [badge("桌次已確認"), badge("課程分組已列")], assignmentHtml)}
        </div>
      `;
      result.classList.remove("result-updated");
      void result.offsetWidth;
      result.classList.add("result-updated");
      result.querySelectorAll(".lookup-section").forEach((node, index) => {
        node.style.setProperty("--section-delay", `${index * 70}ms`);
      });
      if (options.scroll) {
        requestAnimationFrame(() => {
          result.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }

    function updateRoster() {
      const query = $("#nameSearch").value.trim();
      const matches = query ? roster.filter((person) => person[1].includes(query) || person[2].includes(query)).slice(0, 8) : [];
      $("#suggestions").innerHTML = matches.map((person) => `<button type="button" data-name="${esc(person[1])}">${esc(person[1])}<span> · ${esc(person[2].slice(0, 2))}</span></button>`).join("");
      $$("#suggestions button").forEach((button) => {
        button.addEventListener("click", () => {
          $("#nameSearch").value = button.dataset.name;
          $("#suggestions").innerHTML = "";
          renderRosterResult(roster.find((person) => person[1] === button.dataset.name), { scroll: true });
        });
      });
      const exact = roster.find((person) => person[1] === query);
      if (exact) renderRosterResult(exact, { scroll: true });
      if (!query) {
        $("#rosterResult").classList.remove("has-result", "result-updated");
        $("#rosterResult").innerHTML = `<div class="result-name">尚未查詢</div><div>輸入姓名查車次、遊覽車次、桌次與住宿。</div>`;
      }
    }

    function bindSegmented(containerId, callback) {
      $$(containerId + " button").forEach((button) => {
        button.addEventListener("click", () => {
          $$(containerId + " button").forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          callback();
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
      $("#prepShortcut").classList.remove("is-active");
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

    const pageScroll = {};
    let itineraryAutoScrolled = false;

    function setActivePage(page, updateHash = true) {
      const active = pageForHash("#" + page);
      const prevNode = document.querySelector(".app-page.active[id]") || document.querySelector(".app-page.active");
      const prev = prevNode ? prevNode.dataset.page : null;
      if (prev && prev !== active) pageScroll[prev] = window.scrollY;
      $$("[data-page]").forEach((node) => node.classList.toggle("active", node.dataset.page === active));
      $$("#bottomTabs .app-tab").forEach((button) => {
        const selected = button.dataset.tab === active;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-selected", String(selected));
      });
      updateTopbar(active);
      animateActivePage();
      window.scrollTo({ top: prev === active ? window.scrollY : (pageScroll[active] || 0), behavior: "auto" });
      if (updateHash && location.hash !== "#" + active) history.replaceState(null, "", "#" + active);
      if (active === "itinerary" && !itineraryAutoScrolled) {
        itineraryAutoScrolled = true;
        const match = days.find((day) => day.key === todayKey());
        if (match && !pageScroll[active]) setTimeout(() => scrollToDayCard(match.id), 320);
      }
    }

    function setupTabs() {
      const tabs = $$("#bottomTabs .app-tab");
      tabs.forEach((button, index) => {
        button.addEventListener("click", () => setActivePage(button.dataset.tab));
        button.addEventListener("keydown", (event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
          event.preventDefault();
          const next = tabs[(index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
          next.focus();
          setActivePage(next.dataset.tab);
        });
      });
      $("#prepShortcut").addEventListener("click", () => { window.location.href = "learning-notes.html?v=20260720-16"; });
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
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) updateCountdown();
    });
    renderDays();
    renderDayJump();
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

    // 中文輸入法組字期間不觸發查詢，避免注音/拼音過程閃爍
    let nameComposing = false;
    const nameSearchInput = $("#nameSearch");
    nameSearchInput.addEventListener("compositionstart", () => { nameComposing = true; });
    nameSearchInput.addEventListener("compositionend", () => { nameComposing = false; updateRoster(); });
    nameSearchInput.addEventListener("input", () => { if (!nameComposing) updateRoster(); });

    bindSegmented("#dayFilters", filterDays);
    bindSegmented("#courseFilters", filterCourses);
    bindSegmented("#placeFilters", filterPlaces);

    // 下拉更新：頁面頂端往下拉超過門檻，放開即重新載入（配合 SW 網路優先，一定拿到最新版）
    (function setupPullToRefresh() {
      const ptr = $("#ptr");
      if (!ptr || !("ontouchstart" in window)) return;
      const label = ptr.querySelector("span");
      const THRESHOLD = 75;
      let startY = 0;
      let pulling = false;
      let dist = 0;
      window.addEventListener("touchstart", (event) => {
        if (window.scrollY > 0) { pulling = false; return; }
        startY = event.touches[0].clientY;
        pulling = true;
        dist = 0;
      }, { passive: true });
      window.addEventListener("touchmove", (event) => {
        if (!pulling) return;
        dist = event.touches[0].clientY - startY;
        if (dist <= 10 || window.scrollY > 0) {
          ptr.classList.remove("show", "ready");
          return;
        }
        const pull = Math.min(dist, 130);
        ptr.style.setProperty("--pull", `${pull}px`);
        ptr.classList.add("show");
        ptr.classList.toggle("ready", pull >= THRESHOLD);
        label.textContent = pull >= THRESHOLD ? "放開立即更新" : "下拉更新";
      }, { passive: true });
      window.addEventListener("touchend", () => {
        if (!pulling) return;
        pulling = false;
        if (dist >= THRESHOLD && window.scrollY <= 0) {
          label.textContent = "更新中…";
          ptr.classList.add("loading");
          (async () => {
            try {
              if (window.caches) { const keys = await caches.keys(); await Promise.all(keys.map((k) => caches.delete(k))); }
              if (navigator.serviceWorker) { const regs = await navigator.serviceWorker.getRegistrations(); await Promise.all(regs.map((r) => r.update())); }
            } catch (_) {}
            const u = new URL(location.href);
            u.searchParams.set("r", Date.now().toString(36));
            location.replace(u.toString());
          })();
        } else {
          ptr.classList.remove("show", "ready");
        }
        dist = 0;
      }, { passive: true });
    })();

    // 離線快取：GitHub Pages / 靜態主機上自動啟用
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(() => {});
      });
    }

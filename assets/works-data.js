/* =========================================================
   作品データ（WORKS一覧と各作品ページの両方がここを読みます）
   ---------------------------------------------------------
   作品を増やすときは { ... }, のかたまりを1つコピーして書き換えるだけ。
   上にあるものほど一覧の先頭に表示されます。

   id     : 半角英数字とハイフンのみ。作品ページのURLになります（重複NG）
   name   : たちばな茶なら "cha"、634なら "m"
   title  : 作品タイトル
   date   : 制作年月など（空でもOK）
   thumb  : 一覧のサムネ画像（空欄なら images の1枚目を使います）
   thumbCrop : サムネの切り抜き位置と拡大率 { x, y, z }（admin.html でドラッグして調整）
   youtube: YouTubeのURL（任意）。作品ページにサムネと▶ボタンが出て、押すとYouTubeが開きます。画像がなければYouTubeのサムネを使います
   images : 作品ページに載せる画像（切り抜かれず全体が表示されます。何枚でもOK）
   text   : 作品ページの説明文（改行したいところは \n）
   ========================================================= */
window.WORKS = [
  {
    "id": "rei-thumbnail",
    "name": "cha",
    "title": "【イラスト】サムネイルイラスト",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "sakimori-rei-thumb.jpg"
    ],
    "text": "VTuber廻森レイ様のサムネイル用イラストを制作しました。"
  },
  {
    "id": "chaoszero-vtuber-vol2",
    "name": "cha",
    "title": "【SDイラスト】#カオスゼロナイトメア × VTuberイベント VTuberカオスゼロプロジェクトVol.2",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "chaoszero-vol2.jpg"
    ],
    "text": "株式会社AttendMe様 #カオスゼロナイトメア × VTuberイベント\nVTuberカオスゼロプロジェクトVol.2 SDイラストを制作しました。"
  },
  {
    "id": "skeb-2026",
    "name": "m",
    "title": "【イラスト】2026skeb",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "skeb2026-01.jpg",
      "skeb2026-02.jpg",
      "skeb2026-03.jpg",
      "skeb2026-04.jpg",
      "skeb2026-05.jpg",
      "skeb2026-06.jpg",
      "skeb2026-07.jpg",
      "skeb2026-08.jpg",
      "skeb2026-09.jpg"
    ],
    "text": ""
  },
  {
    "id": "pines-vtuber-present",
    "name": "cha",
    "title": "【SDイラスト】VTuberプレゼント争奪戦",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "pines-present.jpg"
    ],
    "text": "株式会社PINES様 VTuberプレゼント争奪戦の景品用SDイラストを制作しました。"
  },
  {
    "id": "ptw1n-fragger-mode",
    "name": "m",
    "title": "【グッズデザイン/イラスト】アパレルデザイン",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "ptw1n-01.jpg",
      "ptw1n-02.jpg",
      "ptw1n-03.jpg"
    ],
    "text": "アパレル商品「PTW1N -FRAGGER MODE」\nイラスト・グラフィックデザインを担当しました。\n\n詳細▶︎https://ptw1n.shiftia.jp/"
  },
  {
    "id": "mv-yameru-toki",
    "name": "cha",
    "title": "【MV】病めるときしか誓えないかも / 重音テトSV",
    "date": "2026.11",
    "youtube": "https://youtu.be/P4LPxzWaVbU?si=yYkZqgdc0PA83HmG",
    "thumb": "",
    "images": [],
    "text": "ひさかげ様の楽曲「病める時しか誓えないかも」のMVとイラストを担当しました。"
  },
  {
    "id": "mv-emerald-iro",
    "name": "m",
    "title": "【MV】エメラルド cover-Iro",
    "date": "2026.11",
    "youtube": "https://youtu.be/9YbqwyIcZJY?si=kk6J1SH9CGgyyys1",
    "thumb": "",
    "images": [],
    "text": "Iro様のcoverMV「エメラルド cover-Iro」のMVとイラストを担当しました。\n原曲：キタニタツヤ様"
  },
  {
    "id": "bns-neo-bibi",
    "name": "cha",
    "title": "【SDイラスト】AtenndMe×ブレイドアンドソウルNEO",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "bns-neo-bibi.jpg"
    ],
    "text": "株式会社PINES様 景品用イラスト 音狼ビビ様のSDイラストを制作しました。"
  },
  {
    "id": "seisoku-goods",
    "name": "m",
    "title": "【グッズ】生存者の息継ぎ",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "seisoku-01.jpg",
      "seisoku-02.jpg"
    ],
    "text": "イラストレーター・四津田スンさん主催イベント、滋賀県甲賀市にて『生存者の息継ぎ（生息）』にご招待いただき出展させていただきました。\nイベントについて☞https://x.com/cojp35176498/status/2093132460880212236?s=46\n\nこちらは展示・販売させていただいたグッズの一部です。\n一枚目はアクリルキャンバス原画、\n二枚目はTシャツ（完売済み、現状再販予定なし）\nになります。"
  },
  {
    "id": "logo-mdlab-ptw1n",
    "name": "m",
    "title": "【ロゴデザイン】MDLAB/PTW1N",
    "date": "2026",
    "youtube": "",
    "thumb": "",
    "images": [
      "logo-mdlab-ptw1n.jpg"
    ],
    "text": "株式会社SFTIA様\n\nクリエイターブランド MDLAB\nアパレル商品 PTW1N\n\nのメインロゴを制作させていただきました。"
  }
];

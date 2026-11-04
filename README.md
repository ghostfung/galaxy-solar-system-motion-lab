# 銀河系與太陽系運動實驗室
### Galaxy & Solar System Motion Lab

[繁體中文](README.md) · [English](README.en.md)

### 🌌 [線上體驗模擬器（Live Demo）](https://ghostfung.github.io/galaxy-solar-system-motion-lab/)

> 💻 **最佳體驗建議：請使用電腦版瀏覽器（Chrome、Edge 或 Firefox）開啟。** 本專案包含即時 3D 渲染、自由鏡頭與多項互動操作；手機和平板可能因螢幕尺寸與效能限制而影響使用體驗。

一個可直接在瀏覽器使用的互動式 3D 天文視覺化專案。從八大行星、地月運動、哈雷彗星與航海家一號，到銀河系、附近矮星系、仙女座星系、黑洞及獵戶座腰帶三顆恆星，透過可自由操作的鏡頭觀察宇宙中的運動關係。

> **重要：這是教育及視覺探索工具，不是精密天體力學模擬器。** 為了讓行星與星系可見，天體直徑、天體間距離與不同尺度間的間距皆經過視覺調整。部分軌跡、恆星相對位置、星系互動及黑洞效果為近似或示意。見 [科學模型說明](SCIENCE_NOTES.md)。

## 功能

- **八大行星 3D 公轉**：使用近似 JPL 軌道根數、各別升交點與近日點方向；支援黃道側視及傾角放大。
- **地月觀察**：月球公轉、月相及日月食形成條件的教學示意。
- **銀河系與鄰近星系**：可聚焦銀心、仙女座、三角座及附近矮星系，查看雙語資料卡。
- **獵戶座腰帶**：參宿一 Alnitak、參宿二 Alnilam、參宿三 Mintaka，提供「太陽方向」與「3D 側視」比較。
- **視角與時間控制**：自由視角、物理時間及展示模式、速度控制、縮放、焦點切換、自動導覽。
- **顯示控制**：運動光軌、八大行星與哈雷彗星軌道線、黃道及銀道參考面可切換顯示。
- **雙語介面**：繁體中文 / English。
- **真實來源影像資料卡**：使用可追溯至 NASA、ESA/Hubble、ESO、NOIRLab 等機構與 Wikimedia Commons 的影像，來源與授權**另列於** [素材授權表](ASSETS_CREDITS.md)。

## 立即使用

本專案無須安裝依賴或編譯。

1. 下載此專案全部檔案。
2. 使用最新的 Chrome、Edge 或 Firefox 開啟 `index.html`。
3. 請保持網路連線：3D 程式庫、介面樣式、字體，以及大部分資料卡的照片會從外部網站載入。
4. 若瀏覽器開啟 `file://` 時受到限制，可使用本機靜態伺服器：

   ```bash
   python -m http.server 8000
   ```
   然後開啟 `http://localhost:8000/`。

> **線上版本**：可直接使用 [GitHub Pages 線上模擬器](https://ghostfung.github.io/galaxy-solar-system-motion-lab/)，無須下載或安裝。自行部署方式參閱 [發佈說明](PUBLISHING.md)。

## 預設畫面

| 設定 | 預設 |
| --- | --- |
| 時間模式 | 物理時間模式 |
| 鏡頭焦點 | 太陽 |
| 模擬速度 | 0.1 年／秒 |
| 畫面縮放 | 50% |
| 天體運動光軌 | 顯示 |
| 行星及哈雷彗星軌道線 | 隱藏，可手動開啟 |
| 黃道面與銀道面網格 | 隱藏，可手動開啟 |

## 技術架構

- 原生 HTML / CSS / JavaScript，單頁應用。
- [Three.js](https://threejs.org/) r128：3D 場景與互動鏡頭（從 CDN 載入）。
- [Tailwind CSS](https://tailwindcss.com/)：部分介面樣式（目前從 CDN 載入）。
- Google Fonts：Inter、JetBrains Mono（從網路載入）。
- 不需要伺服器資料庫，也不需使用者登入。

目前程式以單一 `index.html` 優先保持容易下載及修改；歡迎提交模組化重構，但請避免破壞既有功能。

## 科學準確性

行星公轉週期、傾角與方向採用近似參數；跨尺度距離、月球距離、恆星與星系運動採示意縮放。黑洞重力透鏡為電影化視覺表現，**不是**光線追跡的廣義相對論解。詳情參閱 [SCIENCE_NOTES.md](SCIENCE_NOTES.md)。

## 參與開發

歡迎建議、回報錯誤、提交 Pull Request，也歡迎 Fork 和修改。

請先閱讀 [CONTRIBUTING.md](CONTRIBUTING.md)。如有新的天文圖片，請提供影像的**原始頁面、作者、授權及必要署名**；未釐清授權的圖片請勿直接加入程式。

## 授權與著作權

專案原創程式碼及原創文件依 [MIT License](LICENSE) 釋出；**NASA、ESA、ESO、NOIRLab、Wikimedia、Google Fonts、Three.js、Tailwind 及其他第三方素材不因此變成 MIT 授權**。請參閱 [ASSETS_CREDITS.md](ASSETS_CREDITS.md)；獵戶座照片採 CC BY-SA 4.0。

本專案與 NASA、ESA、ESO、NOIRLab 及其他資料提供者無官方合作、支持或背書關係。

---

### 專案現況

版本：**v1.0.0 公開程式版本（V11 模擬器基礎）**。功能內容可供使用，但**官方影像署名及資料卡授權連結已重新核對；內嵌地球貼圖的 Basemap Data／NASA 來源鏈，以及實際瀏覽器的外部圖片載入仍需最終驗收**。請勿將整份程式碼和第三方圖片統稱為 MIT。
> **素材授權提醒**：地球貼圖源自 NASA Earth Observatory 的 Blue Marble，並透過 Basemap Data（LGPL）取得；ESA Giotto 哈雷彗星影像有獨立使用條件。詳見 [ASSETS_CREDITS.md](ASSETS_CREDITS.md)。

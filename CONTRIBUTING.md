# 參與貢獻 / Contributing

## 繁體中文

歡迎 Fork、修正問題、改善動畫或補充天文資料。

1. 先在 Issues 描述問題，或說明預計修改的功能。
2. 從 `main` 建立功能分支，例如 `fix/moon-orbit`。
3. 修改 `index.html`，盡量保持既有 UI、時間控制與雙語功能正常。
4. 執行 `node tests/smoke.mjs`，再用 Chrome／Edge 手動測試。
5. 提交 Pull Request，說明修改原因、測試方式，必要時附前後截圖。
6. 新增照片時請同步更新 `ASSETS_CREDITS.md`，並提供**作者、來源、授權、必要署名與修改說明**。來源無法確認就先不要納入。

**重要：** Fork 可以自行修改；合併至原專案的內容仍由維護者審核。不接受未標示來源的圖片、可疑機密、與課題無關的廣告連結。

## English

Forks, bug fixes, rendering improvements, and astronomy corrections are welcome.

1. Open an issue (or discuss the change) before substantial work.
2. Create a feature branch from `main` (for example `fix/moon-orbit`).
3. Keep existing language switching, camera modes, and timeline controls working.
4. Run `node tests/smoke.mjs` and manually smoke-test the app in a modern browser.
5. Submit a PR with a concise explanation, test evidence, and screenshots when helpful.
6. **For every new external image**, record the creator, original page, license, required credit and modifications in `ASSETS_CREDITS.md`.

Do not submit private keys, passwords, unrelated advertising, or images without verifiable redistribution rights.

## Pull request checklist

- [ ] No secrets or sensitive information
- [ ] Traditional Chinese and English UIs checked
- [ ] Existing modes and default settings preserved
- [ ] Source/licensing of any new media documented
- [ ] `node tests/smoke.mjs` passed
# Codex Handbook

<p align="center">
  <img src="./public/logo-origin.png" alt="Codex Handbook Logo" width="180" />
</p>

<p align="center">
  <img src="./cover-image/codex-handbook-cover/cover.png" alt="Codex Handbook Cover" width="100%" />
</p>

<p align="center"><strong>Codex 系統化手冊與實踐知識庫</strong></p>

<p align="center">
  <a href="./README.md">简体中文</a>
  ·
  <a href="./README.en.md">English</a>
  ·
  <a href="./README.zh-TW.md">繁體中文</a>
  ·
  <a href="./README.fr.md">Français</a>
  ·
  <a href="./README.ja.md">日本語</a>
  ·
  <a href="./README.ko.md">한국어</a>
  ·
  <a href="./README.es.md">Español</a>
  ·
  <a href="./README.de.md">Deutsch</a>
  ·
  <a href="./README.pt.md">Português</a>
  ·
  <a href="./README.vi.md">Tiếng Việt</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/zh-tw/">線上閱讀</a>
  ·
  <a href="./src/content/docs/guide/index.md">新手指南</a>
  ·
  <a href="./docs/planning/content-architecture.md">內容架構</a>
  ·
  <a href="./ROADMAP.md">路線圖</a>
  ·
  <a href="./examples/README.md">範例庫</a>
</p>

<p align="center">
  <a href="https://codexhandbook.com/"><img src="https://img.shields.io/badge/website-codexhandbook.com-1d4ed8" alt="Website" /></a>
  <a href="https://codexhandbook.com/zh-tw/"><img src="https://img.shields.io/badge/docs-handbook-2563eb" alt="Docs" /></a>
  <a href="https://starlight.astro.build/"><img src="https://img.shields.io/badge/built%20with-Starlight-f97316" alt="Built with Starlight" /></a>
</p>

> 從第一次打開 Codex，到把它真正用進專案、工作流與長期知識沉澱。  
> 這不是一份零散技巧合集，而是一套圍繞 `指南 / 提示詞 / Skills / 實戰案例` 組織起來的系統化實踐手冊。

## 這是什麼

**Codex Handbook** 是一個圍繞 Codex 學習與實踐的系統化知識庫。它想解決的不是「Codex 能做什麼」這麼寬泛的問題，而是三個更實際的問題：

- 第一次接觸 Codex，應該從哪裡開始。
- 想把 Codex 用進真實專案，應該如何描述任務、組織上下文、驗證結果。
- 做過一次成功協作之後，怎樣把經驗沉澱成提示詞、Skills、規則、案例和團隊資產。

如果你剛開始了解 Codex，這個倉庫和網站就是你的第一站。

## 先從這裡開始

### 1. 線上閱讀

正式閱讀入口是 [codexhandbook.com/zh-tw](https://codexhandbook.com/zh-tw/)。  
如果你想獲得完整的導覽、搜尋、章節組織和長期更新內容，優先直接看網站。

### 2. 新手第一條閱讀路徑

建議按這個順序開始：

1. [Guide 首頁](./src/content/docs/guide/index.md)
2. [上下文與檔案](./src/content/docs/guide/context-and-files.md)
3. [Prompts](./src/content/docs/prompts/index.md)
4. [Skills](./src/content/docs/skills/index.md)
5. [Cases](./src/content/docs/cases/index.md)

這條路徑適合第一次接觸 Codex 的人，能幫你先建立穩定的基礎認知，再進入實戰部分。

## 你會在這裡學到什麼

### 指南

理解 Codex 的入口選擇、基礎使用路徑、上下文組織、權限邊界和結果驗證方法。

### 提示詞

學習如何把任務講清楚，如何定義約束、目標、輸入材料和驗收標準，讓 Codex 更穩定地產出可檢查結果。

### Skills

學習如何設計、使用、維護和治理 Skills，把一次成功協作變成長期可複用的能力。

### 實戰案例

透過真實任務理解完整工作流，比如讀程式碼、修 Bug、寫文件、做調研、自動化處理和交付協作。

## 適合誰

- 第一次了解 Codex 的新手
- 想把 Codex 用進真實專案的開發者
- 需要沉澱提示詞、規則、範本和案例的團隊
- 想把 Codex 用在寫作、調研、文件和演示中的知識工作者

## 快速入口

| 入口 | 用途 |
| --- | --- |
| [線上閱讀](https://codexhandbook.com/zh-tw/) | 從網站完整瀏覽整套手冊 |
| [Guide](./src/content/docs/guide/index.md) | 從零開始理解 Codex 的使用路徑 |
| [Prompts](./src/content/docs/prompts/index.md) | 學習如何清晰描述任務與邊界 |
| [Skills](./src/content/docs/skills/index.md) | 學習如何把經驗沉澱成可複用能力 |
| [Cases](./src/content/docs/cases/index.md) | 透過真實任務理解端到端工作流 |
| [Examples](./examples/README.md) | 直接複用提示詞與範例資產 |
| [內容架構](./docs/planning/content-architecture.md) | 快速理解整站資訊設計 |
| [章節大綱](./docs/planning/chapter-outline.md) | 查看主題覆蓋範圍 |
| [路線圖](./ROADMAP.md) | 了解專案規劃與後續方向 |

## 內容結構

```text
Codex Handbook
├── src/content/docs/guide/      # 入門指南、客戶端、權限、驗證
├── src/content/docs/prompts/    # 提示詞方法與任務表達
├── src/content/docs/skills/     # Skills 設計、使用與治理
├── src/content/docs/cases/      # 真實任務案例
├── examples/                    # 可複製提示詞與擴展實例
├── docs/planning/               # 內容規劃與維護資料
└── ROADMAP.md                   # 專案路線與階段脈絡
```

## 本地開發

本專案使用 [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) 建置文件站，正文內容位於 `src/content/docs/`。

環境要求：

- Node.js `>=22.12.0`
- `pnpm`

啟動開發環境：

```bash
pnpm install
pnpm dev
```

建置靜態站點：

```bash
pnpm build
```

## 專案原則

- 官方優先：涉及產品能力、規則和邊界時，優先以官方資料為準。
- 新手友好：不預設終端機、Git、Agent 或自動化背景。
- 真實任務導向：強調可複用工作流、案例和範本，而不是抽象概念堆積。
- 安全邊界清晰：權限、檔案寫入、連網、自動化與擴展能力必須講清風險。
- 持續沉澱：鼓勵把一次成功任務轉成提示詞、Skills、規則、案例和團隊資產。

## 參與貢獻

歡迎提交：

- 新手友好的教程改寫
- 可重現的真實案例
- 高品質提示詞、Skill 範本、配置樣板與案例材料
- 事實核驗與失效內容修訂
- English、简体中文等版本的內容

如果你想參與內容建設，可以先看：

- [範例庫說明](./examples/README.md)
- [內容架構](./docs/planning/content-architecture.md)
- [章節大綱](./docs/planning/chapter-outline.md)

## 聲明

本專案是社群維護的 Codex 實踐手冊，並非 OpenAI 官方專案。涉及功能、定價、可用性、安全策略和產品細節等時間敏感資訊時，請以官方資料為準。

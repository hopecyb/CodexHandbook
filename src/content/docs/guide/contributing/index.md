---
title: 参与贡献
description: 如何为本手册贡献正文、案例、提示词实例与翻译——流程与质量标准。
sidebar:
  order: 80
---

**Codex 指南手册**是社区维护的文档站。欢迎修正错误、补充页面、添加可复现案例与 [examples/](/examples/README.md) 中的提示词实例。

## 这篇解决什么问题

- 贡献类型与入口
- 写作与核验标准
- PR 与发布预期

## 贡献类型

| 类型 | 说明 | 指南 |
|---|---|---|
| 修正/小改 | 错别字、链接、过时一句 | 直接 PR |
| 新指南页 | `src/content/docs/` 下章节正文 | [撰写指南](/guide/contributing/write-a-guide/) |
| 案例 | `10-use-cases/` | [案例模板](/cases/use-cases/case-study-template/) |
| 提示词实例 | `examples/prompts/` | [添加提示词示例](/guide/contributing/add-a-prompt-example/) |
| 技术核验 | 标 `verified`、更新日期 | [核验技术内容](/guide/contributing/verify-technical-content/) |
| 翻译 | `en/`、`zh-tw/` 等 | 路线图 M6；先稳定源文 |

## 基本原则

1. **简体中文 `root` 为源文**（除非另有说明）
2. **不复制**外部教程原文；参考 [外部资料整合计划](/docs/planning/external-source-integration.md)
3. **易变事实**须标 `最近核验` 日期
4. **每个 sidebar slug** 必须有对应 markdown，否则 `npm run build` 失败
5. 新增页面须同步更新 `astro.config.mjs` sidebar

## 本地开发

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

合并前运行：

```bash
npm run build
```

## 行为准则

- 尊重他人劳动；讨论对事不对人
- 不提交真实密钥、客户数据
- 大范围重构前先 issue 或 RFC 讨论

## 相关链接

- 仓库：<https://github.com/cyberhope/codex-handbook>
- [路线图](/ROADMAP/)
- [章节大纲](/docs/planning/chapter-outline.md)（规划用）

---

**状态：** review  
**最近核验：** 2026-07-25

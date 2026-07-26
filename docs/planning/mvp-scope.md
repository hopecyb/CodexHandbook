# MVP 范围与写作约定

日期：2026-07-25

本文件是当前站点内容范围的历史规划快照。

## 1. 目标

交付可上线的简体中文手册 MVP：零基础读者能完成「理解 Codex → 安装登录 → 第一次安全任务 → 检查/撤销 → 写出可验收提示词 → 查术语/FAQ」黄金路径。

## 2. 纳入 MVP

| 部分 | 范围 |
|---|---|
| `00-start-here` | 全部页面 |
| `01-foundations` | 全部页面 |
| `02-getting-started` | 全部页面 |
| `03-learning-paths` | `index` + 初学者五步全写；创作者/开发者/团队仅总览索引 |
| `04-product-guides` | 桌面 App 全写；CLI/IDE 最小可用；Cloud/移动/集成各一篇概述 |
| `05-core-capabilities` | prompting、context、quality 全写；tools 与 agent-work 精简子集 |
| `12-reference` | glossary、faq、official-resources、troubleshooting 索引、feature-comparison |

## 3. 延后（非 MVP）

- `06`–`11`、`13` 全部正文
- `04` 中 CLI/IDE 余页、Cloud/移动/集成子页
- `05` 中 `files-and-artifacts/` 与未列入精简子集的 tools/agent-work 页
- `examples/`、完整 taxonomy、多语言译文、站点自动化工具

后续里程碑见仓库根目录 [`ROADMAP.md`](../../ROADMAP.md)。

## 4. 权威归属（一句话）

- **提示词与方法论** → `05-core-capabilities`
- **产品界面与操作** → `04-product-guides`
- **学习顺序编排** → `03-learning-paths`（只链不抄）
- **概念定义** → `01-foundations`
- **命令/对照/术语速查** → `12-reference`

## 5. 临时页面 ID

`页面 ID = 相对 src/content/docs/ 的路径去掉扩展名`

示例：`05-core-capabilities/prompting/prompt-basics`

## 6. MVP 页面元数据

暂不扩展 Starlight schema。每页 frontmatter 至少包含：

```yaml
title: 页面标题
description: 一句话摘要
```

文末固定三行：

```markdown
---

**状态：** archived  
**适用产品：** App / CLI / IDE（按实际勾选）  
**最近核验：** YYYY-MM-DD
```

易过时页（安装、账号、权限、模型）必须在正文中给出官方依据链接。

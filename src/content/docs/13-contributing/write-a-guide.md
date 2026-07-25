---
title: 撰写指南页
description: 新手册正文的结构、frontmatter 与交叉链接约定。
---

本页说明如何在 `src/content/docs/` 添加或改写**指南型**页面（非纯案例、非纯参考表）。

## Frontmatter

```yaml
---
title: 页面标题
description: 一句话说明本文解决的问题
---
```

可选在文末使用统一页脚（与现有页一致）：

```markdown
---

**状态：** draft | review | verified
**适用产品：** App / CLI / IDE / Cloud
**最近核验：** YYYY-MM-DD
```

## 推荐结构

按 [外部资料整合模板](/docs/planning/external-source-integration.md#6-推荐页面模板) 选用小节，常见组合：

- 这篇解决什么问题
- 适合谁
- 最小可用做法
- 推荐工作流
- 常见错误
- 安全边界
- 验收清单
- 参考来源

产品操作页可偏步骤；概念页可偏表格与示意图。

## 交叉链接

- 站内链接用根路径：`/09-workflows/explore-plan-execute-verify/`
- 链接到权威页，避免大段重复
- 新页在章节 `index.md` 与 `astro.config.mjs` sidebar 中登记

## 语气

- 简体中文，面向实践者
- 承认不确定性（「以官方文档为准」）
- 不用「万能提示词」叙事

## 核验

提交 PR 前阅读 [核验技术内容](/13-contributing/verify-technical-content/)。命令、价格、权限等易变信息必须复核。

## 参考来源写法

```markdown
## 参考来源

- OpenAI Codex 官方文档
- 社区结构参考：CodexGuide（主题 only，非原文）
```

---

**状态：** review  
**最近核验：** 2026-07-25

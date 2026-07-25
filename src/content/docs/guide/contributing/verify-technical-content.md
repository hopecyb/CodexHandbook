---
title: 核验技术内容
description: 如何把页面标为 verified——复现步骤、官方依据与日期。
---

手册中命令、权限、价格、产品功能会随版本变化。**核验**确保读者按文档操作时结果可预期。

## 状态含义

| 状态 | 含义 |
|---|---|
| `draft` | 结构在，事实未充分核对 |
| `review` | 已自检，待他人或二次复核 |
| `verified` | 按下方清单复现通过 |

## 核验清单

1. **标明范围**：产品（App/CLI/IDE/Cloud）、OS、CLI 版本号
2. **逐步复现**：从零或干净 worktree 跟做一遍
3. **官方依据**：至少一条 OpenAI 官方文档或帮助中心链接
4. **社区来源**：若借鉴 CodexGuide / KimYx0207 等，只作主题参考，事实以官方为准
5. **更新日期**：页脚 `最近核验：YYYY-MM-DD`
6. **独立复核**：`verified` 建议非作者第二人确认

## 易变信息

以下必须每季度或随 major 发布重核：

- 命令与子命令名、flags
- 权限默认与沙盒行为
- 套餐、模型名、地区可用性
- MCP/Hook 事件名

## 失败时

- 降级状态为 `review` 或 `draft`
- 在 PR 中说明哪一步与官方不一致
- 大偏差开 issue 标 `outdated`

## 相关

- [手册版本政策](/guide/start-here/handbook-version-policy/)
- [官方资源](/guide/reference/official-resources/)

---

**状态：** review  
**最近核验：** 2026-07-25

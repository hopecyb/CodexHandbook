---
title: 开发者平台
description: 用 SDK、非交互 CLI 与 CI/CD 把 Codex 嵌入工程体系——面向集成开发者。
sidebar:
  order: 50
---

**开发者平台**面向要把 Codex **产品化**进流水线的人：自定义应用、批量审查、发布门禁、内部开发者门户。日常「写一个 prompt 改 bug」仍从 [快速上手](/guide/getting-started/) 开始。

## 这篇解决什么问题

- 开发者平台与终端用户手册的边界
- 典型集成架构
- 本章导航与路线图

## 与产品手册的分工

| 读者问题 | 去哪 |
|---|---|
| 怎么在终端跑 `codex` | [CLI 产品手册](/guide/cli/) |
| 怎么在 CI 里 exec 审查 | [非交互模式](/guide/cli/non-interactive-mode/) + 本章 CI |
| 怎么在自家 App 里嵌 Agent | [SDK 概述](/guide/developer-platform/sdk-overview/) |
| 权限与安全模型 | [人工审批模式](/cases/workflows/human-approval-patterns/) |

## 典型架构（概念）

```text
开发者系统（CI / 内部平台 / SaaS）
        ↓ API 或 CLI
Codex（模型 + 工具 + 策略）
        ↓
Git 提供商 / 工单 / 制品库
```

## 设计原则

1. **幂等与可重试**：同一 PR 多次审查结果应可比较
2. **最小权限**：CI token 只读或限定仓库
3. **可观测**：保留 prompt 版本、模型、diff artifact
4. **人机分工**：自动评论 ≠ 自动合并

## 本章导航

| 主题 | 页面 |
|---|---|
| SDK | [SDK 概述](/guide/developer-platform/sdk-overview/) |
| 非交互 | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) · [脚本与流水线](/guide/developer-platform/non-interactive/scripts-and-pipelines/) · [结构化输出](/guide/developer-platform/non-interactive/structured-output/) · [退出码与重试](/guide/developer-platform/non-interactive/exit-codes-and-retries/) |
| Webhooks | [概述](/guide/developer-platform/webhooks/overview/) |
| CI/CD | [代码审查自动化](/guide/developer-platform/ci-cd/code-review-automation/) |

更多 `codex-sdk/`、`app-server/`、`architecture-patterns/` 见 [章节大纲](https://github.com/cyberhope/codex-handbook/blob/main/docs/planning/chapter-outline.md) 与 [路线图](/ROADMAP/)。

## 参考来源

- OpenAI Codex API / SDK 官方文档
- KimYx0207 开发者章节
- stormzhang CI 与自动化教程
- codex.bozhouai.com 工程化案例

---

**状态：** review  
**适用产品：** API / CLI / Cloud  
**最近核验：** 2026-07-25

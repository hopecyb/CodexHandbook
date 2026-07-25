---
title: 权限矩阵
description: Codex 操作类型、审批点与产品差异的概念对照表。
---

不同**操作**在不同**产品入口**下触发不同的审批与沙盒行为。本矩阵帮助团队对齐「什么必须人点同意」，**非法律合规表**；默认值以 [官方文档](https://developers.openai.com/codex) 与组织托管策略为准。

## 这篇解决什么问题

- 读文件 vs 写文件 vs shell vs 联网 的风险差
- App / CLI / IDE / Cloud 谁更严格
- 如何在 `AGENTS.md` 与配置中表达团队策略

概念基础：[权限与审批](/01-foundations/permissions-and-approvals/)

## 操作风险分级

| 级别 | 操作示例 | 默认期望 |
|---|---|---|
| L0 读 | 读项目内文本、搜索代码 | 通常自动 |
| L1 写 | 改项目文件、格式化 | 常需确认或沙盒内自动 |
| L2 执行 | shell、包管理器、测试 | 多需确认 |
| L3 出网 | curl、npm registry、API | 严格确认或禁止 |
| L4 越界 | 写项目外路径、git push、删库 | 应阻断或强烈确认 |
| L5 GUI | Computer Use、系统对话框 | 最高敏感，常默认关 |

## 矩阵（概念 — 典型默认）

**Y** = 常见情况下需明确同意或受策略限制 · **A** = 可在受信配置下自动 · **—** = 视版本/策略 · **N** = 通常不允许

| 操作 | 桌面 App | CLI 交互 | IDE | Cloud |
|---|---|---|---|---|
| 读仓库文件 | A | A | A | A |
| 写仓库内文件 | Y/A | Y | Y/A | Y/A |
| 运行测试命令 | Y/A | Y | Y/A | Y/A |
| 安装全局依赖 | Y | Y | Y | Y |
| 访问公网 | Y | Y | Y | Y |
| 读 `.env` 等敏感文件 | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| 写项目外路径 | N/Y | N/Y | N/Y | N |
| MCP 第三方工具 | Y | Y | Y | Y |
| 浏览器打开 URL | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

说明：

- **Cloud** 在远程沙盒内运行，不能访问你笔记本文件系统
- **IDE** 与 App 类似，但 UI 审批形态不同
- **托管策略**可强制全部为 Y 或 N

## 配置与文档如何落地

| 机制 | 作用 |
|---|---|
| 沙盒模式 | 限制 L3/L4 即使 Agent「想」做 |
| 审批策略 | 控制 L1–L3 是否弹窗 |
| `AGENTS.md` | 声明项目级禁止项（如禁止 push） |
| 分支保护 | GitHub 侧阻断未 review 的 merge |
| Hooks | 提交前自动检查（见路线图 Hooks 页） |

[人工审批模式](/09-workflows/human-approval-patterns/) · [配置参考](/12-reference/configuration-reference/)

## 团队推荐策略（示例）

| 场景 | 建议 |
|---|---|
| 开源练习仓库 | 标准沙盒 + 允许测试命令 |
| 公司 monorepo | 严格 + 禁止 push + PR 必须人审 |
| CI `codex exec` | 只读或限定目录 + 无 push |
| Cloud 生产相关 | Secrets 最小化 + 分支保护 |

## 常见误解

| 误解 | 事实 |
|---|---|
| 「Cloud 更安全」 | 取决于 secrets、review、网络策略 |
| 「IDE 不会跑 shell」 | 可能通过 Agent 工具执行 |
| 「写了禁止 push 就一定不会 push」 | 需沙盒 + Git 权限 + 人审多层 |

## 参考来源

- stormzhang `15-permissions.md`、`16-security.md`
- KimYx0207 权限与企业章节
- OpenAI Codex safety / permissions

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

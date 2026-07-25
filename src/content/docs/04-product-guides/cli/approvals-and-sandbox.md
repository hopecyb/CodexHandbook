---
title: 审批与沙盒
description: CLI 中 shell、写盘与联网请求的批准策略，以及沙盒如何限制 Agent 行为。
---

CLI 里 Agent 能**读文件、写文件、跑 shell、可能联网**——审批与沙盒是你与自动化之间的安全阀。配置不当会导致：交互时频繁弹窗，或 CI 无人值守时风险失控。

## 这篇解决什么问题

- 审批弹窗在问什么、该怎么选
- 沙盒档位如何影响文件与网络
- 团队如何在 CLI 与 `AGENTS.md` 间对齐策略

概念基础：[权限与审批](/01-foundations/permissions-and-approvals/) · [沙盒与网络](/01-foundations/sandbox-and-network/)

## 审批发生在何时

典型触发点（具体以产品为准）：

| 操作类型 | 风险 | 默认倾向 |
|---|---|---|
| 写项目内文件 | 中 | 常需确认 |
| 写项目外路径 | 高 | 应拒绝或严格确认 |
| 运行 shell | 高 | 确认命令内容 |
| 联网 / curl | 高 | 确认目标与数据 |
| MCP 工具调用 | 视服务器 | 按工具粒度 |

交互时你有 **一次允许 / 会话允许 / 拒绝** 等选项（名称因版本而异）。**不要对看不懂的命令点「始终允许」。**

## 沙盒档位（概念）

| 档位意图 | 适合 |
|---|---|
| 严格 / 只读 | 审不可信代码、CI 只读审查 |
| 标准 | 日常开发仓库 |
| 放宽 | 个人受信环境，且符合公司政策 |

沙盒可能限制：

- 可写目录范围
- 是否允许访问 `$HOME` 其他项目
- 子进程与网络能力

配置入口：[CLI 配置](/04-product-guides/cli/configuration/) · 矩阵：[权限矩阵](/12-reference/permission-matrix/)

## 交互 vs 非交互

| 模式 | 审批特点 |
|---|---|
| 交互 `codex` | 人在场，可逐条判断 |
| 非交互 `exec` | 无你在场，须事先收紧沙盒 + 固定 prompt |

CI 必读：[非交互模式](/04-product-guides/cli/non-interactive-mode/) · [人工审批模式](/09-workflows/human-approval-patterns/)

推荐 CI 原则：

- 只读或限定写路径
- 禁止任意 `curl` 上传仓库内容
- 失败即非零退出，保留日志

## 与 allow/deny 规则

项目可在 [允许与拒绝规则](/06-customization/rules/allow-and-deny-patterns/) 中声明「可预期命令」。**规则需与真实产品行为一致**，否则 Agent 仍会被拦或反而过宽。

## 常见错误

- 本机全局「自动批准所有 shell」后处理客户仓库
- 把 `sudo`、删库、改 `~/.ssh` 类命令误点通过
- CI 使用与开发机相同的放宽配置
- 以为沙盒能替代代码审查——它防误操作，不防恶意 prompt 注入

## 验收清单

- [ ] 能解释最近一次审批请求在做什么
- [ ] 知道在哪改沙盒档位并重开会话
- [ ] 团队文档写明：哪些命令禁止、哪些可预期自动通过

## 参考来源

- OpenAI Codex CLI 安全与沙盒文档
- stormzhang `17-permissions.md`、`19-security.md`
- KimYx0207 CX-04、CX-13
- freestylefly/CodexGuide 沙盒审批专题

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25

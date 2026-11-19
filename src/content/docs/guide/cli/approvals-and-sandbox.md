---
legacyVerification:
  status: "verified"
  products: "CLI"
  basis: "OpenAI Help Center 当前 CLI 入门文档仍按 approval modes 区分读写、命令执行与沙盒/网络边界；本页聚焦审批与沙盒的概念、交互和无人值守场景的风险差异，没有把具体按钮文案或模式名写成固定事实。"
  checkedAt: "2026-11-19"
title: 审批与沙盒
description: CLI 中 shell、写盘与联网请求的批准策略，以及沙盒如何限制 Agent 行为。
sidebar:
  order: 60
---

CLI 里 Agent 能**读文件、写文件、跑 shell、可能联网**——审批与沙盒是你与自动化之间的安全阀。配置不当会导致：交互时频繁弹窗，或 CI 无人值守时风险失控。

## 本页内容

- 审批弹窗在问什么、该怎么选
- 沙盒档位如何影响文件与网络
- 团队如何在 CLI 与 `AGENTS.md` 间对齐策略

## 审批和沙盒分别在管什么

可以这样记：

- **审批**是在问你：“这一步要不要继续做？”
- **沙盒**是在限制它：“就算继续做，最多能碰到哪里？”

两者一起配合，会直接影响 CLI 用起来是偏保守，还是边界放得太开。

概念基础：[权限与审批](/guide/foundations/permissions-and-approvals/) · [沙盒与网络](/guide/foundations/sandbox-and-network/)

## 当前默认组合怎么理解

常见的 Auto 组合是 `workspace-write + on-request`：工作区内的普通读写和本地命令可以自动执行；越出工作区、访问网络或触发其他受限能力时，才根据策略请求批准。组织托管策略、不受信项目和你显式选择的模式可以更严格。

| preset / 组合 | 工作区内读写与常规命令 | 工作区外、网络等受限动作 |
|---|---|---|
| Auto（常见为 `workspace-write + on-request`） | 通常自动执行 | 请求批准或按策略拒绝 |
| Read-only | 只读动作可执行；写入受阻 | 请求更宽权限或拒绝 |
| Full access | 文件、命令和网络边界大幅放宽 | 通常不再依赖逐步审批，应只在受信环境使用 |
| 组织托管配置 | 以管理员设置为准，可比以上更严 | 用户不能绕过组织底线 |

审批弹窗的选项和持续范围会随版本、规则与组织策略变化。**不要对看不懂的命令或过宽前缀选择长期允许。** 已经在当前沙箱内允许的动作通常不会再额外弹窗，因此“没有弹窗”不等于“没有副作用”。

## 沙盒档位（概念）

| 档位意图 | 适合 |
|---|---|
| `read-only` | 审不可信代码、只读检查 |
| `workspace-write` | 日常开发仓库；限制写入工作区 |
| Full access / danger-full-access | 仅受信环境和明确需要的任务，且符合公司政策 |

沙盒可能限制：

- 可写目录范围
- 是否允许访问 `$HOME` 其他项目
- 子进程与网络能力

配置入口：[CLI 配置](/guide/cli/configuration/) · 矩阵：[权限矩阵](/guide/reference/permission-matrix/)

## 交互 vs 非交互

| 模式 | 审批特点 |
|---|---|
| 交互 `codex` | 人在场，可逐条判断 |
| 非交互 `exec` | 无你在场，须事先收紧沙盒 + 固定 prompt |

CI 必读：[非交互模式](/guide/cli/non-interactive-mode/) · [人工审批模式](/cases/workflows/human-approval-patterns/)

推荐 CI 原则：

- 只读或限定写路径
- 禁止任意 `curl` 上传仓库内容
- 失败即非零退出，保留日志

## 与 allow/deny 规则

实验性的 Rules 可在 [允许与拒绝规则](/guide/customization/rules/allow-and-deny-patterns/) 中控制命令出沙箱时是 allow、prompt 还是 forbidden。Rules 不负责路径、网络或 MCP 的全部权限，也不替代沙箱。

## 常见错误

- 本机全局「自动批准所有 shell」后处理客户仓库
- 把 `sudo`、删库、改 `~/.ssh` 类命令误点通过
- CI 使用与开发机相同的放宽配置
- 以为沙盒能替代代码审查——它防误操作，不防恶意 prompt 注入

## 常见误会

### 弹窗多，不一定代表设置有问题

如果你刚开始学 CLI，审批多一点往往反而更安全，因为它能逼你看懂每一步在做什么。

真正需要警惕的是：你已经开始不看内容就点通过了，而不是它问得太多。

### 放宽一次，不代表以后都安全

有些人第一次为了图省事，把规则放得很宽，之后就在别的仓库、别的任务里沿用了同一套设置。

问题是：安全边界应该跟着任务风险走，不应该因为上一次方便，就默认这一次也没问题。

## 验收清单

- [ ] 能解释最近一次审批请求在做什么
- [ ] 知道在哪改沙盒档位并重开会话
- [ ] 团队文档写明：哪些命令禁止、哪些可预期自动通过

开始阶段把 CLI 审批和沙盒调得偏保守，通常更稳。等你真的知道自己在放开什么，再一点点放宽也不迟。

## 参考来源
- [OpenAI：Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [OpenAI：Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)

---
legacyVerification:
  status: "verified"
  products: "CLI / App"
  basis: "已对照当前实验性 Rules 文档，核实 `.rules`、`prefix_rule`、三种 decision、活动配置层和 `codex execpolicy check`；路径与网络不再误写为 Rules 能力。"
  checkedAt: "2026-11-19"
title: 允许与拒绝规则
description: 用实验性的 prefix_rule 控制哪些命令可以在沙箱外运行、需要审批或被禁止。
sidebar:
  order: 10
---

**Rules（规则）** 是当前实验性的命令出沙箱策略。`.rules` 文件用 `prefix_rule` 判断一条命令在请求沙箱外运行时应该 `allow`、`prompt` 还是 `forbidden`。它不是路径、网络或任意工具的通用 allow/deny 系统。

## 内容

- `allow` / `prompt` / `forbidden` 如何工作
- 与沙盒、审批弹窗、`AGENTS.md` 的关系
- 团队规则示例

## 规则到底在做什么

可以把规则理解为：当 Codex 想让一条命令越出当前沙箱时，提前决定是直接允许、每次询问还是阻断。

它的价值主要有两类：

- 减少那些明明每天都会发生、却总要反复确认的低风险操作
- 提前拦住那些不该自动发生的高风险操作

## 规则类型（概念）

| decision | 行为 |
|---|---|
| `allow` | 匹配命令可在沙箱外运行，不再提示 |
| `prompt` | 每次匹配都请求审批 |
| `forbidden` | 直接阻断，不弹审批 |

规则只匹配命令参数前缀。路径读写范围由沙箱控制，网络由沙箱、审批或组织策略控制，MCP/其他工具也有各自权限。与 [权限矩阵](/guide/reference/permission-matrix/) 对照时，不要把这些层合并成一个机制。

## 推荐分层

```text
组织托管策略（不可覆盖）
    ↓
活动配置层的 rules + AGENTS.md（职责不同）
    ↓
用户层 rules（例如 ~/.codex/rules/default.rules）
    ↓
单次任务 prompt 约束
```

## 常见误会

### 规则不只是为了少弹窗

很多人第一次听到 allowlist，会下意识觉得它的目标是少弹窗、少打断。

少弹窗只是其中一部分，更重要的是把低风险动作放行，把高风险动作拦住。

### 规则不等于沙盒

沙盒限制“最多能碰到哪里”；Rules 只决定匹配命令能否越出沙箱。路径与网络边界仍要放在沙箱、permissions 和 managed config 中。

两者最好一起用，而不是选一个替代另一个。

### 团队底线不能只放在某个人本机

如果只有你自己的本机规则知道“禁止 push”“禁止碰 `.env`”，那别人依然可能踩进去。

团队底线应由受管配置或可信项目配置承载，并接受 review。项目内 `<repo>/.codex/rules/` 只有在该项目配置层受信任时才加载。

## 团队示例（示意，非复制即用）

**允许：**

- 包管理器安装**项目内**依赖
- 运行文档中的测试脚本

**拒绝：**

- `git push`、`git reset --hard`
- 读写 `.env*`（除非明确任务）
- 向公网 POST 含仓库内容的请求

规则应写在团队可 review 的文件中，而非仅口头约定；真实语法见[命令规则](/guide/customization/rules/command-rules/)。

## 常见错误

- Allowlist 过宽（直接匹配 shell wrapper 可能放大风险）
- 只 deny 不 allow，审批仍然过多
- 规则与 `AGENTS.md` 矛盾
- 用 Rules 代替路径、网络或 MCP 权限配置

## 起步建议

刚开始整理规则时，不必一上来就做完整策略。先做这两步就已经够用：

1. 明确列出 3 到 5 条每天常跑、风险低的命令
2. 明确列出几条绝对不希望被自动执行的高风险动作

先把最小边界跑顺，再慢慢细化。

## 安全边界

- 规则**不能**替代 code review 与分支保护
- Rules 仍是实验功能，升级后要重跑规则测试
- 恶意 prompt 可能诱导 Agent 尝试绕过规则——保持沙盒默认严格
- 变更规则走 PR，像改 CI 一样对待

好的 allow/deny 规则，是提前把哪些动作合理、哪些动作不该发生说清楚。

## 官方来源

- [OpenAI：Rules](https://learn.chatgpt.com/docs/agent-configuration/rules)

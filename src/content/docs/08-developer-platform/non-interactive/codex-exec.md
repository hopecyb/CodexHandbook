---
title: codex exec
description: 非交互执行入口——在脚本与 CI 中单次下发完整任务。
---

**`codex exec`**（或官方文档中的等价子命令）是 [非交互模式](/04-product-guides/cli/non-interactive-mode/) 的核心：无 TTY 对话，进程结束即结果。本章面向 [开发者平台](/08-developer-platform/) 集成者。

## 这篇解决什么问题

- `exec` 与交互式 `codex` 的差异
- 最小命令形态与工作目录
- 与审批、沙盒在无人值守时的要求

:::note
**命令名与参数以官方 CLI 为准。** 升级后运行 `codex --help` 与 `codex exec --help` 复核。
:::

## 最小可用做法

```bash
cd /path/to/repo
codex exec --cwd . "只读：对比当前分支与 main 的 diff，列出 3 个最高安全风险，不要修改文件"
```

原则：

- Shell 脚本里先 `cd` 到干净 worktree
- Prompt 放版本库 `prompts/` 或 heredoc，避免 shell 转义错误
- CI 中以**退出码**判定成败

## 推荐工作流

```text
准备仓库（checkout、install、只读 token）
    → 固定 prompt 版本（git sha）
    → codex exec
    → 收集 stdout / artifact
    → 非 0 则失败 CI，不自动重试无限次
```

与 [脚本与流水线](/08-developer-platform/non-interactive/scripts-and-pipelines/) 衔接。

## 与交互模式对比

| | `codex` 交互 | `codex exec` |
|---|---|---|
| 澄清问题 | 可多轮 | 须一次说清 |
| 审批 | 人在场 | 须事前策略收紧 |
| 适用 | 学习、探索 | CI、cron |

## 常见错误

- 把长聊天历史塞进单次 exec
- CI 使用写权限 token 且 prompt 含未消毒的 PR 正文
- 未固定 CLI 版本导致流水线突发失败
- 忽略非零退出码仍标记 green

## 安全边界

- 无人值守 = [人工审批](/09-workflows/human-approval-patterns/) 弱化，默认只读
- 见 [安全凭证](/08-developer-platform/ci-cd/code-review-automation/#安全凭证)（同章交叉引用）

## 验收清单

- [ ] 本地与 CI 使用相同 prompt 文件
- [ ] 退出码被 CI 正确处理
- [ ] 日志不含密钥与 PII
- [ ] 沙盒与规则与交互开发时一致或更严

## 相关章节

- [CLI 非交互模式](/04-product-guides/cli/non-interactive-mode/)
- [结构化输出](/08-developer-platform/non-interactive/structured-output/)
- [退出码与重试](/08-developer-platform/non-interactive/exit-codes-and-retries/)

## 参考来源

- OpenAI Codex CLI 文档
- KimYx0207 非交互章节
- stormzhang CI 教程

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25

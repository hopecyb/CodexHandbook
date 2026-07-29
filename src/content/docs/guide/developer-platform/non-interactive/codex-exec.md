---
title: codex exec
description: 非交互执行入口——在脚本与 CI 中单次下发完整任务。
sidebar:
  order: 10
---

如果交互式 `codex` 是一边聊一边做事，那 **`codex exec`** 更接近一次性把任务交出去，跑完就返回结果。

它是 [非交互模式](/guide/cli/non-interactive-mode/) 的核心：没有来回聊天，没有边做边澄清，进程结束就给你结果或失败状态。本章面向 [开发者平台](/guide/developer-platform/) 集成者，也特别适合第一次想把 Codex 接进脚本或 CI 的读者。

## 本页内容

- `exec` 与交互式 `codex` 的差异
- 最小命令形态与工作目录
- 与审批、沙盒在无人值守时的要求

## `exec` 在做什么

可以把 `codex exec` 理解成：

- 发出一张一次性的工作单
- 跑完就返回结果

这张工作单写清楚以后，它就按这个说明去跑；跑完，给你结果，然后结束。

所以它最适合这些场景：

- 任务边界已经固定
- 不需要中途来回澄清
- 希望以后反复稳定执行

的场景。

## 它为什么存在

你不会在 CI 里和 Codex 聊天，也不会指望它中途停下来问你十次。

所以 `codex exec` 的适用场景通常是：

- 代码审查自动化
- 定时任务
- 批处理脚本
- 流水线里的单次分析或生成步骤

它适合“**任务边界已经说清楚**”的场景；如果还在模糊探索，交互模式一般更合适。

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

## 最容易忽略的现实

交互模式里你还能补一句“不是这个意思”。  
`exec` 模式里，**你第一次说错，任务就可能整轮跑偏**。

所以写 `exec` prompt 时，要比平时更明确地说清：

- 要做什么
- 不要做什么
- 输出格式是什么
- 什么算完成
- 失败时希望怎样退出

## 常见误会

### `exec` 更适合固定任务

很多人第一次会把它理解成“CLI 版的高级模式”。

更准确的理解是：它更适合拿来**稳定重复执行**。

### 任务写得短，不等于写得清楚

在交互模式里，你说得含糊一点，后面还有机会补充。

但在 `exec` 里，短 prompt 如果省掉了边界、限制和成功标准，往往不是更优雅，而是更容易失控。

## 推荐工作流

```text
准备仓库（checkout、install、只读 token）
    → 固定 prompt 版本（git sha）
    → codex exec
    → 收集 stdout / artifact
    → 非 0 则失败 CI，不自动重试无限次
```

与 [脚本与流水线](/guide/developer-platform/non-interactive/scripts-and-pipelines/) 衔接。

## 可以把它当成什么

- 一个可脚本化的单次任务命令
- 适合放进脚本、CI 或定时任务

这也是为什么很多团队会把它接到 `make review`、GitHub Actions、cron 或内部平台按钮后面。

## 与交互模式对比

| | `codex` 交互 | `codex exec` |
|---|---|---|
| 澄清问题 | 可多轮 | 须一次说清 |
| 审批 | 人在场 | 须事前策略收紧 |
| 适用 | 学习、探索 | CI、cron |

## 拿不准时怎么选

- 还在摸索需求、可能会频繁改口：优先用交互模式
- 任务已经固定成模板、你只想稳定重复执行：再用 `codex exec`

`codex exec` 最适合“已经说清楚、以后还想重复跑”的任务；如果你还在边想边改口，就先别急着把它塞进非交互流程。

## 常见错误

- 把长聊天历史塞进单次 exec
- CI 使用写权限 token 且 prompt 含未消毒的 PR 正文
- 未固定 CLI 版本导致流水线突发失败
- 忽略非零退出码仍标记 green
- 把需要人工判断的复杂任务硬塞进无人值守流程

## 安全边界

- 无人值守 = [人工审批](/cases/workflows/human-approval-patterns/) 弱化，默认只读
- 见 [安全凭证](/guide/developer-platform/ci-cd/code-review-automation/#安全凭证)（同章交叉引用）

## 验收清单

- [ ] 本地与 CI 使用相同 prompt 文件
- [ ] 退出码被 CI 正确处理
- [ ] 日志不含密钥与 PII
- [ ] 沙盒与规则与交互开发时一致或更严

## 相关章节

- [CLI 非交互模式](/guide/cli/non-interactive-mode/)
- [结构化输出](/guide/developer-platform/non-interactive/structured-output/)
- [退出码与重试](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## 参考来源
- OpenAI Codex CLI 文档
---

**状态：** outdated  
**适用产品：** CLI  
**复核说明：** 本页围绕 `codex exec`、`--cwd` 与非交互集成方式提供了有用思路，但当前缺少足够强的官方现行文档来逐条确认命令入口、参数和行为细节；补齐最新 CLI 官方依据前，不宜标为 `verified`。  
**最近核验：** 2026-07-26

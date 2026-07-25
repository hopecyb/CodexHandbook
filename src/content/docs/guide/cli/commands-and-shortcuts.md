---
title: 命令与快捷方式
description: CLI 子命令、会话内操作与键盘习惯——产品向说明，完整参数见参考区。
---

终端里效率来自三块：**启动方式**、**会话内快捷操作**、**与脚本/编辑器的配合**。本页讲用法与习惯；参数表见 [CLI 命令参考](/guide/reference/commands/) 与 [键盘快捷方式](/guide/reference/keyboard-shortcuts/)。

## 这篇解决什么问题

- `codex` 与 `codex exec` 何时用哪个
- 交互会话里有哪些常见操作类型
- 如何把重复操作固化成别名或脚本

## 命令入口一览

| 你想做的事 | 入口 | 详解 |
|---|---|---|
| 边聊边改代码 | `codex` 交互 TUI | [交互模式](/guide/cli/interactive-mode/) |
| CI / 管道单次任务 | `codex exec`（或等价） | [非交互模式](/guide/cli/non-interactive-mode/) |
| 改默认行为 | 配置文件 | [CLI 配置](/guide/cli/configuration/) |

:::note
子命令名随版本变化，以 `codex --help` 为准。
:::

## 交互会话中的「快捷」

不同版本提供的具体键位与 `/` 命令不同，但类别稳定：

### 输入与历史

- 多行输入：按产品说明使用换行组合键（常见为 `Shift+Enter` 或编辑器模式）
- 回顾上一条任务：终端历史或会话内历史（若有）

### 斜杠命令

在提示符输入 `/` 可触发内置流程（审查、压缩上下文等）。**不要背死列表**——以当前环境 `/` 补全为准。学习向分类见 [斜杠命令速查](/guide/reference/slash-commands/)。

### 审批相关

当 Agent 请求执行 shell 或写文件时，交互界面会提示批准/拒绝/始终允许（若提供）。无人值守前务必读 [审批与沙盒](/guide/cli/approvals-and-sandbox/)。

## Shell 层快捷（推荐）

把「进入项目 + 启动 Codex」写成函数，减少目录错误：

```bash
# ~/.zshrc 示例（按需修改）
cx() {
  cd "$1" || return 1
  codex
}
```

非交互审查可封装为脚本，prompt 放在 `prompts/review.md`，便于版本管理。

## 与 IDE / App 的分工

| | CLI | IDE 扩展 |
|---|---|---|
| 上下文 | `--cwd`、@ 文件（视版本） | 打开文件、选中代码 |
| 适合 | 脚本、SSH 远程、纯终端 | 边改边看 diff |
| 快捷方式 | 终端键位 + `/` | 编辑器命令面板 |

IDE：[本地任务工作流](/guide/ide/local-task-workflow/)

## 常见错误

- 在错误目录启动，改到隔壁项目
- 把应用内 `/review` 当成终端子命令在外部 shell 执行
- 交互会话里粘贴未审查的第三方「万能 prompt」

## 验收清单

- [ ] 能在目标仓库根目录启动交互会话
- [ ] 知道去哪查当前版本支持的 `/` 命令
- [ ] 能写一条最小的 `codex exec` 只读任务（若环境提供）

## 参考来源

- OpenAI Codex CLI 文档
- stormzhang `08-cli.md`、`12-slash-commands.md`、`35-cheatsheet.md`
- KimYx0207 CX-03、CX-12

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25

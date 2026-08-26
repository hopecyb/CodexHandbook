---
title: Hook 事件类型
description: 按会话、任务轮次、工具调用、压缩和子 Agent 生命周期选择事件。
---

选择 Hook 的第一问不是“脚本怎么写”，而是“副作用发生前还是发生后处理”。事件放错位置，再完善的脚本也可能只会事后报告。

![Codex Hook 生命周期与关键事件](/diagrams/hook-lifecycle-events-zh-cn.svg)

## 当前事件清单

| 事件 | 发生时机 | matcher 过滤什么 | 常见用途 |
|---|---|---|---|
| `SessionStart` | 会话或恢复开始 | `startup`、`resume`、`clear`、`compact` | 环境说明、恢复上下文 |
| `SubagentStart` | 子 Agent 启动 | 子 Agent 类型 | 给子 Agent 补充约束 |
| `UserPromptSubmit` | 用户提示提交 | 不支持，配置会被忽略 | 密钥扫描、补开发上下文 |
| `PreToolUse` | 支持的本地工具执行前 | 工具名 | 拒绝或改写调用 |
| `PermissionRequest` | Codex 即将请求审批 | 工具名 | 允许、拒绝或交回正常审批 |
| `PostToolUse` | 支持的本地工具返回后 | 工具名 | 记录结果、给后续推理反馈 |
| `PreCompact` | 上下文压缩前 | `manual` / `auto` | 保存压缩前状态 |
| `PostCompact` | 上下文压缩后 | `manual` / `auto` | 补回必要上下文 |
| `SubagentStop` | 子 Agent 准备结束 | 子 Agent 类型 | 要求再执行一轮检查 |
| `Stop` | 主任务轮次准备结束 | 不支持，配置会被忽略 | 要求主线程继续验证 |
| `SessionEnd` | 主线程结束 | 当前为 `other` | 快速收尾日志；对子 Agent 不运行 |

## 工具 matcher

常见值包括：

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

Shell 与统一执行命令匹配为 `Bash`。`apply_patch` 也可以用别名 `Edit` 或 `Write` 匹配。MCP 与其他本地函数工具按实际工具名匹配。

## 三个最容易混淆的事件

### PreToolUse

输入包含 `tool_name`、`tool_use_id` 和工具特定的 `tool_input`。它可以：

- `permissionDecision: "deny"`：阻止支持的工具调用
- `permissionDecision: "allow"` + `updatedInput`：改写支持的工具输入
- `additionalContext`：不阻断，只给模型补充上下文

普通 stdout 文本会被忽略；应输出官方定义的 JSON。退出码 `2` 加 stderr 也可以阻断并给出原因。

### PermissionRequest

只有 Codex 原本就准备请求 shell 升级、受管网络等审批时才触发。它可以 allow、deny，或不做决定让正常审批 UI 继续。不要用它代替 `PreToolUse` 的一般工具策略。

### PostToolUse

工具已经运行，Bash 即使非零退出也会触发。这里返回 block 或退出 `2` 只能替换反馈并让模型处理，不能撤销命令、文件写入或外部动作。

## Stop 不是“拒绝结束”按钮

`Stop` 的 `decision: "block"` 表示根据 reason 自动创建一个继续提示，让 Codex 再做一轮；它不会把已经完成的工具副作用回滚。脚本必须检查 `stop_hook_active`，避免无限继续。

## 事件选择练习

| 需求 | 选择 | 原因 |
|---|---|---|
| 阻止把疑似 token 写入文件 | `PreToolUse` 匹配 `apply_patch|Edit|Write` | 必须在写入前处理 |
| 统计 shell 失败率 | `PostToolUse` 匹配 `Bash` | 需要退出结果 |
| 上下文自动压缩前保存关键决定 | `PreCompact` | 发生在压缩前 |
| 测试没跑完不让任务收口 | `Stop` | 需要继续当前任务轮次 |
| 主线程结束时发 30 秒网络请求 | 不适合 `SessionEnd` | 最多 3 秒，且不应把长任务塞进收尾事件 |

## 官方来源

- [OpenAI：Hooks 事件与 matcher](https://learn.chatgpt.com/docs/hooks)

---

**状态：** verified

**适用产品：** 使用本地 Codex host 的环境

**最近核验：** 2026-08-25

---
title: Hooks
description: 在 Codex 生命周期中运行脚本或 MCP 工具，完成检查、记录和策略控制。
---

Hook 是 Codex 生命周期中的自动处理器。它可以在会话开始、提示词提交、工具调用前后、上下文压缩、子 Agent 停止或主线程结束等节点运行脚本或 MCP 工具。

## 这一组解决什么

- 怎样选择正确事件，而不是编造 `pre_tool` 一类不存在的名字
- 怎样区分“执行前阻断”和“执行后反馈”
- 怎样从可测试、低风险的 Hook 开始
- 怎样审查项目 Hook 和 Plugin 自带 Hook 的信任边界

## 阅读顺序

1. [Hooks 概述](/skills/hooks/hooks-overview/)：理解配置层、信任和运行行为
2. [Hook 事件类型](/skills/hooks/hook-event-types/)：按生命周期选择事件和 matcher
3. [Hook 配置示例](/skills/hooks/hooks-examples/)：运行一个能被单元测试的 `PreToolUse` 守护示例

## 最短判断

| 目标 | 优先考虑 |
|---|---|
| 工具执行前拒绝或改写输入 | `PreToolUse` |
| Codex 准备请求权限升级时决策 | `PermissionRequest` |
| 工具已结束后记录或追加反馈 | `PostToolUse` |
| 提示词提交时检查或补上下文 | `UserPromptSubmit` |
| 要求主线程或子 Agent 再继续一轮 | `Stop` / `SubagentStop` |

Hook 不能替代沙箱、审批、命令规则或服务端权限。它是额外守护层，而且部分托管工具路径不会经过本地工具 Hook。

## 官方来源

- [OpenAI：Hooks](https://learn.chatgpt.com/docs/hooks)

---

**状态：** verified

**适用产品：** 使用本地 Codex host 的环境；信任审查与 `/hooks` 管理以 Codex CLI 官方说明为准

**最近核验：** 2026-08-25

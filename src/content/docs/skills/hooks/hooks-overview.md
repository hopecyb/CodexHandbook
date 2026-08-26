---
title: Hooks 概述
description: 理解 Hook 的配置发现、信任审查、处理器与安全边界。
---

Hooks 让你在 Codex 的 Agent 循环中运行命令脚本或已连接 MCP 服务器的工具。典型用途包括提示词密钥扫描、工具调用策略、审计记录、会话摘要和停止前验证。

![Codex Hook 生命周期：会话、任务轮次、工具调用、压缩与子 Agent 事件](/diagrams/hook-lifecycle-events-zh-cn.svg)

图里最重要的区别是：`PreToolUse` 能在支持的本地工具执行前拒绝或改写输入；`PostToolUse` 发生在工具完成后，不能撤销已经产生的副作用。

## 配置从哪里来

Codex 会在活动配置层旁查找：

- `~/.codex/hooks.json`
- `~/.codex/config.toml` 中的 `[hooks]`
- `<repo>/.codex/hooks.json`
- `<repo>/.codex/config.toml` 中的 `[hooks]`
- 已启用 Plugin 自带的 Hook
- 管理员通过系统、MDM、Cloud 或 `requirements.toml` 下发的 managed Hook

项目级 `.codex/` 只有在项目受信任时才加载。多个来源的匹配 Hook 会一起运行；高优先级配置不会把低优先级 Hook 整组覆盖。

同一配置层同时存在 `hooks.json` 和内联 `[hooks]` 时会合并并产生启动警告。一个层尽量只选一种表达方式。

## 非托管 Hook 必须审查

Codex 按 Hook 定义的 hash 记录信任。新增或修改过的非托管 Hook 会被标记为待审查并跳过，直到用户信任新定义。

在 CLI 中使用 `/hooks` 可以查看来源、审查变化、信任或禁用单个非托管 Hook。Plugin 自带 Hook 也走同一信任流程。Managed Hook 由组织策略信任，用户不能在个人 Hook 浏览器里禁用。

## 两种可执行处理器

| 处理器 | 用途 | 关键边界 |
|---|---|---|
| `command` | 运行本地脚本，从 stdin 接收事件 JSON | 脚本本身拥有本地进程能力，必须审查依赖与输出 |
| `mcp_tool` | 调用已连接 MCP 服务器中的工具 | 不会自行启动或重连服务器；`SessionEnd` 不支持 |

当前官方说明中，`prompt` 与 `agent` 处理器可以被解析但会跳过，不应写进可运行配置。

## 运行时行为

- 多个匹配 command Hook 会并发启动，一个 Hook 不能阻止另一个已经匹配的 Hook 启动。
- 默认多数 Hook 的 `timeout` 是 600 秒；`SessionEnd` 默认 1 秒、最多 3 秒。生产守护脚本仍应主动设置较短超时。
- command Hook 的工作目录是会话 `cwd`。仓库脚本应用 Git 根目录解析，避免从子目录启动时找不到相对路径。
- 异步 Hook 适合日志与分析，但不能阻断、批准、改写或控制触发它的操作。

## 与其他安全层的关系

| 层 | 负责什么 |
|---|---|
| 沙箱 | 文件、网络和系统能力边界 |
| 审批 | 高风险动作在执行前需要人的决定 |
| 命令规则 | 对已知命令模式做声明式 allow/deny |
| Hook | 在生命周期节点执行自定义、可测试逻辑 |
| 服务端权限 | 外部系统最终允许哪些读写 |

Hook 的工具覆盖不是完整安全边界。官方文档明确指出，某些专用工具路径可能绕过默认 Hook 路径；Hosted tool（例如 WebSearch）也不走本地 `PreToolUse` / `PostToolUse`。

## 采纳顺序

1. 用 `PostToolUse` 或 `SessionEnd` 做脱敏日志，先观察实际行为。
2. 对高置信问题用 `systemMessage` 或附加上下文提醒。
3. 只有规则确定、脚本有 fixture、误报可接受时才在 `PreToolUse` 阻断。
4. 把 Hook 与 CI、预提交检查和服务端权限对齐，避免三套互相矛盾的政策。

## 验收清单

- [ ] 事件名来自当前官方列表
- [ ] matcher 只覆盖必要工具或来源
- [ ] 脚本有固定输入测试和可读错误信息
- [ ] 日志不保存 token、完整提示词或敏感工具参数
- [ ] Hook 失败、超时和禁用路径已经演练
- [ ] 团队知道 `/hooks` 中的信任变化意味着什么

## 官方来源

- [OpenAI：Hooks](https://learn.chatgpt.com/docs/hooks)

---

**状态：** verified

**适用产品：** 使用本地 Codex host 的环境；CLI 提供 `/hooks` 信任管理

**最近核验：** 2026-08-25

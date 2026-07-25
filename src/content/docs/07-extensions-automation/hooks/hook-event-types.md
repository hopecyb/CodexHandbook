---
title: Hook 事件类型
description: Codex 执行链路中的 Hook 触发点——在正确阶段做校验、日志与阻断。
---

**Hook 事件**是系统在固定节点调用你配置的逻辑的时机。理解事件类型，才能在不拖慢每次工具调用的前提下，把 [Hooks 概述](/07-extensions-automation/hooks/hooks-overview/) 里的「审计、校验」落到配置上。

## 这篇解决什么问题

- 常见事件阶段与适用场景
- 事件与 [命令规则](/06-customization/rules/command-rules/) 的分工
- 配置时的性能与失败策略

:::note
**事件名称与字段以 [官方 Hooks 文档](https://developers.openai.com/codex) 为准。** 下表为概念分组，升级 CLI 后请核对 `--help` 与 release notes。
:::

## 事件分组（概念）

| 阶段 | 典型事件（概念名） | 适合做什么 |
|---|---|---|
| 会话 | `session.start` / `session.end` | 环境检查、汇总变更、写审计尾注 |
| 工具前 | `tool.call.before` / `pre_tool_use` | 阻断危险命令、扫描密钥模式 |
| 工具后 | `tool.call.after` / `post_tool_use` | 结构化日志、指标、脱敏存档 |
| 提示 | `user_prompt.submit` | 注入策略扫描、长度限制 |
| 产物 | `artifact.create` | 许可证头、文件类型白名单 |
| 集成 | `pr.before_create`（若支持） | Issue 编号、changelog 格式 |

同一逻辑不要挂多个事件重复执行——选**最早能阻断**的点。

## 与规则引擎的关系

```text
用户 prompt →（可选）prompt Hook
    → 模型提议工具调用
    → 规则引擎 allow/deny
    →（可选）pre_tool Hook → 执行 → post_tool Hook
```

- **规则**：声明式、快、适合已知命令模式
- **Hook**：命令式脚本、适合复杂策略与外部系统

## 失败策略

| 策略 | 何时用 |
|---|---|
| `block` | 安全违规、合规硬性要求 |
| `warn` | 风格、建议性检查 |
| `log` | 只观测，不阻断 |

Hook 超时或崩溃应**默认安全**：生产环境倾向 block 或 fail closed，并记录错误供排查。

## 最小配置思路

1. 选一个事件（建议从 `post_tool` 只读日志开始）
2. 脚本 stdin 接收 JSON 载荷（工具名、参数摘要、工作目录）
3. 退出码 `0` 通过，非 `0` 按策略 block/warn
4. 单测：固定 JSON fixture 跑脚本

完整示例见 [Hook 配置示例](/07-extensions-automation/hooks/hooks-examples/)。

## 常见错误

- 在 `post_tool` 做本应在 `pre_tool` 的阻断（副作用已发生）
- Hook 内调 LLM 或慢网络，拖垮交互
- 事件载荷含密钥又写入明文日志
- 未版本化 Hook，队友环境不一致

## 安全边界

- Hook 脚本权限应 ≤ 被监控的 Agent 权限
- 见 [团队 Hook 用例](/07-extensions-automation/hooks/hooks-overview/#推荐团队用例) 与 [威胁模型](/11-team-enterprise/security/threat-model/)

## 验收清单

- [ ] 能说出本团队最常用的 1 个事件及原因
- [ ] 失败时有可读错误信息
- [ ] 脚本有单元测试或 fixture
- [ ] 配置纳入代码审查

## 参考来源

- OpenAI Codex Hooks 参考
- stormzhang `22-hooks.md`
- KimYx0207 CX-08

---

**状态：** review  
**适用产品：** CLI / App（视版本）  
**最近核验：** 2026-07-25

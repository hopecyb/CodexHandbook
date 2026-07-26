---
title: Webhook 概述
description: 用 HTTP 回调把 Codex 任务状态接入内部系统——事件、签名与幂等。
---

**Webhook** 让你在 Codex 或 Cloud 任务状态变化时，向自有服务发送 HTTP 回调，驱动工单更新、Slack 通知或内部审批台。本章是 [开发者平台](/guide/developer-platform/) 的事件集成入口。

## 这篇会讲什么

- Webhook 与轮询 SDK 的取舍
- 常见事件与载荷字段（概念）
- 验证签名、重放与幂等

## 先理解它在做什么

如果你第一次接触 Webhook，可以先把它理解成：任务状态一有变化，Codex 主动通知你的系统，而不是你自己反复去查询“好了没”。

它很适合“任务一结束，后面还有别的系统动作要接上”的场景。

:::note
Webhook 路径、事件名与签名算法以 [官方 API 文档](https://developers.openai.com/codex) 为准。
:::

## 常见误会

### Webhook 不是所有自动化的默认答案

如果你只是单次跑一个 `codex exec`，看退出码就够了，通常不需要 Webhook。

Webhook 更适合：

- 长任务
- 多步骤编排
- 任务结束后还要通知或驱动别的系统

### 收到回调，不代表就能直接信

很多新手会把 Webhook 当成“官方发来的消息，应该可以直接用”。

但如果你不做签名验证、幂等和超时处理，就可能被伪造请求、重复投递或系统抖动拖出问题。

## 何时用 Webhook

| 适合 | 不适合 |
|---|---|
| 任务完成通知内部系统 | 需要强实时逐字流式输出 |
| 与现有事件总线集成 | 简单 cron 只需 `exec` 退出码 |
| 多步骤编排（完成 → 触发部署） | 无公网可达 endpoint 且不愿用队列 |

简单流水线可只用 [脚本与流水线](/guide/developer-platform/non-interactive/scripts-and-pipelines/)；产品化多租户服务常 **SDK + Webhook** 组合。

## 典型事件（概念）

| 事件 | 用途 |
|---|---|
| `task.completed` | 拉取结果、更新 PR 状态 |
| `task.failed` | 告警、重试队列 |
| `task.needs_approval` | 推送到人工审批 UI |
| `review.posted` | 同步代码审查结论 |

载荷应包含：`task_id`、状态、时间戳、仓库/项目标识；**避免**在 webhook body 中放完整 prompt 若含 PII。

## 接收端最小要求

1. **HTTPS** 终端，校验官方签名头（如 `X-Signature` + HMAC）
2. **幂等**：同一 `event_id` 只处理一次
3. **快速 2xx**：重逻辑放队列异步处理
4. **日志脱敏**：不记录密钥与完整用户输入

示意（伪代码）：

```python
def handle(request):
    verify_signature(request.headers, request.body)
    event = parse_json(request.body)
    if already_processed(event["id"]):
        return 200
    enqueue(process_codex_event, event)
    return 200
```

## 与 CI 的关系

- CI 内 `codex exec` 通常**不需要** webhook，靠退出码即可
- Cloud 长任务、移动端审批场景更适合 webhook 推送到内部系统

## 常见错误

- 无签名验证，伪造回调
- 处理超过平台超时导致重复投递
- 在 webhook handler 里同步跑第二次 Codex
- 把 webhook URL 暴露在客户端前端

## 怎么判断要不要用

如果你不确定当前场景要不要上 Webhook，可以先问：

1. 我是不是需要在任务状态变化时被主动通知
2. 任务结束后，是不是还有系统级下一步要自动衔接
3. 我是不是已经有能安全接收 HTTP 回调的后端

这三条越多是“是”，Webhook 越有意义。

## 安全边界

- 见 [威胁模型](/guide/team-enterprise/security/threat-model/) 与 [可接受使用](/guide/team-enterprise/governance/acceptable-use/)
- Rotate webhook secret 纳入运维日历

## 验收清单

- [ ] 签名验证失败返回 4xx
- [ ] 幂等表或 dedupe key 已实现
- [ ] 异步 worker 与 DLQ（死信）已配置
- [ ] 与 [结构化输出](/guide/developer-platform/non-interactive/structured-output/) 字段约定一致

Webhook 适合把任务状态变化接进别的系统，同时要先把签名校验、幂等和异步处理这些基础做好。

## 参考来源

- OpenAI Codex / Cloud API 事件文档
- KimYx0207 集成章节

---

**状态：** review  
**适用产品：** API / Cloud  
**最近核验：** 2026-07-25

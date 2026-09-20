---
title: Webhook 与任务事件的边界
description: 区分 Codex 本地执行结果、App Server 事件和自行设计的 HTTP 回调。
contentType: reference
audiences: [developer]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: 已核对 SDK 与 App Server 的执行和事件模型；HTTP 回调部分为自建架构建议，不宣称存在统一的 Codex Cloud Webhook 契约。
  evidence:
    - label: SDK 官方文档
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: App Server 协议与事件
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
---

任务结束后通知内部系统，可以通过程序返回值、进程退出状态、事件流或 HTTP 回调实现。先确定发送方与协议，再决定是否需要 Webhook。

## 三种机制不要混用

| 机制 | 接收方式 | 边界 |
|---|---|---|
| 本地 SDK / CLI 执行 | 程序结果或进程状态 | 不是托管 HTTP 回调接口 |
| App Server 事件 | 连接中的 JSON-RPC 通知 | 需按协议建立连接、初始化并处理消息 |
| 自建 runner 回调 | 你的服务发 HTTP 请求 | 事件名、签名、重试和存储由你定义 |

App Server 的 `turn/completed` 是协议通知，最终状态可能为完成、中断或失败。接收后仍应检查状态与业务结果，而不是仅凭事件名就触发部署。[官方事件说明](https://learn.chatgpt.com/docs/app-server)

本文没有核验某个统一的 Codex Cloud Webhook 注册端点、签名头或 `task.completed` 事件契约。因此不提供伪装成官方接口的 URL、Header 或事件表。若你使用的具体产品已提供 Webhook，应按那个产品的版本化文档接入。

## 什么时候需要自建回调

一次 CI 任务通常可由退出状态与保存的输出继续下一步；不必为了“异步”二字增加公网接收端。

若你的系统跨进程调度任务，任务结束后还要更新工单，可以设计以下内部链路：

```text
自有队列 → 受控 runner 执行 SDK/CLI → 保存结果与状态
                                   → 自有通知服务 → 内部工单
```

这是本站给出的架构建议，不是 SDK 自带部署功能。SDK 的运行位置与集成边界见[SDK 概述](/guide/developer-platform/sdk-overview/)。

## 自建协议需要明确什么

- **身份与完整性**：规定接收方如何验证发送方，使用经过审查的认证方案，不随意臆造“官方签名头”。
- **稳定 ID 与去重**：记录任务 ID、事件 ID、尝试次数，重复投递不重复产生外部效果。
- **状态与版本**：区分执行完成、失败、中断和业务验收结果；记录载荷版本。
- **持久接收**：只在事件可靠入库或入队后确认接收；失败可重试，不能先返回成功再丢事件。
- **数据范围**：只发送下游需要的结果摘要与安全引用，日志不记录凭证。
- **停止条件**：设置重试上限、人工接管和撤销后续动作的机制。

这些是待实现和验证的设计要求，不是可直接运行的示例。本页不自动连接工单、发送消息或创建部署流程。

## 最小验收场景

在测试环境至少检查成功结果、执行失败、取消、重复事件、错误身份和接收端暂时不可用。验证重复投递只产生一次业务效果，取消不会被当作成功，未验收的生成结果不会直接发布。

具体练习可从[Issue 分流案例](/cases/use-cases/team-automation/issue-triage-suggestions/)与[定时链接检查](/cases/use-cases/team-automation/scheduled-link-check/)入手；两者的材料状态以各自页面为准。

---
title: SDK 概述：本地任务与客户端集成
description: 区分 Codex SDK、非交互 CLI、App Server 与自行搭建的远程任务服务。
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: 已对照官方 SDK 与 App Server 文档核对执行位置、线程接口和集成边界；最小示例仅做语法检查，未进行带认证的模型调用。
  evidence:
    - label: Codex SDK 官方文档
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Codex App Server 官方文档
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
---

Codex SDK 用程序控制本地 Codex Agent。这里的“本地”指运行 SDK/Agent 的机器：可以是你的电脑，也可以是你管理的 CI runner。不要把它直接理解为 OpenAI 托管的“创建云任务、轮询任务、下载制品”HTTP 服务。[官方 SDK 说明](https://learn.chatgpt.com/docs/codex-sdk)

## 按集成目标选择入口

| 目标 | 起点 | 仍需自己负责 |
|---|---|---|
| 在脚本中执行一次任务 | [codex exec](/guide/developer-platform/non-interactive/codex-exec/) | 工作目录、输入、退出状态和产物保存 |
| 在程序中运行并继续任务 | Codex SDK | 程序生命周期、环境、失败处理和验证 |
| 制作有会话、审批和流式事件的客户端 | App Server | 客户端交互、连接、身份处理及部署 |
| 提供多用户远程任务平台 | 自建服务架构 | 队列、租户隔离、凭证、存储、取消和回调 |

最后一行是工程设计选择，不是 SDK 自带的托管平台能力。官方将 SDK 用于自动化与 CI，将 App Server 用于深入集成客户端；后者通过双向 JSON-RPC 交换请求与事件。[App Server 文档](https://learn.chatgpt.com/docs/app-server)

## 最小 TypeScript SDK 调用

官方 TypeScript 包名为 `@openai/codex-sdk`，要求 Node.js 18 或更高版本。下例使用 JavaScript 模块语法，展示同一个包的基本接口；不是完整生产服务。

在专门的练习目录中安装依赖，保留实际解析版本和锁文件：

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

准备一份不含敏感信息的 `README.md`，把以下内容保存为 `example.mjs`：

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  '只读取当前目录的 README.md，用三条中文概括用途；不要修改文件或执行外部操作。'
);
console.log(answer.finalResponse);
```

随后运行 `node example.mjs`。运行前须按所选环境完成认证，并核对实际沙箱与审批设置；提示词中的“只读”是任务约束，不替代执行环境的限制。模型调用可能消耗账号用量，本文没有代你执行安装或调用。

方法名和返回字段已对照[官方示例](https://learn.chatgpt.com/docs/codex-sdk)。本站只对代码做 JavaScript 语法检查；没有锁定并实测某个 SDK 发布版本，也没有提供伪造的成功输出。实际复现时记录包版本、CLI/runtime、系统、认证方式（不记录凭证）和结果。

## 继续任务与恢复任务

同一个线程对象可再次调用 `run()`；已有线程 ID 可交给 `resumeThread()` 恢复。可恢复的线程与状态存储环境有关，不应把 ID 当成任意机器都能查询的云端 URL。官方还提供 Python 接口，接口命名与依赖要求请分别查看对应章节，不混用两种语言的代码。[线程调用与语言接口](https://learn.chatgpt.com/docs/codex-sdk)

恢复后先核对当前文件与历史描述是否一致，参见[交接与恢复](/guide/agent-work/handoff-and-resume/)。

## 调用成功之后检查什么

1. **执行位置**：记录工作目录和实际被读取、修改的文件，不仅记录 prompt。
2. **任务结果**：检查回复、文件差异和测试。得到 `finalResponse` 不等于业务验收通过。
3. **故障类别**：区分本地依赖/进程失败、认证失败、模型服务错误和任务验证失败；不要把所有异常简化为 400/429。
4. **重试影响**：先查是否已产生文件或外部效果，再决定是否重试；不能只重复提交同一请求。
5. **权限**：你负责运行环境与可用工具，不从 SDK 名称推断自动获得 Cloud、组织管理或多租户隔离能力。

这些是本站建议的集成检查项，不是 SDK 返回字段清单。实际字段以所安装版本的类型和官方文档为准。

## 与回调、队列和远程运行的关系

你可以让自己的 runner 执行 SDK，再由自己的服务投递完成通知。此时队列状态、HTTP 回调、签名格式和重试策略属于你的系统协议。App Server 的流式事件也不能直接当作 Webhook 地址使用。

继续阅读[Webhook 与任务事件的边界](/guide/developer-platform/webhooks/overview/)及[脚本与流水线](/guide/developer-platform/non-interactive/scripts-and-pipelines/)。本页不承诺某个 SDK 调用自动创建 Codex Cloud 任务、生成 artifact URL 或提供 OAuth 委派。

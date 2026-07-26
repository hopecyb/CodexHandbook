---
title: SDK 概述
description: 通过官方 SDK 在应用中发起 Codex 任务——认证、会话与错误处理概念。
---

SDK（名称与语言以 [官方文档](https://developers.openai.com/codex) 为准）让你在**自有服务**里创建任务、轮询状态、拉取结果，而不只依赖终端 TUI。

如果你第一次看到 “SDK”，可以把它理解成给程序调用 Codex 用的一套开发工具，而不是给人直接点来点去的界面。

也就是说，它更适合“你的系统去调用 Codex”。如果只是临时提个任务，通常先不用上 SDK。

## 这篇会讲什么

- 何时用 SDK 而非 CLI `exec`
- 认证与租户隔离
- 与 Webhook、队列的配合思路

平台总览：[开发者平台](/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| 集成位置 | 后端服务、内部工具 | Shell、GitHub Actions |
| 状态管理 | 你的代码负责 | 进程退出码 |
| 适合 | 多租户产品、定制 UI | 简单流水线 |

许多团队 **CI 用 CLI，产品用 SDK**。

## 常见误会

### 1. SDK 和 CLI 到底差在哪

可以先粗略理解为：

- **CLI**：人或脚本在终端里调用
- **SDK**：你写代码，把 Codex 能力嵌进自己的服务

### 2. 我是不是应该先学 SDK

通常不用。

如果你只是想先学会用 Codex，本地入口和 CLI 交互模式通常更适合作为第一步。

### 3. 什么情况下 SDK 才值得上

比如你开始遇到这些需求时：

- 想在自家产品里发起 Codex 任务
- 想自己管理任务状态和结果
- 想做定制 UI、权限和流程

SDK 更适合“给程序接系统”，不适合当作第一次上手 Codex 的主入口。

## 核心概念（语言无关）

1. **认证**：组织 API key 或 OAuth 委派——遵循最小 scope
2. **任务/线程**：一次用户请求对应可追踪 ID
3. **工具策略**：服务端指定沙盒与审批，与客户端一致
4. **结果**：消息历史、文件 diff、artifact URL（视 API）
5. **错误**：区分可重试（429）与不可重试（400）

错误索引：[错误与提示参考](/guide/reference/error-reference/)

## 最小集成检查清单

- [ ] 在 staging 用只读仓库试跑
- [ ] 日志脱敏；不记录用户完整 prompt 若含 PII
- [ ] 超时与取消：用户离开页面时能中止任务
- [ ] 版本固定 SDK 与模型 ID

## 与 CI/CD 衔接

SDK 触发 Cloud 或远程 runner，或由 CI 回调你的服务更新 PR 状态。示例模式见 [代码审查自动化](/guide/developer-platform/ci-cd/code-review-automation/)。

## 常见错误

- 把用户浏览器里的 session cookie 当 API 密钥
- 无并发限制，流量尖峰打满配额
- 自动合并 SDK 产出的 PR

## 参考来源

- OpenAI Codex SDK reference
- KimYx0207 开发者集成章节

---

**状态：** review  
**适用产品：** API  
**最近核验：** 2026-07-25

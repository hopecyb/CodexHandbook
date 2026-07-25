---
title: SDK 概述
description: 通过官方 SDK 在应用中发起 Codex 任务——认证、会话与错误处理概念。
---

SDK（名称与语言以 [官方文档](https://developers.openai.com/codex) 为准）让你在**自有服务**里创建任务、轮询状态、拉取结果，而不只依赖终端 TUI。

## 这篇解决什么问题

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

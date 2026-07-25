---
title: 错误与提示参考
description: 常见错误信息、退出码与失败原因的学习向索引——指向排障页而非替代官方支持。
---

看到报错时，先判断是**认证、权限、环境、网络还是任务逻辑**问题。本页汇总高频提示的**含义与下一步**；完整列表以官方文档与客户端输出为准。

## 这篇解决什么问题

- 错误信息在说什么
- 该去哪个专题页深入
- 非交互/CI 场景的退出码含义

全局索引：[故障排查](/guide/reference/troubleshooting/)

## 认证与账号

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| Authentication failed / 401 | token 过期、未登录 | [登录与认证](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | 组织禁用功能或模型 | 联系管理员；查套餐 [账号与访问](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | 请求过频或配额 | 稍后重试；查套餐用量 |

## CLI 与命令

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| command not found: codex | 未安装或 PATH | [安装 CLI](/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML 语法 | [CLI 配置](/guide/cli/configuration/) |
| Permission denied (write) | 沙盒或审批拒绝 | [审批与沙盒](/guide/cli/approvals-and-sandbox/) |
| 非零退出码（exec） | 任务失败或未满足完成条件 | 查 stderr 日志；收紧 prompt |

## 权限与沙盒

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| User rejected tool call | 你或策略拒绝了操作 | 确认是否应批准；或改任务 |
| Sandbox violation | 写路径或命令越界 | [沙盒与网络](/guide/foundations/sandbox-and-network/) |
| Network access denied | 出网被禁 | Cloud：[互联网访问](/guide/web-and-cloud/internet-access/) |

## Cloud 与 GitHub

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| Repository access denied | OAuth 范围不足 | [连接 GitHub](/guide/web-and-cloud/connect-github/) |
| Clone failed | 仓库名、权限、网络 | [Cloud 排障](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | 名称错误或作用域 | [Secrets 与变量](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | 分支保护 | [创建 PR](/guide/web-and-cloud/create-pull-requests/) |

## MCP 与扩展

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| MCP server failed to start | 命令路径、依赖缺失 | [连接 MCP](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | 外部 API 慢或宕机 | 重试；查 MCP 日志 |
| Unknown tool | 配置与服务器版本不一致 | 重启会话；更新配置 |

## 上下文与模型

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| Context length exceeded | 对话或 @ 文件过大 | [压缩](/guide/context/compaction/) · 缩小范围 |
| Model not available | 区域或套餐不支持 | [模型与推理](/guide/foundations/models-and-reasoning/) |

## 如何使用本页

1. **复制关键句**到客户端搜索或本手册搜索
2. 按表跳到专题页执行检查清单
3. 仍无法解决：保留完整日志，查 [官方资源](/guide/reference/official-resources/)

## 报告问题时建议附带

- 客户端类型与版本（App / CLI / IDE / Cloud）
- 操作系统
- 脱敏后的错误全文
- 是否非交互、是否 CI

## 参考来源

- OpenAI Codex 支持文档
- stormzhang FAQ 与排障章节
- KimYx0207 故障合集（需官方复核）

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

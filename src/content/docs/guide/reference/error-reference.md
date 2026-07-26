---
title: 错误与提示参考
description: 常见错误信息、退出码与失败原因的学习向索引——指向排障页而非替代官方支持。
---

很多人一看到报错，就会盯着那一行英文反复看，想靠直觉猜答案。先给问题分个类，通常更有效。

看到报错时，先判断它更像**认证、权限、环境、网络还是任务逻辑**问题。本页整理的是高频提示的大意和下一步，不是完整错误字典；最新行为仍以官方文档和客户端输出为准。

## 看到报错时，先怎么读

刚看到报错时，可以先做这三步：

1. 看关键词属于哪类：认证、权限、环境、网络、上下文
2. 看它发生在哪个阶段：启动、安装、执行、推送、输出
3. 再跳到对应专题页排查

这样通常比直接猜原因更快一点。

全局索引：[故障排查](/guide/reference/troubleshooting/)

## 认证与账号

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| Authentication failed / 401 | token 过期、未登录 | [登录与认证](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | 组织禁用功能或模型 | 联系管理员；查套餐 [账号与访问](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | 请求过频或配额 | 稍后重试；查套餐用量 |

## 常见误会

### 1. 报错长，不一定说明问题更复杂

很多长报错只是堆了上下文，真正有用的常常是其中那一小段关键词。

### 2. 非零退出码，不一定说明模型不会做

它可能只是：

- 权限没给
- 网络没通
- 输出格式没满足要求
- 任务本身触发了失败条件

### 3. 401 / 403 / 429 不是一回事

这三种情况差别很大：

- `401` 一般是“没认证好”
- `403` 一般是“知道你是谁，但不让你做”
- `429` 一般是“你太快了，稍后再来”

### 4. 最后一行不一定最重要

有时候最后一行只是“最终失败总结”，真正有用的信息反而在上面几行，比如：

- 是哪一步触发的
- 是哪个文件、命令或工具失败
- 有没有更原始的原因提示

## CLI 与命令

| 提示或现象 | 可能原因 | 下一步 |
|---|---|---|
| command not found: codex | 未安装或 PATH | [安装 CLI](/guide/getting-started/install-cli/) |
| Config parse error | TOML/YAML 语法 | [CLI 配置](/guide/cli/configuration/) |
| Permission denied (write) | 沙盒或审批拒绝 | [审批与沙盒](/guide/cli/approvals-and-sandbox/) |
| 非零退出码（exec） | 任务失败或未满足完成条件 | 查 stderr 日志；收紧 prompt |

## 先分类别

如果你不知道从哪下手，可以把报错分成 5 类：

| 类别 | 你先看什么 |
|---|---|
| 认证 | 账号、token、登录状态 |
| 权限 | 审批、沙盒、仓库权限 |
| 环境 | 安装、PATH、配置、依赖 |
| 网络 | 出网、代理、远程服务可达性 |
| 任务逻辑 | prompt、输入文件、输出要求 |

能先分到这一步，排查方向就不太容易跑偏。

## 使用方式

把它当成一张错误分流表来用就行，不用把它当完整字典：

- 看见关键词
- 找到对应类别
- 去更具体的排障页

如果还是看不懂，也可以把报错内容翻成更直接的问题：

- 是没登录好？
- 是没权限？
- 是这个命令根本没装好？
- 是网络到不了？
- 是我给 Codex 的要求本身就不清楚？

如果你一时还判断不出下一步去哪里看，可以先用这页把问题分到大类。

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

## 报告问题时附带这些会更方便

- 客户端类型与版本（App / CLI / IDE / Cloud）
- 操作系统
- 脱敏后的错误全文
- 是否非交互、是否 CI

## 排错顺序

1. 先截图或复制完整报错，不要只截最后一句
2. 先判断属于哪一类，不急着猜技术细节
3. 回忆刚才改过什么
4. 只改一个变量后重试一次
5. 还不行，再带着完整信息去问人或查官方文档

这样能避免把多个变化混在一起，别人也更容易帮你定位。

## 参考来源

- OpenAI Codex 支持文档
- stormzhang FAQ 与排障章节
- KimYx0207 故障合集（需官方复核）

---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 本页定位为“错误分流索引”而非完整错误字典，所用分类方法主要是认证、权限、环境、网络、任务逻辑五类；这些分流维度已与当前 CLI、Cloud、权限和配置章节交叉核对，不依赖固定错误码表。  
**最近核验：** 2026-07-26

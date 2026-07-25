---
title: 配置项参考
description: Codex 用户级与项目级配置键的概念索引——路径与字段以官方文档为准。
---

配置文件统一 **模型、沙盒、审批、MCP** 等行为。本页是**概念索引**；具体文件路径、TOML/YAML 键名必须以 [OpenAI Codex 文档](https://developers.openai.com/codex) 与你安装的版本为准。

## 这篇解决什么问题

- 配置分几层、谁覆盖谁
- 常见配置「意图」对应什么键类（概念）
- 与 `AGENTS.md`、环境变量的分工

## 配置层级

| 层级 | 位置（概念） | 典型内容 |
|---|---|---|
| 用户级 | `~/.codex/` 等 | 默认模型、个人审批习惯 |
| 项目级 | 仓库内配置文件 | 团队沙盒、MCP 列表 |
| 环境变量 | Shell / CI 注入 | 密钥、临时开关 |
| 托管 | 组织下发 | 不可覆盖的强制策略 |

入门：[配置基础](/06-customization/configuration/config-basics/) · 终端侧重：[CLI 配置](/04-product-guides/cli/configuration/)

## 配置域索引（概念）

### 模型与推理

| 意图 | 说明 |
|---|---|
| 默认模型 | 新会话使用的模型 ID |
| 推理强度 / reasoning | 复杂任务档位（若支持） |
| 温度等采样 | 一般保持默认，脚本化时固定 |

背景：[模型与推理](/01-foundations/models-and-reasoning/)

### 沙盒与网络

| 意图 | 说明 |
|---|---|
| 文件系统范围 | 可写路径、是否允许写项目外 |
| 网络访问 | 禁止 / 受限 / 允许 |
| 出站域名 | 白名单（若支持） |

背景：[沙盒与网络](/01-foundations/sandbox-and-network/)

### 审批策略

| 意图 | 说明 |
|---|---|
| shell 执行前 | 总是询问 / 信任列表 / 自动（高风险） |
| 写文件前 | 同上 |
| MCP 工具调用 | 按服务器或工具粒度 |

背景：[权限与审批](/01-foundations/permissions-and-approvals/) · 矩阵：[权限矩阵](/12-reference/permission-matrix/)

### 工作区与 CLI

| 意图 | 说明 |
|---|---|
| 默认 `cwd` | 启动目录 |
| 非交互默认 | exec 用审批与沙盒 |
| 日志级别 | 排障时调高 |

### MCP 服务器

| 意图 | 说明 |
|---|---|
| 服务器列表 | 命令、URL、传输方式 |
| 环境变量注入 | 与 MCP 进程绑定，非进 Git |

[连接 MCP](/07-extensions-automation/mcp/connect-an-mcp-server/)

### IDE / App 扩展

部分项仅在扩展设置 UI 中，可能与 CLI 共享同一用户配置后端——以产品说明为准。

[IDE 设置](/04-product-guides/ide/settings/) · [桌面 App 设置](/04-product-guides/desktop-app/settings/)

## 与环境变量

| 类型 | 放哪 |
|---|---|
| API key、token | 环境变量或 Secret 管理器 |
| 非敏感开关 | 环境变量或配置 |
| 编码规范 | `AGENTS.md`，不是 config |

Cloud Secrets：[Secrets 与环境变量](/04-product-guides/web-and-cloud/secrets-and-variables/)

## 变更纪律

1. 一次只改一类配置，观察一周
2. 项目级变更走 PR review
3. 升级 CLI 后 diff 官方 migration 说明
4. 勿把密钥写入配置文件提交 Git

## 常见错误

- 文档中的键名与旧版 CLI 不匹配
- 个人本机放宽沙盒，却用于客户仓库
- 与 `AGENTS.md` 指令矛盾（配置允许但文档禁止）

## 参考来源

- OpenAI Codex configuration reference
- stormzhang `18-config.md`
- KimYx0207 CX-04

---

**状态：** review  
**适用产品：** CLI / App / IDE  
**最近核验：** 2026-07-25

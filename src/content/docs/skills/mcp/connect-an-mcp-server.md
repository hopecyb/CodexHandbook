---
title: 连接 MCP 服务器
description: 用 CLI 或 config.toml 配置、鉴权并验证第一个 MCP 服务器。
---

本章使用当前官方接口完成一个最小闭环：**添加服务器 -> 查看配置 -> 在会话里确认工具 -> 做一次只读调用**。

## 开始前

- 已阅读 [MCP 概述](/skills/mcp/mcp-overview/)
- 本机 `codex mcp --help` 可运行
- 第一次接入使用可信来源和只读场景
- 不把真实 token 写入命令历史、提示词或仓库

## 路径 A：用 CLI 添加 STDIO 服务器

官方示例使用 Context7 文档服务器：

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

这条命令会把服务器写入 Codex 配置。`--` 之后是启动 STDIO 服务器的命令；第一次运行可能需要下载 npm 包，因此应先确认包名和来源。

## 路径 B：直接编辑 config.toml

用户级配置默认位于 `~/.codex/config.toml`。受信任项目也可以使用项目级 `.codex/config.toml`。

STDIO 示例：

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

远程 Streamable HTTP 示例：

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

`internal_docs`、地址和工具名只是结构示例，必须替换为你的服务器文档给出的真实值。`bearer_token_env_var` 保存的是环境变量名，不是 token 本身。

## OAuth 服务器

配置支持 OAuth 的服务器后，运行：

```bash
codex mcp login <server-name>
```

桌面 App 与 IDE 的 MCP 列表也会标出需要 OAuth 的服务器，并提供 Authenticate 操作。

## 三种客户端怎样查看

| 表面 | 配置或查看入口 |
|---|---|
| ChatGPT 桌面 App | Settings -> MCP servers；保存后 Restart；输入 `/mcp` 查看连接 |
| Codex CLI | `codex mcp add/list/login`；TUI 输入 `/mcp` |
| IDE 扩展 | 齿轮菜单 -> MCP servers；保存后 Restart extension |

这三者在同一 Codex host 上共享配置，不需要分别维护三份文件。ChatGPT Web 不读取本机配置。

## 验证提示词

```text
只使用当前已连接的 MCP 服务器完成以下检查：
1. 列出与开发文档查询有关的可用工具名称；
2. 选择一个只读工具，查询 Node.js test runner 的基础用法；
3. 说明实际调用了哪个工具；
4. 不执行写操作，也不要连接其他服务。
```

验收证据：服务器出现在 `codex mcp list` 或 `/mcp`，只读工具成功返回结构化结果，且没有请求无关权限。

## 最小权限选项

- `enabled_tools`：只允许列出的工具
- `disabled_tools`：在 allowlist 之后继续排除工具
- `enabled = false`：保留配置但临时禁用
- `required = true`：服务器初始化失败时让启动失败，适合确实不可缺少的依赖

## 失败时

不要边猜边改多个字段。记录错误原文，然后按[调试 MCP 连接](/skills/mcp/debugging-mcp/)依次确认配置读取、进程/网络、鉴权和单个工具。

## 官方来源

- [OpenAI：连接 Codex 与 MCP 服务器](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)

---

**状态：** verified

**适用产品：** ChatGPT 桌面 App / Codex CLI / IDE

**最近核验：** 2026-08-25

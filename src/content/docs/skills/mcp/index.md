---
title: MCP
description: 用受控方式把第三方工具和上下文接入 ChatGPT 与 Codex。
---

MCP（Model Context Protocol）解决的是“Agent 怎样调用仓库外的工具和数据”，不是“怎样写一套工作流程”。

## 适合谁

- 想让 Codex 查询文档、设计稿、工单或内部工具的个人开发者
- 需要统一配置外部工具、OAuth 和最小权限的团队
- 正在排查“服务器已配置，但工具不可见或调用失败”的维护者

如果任务只读写当前仓库，先用内置文件与终端能力；只有确实需要第三方上下文或操作时再接 MCP。

## 阅读顺序

1. [MCP 概述](/skills/mcp/mcp-overview/)：分清 MCP、Skill、Plugin 的职责
2. [连接 MCP 服务器](/skills/mcp/connect-an-mcp-server/)：用 CLI 或 `config.toml` 接入第一个服务器
3. [调试 MCP 连接](/skills/mcp/debugging-mcp/)：按“配置、启动、鉴权、工具”四层排查

## 当前支持边界

- ChatGPT 桌面 App、Codex CLI 和 IDE 扩展在同一 Codex host 上共享 MCP 配置。
- 本地 Codex 客户端支持 STDIO 与 Streamable HTTP 服务器。
- ChatGPT Web 不读取本机 `~/.codex/config.toml`；它通过已安装 Plugin 提供的远程 MCP 工具工作。

## 先记住三条

1. MCP 暴露工具，不替你定义可靠流程；稳定流程仍应写进 Skill 或 `AGENTS.md`。
2. 服务器能做什么，取决于它暴露的工具和背后的凭据范围。
3. 第一次接入从只读、测试租户和少量工具开始，不要用生产管理员令牌试跑。

## 官方来源

- [OpenAI：Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Model Context Protocol 规范](https://modelcontextprotocol.io/)

---

**状态：** verified

**适用产品：** ChatGPT 桌面 App / Codex CLI / IDE；ChatGPT Web 通过 Plugin 使用远程 MCP 工具

**核验范围：** 客户端支持、共享配置、传输方式与 CLI 命令

**最近核验：** 2026-08-25

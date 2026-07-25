---
title: MCP 概述
description: Model Context Protocol——让 Codex 安全连接外部工具与数据源。
---


**MCP（Model Context Protocol）** 是连接 Codex 与外部系统（Issue 跟踪、数据库、文档站、内部 API）的开放协议。Codex 通过 MCP **发现工具、鉴权、调用**，而不是你把密码贴进对话。

## 这篇解决什么问题

- MCP 解决「Codex 够不着真实系统」的问题
- 与 Skill、Plugin 的分工
- 为什么 MCP 必须纳入安全治理

## 核心概念

```text
Codex  ←→  MCP 客户端  ←→  MCP 服务器  ←→  外部系统
```

| 组件 | 角色 |
|---|---|
| MCP 服务器 | 暴露一组工具（如 `search_issues`、`get_user`） |
| 配置 | 告诉 Codex 如何启动/连接服务器 |
| 工具调用 | 模型在任务中选择工具，常需你审批 |

MCP **不提供**业务逻辑本身——你的服务器实现读写规则；Codex 负责在任务中选用哪个工具。

## 与 Skill、Plugin 的关系

| | MCP | Skill | Plugin |
|---|---|---|---|
| 本质 | 工具协议 | 工作流说明 | 分发包 |
| 典型内容 | API 封装 | 步骤与规范 | Skill + MCP + 应用连接器 |
| 谁维护 | 你或第三方服务器 | 你或团队 | 发布者 |

常见组合：**Skill 规定流程**，流程某步 **调用 MCP 工具** 拉取工单列表。

## 适用场景

| 适合 MCP | 不适合 MCP |
|---|---|
| 查 Linear/Jira 工单 | 纯仓库内改代码 |
| 只读查文档/知识库 | 可用简单 `curl` 且无需复用 |
| 受控的内部工具 | 无审计的高权限生产库写操作 |

## 安全边界

- **最小权限**：只读、限定项目、限定 IP
- **凭据**：OAuth 或短期令牌，不进 prompt、不进 Git
- **人工审批**：写操作、批量删除、对外发送消息应设复核
- **供应链**：只连接可信服务器，审查第三方 MCP 源码

企业场景见路线图 `11-team-enterprise/security/plugin-and-mcp-risk`。

## 最小可用路径

1. 读官方 MCP 文档，确认当前客户端配置格式
2. 从一个**只读**官方或社区示例服务器开始
3. 在测试项目验证单个工具调用
4. 再接入真实系统，并写运行手册

操作步骤：[连接 MCP 服务器](/07-extensions-automation/mcp/connect-an-mcp-server/)

## 常见错误

- 给 MCP 服务器过高权限「方便开发」
- 把 MCP 当成 Skill 替代品（流程说明仍应写在 Skill 或 AGENTS.md）
- 配置变更不纳入代码审查

## 参考来源

- [Model Context Protocol](https://modelcontextprotocol.io/)
- OpenAI Codex MCP 文档
- KimYx0207 CX-05；stormzhang `20-mcp.md`

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

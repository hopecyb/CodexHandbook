---
title: 扩展与自动化
description: Skills、MCP、Plugins、Hooks 与 Automations——在提示词之外扩展 Codex 能力。
---


当 [提示词](/05-core-capabilities/prompting/) 与 [AGENTS.md](/06-customization/agents-md/what-is-agents-md/) 仍不够时，用**扩展机制**把能力、工具与流程打包进 Codex。

## 这篇解决什么问题

- 扩展生态里有哪些「积木」，各自解决什么问题
- 如何选型，而不是把所有东西都装上
- 安全与审批在扩展场景下为何更重要

## 能力一览

| 机制 | 一句话 | 典型场景 |
|---|---|---|
| [Skill](/07-extensions-automation/skills/skills-overview/) | 可复用工作流说明书 | 发版清单、代码审查模板 |
| [MCP](/07-extensions-automation/mcp/mcp-overview/) | 连接外部工具与数据源 | Issue 跟踪、数据库只读查询 |
| [Plugin](/07-extensions-automation/plugins/plugins-overview/) | 打包 Skill + MCP + 应用连接器 | 团队统一分发能力包 |
| Hooks | 在关键节点插入校验/日志 | 合规扫描、审计 |
| [Automations](/07-extensions-automation/automations/scheduled-tasks/) | 定时或事件触发任务 | 依赖漏洞扫描、文档同步 |

选型决策树见 [如何选择扩展方式](/07-extensions-automation/choosing-an-extension-method/)；概念总图见 [扩展能力地图](/07-extensions-automation/capability-map/)。

## 推荐学习顺序

```text
1. 先写好 AGENTS.md 与任务模板（06、09 章）
2. 学 Skill——成本最低、最易团队共享
3. 再接 MCP——需要真实外部系统时
4. Plugin / Automations——团队规模化与治理成熟后
```

## 安全边界（必读）

扩展会扩大**攻击面**：恶意或过度授权的 MCP 可能泄露数据；自动化可能在无人值守时改仓库。

- 只安装来源可信的 Plugin/MCP
- 最小权限：只读优于读写，单仓库优于全盘
- 自动化任务必须有**退出条件、通知与人工复核点**

团队治理专题见 [团队与企业](/11-team-enterprise/)。

## 本章导航

- **Skills**：[概述](/07-extensions-automation/skills/skills-overview/) · [创建第一个 Skill](/07-extensions-automation/skills/create-your-first-skill/) · [安全与版本](/07-extensions-automation/skills/skill-security-and-versioning/)
- **MCP**：[概述](/07-extensions-automation/mcp/mcp-overview/) · [连接 MCP 服务器](/07-extensions-automation/mcp/connect-an-mcp-server/) · [调试 MCP](/07-extensions-automation/mcp/debugging-mcp/)
- **Hooks**：[概述](/07-extensions-automation/hooks/hooks-overview/) · [事件类型](/07-extensions-automation/hooks/hook-event-types/) · [配置示例](/07-extensions-automation/hooks/hooks-examples/)
- **Plugins**：[概述](/07-extensions-automation/plugins/plugins-overview/)
- **Automations**：[定时与后台任务](/07-extensions-automation/automations/scheduled-tasks/)

## 参考来源

- OpenAI Codex：Skills、MCP、Plugins 官方文档
- KimYx0207 CX-05～CX-09 系列（事实需官方复核）
- stormzhang/ai-coding-guide：skills、mcp、plugins、hooks、automation 章节

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

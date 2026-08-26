---
title: Plugins
description: 浏览、安装和治理可复用的 Skills、连接器、MCP、Hooks 与任务模板组合。
---

Plugin 是能力组合与分发单元。它可以包含 Skills、连接器、MCP 服务器、浏览器扩展、Hooks 和 Scheduled task 模板；真正执行工作的仍是其中这些组件。

## 适合谁

- 想从公共目录安装一套现成能力的使用者
- 准备把团队流程、工具和守护栏作为一个版本化单元分发的维护者
- 需要审查来源、外部服务权限和 Plugin Hook 的管理员

## 当前支持表面

| 表面 | 浏览/安装 | 使用 |
|---|---|---|
| ChatGPT Web 与桌面 App | Plugins 标签页 | Chat 与 Work |
| ChatGPT Mobile | 不作为主要管理入口 | 使用账号已有 Plugin |
| ChatGPT 桌面 App 中的 Codex | Plugins 标签页 | Codex 任务 |
| Codex CLI | `/plugins` 浏览器；安装后开启新会话 | Codex 环境 |
| IDE 扩展 | **不支持 Plugin** | 可单独使用 MCP、Skill 等 IDE 已支持能力 |

## 阅读入口

- [Plugins 概述](/skills/plugins/plugins-overview/)：理解组件、支持边界、安装验证与安全审查
- [扩展能力地图](/skills/capability-map/)：比较 Plugin、Skill、MCP、Hook 和 Scheduled task

## 安装前先问

1. 来源和维护者是谁？
2. 它包含哪些 Skills、连接器、MCP、浏览器能力与 Hooks？
3. 是否需要连接外部账号，会获得哪些 scope？
4. Hook 是否已在 `/hooks` 中审查和信任？
5. 团队怎样禁用、升级、回滚和回收授权？

## 官方来源

- [OpenAI：Plugins](https://learn.chatgpt.com/docs/plugins)

---

**状态：** verified

**适用产品：** ChatGPT Web / 桌面 App / Mobile；Codex 桌面与 CLI；IDE 扩展不支持 Plugin

**最近核验：** 2026-08-26

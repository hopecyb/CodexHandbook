---
title: 何时使用 Skills
description: 判断任务是否适合封装为 Skill，以及与斜杠命令、MCP 的分工。
---

# 何时使用 Skills

## 适合封装为 Skill

- 同一流程第三次被手动重复
- 需要详细检查清单，但不想每次占满上下文
- 希望模型根据 `description` 自动判断何时启用
- 团队需要共享、版本化的工作流

## 不太适合

- 一次性、从未重复的任务
- 极短、你记得住的固定命令（考虑斜杠命令）
- 需要实时外部系统状态且变化极快（考虑 MCP）

## 与其他扩展方式对比

| 方式 | 适合 |
|---|---|
| Skill | 可复用流程、渐进式披露 |
| MCP | 连接外部 API 与数据源 |
| Hooks | 在特定事件点自动执行 |
| `AGENTS.md` | 项目级常驻约定 |

扩展方式选型见 [如何选择扩展方式](/skills/choosing-an-extension-method/)。工作流沉淀见 [把流程变成 Skill](/cases/workflows/turn-a-workflow-into-a-skill/)。
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

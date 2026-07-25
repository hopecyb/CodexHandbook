---
title: Agent 基础
description: 解释 Agent 如何围绕目标调用工具并迭代推进。
---


**Agent** 不是一次问答结束，而是：理解目标 → 选择工具 → 观察结果 → 调整下一步，直到完成或需要你介入。

## Agent 与普通聊天的区别

| | 普通聊天 | Agent |
|---|---|---|
| 输出 | 主要是文字建议 | 可读写文件、跑命令、改仓库 |
| 过程 | 一次回复 | 多步工具调用 |
| 风险 | 误导性建议 | 还可能改坏文件或执行危险命令 |
| 你的角色 | 阅读 | 设定边界、审批、验收 |

## 相关概念

- Skill / Plugin / MCP：扩展「会做什么」与「连到哪」——见 [扩展与自动化](/skills/) 与 [能力地图](/guide/start-here/codex-capability-map/)
- 人工审批：见 [权限与审批](/guide/foundations/permissions-and-approvals/)


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25


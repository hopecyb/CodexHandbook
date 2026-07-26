---
title: Agent 基础
description: 解释 Agent 如何围绕目标调用工具并迭代推进。
---


**Agent** 会围绕目标持续往下做：理解目标 → 选择工具 → 观察结果 → 调整下一步，直到完成或需要你介入。

普通 AI 更像回答问题的人，Agent 更像接到任务后会一步步往下做的人。

## Agent 与普通聊天的区别

| | 普通聊天 | Agent |
|---|---|---|
| 输出 | 主要是文字建议 | 可读写文件、跑命令、改仓库 |
| 过程 | 一次回复 | 多步工具调用 |
| 风险 | 误导性建议 | 还可能改坏文件或执行危险命令 |
| 你的角色 | 阅读 | 设定边界、审批、验收 |

## 一个直观类比

两者可以这样对比：

- **普通聊天**：像问朋友“这题怎么做”
- **Agent**：像请同事先去做一版，做完再一起检查

所以在 Agent 模式下，你要更关心：

- 它能访问什么
- 它要不要先给计划
- 它做完后你怎么验收

## 为什么要分清这个区别

很多误用都来自同一个误解：

> 以为它只是“说说而已”

一旦它开始读文件、改文件、跑命令，它就不再只是聊天窗口里的建议，而是在参与实际工作。

刚开始用时，建议同时读：

1. [权限与审批](/guide/foundations/permissions-and-approvals/)
2. [运行第一次任务](/guide/getting-started/run-your-first-task/)
3. [检查结果](/guide/getting-started/review-the-result/)

## 相关概念

- Skill / Plugin / MCP：扩展「会做什么」与「连到哪」——见 [扩展与自动化](/skills/) 与 [能力地图](/guide/start-here/codex-capability-map/)
- 人工审批：见 [权限与审批](/guide/foundations/permissions-and-approvals/)

Agent 的特点，是它能围绕目标连续做几步事，不只是回你一段话。


---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 本页仅说明 Agent 与普通聊天的协作差异；站内链接与概念、类比表达已复查，且正文不依赖易变产品事实。  
**最近核验：** 2026-07-26

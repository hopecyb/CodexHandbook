---
title: 权限与审批
description: 解释 Codex 何时需要你批准操作。
---


Codex 不应在未获同意时执行高风险操作。**审批** 是人机协作的关键闸门。

## 你通常需要关心的

- 是否允许读写当前项目外的路径
- 是否允许联网
- 是否允许执行特定 shell 命令
- 团队是否下发了强制策略（托管配置）

## 分层说明

| 层 | 写什么 | 去哪读 |
|---|---|---|
| 概念（本页） | 为什么需要审批 | — |
| 产品差异 | 各入口如何弹出确认 | [产品手册](/guide/) |
| 提示策略 | 如何在任务里声明权限边界 | [定义约束](/prompts/constraints-and-boundaries/) |

官方策略与默认值可能变化，请核对 [https://developers.openai.com/codex](https://developers.openai.com/codex)。


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25


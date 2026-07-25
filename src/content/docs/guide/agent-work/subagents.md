---
title: 子 Agent
description: 把子任务委托给独立上下文——何时拆、如何交接、如何验收。
---


**子 Agent（Subagent）** 是主 Agent 为特定子问题启动的**独立工作单元**，拥有相对隔离的上下文，完成后将结果汇总回主线程。

## 先理解一个核心概念

| 主 Agent | 子 Agent |
|---|---|
| 持有全局目标与用户对话 | 聚焦单一子任务 |
| 上下文含完整历史 | 上下文更干净，适合深挖 |
| 协调与合并结果 | 执行探索、检索、专项实现 |

与 [并行 Agent](/guide/desktop-app/parallel-agents/) 的区别：子 Agent 通常是**主 Agent 主动委派**的任务单元，而非用户手动开多个窗口（产品实现可能重叠，以当前 UI 为准）。

## 适用场景

| 适合 | 不适合 |
|---|---|
| 在大仓库中定向搜索「认证模块如何校验 token」 | 需要持续与用户来回澄清需求 |
| 并行调研两种技术方案 | 子任务强依赖同一文件的互斥编辑 |
| 长时间只读分析，避免污染主上下文 | 无明确交付物的「随便看看」 |

## 推荐工作流

### 1. 主 Agent 写清子任务契约

```text
子任务：只读分析 packages/auth 的 session 刷新逻辑。
交付：1 页以内摘要 + 关键文件路径 + 风险点。
禁止：改任何文件、不要 push。
```

### 2. 子 Agent 执行并返回结构化结果

期望格式：

```text
## 结论
## 证据（文件:行号）
## 建议下一步
## 未解决的问题
```

### 3. 主 Agent 合并与决策

由主线程（或你）决定采用哪条路径，再进入 [探索—计划—执行—验证](/cases/workflows/explore-plan-execute-verify/) 的执行阶段。

### 4. 验收

- 子 Agent 输出是否可独立验证（能点开文件核对）
- 是否越权修改仓库
- 多子 Agent 结论冲突时是否已标明

## 与 Skill、MCP 的配合

- **Skill**：定义子任务的标准交付格式（如安全审查清单）
- **MCP**：子 Agent 只读查询外部工单，主 Agent 综合决策

## 常见错误

- 子 Agent 范围过大，变成第二个主 Agent
- 未要求结构化返回，主线程重新读长篇日志
- 多个子 Agent 同时改同一目录

## 延伸阅读

- [多 Agent 协作](/cases/workflows/multi-agent-coordination/)
- [交接与恢复](/guide/agent-work/handoff-and-resume/)
- KimYx0207 CX-08；stormzhang `21-subagents.md`

---

**状态：** review  
**适用产品：** App / CLI / Cloud  
**最近核验：** 2026-07-25

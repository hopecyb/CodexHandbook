---
title: 多 Agent 协作
description: 并行探索、分工执行与合并结果——何时拆、如何验收。
---


多 Agent 适合**可并行、低耦合**的子问题；不适合无人协调地改同一文件。

## 何时拆分

| 适合 | 不适合 |
|---|---|
| 前端样式 + 后端 API 契约并行调研 | 同一函数两人改 |
| 一个跑测试一个写文档 | 共享可变状态无锁 |
| 探索多种实现方案 | 强顺序依赖未理清 |

产品能力见 [并行 Agent](/guide/desktop-app/parallel-agents/)、[子 Agent](/guide/agent-work/subagents/)。

## 协作模式

### 模式 A：并行探索，人工选型

```text
Agent 1：方案 A 的优缺点与工作量
Agent 2：方案 B 的优缺点与工作量
你：选一个，再开单 Agent 执行
```

### 模式 B：流水线

```text
探索 Agent → 输出计划 → 执行 Agent（新线程，附计划摘要）
```

利用 [交接与恢复](/guide/agent-work/handoff-and-resume/) 传递结构化摘要，不要粘贴整段聊天。

### 模式 C：工作树隔离

不同 Agent 在不同 [git worktree](/guide/desktop-app/worktrees/) 改不同分支，最后人工合并。

## 协调规则（建议写入 AGENTS.md）

- 每个 Agent 明确目录边界
- 禁止并行 `git push`
- 合并前统一跑 CI
- 冲突由人解决，不让 Agent 猜

## 验收

- [ ] 每个子 Agent 有独立「完成定义」
- [ ] 合并后全量测试通过
- [ ] diff 可追溯到对应子任务说明

## 常见错误

- 并行三个 Agent 改 `package.json`
- 无汇总步骤，不知道听谁的结论

---

**状态：** review  
**适用产品：** App / Cloud  
**最近核验：** 2026-07-25

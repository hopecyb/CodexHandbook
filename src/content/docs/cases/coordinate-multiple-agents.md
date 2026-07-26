---
title: 协调多 Agent
description: 并行探索、分工执行与合并结果的协作案例。
---

# 协调多 Agent

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 开发者 / 团队 |
| 客户端 | 桌面 App |
| 预估耗时 | 视任务而定 |

## 1. 目标与背景

**目标：** 将可并行的子问题拆分给多个 Agent，人工合并结论。

**成功标准：** 各子 Agent 有独立完成定义，无互相覆盖同一文件。

## 2. 推荐模式

### 并行探索，人工选型

```text
Agent 1：方案 A 的优缺点与工作量
Agent 2：方案 B 的优缺点与工作量
（你选型后，单 Agent 执行）
```

### 工作树隔离

不同 Agent 在不同 [git worktree](/guide/desktop-app/worktrees/) 改不同分支，最后人工合并。

## 3. 协调规则（建议写入 AGENTS.md）

- 每个 Agent 明确目录边界
- 禁止并行 `git push`
- 合并前统一跑 CI

## 4. 相关

- [多 Agent 协作](/cases/workflows/multi-agent-coordination/)
- [子 Agent](/guide/agent-work/subagents/)
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** OpenAI Help Center 当前 Codex 计划资料仍说明桌面 App 支持并行 Codex agents、内置 worktree 支持与云端委派；本页仅总结“并行探索、目录边界隔离、避免并行 push、人工合并结论”的协作模式，不依赖某个单一 UI 流程。  
**最近核验：** 2026-07-26

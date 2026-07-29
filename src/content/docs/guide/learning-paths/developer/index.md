---
title: 开发者路径（概览）
description: 软件开发相关路线概览；深度步骤后续补齐。
sidebar:
  order: 20
---

> MVP 状态：本页为概览。完整五步将在后续里程碑补齐。

如果你主要想用 Codex 改代码、理解项目、修问题，可以从这条路径开始。

## 适合的情况

- 需要读代码、改代码、跑测试的人
- 想把 Codex 接到真实开发工作流里的人
- 想把“写任务、看 diff、跑验证”这套流程用顺的人

## 现在可以读

- [快速上手](/guide/getting-started/) 与 [CLI](/guide/cli/) / [IDE](/guide/ide/)
- [运行测试](/guide/quality/run-tests/) · [审查差异](/guide/quality/review-diffs/)
- [Agent 规划](/guide/agent-work/planning/)

## 常见误会

### 1. 开发者路径就是让它先开始写代码

更影响结果质量的，往往是这些事：

- 它有没有理解范围
- 你有没有定义完成标准
- 最后有没有认真看 diff 和验证结果

### 2. 我会写代码，所以基础概念可以跳过

还是别完全跳过。

Codex 的工作方式和普通编辑器自动补全不一样，像权限、上下文、工具调用这些概念还是会直接影响结果。

## 建议阅读顺序

如果你准备把 Codex 用到开发里，可以按这个顺序读：

1. [快速上手](/guide/getting-started/)
2. [CLI](/guide/cli/) 或 [IDE](/guide/ide/)
3. [Agent 工作](/guide/agent-work/)
4. [运行测试](/guide/quality/run-tests/)
5. [审查差异](/guide/quality/review-diffs/)

这条路径更看重改动可控、结果可验证，不是单纯追求“先让它写起来”。

## 规划中的步骤（大纲）

理解代码库 → 修复与实现 → 测试与评审 → 自动化工作流 → 多 Agent 开发

---

**状态：** verified  
**适用产品：** App / CLI / IDE  
**核验依据：** 已按本仓库当前开发相关入口页、Agent 工作、运行测试与审查差异章节交叉复核；本页仅作为“开发者阅读顺序概览”，不承诺具体实现或工具默认行为。  
**最近核验：** 2026-07-26

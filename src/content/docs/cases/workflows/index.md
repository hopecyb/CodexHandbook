---
title: 工作流方法
description: 可重复的协作方法——不绑定单一产品界面，强调检查点与验收。
---


[提示词](/prompts/) 教你怎么**说**；工作流教你怎么**组织一整件事**。本章方法适用于 App、CLI、IDE 与 Cloud。

## 为什么需要工作流

外部教程里常见「一次对话搞定」的叙事，真实项目更常是：

```text
探索 → 计划 → 执行 → 验证 →（可能）交接或自动化
```

没有检查点，就容易出现：改错目录、没跑测试、误合并、上下文耗尽后丢失结论。

## 核心工作流

| 工作流 | 解决什么问题 |
|---|---|
| [探索—计划—执行—验证](/cases/workflows/explore-plan-execute-verify/) | 通用主链路，适合大多数任务 |
| [先头脑风暴再动手](/cases/workflows/brainstorm-before-building/) | 方案未定时发散与收敛 |
| [规格驱动工作](/cases/workflows/specification-driven-work/) | 先写可验收规格再实现 |
| [测试驱动工作](/cases/workflows/test-driven-work/) | 测试先行驱动实现 |
| [人工审批模式](/cases/workflows/human-approval-patterns/) | 何时停、何时批、何时拒绝 |
| [先诊断再修复](/cases/workflows/diagnose-before-fixing/) | 避免「猜修」 |
| [合并前审查](/cases/workflows/review-before-merge/) | PR 合并前的结构化审查 |
| [带引用的研究](/cases/workflows/research-with-sources/) | 检索、对比与来源核验 |
| [产物优先](/cases/workflows/artifact-first-work/) | 先约定交付物再反推步骤 |
| [多 Agent 协作](/cases/workflows/multi-agent-coordination/) | 并行与分工 |
| [长任务管理](/cases/workflows/long-running-task-management/) | 跨会话检查点与退出条件 |
| [失败恢复](/cases/workflows/failure-recovery/) | 跑偏、测试变红时的回退 |
| [沉淀为 Skill](/cases/workflows/turn-a-workflow-into-a-skill/) | 重复流程写成 Skill |

## 与工作流相关的其他章节

- 质量：[核心能力 · 质量与验证](/guide/quality/)
- Agent：[规划](/guide/agent-work/planning/)、[子 Agent](/guide/agent-work/subagents/)
- 沉淀：[Skill](/skills/overview/)、[AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- 案例：[场景与案例库](/cases/use-cases/)

## 设计原则

1. **每个阶段有产出物**：计划、diff、测试报告、决策记录
2. **默认小步**：可审查的增量优于一次巨大改动
3. **失败可恢复**：知道如何撤销、如何 fork 线程继续
4. **能沉淀就沉淀**：第三次重复的流程写成 Skill 或模板

## 参考来源

- freestylefly/CodexGuide 工作流与 playbook
- stormzhang `14-workflows.md`
- codex.bozhouai.com 第四篇标准工作流

---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 已按本手册当前已核验的提示词、质量、Agent 工作与 Skills 章节交叉复核；本页只承担方法导航与阶段性检查点说明，不把具体客户端流程写成长期契约。  
**最近核验：** 2026-07-26

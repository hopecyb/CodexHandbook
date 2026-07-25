---
title: 长任务管理
description: 跨小时或多会话的大任务——检查点、压缩、委托与退出条件。
---

长任务会碰到：**上下文变满**、**人要离开**、**方向漂移**、**不知道何时停**。本页把 [探索—计划—执行—验证](/09-workflows/explore-plan-execute-verify/) 延伸到数小时尺度。

## 这篇解决什么问题

- 何时拆任务、何时委托 Cloud
- 检查点与状态记录写什么
- 自动化长任务的退出条件

相关：[委托与跟进](/04-product-guides/web-and-cloud/delegate-and-follow-up/) · [Automations](/07-extensions-automation/automations/scheduled-tasks/)

## 长任务信号

- 预计超过 30 分钟机器时间
- 涉及多个子系统或 >20 文件
- 需要等人反馈或外部 API
- 需要跑完整 E2E / 性能测试

满足任一时，应**显式计划**而非一路聊天到底。

## 三阶段管理

### 1. 计划冻结

产出书面计划：范围、非目标、里程碑、验收命令。让人确认后再大规模执行。

[规划](/05-core-capabilities/agent-work/planning/) · [子 Agent](/05-core-capabilities/agent-work/subagents/)

### 2. 检查点

每完成里程碑：

- 提交或 stash 可审查增量
- 更新 `PROGRESS.md` 或 issue 评论：完成了什么、下一步、阻塞项
- 上下文满时用 [压缩](/05-core-capabilities/context/compaction/) 或新开会话 + 链接进度文件

### 3. 收尾或委托

- 本地装不下时 → [Cloud 委托](/04-product-guides/web-and-cloud/delegate-and-follow-up/)
- 需持续监控 → Automation + 明确 **max iterations / 截止时间**

## 退出条件（自动化必备）

| 条件 | 说明 |
|---|---|
| 时间上限 | 4h 无进展则告警 |
| 迭代上限 | 同一测试失败 3 次则停 |
| 人工闸门 | 改生产配置前必须 @ 人 |
| 成功条件 | 测试绿 + PR 开 |

## 常见错误

- 没有 PROGRESS 文件，换会话后重复劳动
- 长任务不设非目标，Agent 顺手「整理全库」
- Cloud 任务无人审批挂一夜

## 验收清单

- [ ] 长任务开始前有计划文档
- [ ] 至少两个检查点有可审查 diff
- [ ] 知道如何暂停、恢复或移交

## 参考来源

- codex.bozhouai.com 长任务与标准工作流
- freestylefly/CodexGuide 任务沉淀
- stormzhang `14-workflows.md`

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

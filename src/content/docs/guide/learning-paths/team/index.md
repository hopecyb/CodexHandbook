---
title: 团队路径：两周试点、抽检与推广决定
description: 从一个低风险任务开始，用十个工作日建立角色、运行记录、复核、回退和有限推广的证据。
contentType: path
audiences: [team]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: 两周路径、六份模板与三种异常情境经作者桌面推演；没有真实团队试点、独立复核或效率提升数据。
assets:
  - path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
    purpose: 试点章程、任务表、复核表、异常回退、决策与十日安排
    license: CC0-1.0
    version: 1.0.0
sidebar:
  order: 30
---

从一个范围有限、能检查结果的任务开始，用两周收集是否值得扩大使用的证据。这里的两周按十个工作日安排，任务量不足就延长，不因日期到了就宣布成功。

[下载两周试点模板包](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [使用说明](/downloads/two-week-pilot/README.md) · [十日安排](/downloads/two-week-pilot/templates/06-schedule.md)

## 开始前：选任务与责任人

建议从[Issue 分流建议](/cases/use-cases/team-automation/issue-triage-suggestions/)或[本地链接检查](/cases/use-cases/team-automation/scheduled-link-check/)开始，先用合成输入手动运行，保留人工复核和本地输出。

安排负责人、执行者、复核者、系统管理员及安全联系人，并注明替补。可兼任，但涉及外部写入或安全事件的决定应有独立复核；暂时没有复核者时，把范围限制在合成输入和本地草稿，记录为作者自检。

前置条件：已知道如何保存日志、判断结果、停止执行；能说明允许的数据与动作。权限不明确时，先完成本地准备，不自行扩大到生产系统。

## D1–D2：建立章程并手动走通

填写[试点章程](/downloads/two-week-pilot/templates/01-charter.md)与[任务表](/downloads/two-week-pilot/templates/02-tasks.csv)：业务问题、人工基线、输入范围、允许动作、排除项、复核方式、停止条件和记录留存。

先约定任务正确性的具体条件，再运行。不要直接采用统一“80%通过即可上线”之类门槛。高风险结果逐项复核，其他任务的抽检方式与理由写进章程。

完成条件：一次手动任务有输入、输出、实际检查与负责人；团队能说清成功、失败和暂停分别是什么。下一步才进入有限样本运行。

## D3–D5：记录运行与第一次复盘

用[复核表](/downloads/two-week-pilot/templates/03-review.csv)保留每次运行、失败、中断、输入版本、配置、证据与接受/修改/拒绝理由。

按[工作流评估方法](/guide/quality/workflow-evaluation/)分别看触发、边界、格式和质量；模型等待时间与人工返工分开记录。比较人工基线时确认任务难度和输入可比，无法比较的部分保留未知。

D5 检查失败模式和抽检覆盖。遇到严重边界问题先暂停，补复现与回归样本；不删掉失败记录，也不通过改低标准掩盖问题。

完成条件：第一批结果有可回查复核，问题有责任人和处理状态。严重问题未解决就停在本阶段。

## D6–D8：有限扩展与回退演练

在已批准范围内增加样本或任务类型，一次只调整一个主要因素，不同时扩大权限、替换模型并换任务。记录配置版本，方便判断变化来自哪里。

使用[异常与回退模板](/downloads/two-week-pilot/templates/04-incident.md)，演练暂停任务、确认活动进程与队列、保存证据、恢复已知良好版本及复验。停止新运行不代表已发生的外部影响被撤销。

可先用[失败恢复练习](/guide/reference/troubleshooting/failure-recovery-lab/)在隔离目录演练。真实调度、权限撤回和消息投递若未测，记录未测；不把本地演练当作生产回退证明。

完成条件：能说明谁暂停、如何确认停止、如何保留去重状态、何时允许恢复。下一步进入独立复核与决策。

## D9–D10：决定推广、继续还是停止

由复核者检查关键结果、样本偏差和未解决问题，填写[试点决定](/downloads/two-week-pilot/templates/05-decision.md)。

| 决定 | 需要说明 |
|---|---|
| 有限推广 | 哪些任务、人员与权限被证据支持；持续抽检和回退责任 |
| 继续试点 | 缺哪些样本或恢复证据，负责人和下一次复盘日期 |
| 停止 | 如何停用调度、处理权限、保存记录和未完成事件 |

对照 D1 标准逐项说明，不用总体平均分抵消严重错误。没有独立复核、样本不足或基线不可比时，明确限制，不发布团队效率提升结论。

完成条件：有一份签明负责人、证据、范围和下一步的决定。推广也只适用于验证过的任务与条件，不等于所有成员所有工作都可以自动执行。

## 模板如何检查过

作者做了[三种桌面推演](/downloads/two-week-pilot/references/tabletop-review.md)：结果正确但越权、样本不足、停用调度后仍有未投递事件。它们用于检查模板是否覆盖判断点，不是真实团队案例或两周运行成绩。

后续修改项目规则时，可继续阅读[项目配置](/guide/customization/)与[完成定义](/guide/quality/definition-of-done/)，将试点学到的具体要求写入共享流程。

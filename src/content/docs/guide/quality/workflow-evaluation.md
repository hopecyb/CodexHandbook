---
title: 工作流评估：触发、边界、格式与质量分开看
description: 用20条设计样本和独立记录字段评估四类Skill，不把结构检查或少量成功案例当作整体成功率。
contentType: guide
audiences: [developer, creator, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: 评估记录器七项测试通过；20条样本均为未运行的设计预期，没有模型效果、自动路由或耗时结论。
  environment: Python 3.12.11 / Darwin arm64；标准库、临时校验器输入，不调用模型。
  evidence:
    - label: 记录器检查范围
      href: /downloads/workflow-evaluation/validation/record.md
assets:
  - path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
    purpose: 20条评估样本、空白记录、判分方法与记录校验器
    license: CC0-1.0
    version: 1.0.0
---

一个工作流可能选对了 Skill，却写错事实；也可能结果正确，但执行了未授权动作。把这些情况合成一个“成功率”，容易隐藏真正需要修复的问题。

[下载评估工具包](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20条样本](/downloads/workflow-evaluation/samples.json) · [空白记录](/downloads/workflow-evaluation/records-template.json)

## 分开记录五类观察

| 维度 | 看什么证据 | 不能拿什么替代 |
|---|---|---|
| 触发 | 实际调用轨迹，应触发与不应触发样本 | 输出语气相似，或显式调用成功 |
| 边界与拒绝 | 越权请求未执行，合法部分仍尽可能完成 | 把所有任务都拒绝 |
| 格式 | 必需文件、字段和类型 | 文字看起来完整 |
| 任务质量 | 来源逐项支持、正确计算、有效修复与覆盖 | JSON合法或脚本返回0 |
| 耗时与返工 | 实际墙钟时间、独立的人工返工记录 | 主观“很快”，或拿未测填0 |

前四项使用 pass/partial/fail/not-applicable/unobserved，耗时单独保留数值。未知和未运行必须保留，不先猜一个分数。已运行但无法观察的维度用 unobserved 并说明原因；not-applicable 只用于本就不适用的维度，不能掩盖未观察。

## 样本覆盖什么

审查、写作、研究、链接监控四类 Skill 各有五条：触发正例、无关任务、授权边界、输出格式和关键质量情境。共20条，均为作者设计，当前记录全部 `not-run`。

质量情境分别检查暂存错误被工作树恢复掩盖、文章丢失来源冲突、研究遗漏不可用来源、监控重复通知与恢复。输入使用[四类 Skill 完整包](/skills/examples/)；评估包不重复包含它们，运行时应记录所用版本与哈希。

## 如何进行一次评估

1. 固定模型、客户端、推理设置、工具权限、项目说明及输入包版本。无法看到的设置记为未知，不猜后台值。
2. 为每个样本开隔离任务，保留请求和工具记录。触发测试使用自然语言，不先显式 `$skill`；显式调用测试属于执行能力检查。
3. 保留成功、失败、中断和重试。中断用 `interrupted`，不能从样本集中删除。
4. 对每项判断写证据路径和理由。安全样本用合成资料，不实际发送数据；格式脚本只帮助检查字段，事实质量仍需回查原文。
5. 尽可能由另一位复核者隐藏配置标签后评分。只有作者自检时如实标明，不冒充盲评或多人一致结论。

与[三组提示词对照](/prompts/comparison-lab/)结合时，A/B 使用同一判分标准。不要因为B提示更长而预先给更高分。

## 检查记录是否完整

在包内执行，Python 3.10+ 标准库：

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

默认模板会报告20条未运行，`performance_claim` 为 null。它不会把模板统计成成功率。

记录器检查样本没有遗漏、未运行没有虚假成绩、耗时类型有效、完成记录有评分及证据文件、路径不越界。它无法判断日志是否真实、评分是否公平或语义是否正确。测试中的临时记录只是校验器 fixture，不属于模型观察。

## 如何做采用决定

按工作流、样本类型与环境分别报告分母、失败数、未知数和典型错误。安全边界失败不能被其他维度高分抵消；无依据的关键结论也不能因格式齐全而通过。

先根据任务风险约定接受条件，再运行；不要看到结果后不断降低门槛。修订工作流后重新运行受影响样本并保留旧记录，区分修复与样本泄漏。

本工具包尚无实际模型评估结果。它提供的是评估方法、样本与记录机制，不提供“哪个模型最好”或“成功率达到多少”的结论。

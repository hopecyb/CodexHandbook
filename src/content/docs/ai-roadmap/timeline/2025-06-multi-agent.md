---
title: "Multi-agent（多智能体协作）"
description: "多个 Agent 可以承担独立检索、分析或复核，并通过约定的交接格式汇总。协调、重复工作和共享状态会带来额外成本。"
contentType: "guide"
editorialStatus: "review"
verification: {"kind": "source-checked", "checkedAt": "2026-09-18", "summary": "已核对下列一手来源中的事件或项目说明；学习建议是作者判断，未将来源核对标为产品实跑。", "evidence": [{"label": "多 Agent 研究系统工程文章", "href": "https://www.anthropic.com/engineering/multi-agent-research-system"}]}
---

## 可核对的事件与范围

**日期：2025-06-13 · 类型：工程文章。** Anthropic 发表其多 Agent 研究系统的工程经验。这个日期证明文章发布，不足以证明整个行业在当天进入主流化阶段。

来源：[多 Agent 研究系统工程文章](https://www.anthropic.com/engineering/multi-agent-research-system)。核对日期为 2026-09-18；来源发表日期与本页核对日期含义不同。

## 它解决什么问题

多个 Agent 可以承担独立检索、分析或复核，并通过约定的交接格式汇总。协调、重复工作和共享状态会带来额外成本。

## 学习建议与适用边界

以下是本站的教学判断，不是行业普及率或效果测量：

有可独立执行的子任务时再考虑并行。依赖紧密、修改同一文件或无法独立验收的任务，先采用单 Agent。厂商在自有评估上的收益不能直接当作本站练习的成功率。

## 动手练习

[多 Agent 协调流程](/cases/coordinate-multiple-agents/)：先写任务拆分表，注明每个角色的输入、输出和依赖，再判断是否值得并行。此入口是流程示例，不是本站已经测得收益的多 Agent 实验。

[返回路线图与日期口径](/ai-roadmap/)

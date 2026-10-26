---
title: ChatGPT 与 Codex 模型怎么选
description: 按聊天、写作、表格、编程与研究任务选择模型和思考档位，再判断套餐与实际用量是否合适。
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: 核对官方模型、Chat 思考档位与套餐说明；场景推荐为编辑建议，没有模型胜率、速度或成本实测。
  evidence:
    - label: Work 与 Codex 模型
      href: https://learn.chatgpt.com/docs/models
    - label: Chat 模型与思考档位
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: 套餐与用量
      href: https://learn.chatgpt.com/docs/pricing
---

**做复杂任务先试 GPT‑6.1 Sol，明确的小任务试 Luna，要求严格的难题再考虑 Astra。普通 Chat 按 Instant、Thinking 或 Pro 选择。** 先确认使用入口，再看下面对应的表格。

[Work / Codex 选型](#work-codex) · [普通 Chat 选型](#chat) · [套餐与价格](/chatgpt-pricing/) · [记录实际用量](/guide/quality/usage-time-and-model-choice/)

:::note[适用范围 · 2026-10-24]
模型、档位和额度随账号、客户端、工作区与发布进度变化。本文是带日期的参考；推荐是尝试起点，不能保证你的账号已开放对应模型。Chat、Work 和 Codex 的菜单与用量规则需要分别核对。
:::

<span id="work-codex"></span>

## Work / Codex：按任务选起点

以下场景由本站编辑整理，默认从客户端支持的默认思考档位开始。先检查资料与任务范围，再判断是否需要更强模型。

| 你想完成的任务 | 建议起点 | 何时提高档位或换模型 | 跟做与核对 |
|---|---|---|---|
| 提取字段、格式转换、小范围改写 | GPT‑6 Luna | 输入明确后仍漏字段或边界，再试 Sol | [记录用量与返工](/guide/quality/usage-time-and-model-choice/) |
| 根据多份材料写文章 | GPT‑6.1 Sol | 无法处理来源冲突、反复遗漏要求时考虑 Astra | [写一篇文章](/cases/write-an-article/) |
| 分析销售数据、完成周报 | GPT‑6.1 Sol | 退款、去重、环比仍算不清时提高设置，并保留独立计算核对 | [销售周报](/cases/analyze-a-spreadsheet/) |
| 修复缺陷、跨文件修改 | GPT‑6.1 Sol | 跨文件依赖难定位或修复反复失败时考虑 Astra | [修复 Bug 并验证](/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| 多来源研究、约束严格的交付 | GPT‑6.1 Sol；难题考虑 Astra | 推理无法整合冲突证据或持续丢失约束时提高设置 | [结果验收](/guide/quality/) |

## 模型特点与取舍

| 模型 | 主要定位 | 取舍与使用边界 |
|---|---|---|
| GPT‑6 Luna | 面向明确、重复、高频任务的高效率模型 | 适合先完成小任务；复杂判断需要更仔细核对 |
| GPT‑6.1 Sol | 兼顾能力与成本的复杂工作主力 | 官方定位为以较低成本提供接近 Astra 的表现，并非所有任务效果相同 |
| GPT‑6 Astra | 面向困难、多步骤任务的最强能力选择 | 更适合结果要求高的任务；简单任务未必值得额外用量 |
| GPT‑6 Sol、GPT‑5.6 系列 | 仍可能出现在客户端的较早选项 | 已验证有效的流程可继续使用；新任务先比较当前推荐模型 |

[官方模型指南](https://learn.chatgpt.com/docs/models)将 6.1 Sol 的可选入口列为 Work 与 Codex；不要据此推断普通 Chat 有同名选项。Work/Codex 的模型说明与 Chat 的 GPT‑6 显示名称也不应混用。

<span id="chat"></span>

## 普通 Chat：按思考档位选

| 选项 | 建议用途 | 取舍 |
|---|---|---|
| Instant | 日常问答、翻译、短文改写 | 优先响应速度 |
| Thinking · Medium | 学习讲解、方案比较、一般分析 | 作为认真分析的起点 |
| Thinking · High | 数学、多条件决策、复杂代码问题 | 给复杂问题更多思考时间 |
| Extra High | 特别困难、需要反复推敲的问题 | 按需使用，取决于套餐 |
| Pro / GPT‑6 Pro | 困难任务与较长工作流程 | 由 Astra 驱动，取决于套餐及额度 |

核对时，官方 Chat 说明将 Plus 的思考选项列为 Medium、High；Extra High、Pro 属于更高套餐的选项。Free / Go 的 Think 不能等同于付费套餐的同名能力。在 Plus / Pro 的 Instant 中输入“深度思考”，不会自动提高思考档位，应使用菜单选择。[Chat 官方说明](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## 何时提高，何时降低

- 答案已满足验收条件：保留当前设置，或用同一任务试较轻设置。
- 缺资料、目标不清：先补输入与要求，提高档位不能补出不存在的证据。
- 多次漏条件、逻辑断裂：保持输入不变，逐次提高思考强度或换模型。
- 高档位仍反复失败：拆小任务，检查工具权限与验证方式。

模型与思考强度是不同选择；更高档位通常增加时间和 token 消耗。具体档位按模型和客户端核对，不能把 Chat 的选项直接套进 Codex。[模型与推理基础](/guide/foundations/models-and-reasoning/)

## 是否需要升级套餐

偶尔使用先试免费方案；经常完成写作、分析或编程任务时可优先比较 Plus；频繁触及额度、确实需要更高能力或容量时再比较 Pro。Go 是否合适，取决于你需要的功能与当地价差。

这是一种购买判断顺序，不是普遍的性价比排名。**Pro 也有模型用量限制。** 月费、额外积分、API 按量费用分别核对，不把单价倍数当成完整任务的节省倍数。

[查看套餐选择与价格来源](/chatgpt-pricing/) · [账号、套餐与访问](/guide/getting-started/account-plans-and-access/)

## 怎样知道真的划算

用同一份输入、工具范围与验收标准比较，分别记录等待、失败重试、人工复核与返工。优先选择能稳定通过验收的较轻设置，而不是只比较回复速度。

[下载与填写用量记录](/guide/quality/usage-time-and-model-choice/)；也可以复用[三组提示词对照材料](/prompts/comparison-lab/)准备任务。既有提示词实验没有记录实际模型标签，**不能作为模型排名证据**。

## 看不到推荐模型怎么办

先核对自己处于 Chat、Work 还是 Codex，再检查客户端版本、套餐、工作区权限和额度重置时间。暂不可用时，选客户端现有模型完成小范围任务，或保存成果等待恢复；选择一个模型名称不会授予访问权限。

[访问排查](/guide/getting-started/account-plans-and-access/) · [故障排查](/guide/reference/troubleshooting/)

## 来源与更新

产品事实来自页首的官方来源；任务建议为本站编辑判断，本页没有进行模型性能实测。价格记录单独维护在价格页，购买前核对实际结账信息。

- 2026-10-24：首次建立 Chat 与 Work/Codex 分开的选型指南，接入本站任务案例、用量记录与价格来源。

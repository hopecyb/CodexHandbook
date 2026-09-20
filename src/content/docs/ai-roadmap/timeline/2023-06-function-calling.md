---
title: "Function Calling（函数调用）"
description: "模型可以输出拟调用函数的名称与结构化参数，由应用校验并决定是否执行。生成参数、获得授权和实际执行是三个不同环节。"
contentType: "guide"
editorialStatus: "review"
verification: {"kind": "source-checked", "checkedAt": "2026-09-18", "summary": "已核对下列一手来源中的事件或项目说明；学习建议是作者判断，未将来源核对标为产品实跑。", "evidence": [{"label": "函数调用发布公告", "href": "https://openai.com/index/function-calling-and-other-api-updates/"}]}
---

## 可核对的事件与范围

**日期：2023-06-13 · 类型：产品发布。** OpenAI 公告为当时的 Chat Completions API 引入函数调用能力。此日期对应特定厂商的 API 发布，不是所有工具调用的起点。

来源：[函数调用发布公告](https://openai.com/index/function-calling-and-other-api-updates/)。核对日期为 2026-09-18；来源发表日期与本页核对日期含义不同。

## 它解决什么问题

模型可以输出拟调用函数的名称与结构化参数，由应用校验并决定是否执行。生成参数、获得授权和实际执行是三个不同环节。

## 学习建议与适用边界

以下是本站的教学判断，不是行业普及率或效果测量：

优先设计可校验的输入、明确的权限范围和失败返回。符合 JSON 格式不代表参数语义正确，也不代表已经允许写入外部系统。历史发布文中的模型名称和 API 示例不作为当前配置指南。

## 动手练习

[Issue 分流建议干运行](/cases/use-cases/team-automation/issue-triage-suggestions/)：检查合成 Issue 的结构化建议与输入绑定；保留人工复核队列。此练习验证数据边界，不调用历史 API 或发布标签。

[返回路线图与日期口径](/ai-roadmap/)

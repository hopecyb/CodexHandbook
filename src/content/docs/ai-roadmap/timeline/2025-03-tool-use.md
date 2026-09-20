---
title: "Tool Use（工具使用）"
description: "工具使用包含选择工具、构造参数、执行、读取结果与决定下一步。一次调用成功不等于整个任务完成；执行错误和业务检查发现问题也应区分。"
contentType: "guide"
editorialStatus: "review"
verification: {"kind": "source-checked", "checkedAt": "2026-09-18", "summary": "已核对下列一手来源中的事件或项目说明；学习建议是作者判断，未将来源核对标为产品实跑。", "evidence": [{"label": "Agent 工具发布公告", "href": "https://openai.com/index/new-tools-for-building-agents/"}]}
---

## 可核对的事件与范围

**日期：2025-03-11 · 类型：产品发布。** OpenAI 发布面向 Agent 的新工具，包括 Responses API、内置工具和 Agents SDK。该公告是一个厂商产品节点，不是模型使用工具的发明日期。

来源：[Agent 工具发布公告](https://openai.com/index/new-tools-for-building-agents/)。核对日期为 2026-09-18；来源发表日期与本页核对日期含义不同。

## 它解决什么问题

工具使用包含选择工具、构造参数、执行、读取结果与决定下一步。一次调用成功不等于整个任务完成；执行错误和业务检查发现问题也应区分。

## 学习建议与适用边界

以下是本站的教学判断，不是行业普及率或效果测量：

把可重复检查交给明确的工具，并保留退出码、输出和恢复方法。先证明手动步骤可用，再考虑调度与通知。

## 动手练习

[五种失败恢复实录](/guide/reference/troubleshooting/failure-recovery-lab/)：复现一组故障，读取 before 日志，只修改一个变量，再核对 after 结果。练习使用本地脚本，不要求调用公告中的 API。

[返回路线图与日期口径](/ai-roadmap/)

---
title: AI 应用路线图
prev: false
next:
  link: /ai-roadmap/timeline/
  label: 事件与主题索引
description: 区分论文、产品发布、工程文章和作者学习建议，并从每个主题进入实践。
verification:
  kind: source-checked
  checkedAt: "2026-11-19"
  summary: 路线图事件仍按一手来源组织；另增当前产品变化入口，避免把主题史误作产品更新日志。
  evidence:
    - label: OpenAI Changelog
      href: https://learn.chatgpt.com/docs/changelog
    - label: OpenAI What's new
      href: https://learn.chatgpt.com/docs/whats-new
---

这张地图把可核对的公开事件与学习建议分开。**日期只指表中列出的论文、公告或文章，不自动代表概念诞生、行业普及或能力成熟。** 不同技术可以同时使用，时间先后也不是必须依次升级的学习顺序。

每个主题页提供一手来源、适用边界和站内练习。来源核对不等于软件实跑；原有 URL 保留，其中的年月可能与修订后的事件日期不同，请以正文为准。

## 当前产品变化入口

本页是主题与公开事件路线图，**不是 2026 年产品更新日志**。截至 2026-11-19，当前产品还包括 GPT‑6.2 Sol/Astra、Hooks GA、受支持 App 事件触发的 Automations/Team Tasks、Record & Replay、Appshots、浏览器 annotations 与移动远程等能力。它们的套餐、地区、客户端和成熟度不同，不能只凭本路线图判断账号是否可用。

- 模型选择：[ChatGPT 与 Codex 模型怎么选](/guide/reference/model-selection/)
- 自动化：[Scheduled tasks](/skills/automations/)
- 官方动态：[Changelog](https://learn.chatgpt.com/docs/changelog) · [What’s new](https://learn.chatgpt.com/docs/whats-new)
- 新能力官方页：[Hooks](https://learn.chatgpt.com/docs/hooks) · [Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay) · [Appshots](https://learn.chatgpt.com/docs/appshots)

产品事实应按上面的带日期入口核对；下面的时间线继续只承担主题史与学习导航。

![AI 应用工程路线图：按时间倒序列出 Harness Engineering、Skills、上下文工程、多智能体协作、工具使用、MCP、函数调用、提示词工程和 RAG，日期与下表一致](/illustrations/roadmap-ai-application.webp)

## 可核对的事件

| 日期 | 类型 | 主题与具体事件 |
|---|---|---|
| 2026-02-11 | 工程文章 | [Harness Engineering（驾驭工程）](/ai-roadmap/timeline/2026-02-harness-engineering/)：Harness engineering 工程文章 |
| 2025-10-16 | 工程文章 | [Skills（技能）](/ai-roadmap/timeline/2026-04-skills/)：Agent Skills 公开介绍 |
| 2025-09-29 | 工程文章 | [Context Engineering（上下文工程）](/ai-roadmap/timeline/2025-09-context-engineering/)：上下文工程文章 |
| 2025-06-13 | 工程文章 | [Multi-agent（多智能体协作）](/ai-roadmap/timeline/2025-06-multi-agent/)：多 Agent 研究系统工程文章 |
| 2025-03-11 | 产品发布 | [Tool Use（工具使用）](/ai-roadmap/timeline/2025-03-tool-use/)：Agent 工具发布公告 |
| 2024-11-25 | 协议公开 | [MCP（模型上下文协议）](/ai-roadmap/timeline/2024-11-mcp/)：MCP 公开公告 |
| 2023-06-13 | 产品发布 | [Function Calling（函数调用）](/ai-roadmap/timeline/2023-06-function-calling/)：函数调用发布公告 |
| 2022-11-30 | 产品发布 | [Prompt Engineering（提示词工程）](/ai-roadmap/timeline/2022-11-prompt-engineering/)：ChatGPT 发布公告 |
| 2020-05-22 | 论文发表 | [RAG（检索增强生成）](/ai-roadmap/timeline/2023-11-rag/)：RAG 原论文与提交历史 |

## 项目专题

以下项目单独阅读，不用未经确认的首发日期组织先后。

- [OpenSpec（规范驱动开发）](/ai-roadmap/timeline/2026-01-openspec/)：项目官方发布页提供 v1.0.0（The OPSX Release）的版本说明。本次核对不以该版本推定项目首发日期，也不保留未经本次证据确认的 npm 首发日期。
- [OpenClaw（个人 AI 助手项目）](/ai-roadmap/timeline/2026-01-openclaw/)：本页以 OpenClaw 官方仓库为项目身份与说明来源。本次没有获得足以确认项目首次发布的证据，因此不展示首发日期。

## 按当前任务选择练习

- 第一次使用：从[新手路径](/guide/learning-paths/)开始，不必先学完时间线。
- 改善任务说明：用[提示词对照材料](/prompts/comparison-lab/)保存输出与评分；尚无本站模型效果实测结论。
- 需要资料支持：从[带来源的文章](/cases/write-an-article/)练习结论与证据对应。
- 需要稳定复用：选择[Skill 示例](/skills/examples/)，核对输入、边界与验证记录。
- 执行反复失败：用[失败恢复实录](/guide/reference/troubleshooting/failure-recovery-lab/)练习读取日志与单变量修正。

主题的学习价值由任务决定。本栏目不再用缺少统一测量依据的 rising、emerging 等标签给全行业划阶段。

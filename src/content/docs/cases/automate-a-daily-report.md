---
title: 自动化日报
description: 把重复汇总工作固化为可复用脚本或 Skill。
---

# 自动化日报

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 团队 |
| 客户端 | CLI |
| 预估耗时 | 1–2 小时（首版） |

## 1. 目标与背景

**目标：** 每日自动生成变更摘要、测试结果与待办列表。

**成功标准：** 一条命令或 Skill 可产出固定格式 Markdown；失败有明确退出码。

## 3. 推荐提示词

```text
目标：生成昨日至今的日报 Markdown。
内容：git log 摘要、CI 状态（若可读）、开放 PR 列表。
输出：reports/daily-YYYY-MM-DD.md
约束：只读 git；不要 push；提供 scripts/generate-daily.sh 便于重复运行。
```

## 4. 沉淀

- [自动化 Skill 示例](/skills/examples/automation-skill/)
- [定时任务](/skills/automations/scheduled-tasks/)
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** OpenAI Developers 当前 Codex use cases 仍包含“Automate bug triage”“Turn feedback into actions”等可重复自动化场景；本页把日报定义为“固定格式 Markdown + 明确退出码 + 可复用脚本或 Skill”，属于稳定的自动化工作流模式，而非依赖某个特定集成。  
**最近核验：** 2026-07-26

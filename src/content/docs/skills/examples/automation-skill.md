---
title: 示例：自动化 Skill
description: 把重复检查或报告生成封装为 Skill。
---

# 示例：自动化 Skill

## SKILL.md 骨架

```md
---
name: daily-report
description: 汇总昨日变更、测试结果与待办，生成日报 Markdown。在用户要日报、站会材料、进度汇总时使用。
---

## 流程
1. 读取 git log（指定时间范围）与 CI 状态摘要
2. 列出完成项、阻塞项、明日计划
3. 输出到 reports/daily-YYYY-MM-DD.md
4. 不发送邮件或消息，除非我明确要求

## scripts/
- scripts/collect-metrics.sh（可选）
```

## 相关

- [自动化日报案例](/cases/automate-a-daily-report/)
- [定时任务](/skills/automations/scheduled-tasks/)
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 本页提供的是重复汇总类 Skill 的示意骨架，仍属于当前 Codex/Skills 可承载的稳定 workflow 模式，不绑定具体自动化入口。  
**最近核验：** 2026-07-26

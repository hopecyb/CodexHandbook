---
title: templates/ 目录
description: 在 Skill 中提供输出模板与报告骨架。
---

# templates/ 目录

`templates/` 存放 Skill 执行时复用的输出格式，例如审查报告、changelog 骨架、研究对比表。

## 示例

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

`SKILL.md` 中指示：「按 templates/review-report.md 的结构输出审查结论。」

## 与 references/ 的区别

| 目录 | 侧重 |
|---|---|
| `references/` | 输入规范、规则、API |
| `templates/` | 输出格式、报告结构 |
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

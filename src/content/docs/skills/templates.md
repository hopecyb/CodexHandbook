---
title: templates/ 目录
description: 在 Skill 中提供输出模板与报告骨架。
---

`templates/` 不只是“省一点排版时间”的目录。它更实际的作用，是让 Skill 的输出更稳定，不用每次都临时发挥。

如果 `references/` 更偏“输入时参考什么”，那 `templates/` 更偏“输出时长成什么样”。需要固定结构、方便复查的结果，都适合放这里。

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

## 它在做什么

- `SKILL.md` 负责流程
- `templates/` 负责结果长相

也可以直接理解为：

- Skill 决定“怎么做”
- template 决定“最后怎么呈现”

这能减少两类常见问题：

- 每次输出结构都不一样
- 信息是有的，但别人不好读、不好比、不好复查

## 什么时候值得用 `templates/`

如果你发现某类结果每次都希望长得差不多，就适合放模板，比如：

- 审查报告
- changelog
- 研究对比表
- 发布检查清单

第一次做 Skill 时，不一定非要有 `templates/`。
但只要开始反复说“请按这个结构输出”，就值得把它单独抽出来。

## 与 references/ 的区别

| 目录 | 侧重 |
|---|---|
| `references/` | 输入规范、规则、API |
| `templates/` | 输出格式、报告结构 |

## 常见误区

### 1. template 只是让结果更好看

它不只是好看，结果也会更稳定、更容易对比，也更方便复查。

### 2. 有了 template，Skill 就不用写清输出要求

也不行。

`SKILL.md` 还是应该说明什么时候使用模板、哪些字段必须填。

### 3. 什么输出都值得做模板

也不一定。

如果某类结果几乎不重复，或者每次结构差异很大，硬做模板反而会束手束脚。

## 何时值得单独建 `templates/`

如果连续两三次都在重复说“按这个结构输出”，就值得做成 `templates/`。

`templates/` 的核心价值，是让输出结构稳定，后续也更好复用。
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 当前 Codex 运行时支持在技能中引导使用附带文件；本页讨论的是输出模板这一稳定写法，不依赖当前客户端界面或安装流程。  
**最近核验：** 2026-07-26

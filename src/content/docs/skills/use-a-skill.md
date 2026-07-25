---
title: 使用 Skill
description: 显式与隐式触发 Skill，以及写好 description 的要点。
---

# 使用 Skill

## 触发方式

1. **显式**：在支持的环境中用 `$skill-name` 调用（名称与 frontmatter `name` 一致）
2. **隐式**：模型根据 `description` 语义判断当前任务是否适用

## 示例

```text
$pr-review 请审查我当前未提交的改动
```

或自然语言：「按团队习惯审查一下 diff，重点看测试。」

## 写好 description

- 写清「何时用」和「何时不用」
- 包含用户可能说的关键词（review、发版、changelog）
- 避免空泛的「帮助用户写代码」
- 把核心触发场景写在**最前面**（Skill 列表有字符预算）

更多概念见 [Skills 概述](/skills/overview/)。
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

---
title: 示例：审查 Skill
description: 基于 pr-review 的 Skill 示例，适合团队复用或调整。
---

# 示例：审查 Skill

本示例与 [创建第一个 Skill](/skills/create-your-first-skill/) 中的 `pr-review` 对应，可按团队需要调整。

## SKILL.md

```md
---
name: pr-review
description: 审查 git diff，列出阻断问题、测试缺口与风格建议。在用户提到 review、审查、合并前检查时使用。不用于写新功能。
---

# PR 审查

## 输入
- 默认对比分支：main（若不存在则用默认分支）

## 流程
1. 列出变更文件与变更类型（功能/修复/重构/文档）
2. 对每个逻辑变更：是否缺测试、是否破坏 API
3. 检查是否含密钥、调试日志、过大无关 diff
4. 输出：🔴 阻断 / 🟡 建议 / 🟢 通过

## 禁止
- 不要 git push
- 不要修改未讨论的公共 API
```

## 试用

```text
$pr-review 请审查我当前未提交的改动
```
---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 审查 diff 并输出结构化结论仍是当前 Codex 的典型使用场景；本页提供的是示意性 `SKILL.md` 骨架，而非依赖某个易变界面。  
**最近核验：** 2026-07-26

---
title: 审查 PR
description: 合并前用 Codex 做结构化 diff 审查。
---

# 审查 PR

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 开发者 / 团队 |
| 客户端 | CLI / IDE / Cloud |
| 预估耗时 | 20–40 分钟 |

## 1. 目标与背景

**目标：** 在合并前发现范围蔓延、安全风险与测试缺口。

**成功标准：** 审查输出可追溯到具体文件/行，P0 已处理或阻断合并。

## 2. 推荐提示词

```text
对比当前分支与 main 的 diff（先不要改代码）：
1. 是否超出 issue 范围
2. 是否有明显安全风险（密钥、注入、权限）
3. 是否缺测试或文档
输出 checklist，标 P0/P1，附文件路径。
```

## 3. 团队沉淀

- 使用 [`$pr-review`](/skills/examples/review-skill/) Skill
- CI 集成见 [代码审查自动化](/guide/developer-platform/ci-cd/code-review-automation/)

## 4. 相关

- [审查模板](/prompts/templates/review/)
- [合并前审查](/cases/workflows/review-before-merge/)
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

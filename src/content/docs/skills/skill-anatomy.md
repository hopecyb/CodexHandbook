---
title: Skill 结构
description: SKILL.md、references/、templates/、scripts/ 的职责与示例。
---

# Skill 结构

## 目录结构

```text
my-skill/
├── SKILL.md          # 必需
├── scripts/          # 可选：确定性步骤
├── references/       # 可选：长参考文档
└── templates/        # 可选：输出模板
```

## SKILL.md 最小示例

```md
---
name: pr-review
description: 审查当前分支相对 main 的 diff，标出风险与测试缺口。在用户要求 review、审查 PR 或合并前检查时使用。
---

## 步骤
1. 获取相对 main 的 diff
2. 按文件分类：逻辑错误、安全、性能、测试
3. 输出分级清单：阻断 / 建议 / nit
4. 不要自动 push 或合并
```

## 各目录职责

| 目录 | 用途 |
|---|---|
| `SKILL.md` | 主流程、触发条件、禁止项 |
| `references/` | 长文档、规范、API 说明 |
| `templates/` | 输出格式、报告骨架 |
| `scripts/` | 确定性命令与检查 |

完整动手练习：[创建第一个 Skill](/skills/create-your-first-skill/)。
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

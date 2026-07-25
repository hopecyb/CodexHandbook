---
title: references/ 目录
description: 在 Skill 中组织长参考文档，实现渐进式披露。
---

# references/ 目录

当 `SKILL.md` 正文过长时，把详细规范、API 说明、检查清单移到 `references/`，在步骤中按需引用。

## 示例

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

在 `SKILL.md` 中写：

```md
审查代码风格时，读取 references/style-guide.md 并按其中规则检查。
```

## 原则

- 主流程留在 `SKILL.md`，参考资料按需加载
- 单文件聚焦一个主题，便于维护
- 避免在 references 中重复 SKILL.md 已有步骤
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

---
title: scripts/ 与测试
description: 在 Skill 中加入确定性脚本，并验证其行为。
---

# scripts/ 与测试

当某步骤必须确定性执行（跑测试、生成 diff、校验格式）时，在 `scripts/` 中提供脚本，并在 `SKILL.md` 中说明何时调用。

## 示例

```text
my-skill/
├── SKILL.md
└── scripts/
    └── run-checks.sh
```

## 测试建议

- 在练习仓库中手动运行脚本，确认退出码与输出
- 用 Skill 触发端到端流程，检查是否按预期调用脚本
- 团队场景：在 CI 或 pre-commit 中验证脚本仍可用

脚本继承当前审批策略；见 [命令规则](/guide/customization/rules/command-rules/) 与 [Skill 安全](/skills/security/)。
---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

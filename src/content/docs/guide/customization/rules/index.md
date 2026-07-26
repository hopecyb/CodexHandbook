---
title: 规则
description: allow/deny、命令规则与团队策略的说明页，先分清哪些该拦、哪些该提醒。
---

规则这一组最容易让新手误会成“给 Codex 多写一点提醒”。

更准确的理解是：规则解决的是“哪些动作默认允许，哪些要拦，哪些要统一按团队标准来”。

## 推荐顺序

1. [允许与拒绝模式](/guide/customization/rules/allow-and-deny-patterns/)
2. [命令规则](/guide/customization/rules/command-rules/)
3. [团队规则](/guide/customization/rules/team-rules/)

## 这组在帮你解决什么

- 哪些动作应该直接阻止
- 哪些限制适合写成明确规则，而不是靠口头提醒
- 团队里怎样保证大家面对同类风险时是同一套边界

规则是为了把边界说死，让系统按边界执行。

---

**状态：** verified  
**适用产品：** App / CLI / Cloud  
**核验依据：** 已按本仓库当前 rules 子章节结构与入口链接交叉复核；本页只承担“按 allow/deny、命令规则、团队规则分组导航”的作用，不单独声明具体规则实现或默认拦截行为。  
**最近核验：** 2026-07-26

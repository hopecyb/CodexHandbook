---
title: 修改模板
description: 在现有基础上做有边界的迭代。
---

# 修改模板

## 模板

```text
目标：在【现有功能/文件】上完成【具体改动】。
背景：【为什么改、影响范围】
输入：@【相关文件路径】
约束：
- 保持【API/样式/行为】不变，除非我明确允许
- 最小 diff，不做无关重构
- 每步后只跑【相关测试】
验收：
- 【行为变化描述】
- 相关测试通过
- diff 仅涉及必要文件
```

## 相关

- [迭代提示](/prompts/iterative-prompting/)
- [约束与边界](/prompts/constraints-and-boundaries/)


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

---
id: prompt.epxv-starter
title: EPXV 四阶段起步
content_type: prompt
audience: [beginner, developer, creator]
difficulty: beginner
products: [app, cli, ide, cloud]
capabilities: [planning, quality]
status: draft
last_verified: 2026-07-25
---

# 使用场景

任意中等复杂度任务，希望强制经过探索、计划、执行、验证，避免一步到位「猜修」。

# 使用前准备

- 用一句话描述任务目标与「不在范围」
- 大任务准备书面确认习惯

# 推荐版提示词

```text
任务：<一句话目标>
不在范围：<排除项>

请严格按四阶段进行，阶段之间等我确认（除非我另有说明）：

① 探索：先不要改文件。列出现状、影响范围、待确认问题。
② 计划：步骤编号、文件、每步验证方式。等我回复「按计划执行」。
③ 执行：一次一步；偏离计划先停下说明。
④ 验证：自动测试 + 人工检查清单；总结 diff。

从阶段①开始。
```

# 验收标准

- [ ] 阶段①②有可见产出且③在确认后开始
- [ ] 验证阶段有测试、diff 或产物证据
- [ ] 范围外功能未擅自添加
- [ ] 失败时有明确回退或缩小范围建议

# 常见失败方式

- 跳过探索直接改文件
- 计划未确认就执行
- 验证仅「看起来没问题」

# 相关内容

- [探索—计划—执行—验证](/cases/workflows/explore-plan-execute-verify/)
- [失败恢复](/cases/workflows/failure-recovery/)
- [定义完成](/prompts/define-done/)

---
id: prompt.source-backed-summary
title: 带来源的研究摘要
content_type: prompt
audience: [creator, developer]
difficulty: guided
products: [app, cli]
capabilities: [web-search, research]
status: draft
last_verified: 2026-07-25
---

# 使用场景

技术选型、竞品对比、政策/标准解读，需要**可追溯来源**的摘要，而非模型臆测。

# 使用前准备

- 明确对比维度与排除项
- 若涉密，禁用不受控外联 MCP

# 推荐版提示词

```text
研究主题：<主题>。
对比维度：<维度1>、<维度2>、<维度3>。

要求：
- 每个结论附来源 URL 或 @仓库内文件路径
- 官方文档优先；冲突来源并列说明
- 无法核验的标「待确认」
- 输出 markdown 表格 + 3 条开放问题
- 不要修改仓库文件
```

# 验收标准

- [ ] 表格中至少 3 个关键结论有可追溯来源
- [ ] 含「待确认」或置信度标注（若无则全可核验）
- [ ] 无捏造版本号、价格、日期
- [ ] 未将内部机密写入输出

# 常见失败方式

- 无 URL 的笼统结论
- 混用过时博客与当前官方文档
- 研究结论被当成已批准的技术决策

# 相关内容

- [带引用的研究](/cases/workflows/research-with-sources/)
- [验证来源](/guide/quality/validate-sources/)
- [案例：竞品功能对比表](/cases/use-cases/research-and-learning/competitive-feature-matrix/)

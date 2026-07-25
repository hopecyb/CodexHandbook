---
title: 审查模板
description: 结构化审查 diff 与变更风险。
---

# 审查模板

## 模板

```text
请审查当前相对【main/目标分支】的 diff，先不要改代码。
维度：
1. 是否超出【issue/规格】范围
2. 逻辑错误、边界、错误处理
3. 安全（密钥、注入、权限）
4. 测试与文档是否匹配变更
输出分级清单：🔴 阻断 / 🟡 建议 / 🟢 通过，每条附文件与行号。
```

## 相关

- [合并前审查](/cases/workflows/review-before-merge/)
- [审查 PR 案例](/cases/review-a-pr/)


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

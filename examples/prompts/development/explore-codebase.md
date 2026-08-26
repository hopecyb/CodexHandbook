---
id: prompt.explore-codebase
title: 只读探索代码库
content_type: prompt
audience: [developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, context]
status: draft
last_verified: 2026-07-25
---

# 使用场景

新接手仓库、定位功能模块或评估改动影响范围，**尚未授权写代码**。

# 使用前准备

- 用 `@` 限定目录，避免全仓盲目扫描
- 说明技术栈与你最关心的子系统

# 推荐版提示词

```text
先不要创建或修改任何文件。

目标：理解 @src/<module>/ 如何完成 <功能>。

请输出：
1. 入口文件与调用链（最多 8 个节点）
2. 关键数据结构与配置文件
3. 相关测试文件路径
4. 你不确定、需要我确认的 2 个问题

不要提出重构建议，除非我追问。
```

# 验收标准

- [ ] 无仓库文件被修改（`git status` 干净）
- [ ] 入口与测试路径可点击/可打开验证
- [ ] 不确定项已明确列出，未伪装成事实
- [ ] 输出长度适合一次阅读（建议 < 80 行）

# 常见失败方式

- 探索阶段就开始改代码
- 未引用测试，导致理解停留在「Happy path」
- 幻觉出不存在的文件路径

# 相关内容

- [探索—计划—执行—验证](/cases/workflows/explore-plan-execute-verify/)
- [项目上下文](/guide/context/project-context/)

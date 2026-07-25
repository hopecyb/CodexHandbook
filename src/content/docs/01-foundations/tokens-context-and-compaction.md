---
title: Token、上下文与压缩
description: 理解上下文窗口、占用与压缩。
---


**Token** 是模型处理文本的计量单位。**上下文窗口** 是一次能有效利用的信息上限。

当对话或文件太多，系统可能做 **压缩（compaction）**：保留摘要、丢掉细节。压缩后 Agent 可能「忘记」早期约束。

## 实践

- 关键约束写进当前消息或项目说明，不要只埋在很久以前的对话里
- 主题切换时新开线程
- 原理与操作建议见 [上下文压缩](/05-core-capabilities/context/compaction/) 与 [保持上下文聚焦](/05-core-capabilities/context/keep-context-focused/)

本页讲概念；`05` 讲怎么管。


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25


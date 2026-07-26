---
title: 上下文
description: 管理项目、文件与对话上下文。
sidebar:
  order: 16
---

上下文是模型「此刻能有效利用的信息」。管不好上下文，再好的提示词也会被噪音淹没。

放到实际使用里，它指的就是 Codex 当前真的看到了什么、能参考什么、会据此做判断什么。你知道但没提供给它的内容，不算这次任务的上下文。

## 这章为什么特别重要

很多“它怎么又理解错了”的问题，最后都不是提示词本身不够长，而是上下文没管好。

常见情况包括：

- 给了太多无关内容
- 关键文件没交给它
- 旧对话把新任务带偏了
- 冲突信息没有说清谁优先

## 这章怎么读

第一次系统看这章的话，建议顺序可以这样走：

1. 先知道上下文到底包括哪些东西
2. 再看项目、文件、对话这几层怎么分
3. 最后再看优先级、压缩、聚焦和敏感信息

## 本章导航

- [项目上下文](/guide/context/project-context/)
- [文件与目录上下文](/guide/context/file-and-folder-context/)
- [对话上下文](/guide/context/conversation-context/)
- [上下文优先级](/guide/context/context-priority/)
- [压缩](/guide/context/compaction/)
- [保持聚焦](/guide/context/keep-context-focused/)
- [敏感上下文](/guide/context/sensitive-context/)

这章反复强调的是：上下文取决于“它这次实际上真的看到了什么”。如果你觉得它应该知道，但这次没有提供给它，那就不算上下文。


---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

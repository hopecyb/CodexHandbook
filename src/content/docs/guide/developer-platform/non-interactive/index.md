---
title: 非交互模式
description: 批处理、脚本和流水线的说明页，先理解它适合什么任务，再看具体命令与输出设计。
---

很多人第一次看到“非交互模式”，会把它理解成“没有聊天界面的普通版 Codex”。

非交互模式更适合把 Codex 放进脚本、CI 或批处理里，让它按一次命令稳定完成一件事。

## 推荐顺序

1. [codex exec](/guide/developer-platform/non-interactive/codex-exec/)
2. [脚本与流水线](/guide/developer-platform/non-interactive/scripts-and-pipelines/)
3. [结构化输出](/guide/developer-platform/non-interactive/structured-output/)
4. [退出码与重试](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## 这组最适合解决什么问题

- 怎样把一次任务做成命令行步骤
- 怎样让 CI 判断成功、失败、需重试
- 怎样让输出更容易被后续脚本继续处理

它更适合让脚本和流水线稳定接住结果，不适合拿来慢慢来回聊。

---

**状态：** review  
**适用产品：** CLI / API / Cloud  
**最近核验：** 2026-07-25

---
title: 运行第一次任务
description: 用清晰提示词完成一次小改动。
---


以下示例默认 **桌面 App**；CLI/IDE 同样可用同一段提示词。

## 示例任务

在练习项目中对 Codex 说：

```text
目标：在 hello.md 末尾追加一节「今日练习」，包含三行要点列表。
约束：只修改 hello.md；不要删除已有内容；不要运行网络请求。
验收：文件末尾出现该标题与恰好三个列表项。
若信息不足请先问我，不要猜测。
```

## 执行时注意

1. 先让它给出简短计划（或你主动要求计划）
2. 审批文件写入时确认路径正确
3. 完成后进入 [检查结果](/02-getting-started/review-the-result/)

提示词原理：[提示词基础](/05-core-capabilities/prompting/prompt-basics/)。


---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25


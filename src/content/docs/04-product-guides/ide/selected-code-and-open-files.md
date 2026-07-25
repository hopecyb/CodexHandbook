---
title: 选区与打开文件
description: 用选中代码与打开文件精确限定 IDE 任务范围。
---

IDE 扩展最适合**小范围、高精度**的改动：你选中一段代码，说明意图，Codex 在邻近上下文中修改。本页讲如何用好选区与打开文件，避免改错地方。

## 这篇解决什么问题

- 选区 vs 整文件 vs @ 路径 怎么选
- 多文件重构时如何组织上下文
- 减少「改了一堆无关文件」

## 三种限定方式

| 方式 | 何时用 | 示例 |
|---|---|---|
| **选区** | 单函数、单组件、报错栈附近 | 选中 `parseUser()`，要求补空值处理 |
| **打开文件** | 需要理解文件内多处关联 | 打开 `auth.ts` + `auth.test.ts` |
| **@ 路径** | 跨目录、未打开的文件 | `@src/api/client.ts` 与后端对齐类型 |

概念深度：[文件与目录上下文](/05-core-capabilities/context/file-and-folder-context/)

## 最小可用做法

1. 选中**最小相关片段**（通常 10–80 行），在 prompt 里写清目标与 [完成定义](/05-core-capabilities/prompting/define-done/)
2. 若涉及调用方，再打开或 @ 1–2 个上游文件
3. 要求「只改与 X 相关的文件；列出将修改的文件再动手」
4. 在 IDE diff 中逐块接受，不全选接受

## 多文件任务

```text
打开：实现文件 + 测试文件 + 类型定义
选区：可选——从入口函数开始
Prompt：说明模块边界、禁止改动的目录
```

大重构优先 [桌面 App 工作树](/04-product-guides/desktop-app/worktrees/) 或 [规划模式](/05-core-capabilities/agent-work/planning/)，IDE 适合收尾与小步提交。

## 与审查配合

接受前对照 [审查 diff](/05-core-capabilities/quality/review-diffs/)：

- 是否只有约定文件变动
- 选区外是否出现意外删除
- 测试是否覆盖新分支

产品侧：[IDE 审查变更](/04-product-guides/ide/reviewing-changes/)

## 常见错误

| 错误 | 后果 |
|---|---|
| 选中整文件上千行 | 上下文浪费、改动面过大 |
| 零选区只说「优化一下」 | 模型自行扩大范围 |
| 接受全部建议未读 diff | 引入风格漂移或安全漏洞 |

## 参考来源

- [定义约束](/05-core-capabilities/prompting/define-constraints/)
- stormzhang `09-ide.md`

---

**状态：** review  
**适用产品：** IDE  
**最近核验：** 2026-07-25

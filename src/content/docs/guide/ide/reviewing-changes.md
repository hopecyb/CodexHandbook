---
title: IDE 中审查变更
description: 在源码旁核对差异，并用只读 reviewer 检查工作树。
sidebar:
  order: 70
---

IDE 适合在源码旁快速阅读摘要和聚焦 diff，但“改动出现在编辑器里”不等于已经通过验收。先检查差异，再运行测试，最后决定保留哪些内容。

## 完成一次本地审查

1. 阅读结果摘要，但不以摘要代替 diff；
2. 展开 changed lines，核对每个受影响文件；
3. 保留需要的编辑，对不符合范围的内容要求后续修改；
4. 在输入区运行 `/review`；
5. 选择与基准分支比较，或审查未提交改动；
6. 在 IDE 终端运行项目测试与静态检查；
7. 最后用 Git 工具再次确认状态。

`/review` 仅在打开的项目属于 Git 仓库时出现。它会报告按优先级排列的问题，不修改工作树。IDE 中可选择：

- **Review against a base branch**：比较当前分支与所选基准分支；
- **Review uncommitted changes**：检查当前工作树改动。

默认在当前聊天显示结果；将 `chatgpt.reviewDelivery` 设为 `detached` 可启动独立审查聊天。

## 示例：给 reviewer 明确标准

```text
审查当前未提交改动。优先找会导致错误行为、数据损坏或安全问题的缺陷。
忽略纯风格偏好。每条发现必须给出具体文件位置、触发条件和可验证的影响。
如果没有发现，请说明剩余测试缺口。
```

## 验收清单

- [ ] 改动文件与任务允许范围一致
- [ ] 没有意外删除、全文件格式化或敏感文件
- [ ] 失败路径和边界条件已覆盖
- [ ] 测试、lint、类型检查按项目要求通过
- [ ] reviewer 的高优先级发现已修复或明确接受风险
- [ ] `git diff --check` 与 `git status --short` 结果正常

需要逐行评论、暂存或按 hunk 撤销时，可转到桌面应用的[差异、评论与审查](/guide/desktop-app/diffs-comments-and-review/)；通用方法见[审查 diff](/guide/quality/review-diffs/)。

## 官方依据

- [代码审查](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)

---

**状态：** verified

**适用产品：** IDE

**最近核验：** 2026-08-26

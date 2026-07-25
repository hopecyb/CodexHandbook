---
title: IDE 中审查变更
description: 在编辑器内阅读 diff、评论与接受/拒绝 Codex 建议。
---

IDE 扩展的审查体验介于「行内补全」与「完整 PR review」之间：改动往往直接呈现在编辑器或侧边 diff 视图中。本页说明如何安全地接受结果。

## 这篇解决什么问题

- IDE 里常见的审查 UI 形态
- 接受、拒绝、部分接受的策略
- 与 Git、测试、PR 流程的衔接

## 审查流程

1. **看范围**：哪些文件变了？是否有未请求的删除或格式化风暴
2. **读逻辑**：条件分支、错误处理、边界情况
3. **查安全**：密钥、注入、权限提升、依赖投毒
4. **跑验证**：项目约定的测试 / lint（在 IDE 终端或任务脚本）
5. **决策**：接受、要求修改、或撤销后重发任务

方法论：[审查 diff](/05-core-capabilities/quality/review-diffs/)

## IDE 特有操作（概念）

| 操作 | 建议 |
|---|---|
| Inline diff / 幽灵文本 | 逐块看清再接受，避免一键全接受 |
| 接受单文件 | 先接受风险最小的文件（如测试） |
| 拒绝并重试 | 在 follow-up 里说明「只改 X，不要动 Y」 |
| 与 Git 集成 | 接受后仍用 `git diff` 复核再 commit |

桌面 App 的 [差异、评论与审查](/04-product-guides/desktop-app/diffs-comments-and-review/) 功能更完整；IDE 侧以**轻量、高频**审查为主。

## 推荐 prompt 习惯

任务开始前写入：

- 允许修改的路径 glob
- 禁止：`git push`、改 lockfile（除非明确要求）
- 完成时：列出变更摘要，**不要自动 commit**

见 [人工审批模式](/09-workflows/human-approval-patterns/)

## 常见错误

- 信任绿色测试图标但未亲自跑过
- 在大型自动格式化 diff 里藏入逻辑改动
- 接受后直接 push，未走 PR / 分支保护

## 验收清单

- [ ] `git status` 与预期文件一致
- [ ] 测试通过（本地或 CI）
- [ ] 无 `.env`、token、调试 `console.log` 残留
- [ ] 提交信息由你撰写或确认

## 参考来源

- [验证与人工复核](/01-foundations/verification-and-human-review/)
- stormzhang `09-ide.md`

---

**状态：** review  
**适用产品：** IDE  
**最近核验：** 2026-07-25

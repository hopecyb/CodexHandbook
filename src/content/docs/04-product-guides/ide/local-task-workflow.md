---
title: 本地任务工作流
description: 在 IDE 中基于打开文件与选区发起、跟进并完成本地 Codex 任务。
---

IDE 本地任务是「**打开 → 选中 → 描述 → 审查 → 测试**」的闭环，适合高频小步修改。本页是实操主线；上下文细节见 [选区与打开文件](/04-product-guides/ide/selected-code-and-open-files/)。

## 推荐流程

1. **打开工作区根目录**（整个仓库，而非单文件）
2. 打开相关文件；必要时 [选中代码片段](/04-product-guides/ide/selected-code-and-open-files/)
3. 在 Codex 面板写清：目标、约束、[完成定义](/05-core-capabilities/prompting/define-done/)
4. 若任务复杂，先 [要计划](/05-core-capabilities/prompting/ask-for-a-plan/) 再执行
5. 在 diff / inline 视图中 [审查变更](/04-product-guides/ide/reviewing-changes/)
6. 在 IDE 终端运行项目测试命令
7. 你本人 `git commit`（除非团队明确授权 Agent commit）

## 示例 prompt（示意）

```text
只修改 src/auth/login.ts 与对应测试。
目标：修复空邮箱提交时的 500，改为 400 + 错误信息。
禁止：改 package-lock、git push。
完成：跑 npm test -- auth，并列出改动摘要。
```

## 何时改用其他入口

| 情况 | 建议 |
|---|---|
| 并行多任务、工作树 | [桌面 App](/04-product-guides/desktop-app/) |
| 脚本 / CI | [CLI 非交互](/04-product-guides/cli/non-interactive-mode/) |
| 远程标准化环境、开 PR | [IDE 云端任务](/04-product-guides/ide/cloud-task-workflow/) |

## 常见错误

- 未打开工作区导致读不到 `AGENTS.md`
- 一键接受全部 inline 建议
- 未跑测试就 commit

上下文：[编辑器上下文](/04-product-guides/ide/editor-context/) · [文件与目录上下文](/05-core-capabilities/context/file-and-folder-context/)

---

**状态：** review  
**适用产品：** IDE  
**最近核验：** 2026-07-25

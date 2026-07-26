---
title: 本地任务工作流
description: 在 IDE 中基于打开文件与选区发起、跟进并完成本地 Codex 任务。
---

IDE 本地任务是「**打开 → 选中 → 描述 → 审查 → 测试**」的闭环，适合高频小步修改。这里给出一条最常见的实操路径；上下文细节见 [选区与打开文件](/guide/ide/selected-code-and-open-files/)。

## 推荐流程

1. **打开工作区根目录**（整个仓库，而非单文件）
2. 打开相关文件；必要时 [选中代码片段](/guide/ide/selected-code-and-open-files/)
3. 在 Codex 面板写清：目标、约束、[完成定义](/prompts/define-done/)
4. 若任务复杂，先 [要计划](/prompts/ask-for-a-plan/) 再执行
5. 在 diff / inline 视图中 [审查变更](/guide/ide/reviewing-changes/)
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
| 并行多任务、工作树 | [桌面 App](/guide/desktop-app/) |
| 脚本 / CI | [CLI 非交互](/guide/cli/non-interactive-mode/) |
| 远程标准化环境、开 PR | [IDE 云端任务](/guide/ide/cloud-task-workflow/) |

## 常见错误

- 未打开工作区导致读不到 `AGENTS.md`
- 一键接受全部 inline 建议
- 未跑测试就 commit

上下文：[编辑器上下文](/guide/ide/editor-context/) · [文件与目录上下文](/guide/context/file-and-folder-context/)

## 常见疑问

### 1. 为什么总强调“打开工作区根目录”？

因为 IDE 扩展很多上下文都依赖你打开的是完整项目，而不是孤零零一个文件。

### 2. 它在 IDE 里改起来很方便，是不是就可以少做审查？

不行。

越方便，越容易让人下意识点接受，所以更要保持检查习惯。

### 3. 第一次适合做什么任务？

比较适合这种：

- 只改 1 到 2 个文件
- 结果一眼能看懂
- 改完容易测试或预览

IDE 本地任务适合小步快跑，但“方便”不等于可以跳过审查和验证。

---

**状态：** verified  
**适用产品：** IDE  
**核验依据：** OpenAI 当前帮助中心仍把 IDE extension 描述为与本地代码仓库配合使用的客户端；本页工作流聚焦“打开工作区、限定文件范围、描述任务、审查 diff、运行测试、人工提交”这一稳定本地协作闭环，不依赖特定扩展界面。  
**最近核验：** 2026-07-26

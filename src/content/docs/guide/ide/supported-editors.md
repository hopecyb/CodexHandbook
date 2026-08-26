---
title: 支持的编辑器
description: 区分 VS Code 兼容扩展、Xcode 集成与 JetBrains 集成。
sidebar:
  order: 10
---

Codex 当前通过不同方式进入主流编辑器：VS Code 系使用 Codex 扩展，Xcode 与 JetBrains IDE 使用各自的集成入口。

## 当前支持方式

| 编辑器 | Codex 入口 | 打开方式 |
|---|---|---|
| Visual Studio Code | Codex 扩展 | Codex 图标或 `Codex: Open Codex Sidebar` |
| Cursor | 兼容 Codex 扩展 | Codex 图标或 Command Palette |
| Windsurf | 兼容 Codex 扩展 | Codex 图标或 Command Palette |
| Visual Studio Code Insiders | Codex 扩展 | 扩展面板与 Codex 侧栏 |
| Xcode | Xcode coding assistant 集成 | 新建聊天并选择 Codex Agent |
| JetBrains IDEs | JetBrains AI Chat 集成 | 打开 AI Chat 并选择 Codex |

安装入口和最低版本可能变化，始终从 [Codex IDE 官方页面](https://learn.chatgpt.com/docs/codex/ide) 跳转，不要依赖第三方扩展名称相似就判断为官方支持。

## IDE 入口最适合什么

- 把当前打开文件或选区直接加入问题
- 对局部代码做解释、修改与跟进
- 在源代码旁审查摘要和变更
- 小任务留在本地，任务变大后再委托到更长的工作流

示例：

```text
检查当前选区的重试循环。
先解释终止条件，再做最小修改；只改当前文件和对应测试。
完成后汇报 diff 与测试命令，不要升级依赖。
```

## 多编辑器团队如何保持一致

1. 把构建、测试和格式化命令写进仓库 `AGENTS.md` 或贡献文档。
2. 提示词约束文件范围，不依赖某个 IDE 私有按钮。
3. 最终验收看 Git diff 与同一组测试，而不是“在我的 IDE 里能运行”。
4. 只有需要精确 UI 指引时，才为不同 IDE 分写说明。

## 不在列表中的编辑器

优先使用 [Codex CLI](/guide/cli/) 或 [桌面 App](/guide/desktop-app/)。不要把 VS Code 扩展包强行安装到不兼容编辑器，也不要把第三方集成默认视为 OpenAI 官方能力。

安装步骤见 [安装 IDE 集成](/guide/getting-started/install-ide-extension/)，上下文用法见 [编辑器上下文](/guide/ide/editor-context/)。

---

**状态：** verified

**适用产品：** IDE

**核验依据：** 已对照当前官方 IDE 页面，核实 VS Code、Cursor、Windsurf、VS Code Insiders、Xcode 与 JetBrains IDEs 的具体入口，并避免假设各集成功能完全相同。

**最近核验：** 2026-08-26

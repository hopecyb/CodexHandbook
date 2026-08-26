---
title: 安装 IDE 集成
description: 在 VS Code 兼容编辑器、Xcode 或 JetBrains IDE 中启用 Codex。
sidebar:
  order: 50
---

当前 IDE 支持并不只有一种安装方式：

| IDE | 安装或启用方式 |
|---|---|
| Visual Studio Code、Cursor、Windsurf、VS Code Insiders | 安装或启用 Codex 扩展 |
| Xcode | 在 Xcode 的 coding assistant 中选择 Codex Agent |
| JetBrains IDEs | 在 AI Chat 中选择 Codex |

从 [Codex IDE 官方页面](https://learn.chatgpt.com/docs/codex/ide) 进入与你的 IDE 对应的官方入口。不要根据另一种 IDE 的截图猜测按钮位置。

## VS Code 兼容编辑器

1. 从官方 Marketplace 入口安装 Codex 扩展。
2. 打开真实项目的工作区根目录。
3. 选择 Codex 图标；看不到时打开 Command Palette，运行 `Codex: Open Codex Sidebar`。
4. 使用 ChatGPT 或 API key 登录。

## Xcode 与 JetBrains

- Xcode：打开 coding assistant，新建聊天并选择 Codex 作为 Agent。
- JetBrains：打开 AI Chat，选择 Codex。

这些入口由对应 IDE 提供，界面和 VS Code 扩展不会完全一样。

## 安装后做一次上下文检查

打开一个源文件，选择一小段代码，然后提问：

```text
只解释当前选区的输入、输出和失败路径，不修改文件。引用相关函数名。
```

如果回复明显与选区无关，先检查：

- 当前打开的是不是正确项目根目录
- 文件或选区是否已经附加到 composer
- 当前登录身份和工作区是否正确
- 编辑器是否同时启用了会冲突的 AI 扩展或快捷键

接着学习 [IDE 本地任务工作流](/guide/ide/local-task-workflow/)；完整支持范围见 [支持的编辑器](/guide/ide/supported-editors/)。

---

**状态：** verified

**适用产品：** IDE

**核验依据：** 当前官方 IDE 快速开始明确列出 VS Code、Cursor、Windsurf、VS Code Insiders，以及 Xcode 和 JetBrains 的各自集成方式；本页按这两类路径拆分安装说明。

**最近核验：** 2026-08-26

---
title: 安装与启用 IDE 集成
description: 在 VS Code 系编辑器、Xcode 与 JetBrains IDE 中正确打开 Codex。
sidebar:
  order: 20
---

IDE 入口分成两类，安装方式不能混用：

| 编辑器 | 当前入口 | 打开方式 |
|---|---|---|
| Visual Studio Code、Cursor、Windsurf、VS Code Insiders | Codex 扩展 | 选择 Codex 图标，或运行 `Codex: Open Codex Sidebar` |
| Xcode | Xcode 自带 coding assistant 集成 | 新建聊天并选择 Codex agent |
| JetBrains IDEs | JetBrains AI Chat 集成 | 打开 AI Chat 并选择 Codex |

完整支持范围与官方入口见[支持的编辑器](/guide/ide/supported-editors/)。

## VS Code 系安装与验收

1. 从官方 Marketplace 链接安装 Codex 扩展；
2. 打开一个练习项目，而不是空窗口；
3. 选择 Codex 图标；若未显示，从命令面板运行 `Codex: Open Codex Sidebar`；
4. 使用 ChatGPT 账户或 API key 完成认证；
5. 新建聊天，引用当前打开文件并提一个只读问题。

最小验收提示词：

```text
只阅读我当前打开的文件，不修改代码。
用三点说明它的职责、输入和输出；每点引用具体符号名。
```

回答能对应当前文件和符号，说明编辑器上下文已正确传入。再进行写任务前，先创建 Git 检查点。

## 常见故障

- **找不到侧栏**：从命令面板运行 `Codex: Open Codex Sidebar`。
- **上下文不对**：确认项目窗口、当前文件和选区属于预期仓库。
- **登录反复出现**：CLI 与 IDE 会共享缓存认证；检查当前账户并重新登录。
- **Windows 工具链在 WSL**：按需启用 `chatgpt.runCodexInWindowsSubsystemForLinux`，改变该设置会重载 VS Code。
- **第三方编辑器行为不同**：先核对其版本是否兼容 VS Code 扩展，不要把 Xcode/JetBrains 的入口照搬过来。

更详细的新手步骤见[安装 IDE 扩展](/guide/getting-started/install-ide-extension/)。

## 官方依据

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [IDE 设置](https://learn.chatgpt.com/docs/ide/settings)

---

**状态：** verified

**适用产品：** IDE

**最近核验：** 2026-08-26

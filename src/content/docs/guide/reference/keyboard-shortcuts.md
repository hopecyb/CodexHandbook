---
title: 键盘快捷方式
description: 只列官方现行文档可核对的 App 与 IDE 快捷操作。
sidebar:
  order: 90
---

快捷键随平台、客户端和自定义设置变化。本页只收录当前官方文档明确说明的组合；完整列表以应用内 **Keyboard Shortcuts** 为准。

## 桌面应用

| 动作 | macOS | Windows |
|---|---|---|
| 打开 Settings | `Cmd + ,` | `Ctrl + ,` |
| 打开/关闭 Activity | `Cmd + Option + U` | `Ctrl + Alt + U` |
| 打开集成终端 | `Ctrl` + 反引号键 | `Ctrl` + 反引号键 |
| 打开应用命令面板 | `Cmd + K` | 以 Keyboard Shortcuts 为准 |
| 清理终端显示 | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` 打开的是应用命令面板，不是清空终端。

Settings 中的 Keyboard Shortcuts 支持按命令名搜索、按按键反查、修改绑定和恢复默认值。自定义后，本地设置优先于网上的速查表。

## IDE

VS Code 系编辑器的设置 `chatgpt.composerEnterBehavior` 决定 Enter 与 `Cmd/Ctrl + Enter` 如何发送多行提示词。不要假设每台机器都用同一种发送键。

当 Codex 正在执行时，`chatgpt.followUpQueueMode` 决定新消息是排队还是立即 steer；单次发送可按 `Cmd/Ctrl + Shift + Enter` 反转当前默认行为。

找不到 Codex 侧栏时，从编辑器命令面板运行：

```text
Codex: Open Codex Sidebar
```

## CLI

CLI TUI 的操作应通过当前版本的 `/help` 与界面提示查看。本页不再猜测 `y`、`n` 等审批键，因为终端、模式和版本会改变交互。

通用终端信号 `Ctrl + C` 可能中断正在执行的命令或会话；先确认当前状态，不把它当成无副作用的“返回”键。

## 学习顺序

先掌握打开设置、查看 Activity、打开终端和发送多行提示词。其余按实际高频动作在应用内搜索；团队文档应写动作名称，不强制所有人采用相同自定义键位。

## 官方依据

- [桌面应用设置](https://learn.chatgpt.com/docs/app/settings)
- [通知与 Activity](https://learn.chatgpt.com/docs/notifications)
- [集成终端](https://learn.chatgpt.com/docs/integrated-terminal)
- [IDE 设置](https://learn.chatgpt.com/docs/ide/settings)

---

**状态：** verified

**适用产品：** App、CLI、IDE

**最近核验：** 2026-08-26

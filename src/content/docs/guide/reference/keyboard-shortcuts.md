---
title: 键盘快捷方式
description: App、CLI TUI 与 IDE 扩展中常见快捷键的学习向索引——以当前版本为准。
---

快捷键因**客户端与版本**差异很大。本页按**操作意图**分类，便于你知道「有没有更快的方式」；具体键位请在产品内查帮助或设置。

## 这篇解决什么问题

- 新会话、发送、审批、搜索等意图在各端的常见入口
- CLI TUI 与 IDE 的差异
- 与 [命令与快捷方式](/guide/cli/commands-and-shortcuts/) 的分工

:::caution
下表为**示意**，非完整绑定表。升级后键位可能变化。
:::

## 通用意图索引

| 意图 | 桌面 App（示意） | CLI TUI（示意） | IDE 扩展（示意） |
|---|---|---|---|
| 新建任务/会话 | `Cmd/Ctrl+N` 或侧栏 | 退出重进 / 新线程命令 | 命令面板「Codex」 |
| 发送消息 | `Enter` / `Cmd+Enter` | 同产品说明 | 面板内发送 |
| 换行不发送 | `Shift+Enter` | 依 TUI | 依面板 |
| 打开命令面板 | `Cmd/Ctrl+K` 类 | `/` 斜杠命令 | `Cmd/Ctrl+Shift+P` |
| 搜索历史 | 侧栏搜索 | 会话内搜索（若有） | 聊天历史 |
| 批准工具调用 | 面板按钮 | `y` / 方向键（依 TUI） | 通知或内联按钮 |
| 拒绝 | 面板按钮 | `n` | 内联拒绝 |

**以你安装的版本 UI 为准。**

## 斜杠命令 vs 键盘

- **斜杠命令**：`/review`、`/help` 等——见 [斜杠命令速查](/guide/reference/slash-commands/)
- **快捷键**：不输入文字直接触发 UI 动作

二者可组合：先 `Cmd+K` 聚焦输入，再 `/review`。

## CLI 终端用户建议

- 学会 **Ctrl+C** 中断失控输出（注意是否中断未保存状态）
- 终端复用器（tmux）分屏：一边 Codex 一边 `git diff`
- 将常用 `codex exec` 封装为 shell alias——见 [命令与快捷方式](/guide/cli/commands-and-shortcuts/)

## IDE 用户建议

- 绑定「用 Codex 解释选中代码」到顺手键位
- 与编辑器原生 diff、跳转定义配合，减少复制粘贴

[IDE 设置](/guide/ide/settings/) · [选中代码与打开文件](/guide/ide/selected-code-and-open-files/)

## 无障碍与自定义

多数客户端支持在设置中改键位。团队可文档化**推荐绑定**，但不要求全员一致。

## 参考来源

- 各产品 Settings / Keyboard shortcuts 官方页
- stormzhang `35-cheatsheet.md`
- KimYx0207 CX-03

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

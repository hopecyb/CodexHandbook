---
title: IDE 扩展设置
description: 区分共享 Agent 配置与 VS Code 系编辑器行为设置。
sidebar:
  order: 80
---

IDE 里有两层设置：

| 设置层 | 存放位置 | 负责什么 |
|---|---|---|
| Codex Agent 设置 | `config.toml` | 模型、推理强度、权限、沙箱、MCP、个性化；与 CLI 共享 |
| 编辑器设置 | VS Code 设置系统中的 `chatgpt.*` | 侧栏、消息排队、发送键、review 展示、语言和字体 |

仓库规则仍应写进 `AGENTS.md`，不要塞进某个人的编辑器设置。

## 打开设置

在 Codex 侧栏选择齿轮，再选择 **Codex Settings**。常用 Agent 选项可在面板修改，也可选择 **Open config.toml** 编辑当前生效的配置层。

编辑器行为设置可在编辑器 Settings 中搜索 `@ext:openai.chatgpt`、`Codex` 或具体键名。

## 值得先理解的设置

| 键 | 默认值 | 何时修改 |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | 希望扩展启动后自动聚焦侧栏 |
| `chatgpt.followUpQueueMode` | `queue` | 改为 `steer` 后，新消息会引导当前执行 |
| `chatgpt.composerEnterBehavior` | `enter` | 多行提示词经常误发送时修改 |
| `chatgpt.reviewDelivery` | `inline` | 希望 `/review` 改在独立聊天显示时用 `detached` |
| `chatgpt.localeOverride` | 自动 | 需要固定界面语言 |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | 仓库和工具链位于 WSL2 时启用 |

`chatgpt.cliExecutable` 只用于开发 Codex CLI；普通用户不应手工覆盖扩展内置可执行文件，否则部分功能可能失效。

## 配置优先级的实际理解

- 组织策略定义不可突破的上限；
- `config.toml` 决定 Agent 默认行为；
- `AGENTS.md` 提供仓库与目录规则；
- 编辑器设置只改变 IDE 体验；
- 单次提示词补充本次任务目标和边界。

如果某项“设置不生效”，先确认自己改的是哪一层，再检查是否被更高层策略约束。完整原理见[作用域与优先级](/guide/customization/agents-md/scope-and-precedence/)。

## 修改后验证

一次只改一项。例如把 `chatgpt.reviewDelivery` 改为 `detached` 后，在 Git 仓库中运行 `/review`，确认是否打开独立审查聊天。记录原值，结果不符时恢复并重载编辑器。

## 官方依据

- [Codex IDE 设置参考](https://learn.chatgpt.com/docs/ide/settings)
- [配置基础](https://learn.chatgpt.com/docs/config)

---

**状态：** verified

**适用产品：** IDE

**最近核验：** 2026-08-26

---
title: 支持的编辑器
description: Codex IDE 扩展支持哪些编辑器、如何选型与常见限制。
---

IDE 扩展把 Codex 嵌进你**已经在用的编辑器**，让你在写代码的同一界面里发起任务、看 diff、接受改动。本页说明支持范围与选型，安装步骤见 [安装 IDE 扩展](/guide/ide/installation/)。

## 本页内容

- 哪些编辑器有官方扩展
- IDE 扩展 vs 桌面 App vs CLI 怎么选
- 多编辑器团队如何统一工作流

## 选型时要看什么

这里主要讲两件事：哪些编辑器在官方支持范围内，以及已经有常用编辑器时，要不要继续留在 IDE 里用 Codex。

## 官方支持范围

**具体列表与版本要求以 [OpenAI Codex 文档](https://developers.openai.com/codex) 为准**，常见包括：

| 编辑器 | 典型用户 | 说明 |
|---|---|---|
| Visual Studio Code | 多数开发者 | 扩展市场安装，生态最成熟 |
| Cursor 等 VS Code 系 fork | 已用 AI 编辑器的用户 | 通常兼容 VS Code 扩展机制，以实测为准 |
| JetBrains 系列（若官方提供） | Java/Kotlin/IDEA 用户 | 功能与 UI 可能与 VS Code 版略有差异 |

未在官方列表中的编辑器：可用 [CLI](/guide/cli/) 或 [桌面 App](/guide/desktop-app/) 作为替代，不要依赖非官方移植扩展。

## 常见误会

### 支持某个编辑器，不代表功能和别的入口完全一样

有人会把“有扩展”理解成“那我在 IDE 里就能做所有事”。

不同入口的侧重点不一样：

- IDE 更偏贴着代码改
- App 更偏项目级任务和多任务协调
- CLI 更偏终端、脚本和远程环境

### 选编辑器，不只看你习不习惯

如果你主要做的是：

- 代码局部修改
- 看选区
- 边改边测

IDE 会比较合适。

如果平时更常做：

- 长任务
- 文档统筹
- 并行多个任务

App 或 CLI 往往更合用。

## 何时选 IDE 扩展

| 适合 | 不太适合 |
|---|---|
| 改代码时希望「当前文件/选区」自动进上下文 | 需要并行多 Agent、工作树等 App 专属能力 |
| 习惯在编辑器内看 inline diff | 主要做非代码类长任务（文档、调研） |
| 已在 IDE 里跑测试、调试 | 需要标准化 Cloud 环境从零搭仓库 |

决策入口：[选择 Codex 客户端](/guide/getting-started/choose-your-codex-client/)

## 与桌面 App 的分工

```text
IDE 扩展：编辑中 → 小步修改 → 内联审查 → 本地测试
桌面 App：项目级任务 → 并行 Agent → 工作树 → 通知与 Cloud 委托
```

两者可共用同一账号与项目配置；见 [编辑器上下文](/guide/ide/editor-context/) 与 [AGENTS.md 作用域](/guide/customization/agents-md/scope-and-precedence/)。

## 团队对齐

1. 在 README 写明**推荐编辑器 + 最低扩展版本**
2. 核心规范写在 `AGENTS.md`，不绑定某一 IDE 私有功能
3. Code review 仍以 Git diff 为准，不依赖「只有某 IDE 能看」的视图

## 怎么判断用哪个入口

拿不准时，可以按下面几个问题判断：

1. 你是不是大部分时间都在编辑器里改代码
2. 你是否很依赖当前文件、选区和内联 diff
3. 你是不是暂时不需要多 Agent、工作树或更强的任务管理

大多数答案是“是”，那就从 IDE 扩展开始。

## 常见错误

- 假设 IDE 扩展与 App 功能 1:1 对等
- 在未打开工作区根目录时发起任务，导致路径与 `AGENTS.md` 解析错误
- 混用多个 AI 扩展，上下文与快捷键冲突

很多时候选 IDE 扩展，只是因为主要工作本来就在编辑器里。

## 参考来源

- OpenAI Codex IDE 文档
- stormzhang `09-ide.md`
- KimYx0207 CX-08 IDE

---

**状态：** review  
**适用产品：** IDE  
**最近核验：** 2026-07-25

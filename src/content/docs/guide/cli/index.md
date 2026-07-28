---
title: CLI
description: 命令行入口的最小可用说明。
sidebar:
  order: 11
---

CLI 适合终端用户与脚本、CI 集成。

第一次看到 “CLI”，可以把它理解成不用图形界面、直接在终端里和 Codex 协作的入口。

它更偏向这些场景：

- 习惯命令行的人
- 想和脚本结合的人
- 需要接 CI/自动化的人

对完全不熟终端的新手来说，CLI 不是非学不可的第一站；但如果你已经会基本 `cd`、`ls`、在项目目录里执行命令，它会很高效。

- [安装与更新](/guide/cli/installation-and-updates/)
- [交互模式](/guide/cli/interactive-mode/)
- [非交互模式](/guide/cli/non-interactive-mode/)
- [CLI 配置](/guide/cli/configuration/)
- [命令与快捷方式](/guide/cli/commands-and-shortcuts/)
- [审批与沙盒](/guide/cli/approvals-and-sandbox/)
- [排障](/guide/cli/troubleshooting/)

完整命令参考见 [CLI 命令参考](/guide/reference/commands/)。

## 第一次使用先分清什么

第一阶段先分清这两种模式：

1. **交互模式**：像在终端里直接和 Codex 对话
2. **非交互模式**：把 Codex 当成命令接入脚本或 CI

如果只是第一次试用，通常先用交互模式更顺手。等需要自动化时，再看非交互模式。

---

**状态：** verified  
**适用产品：** CLI  
**核验依据：** OpenAI Help Center 当前 CLI 入门资料仍将 Codex CLI 描述为终端入口，并区分交互使用与更自动化的命令行工作流；本页只作为 CLI 章节导航，概述交互与非交互两类使用方式，不绑定具体参数或安装命令。  
**最近核验：** 2026-07-26

---
title: 斜杠命令与快捷入口
description: / 命令与 $ Skill 调用——学习向速查，非完整参数手册。
---


斜杠命令（`/command`）是你在对话中**主动触发**的快捷工作流；与 [Skill](/07-extensions-automation/skills/skills-overview/) 的 `$name` 调用相关但不同。具体列表**随产品与版本变化**，使用前请以客户端内 `/` 补全与官方文档为准。

## 概念区分

| 入口 | 谁发起 | 典型用途 |
|---|---|---|
| `/review` 等斜杠命令 | 你输入 `/` | 内置或配置的固定流程 |
| `$skill-name` | 你或模型 | 项目或用户 Skill |
| 自然语言 | 你 | 通用任务 |

## 常见类别（示意）

以下名称在不同版本可能增减，**仅作学习分类**：

### 会话与模式

- 切换计划模式、压缩上下文、查看帮助
- 与 [规划](/05-core-capabilities/agent-work/planning/) 配合

### 审查与质量

- 对当前 diff 或 PR 做审查
- 结合 [审查 diff](/05-core-capabilities/quality/review-diffs/)

### 工作区与 Git

- 查看状态、生成提交说明（仍需你确认是否提交）
- 遵守 [人工审批模式](/09-workflows/human-approval-patterns/)

### 扩展

- 安装或列出 Skill（若环境提供 `skill-installer` 等）

## 使用建议

1. **先 `/` 看一眼** 当前环境支持什么，不要背过时列表
2. 团队固定流程优先做成 **Skill + 文档**，减少「只有老手知道命令名」
3. 斜杠命令触发的写操作，仍受沙盒与审批约束

## 与 CLI 命令的区别

| | 聊天内 `/` | 终端 `codex …` |
|---|---|---|
| 上下文 | 当前会话与 @ 文件 | `--cwd` 指定目录 |
| 适合 | 交互探索 | 脚本、CI |

CLI 子命令见 [CLI 交互模式](/04-product-guides/cli/interactive-mode/) 与 [非交互模式](/04-product-guides/cli/non-interactive-mode/)。完整参数表见 [CLI 命令参考](/12-reference/commands/)。

## 参考来源

- stormzhang `12-slash-commands.md`、`35-cheatsheet.md`
- KimYx0207 CX-03 Commands
- 客户端内 `/help` 或官方 slash commands 文档

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

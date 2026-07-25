---
title: CLI 命令参考
description: Codex CLI 常用子命令与参数速查——学习向索引，非替代官方手册。
---

本页汇总 **Codex CLI** 常用入口，便于搜索与对照。**命令名、参数与默认值随版本变化**，执行前务必运行 `codex --help` 及子命令 `--help`，并以 [OpenAI Codex 文档](https://developers.openai.com/codex) 为准。

## 这篇解决什么问题

- 交互 vs 非交互入口在哪
- 脚本化时常用 flag 概念
- 各命令对应哪篇产品手册

## 命令总览（示意）

| 入口 | 用途 | 详解 |
|---|---|---|
| `codex` | 交互式 TUI 会话 | [交互模式](/04-product-guides/cli/interactive-mode/) |
| `codex exec`（或等价） | 非交互单次/管道任务 | [非交互模式](/04-product-guides/cli/non-interactive-mode/) |
| 配置相关 | 读写用户/项目配置 | [CLI 配置](/04-product-guides/cli/configuration/) |

:::caution[版本敏感]
下表参数名为社区文档常见写法，**不保证与你安装的 CLI 一致**。升级后重新核对 `--help`。
:::

## 交互模式（概念）

```bash
# 在仓库根启动交互会话（示意）
codex

# 常见会话内操作（以 TUI 为准）
# - 输入任务描述
# - / 斜杠命令 → 见 slash-commands 页
# - 审批 shell / 写文件请求
```

斜杠命令：[斜杠命令速查](/12-reference/slash-commands/)

## 非交互 exec（概念）

```bash
# 指定工作目录与单次 prompt（示意）
codex exec --cwd /path/to/repo "你的完整任务说明"

# 常见意图（参数名以官方为准）
# --cwd          工作目录
# --model        固定模型
# --sandbox      沙盒策略
# --approval     审批策略（无人值守时尤其重要）
# stdin 管道     从文件或上游命令读 prompt
```

安全：[人工审批模式](/09-workflows/human-approval-patterns/)

## 配置与认证（概念）

| 操作 | 说明 |
|---|---|
| 登录 | 与 [登录与认证](/02-getting-started/sign-in-and-authentication/) 一致 |
| 配置文件 | 用户级 / 项目级，见 [配置参考](/12-reference/configuration-reference/) |
| MCP | [连接 MCP](/07-extensions-automation/mcp/connect-an-mcp-server/) |

## 退出码与自动化

非交互模式通常用**退出码**表示成功/失败，供 CI 使用：

- `0`：任务按约定完成
- 非 `0`：失败或需人工介入——查日志 artifact

不要在 CI 中忽略 stderr；保留日志便于 [诊断优先](/09-workflows/diagnose-before-fixing/)。

## 与聊天斜杠命令的区别

| | `codex` 终端 | 会话内 `/` |
|---|---|---|
| 文档 | 本页 + 产品手册 | [slash-commands](/12-reference/slash-commands/) |
| 适合 | 脚本、CI | 交互探索 |

## 排障

| 现象 | 指向 |
|---|---|
| 命令不存在 | [安装 CLI](/02-getting-started/install-cli/) |
| 配置不生效 | [CLI 配置](/04-product-guides/cli/configuration/) |
| 审批卡住 CI | 收紧 prompt + 只读沙盒 |

[CLI 排障](/04-product-guides/cli/troubleshooting/)

## 参考来源

- OpenAI Codex CLI reference
- stormzhang `08-cli.md`、`28-noninteractive.md`、`35-cheatsheet.md`
- KimYx0207 CX-12

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25

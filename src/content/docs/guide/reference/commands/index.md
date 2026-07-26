---
title: CLI 命令参考
description: Codex CLI 常用子命令与参数速查——学习向索引，非替代官方手册。
---

命令参考页主要用来判断入口，不用一上来就背参数：

> **我现在该用交互入口，还是用单次命令入口？**

本页汇总 **Codex CLI** 常用入口，方便搜索与对照。**命令名、参数与默认值随版本变化**，执行前务必运行 `codex --help` 及子命令 `--help`，并以 [OpenAI Codex 文档](https://developers.openai.com/codex) 为准。

## 什么时候用

命令参考页常见用途有这些：

- 我现在应该直接进交互，还是跑一次性命令
- 这个任务偏聊天式操作，还是脚本式执行
- 我知道大概要用 CLI，但不知道该看哪种入口

## 入口选择

- 边看边聊边修：用 `codex`
- 一次交任务、跑完就拿结果：看 `codex exec`

对刚开始用 CLI 的人来说，这一步基本已经能解决大部分入口选择问题。

## 命令总览（示意）

| 入口 | 用途 | 详解 |
|---|---|---|
| `codex` | 交互式 TUI 会话 | [交互模式](/guide/cli/interactive-mode/) |
| `codex exec`（或等价） | 非交互单次/管道任务 | [非交互模式](/guide/cli/non-interactive-mode/) |
| 配置相关 | 读写用户/项目配置 | [CLI 配置](/guide/cli/configuration/) |

:::caution[版本敏感]
下表参数名为社区文档常见写法，**不保证与你安装的 CLI 一致**。升级后重新核对 `--help`。
:::

## 常见误会

### 1. 参考页里的命令不用全记住

更实际的是先知道“哪一类入口适合当前任务”，剩下的再去现场查 `--help`。

### 2. `codex exec` 不只是 `codex` 的高级版本

它更偏向无人值守、脚本、CI，不是单纯“更强”的交互入口。

### 3. 看到参数，不代表马上就要调它

很多参数和当前版本、当前环境、当前安全策略都有关系，先理解意图，再决定要不要动。

### 4. 命令参考页不等于操作教程

它是：

- 一个入口地图
- 一个参数索引
- 一个“先去看哪页更详细”的中转站

## 交互模式（概念）

```bash
# 在仓库根启动交互会话（示意）
codex

# 常见会话内操作（以 TUI 为准）
# - 输入任务描述
# - / 斜杠命令 → 见 slash-commands 页
# - 审批 shell / 写文件请求
```

斜杠命令：[斜杠命令速查](/guide/reference/slash-commands/)

## 入口判断

刚开始用 CLI 时，可以按这个顺序看：

1. 先跑 `codex --help`
2. 再决定是进入交互还是看 `exec`
3. 真要用某个子命令时，再看它自己的 `--help`

这样不容易一开始就陷在整张参数表里。

## 快速上手

现在就要上手的话，可以这样：

1. 先跑 `codex --help`
2. 要边聊边做，就直接进 `codex`
3. 要给 CI 或脚本用，再去研究 `codex exec`

这样比一开始就钻参数细节轻松一些。

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

安全：[人工审批模式](/cases/workflows/human-approval-patterns/)

## 配置与认证（概念）

| 操作 | 说明 |
|---|---|
| 登录 | 与 [登录与认证](/guide/getting-started/sign-in-and-authentication/) 一致 |
| 配置文件 | 用户级 / 项目级，见 [配置参考](/guide/reference/configuration-reference/) |
| MCP | [连接 MCP](/skills/mcp/connect-an-mcp-server/) |

## 退出码与自动化

非交互模式一般用**退出码**表示成功/失败，供 CI 使用：

- `0`：任务按约定完成
- 非 `0`：失败或需人工介入——查日志 artifact

CLI 命令页主要用于分辨入口和查意图，不用靠死记参数上手。

不要在 CI 中忽略 stderr；保留日志便于 [诊断优先](/cases/workflows/diagnose-before-fixing/)。

## 与聊天斜杠命令的区别

| | `codex` 终端 | 会话内 `/` |
|---|---|---|
| 文档 | 本页 + 产品手册 | [slash-commands](/guide/reference/slash-commands/) |
| 适合 | 脚本、CI | 交互探索 |

## 排障

| 现象 | 指向 |
|---|---|
| 命令不存在 | [安装 CLI](/guide/getting-started/install-cli/) |
| 配置不生效 | [CLI 配置](/guide/cli/configuration/) |
| 审批卡住 CI | 收紧 prompt + 只读沙盒 |

[CLI 排障](/guide/cli/troubleshooting/)

---

**状态：** outdated  
**适用产品：** CLI  
**复核说明：** 本页虽然已经尽量写成“入口地图”，但核心仍围绕 `codex`、`codex exec`、会话内 `/` 命令与相关参数意图展开；这些都属于当前 CLI 的高波动产品细节，需待补充最新版官方命令文档后再恢复 `verified`。  
**最近核验：** 2026-07-26

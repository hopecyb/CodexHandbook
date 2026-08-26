---
title: 安装 CLI
description: 安装 Codex CLI，检查版本、登录状态和第一个仓库任务。
sidebar:
  order: 40
---

Codex CLI 适合把探索、修改、测试和审查留在终端里。官方安装页同时提供 macOS/Linux、Windows、npm 和 Homebrew 选项；请选择与你的系统和软件管理方式一致的一种。

## macOS / Linux 官方独立安装器

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

更新 CLI 时再次运行同一官方安装命令。Windows、npm 或 Homebrew 用户应从 [Codex CLI 官方页面](https://learn.chatgpt.com/docs/codex/cli) 切换对应安装标签，不要把 macOS/Linux 命令直接套到所有系统。

## 安装后检查

新开一个终端窗口，在练习仓库中运行：

```bash
codex --version
codex login status
```

如果还没有登录：

```bash
codex login
```

完成浏览器授权后，在仓库目录启动交互会话：

```bash
codex
```

第一条任务可以保持只读：

```text
先不要改文件。说明这个项目如何安装、测试和构建，并给出你读取的文件路径。
```

## 出错时按顺序排查

1. `codex --version` 找不到命令：重新打开终端，检查当前 shell 的 `PATH`。
2. 命令可执行但不能使用：运行 `codex login status`，区分安装问题和认证问题。
3. 登录身份不对：运行 `codex logout` 后重新登录。
4. 公司环境被拒绝：检查工作区、登录方式或托管配置，不要直接换私人凭据绕过策略。

不要在 shell 历史、工单或聊天中粘贴 API key。需要 API key 登录时，按 [登录与身份验证](/guide/getting-started/sign-in-and-authentication/) 使用标准输入方式。

继续学习 [CLI 交互模式](/guide/cli/interactive-mode/)；其他问题见 [CLI 排障](/guide/cli/troubleshooting/)。

---

**状态：** verified

**适用产品：** CLI

**核验依据：** 已对照当前 Codex CLI 快速开始与认证文档，核实官方 macOS/Linux 安装器、`codex` 启动流程、ChatGPT 登录及登录状态命令；其他安装方式引导读者使用官方实时标签。

**最近核验：** 2026-08-26

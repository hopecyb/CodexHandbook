---
title: 权限矩阵
description: 区分本地 Permission Profile、旧沙箱与 Cloud 网络策略。
sidebar:
  order: 70
---

不要用一张“App/CLI/IDE/Cloud 都会不会弹窗”的固定表猜权限。实际行为由执行位置、有效配置、组织 requirements、操作系统和任务动作共同决定。

![沙箱拦截、人工审批与执行结果之间的决策流程](/diagrams/sandbox-approval-flow-zh-cn.svg)

## 先分清三套机制

| 机制 | 作用域 | 核心控制 |
|---|---|---|
| 本地 Permission Profiles（Beta） | macOS、Linux、WSL、原生 Windows 的本地命令 | 文件系统 read/write/deny、网络目的地 |
| 旧 sandbox settings | 本地 Codex | `read-only`、`workspace-write`、`danger-full-access` 与审批策略 |
| Cloud environment policy | Codex Cloud | 隔离容器、setup 联网、Agent 网络 allowlist/HTTP 方法 |

Permission Profiles 不与旧 `sandbox_mode` 组合。只要加载配置中存在 `sandbox_mode`、命令行传了 `--sandbox`，或配置 Profile 设置了 sandbox，Codex 就使用旧沙箱设置而不是 `default_permissions`。

## 本地内置 Permission Profiles

| 名称 | 边界 | 适合 |
|---|---|---|
| `:read-only` | 本地命令只读 | 代码理解、审查、首次接触仓库 |
| `:workspace` | 可写当前 workspace roots 与系统临时目录 | 常规开发任务 |
| `:danger-full-access` | 移除本地沙箱限制 | 仅在外部已隔离且明确需要时 |

自定义 profile 可为路径设 `read`、`write`、`deny`，并用更具体规则从宽范围中排除 `.env` 等敏感文件。相同路径冲突时，`deny` 优先于 `write`，`write` 优先于 `read`。

## 最小权限示例

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` 只允许命令联网；还必须启用 `features.network_proxy`，域名规则才会通过代理强制执行。

## 按动作评估

| 动作 | 主要风险 | 最小边界 |
|---|---|---|
| 读取源码 | 敏感文件被纳入上下文 | workspace read，显式 deny credentials |
| 修改文件 | 超范围覆盖或删除 | 只写目标 workspace，先看 diff |
| 运行测试 | 脚本副作用 | 审查脚本，使用受控环境 |
| 安装依赖 | 供应链与联网 | 固定版本、限制域名 |
| Git push / PR | 外部状态变化 | 独立分支、分支保护、人审 |
| MCP/插件工具 | 第三方数据与写操作 | 最小 scope、逐项审批与日志 |

`AGENTS.md` 能说明“不要 push”，但它不是技术强制边界。需要把规则与 sandbox/permissions、GitHub 权限和人工审查组合使用。

## 团队核对方法

1. 记录客户端与 Codex 版本；
2. 列出所有加载配置层；
3. 确认使用 Permission Profile 还是旧 sandbox；
4. 用无敏感数据的测试目录分别验证 read、write、deny 和网络；
5. 再接入真实仓库，并保留 Git 与组织侧门禁。

Permission Profiles 仍处于 Beta，升级后应重新运行这套验证。

## 官方依据

- [Permissions（Beta）](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Agent approvals and security](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Cloud internet access](https://learn.chatgpt.com/docs/cloud/internet-access)

---

**状态：** verified

**适用产品：** App、CLI、IDE、Cloud

**最近核验：** 2026-08-26

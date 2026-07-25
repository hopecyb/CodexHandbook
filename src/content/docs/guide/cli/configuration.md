---
title: CLI 配置
description: 模型、沙盒、审批与 MCP——在终端里统一 Codex 行为。
---


CLI 配置决定**默认模型、工作目录、审批严格度、MCP 服务器**等。与 [配置基础](/guide/customization/configuration/config-basics/) 概念一致，本页侧重终端用户常改项。

## 配置放在哪

| 层级 | 用途 |
|---|---|
| 用户级 | 个人默认，跨项目 |
| 项目级 | 团队共享策略（提交前需审查） |
| 环境变量 | CI 注入密钥与开关 |

**路径与文件名**随 CLI 版本变化，请以 [官方文档](https://developers.openai.com/codex) 为准。常见为用户目录下的 `config.toml` 或等价文件。

## 常改项说明

### 默认模型与推理强度

影响速度、成本与复杂任务成功率。脚本化场景建议**固定模型**便于对比日志。

### 沙盒与网络

| 设置意图 | 说明 |
|---|---|
| 严格 | 适合不可信仓库 |
| 标准 | 日常开发 |
| 放宽 | 仅个人受信环境，且符合公司政策 |

概念：[沙盒与网络](/guide/foundations/sandbox-and-network/)

### 审批策略

CLI 可能在执行 shell、写盘、联网前询问。团队应在 `AGENTS.md` 写明哪些命令可预期自动通过——与产品实际行为一致时才有效。

### MCP 服务器列表

与 [连接 MCP 服务器](/skills/mcp/connect-an-mcp-server/) 共用配置；变更后重启会话。

## 项目与 CLI 对齐

避免「App 里能跑、CI 里失败」：

1. 在 README 注明推荐 CLI 最低版本
2. 项目级配置只放**团队共识**项
3. 密钥永不进仓库

## 排障

| 现象 | 检查 |
|---|---|
| 配置不生效 | 是否改错层级；是否需重启 |
| MCP 未加载 | JSON/TOML 语法、路径 |
| 审批过于频繁 | 沙盒模式与 allowlist |

更多：[CLI 排障](/guide/cli/troubleshooting/)

## 参考来源

- OpenAI Codex CLI configuration
- stormzhang `18-config.md`

---

**状态：** review  
**适用产品：** CLI  
**最近核验：** 2026-07-25

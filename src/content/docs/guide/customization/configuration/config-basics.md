---
title: 配置基础
description: Codex 配置文件位置、常用项与审批/沙盒/模型设置入门。
---


配置文件让你在本机或项目中**统一 Codex 行为**，而不必每个会话重复设置模型、审批级别或沙盒策略。

## 这篇解决什么问题

- 配置放在哪、项目级与用户级如何叠加
- 哪些项最常改：模型、审批、沙盒、默认工作目录
- 与 `AGENTS.md` 的边界：配置管「能力开关」，AGENTS 管「项目怎么写代码」

## 配置层级

| 层级 | 典型位置 | 内容 |
|---|---|---|
| 用户级 | `~/.codex/` 下配置（具体文件名以官方文档为准） | 默认模型、个人审批习惯 |
| 项目级 | 仓库内配置片段或 `codex` 相关项目文件 | 团队共享的沙盒/工具策略 |
| 托管 | 组织下发 | 不可被个人覆盖的强制项 |

**易变事实**（路径、字段名、TOML 键）请以 [OpenAI Codex 文档](https://developers.openai.com/codex) 为准；本页描述概念与决策方式。

## 常改的配置意图

### 模型与推理

- 日常开发：平衡速度与质量
- 复杂重构：更强推理模型（若套餐支持）
- 脚本/CI：固定模型便于复现

概念背景：[模型与推理](/guide/foundations/models-and-reasoning/)

### 审批与沙盒

| 意图 | 配置方向 |
|---|---|
| 初学者/不信任仓库 | 更严格审批，限制网络与写盘范围 |
| 受信个人项目 | 可在安全前提下减少打断 |
| 企业仓库 | 遵循托管策略，不自行放宽 |

概念背景：[权限与审批](/guide/foundations/permissions-and-approvals/)、[沙盒与网络](/guide/foundations/sandbox-and-network/)

### CLI 与 App 一致性

同一账号在 CLI 与桌面 App 应追求**相同安全基线**，避免「CLI 全权限、App 严格」的双标习惯。

## 最小可用做法

1. 阅读官方「Configuration」章节，确认当前版本的文件路径
2. 只改一项：例如默认沙盒模式，观察一周再调
3. 把团队共享项写入仓库文档，个人偏好留本机
4. 在 `AGENTS.md` 中写「推荐如何与本项目一起使用 Codex」，而不是复制整份配置

## 与 CLI 专题的关系

- 交互式用法：[CLI 交互模式](/guide/cli/interactive-mode/)
- 非交互与脚本：[非交互模式](/guide/cli/non-interactive-mode/)
- 配置细节扩展：[CLI 配置](/guide/cli/configuration/) · [配置项参考](/guide/reference/configuration-reference/)

## 常见错误

- 为了省事关闭所有审批，却在生产数据目录打开项目
- 把 API 密钥写进配置文件并提交 Git
- 文档写的配置键与安装版本不匹配（升级 CLI 后未复核）

## 安全边界

配置文件可能包含**路径白名单、网络策略、MCP 服务器列表**——变更前想象「恶意 prompt 能否利用这条配置」。企业环境应由管理员下发，个人不要绕过托管策略。

## 参考来源

- OpenAI Codex 配置文档
- stormzhang/ai-coding-guide：`codex/18-config.md`
- KimYx0207 CX-04 项目指令权限配置（事实需官方复核）

---

**状态：** review  
**适用产品：** CLI / App  
**最近核验：** 2026-07-25

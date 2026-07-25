---
title: IDE 扩展设置
description: 模型、审批、上下文与扩展行为在 IDE 中的配置入口。
---

IDE 扩展设置连接**个人偏好**与**项目规则**：模型选哪档、审批多严、是否自动附带打开文件等。与全局 [配置基础](/06-customization/configuration/config-basics/) 一致，本页侧重编辑器内的常见选项。

## 这篇解决什么问题

- IDE 设置 vs 用户配置 vs `AGENTS.md` 的分工
- 开发者最常调整的项
- 团队如何对齐默认值

## 配置层级（复习）

| 层级 | 示例 | 优先级 |
|---|---|---|
| 组织托管策略 | 禁止放宽沙盒 | 最高 |
| 项目 `AGENTS.md` / 项目配置 | 测试命令、目录约定 | 高 |
| IDE 扩展设置 UI | 默认模型、面板布局 | 中 |
| 单次任务 prompt | 「本次不要联网」 | 任务级 |

见 [作用域与优先级](/06-customization/agents-md/scope-and-precedence/)

## 常改设置（概念）

### 模型与推理

影响响应速度与复杂任务质量。团队项目建议在 README 注明「推荐模型档位」，避免每人默认不一致导致难以复现问题。

### 审批与沙盒

与 [权限与审批](/01-foundations/permissions-and-approvals/) 对应：

- 初学者：保持默认或更严格
- 受信仓库：谨慎放宽，且不与生产 secrets 目录混用

CLI 与 IDE 应使用**同一安全基线**；CLI 详见 [CLI 配置](/04-product-guides/cli/configuration/)。

### 上下文行为

部分扩展可配置：

- 是否自动包含当前文件 / 选区
- 是否读取 `AGENTS.md`
- 上下文窗口相关选项（以版本为准）

过多自动上下文会增加噪音；见 [保持上下文聚焦](/05-core-capabilities/context/keep-context-focused/)。

### 登录与账号

与 [登录与认证](/02-getting-started/sign-in-and-authentication/) 共用；换账号后重启扩展会话。

## 团队对齐建议

1. 把**必须一致**的项写进仓库（`AGENTS.md` + 可选项目配置）
2. 把**个人习惯**留在 IDE 设置，不写进 Git
3. 新成员 onboarding：对照 [IDE 安装](/04-product-guides/ide/installation/) 检查扩展版本

## 排障

| 现象 | 检查 |
|---|---|
| 设置不生效 | 是否被组织策略覆盖；是否需重载窗口 |
| 与 CLI 行为不一致 | 对比 [配置参考](/12-reference/configuration-reference/) |
| 扩展无响应 | [IDE 排障](/04-product-guides/ide/troubleshooting/) |

## 参考来源

- OpenAI Codex IDE settings
- stormzhang `18-config.md`、`09-ide.md`

---

**状态：** review  
**适用产品：** IDE  
**最近核验：** 2026-07-25

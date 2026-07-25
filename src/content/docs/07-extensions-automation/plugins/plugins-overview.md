---
title: Plugins 概述
description: 打包 Skills、MCP 与应用连接器——团队级扩展分发。
---


**Plugin（插件/连接器）** 把 Skill、MCP 服务器、应用集成等打包成**可安装、可更新、可治理**的单元，适合「一个人写好，全团队启用」。

## 先理解一个核心概念

| 单独使用 | 通过 Plugin |
|---|---|
| 手动复制 Skill 目录 | 一键安装/升级 |
| 各自配置 MCP JSON | 预置服务器与权限说明 |
| 文档散落 | 发布者提供清单与版本说明 |

Plugin 不是新能力类型，而是**分发与组合层**。能力仍落在 Skill、MCP、连接器上——见 [扩展能力地图](/07-extensions-automation/capability-map/)。

## 典型组成

```text
Plugin 包
├── Skills（可选）
├── MCP 服务器定义（可选）
├── 应用连接器 / OAuth 流程（可选）
└── 元数据：版本、权限声明、更新日志
```

## 何时用 Plugin

| 用 Plugin | 不用 Plugin |
|---|---|
| 团队统一安装 Figma/Linear/GitHub 增强包 | 个人一次性小脚本 |
| 需要版本管理与回滚 | 仅一个 `SKILL.md` 就够 |
| 企业只允许白名单扩展 | 实验阶段原型 |

## 安装与管理（概念）

1. 从**官方市场或团队批准列表**选择 Plugin
2. 阅读权限说明：读哪些仓库、访问哪些 SaaS
3. 安装后重启会话，验证工具与 Skill 列表
4. 定期更新；重大版本在 staging 仓库先试

具体按钮与命令以桌面 App / CLI 当前 UI 为准。

## 安全与隐私

- 只安装可信来源；审查 Plugin 请求的 OAuth scope
- 区分「读设计稿」与「代发消息」类权限
- 离职与转岗时回收连接器授权
- 与 [权限与审批](/01-foundations/permissions-and-approvals/) 叠加，不假设 Plugin 自带安全

## 与 Claude Code / 其他生态对比

不同产品的「Plugin」含义不完全相同。对比时看：**打包了什么、权限模型、是否开源可审计**——见 [功能对照](/12-reference/feature-comparison/) 与 KimYx0207 CX-14（事实需复核）。

## 常见错误

- 为每个小 Skill 都做一个 Plugin，维护成本爆炸
- 安装后从不更新，错过安全修复
- 生产仓库启用实验性 Plugin

## 参考来源

- OpenAI Codex Plugins 文档
- KimYx0207 CX-07；stormzhang `23-plugins.md`

---

**状态：** review  
**适用产品：** App / CLI  
**最近核验：** 2026-07-25

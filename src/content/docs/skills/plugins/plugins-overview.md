---
title: Plugins 概述
description: 打包 Skills、MCP 与应用连接器，方便团队统一分发和管理。
---


Plugin 可以看成一个安装包：它把一组已经配好的扩展能力打包给别人直接装。

**Plugin（插件/连接器）** 会把 Skill、MCP 服务器、应用集成等内容打包成**可安装、可更新、可治理**的单元，特别适合“一个人配置好，全团队复用”。

## 核心区别

| 单独使用 | 通过 Plugin |
|---|---|
| 手动复制 Skill 目录 | 一键安装/升级 |
| 各自配置 MCP JSON | 预置服务器与权限说明 |
| 文档散落 | 发布者提供清单与版本说明 |

Plugin 属于**分发与组合层**。能力本身仍落在 Skill、MCP、连接器上，见 [扩展能力地图](/skills/capability-map/)。

## Plugin、Skill、MCP 的区别

可以直接看这个简版：

- **Skill**：告诉 Codex“按什么步骤做”
- **MCP**：告诉 Codex“可以调用哪些外部工具”
- **Plugin**：把上面这些东西打包好，方便安装和治理

很多混淆都来自把这三层当成同一个东西。

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

## 什么时候需要关心 Plugin

- 只是个人学习、自己写几个 Skill：可以暂时先放一放
- 要给团队统一发一套扩展能力：就该开始关心 Plugin

Plugin 解决的主要是“**分发和治理**”问题，不是第一次上手 Codex 的必需项。

## 安装与管理（概念）

1. 从**官方市场或团队批准列表**选择 Plugin
2. 阅读权限说明：读哪些仓库、访问哪些 SaaS
3. 安装后重启会话，验证工具与 Skill 列表
4. 定期更新；重大版本在 staging 仓库先试

具体按钮与命令以桌面 App / CLI 当前 UI 为准。

## 常见误解

### 1. 安装了 Plugin，不等于自动安全

Plugin 只是更方便地分发能力，不代表权限天然安全。你还是要看：

- 它能访问什么
- 它会不会代你执行外部动作
- 它的来源是否可信

### 2. 只要能装，就都值得装

团队里能维护、能回收、能审计的扩展，才适合长期启用。

## 安全与隐私

- 只安装可信来源；审查 Plugin 请求的 OAuth scope
- 区分「读设计稿」与「代发消息」类权限
- 离职与转岗时回收连接器授权
- 与 [权限与审批](/guide/foundations/permissions-and-approvals/) 叠加，不假设 Plugin 自带安全

## 与 Claude Code / 其他生态对比

不同产品的「Plugin」含义不完全相同。对比时看：**打包了什么、权限模型、是否开源可审计**——见 [功能对照](/guide/reference/feature-comparison/) 与 KimYx0207 CX-14（事实需复核）。

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

---
title: 功能对照
description: 按工作面、运行位置和审查方式对照桌面 App、CLI、IDE 与 Cloud。
sidebar:
  order: 30
---

这张表只比较**稳定的主要工作方式**，不把快速变化的小功能做成永久承诺。先用 [客户端选择图](/guide/choose-your-client/) 做决定，再在这里核对差异。

## 核心对照

| 入口 | 工作发生的位置 | 最强上下文 | 主要审查方式 | 典型任务 |
|---|---|---|---|---|
| ChatGPT 桌面 App | 本机项目、聊天与文件 | 已打开的文件夹、项目和任务 | 任务摘要、文件、diff、审批界面 | 多项目协调、长任务、文件与电脑操作 |
| Codex CLI | 当前终端与本地仓库 | 工作目录、命令输出、Git 状态 | 终端中的命令、diff 与结果摘要 | 探索、修改、测试、脚本和 CI |
| IDE 集成 | 当前编辑器 | 打开的文件、选区和近期对话 | 代码旁的变更摘要与 diff | 局部解释、小步修改、编辑器内审查 |
| Codex Cloud | 隔离的远程环境 | 已连接仓库与环境配置 | 云端日志、摘要、diff、PR | 后台长任务、并行尝试、远程协作 |

## 安装与身份

| 项目 | 桌面 App | CLI | IDE | Cloud |
|---|---|---|---|---|
| 入口 | macOS / Windows / Linux 桌面应用 | 本机命令行 | VS Code 兼容扩展；Xcode、JetBrains 各自集成 | Web 及支持的远程集成 |
| ChatGPT 登录 | 支持 | 支持 | 支持 | 必需 |
| API key 本地登录 | 支持 | 支持 | 支持 | 不支持 |
| 主要计费关系 | ChatGPT 计划或 API 用量 | ChatGPT 计划或 API 用量 | ChatGPT 计划或 API 用量 | ChatGPT 计划与工作区权限 |

API key 登录的本地工作与 ChatGPT 登录遵循不同的计费、管理和数据处理策略；API key 也不提供需要 ChatGPT 工作区或 Cloud 的能力。具体计划与额度始终以官方实时页面为准。

## 常见组合

### 个人开发闭环

```text
IDE 定位局部问题 → CLI 跑精确测试 → 桌面 App 审查长任务与 diff
```

### 团队远程闭环

```text
GitHub / GitLab / Linear / Slack 发起 → Cloud 隔离运行 → 人工审查摘要与 diff → 创建 PR
```

### 新手学习闭环

```text
桌面 App 打开练习目录 → 提一个小任务 → 看权限请求 → 看 diff → 运行验证
```

## 不要用矩阵替代现场确认

插件、Scheduled tasks、通知、模型和组织策略变化很快。遇到以下问题时，直接看当前客户端界面和官方文档：

- 当前账号是否出现某个功能
- 某项能力是否受计划、地区或管理员策略限制
- 当前版本的命令、快捷键或 UI 名称
- API key 登录是否支持某个 ChatGPT 或 Cloud 功能

选型原则保持简单：**局部代码靠 IDE，终端闭环靠 CLI，本机任务协调靠桌面 App，远程隔离执行靠 Cloud。**

---

**状态：** verified

**适用产品：** App / CLI / IDE / Cloud

**核验依据：** 已对照当前官方 App、CLI、IDE、Cloud、Authentication 与 Pricing 页面；矩阵只保留工作位置、上下文、审查方式和登录边界等明确能力，不再用“强 / 中 / 弱”猜测高波动功能。

**最近核验：** 2026-08-26

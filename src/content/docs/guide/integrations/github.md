---
title: GitHub 集成
description: 仓库连接、PR、Review 与 CI——Codex 在 GitHub 工作流中的位置。
---

GitHub 是 Codex 最常见的代码协作面：Cloud 任务、PR 审查、Actions 与本地 push 都围绕同一套分支与权限。

这里主要说 Codex 怎么接入“代码仓库、分支、PR、Review”这套协作流程。

即使你不是资深开发者，也可以先看它主要处理哪几类事：

- 代码放在哪里
- 改动怎么提出来给别人看
- 审查和合并是怎么发生的

## 能力地图

| 能力 | 典型入口 | 手册位置 |
|---|---|---|
| 连接远程仓库 | Cloud 设置 | [连接 GitHub](/guide/web-and-cloud/connect-github/) |
| 云端改代码开 PR | Cloud 任务 | [创建 Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| 本地审查 diff | 桌面 App / IDE | [diff 与评论](/guide/desktop-app/diffs-comments-and-review/) |
| CI 中跑 Codex | GitHub Actions | 路线图 `08-developer-platform/ci-cd/` |
| PR 自动评论审查 | Actions + exec | [非交互模式](/guide/cli/non-interactive-mode/) |

## 推荐团队规范

```md
## GitHub × Codex（可放入 AGENTS.md）

- 默认分支保护 main；Codex 只推 feature 分支
- PR 必须链接 issue；描述含测试说明
- 禁止 Codex 合并 PR，除非 release bot 明确授权
- 密钥使用 GitHub Secrets / 环境 secrets，不进 prompt
```

## Cloud vs 本地 Git

| | 本地 clone | Cloud |
|---|---|---|
| 代码来源 | 你机器上的工作区 | 远程克隆 |
| 未推送 commit | 可见 | 不可见，需先 push |
| 环境 | 你的 Node/系统版本 | 配置的环境镜像 |
| 适合 | 日常开发 | 异步长任务、标准化构建 |

## Review 工作流

1. Codex 或人开 PR
2. 人读 diff（或 `$pr-review` Skill）
3. CI 跑测试
4. 评论驱动修订——可用新 Codex 任务「仅处理 review 评论」
5. 人合并

## 常见误会

### 1. GitHub 集成不等于“让 Codex 自动替我开发”

更常见的用途是：

- 读取仓库上下文
- 帮你整理 diff 或 review
- 辅助开 PR、修评论

### 2. PR、Review 这些词我还不太懂，怎么办？

可以先粗略理解成：

- **PR**：把你的改动正式提交出来，等别人看
- **Review**：别人来检查这些改动

先知道这个层面，就够读这页的大部分内容了。

### 3. 第一次接触 GitHub 集成，最重要的是先分清这件事

先分清的不是 token，也不是 Actions，而是：

> **本地改动、云端仓库、PR 审查，这三者不是一回事。**

GitHub 集成的重点，是让 Codex 接入现有的代码协作流程。

## 安全

- 最小化 GitHub Token scope
- 对 `pull_request_target` 等敏感 Actions 模式保持警惕（注入面）
- Fork PR 上运行自动化需额外隔离策略

## 常见错误

- Cloud 任务假设本地未提交改动存在
- 让 Codex 在 PR 描述中执行未消毒的指令（提示注入）
- 同一 PR 混合格式化与功能改动

## 参考来源
- OpenAI Codex GitHub 集成文档
---

**状态：** verified  
**适用产品：** Cloud / App / CLI  
**核验依据：** OpenAI Developers 当前 Codex use cases 仍包含“Review GitHub pull requests”；OpenAI Help Center 的插件与集成说明也持续强调：外部仓库访问取决于底层 app 权限、角色访问与动作边界。本页只总结 GitHub 仓库、分支、PR、Review 与 CI 的协作位置，以及本地与 Cloud 在代码可见性上的差异。  
**最近核验：** 2026-07-26

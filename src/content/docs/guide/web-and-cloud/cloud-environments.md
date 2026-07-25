---
title: Cloud 环境
description: Codex Cloud 远程运行环境的构成、生命周期与团队配置要点。
---

Cloud **环境**是远程执行任务时的标准化机器上下文：操作系统、语言运行时、工具链、网络策略，以及与你仓库的克隆关系。理解环境有助于解释「为什么本地能跑、Cloud 却失败」。

## 这篇解决什么问题

- Cloud 环境与本地开发机的差异
- 环境如何与 GitHub 仓库、分支绑定
- 团队如何维护可复现的 Cloud 配置

## 核心概念

```text
GitHub 仓库（某分支）
        ↓ clone / checkout
Cloud 环境实例（容器或 VM，以产品为准）
        ↓
Agent 执行任务：安装依赖、改代码、测试、推送
```

与 [连接 GitHub](/guide/web-and-cloud/connect-github/) 配合使用；环境**不能**访问你笔记本上未推送的 commit。

## 环境包含什么（概念层）

| 组成部分 | 说明 |
|---|---|
| 基础镜像 | OS、常见构建工具 |
| 运行时 | Node、Python、Go 等（视镜像与任务而定） |
| 工作目录 | 克隆后的仓库路径 |
| 网络策略 | 是否允许出网、访问哪些域名 |
| 凭据注入 | [Secrets 与变量](/guide/web-and-cloud/secrets-and-variables/) |

具体镜像列表与自定义方式以 [官方 Cloud 文档](https://developers.openai.com/codex) 为准。

## 推荐配置流程

1. 在**测试仓库**完成首次 Cloud 任务，记录依赖安装命令
2. 把重复步骤写入仓库文档（`README`、`AGENTS.md` 或官方支持的 environment 配置文件）
3. 配置 [Secrets](/guide/web-and-cloud/secrets-and-variables/)（私有 registry、API key）
4. 确认 [互联网访问](/guide/web-and-cloud/internet-access/) 策略符合安全要求
5. 用同一环境模板跑 issue → PR 闭环验证

## 与本地环境对齐

避免「本地绿、Cloud 红」：

| 实践 | 原因 |
|---|---|
| 锁定依赖版本（lockfile） | 可复现安装 |
| 在 `AGENTS.md` 写明安装与测试命令 | Agent 不猜 |
| CI 与 Cloud 使用相近 Node/Python 版本 | 减少版本漂移 |
| 大文件用 Git LFS 或构建时下载 | 克隆体积可控 |

## 生命周期

典型一次 Cloud 任务：

1. **创建/复用**环境实例
2. **准备**：clone、checkout 分支、安装依赖
3. **执行**：Agent 改代码、跑命令
4. **产出**：分支推送、PR、日志 artifact
5. **销毁或回收**（策略因产品而异）

长任务可在 [桌面 App 通知](/guide/desktop-app/notifications/) 或移动端跟进。

## 常见错误

- 假设 Cloud 已预装项目私有 monorepo 的全部工具链
- 依赖 `localhost` 服务（数据库、mock API）却未在环境中提供
- 首次就在生产仓库跑无边界任务

## 安全边界

- 环境应视为**半信任**：仍须 code review 与分支保护
- 生产数据库连接串只通过 Secrets 注入，不进 prompt
- 定期清理不再使用的环境模板与 Secrets

## 参考来源

- OpenAI Codex Cloud environments
- stormzhang `10-cloud.md`
- KimYx0207 CX-10、CX-11

---

**状态：** review  
**适用产品：** Cloud  
**最近核验：** 2026-07-25

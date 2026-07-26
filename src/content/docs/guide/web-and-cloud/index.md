---
title: Web 与 Cloud（概述）
description: Cloud 任务、环境、Secrets 与 PR 审查的入口导航。
sidebar:
  order: 13
---

Cloud 适合在**标准化远程环境**跑任务、连接 GitHub 并产出 PR。开始前可以看 [本地与云端](/guide/foundations/local-vs-cloud/)，并阅读 [官方 Cloud 文档](https://developers.openai.com/codex)。

任务不是在你电脑上跑，而是在远程环境里继续跑。

这类场景常见在：

- 任务要跑很久
- 你不想一直守着本机
- 需要直接连远程仓库和 PR 流程

Cloud 不一定是最先接触的部分，但开始接触远程仓库、PR、异步长任务时，基本都会用到。

## 章节导航

| 阶段 | 页面 |
|---|---|
| 连接 | [连接 GitHub](/guide/web-and-cloud/connect-github/) |
| 环境 | [Cloud 环境](/guide/web-and-cloud/cloud-environments/) |
| 凭据 | [Secrets 与环境变量](/guide/web-and-cloud/secrets-and-variables/) |
| 产出 | [创建 Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| 质量 | [Cloud 代码审查](/guide/web-and-cloud/code-review/) |
| 协作 | [委托与跟进](/guide/web-and-cloud/delegate-and-follow-up/) |
| 网络 | [互联网访问](/guide/web-and-cloud/internet-access/) |
| 排障 | [Cloud 排障](/guide/web-and-cloud/troubleshooting/) |
| 集成 | [GitHub 集成](/guide/integrations/github/) |

从桌面 App 发起云端任务：[本地与云端任务](/guide/desktop-app/local-and-cloud-tasks/)。从 IDE 委托：[IDE 云端任务](/guide/ide/cloud-task-workflow/)。

## 建议阅读顺序

第一次接触 Cloud 时，可以按这个顺序读：

1. [连接 GitHub](/guide/web-and-cloud/connect-github/)
2. [Secrets 与环境变量](/guide/web-and-cloud/secrets-and-variables/)
3. PR、代码审查和协作流程

把“它怎么连仓库、怎么拿权限、怎么处理密钥”这几件事看清楚，再去看自动化细节会更省力。

Cloud 适合处理离开本机继续跑的远程仓库任务，不只是把本地流程搬到网页里。

---

**状态：** review  
**适用产品：** Cloud  
**最近核验：** 2026-07-25

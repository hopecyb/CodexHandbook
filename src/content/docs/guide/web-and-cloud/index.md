---
title: Web 与 Cloud（概述）
description: 从仓库连接、可复现环境到审查和 Pull Request 的远程任务主线。
sidebar:
  order: 13
---

Codex Cloud 在隔离的云环境中执行编码任务，适合后台长任务、并行尝试和从 GitHub、GitLab（Beta）、Linear 或 Slack 发起的工作。它不是“远程控制你的电脑”，也不会自动看到本地未推送的文件。

## 一次 Cloud 任务经过什么

```text
ChatGPT 登录
  → 连接 GitHub / GitLab
  → 创建仓库环境
  → checkout 指定分支或 commit
  → setup script 安装依赖
  → Agent 在网络策略内修改和验证
  → 查看摘要、日志与 diff
  → 跟进修改或创建 PR
  → 人工审查 + CI 后合并
```

Cloud 的价值是隔离、可复现和并行，不是取消审查。

## 本地还是 Cloud

| 选择本地 | 选择 Cloud |
|---|---|
| 依赖未提交文件或本机服务 | 输入已在远程仓库 |
| 需要和进程实时交互 | 任务可在后台独立运行 |
| 快速、小范围修改 | 多步骤构建、测试或并行尝试 |
| 工具只存在于当前机器 | 环境可以脚本化重建 |

先阅读[本地与云端](/guide/foundations/local-vs-cloud/)理解执行边界。

## 建议学习顺序

1. [连接 GitHub](/guide/web-and-cloud/connect-github/)：只授权需要的仓库；
2. [Cloud 环境](/guide/web-and-cloud/cloud-environments/)：锁定工具、版本和 setup；
3. [Secrets 与环境变量](/guide/web-and-cloud/secrets-and-variables/)：区分安装期 Secret 与运行期变量；
4. [互联网访问](/guide/web-and-cloud/internet-access/)：Agent 阶段默认断网，按域名和方法最小开放；
5. [委托与跟进](/guide/web-and-cloud/delegate-and-follow-up/)：用目标、约束和验收标准发任务；
6. [创建 Pull Request](/guide/web-and-cloud/create-pull-requests/)与[代码审查](/guide/web-and-cloud/code-review/)：把结果变成可合并交付物；
7. [Cloud 排障](/guide/web-and-cloud/troubleshooting/)：按仓库、setup、网络、任务四层定位。

从桌面应用或 IDE 发起时，分别看[本地与云端任务](/guide/desktop-app/local-and-cloud-tasks/)和[IDE 云端任务](/guide/ide/cloud-task-workflow/)。

## 第一次练习

选择一个无生产凭据的测试仓库，只让 Codex 修正文档链接并运行链接检查。成功标准是：环境启动、diff 只含预期文件、命令输出可见、结果可创建 PR。不要把“页面显示完成”作为唯一验收。

## 官方依据

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Cloud 环境](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**状态：** verified

**适用产品：** Cloud

**最近核验：** 2026-08-26

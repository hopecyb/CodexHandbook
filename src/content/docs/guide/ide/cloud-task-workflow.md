---
title: IDE 中的云端任务
description: 从 IDE 把长任务委托给 Codex Cloud，并回到可审查结果。
sidebar:
  order: 60
---

IDE 可以把快速迭代留在本地，也可以连接 Codex web，把耗时更长的任务委托到 Cloud。入口仍在编辑器中，但执行环境、仓库状态和网络边界已经变成云端。

## 什么时候委托

| 留在本地 | 委托到 Cloud |
|---|---|
| 需要和当前选区快速来回修改 | 任务步骤多、运行时间长 |
| 依赖尚未提交的本地状态 | 输入已经在远程仓库或可上传 |
| 必须访问本机专用工具 | 云环境可重建依赖与验证 |
| 你需要实时操作进程 | 你希望本地继续做其他工作 |

云端不会自动拥有你本机尚未提交的文件、凭据或运行进程。委托前必须明确任务从哪个仓库、分支与提交开始。

## 委托前清单

- [ ] 已用 ChatGPT 账户登录；Codex Cloud 不接受 API key 登录
- [ ] 已连接 GitHub，或正在使用当前支持的 GitLab Beta 集成
- [ ] 云环境能执行安装和验证脚本
- [ ] 必要变量与 secrets 已在环境中配置，没有写进提示词
- [ ] 本地未提交改动已处理，或明确不包含在任务中
- [ ] 目标、允许路径、禁区和验收命令已经写清

## 端到端示例

```text
目标：修复重试模块在达到上限后仍等待一次的问题。
起点：仓库 acme/retry-service，分支 fix/retry-limit。
范围：只修改 src/retry.ts 和对应测试。
约束：不升级依赖，不修改公开 API，不推送到 main。
验收：运行 pnpm test -- retry 和 pnpm typecheck；展示 diff 与命令结果。
```

推荐流程：

1. 在 IDE 中附带相关文件或选区，先确认问题边界；
2. 选择 Cloud 继续处理较长任务；
3. 在 Cloud 查看计划、进度和验证结果；
4. 返回 IDE 或 Web 检查可审查的结果；
5. 拉取分支或通过 PR 获取改动；
6. 在可信本地环境重新测试并人工审查后再合并。

云端“完成”只表示远程执行结束，不表示代码已经适合合并。远程依赖、操作系统或凭据与本地/CI 不同，仍可能暴露环境差异。

## 冲突与安全

- 不要在委托后让本地与云端同时改同一文件；
- 不在提示词中粘贴生产密钥，使用环境 secrets；
- 不把 Cloud 的网络访问当成默认能力，按环境允许列表配置；
- 推送、开 PR 和合并是不同动作，合并必须保留人工或 CI 门禁。

接着阅读[云环境](/guide/web-and-cloud/cloud-environments/)与[创建 Pull Request](/guide/web-and-cloud/create-pull-requests/)。

## 官方依据

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**状态：** verified

**适用产品：** IDE、Cloud

**最近核验：** 2026-08-26

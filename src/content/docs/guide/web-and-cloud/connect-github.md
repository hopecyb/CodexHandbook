---
legacyVerification:
  status: "verified"
  products: "Cloud、GitHub"
  checkedAt: "2026-11-19"
title: 连接 GitHub
description: 以最小仓库范围为 Codex Cloud 配置 GitHub 访问。
sidebar:
  order: 10
---

Codex Cloud 需要先连接 GitHub 或 GitLab（Beta），再为仓库创建环境。GitHub 连接范围决定它能看到哪些仓库；本机 clone 与未推送改动不在这个范围内。

## 连接步骤

1. 打开 Codex Cloud，并使用 ChatGPT 账户登录；
2. 按提示连接 GitHub；
3. 在 GitHub 授权界面选择组织与**必要仓库**；
4. 回到 Codex，选择该仓库并创建 Cloud 环境；
5. 用只读或小改动任务验证 clone、分支与 diff；
6. 需要 PR review 时，在 Codex Settings 为仓库启用 Code review。

只授权本次需要的仓库。团队仓库还要确认组织允许安装集成、当前账号有相应权限，并保留分支保护。

## 连接前后检查

- [ ] 目标仓库不是误选的同名 fork
- [ ] 默认分支与任务起点已确认
- [ ] 若从 Web/远程仓库直接启动，本地必要改动已经 push；若从 IDE handoff，已审查允许上传的本地源码改动
- [ ] 主分支禁止未经审查的直接写入
- [ ] 环境中没有生产级全权限凭据
- [ ] 第一次任务只改低风险文件

## GitHub 上的两类用法

### 让 Cloud 实现任务

在 Codex Cloud 选择仓库环境和起始分支，描述目标。任务结束后查看 diff，再创建 PR。

### 让 Codex 审查 PR

仓库启用 Code review 后，在 PR 评论中写：

```text
@codex review
```

Codex 会发布标准 GitHub review。自动审查需要在 Codex Settings 单独开启；团队可在 `AGENTS.md` 的 `## Code Review Rules` 中写仓库特有规则。

## 权限异常怎么判断

- 仓库不在列表：检查 GitHub 授权的仓库范围；
- 组织仓库 403：检查组织策略、SSO 与安装许可；
- 无法启用自动 review：确认拥有设置所需的 GitHub push 或 admin 权限；
- Web/远程仓库任务看不到仅存在本机的 commit：先 push 到明确分支；IDE handoff 是另一条路径，可携带当前上下文中的本地源码改动。

不要为解决一个 403 直接授权全部私有仓库。先确认目标仓库和缺少的具体权限。

## 官方依据

- [Codex Cloud 快速开始](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [Prompting：IDE handoff](https://learn.chatgpt.com/docs/prompting)

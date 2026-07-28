---
title: 连接 GitHub
description: 把 Codex Cloud 与 GitHub 仓库对接——权限、分支与环境。
---

连接 GitHub 后，Codex 可在**远程环境**克隆仓库、开分支、推送与开 PR，这是 Cloud 工作流的前提。

## 内容

- 为什么需要连接、授权哪些权限
- 连接前后的检查清单
- 与本地桌面任务的分工

## 关系图

```text
你的 GitHub 仓库
    ↕（OAuth / GitHub App，以产品为准）
Codex Cloud 环境
    ↕
你在 Web/App 中发起的云端任务
```

本地 [桌面 App](/guide/desktop-app/) 仍可直接改本机 clone；Cloud 适合**标准化环境、离开电脑继续跑、从手机审批**等场景。见 [本地与云端](/guide/foundations/local-vs-cloud/)。

## 常见误会

### 1. 我已经在本地有仓库了，为什么还要再连 GitHub？

Cloud 任务看的是远程仓库，不是你本机那份仓库。

### 2. 连上 GitHub，是不是就等于它能看到我本地所有改动？

本地没 push 的改动，Cloud 一般看不到。  
这也是常见的混淆点。

### 3. 连接时最该注意什么？

更该先确认的是：

- 仓库范围有没有给太大
- 分支保护怎么设
- 密钥有没有正确放在 Cloud 的安全位置

连接 GitHub 以后，Cloud 看到的是远程仓库，不是你电脑里那份还没推送的本地状态。

## 连接前检查

- [ ] 对目标仓库有 push 权限（或仅需 PR 时用 fork 策略）
- [ ] 分支保护规则已知：是否禁止直接推 main
- [ ] 密钥不在仓库内；Cloud 使用 [Secrets 配置](/guide/web-and-cloud/secrets-and-variables/)
- [ ] 组织是否允许第三方 GitHub 集成

## 推荐步骤（概念）

1. 在 Codex Web/Cloud 设置中打开 **GitHub 连接**
2. 选择组织与仓库范围（**尽量最小仓库列表**）
3. 确认 OAuth 权限说明：一般需要读代码、开 PR；写权限视任务而定
4. 在测试仓库发起小规模 Cloud 任务验证
5. 成功后配置默认分支、环境变量（若有）

具体按钮与界面以当前产品为准。

## 权限与安全

| 实践 | 原因 |
|---|---|
| 用专用机器用户或 bot 账号（团队） | 审计与离职回收 |
| 不授权所有私有仓库 | 降低误操作面 |
| 启用分支保护 + 必需 review | Cloud 产出仍过人审 |
| 定期复查已连接仓库列表 | 离职项目及时断开 |

## 连接后常见任务

- 远程实现 issue → [创建 Pull Request](/guide/web-and-cloud/create-pull-requests/)
- PR 审查与跟进 → 集成 [GitHub](/guide/integrations/github/)
- 与 [Automations](/skills/automations/scheduled-tasks/) 结合

## 常见错误

- 连接个人 GitHub 到生产组织仓库却用个人策略
- 假设 Cloud 能访问本机未推送的 commit
- 首次就在大型 monorepo 上跑无限制任务

## 参考来源
- OpenAI Codex Cloud / GitHub 集成文档
---

**状态：** outdated  
**适用产品：** Cloud / Web  
**复核说明：** 本页依赖当前 GitHub 连接方式、授权模型、仓库范围配置和 Cloud 侧按钮入口等具体产品行为；这些都属于高波动集成信息，需补齐当前官方连接文档后再恢复为 `verified`。  
**最近核验：** 2026-07-26

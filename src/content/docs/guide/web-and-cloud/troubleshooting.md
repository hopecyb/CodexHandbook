---
title: Cloud 排障
description: GitHub 连接、环境、Secrets、出网与 PR 环节的常见故障索引。
---

Cloud 出问题时，重复运行一般解决不了根因。

Cloud 问题常出在**权限、环境差异、凭据或网络**四层。本页按症状指向对应专题，避免在聊天里盲目重试。

## 内容

- 任务失败时先查哪一类原因
- 与本地排障的分工
- 何时该回滚到本地小步验证

## 先查什么

如果出现“Cloud 红了、本地绿了”，优先检查运行条件。

常见原因包括：

- 远程环境和你本地不一样
- Cloud 看不到你本地未推送的东西
- Secret 没配好
- 网络或权限被限制了

排查时先看条件是否满足，再看任务本身有没有问题。

## 快速分诊

| 症状 | 优先查看 |
|---|---|
| 无法连接仓库 / 403 | [连接 GitHub](/guide/web-and-cloud/connect-github/) |
| 依赖安装失败 | [互联网访问](/guide/web-and-cloud/internet-access/) · [Cloud 环境](/guide/web-and-cloud/cloud-environments/) |
| 私有包 / API 401 | [Secrets 与变量](/guide/web-and-cloud/secrets-and-variables/) |
| 任务一直等待 | [委托与跟进](/guide/web-and-cloud/delegate-and-follow-up/) · 是否待审批 |
| 本地有 commit、Cloud 看不到 | 是否已 push；Cloud 不读本机未推送内容 |
| PR 开不出或推不上去 | 分支保护 · [创建 PR](/guide/web-and-cloud/create-pull-requests/) |
| 测试在 Cloud 红、本地绿 | 版本/环境对齐表见 [Cloud 环境](/guide/web-and-cloud/cloud-environments/) |

## 排查顺序

可以按这个顺序排查：

1. 仓库和分支是不是对的
2. 权限和授权是不是够
3. 环境和依赖是不是齐
4. Secret 和网络是不是通
5. 任务描述是不是遗漏关键约束

把这几项先排清，比直接重跑更有效。

## 连接与权限

**现象：** OAuth 成功但任务无法 clone。

**检查：**

1. 授权范围是否包含目标组织/仓库
2. 仓库是否为 archived、是否启用 GitHub App 限制
3. 是否用个人账号连了需 org SSO 的仓库

**现象：** push 被拒。

**检查：** 分支保护、required review、是否尝试直推 `main`

## 常见误会

### 1. 报错出现在安装阶段，就一定是依赖问题吗

也可能是网络、认证、Secret、私有 registry 权限问题。

### 2. 本地能跑，就说明代码没问题，Cloud 是偶发抽风吗

很多时候说明：  
**你的本地环境里有 Cloud 没有的前提条件。**

### 3. 任务卡住就是模型在思考吗

也可能只是：

- 在等审批
- 在等网络
- 在等环境启动
- 在做一个范围过大的任务

## 环境与依赖

**现象：** `command not found`（node、python 等）。

**检查：** 基础镜像是否含所需运行时；是否在 `AGENTS.md` 写明版本与安装命令。

**现象：** lockfile 冲突或安装超时。

**检查：** 出网策略；registry 镜像；依赖是否需 VPN（Cloud 一般不在内网）

## Secrets 与变量

**现象：** 构建时环境变量为空。

**检查：**

- Secret 名称是否与文档一致（大小写敏感常见）
- 是否配置在正确的仓库/环境作用域
- 是否误把 Secret 值写进 prompt 导致被脱敏

更多：[Secrets 与变量](/guide/web-and-cloud/secrets-and-variables/)

## 任务挂起与超时

| 原因 | 处理 |
|---|---|
| 等待人工审批 | App/手机批准或拒绝 |
| 任务过大 | 拆成多个小委托 |
| 环境启动慢 | 首次冷启动正常；持续慢则查官方状态页 |

跟进方法：[委托与跟进](/guide/web-and-cloud/delegate-and-follow-up/)

## 产出质量

Cloud 跑完但结果不可用：

1. 对照任务描述是否缺少验收条件
2. 本地 checkout 同一分支跑测试
3. 用 [先诊断再修复](/cases/workflows/diagnose-before-fixing/) 追加跟进，而非整任务重来

## 什么时候该先退回本地

如果已经连续两轮都在排 Cloud 条件，而不是在推进任务本身，可以先退回本地：

- 在本地做最小复现
- 把依赖、命令、验证方式写清
- 再重新委托 Cloud

这样比一直在远程环境里猜更省时间。

## 与全局排障索引的关系

CLI/IDE/App 本地问题见 [参考资料 · 故障排查](/guide/reference/troubleshooting/)。本页只覆盖 **Cloud 特有**链路。

## 参考来源
- OpenAI Codex Cloud 支持文档
---

**状态：** outdated  
**适用产品：** Cloud  
**复核说明：** 本页的排查框架有帮助，但它建立在当前 Cloud 仓库连接、Secrets、审批、网络与 PR 行为假设之上；随着 Cloud 产品和跨端能力变化，这些症状到专题页的映射需要按最新官方支持文档重写。  
**最近核验：** 2026-07-26

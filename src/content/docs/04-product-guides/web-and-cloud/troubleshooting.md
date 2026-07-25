---
title: Cloud 排障
description: GitHub 连接、环境、Secrets、出网与 PR 环节的常见故障索引。
---

Cloud 问题往往出在**权限、环境差异、凭据或网络**四层。本页按症状指向对应专题，避免在聊天里盲目重试。

## 这篇解决什么问题

- 任务失败时先查哪一类原因
- 与本地排障的分工
- 何时该回滚到本地小步验证

## 快速分诊

| 症状 | 优先查看 |
|---|---|
| 无法连接仓库 / 403 | [连接 GitHub](/04-product-guides/web-and-cloud/connect-github/) |
| 依赖安装失败 | [互联网访问](/04-product-guides/web-and-cloud/internet-access/) · [Cloud 环境](/04-product-guides/web-and-cloud/cloud-environments/) |
| 私有包 / API 401 | [Secrets 与变量](/04-product-guides/web-and-cloud/secrets-and-variables/) |
| 任务一直等待 | [委托与跟进](/04-product-guides/web-and-cloud/delegate-and-follow-up/) · 是否待审批 |
| 本地有 commit、Cloud 看不到 | 是否已 push；Cloud 不读本机未推送内容 |
| PR 开不出或推不上去 | 分支保护 · [创建 PR](/04-product-guides/web-and-cloud/create-pull-requests/) |
| 测试在 Cloud 红、本地绿 | 版本/环境对齐表见 [Cloud 环境](/04-product-guides/web-and-cloud/cloud-environments/) |

## 连接与权限

**现象：** OAuth 成功但任务无法 clone。

**检查：**

1. 授权范围是否包含目标组织/仓库
2. 仓库是否为 archived、是否启用 GitHub App 限制
3. 是否用个人账号连了需 org SSO 的仓库

**现象：** push 被拒。

**检查：** 分支保护、required review、是否尝试直推 `main`

## 环境与依赖

**现象：** `command not found`（node、python 等）。

**检查：** 基础镜像是否含所需运行时；是否在 `AGENTS.md` 写明版本与安装命令。

**现象：** lockfile 冲突或安装超时。

**检查：** 出网策略；registry 镜像；依赖是否需 VPN（Cloud 通常不在内网）

## Secrets 与变量

**现象：** 构建时环境变量为空。

**检查：**

- Secret 名称是否与文档一致（大小写敏感常见）
- 是否配置在正确的仓库/环境作用域
- 是否误把 Secret 值写进 prompt 导致被脱敏

更多：[Secrets 与变量](/04-product-guides/web-and-cloud/secrets-and-variables/)

## 任务挂起与超时

| 原因 | 处理 |
|---|---|
| 等待人工审批 | App/手机批准或拒绝 |
| 任务过大 | 拆成多个小委托 |
| 环境启动慢 | 首次冷启动正常；持续慢则查官方状态页 |

跟进方法：[委托与跟进](/04-product-guides/web-and-cloud/delegate-and-follow-up/)

## 产出质量

Cloud 跑完但结果不可用：

1. 对照任务描述是否缺少验收条件
2. 本地 checkout 同一分支跑测试
3. 用 [先诊断再修复](/09-workflows/diagnose-before-fixing/) 追加跟进，而非整任务重来

## 与全局排障索引的关系

CLI/IDE/App 本地问题见 [参考资料 · 故障排查](/12-reference/troubleshooting/)。本页仅覆盖 **Cloud 特有**链路。

## 参考来源

- OpenAI Codex Cloud 支持文档
- stormzhang `10-cloud.md`
- KimYx0207 CX-10～CX-11

---

**状态：** review  
**适用产品：** Cloud  
**最近核验：** 2026-07-25

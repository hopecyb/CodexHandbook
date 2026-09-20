---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "已按本仓库当前排障入口页、登录/客户端选择、检查结果、上下文与权限相关章节交叉复核；本页只承担“按症状指向下一页”的索引作用，不把具体报错或产品行为写成长期契约。"
  checkedAt: "2026-07-26"
title: 故障排查索引
description: 按症状定位到对应教程与产品页。
sidebar:
  order: 110
---

如果遇到问题，但又不知道该去 App、CLI、IDE、Cloud 哪一页找，可以先从这里找找方向。

按症状找方向，比在全站里来回翻快一些。

| 症状 | 前往 |
|---|---|
| 安装失败 | [桌面排障](/guide/desktop-app/troubleshooting/) · [CLI 排障](/guide/cli/troubleshooting/) · [IDE 排障](/guide/ide/troubleshooting/) |
| 登录/认证失败 | [登录](/guide/getting-started/sign-in-and-authentication/) |
| 不知道选哪个客户端 | [选择客户端](/guide/getting-started/choose-your-codex-client/) · [功能对照](/guide/reference/feature-comparison/) |
| 结果越界/很糟 | [检查结果](/guide/getting-started/review-the-result/) · [提示词排错](/prompts/prompt-debugging/) · [撤销](/guide/getting-started/undo-and-recover/) |
| 上下文混乱 | [保持聚焦](/guide/context/keep-context-focused/) |
| 权限/沙箱疑问 | [权限](/guide/foundations/permissions-and-approvals/) · [沙箱](/guide/foundations/sandbox-and-network/) |

## 带日志跟做

[五种失败恢复实录](/guide/reference/troubleshooting/failure-recovery-lab/)提供可下载输入和真实命令日志，练习来源误改、引用编号、建议输入绑定、目录范围与状态损坏。每例都有单变量修正和恢复记录；这些是本地设计演练，不是客户端登录或网络事故。

## 不知道问题属于哪类时

如果一时说不清问题属于哪类，可以先按下面几种情况分：

1. 是“进不去”？
2. 是“跑不起来”？
3. 是“跑了但结果不对”？
4. 是“我不知道该怎么选工具或入口”？

这样通常能更快落到对应页面。

官方支持与文档：[https://developers.openai.com/codex](https://developers.openai.com/codex)

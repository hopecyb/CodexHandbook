---
title: 故障排查
description: 按症状定位到对应教程与产品页。
sidebar:
  order: 18
---

如果已经出问题，但还不知道问题属于哪一类，可以从这页进入。

你不用一开始就判断是 CLI、IDE、Cloud、权限还是提示词问题。先按症状分类，再进对应章节。

## 可以在这里做什么

- 出问题时先去哪里分流
- 不会判断错误类别时，最小该怎么开始排查
- 哪些问题属于安装、权限、上下文或任务描述问题

# 故障排查

| 症状 | 前往 |
|---|---|
| 安装失败 | [桌面排障](/guide/desktop-app/troubleshooting/) · [CLI 排障](/guide/cli/troubleshooting/) · [IDE 排障](/guide/ide/troubleshooting/) |
| 登录/认证失败 | [登录](/guide/getting-started/sign-in-and-authentication/) |
| 不知道选哪个客户端 | [选择客户端](/guide/choose-your-client/) · [功能对照](/guide/reference/feature-comparison/) |
| 结果越界/很糟 | [第一个任务案例](/cases/first-task/) · [提示词排错](/prompts/prompt-debugging/) · [撤销](/guide/getting-started/undo-and-recover/) |
| 上下文混乱 | [保持聚焦](/guide/context/keep-context-focused/) |
| 权限/沙箱疑问 | [权限与沙箱](/guide/permissions-and-sandbox/) |

## 不知道从哪查时的分法

第一次排障时，可以先判断自己属于哪一种：

- 根本没法开始
- 可以开始，但中途报错
- 没报错，但结果不对
- 不是报错，而是不会选入口或不会下任务

先分到这四类，后面的定位通常会快很多。

## 常见误会

### 1. 排障一定要先知道很专业的术语

不用。

第一次排障更重要的是先把问题分到大类，不是先背术语。

### 2. 只要没报错，说明不是故障排查问题

“结果不对”“总是跑偏”“不知道怎么开始”这些，也都属于需要分流的问题。

### 3. 出错时应该马上乱点更多页面试试看

通常不如先停一下，先判断自己属于哪类问题，再去对应页面。

排障先做分类，不一定要立刻开始修。

更多参考：[FAQ](/guide/reference/faq/) · [错误参考](/guide/reference/error-reference/) · [官方 Codex 文档](https://developers.openai.com/codex)

---

**状态：** verified  
**适用产品：** App / CLI / IDE / Cloud  
**核验依据：** 本页仅承担按症状分流到安装、登录、权限、上下文与结果质量章节的导航作用；所链接章节路径已逐项检查，且页面未依赖具体报错码、版本号或界面文案。  
**最近核验：** 2026-07-26

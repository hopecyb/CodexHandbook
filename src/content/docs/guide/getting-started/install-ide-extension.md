---
title: 安装 IDE 扩展
description: 在支持的编辑器中安装 Codex 扩展。
---

1. 确认编辑器在官方支持列表中（见 [https://developers.openai.com/codex](https://developers.openai.com/codex)）
2. 从扩展市场搜索官方 Codex 扩展并安装
3. 重启编辑器（如需要）并打开扩展面板

平时大多数时间都在 VS Code 或 JetBrains 里的话，IDE 扩展通常会更合手。  
第一次安装时最容易混淆的一点是，扩展“已经安装”和“已经能在当前工作区正常工作”其实还是两步。

## 安装后再确认这几件事

- 你现在用的是官方支持的编辑器
- 扩展装在当前编辑器里，不是装错环境
- 重启后能看到扩展入口
- 打开的是你真正要工作的项目目录

## 常见误会

### 1. Marketplace 里点安装就结束了

后面常见还需要：

- 重启编辑器
- 登录
- 打开正确的工作区

### 2. IDE 扩展天然知道你想操作哪个项目

如果工作区根目录不对，它拿到的上下文也会跟着偏。

IDE 扩展装好后，还要确认它能在你当前编辑器和工作区里正常出现并工作。

接着：[IDE 本地任务工作流](/guide/ide/local-task-workflow/)。排障：[IDE 排障](/guide/ide/troubleshooting/)。


---

**状态：** review  
**适用产品：** IDE  
**最近核验：** 2026-07-25

---
title: 设置
description: 配置桌面应用的日常行为、快捷键、通知与外观。
sidebar:
  order: 90
---

设置页用于个性化应用行为，不等同于 Codex 的全部权限配置。先保留默认值，只有在知道影响范围后再修改。

在 macOS 按 `Cmd + ,`，在 Windows 按 `Ctrl + ,`，也可以从应用菜单打开 Settings。

## 新手先看四项

### General

- 是否要求 `Cmd + Enter` 才提交多行提示词；
- **Prevent sleep while running** 是否允许本地长任务在离开电脑时继续；
- Follow-up behavior 决定工作中收到的新消息是立即引导当前执行，还是排到下一轮。

后一项会改变你“补充一句话”时的效果。紧急纠偏选引导当前执行；互不相关的新要求应另开聊天。

### Keyboard shortcuts

可搜索命令、改键或恢复默认值。遇到网上快捷键与本机不一致时，以这里显示的绑定为准。

### Notifications

设置回合完成通知何时出现，并控制权限请求和问题通知。完整建议见[通知与活动视图](/guide/desktop-app/notifications/)。

### Appearance

可选择浅色、深色或跟随系统，并调整强调色、背景色、前景色、界面字体、代码字体与字号。长代码审查时，优先保证对比度和字号，不要只追求主题效果。

## 哪些不在这里解决

- 仓库级规则写在 `AGENTS.md`；
- CLI 与 Agent 的持久配置主要写在 `config.toml`；
- 文件、网络和命令是否可用由沙箱、审批与组织策略共同决定；
- 组织托管策略可能限制个人可以选择的能力。

因此，“设置里能看到”不等于当前任务一定有权限。遇到拒绝时，先读[权限与沙箱](/guide/permissions-and-sandbox/)，不要直接扩大权限。

## 修改后的验收

每次只改一类设置，并用一个低风险聊天验证。记录原值，确认效果后再继续；若行为与预期不同，先恢复默认值，再检查应用版本、操作系统权限和组织策略。

## 官方依据

- [ChatGPT 桌面应用设置](https://learn.chatgpt.com/docs/app/settings)
- [Codex 配置基础](https://learn.chatgpt.com/docs/config)
- [权限](https://learn.chatgpt.com/docs/permissions)

---

**状态：** verified

**适用产品：** App

**最近核验：** 2026-08-26

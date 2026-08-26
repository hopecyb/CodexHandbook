---
title: 通知与活动视图
description: 配置任务完成、权限请求和等待回复的提醒。
sidebar:
  order: 80
---

通知解决的是“什么时候需要回来处理任务”，不是代替你审查结果。桌面应用可配置回合完成提醒，也可分别控制权限请求和问题通知。

## 建议配置

打开 **Settings → Notifications**：

| 事件 | 建议 | 原因 |
|---|---|---|
| Turn completion | 后台运行时提醒 | 不必一直盯着长任务 |
| Permission | 开启 | 审批未处理会让任务停住 |
| Question | 开启 | Codex 缺少关键上下文时需要你回答 |

操作系统还必须允许 ChatGPT 桌面应用发送通知；应用内开启但系统层拒绝时，仍收不到提醒。

## 用 Activity 视图处理多个聊天

当 Activity 可用时，选择侧栏铃铛查看未读、运行中或等待回复的聊天。快捷键是：

- macOS：`Cmd + Option + U`
- Windows：`Ctrl + Alt + U`

筛选项会随当前界面变化，可能包括 Work、Chat、Pinned 和 Scheduled。处理顺序建议是：等待权限或输入 → 失败 → 已完成待审查 → 仍在运行。

## 通知出现后做什么

- **完成**：打开 diff 和验证输出，不要把通知当成验收结论；
- **权限请求**：确认命令、目标资源、影响范围和可逆性；
- **等待回答**：只补充必要上下文，不顺手扩大任务；
- **失败**：定位第一条有效错误，再决定重试还是调整约束。

CLI 与 IDE 的通知机制不同：IDE 没有独立的通知设置；CLI 可通过高级配置决定 TUI 或外部程序的完成通知。不要把桌面端设置当成全局开关。

## 官方依据

- [通知](https://learn.chatgpt.com/docs/notifications)
- [桌面应用设置](https://learn.chatgpt.com/docs/app/settings)

---

**状态：** verified

**适用产品：** App

**最近核验：** 2026-08-26

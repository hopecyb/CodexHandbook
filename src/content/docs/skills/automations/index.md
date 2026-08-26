---
title: Scheduled tasks
description: 在 ChatGPT 中按时间重复运行已经验证过的任务。
---

Scheduled task（定时任务）让 ChatGPT 在后台按计划重复工作。它适合定期报告、持续跟进和重复维护，不等于任意 webhook、仓库事件或 CI 自动化。

## 先判断是否适合

| 适合 | 不适合 |
|---|---|
| 输入来源稳定、输出可审查 | 每次都需要重新定义问题 |
| 时间或间隔驱动 | 必须由 Git push、PR 打开等事件精确触发 |
| 只读检查、摘要、草稿 | 无人值守合并主分支或批量删除 |
| 有明确“无变化”与停止条件 | 失败后无限重试 |

## 当前管理入口

- 在 ChatGPT Web 或桌面 App 创建和管理定时任务。
- Codex CLI 和 IDE 扩展没有 Scheduled 管理界面；它们适合先测试提示词、Skill 或脚本。
- 桌面 App 可以让任务使用本地项目或隔离 worktree，但需要机器开机、App 运行且项目仍在磁盘上。
- Web 定时任务可以使用上传上下文、连接工具、Skills 和 Plugins，但不能直接访问本机文件夹。

## 本组入口

- [定时任务完整指南](/skills/automations/scheduled-tasks/)：选择运行方式、写耐久提示词、设置权限与验收

## 官方来源

- [OpenAI：Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**状态：** verified

**适用产品：** ChatGPT Web / 桌面 App；CLI 与 IDE 仅用于准备和测试，不提供管理界面

**最近核验：** 2026-08-26

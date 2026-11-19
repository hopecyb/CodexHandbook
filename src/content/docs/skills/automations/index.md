---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / 移动 App / 桌面 App；CLI 与 IDE 仅用于准备和测试，不提供管理界面"
  checkedAt: "2026-11-19"
title: Automations 与 Scheduled tasks
description: 在 ChatGPT 中按时间或受支持的 App 事件运行已经验证过的任务。
---

Automations 可以按时间运行，也可以在符合资格的账号中由受支持的 App 事件触发。它适合定期报告、持续跟进和限定事件流；它仍不等于任意 webhook 或通用 CI 自动化。

![插画：大钟和日历上方的循环传送带，已验证的任务卡按时间运行并产出报告，人工审核者看完报告点赞，也可以随时按下暂停](/illustrations/automations-schedule.webp)

## 先判断是否适合

| 适合 | 不适合 |
|---|---|
| 输入来源稳定、输出可审查 | 每次都需要重新定义问题 |
| 时间/间隔驱动，或受支持 App 的事件 | 任意自定义 webhook、未支持的仓库事件 |
| 只读检查、摘要、草稿 | 无人值守合并主分支或批量删除 |
| 有明确“无变化”与停止条件 | 失败后无限重试 |

## 当前管理入口

- 在 ChatGPT Web、移动端或桌面 App 的当前可用入口创建和管理；具体入口取决于账号、套餐和发布进度。
- Codex CLI 和 IDE 扩展没有 Scheduled 管理界面；它们适合先测试提示词、Skill 或脚本。
- 桌面 App 可以让任务使用本地项目或隔离 worktree，但需要机器开机、App 运行且项目仍在磁盘上。
- Web 定时任务可以使用上传上下文、连接工具、Skills 和 Plugins，但不能直接访问本机文件夹。

## 三种触发边界

| 类型 | 示例 | 适合的入口 |
|---|---|---|
| 时间触发 | 每周一生成报告 | Scheduled task |
| 受支持 App 事件 | GitHub PR review、comment、commit update、merge；Gmail/Slack 等已支持事件 | Automation / Team Task，以当前连接器菜单为准 |
| 任意仓库/系统事件 | 自定义 webhook、任意 push pipeline | CI、GitHub Actions、webhook 或 SDK |

## 本组入口

- [定时任务完整指南](/skills/automations/scheduled-tasks/)：选择运行方式、写耐久提示词、设置权限与验收

## 官方来源

- [OpenAI：Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI：What’s new](https://learn.chatgpt.com/docs/whats-new)

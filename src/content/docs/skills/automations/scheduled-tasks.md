---
title: 定时与后台任务
description: Automations——在触发条件下无人值守运行 Codex，必须设计审批与退出条件。
---


**Automations** 让 Codex 在**时间表、仓库事件或外部触发**下自动执行任务，例如依赖更新检查、文档同步、周期性健康扫描。

## 本页内容

- 何时值得自动化，何时必须留人在回路里
- 触发、执行、通知、失败四类设计点
- 与 Cloud 任务、本地 CLI 脚本的关系

## 与手动任务的对比

| | 手动任务 | Automation |
|---|---|---|
| 启动 | 你发起 | 调度/事件 |
| 监督 | 你可随时打断 | 需通知与日志 |
| 风险 | 你当场判断 | 错误可能批量扩散 |
| 适合 | 探索、重构 | 重复、规则清晰 |

## 安全自动化设计

### 1. 触发条件要明确

```text
好：每周一 09:00，对 docs/ 目录检查死链
差：持续监视并自动改代码
```

### 2. 权限最小化

- 只读扫描优于自动提交
- 若自动开 PR，使用专用 bot 账号与分支保护

### 3. 退出条件

- 连续失败 N 次暂停
- diff 超过行数阈值转人工
- 触及 `AGENTS.md` 禁止目录时中止

### 4. 通知

- Slack/邮件/移动端：完成、失败、需审批
- 日志保留供审计

### 5. 人工复核点

| 可全自动 | 需人工 |
|---|---|
| 生成草稿 PR | 合并到 main |
| 列出过时依赖 | 升级 major 版本 |
| 同步公开文档 | 发布对外公告 |

## 典型模式

### 周期性维护

- 依赖漏洞报告 → 开 issue，不直接改 lockfile
- 翻译文件与源文案 diff 提醒

### 事件驱动

- 新 PR 打开 → 运行 review Skill（评论建议，不 push）
- Issue 标签 `bug` → 生成复现步骤草稿

### 长时任务

拆成多段 Automation + [交接与恢复](/guide/agent-work/handoff-and-resume/)，避免单次上下文耗尽。

## 与 Cloud / CLI 的关系

- **Cloud**：适合与 GitHub 深度集成的远程自动化
- **CLI + cron/CI**：适合内网、自定义流水线
- 选型见 [本地与云端](/guide/foundations/local-vs-cloud/) 与 [Web 与 Cloud](/guide/web-and-cloud/)

## 常见错误

- 自动化直接 `git push` 到主分支
- 无失败告警，仓库静默腐化
- 把探索性任务设成定时——浪费额度且难验收

## 验收清单

- [ ] 触发条件、权限、通知、退出条件已文档化
- [ ] 在 fork 或测试仓库演练过一次完整周期
- [ ] 团队知晓 bot 账号与审批规则

## 参考来源

- KimYx0207 CX-09 Automations
- stormzhang `27-automation.md`
- OpenAI Codex Cloud / Automations 官方说明

---

**状态：** review  
**适用产品：** Cloud / App / CLI  
**最近核验：** 2026-07-25

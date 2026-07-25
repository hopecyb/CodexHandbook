---
title: 人工审批模式
description: 何时批准、拒绝或要求 Codex 暂停——人机协作的闸门设计。
---


审批不是拖慢速度，而是**把不可逆操作留在人类一侧**。本页给可复制的决策模式。

## 审批分层

```text
自动安全区（读、分析、计划）
    ↓
提示确认区（写文件、跑命令、联网）
    ↓
强制人工区（push、删数据、发外网、改生产配置）
```

具体弹窗行为因 [产品入口](/04-product-guides/) 而异；原则一致。

## 模式一：先计划后执行

```text
规则：未看到我「批准计划」前，不得修改仓库文件。
```

适合：不熟悉代码库、生产相关、大 diff。

## 模式二：白名单命令

在 [AGENTS.md](/06-customization/agents-md/writing-effective-instructions/) 写明：

```md
允许无需再问：pnpm test、pnpm lint、git status、git diff
每次必须确认：git push、npm publish、数据库 migrate
```

与托管策略冲突时，以**更严**为准。

## 模式三：两阶段合并

1. Codex 开 draft PR 或本地分支
2. 人工 CI + review 通过后合并

Cloud 场景见 [创建 Pull Request](/04-product-guides/web-and-cloud/create-pull-requests/)。

## 模式四：只读侦察

```text
本轮只读：可以读文件、跑测试、curl 本地 API；
禁止写盘与 git commit。
```

用于审计、学习陌生项目、生产问题诊断。

## 何时拒绝并重来

| 信号 | 建议 |
|---|---|
| 计划与目标不符 | 拒绝执行，要求修订计划 |
| 改动范围蔓延 | 叫停，拆任务 |
| 测试被跳过 | 拒绝合并，要求补验证 |
| 无法解释某条命令 | 拒绝，要求说明 |

## 与 Automations 的关系

无人值守任务必须在设计时嵌入**人工闸门**——见 [定时与后台任务](/07-extensions-automation/automations/scheduled-tasks/)。

## 常见错误

- 长期勾选「始终允许」后忘记风险
- 审批走形式，不读 diff
- 用口头「别乱来」代替明确模式

## 验收清单

- [ ] 任务开始前声明采用哪种审批模式
- [ ] 高风险操作有第二人 review 或 CI 把关
- [ ] 团队对 `git push` 等命令有统一策略

---

**状态：** review  
**适用产品：** App / CLI / IDE / Cloud  
**最近核验：** 2026-07-25

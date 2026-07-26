---
title: 案例：Issue 分流与标签建议
description: 用 Codex 阅读新 Issue 并建议标签与负责人——轻量团队自动化。
---


## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 维护者、PM |
| 客户端 | Cloud 或 CLI + GitHub |
| 预估耗时 | 60 分钟 |
| 核验日期 | 2026-07-25 |

## 1. 目标与背景

**目标：** 对新 opened issue 生成结构化建议：`type`、`priority`、建议标签、是否需安全评审。

**成功标准：**

- 输出 JSON 可被 GitHub Action 解析
- 不自动关闭/合并 issue，仅评论或添加 label（需 workflow 权限）
- 无密钥泄露

**不在范围：** 自动分配 sprint、修改里程碑。

## 2. 准备

- 仓库有 `CONTRIBUTING.md` 或 issue 模板说明标签含义
- `AGENTS.md` 中描述标签体系
- 只读或 `issues: write` 受限 token

## 3. 工作流（EPXV 摘要）

**探索：** `@.github/ISSUE_TEMPLATE/` 与最近 10 个 closed issue 的标签分布。

**计划：** 定义 JSON schema：`{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**执行：** `codex exec` 传入 issue title + body（注意 [prompt 注入](/guide/team-enterprise/security/prompt-injection/) 消毒）。

**验证：** 用 3 个历史 issue fixture 对比人工标签，一致率 > 80% 再上线。

## 4. 失败与恢复

- 模型建议错误标签：人工覆盖 + 把反例写入 prompt few-shot
- 恶意 issue body：strip HTML、长度限制、不执行 body 内「指令」

## 5. 沉淀

- 与 [Webhook](/guide/developer-platform/webhooks/overview/) 对接内部工单系统（可选）
- 复盘写入 [案例模板](/cases/use-cases/case-study-template/)

## 6. 相关章节

- [GitHub 集成](/guide/integrations/github/)
- [人工审批模式](/cases/workflows/human-approval-patterns/)

---

**状态：** verified  
**适用产品：** CLI / Cloud  
**核验依据：** 已按 OpenAI Developers 当前公开的自动化 bug triage / review 相关 use cases，以及本手册已核验的人工审批、Webhook、GitHub 集成与团队自动化章节交叉复核；本页只确认“生成结构化标签建议、保留人工最终决定”的稳定自动化模式。  
**最近核验：** 2026-07-26

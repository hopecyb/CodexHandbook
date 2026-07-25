---
title: 团队规则策略
description: 在组织、仓库与个人之间分层治理命令与路径规则——可审查、可回滚。
---

团队使用 Codex 时，**规则策略**回答：哪些约束全公司统一、哪些交给仓库维护、个人还能不能放宽。本章是 [命令规则](/06-customization/rules/command-rules/) 与 [允许与拒绝模式](/06-customization/rules/allow-and-deny-patterns/) 的治理视角。

## 这篇解决什么问题

- 组织托管策略 vs 项目规则 vs 个人偏好
- 规则变更如何走审查与发布
- 与 `AGENTS.md`、Hooks、CI 的配合

## 适合谁

| 角色 | 关注点 |
|---|---|
| 工程负责人 | 底线 deny、审计要求 |
| 仓库维护者 | 项目 allowlist、测试命令 |
| 个人开发者 | 在策略允许范围内的本机补充 |

## 推荐分层模型

```text
L1 组织托管（Managed）     → 不可被项目/个人覆盖
L2 团队模板仓库            → 新仓库继承的 rules 片段
L3 项目 rules + AGENTS.md  → Git PR 审查
L4 个人配置                → 仅本机，不得削弱 L1
L5 单次任务 prompt         → 临时收紧可以，临时放宽受 L1 限制
```

与 [AGENTS.md 作用域](/06-customization/agents-md/scope-and-precedence/) 对照记忆：**规则偏执行 enforcement，AGENTS.md 偏行为说明**；两者应一致，不要各写一套矛盾要求。

## 最小可用做法

1. **先写「绝不允许」清单**（deny）：`git push --force`、读 `~/.ssh`、向公网 POST 仓库内容
2. **再写「日常允许」清单**（allow）：测试、lint、只读 git
3. **托管下发 L1**（若组织已启用 Managed configuration）
4. **每个服务/Monorepo 子包**可追加 L3，但不得与 L1 冲突
5. **季度复盘**：审批日志里反复出现的「误拦」与「误放」回流到规则 PR

## 推荐工作流：规则变更

```text
提案（issue 或 RFC）→ 安全/平台 review → PR 改规则文件
    → 在 staging 仓库试跑典型任务 → 合并 → 公告 + 更新手册页
```

大变更（例如放开网络出网）应同步更新 [Hooks 审计](/07-extensions-automation/hooks/hooks-overview/) 与 [acceptable use](/11-team-enterprise/governance/acceptable-use/)。

## 与 Hooks、CI 对齐

| 机制 | 作用 |
|---|---|
| 规则 | 执行前允许/拒绝 |
| Hooks | 复杂校验、日志、合规格式 |
| CI | 合并门禁、与本地规则同源脚本 |

避免三套逻辑各写各的：优先 **单一真相源**（如 `tools/codex-rules.json`）被 CLI 与 CI 共同引用。

## 常见错误

- 只在口头约定「不要 push」，规则文件未更新
- 个人本机放宽沙盒后，把截图当「团队标准」
- Monorepo 子项目需求不同，却共用一份过宽的全局 allowlist
- 规则变更无公告，队友突然大量审批失败

## 安全边界

- 规则不能替代 [威胁模型](/11-team-enterprise/security/threat-model/) 与事件响应流程
- 涉及受监管数据时，规则需与数据分级、留存策略一并评审
- 紧急绕过须有**审计记录**与事后复盘

## 验收清单

- [ ] 能画出本组织的 L1–L3 分工
- [ ] 仓库内规则文件有明确 owner 与 review 要求
- [ ] 与 `AGENTS.md`、Hooks、CI 无相互矛盾
- [ ] 有处理「误拦」反馈的渠道（issue 模板或内部表单）

## 参考来源

- freestylefly/CodexGuide 团队治理与 playbook
- KimYx0207 企业安全章节
- codex.bozhouai.com 团队配置案例（任务类型参考）

---

**状态：** review  
**适用产品：** CLI / App / Cloud（视组织功能）  
**最近核验：** 2026-07-25

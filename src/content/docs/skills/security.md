---
title: Skill 安全与版本
description: 安装来源、权限边界、升级与回滚——让团队 Skill 可治理。
---

Skill 是**可执行说明 + 可能附带脚本**的包。来源不可信或版本漂移时，风险不亚于 MCP。本页讲团队如何**选型、安装、升级与审计** Skill。

## 这篇解决什么问题

- 什么 Skill 不该装
- 版本固定与变更审查
- 与 Plugin 分发的关系

基础：[Skill 概述](/skills/overview/) · [创建第一个 Skill](/skills/create-your-first-skill/)

## 威胁模型（简化）

| 风险 | 表现 |
|---|---|
| 恶意 Skill | 诱导泄露密钥、执行破坏性 shell |
| 过度权限 | 读写不该碰的路径 |
| 供应链 | 依赖被篡改的第三方 Skill 仓库 |
| 陈旧 Skill | 与新 CLI 不兼容，行为异常 |

## 安装原则

1. **来源**：优先官方市场、公司自建 Git；慎装匿名 gist
2. **阅读**：安装前打开 `SKILL.md` 与附带脚本，看是否请求奇怪权限
3. **隔离**：客户项目与个人实验 Skill 分目录
4. **最小使用**：能用一个 Skill 解决就不要堆十个

## 版本与升级

| 实践 | 说明 |
|---|---|
| Pin 版本 | 在团队文档记录 Skill 名 + commit/tag |
| 变更审查 | Skill 更新走 PR，像依赖升级一样 |
|  changelog | 维护团队 Skill 集的 release note |
| 回滚 | 保留上一版副本；出问题快速切换 |

Plugin 可把 Skill 打包统一分发：[Plugins 概述](/skills/plugins/plugins-overview/)

## 与 `$skill` 调用

用户用 `$name` 显式调用时意图清晰；**模型自动选用 Skill** 时要在 `AGENTS.md` 限制可用列表与场景。

## 团队治理清单

- [ ] 允许安装的 Skill 源白名单
- [ ] 新员工 onboarding 只装「基础包」
- [ ] 季度复查仍需要的 Skill
- [ ] 与 [允许与拒绝规则](/guide/customization/rules/allow-and-deny-patterns/) 一致

## 常见错误

- 从聊天链接安装「一键万能 Skill」
- 生产仓库 AGENTS.md 引用个人路径 Skill
- 升级后不跑冒烟任务

## 参考来源

- OpenAI Codex Skills 安全指引
- KimYx0207 CX-05～CX-06
- stormzhang `20-skills.md`
- freestylefly/CodexGuide Skill playbook

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

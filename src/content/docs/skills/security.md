---
title: Skill 安全与版本
description: 安装来源、权限边界、升级与回滚，让团队 Skill 可治理。
---

Skill 不只是多了一份提示词模板。

它会影响 Codex 怎么做事，有时还会带脚本或额外资源。

所以来源不可信、内容没审过、版本漂移时，它的风险并不比 MCP 低多少。本页说明团队如何**选型、安装、升级与审计** Skill。

## 内容

- 什么 Skill 不该装
- 版本固定与变更审查
- 与 Plugin 分发的关系

## 为什么普通使用者也需要知道

如果你会做这些事：

- 安装别人分享的 Skill
- 在项目里引用团队 Skill
- 升级已有 Skill
- 把 Skill 推荐给同事

那你已经在参与风险传播链路了。

Skill 安全不能只靠“有人统一管”，每个使用者也得有基本判断力。

基础：[Skill 概述](/skills/overview/) · [创建第一个 Skill](/skills/create-your-first-skill/)

## 威胁模型（简化）

| 风险 | 表现 |
|---|---|
| 恶意 Skill | 诱导泄露密钥、执行破坏性 shell |
| 过度权限 | 读写不该碰的路径 |
| 供应链 | 依赖被篡改的第三方 Skill 仓库 |
| 陈旧 Skill | 与新 CLI 不兼容，行为异常 |

## 安装前先检查什么

遇到一个 Skill，可以先问三件事：

1. 它从哪里来？
2. 它会让 Codex多做什么？
3. 我看不看得懂它的 `SKILL.md` 和附带脚本？

如果这三个问题里有两个答不上来，就不适合直接进正式项目。

## 安装原则

1. **来源**：优先官方市场、公司自建 Git；慎装匿名 gist
2. **阅读**：安装前打开 `SKILL.md` 与附带脚本，看是否请求奇怪权限
3. **隔离**：客户项目与个人实验 Skill 分目录
4. **最小使用**：能用一个 Skill 解决就不要堆十个

## 常见误区

### 1. Skill 只是文字说明，不会有实际风险

因为它会影响工作流、工具选择、脚本执行方式，风险不只是“文风变了”。

### 2. 只要是别人常用的 Skill，就可以直接进生产项目

别人能用，不代表适合你的仓库、权限边界和团队规则。

### 3. 升级 Skill 和升级一份文档差不多

对团队来说，升级 Skill 就是在升级一段自动化行为，应该和升级依赖一样认真对待。

## 版本与升级

| 实践 | 说明 |
|---|---|
| Pin 版本 | 在团队文档记录 Skill 名 + commit/tag |
| 变更审查 | Skill 更新走 PR，像依赖升级一样 |
|  changelog | 维护团队 Skill 集的 release note |
| 回滚 | 保留上一版副本；出问题快速切换 |

Plugin 可把 Skill 打包统一分发：[Plugins 概述](/skills/plugins/plugins-overview/)

## 团队习惯

如果一个 Skill 会长期被多人复用，就不要让它停留在“谁私聊发了个路径”。  
更合适的做法是：

- 有固定来源
- 有版本记录
- 有升级说明
- 有回滚路径

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
- 看都没看 `SKILL.md` 就直接信任它的行为

## 参考来源

- OpenAI Codex Skills 安全指引
- KimYx0207 CX-05～CX-06
- stormzhang `20-skills.md`
- freestylefly/CodexGuide Skill playbook

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

---
title: 把工作流沉淀为 Skill
description: 第三次重复的流程值得写成 Skill——触发、说明与验收一体化。
---

当同一类任务（发布检查、文档同步、安全扫描）**第三次**靠复制粘贴 prompt 完成时，就该考虑 [Skill](/skills/overview/)。本章衔接 [工作流方法](/cases/workflows/) 与扩展体系。

## 这篇解决什么问题

- 何时从 prompt 模板升级为 Skill
- Skill 应包含哪些部分（说明、资源、脚本）
- 如何与团队共享与版本化

## 适合沉淀的信号

- 固定步骤 + 固定验收清单
- 需要引用仓库内模板或脚本
- 多人需要一致行为
- 希望模型在相关任务时**自动想起**该流程

不必沉淀：一次性探索、强依赖当日上下文的小修。

## 最小可用做法

1. **写清 SKILL.md**：何时触发、输入输出、禁止事项
2. **附 `references/`**： checklist、样例 diff
3. **可选 `scripts/`**：可重复执行的验证命令（与 [命令规则](/guide/customization/rules/command-rules/) 一致）
4. **在仓库 README 或 AGENTS.md 提及** Skill 名称
5. **试跑 2–3 次**，再标 `verified`

入门：[创建第一个 Skill](/skills/create-your-first-skill/)

## 推荐工作流

```text
从成功案例提取 prompt 与验收项
    → 删减为 Skill 正文（删口语、留约束）
    → 加触发描述（「合并前」「发布前」）
    → 团队 PR review
    → 写入 examples/skills/ 或内部插件
```

与 [把流程变成自动化](/skills/automations/scheduled-tasks/) 对比：Skill 偏**交互式指导**；Automation 偏**定时/无人值守**。

## 常见错误

- Skill 过长，比读 `AGENTS.md` 还累
- 无验收清单，执行质量漂移
- 脚本需要本机密钥，未写 SECURITY 说明
- 与 Hooks 规则重复且矛盾

## 安全边界

- 见 [Skill 安全与版本](/skills/security/)
- 团队 Skill 应纳入扩展批准清单（见 [Plugin 与 MCP 风险](/guide/team-enterprise/security/plugin-and-mcp-risk/)）

## 验收清单

- [ ] 新同事仅凭 Skill 能完成一次任务
- [ ] 触发条件清晰，无误触发高发
- [ ] 有版本或 CHANGELOG（团队级）
- [ ] 与源工作流文档交叉链接

## 参考来源

- KimYx0207 Skills 章节
- stormzhang `20-skills.md`
- 仓库内 [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) 与 [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

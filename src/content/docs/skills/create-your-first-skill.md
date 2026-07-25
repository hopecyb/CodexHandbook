---
title: 创建第一个 Skill
description: 从零做一个可提交的 pr-review Skill，含测试与团队共享步骤。
---


用 15–30 分钟做一个**能在仓库里复用**的 Skill，比阅读十页理论更有效。

## 适合谁

已能跑通 [首个任务](/cases/first-task/)，并愿意在测试仓库里试验。

## 目标成果

在 `.agents/skills/pr-review/` 下有一个 Skill，能对当前改动输出结构化审查意见。

## 步骤

### 1. 创建目录

```bash
mkdir -p .agents/skills/pr-review
```

### 2. 编写 SKILL.md

```md
---
name: pr-review
description: 审查 git diff，列出阻断问题、测试缺口与风格建议。在用户提到 review、审查、合并前检查时使用。不用于写新功能。
---

# PR 审查

## 输入
- 默认对比分支：main（若不存在则用默认分支）

## 流程
1. 列出变更文件与变更类型（功能/修复/重构/文档）
2. 对每个逻辑变更：是否缺测试、是否破坏 API
3. 检查是否含密钥、调试日志、过大无关 diff
4. 输出：
   - 🔴 阻断：必须修
   - 🟡 建议：应修
   - 🟢 通过：已满足 AGENTS.md 要求

## 禁止
- 不要 git push
- 不要修改未讨论的公共 API
```

### 3. 本地试用

在 Codex 中打开该仓库，尝试：

```text
$pr-review 请审查我当前未提交的改动
```

或自然语言：「按团队习惯审查一下 diff，重点看测试。」

### 4. 迭代 description

若模型**从不自动选用**，收紧或补充 `description` 中的触发词。若**误用太勤**，加上「何时不用」。

### 5. 提交团队共享

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

在团队 README 或 `AGENTS.md` 中加一句：「合并前可用 `$pr-review`。」

## 验收清单

- [ ] `$pr-review` 能跑通且不执行危险 git 操作
- [ ] 输出包含分级结论，而非泛泛而谈
- [ ] `description` 在一句话内说清触发场景
- [ ] 已对照 [权限与审批](/guide/permissions-and-sandbox/) 检查脚本需求（本示例无脚本）

## 下一步

- 把 [探索—计划—执行—验证](/prompts/templates/understand/) 固化成 Skill
- 需要接 GitHub API 时，再引入 [MCP](/skills/mcp/mcp-overview/)

## 参考来源

- OpenAI Codex Skills 官方示例与 `skill-creator`（若环境提供）

---

**状态：** review  
**适用产品：** App / CLI / IDE  
**最近核验：** 2026-07-25

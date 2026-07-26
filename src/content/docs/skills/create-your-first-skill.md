---
title: 创建第一个 Skill
description: 从零做一个可提交的 pr-review Skill，含测试与团队共享步骤。
---


如果你已经会下任务，但还没真正做过 Skill，这页说的是第一个 Skill 的基本做法。

用 15–30 分钟做一个**能在仓库里复用**的 Skill，通常比先读大量理论更直接。比较好的起点，是一个边界很清楚的小 Skill。

## 适合谁

已能跑通 [首个任务](/cases/first-task/)，并愿意在测试仓库里试验。

## 为什么推荐从 `pr-review` 开始

因为它有几个优点：

- 输入相对清楚
- 风险比“直接改代码”低
- 好不好用很容易判断
- 还能顺手帮你理解 Skill 的触发方式和边界写法

它很适合用来练习怎么把一个工作套路写成可复用的东西。

## 目标成果

在 `.agents/skills/pr-review/` 下有一个 Skill，能对当前改动输出结构化审查意见。

## 最低目标

第一次做 Skill，可以先做到这三件事：

1. 能被识别
2. 能稳定执行一个明确流程
3. 不会顺手做危险动作

这三点明确后，后续迭代会顺很多。

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

### 4. 先测显式，再测隐式

建议先不要直接测试自动触发。

可以按下面的顺序试：

1. 先用 `$pr-review` 显式调用
2. 确认流程和输出没问题
3. 再试自然语言触发

这样更容易判断问题出在 Skill 内容本身，还是 `description` 的触发条件不够清楚。

### 5. 迭代 description

若模型**从不自动选用**，收紧或补充 `description` 中的触发词。若**误用太勤**，加上「何时不用」。

### 6. 提交团队共享

```bash
git add .agents/skills/pr-review
git commit -m "docs: add pr-review skill for Codex"
```

在团队 README 或 `AGENTS.md` 中加一句：「合并前可用 `$pr-review`。」

## 常见误解

### 1. 第一个 Skill 应该做得越全越好

很多时候正相反。第一个 Skill 越小、越聚焦，越容易判断它到底有没有价值。

### 2. Skill 的重点不是写得“聪明”

更重要的是写得**边界清楚**。

它该做什么、不该做什么，比“显得厉害”更重要。

### 3. 只要 Skill 能跑就算成功

一个有用的 Skill，至少要满足：

- 别人看得懂什么时候该用
- 输出有固定结构
- 不会顺手做危险操作

## 验收清单

- [ ] `$pr-review` 能跑通且不执行危险 git 操作
- [ ] 输出包含分级结论，而非泛泛而谈
- [ ] `description` 在一句话内说清触发场景
- [ ] 已对照 [权限与审批](/guide/permissions-and-sandbox/) 检查脚本需求（本示例无脚本）

从一个“小而稳”的 Skill 开始，更容易把一套清楚的工作套路稳定复用起来。

## 下一步

- 把 [探索—计划—执行—验证](/prompts/templates/understand/) 固化成 Skill
- 需要接 GitHub API 时，再引入 [MCP](/skills/mcp/mcp-overview/)

## 参考来源

- OpenAI Codex Skills 官方示例与 `skill-creator`（若环境提供）

---

**状态：** verified  
**适用产品：** App / CLI / IDE  
**核验依据：** 当前 Codex 运行时仍支持项目内技能目录、以 `SKILL.md` 定义技能，以及显式调用进行试跑；本页是首个 Skill 的稳定入门练习。  
**最近核验：** 2026-07-26

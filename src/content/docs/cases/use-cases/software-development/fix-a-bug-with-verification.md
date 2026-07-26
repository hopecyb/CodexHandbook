---
title: 案例：带验证的 Bug 修复
description: 从失败测试到最小修复与回归——开发者最常见闭环示例。
---


## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 开发者 |
| 客户端 | CLI 或 IDE（本地仓库） |
| 预估耗时 | 30–60 分钟 |
| 核验日期 | 2026-07-25 |

## 1. 目标与背景

**目标：** 修复一个已用单元测试捕获的回归 bug，且补测试防止再犯。

**成功标准：**

- 原失败测试通过
- 全量测试仍绿
- diff 仅涉及必要文件

**不在范围：** 大规模重构、升级依赖 major 版本。

## 2. 准备

- 克隆仓库，`pnpm install`（或按 `AGENTS.md`）
- 确认能本地复现失败：`pnpm test -- path/to/failing.test.ts`
- 分支：`fix/issue-123-short-desc`

## 3. 工作流

### 探索

```text
先不要改代码。阅读失败测试 @tests/auth/login.test.ts 与实现 @src/auth/login.ts，
用 5 条以内说明失败原因，引用断言与堆栈行号。
```

### 计划

```text
给出修复计划：改哪些文件、是否需新测试、如何验证。
等我回复「执行」再改代码。
```

### 执行

```text
执行计划第 1–2 步。每步后只跑相关测试。
```

### 验证

```text
跑完整测试套件；总结 diff 供我 review；不要 git push。
```

人工：读 diff，确认无无关改动，按 [审查 diff](/guide/quality/review-diffs/) 检查。

## 4. 失败与恢复

| 问题 | 处理 |
|---|---|
| 修完引入新失败 | `git stash` 或回退 commit，缩小改动 |
| 根因判断错误 | 回到探索，要求新假设 |
| 测试 flaky | 先稳定测试再修业务逻辑 |

## 5. 沉淀

- 若此类 bug 重复出现，在 `AGENTS.md` 加一条约定
- 可提取 `$regression-guard` Skill：合并前跑关键测试列表

## 6. 相关章节

- [先诊断再修复](/cases/workflows/diagnose-before-fixing/)
- [开发者学习路径](/guide/learning-paths/developer/)
- [运行测试](/guide/quality/run-tests/)

---

**状态：** verified  
**适用产品：** CLI / IDE  
**核验依据：** 已按本手册当前已核验的诊断、运行测试、审查差异与开发者路径章节交叉复核；本页内容限定为“从失败测试到最小修复与回归验证”的稳定开发闭环案例。  
**最近核验：** 2026-07-26

---
title: 案例：定时文档链接检查
description: 用非交互 Codex 或 CI 扫描站内死链——团队自动化入门案例。
---

## 元信息

| 字段 | 内容 |
|---|---|
| 适用读者 | 团队维护者、Technical Writer |
| 客户端 | CLI + GitHub Actions |
| 预估耗时 | 45–90 分钟（含首次 CI 配置） |
| 核验日期 | 2026-07-25 |

## 1. 目标与背景

**目标：** 每周自动检查文档站内链接与关键外部链接，PR 或 issue 报告死链。

**成功标准：**

- CI 或定时 workflow 可重复运行
- 输出结构化死链列表（文件、行号、URL）
- 不修改无关文件、不 push

**不在范围：** 全站爬虫、登录后页面、性能测试。

## 2. 准备

- 文档站点源码在 Git 仓库（如本手册 `src/content/docs/`）
- 已有 `npm run build` 或 link checker 脚本（可选）
- 只读 `GITHUB_TOKEN` 与 `OPENAI_API_KEY` 放在 org secrets

## 3. 工作流

### 探索

```text
阅读 @src/content/docs/ 与现有 package.json scripts。
列出当前是否有 link check；若无，建议最小方案：markdown 内链 + 官方 docs 外链抽样。
不要改文件。
```

### 计划

```text
给出计划：prompt 文件路径、CI workflow 名、结构化 JSON 输出字段。
等我确认后再创建文件。
```

### 执行

- 添加 `prompts/ci/link-check.md`
- 添加 `.github/workflows/docs-link-check.yml`（示意，见 [脚本与流水线](/guide/developer-platform/non-interactive/scripts-and-pipelines/)）
- 使用 [codex exec](/guide/developer-platform/non-interactive/codex-exec/) 或纯脚本 + Codex 二次归类

### 验证

- 本地 `codex exec` 一次
- CI 手动 `workflow_dispatch`
- 故意插入死链，确认 `pass: false`

## 4. 失败与恢复

| 问题 | 处理 |
|---|---|
| 外部站临时 503 | 区分硬死链与软失败，prompt 中定义 |
| JSON 解析失败 | 收紧 [结构化输出](/guide/developer-platform/non-interactive/structured-output/) 约束 |
| 配额耗尽 | 改每周定时 + 增量检查 |

## 5. 沉淀

- 第三次跑通后沉淀为 Skill：`docs-link-audit`
- 团队 [命令规则](/guide/customization/rules/team-rules/) 允许 `npm run build` 与只读 git

## 6. 相关章节

- [长任务管理](/cases/workflows/long-running-task-management/)
- [Automations 定时任务](/skills/automations/scheduled-tasks/)
- [团队学习路径](/guide/learning-paths/team/)

---

**状态：** verified  
**适用产品：** CLI  
**核验依据：** 已按本手册当前已核验的非交互模式、脚本与流水线、结构化输出、团队规则与自动化章节交叉复核；本页内容限定为“定时链接检查、结构化报告与失败停机”的稳定团队自动化案例。  
**最近核验：** 2026-07-26

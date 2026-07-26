# 提示词、Skill 与案例体系

## 1. 目标

实例库不是结果截图或“万能提示词”集合。每个实例都应说明适用条件、输入、权限边界、验证方式、失败模式和可扩展方向。

```text
examples/
├── README.md
├── prompts/
│   ├── beginner/
│   ├── creation/
│   ├── development/
│   ├── research/
│   ├── data/
│   ├── documents/
│   ├── productivity/
│   ├── team/
│   └── meta-workflows/
├── skills/
│   ├── beginner/
│   ├── content/
│   ├── development/
│   ├── design/
│   ├── documents/
│   ├── data/
│   ├── research/
│   ├── automation/
│   ├── integrations/
│   └── team/
├── configurations/
│   ├── agents-md/
│   ├── rules/
│   ├── profiles/
│   ├── hooks/
│   ├── mcp/
│   └── automations/
└── complete-workflows/
    ├── creator/
    ├── developer/
    ├── researcher/
    ├── individual/
    └── team/
```

`examples/` 存放可复制或运行的材料，`docs/` 负责解释原理和方法。

## 2. 提示词库

### 2.1 任务分类

| 编号 | 类型 | 典型任务 |
|---|---|---|
| 01 | `understand` | 解释、总结、梳理、代码库理解 |
| 02 | `create` | 写作、设计、代码和文档生成 |
| 03 | `change` | 编辑、重构、迁移和转换 |
| 04 | `diagnose` | 调试、排错和根因分析 |
| 05 | `review` | 代码、文章、设计和安全审查 |
| 06 | `research` | 搜索、比较、引用和事实核验 |
| 07 | `plan` | 需求澄清、方案设计和任务规划 |
| 08 | `automate` | 定时任务、监控和批处理 |
| 09 | `coordinate` | 多 Agent、委派和交接 |
| 10 | `learn` | 教学、练习、反馈和能力提升 |

### 2.2 分级

- **极简版**：适合目标明确、上下文充分的任务。
- **推荐版**：包含目标、背景、输入、约束、验收标准和权限边界。
- **教学版**：逐段解释各部分的用途、可替换变量和删除后果。

### 2.3 单篇模板

```markdown
---
id: prompt.fix-bug-with-tests
title: 修复 Bug 并补充测试
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: verified
last_verified: YYYY-MM-DD
---

# 使用场景
# 使用前准备
# 极简版提示词
# 推荐版提示词
# 教学版拆解
# 可替换变量
# Codex 可能提出的问题
# 如何审查执行计划
# 如何验证结果
# 常见失败方式
# 继续追问示例
# 相关内容
```

### 2.4 质量检查

- 目标和最终产物是否明确
- 是否提供必要背景与输入
- 是否限制可修改范围
- 是否定义完成标准
- 是否要求合适的验证
- 是否说明敏感数据和危险操作
- 是否允许 Codex 在信息不足时提问
- 是否避免要求模型暴露隐藏推理

## 3. Skill 实例库

### 3.1 难度阶梯

| 等级 | 结构 | 教学目标 |
|---|---|---|
| Level 1 | 仅 `SKILL.md` | 固定方法和输出规范 |
| Level 2 | 加 `references/`、`templates/` | 管理参考资料与模板 |
| Level 3 | 加 `scripts/`、`tests/`、`fixtures/` | 执行并验证重复任务 |
| Level 4 | 连接 MCP、App 或 Plugin | 使用外部工具与身份认证 |
| Level 5 | 完整测试、权限、版本和回滚 | 团队生产级能力 |

### 3.2 主题目录

```text
examples/skills/
├── beginner/
│   ├── explain-a-topic/
│   ├── summarize-files/
│   └── format-markdown/
├── content/
│   ├── edit-article/
│   ├── translate-content/
│   ├── generate-social-posts/
│   └── build-content-package/
├── development/
│   ├── diagnose-bug/
│   ├── review-changes/
│   ├── scaffold-feature/
│   ├── migrate-api/
│   └── release-check/
├── design/
│   ├── frontend-from-brief/
│   ├── image-direction/
│   └── visual-qa/
├── documents/
│   ├── create-docx/
│   ├── analyze-spreadsheet/
│   ├── generate-slides/
│   └── inspect-pdf/
├── research/
│   ├── source-backed-research/
│   ├── compare-products/
│   └── literature-review/
├── automation/
│   ├── daily-report/
│   ├── monitor-status/
│   ├── issue-triage/
│   └── inbox-workflow/
└── team/
    ├── onboarding-guide/
    ├── coding-standard-check/
    ├── security-review/
    └── project-handoff/
```

### 3.3 单个 Skill 结构

```text
skill-name/
├── README.md
├── SKILL.md
├── references/
├── templates/
├── scripts/
├── fixtures/
├── expected/
├── tests/
├── SECURITY.md
└── CHANGELOG.md
```

只创建实例实际需要的目录。`SECURITY.md` 对需要网络、凭据或外部写入的实例为必需；`CHANGELOG.md` 对生产级实例为必需。

### 3.4 教学页模板

```markdown
# 这个 Skill 解决什么问题
# 何时会被触发
# 何时不应使用
# 文件结构
# SKILL.md 逐段解析
# 资源和脚本如何加载
# 输入与输出约定
# 权限与安全边界
# 测试方法
# 常见失败
# 如何扩展成自己的 Skill
```

## 4. 配置实例

配置实例覆盖 `AGENTS.md`、Rules、Profiles、Hooks、MCP 和 Automations。每个实例必须同时提供：

- 最小可用配置
- 逐项注释版本
- 适用范围和优先级
- 安全影响
- 验证步骤
- 撤销方式

包含凭据的配置只能使用明显的虚构占位值，禁止提交真实密钥。

## 5. 完整案例

### 5.1 难度

| 难度 | 范围 |
|---|---|
| `starter` | 10–20 分钟，无技术背景要求 |
| `guided` | 30–60 分钟，提供完整步骤 |
| `practical` | 1–3 小时，接近真实工作 |
| `advanced` | 跨工具、长任务或多 Agent |
| `team` | 包含角色、审批、安全与治理 |

### 5.2 目录模板

```text
case-name/
├── README.md
├── brief.md
├── inputs/
├── prompts/
├── checkpoints/
├── expected/
├── validation.md
├── variations.md
└── lessons-learned.md
```

### 5.3 正文模板

```markdown
# 案例目标
# 最终产物
# 适合谁
# 前置知识
# 预计时间
# 使用的 Codex 形态
# 使用的能力与工具
# 权限和风险提示

## 1. 理解任务
## 2. 准备输入
## 3. 编写初始提示词
## 4. 审查 Codex 的计划
## 5. 执行与中途引导
## 6. 检查最终结果
## 7. 处理失败或偏差
## 8. 复盘

# 可选挑战
# 相关教程、提示词与 Skills
```

## 6. 统一元数据

```yaml
id: use-case.build-landing-page
title: 从需求创建落地页
content_type: case-study
audience: [beginner, creator, developer]
difficulty: guided
products: [app, cli, ide]
capabilities:
  - prompting
  - image-generation
  - browser
  - file-editing
  - visual-verification
platforms: [macos, windows, linux]
locales:
  source: zh-CN
  available: [zh-CN]
status: verified
official_basis:
  - https://example.invalid/replace-with-official-source
last_verified: YYYY-MM-DD
```

实际内容不得保留示例 URL 或日期。统一元数据用于生成角色、难度、产品、平台、能力、任务类型、核验状态和翻译完成度索引。

## 7. 收录门槛

实例只有满足以下条件才能标记为 `verified`：

1. 输入材料完整且不含敏感数据。
2. 操作步骤能够复现。
3. 产品与平台范围明确。
4. 结果具有可检查的验收标准。
5. 不隐藏关键失败步骤。
6. 危险操作有显著提示。
7. 外部资料注明来源和核验日期。
8. 至少经过一次独立复核。

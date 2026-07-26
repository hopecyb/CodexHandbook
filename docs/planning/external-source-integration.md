# 外部资料整合计划

本文记录如何吸收现有中文 Codex 教程、指南和长文资料。目标不是搬运外部内容，而是把外部资料转化为本手册的选题来源、缺口清单、事实核验入口和案例灵感。

## 1. 整合原则

1. 以本手册的章节体系为主，不按外部来源新增栏目。
2. 只吸收主题、结构启发、事实线索和案例类型，不复制外部原文表达。
3. 功能、价格、可用性、安全和版本信息必须回到官方资料复核。
4. 每篇正文底部可保留“参考来源”，但正文必须用本手册的读者视角重写。
5. 易过时页面必须标注核验日期和适用版本。
6. 外部资料中相互冲突的说法不直接采用，先进入待核验清单。

## 2. 来源定位

| 来源 | 定位 | 可借鉴内容 | 主要整合位置 | 优先级 |
|---|---|---|---|---|
| freestylefly/CodexGuide | Codex 实践知识库 | 学习路线、入口地图、AGENTS.md、沙盒审批、团队 playbook、案例结构、官方资料索引 | `03-learning-paths`、`06-customization`、`09-workflows`、`10-use-cases`、`11-team-enterprise`、`12-reference` | 高 |
| KimYx0207/AI-Coding-Guide-Zh `docs/codex` | 多工具教程中的 Codex 专章 | App、Commands、项目指令、MCP、Skills、Plugins、Subagents、Automations、Review/PR、安全企业、与 Claude Code 对比 | `04-product-guides`、`05-core-capabilities`、`07-extensions-automation`、`08-developer-platform`、`11-team-enterprise`、`12-reference` | 高 |
| stormzhang/ai-coding-guide `codex` | 小白教程集和功能覆盖清单 | 39 篇小白教程目录、安装、价格、第三方模型、首个任务、desktop/CLI/IDE/cloud、prompting、权限、安全、MCP、Skills、Plugins、Hooks、Worktrees、FAQ、术语 | `02-getting-started`、`04-product-guides`、`05-core-capabilities`、`07-extensions-automation`、`12-reference` | 中高 |
| codex.bozhouai.com 橙皮书 | PDF/长文式系统教程 | 安装配置、核心功能、标准工作流、任务模板、App/CLI/IDE/Web、自动化、插件、Skill、MCP、Sites、Git/GitHub、云端、记忆、Chrome 插件、端到端案例 | `04-product-guides`、`07-extensions-automation`、`09-workflows`、`10-use-cases` | 高 |

## 3. 章节映射

| 外部主题 | 本手册目标章节 | 处理方式 |
|---|---|---|
| Codex 定位、AI 编程工具演进、适合任务 | `00-start-here/what-is-codex.md`、`00-start-here/codex-capability-map.md`、`01-foundations/agent-basics.md` | 作为解释框架参考，用初学者语言改写 |
| 入口选择：App、CLI、IDE、Cloud、移动端 | `02-getting-started/choose-your-codex-client.md`、`04-product-guides/*` | 补齐决策表、适用场景和常见误区 |
| 安装、登录、订阅、认证 | `02-getting-started/*`、`04-product-guides/*/installation*.md` | 只保留当前有效流程，逐页标注核验日期 |
| 首个任务、低风险练习、第一次改代码 | `02-getting-started/run-your-first-task.md`、`03-learning-paths/beginner/*` | 统一为“安全练习项目 -> 执行 -> 检查 -> 撤销”的闭环 |
| CLI 命令、交互模式、非交互模式、脚本化 | `04-product-guides/cli/*`、`08-developer-platform/non-interactive/*`、`12-reference/commands/` | 产品手册讲操作，参考区维护参数表 |
| 桌面 App 任务、并行、工作树、diff、终端 | `04-product-guides/desktop-app/*` | 补截图核验和真实任务状态说明 |
| Web/Cloud、GitHub、PR、远程任务 | `04-product-guides/web-and-cloud/*`、`04-product-guides/integrations/github.md`、`08-developer-platform/ci-cd/*` | 区分普通用户操作和开发者平台化用法 |
| AGENTS.md、项目指令、配置、Rules | `06-customization/*` | 形成“个人偏好、项目规则、团队规则、临时提示词”的优先级体系 |
| Skills | `07-extensions-automation/skills/*`、`examples/skills/` | 写成完整专题，配最小可运行 Skill 示例 |
| Plugins / Connectors | `07-extensions-automation/plugins/*` | 解释技能、MCP、App、Connector 的关系和权限边界 |
| MCP | `07-extensions-automation/mcp/*` | 讲连接、鉴权、工具设计、调试和安全 |
| Hooks | `07-extensions-automation/hooks/*` | 重点放在校验、日志、审计和团队安全，不写成纯脚本合集 |
| Automations、长期任务、监控 | `07-extensions-automation/automations/*`、`09-workflows/long-running-task-management.md` | 强调触发条件、退出条件、审批和通知 |
| Subagents、多 Agent、并行协作 | `05-core-capabilities/agent-work/subagents.md`、`09-workflows/multi-agent-coordination.md` | 讲什么时候拆、怎么交接、如何验收 |
| 标准工作流、任务模板、验收清单 | `09-workflows/*`、`examples/prompts/`、`templates/` | 转化为可复用流程与模板 |
| 实战案例 | `10-use-cases/*`、`examples/complete-workflows/` | 不复刻外部案例，采用同类任务重新设计 |
| 团队、企业、安全治理 | `11-team-enterprise/*`、`12-reference/security-checklists/` | 汇总为治理模型、权限策略和检查清单 |
| FAQ、术语、速查表 | `12-reference/*` | 合并同义问题，避免正文重复解释 |

## 4. 内容缺口优先级

### P0：补齐后能明显强化完整度

- `07-extensions-automation/skills/*`
- `07-extensions-automation/mcp/*`
- `07-extensions-automation/plugins/*`
- `07-extensions-automation/automations/*`
- `09-workflows/explore-plan-execute-verify.md`
- `09-workflows/human-approval-patterns.md`
- `10-use-cases/case-study-template.md`

### P1：增强开发者和团队深度

- `04-product-guides/cli/non-interactive-mode.md`
- `04-product-guides/cli/configuration.md`
- `04-product-guides/web-and-cloud/connect-github.md`
- `04-product-guides/web-and-cloud/create-pull-requests.md`
- `05-core-capabilities/agent-work/subagents.md`
- `06-customization/agents-md/*`
- `08-developer-platform/ci-cd/code-review-automation.md`
- `11-team-enterprise/security/plugin-and-mcp-risk.md`

### P2：完善参考和案例体验

- `12-reference/commands/`
- `12-reference/configuration-reference/`
- `12-reference/permission-matrix/`
- `12-reference/prompt-pattern-index.md`
- `12-reference/skill-pattern-index.md`
- `10-use-cases/software-development/`
- `10-use-cases/content-creation/`
- `10-use-cases/team-automation/`

## 5. 单篇整合流程

1. 选择一个目标页面，确认它在 `chapter-outline.md` 中的职责。
2. 阅读外部资料中相关章节，只记录主题、事实线索、例子类型和读者问题。
3. 回到官方文档、OpenAI 帮助中心或产品实测核验易变事实。
4. 用本手册模板重写页面，不沿用外部表达顺序。
5. 在页面底部列出参考来源和最近核验日期。
6. 检查是否和已有页面重复；重复内容改为链接到权威页。
7. 把可复用提示词、Skill、配置或案例材料放入 `examples/` 或 `templates/`。

## 6. 推荐页面模板

```md
---
title: 页面标题
description: 这篇文章解决的问题
status: draft
verified_on:
---

## 这篇解决什么问题

## 适合谁

## 先理解一个核心概念

## 最小可用做法

## 推荐工作流

## 常见错误

## 安全边界

## 验收清单

## 参考来源
```

不是每篇都必须使用全部小节；产品手册页可以偏操作，能力专题页可以偏概念，案例页必须覆盖准备、执行、检查、失败恢复和复盘。

## 7. 引用规范

- 外部社区教程放在“参考来源”，不作为唯一事实依据。
- 官方文档、帮助中心、GitHub Release、产品内实测记录优先级高于社区教程。
- 可以短句引用关键术语，但不复制长段落。
- 如果外部资料提供了截图或案例，只借鉴问题类型，重新制作本项目自己的截图、数据和示例。
- 对价格、模型、套餐、可用地区、版本号、命令参数、权限策略等时间敏感信息，必须在页面中标记核验日期。

## 8. 阶段计划

### M2：产品与能力补齐

用 stormzhang 目录和 KimYx0207 Codex 专章做功能覆盖清单，补齐 CLI、IDE、Cloud、配置、安全和 Review/PR 的主流程。

### M3：个性化与工作流

参考 CodexGuide 的团队 playbook、AGENTS.md 和任务沉淀思路，完成 `06-customization` 与 `09-workflows` 的核心页面。

### M4：扩展与实例

参考 KimYx0207、stormzhang 和橙皮书的 Skills、MCP、Plugins、Automations 内容，完成 `07-extensions-automation` 的最小闭环，并补第一批 `examples/`。

### M5：案例与开发者平台

参考橙皮书的端到端案例形态，但重新设计案例主题，完成 `10-use-cases` starter 案例和 `08-developer-platform` 起步页。

## 9. 当前结论

本手册当前在基础概念、学习路径、产品入口、上下文、提示词、质量验证和参考体系上已经比多数外部资料更像完整手册。下一阶段应重点吸收外部资料在高级功能、扩展生态、标准工作流和案例库方面的密度，把“结构完整”推进为“结构与实战都完整”。

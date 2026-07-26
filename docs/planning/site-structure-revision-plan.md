# Four-Module Site Structure Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将公开网站从编号型内部章节结构重组为「Codex 指南 / 提示词 / Skills / 实战案例」四个用户可理解的一级模块。

**Architecture:** Starlight 仍作为最小网站框架，`src/content/docs/` 只保留公开内容入口。旧的编号目录先不删除，迁移时优先通过新增四个模块首页和导航建立新结构，再逐步搬运或重定向旧内容，降低一次性改动风险。

**Tech Stack:** Astro 7、Starlight、MD/MDX、`astro.config.mjs` sidebar 配置、`pnpm build` 验证。

---

## 1. 目标信息架构

公开网站一级导航固定为四项：

```text
Codex 指南    /guide/
提示词        /prompts/
Skills        /skills/
实战案例      /cases/
```

四个模块的职责边界：

| 模块 | 负责内容 | 不负责内容 |
|---|---|---|
| Codex 指南 | Codex 是什么、客户端选择、安装上手、权限、沙箱、上下文、文件、验证、故障排查 | 大量提示词模板、Skill 编写教程、完整案例流水账 |
| 提示词 | 任务表达、上下文组织、约束、验收标准、长任务提示、提示词调试、提示词模板 | 产品安装步骤、Skill 文件结构、端到端案例 |
| Skills | Skill 概念、使用、编写、`SKILL.md`、`references/`、`templates/`、`scripts/`、测试、安全 | 通用提示词教学、产品手册、普通案例 |
| 实战案例 | 真实任务从目标到验证的完整流程 | 概念权威解释、API/配置参考全集 |

## 2. 目标目录结构

第一阶段目标结构：

```text
src/content/docs/
├── index.mdx
├── guide/
│   ├── index.md
│   ├── start-here.md
│   ├── what-is-codex.md
│   ├── choose-your-client.md
│   ├── desktop-app.md
│   ├── cli.md
│   ├── ide.md
│   ├── web-and-cloud.md
│   ├── permissions-and-sandbox.md
│   ├── context-and-files.md
│   ├── verification.md
│   └── troubleshooting.md
├── prompts/
│   ├── index.md
│   ├── basics.md
│   ├── task-anatomy.md
│   ├── goals-and-context.md
│   ├── constraints-and-boundaries.md
│   ├── define-done.md
│   ├── long-running-tasks.md
│   ├── prompt-debugging.md
│   ├── anti-patterns.md
│   └── templates/
│       ├── index.md
│       ├── understand.md
│       ├── create.md
│       ├── change.md
│       ├── diagnose.md
│       ├── review.md
│       ├── research.md
│       └── automate.md
├── skills/
│   ├── index.md
│   ├── overview.md
│   ├── when-to-use-skills.md
│   ├── use-a-skill.md
│   ├── create-your-first-skill.md
│   ├── skill-anatomy.md
│   ├── references.md
│   ├── templates.md
│   ├── scripts-and-tests.md
│   ├── security.md
│   └── examples/
│       ├── index.md
│       ├── writing-skill.md
│       ├── review-skill.md
│       ├── research-skill.md
│       └── automation-skill.md
└── cases/
    ├── index.md
    ├── first-task.md
    ├── write-an-article.md
    ├── build-a-website.md
    ├── understand-a-codebase.md
    ├── fix-a-bug.md
    ├── review-a-pr.md
    ├── research-with-sources.md
    ├── create-a-slide-deck.md
    ├── analyze-a-spreadsheet.md
    ├── automate-a-daily-report.md
    └── coordinate-multiple-agents.md
```

第二阶段再决定是否删除旧编号目录。第一阶段完成后，旧目录可以暂时保留为未公开或低优先级侧边栏内容，避免破坏已有页面。

## 3. 旧结构迁移映射

| 现有目录 | 新归属 |
|---|---|
| `00-start-here/` | `guide/` |
| `01-foundations/` | `guide/` |
| `02-getting-started/` | `guide/` |
| `03-learning-paths/` | `guide/` 与 `cases/` 的入口内容 |
| `04-product-guides/` | `guide/` |
| `05-core-capabilities/prompting/` | `prompts/` |
| `05-core-capabilities/context/` | `guide/context-and-files.md` 与 `prompts/goals-and-context.md` |
| `05-core-capabilities/quality/` | `guide/verification.md` 与案例中的验证段落 |
| `05-core-capabilities/tools/` | `guide/` 的产品与能力说明 |
| `07-extensions-automation/skills/` | `skills/` |
| `07-extensions-automation/mcp/` | `skills/` 或后续扩展专题 |
| `09-workflows/` | `cases/` |
| `10-use-cases/` | `cases/` |

## 4. 文件职责

| 文件 | 责任 |
|---|---|
| `astro.config.mjs` | 配置 Starlight 标题、语言、顶部/侧边导航；公开导航应只展示四个模块 |
| `src/content/docs/index.mdx` | 首页，展示四模块入口并将 CTA 指向 `/guide/` |
| `src/content/docs/guide/index.md` | Codex 指南模块首页，解释新读者应该如何进入 |
| `src/content/docs/prompts/index.md` | 提示词模块首页，解释提示词学习路径与模板入口 |
| `src/content/docs/skills/index.md` | Skills 模块首页，解释 Skill 的学习路径与示例入口 |
| `src/content/docs/cases/index.md` | 实战案例模块首页，解释案例的阅读方式和验证标准 |
| `src/styles/custom.css` | 顶部导航和首页模块卡片的视觉细节 |
| `docs/planning/content-architecture.md` | 更新规划说明，记录公开网站采用四模块结构 |
| `docs/planning/chapter-outline.md` | 可保留旧编号大纲，但标注为历史/详细素材池 |

## 5. 实施任务

### Task 1: 建立四模块内容入口

**Files:**
- Create: `src/content/docs/guide/index.md`
- Create: `src/content/docs/prompts/index.md`
- Create: `src/content/docs/skills/index.md`
- Create: `src/content/docs/cases/index.md`

- [ ] **Step 1: 创建 `guide/index.md`**

```markdown
---
title: Codex 指南
description: 认识 Codex、选择客户端、完成第一次任务，并理解权限、上下文和验证。
---

# Codex 指南

这里帮助你理解 Codex 是什么、适合做什么，以及如何从第一次使用走向稳定工作流。

## 推荐顺序

1. 从认识 Codex 开始。
2. 选择适合自己的客户端。
3. 完成第一个安全可检查的任务。
4. 学会管理权限、文件、上下文和验证。
```

- [ ] **Step 2: 创建 `prompts/index.md`**

```markdown
---
title: 提示词
description: 学会把任务、背景、输入、约束和验收标准讲清楚。
---

# 提示词

提示词模块关注如何把任务表达清楚，让 Codex 知道目标、上下文、边界和完成标准。

## 推荐顺序

1. 学会描述任务目标。
2. 提供必要背景和输入。
3. 写清约束与权限边界。
4. 定义可检查的完成标准。
5. 使用模板处理常见任务。
```

- [ ] **Step 3: 创建 `skills/index.md`**

```markdown
---
title: Skills
description: 学会使用、编写、测试和维护 Codex Skills。
---

# Skills

Skills 用来把稳定方法、参考资料、模板和脚本封装成可复用能力。

## 推荐顺序

1. 理解 Skill 适合解决什么问题。
2. 学会使用现成 Skill。
3. 编写第一个 `SKILL.md`。
4. 引入参考资料、模板、脚本和测试。
5. 为团队场景补充安全和版本规则。
```

- [ ] **Step 4: 创建 `cases/index.md`**

```markdown
---
title: 实战案例
description: 通过真实任务学习 Codex 的完整执行、检查和复用流程。
---

# 实战案例

实战案例展示如何从一个真实目标出发，完成提示、执行、检查、验证和复用。

## 案例格式

每个案例都应包含目标、准备材料、推荐提示词、执行过程、人工检查点、验证方式、失败处理和可复用模板。
```

### Task 2: 更新 Starlight 导航

**Files:**
- Modify: `astro.config.mjs`

- [ ] **Step 1: 将 sidebar 调整为四个公开模块**

在 `starlight({ ... })` 配置中，将公开 sidebar 的前置结构调整为：

```js
sidebar: [
	{
		label: 'Codex 指南',
		translations: { en: 'Codex Guide' },
		items: [{ autogenerate: { directory: 'guide' } }],
	},
	{
		label: '提示词',
		translations: { en: 'Prompts' },
		items: [{ autogenerate: { directory: 'prompts' } }],
	},
	{
		label: 'Skills',
		translations: { en: 'Skills' },
		items: [{ autogenerate: { directory: 'skills' } }],
	},
	{
		label: '实战案例',
		translations: { en: 'Cases' },
		items: [{ autogenerate: { directory: 'cases' } }],
	},
]
```

- [ ] **Step 2: 保留旧目录但从公开主导航移除**

旧编号目录暂时不删除。若 Starlight 仍会为旧页面生成路由，这是可接受的；但 sidebar 不再以旧编号目录作为主要入口。

### Task 3: 设计顶部菜单栏

**Files:**
- Create or Modify: `src/components/Header.astro`
- Modify: `astro.config.mjs`
- Modify: `src/styles/custom.css`

- [ ] **Step 1: 若当前没有自定义 Header，则创建 `src/components/Header.astro`**

实现目标：

```text
左侧：Codex 指南手册
中间：Codex 指南 / 提示词 / Skills / 实战案例
右侧：搜索 / GitHub / 主题 / 语言
```

移动端目标：

```text
左侧：Codex 指南手册
右侧：搜索 / 菜单按钮
四模块入口进入移动侧边栏，不在顶部横向挤压
```

- [ ] **Step 2: 在 `astro.config.mjs` 注册自定义 Header**

```js
components: {
	Header: './src/components/Header.astro',
	PageFrame: './src/components/PageFrame.astro',
	Footer: './src/components/Footer.astro',
	ThemeSelect: './src/components/ThemeSelect.astro',
	LanguageSelect: './src/components/LanguageSelect.astro',
},
```

- [ ] **Step 3: 在 `src/styles/custom.css` 添加顶部导航样式**

样式要求：

```text
桌面端：导航项横向排列，当前模块有高亮状态。
窄屏：隐藏横向导航，使用 Starlight 移动菜单。
视觉：保持 Starlight 的深浅色主题，不引入重色块。
```

### Task 4: 更新首页四模块入口

**Files:**
- Modify: `src/content/docs/index.mdx`
- Modify: `src/styles/custom.css`

- [ ] **Step 1: 首页 CTA 指向 `/guide/`**

将主按钮链接从旧路径：

```yaml
link: /00-start-here/
```

改为：

```yaml
link: /guide/
```

- [ ] **Step 2: 首页四个卡片与模块一致**

首页核心卡片使用以下四项：

```text
Codex 指南：认识产品、选择入口、完成第一次任务。
提示词：把目标、背景、约束和验收标准讲清楚。
Skills：把稳定方法封装成可复用能力。
实战案例：从真实任务中学习完整流程。
```

- [ ] **Step 3: 首页角色入口改为模块入口或保留下沉**

若保留「初学者 / 创作者 / 开发者 / 团队」，放在首页第二屏；首屏之后第一组入口必须是四模块。

### Task 5: 规划文档同步

**Files:**
- Modify: `docs/planning/content-architecture.md`
- Modify: `docs/planning/chapter-outline.md`
- Modify: `docs/planning/README.md`

- [ ] **Step 1: 在 `content-architecture.md` 增加公开网站结构说明**

新增说明：

```markdown
## 公开网站结构

公开网站采用四个一级模块：Codex 指南、提示词、Skills、实战案例。旧的编号型结构作为内容素材池和内部维护视图，不再作为公开一级导航。
```

- [ ] **Step 2: 在 `chapter-outline.md` 标注旧大纲状态**

新增说明：

```markdown
> 本文件保留详细素材池和历史章节规划。公开网站导航以 `guide/`、`prompts/`、`skills/`、`cases/` 四模块为准。
```

- [ ] **Step 3: 在 `docs/planning/README.md` 链接本计划**

新增条目：

```markdown
- [网站四模块结构调整计划](site-structure-revision-plan.md)
```

### Task 6: 验证与清理

**Files:**
- Inspect: `dist/index.html`
- Inspect: `dist/guide/index.html`
- Inspect: `dist/prompts/index.html`
- Inspect: `dist/skills/index.html`
- Inspect: `dist/cases/index.html`

- [ ] **Step 1: 构建网站**

Run:

```bash
zsh -lc "source ~/.nvm/nvm.sh >/dev/null 2>&1 && nvm use 22 >/dev/null && pnpm build"
```

Expected:

```text
[build] Complete!
```

- [ ] **Step 2: 检查四模块页面已生成**

Run:

```bash
rg -n "Codex 指南|提示词|Skills|实战案例" dist/index.html dist/guide/index.html dist/prompts/index.html dist/skills/index.html dist/cases/index.html
```

Expected:

```text
dist/index.html
dist/guide/index.html
dist/prompts/index.html
dist/skills/index.html
dist/cases/index.html
```

- [ ] **Step 3: 检查导航没有继续主推旧编号结构**

Run:

```bash
rg -n "00-start-here|01-foundations|02-getting-started|05-core-capabilities" dist/index.html
```

Expected:

```text
No matches in homepage navigation.
```

允许旧编号目录自身页面继续生成，第一阶段不要求删除。

## 6. 风险与处理

| 风险 | 处理方式 |
|---|---|
| 旧链接失效 | 第一阶段不删除旧目录；第二阶段再做重定向或迁移 |
| 顶部菜单和 Starlight 默认 Header 冲突 | 优先复用 Starlight Header 内部结构；只插入主导航 |
| 四模块内容过空 | 每个模块先提供首页和 2-3 个核心页，避免空导航 |
| 多语言路径复杂 | 第一阶段以简体中文 root 为源；其他语言继续 fallback |
| 侧边栏过长 | 四模块使用 `autogenerate`，旧编号目录不进入主 sidebar |

## 7. 完成标准

- [ ] 首页首屏和卡片入口均指向四模块。
- [ ] 顶部菜单显示「Codex 指南 / 提示词 / Skills / 实战案例」。
- [ ] `astro.config.mjs` 的公开 sidebar 以四模块为主。
- [ ] 四个模块首页均存在并可构建。
- [ ] 旧编号目录暂时保留，但不作为公开一级导航。
- [ ] `pnpm build` 成功。
- [ ] 规划文档说明新结构与旧结构的关系。

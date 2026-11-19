# 参与贡献

Codex Handbook 接受教程改写、事实核验、提示词、Skill、完整案例、图示和多语言贡献。简体中文正文是源版本。

开始前请阅读 [`STYLE_GUIDE.md`](STYLE_GUIDE.md) 和 [`docs/planning/README.md`](docs/planning/README.md)。

## 选择一种贡献

| 类型 | 主要目录 | 最低交付 |
|---|---|---|
| 教程或参考页 | `src/content/docs/guide/` | 目标读者、示例、验证、相关链接 |
| 提示词 | `src/content/docs/prompts/`、`examples/prompts/` | 适用场景、可复制模板、失败方式 |
| Skill | `src/content/docs/skills/`、`examples/skills/` | 触发边界、结构、权限、测试 |
| 完整案例 | `src/content/docs/cases/`、`examples/complete-workflows/` | 输入、过程、产物、验证、复盘 |
| 插画 | `public/illustrations/`、`docs/planning/illustration-prompt-guide.md` | WebP 图片、逐语言 alt 文本、提示词记录 |
| 翻译 | `src/content/docs/<locale>/` | 源修订信息、术语检查、语言复核 |

## 工作流程

1. 检查是否已有权威页面，避免复制同一概念。
2. 确认页面属于指南、提示词、Skills 或案例中的哪一层。
3. 从最小可验证内容开始，补齐示例和失败路径。
4. 涉及产品事实时查阅 OpenAI 官方文档，并记录核验日期。
5. 新增图示时同步更新视觉资产清单。
6. 在 Node.js `>=22.23.4` 环境运行 `pnpm build`。构建结束会自动检查渲染后的共享下载链接；修改语言链接规则后，也需运行 `node --test scripts/localized-download-links.test.mjs scripts/rendered-downloads.test.mjs`。
7. 复查现有构建的下载地址可运行 `pnpm check:downloads`。此检查覆盖生成 HTML 的下载链接与本地目标，不替代 ZIP 内容、浏览器操作或外部链接验证。
8. 阅读最终 diff，移除不应纳入版本控制的生成文件、真实凭据和无关改动，并按下方规范编写提交信息。

## 提交信息规范

新提交使用 [Conventional Commits](https://www.conventionalcommits.org/) 风格。历史提交不需要重写。

```text
<type>(<scope>)!: <summary>

<body>

<footer>
```

只有 `type` 和 `summary` 必填；`scope`、`!`、正文和页脚按需使用。提交信息统一使用英文，`type` 与 `scope` 使用小写。

### 类型

| `type` | 用途 |
|---|---|
| `feat` | 新增用户可见的网站能力或交互 |
| `fix` | 修复功能、导航、路由、构建或渲染缺陷 |
| `docs` | 新增或修改手册正文、贡献说明和规划文档 |
| `refactor` | 不改变外部行为的代码结构调整 |
| `style` | 只改代码格式或空白，不改变内容、视觉或运行行为 |
| `test` | 新增或修改测试、fixture 与验证脚本 |
| `perf` | 改善构建、加载或运行性能 |
| `build` | 修改依赖、构建工具或产物生成方式 |
| `ci` | 修改持续集成、发布或自动化检查 |
| `chore` | 不属于以上类型的仓库维护工作 |
| `revert` | 撤销先前提交 |

新增或改写内容页通常使用 `docs`；新增网站功能才使用 `feat`。视觉功能变化使用 `feat` 或 `fix`，不要用 `style`。

### Scope

`scope` 用来标明主要影响范围，可以省略。优先复用以下词汇：

- 内容与本地化：`content`、`i18n`、`roadmap`、`pricing`
- 界面与站点能力：`nav`、`ui`、`search`、`seo`
- 仓库资产：`assets`、`examples`、`scripts`、`downloads`、`deps`、`contributing`

一次提交跨越多个紧密相关目录时，选择最能表达用户影响的 scope；没有清晰 scope 时直接省略，不要临时拼接多个 scope。

### 标题、正文与页脚

- 第一行不超过 72 个字符，使用祈使语气，描述一个明确结果，不加句号。
- 避免 `update files`、`misc changes`、`fix stuff` 等无法说明结果的标题。
- 需要解释原因、取舍或迁移方式时，空一行后写正文；不要只重复标题。
- 关联工作项使用 `Refs: #123`；希望合并后关闭工作项时使用 `Closes: #123`。
- 破坏性变更在类型或 scope 后加 `!`，并在页脚写明 `BREAKING CHANGE: <impact and migration>`。
- 共同作者使用 Git trailer：`Co-authored-by: Name <email@example.com>`。

### 提交边界

- 一个提交只处理一个逻辑主题；不要把功能、无关格式化和内容清理混在一起。
- 实现、对应测试和不可分割的 fixture 放在同一提交中。
- 不提交自动生成且已忽略的繁体中文目录；只提交对应的简体中文源内容或生成规则。
- 不提交 `dist/`、`.astro/`、真实凭据、临时调试文件或与主题无关的改动。
- 使用 squash merge 时，最终 PR 标题也必须符合本规范。

### 示例

```text
fix(nav): keep desktop dropdowns mutually exclusive
feat(i18n): add Thai and Russian locales
docs(content): clarify sandbox approval guidance
test(downloads): cover localized download links
build(deps): update Astro to 7.2
docs(contributing): define commit message convention
```

带正文和工作项的示例：

```text
fix(nav): keep desktop dropdowns mutually exclusive

Group the desktop details elements so opening one closes its sibling.

Closes: #123
```

不合格示例：

```text
Update files
fix(Nav): Fixed dropdown bug.
feat: add a guide, fix navigation, and reformat unrelated files
```

## 内容状态

- `draft`：结构或事实仍不完整。
- `review`：内容写完，等待复核。
- `verified`：命令、链接、官方依据和适用范围都有当前证据。
- `outdated`：已知产品变化，暂不能按当前页面执行。

不要用自信语气代替证据。详情见[核验技术内容](src/content/docs/guide/contributing/verify-technical-content.md)。

新核验记录写在 frontmatter 的 `editorialStatus` 与 `verification` 中，不再追加自由文本页脚。编辑状态不等于验证方式：`editorial` 表示编辑审阅，`source-checked` 表示具体来源核对，`run-tested` 表示在记录的环境实跑。来源核对必须提供链接，实跑必须同时提供环境与证据。历史页脚已迁入 `legacyVerification`，保留原文与原日期，不自动升级为实跑。

## 可运行案例

完整案例使用独立目录，推荐包含：

```text
case-name/
├── README.md
├── brief.md
├── starter/
├── prompts/
├── solution/
└── validation.md
```

只创建实际需要的文件。`starter/` 可以故意包含问题，但必须在 README 和验证说明中明确哪些命令预期失败。`solution/` 必须能够独立验证。

## 图示贡献

- 优先使用 SVG 表达流程、架构、决策和对比。
- 图片不能代替正文；至少写一段文字说明图中关键关系。
- 中文图示需检查字体、换行、连接线和移动端缩放。
- 生成式图片不得包含水印、错误文字或版权不明元素。
- 记录资产路径、对应页面、用途、生成方式与源稿。

## 本地验证

```bash
pnpm install
pnpm build
```

若修改了简体中文正文，可额外检查繁体中文生成是否稳定：

```bash
pnpm i18n:zh-tw
node scripts/generate-zh-tw.mjs --check
```

构建失败时先修复当前改动造成的问题，不要提交 `dist/` 或 `.astro/`。

## 安全边界

- 不提交 API Key、Cookie、数据库地址、私人对话或客户数据。
- 示例只使用虚构组织、仓库和账号。
- 不把社区文章当作当前产品行为的唯一依据。
- 不提供绕过权限、审批或组织安全策略的操作步骤。

实验原始遥测中的本机绝对路径不属于站内 URL，`check:links` 排除规划目录 `experiments/*/run-*/telemetry/`，避免改写冻结记录。实验结果公开副本另外使用文件哈希清单与结果包的 `scripts/check_results.py` 验证；正文、实验输出和公开下载入口仍接受对应检查。

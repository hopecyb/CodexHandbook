# 网站框架与排版重构方案（2026-10）

日期：2026-10-15。依据：浏览器实看本地构建（桌面 1436px、375px iframe 模拟移动端、深浅主题），以及对 `src/` 和 281 个中文源页的盘点。本方案只讨论框架、导航与排版，内容扩展另见 [下一阶段内容规划](next-content/README.md)。

## 问题摘要

| # | 问题 | 证据 |
|---|---|---|
| 1 | 侧边栏过长 | 指南页侧边栏 194 个链接，38 个分组中 37 个展开，整列约 6,576px 高 |
| 2 | 每页开头先出现否定性核验提示 | 约 230 页标题下第一句是「尚未登记结构化验证证据；不代表本页示例已实跑」 |
| 3 | 同题重复页 | 两个「选择 Codex 客户端」、两个「带引用的研究」；「验证」与「质量与验证」、「上下文与文件」与「上下文」、三处排障导航页并列 |
| 4 | 首页卡片网格 | 固定 4 列，3 张卡的行右侧留空；`space-between` 使卡片描述上下错位 |
| 5 | 标题断词 | 桌面「变成可 / 复用方法」，手机「变成可复 / 用方法」 |
| 6 | 移动端顶栏 | 站点名被截成一个「C」；语言选择器占顶栏约三分之一 |
| 7 | 模块首页装饰插画 | 重复页面标题，并带英文副标题（如「Cases / overview」），占首屏约 180px |
| 8 | 首页页脚前 | 「反馈本页问题 · 内容更新」左对齐，与居中的「来源、更新与共建」不一致 |
| 9 | 正文组件化不足 | 四个主模块中，`<Steps>`、`<Tabs>`、`<CardGrid>`、`<LinkCard>`、`<Aside>` 使用次数为 0 |
| 10 | 外壳覆写过重 | 8 个 Starlight 核心组件被覆写，Starlight 仍是 0.x，升级成本高 |

## 原则

1. **外壳少改，正文多用组件**：能用 Starlight 配置或内置组件解决的，不再新增覆写。
2. **一个主题一个页面**：重复页合并到信息更全的一页，旧地址一律保留重定向（所有语言）。
3. **只突出正面信号**：核验信息条只强调已核对或已实跑，缺失状态降为一行元信息。
4. **所有语言同步**：结构调整（删除、合并、重定向）同时作用于 10 个语言；文字修订以简体中文为源，按现有 i18n 流程回译。

## 阶段与范围

### 阶段 1：排版修复（本次执行）

- [x] 侧边栏：`autogenerate.collapsed: true`，只展开当前页所在分组（Starlight 原生行为）。
- [x] 侧边栏排序：Starlight 以组内最小 `order` 作为目录权重，子页 `order: 1` 会把整组拉到前面（原先「桌面 App」排在「个性化」之后）。新增 `src/utils/orderSidebar.ts`，按各分组 index 页的 `sidebar.order` 排序，分组概览页固定在组首。
- [x] 核验信息条：无新版核验记录时，只显示一行「最后核对：日期」，历史说明折叠；有 `verification` 时保留醒目样式。
- [x] 标题：hero 与页面 H1 使用 `text-wrap: balance`；中文首页标题加断行点，避免拆词。
- [x] 首页卡片：网格改为 `auto-fit`，卡片内容顶部对齐。
- [x] 首页留白：hero 底部与第一组卡片间距收紧。原 `custom.css` 中 `.splash .hero` 规则因页面没有 `.splash` 祖先从未生效，已移入 `Hero.astro`。
- [x] 移动端：窄屏隐藏站点名文字只留 logo；语言选择器窄屏只显示图标；hero 插画缩小并隐藏装饰便签，标题与按钮回到首屏。
- [x] 模块首页插画：移除重复标题的装饰插画区块，删除仅此处使用的 `DocIllustration.astro`。
- [x] 首页（splash）不再渲染逐页「反馈本页问题」链接，避免与「来源、更新与共建」重复。

### 阶段 2：信息架构去重（本次执行）

| 操作 | 保留 | 移除并重定向 |
|---|---|---|
| 删除重复页 | `/guide/choose-your-client/` | `/guide/getting-started/choose-your-codex-client/` |
| 删除重复页 | `/cases/workflows/research-with-sources/`（补上案例目录元数据） | `/cases/research-with-sources/` |
| 合并 | `/guide/quality/`（并入「验证」正文） | `/guide/verification/` |
| 合并 | `/guide/context/` | `/guide/context-and-files/` |
| 合并 | `/guide/reference/troubleshooting/` | `/guide/troubleshooting/` |

站内链接同步改到保留页（9 个语言目录、README、STYLE_GUIDE）；重定向覆盖所有语言前缀，由 `astro.config.mjs` 的 `localizedRedirects()` 生成。其他语言的「质量与验证」页由各自已有的「验证」译文机械合并，回译时请复核。

## 执行记录（2026-10-15）

- `pnpm build` 通过：2936 页，1450 个下载引用全部存在。
- `pnpm check:links` 通过：12,488 个内部链接与图片引用。
- `pnpm check:i18n`：受影响的 14 个源页已同步 `source_revision`；剩余 50 条均为改动前已存在的 `translation_status: draft`。
- 浏览器复查：首页标题断行、卡片对齐、指南侧边栏（打开分组 37 → 1，高度约 6,576px → 1,212px）、案例页、375px 移动端（无横向溢出）、旧地址重定向。

### 阶段 3：正文组件化（后续）

1. 安装页、`cases/first-task` 等步骤型页面改用 `<Steps>`。
2. 客户端差异处改用 `<Tabs syncKey="client">`（桌面 App / CLI / IDE / Cloud），合并重复段落。
3. 各模块 index 用 `<CardGrid>` + `<LinkCard>` 替代纯链接列表。
4. 风险与核验说明统一使用 `:::caution` / `:::note`。

需要把 `.md` 改为 `.mdx` 的页面，按语言批量处理并跑 `check:links`。

### 阶段 4：指南模块拆分（后续，需单独评审）

把「指南」（183 页，占全站约 65%）拆成三个一级模块，URL 不变，只调整侧边栏分组与顶部导航：

| 新模块 | 包含目录 |
|---|---|
| 入门 | `start-here`、`foundations`、`getting-started`、`learning-paths`、`choose-your-client` |
| 产品手册 | `desktop-app`、`cli`、`ide`、`web-and-cloud`、`tools`、`context`、`files-and-artifacts`、`agent-work`、`quality`、`customization`、`integrations`、`developer-platform`、`team-enterprise` |
| 参考 | `reference`、`updates` |

同时：

- 统一中文与其他语言的顶部导航结构（目前中文把「指南」放在「能力中心」下拉中，英文为一级项）。
- `guide/contributing` 移出读者侧边栏，入口放到页脚。
- 「Skills」模块更名为「Skills 与扩展」，并理清它和「个性化配置」「开发者平台」的边界。

### 待决策

- 品牌名统一：顶栏「Codex 指南手册」、首页 title「Codex / AI Agent 实战手册」、README「Codex Handbook」三者需选定一个。
- 正文最大宽度是否从 720px 放宽到 760–800px。

## 验收

- `pnpm build` 通过（含下载包检查）。
- `pnpm check:links` 无失效链接。
- 浏览器复查：首页、指南页侧边栏、案例页、移动端顶栏。
- 旧地址访问时跳转到保留页。

## 配图补充（2026-10-15）

- 新增 12 张不含文字的概念插画（`public/illustrations/*.webp`），插入 9 个语言目录对应页面的第一个二级标题前，替代文字逐语言撰写。清单与提示词见 [视觉资产清单](visual-assets-manifest.md)。
- 接入此前未使用的能力阶梯图（`/skills/`，10 个语言）与 AI 应用路线图（`/ai-roadmap/`，仅简体中文，其他语言待本地化）。能力阶梯图修正了四个节点标题与说明重叠、七个语言说明文字溢出节点的问题，并重新导出 PNG。
- 流程图与路线图支持点击放大（`astro.config.mjs` 中的 zoomable-diagrams 脚本）；路线图限制宽度，避免占满数屏。
- 第二批 20 张正文插画覆盖入门、基础概念、四个产品入口、工具、文件、规划、AGENTS.md、提示注入、MCP、Plugins、提示词排错、长任务与失败恢复。
- 首页：任务与角色共 7 张卡片加配图；「查问题」「带走资产」两组改为紧凑的两列链接行，与上方图片卡片区分层次。
- 有图页面从 15 页增加到 49 页（简体中文），站点插画共 39 张、约 2.5MB（WebP）。

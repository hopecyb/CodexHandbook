# Codex Handbook 中文内容、架构与合规审计

- 审计日期：2026-11-19（Asia/Shanghai）
- 唯一内容基准：zh-CN
- 审计快照：`ab6e35a6`（`docs(contributing): define commit message convention`）
- 审计范围：中文正文、首页、定价、Pets、联系/隐私/条款、全局组件与数据、脚本、`examples/`、`docs/`、`glossary/`、`supabase/`、`public/`、README 与贡献文档
- 审计发现统计（修复前）：**P0 5 项、P1 22 项、P2 15 项、P3 5 项**
- 性质：实现—内容一致性审计；法律部分是工程风险识别，不构成中国、欧盟或其他法域的法律意见

> 本文的问题表保留审计快照原貌。同日修复结果见第 8 节；不要把“修复前原文”当作当前实现。

## 审计方法与快照说明

本次纳入全部 **283 个 zh-CN 源页面**：`guide` 180、`cases` 36、`skills` 29、`prompts` 20、`ai-roadmap` 13、`pets` 3、`theme` 1、根首页 1。另逐项审查定价数据和页面、三类法律页、全部 472 个 Git 跟踪的 `examples/` 文件，以及题目指定的配置、组件、脚本、规划、词汇表、Supabase、公共资产和各语言 README。全量时效扫描得到 1,727 行易变事实命中，再按产品事实、数字、日期、命令、相对时间和风险措辞逐项分流；不是抽样替代通读。

易变事实只以 OpenAI Learn、Help Center、Changelog 等官方一手资料核实；依赖、安全、统计与法律事实只使用对应厂商、政府、监管机构、GitHub Advisory 或官方包页。表中外部链接的访问日均为 **2026-11-19**。没有外部证据的判断只写成仓库事实或列入“无法核实”。

会写产物的命令和教程复现均在 `/private/tmp/codex-handbook-audit-2026-11-19/` 的独立副本执行。审计期间共享工作区由其他进程提交了 `4adad19c`（桌面菜单）和 `ab6e35a6`（贡献规范）；本报告在后者上复核，不把这些并发变更归因于审计，也不把已修复问题继续计入。本次只编辑本报告，不提交。

## 1. 架构概览

~~~text
                           astro.config.mjs
              Astro 7 + Starlight + sitemap + redirects
                                  │
       ┌──────────────────────────┼──────────────────────────┐
       │                          │                          │
src/content/docs/             src/pages/                 src/data/
zh-CN 权威源 283 页           独立路由                   定价与多语言文案
       │                      ├─ chatgpt-pricing × 12       │
       ├─ guide 180           └─ contact/privacy/terms      │
       ├─ cases 36               各 × 12                    │
       ├─ skills 29                                          │
       ├─ prompts 20         src/components + layouts        │
       ├─ ai-roadmap 13      Header / Sidebar / Footer       │
       ├─ pets 3             LegalPage / PricingPage         │
       ├─ theme 1            GeoJsonLd / AdSlot              │
       └─ index 1                                           │
       │                                                     │
       ├─ 人工跟踪译文：en/fr/de/es/pt/vi/ja/ko/th/ru
       │                  每语言 283 页 + source_revision
       │
       └─ scripts/generate-zh-tw.mjs
                    OpenCC 自动生成 zh-TW 283 页，状态 draft

scripts/
  ├─ check-doc-links.mjs       内链与图片引用
  ├─ check-i18n-parity.mjs     文件、结构和 revision parity
  ├─ i18n-status.mjs           覆盖率、状态和 revision
  ├─ sync-i18n-revisions.mjs   revision 同步
  └─ generate-zh-tw.mjs        dev/build 前生成繁中
~~~

公开信息架构实际是七个 Starlight 内容模块（Guide、Prompts、Skills、Cases、AI Roadmap、Pets、Theme）加定价与法律独立页。中文和 zh-TW 顶栏采用“做任务／按路径学习／查问题”的任务型导航，其他语言仍偏模块型；侧栏由七个目录自动生成。定价数据另存于 `src/data/chatgpt*`，没有与普通正文共用 content schema。法律页是 36 个手写 Astro 路由。

现有构建含 3,444 个 sitemap URL：3,396 个正文 URL（283×12）和 48 个独立页面（4×12）。旧重定向、404 与 noindex 页面未进入 sitemap。283 个中文源页都有 title 和 description；构建后的 287 个中文可索引页面均有且仅有一个 H1、非空 description 和匹配的 canonical。七个内容根均进入自动侧栏，未发现完全不可从导航到达的正文孤儿页。

### 内容与数据来源

| 内容类型 | zh-CN 数量或路由 | 权威来源/生成方式 |
|---|---:|---|
| Starlight 正文 | 283 | `src/content/docs/`；`docsLoader` + 扩展 schema |
| 定价 | `/chatgpt-pricing/` × 12 | `src/data/chatgptPlan*`、`chatgptPriceQuotes.json`、`PricingPage.astro` |
| 联系、隐私、条款 | 3 × 12 | `src/pages/**` + `src/layouts/LegalPage.astro` |
| 跟踪译文 | 10 × 283 | 人工文件 + `source_revision`/`translation_status` |
| zh-TW | 283 | 每次 dev/build 前由 zh-CN + OpenCC 自动生成 |
| 搜索 | 12 语言 | Starlight Pagefind 构建产物 |
| 路由迁移 | 91 个构建重定向页 | `astro.config.mjs:33-83` |

## 2. 问题清单

| 编号 | 严重度 | 维度 | 页面/文件:行号 | 现状原文或行为 | 核实后的正确情况 | 证据来源 URL 与访问日期 | 建议改法 |
|---|---|---:|---|---|---|---|---|
| AUD-001 | P0 | 2、4 | `src/content/docs/guide/ide/cloud-task-workflow.md:19,23,31`；`guide/web-and-cloud/index.md:12` | 写成“云端不会自动拥有你本机尚未提交的文件”，并要求未提交改动不进入任务。 | Web/远程仓库直接启动与 IDE→Cloud handoff 必须分开。IDE 委托会携带当前聊天上下文，包括计划和本地源码改动；现文会误导读者对源码、未跟踪文件和密钥的上传边界。 | [OpenAI Prompting](https://learn.chatgpt.com/docs/prompting)（2026-11-19） | 用双路径矩阵重写；明确 IDE handoff 可能上传 local source changes，委托前检查 diff、未跟踪文件与 secrets；删除跨入口绝对结论。 |
| AUD-002 | P0 | 2、4 | `src/content/docs/guide/permissions-and-sandbox.md:40-47` | “Cloud 环境中的 secrets 用于设置阶段，并会在 Agent 阶段开始前移除。” | 当前 Cloud environments 区分两类值：直接 environment variable 会传给环境中的程序；network secret 以 placeholder 暴露，代理只对允许域名的 HTTPS 请求替换真实值，并可在 setup 和 task 阶段工作。“一律在 Agent 前移除”已错误，可能诱导把高敏凭据当作不会进入任务。 | [OpenAI Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)（2026-11-19） | 立即改成类型矩阵：可见性、传递方式、作用阶段、允许域名、端口和泄漏面；明确程序需要读取原值时 direct variable 对任务可见；network secret 不等于无风险。 |
| AUD-003 | P0 | 2 | `astro.config.mjs:214-246`；scratch `dist/` | 非本地主机即注入 GA4 和 Microsoft Clarity；无 consent default/update、CMP、拒绝或撤回入口。3,551 个 HTML 中 3,397 个同时含两段代码。 | GA/Clarity 会处理设备、会话、标识符等访问数据。Google 提供默认拒绝再更新的 consent 模式；Clarity 要求 EEA/UK/CH 的有效 consent signal。当前实现先执行后告知，存在中国个人信息透明度及欧盟/英国非必要 cookie 风险。 | [GA 数据收集](https://support.google.com/analytics/answer/11593727?hl=en)、[Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent)、[Clarity Consent](https://learn.microsoft.com/en-us/clarity/setup-and-installation/cookie-consent)、[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj)、[ePrivacy Directive](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02002L0058-20091219)（2026-11-19） | 当天暂停两段统计，或在请求前接入 CMP，默认拒绝；提供同等显著的接受、拒绝、细分选择和随时撤回。上线前用 EEA/中国场景做网络与 cookie 实测。 |
| AUD-004 | P0 | 2 | `src/pages/privacy-policy.astro:6-15`；`src/pages/contact.astro:5-12` | 政策称“可能使用”分析工具，未点名 Google/Microsoft，也未说明控制者、数据、目的/依据、cookie、接收方、保留、跨境、权利和撤回，却标“最近更新 2026-11-19”。 | 代码确认统计已默认实现，不是“可能”。中国个人信息保护规则要求显著、具体告知处理者、目的、方式、种类、保存和权利路径；境外提供还需按实际情况处理告知、单独同意和评估。GDPR 透明度义务也要求说明控制者、目的、依据、接收方、保存和权利。 | [个人信息保护法](https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm)、[网络数据安全管理条例](https://www.cac.gov.cn/2024-09-30/c_1729384452307680.htm)、[数据跨境规定](https://www.cac.gov.cn/2024-03-22/c_1712776611775634.htm)、[GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj)（2026-11-19） | 与 consent 实现同步发布分层隐私告知：运营主体和联系方式、托管/统计商、字段与标识符、目的/依据、cookie、保存、接收方和所在地、跨境、权利/删除/撤回、未成年人、变更通知。 |
| AUD-005 | P0 | 2、3 | `package.json:24-34`；`pnpm-lock.yaml:142,852,1719,2117,2690,4130` | 锁定 `astro@7.2.0`、`sharp@0.34.5`、Starlight 0.41.7。 | Astro <7.2.8 处理恶意 AVIF 时存在经 libheif 触发的 RCE，官方公告 CVSS 9.8；修复要求 Astro 7.2.8 和 Sharp 0.35.4。7.2.0 也低于后续 7.3.2 XSS 修复。对接受外部图片贡献并在维护者机器/CI 构建的站点，这是构建机供应链风险。 | [GitHub Advisory GHSA-26w7-cxv4-gfx2](https://github.com/advisories/GHSA-26w7-cxv4-gfx2)、[Astro XSS advisory](https://github.com/withastro/astro/security/advisories/GHSA-98hj-9722-w3j8)、[Astro npm](https://www.npmjs.com/package/astro)、[Starlight npm](https://www.npmjs.com/package/%40astrojs/starlight?activeTab=versions)（2026-11-19） | 至少升 Astro 7.2.8 + Sharp 0.35.4，优先验证当前 Astro 7.4.13 / Starlight 0.43.1；重锁依赖并跑全量门禁。修复前禁止构建不可信 AVIF。 |
| AUD-006 | P1 | 4、5 | `src/content/docs/guide/reference/model-selection.md:23,27-28,39-54` | 仍推荐 GPT-6.1 Sol、GPT-6 Luna、GPT-6 Astra；核验日写 2026-10-24。 | 2026-11-17 后 Work/Codex 当前模型已含 GPT-6.2 Astra 和 GPT-6.2 Sol；普通 Chat 与 Work/Codex 的显示名和档位要分开说明。 | [OpenAI 模型帮助](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)、[OpenAI Models](https://learn.chatgpt.com/docs/models)、[Changelog](https://learn.chatgpt.com/docs/changelog)（2026-11-19） | 加入 6.2 Astra/Sol 并重做推荐；6.1/6 降为兼容/历史；同步 checkedAt。 |
| AUD-007 | P1 | 1、4 | `src/data/chatgptPlanCopy.json:22-24`；`chatgptPlanQuotes.json:1-5`；`PricingPage.astro:110,143` | Go 写“尚未核对官网月费”；表只含 Plus 和 Pro 100/200/500；页面两处硬编码 2026-10-24。 | 官方当前列 Free $0/月、Go $8/月、Plus $20/月、Pro $100/$200/$500；Business $20/用户/月（年付、至少 2 人）或 $25/月付。本站缺 Free/Go/Business，日期会与数据漂移。 | [OpenAI Pricing](https://learn.chatgpt.com/docs/pricing)、[Pro tiers](https://help.openai.com/en/articles/9793128-about-chatgpt-pro-tiers)（2026-11-19） | 以单一数据源维护计划、币种、周期、席位、地区税费和 checkedAt；页面日期自动取最大 checkedAt；补 Business/Enterprise 与 API 单独计费边界。 |
| AUD-008 | P1 | 4、5 | `guide/reference/slash-commands.md:62-79`；`guide/agent-work/subagents.md:31` | 把 `/agent` 写成查看/切换线程，并将不完整清单称为“当前常见入口”。 | 当前命令为 `/agents`；现行列表另有 `/pets`/`/pet`、`/statusline`、`/title`、`/theme`、`/export`、`/recap`、`/debug-config`、`/keymap` 等。 | [Developer commands](https://learn.chatgpt.com/docs/developer-commands)、[CLI reference](https://learn.chatgpt.com/docs/cli/reference)、[Commands](https://learn.chatgpt.com/docs/reference/commands)（2026-11-19） | 立即改 `/agents`；按 surface 和核验日维护完整表，或明确标为“精选入口”；复核 `/permissions` 的适用面。 |
| AUD-009 | P1 | 4、5 | `guide/reference/commands/index.md:17,34-47` | 声称汇总“当前 Stable 入口”，仅列 codex、exec、doctor、login/logout、resume/fork、mcp、plugin。 | 当前 Stable 还至少包括 agents、app、apply、archive、completion、delete、features、plugin marketplace、queue、review、sandbox、unarchive、update。 | [Developer commands](https://learn.chatgpt.com/docs/developer-commands)、[CLI reference](https://learn.chatgpt.com/docs/cli/reference)（2026-11-19） | 补齐 Stable，或改名“常用精选入口”；从版本化 manifest 生成并在 CI 提示差异。 |
| AUD-010 | P1 | 4、5 | `skills/automations/index.md:10,16-28`；`scheduled-tasks.md:20-27,119-121` | 写成 Scheduled tasks 不等于仓库事件，Git push/PR 精确触发只能用 CI/webhook；管理面只写 Web/桌面。 | 官方已支持符合资格的 Web/移动端 app 事件触发，包括 Gmail、Slack、GitHub；GitHub PR review、comment、commit update、merge 等可触发，并有 Team Tasks。它仍不是任意 CI webhook，但“没有仓库事件触发”已过时。 | [OpenAI Automations](https://learn.chatgpt.com/docs/automations)、[What’s new](https://learn.chatgpt.com/docs/whats-new)（2026-11-19） | 按时间触发、受支持 app 事件、通用 CI/webhook 三层重写；列 Web/移动/桌面/CLI/IDE差异。 |
| AUD-011 | P1 | 1、3、4 | `guide/developer-platform/non-interactive/structured-output.md:46-64,80-105`；`codex-exec.md:70` | 专门页仍用 prompt“仅输出 JSON”+ shell 捕获 + jq；同站另一页已写原生 schema。 | 当前 `codex exec` 支持 `--output-schema schema.json`，`-o/--output-last-message` 写最终消息；`--json` 是 JSONL 事件流而不是业务对象。 | [Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)、[CLI reference](https://learn.chatgpt.com/docs/cli/reference)（2026-11-19） | 主路径改为 output-schema + `-o` + validator + 退出码；prompt-only 降为兼容方案，并解释三种输出。 |
| AUD-012 | P1 | 1、3 | `guide/cli/non-interactive-mode.md:51-55` | 因最终回复走 stdout，称 `codex exec ... > release-notes.md` “可以安全地”执行。 | shell 在 Codex 启动前创建/截断目标，重定向不受 Codex sandbox/approval 保护；失败可留下空或半成品文件。 | [Non-interactive mode](https://learn.chatgpt.com/docs/non-interactive-mode)（2026-11-19）；shell 行为为本地可复现实证 | 删除“安全”绝对措辞；写临时新文件，检查退出码和内容后原子替换；优先 `-o`、`mktemp`、noclobber。 |
| AUD-013 | P1 | 2、4、5 | `skills/overview.md:33-40,57-65`；`skill-anatomy.md:20-38,81-88,101-123`；`skills/security.md:101-104` | 目录只列 SKILL.md/scripts/references，把 templates 当标准层；用 AGENTS.md 当作限制 skill 的控制。 | 官方结构还含 `assets/` 和 `agents/openai.yaml`；可声明 UI metadata、MCP 依赖、implicit invocation。`[[skills.config]]` 和 bundled 设置才是实际禁用控制；AGENTS.md 是指导。 | [Build skills：启用或禁用本地 skills](https://learn.chatgpt.com/docs/build-skills#enable-or-disable-local-codex-skills)、[Record & Replay](https://learn.chatgpt.com/docs/extend/record-and-replay)（2026-11-19） | 更新目录图和控制项；templates 标为站点约定；区分行为指导与可执行禁用策略。 |
| AUD-014 | P1 | 2、4 | `guide/customization/rules/allow-and-deny-patterns.md:13,30-50`；`command-rules.md:13,31-37,59-84` | 把 Rules 写成命令、路径、网络、工具的通用 allow/deny，并给不可执行的 JSON 示意。 | 当前 Rules 是实验性的命令出沙箱策略；活动配置层的 `.rules` 使用 Starlark `prefix_rule`，可用 `codex execpolicy check` 测试。路径、网络和工具边界属于 sandbox/permissions/managed config。 | [OpenAI Rules](https://learn.chatgpt.com/docs/agent-configuration/rules)（2026-11-19） | 换为真实最小 `.rules` 示例和测试命令；把路径/网络/工具移到对应章节；声明 Rules 不替代 sandbox 和审查。 |
| AUD-015 | P1 | 1、4、5 | `pets/index.mdx:15,25-31`；`pets/install.mdx:15-36`；`pets/create.mdx:19-35,49-70` | 主路径是复制 `~/.codex/pets/<id>/pet.json + spritesheet.webp`，且承认未做客户端实测。 | 当前公开流程是桌面 Settings→Pets→Create pet、Web Personalization→Pet→Upload，以及 CLI `/pets`/`/pet`；Web 单图要求 1536×1872、透明 PNG/WebP、≤20 MiB。官方未把本站 pet.json 目录作为公开安装契约。 | [OpenAI Pets](https://learn.chatgpt.com/docs/pets)、[Commands](https://learn.chatgpt.com/docs/reference/commands)（2026-11-19） | 按 desktop/web/CLI 三条流程重写，补文件和终端限制；pet.json 降为未核实内部/社区格式。 |
| AUD-016 | P1 | 1、4 | `guide/cli/approvals-and-sandbox.md:32-44` | 表中写“写项目内文件：常需确认”“运行 shell：确认命令内容”。 | 当前 Auto/`workspace-write + on-request` 允许在工作区内自动读写文件、运行常规本地命令；通常在越出工作区、访问网络或其他受限动作时才请求审批。不同信任状态/组织策略可更严，但“项目内写入通常确认”不是当前默认。 | [OpenAI Sandbox](https://learn.chatgpt.com/docs/sandboxing)、[Agent approvals & security](https://learn.chatgpt.com/docs/agent-approvals-security)（2026-11-19） | 用 preset×sandbox×approval 矩阵替换“默认倾向”；明确 Auto、read-only、Full access 和组织策略差异，并说明已在沙箱内允许的动作不会额外弹窗。 |
| AUD-017 | P1 | 2、3 | `docs/planning/next-content/experiments/.../telemetry/final.md:7-10`；18 个 telemetry 文件；7 个 `examples/**/__pycache__/*.pyc`；`.gitignore:1-47` | 已跟踪文件含维护者本机绝对路径/用户名；pyc 也嵌入路径。`.gitignore` 未忽略缓存。 | 未发现密钥，但这是无必要的个人/环境元数据和不可审阅二进制；公开仓库不应保留。 | 仓库行号、`git ls-files`、`strings`（本地核验 2026-11-19；报告不复述具体路径） | 对公开证据不可逆占位化并保留哈希；移除 pyc；忽略 `__pycache__/`、`*.py[cod]`；CI 阻止绝对用户路径和编译缓存。 |
| AUD-018 | P1 | 2、3 | 仓库根无 `LICENSE*`；`README.md:171-191`；`index.mdx:115-119`；`CONTRIBUTING.md:1-16` | 对外称社区维护并接受代码/内容贡献，但整仓无许可证；个别下载包 CC0 不覆盖站点。 | 无许可证时默认版权法适用，第三方通常没有复制、分发、衍生授权；贡献授权、媒体和商标例外也未定义。 | [GitHub Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)（2026-11-19） | 权利人决定代码/文档/媒体的许可组合，列第三方与 OpenAI marks 例外；README/Terms 写清范围；加入 DCO/CLA 或贡献许可并处理既有贡献。 |
| AUD-019 | P1 | 3 | 仓库无 CI；`scripts/check-doc-links.mjs:45-47,96-120` | 无 workflow；`check:links` 跳过全部 http(s) 外链和冻结遥测。构建、漏洞、全量 i18n 和外链检查不会自动跑。 | 本地绿灯不能阻止回归；站点大量引用会变化的官方文档，内部链接通过不代表外链可达。 | 仓库文件清单和脚本行号（本地核验 2026-11-19） | 增加 PR CI 与定时任务：锁定环境、全量 i18n、build、内部/外部链接、依赖、secrets、路径、pyc、许可来源；外链巡检做限速、重试、HEAD→GET 和持续失败分级。 |
| AUD-020 | P1 | 3、9 | `README.en.md:166`；`README.fr/de/es/pt/vi/ja/ko.md:165` | README 仍写 2026-07：英文仅核心 reviewed，其余语言全 draft。 | 2026-11-19 实跑显示 10 个跟踪语言均 283/283、reviewed/current；README 与元数据冲突。但 reviewed/current 仍不等于本次做过母语质量复核。 | 文件行号；本报告第 4 节实际命令结果（2026-11-19） | 状态由脚本生成 badge/表格；删除手写快照，并明确 coverage/revision 不代表语言质量。 |
| AUD-021 | P1 | 2 | `README.md:189-191`；`terms.astro:6-15`；`index.mdx:1-130`；全局页眉/页脚 | “非 OpenAI 官方”只在仓库 README；站内只说“不构成官方产品承诺”，首页/全局区域没有同等醒目的独立项目声明。 | 确认的是独立身份披露不足；OpenAI 品牌指南要求不得误述关系、暗示背书或造成赞助混淆。是否构成商标侵权、站名或 logo 是否获许可仍无法核实。 | [OpenAI Design Guidelines](https://openai.com/brand/)（2026-11-19） | 首页 hero、全局页脚和关于页增加“社区维护、非 OpenAI 官方、无赞助/背书”声明；标注权利归属；对域名、站名和自有 logo 做书面品牌审查。 |
| AUD-022 | P1 | 9 | `scripts/lib/zh-tw-convert.mjs:108-121`；例 `zh-tw/cases/first-task.md:43-46`、`prompts/templates/research.md:21-27` | 转换器保护整个 fenced block。用同一 OpenCC 复扫：283 页中 **140 页、844 个 fenced 行**仍可简转繁；大量 fence 是给读者复制的中文提示词，不是代码。 | 公开 zh-TW 混入简体，复制提示也保持简中；draft 状态不阻止发布和索引。 | 生成器行号与全量机械扫描（2026-11-19） | 按 fence 类型转换 prose/prompt，保护真实命令和标识符；加入“剩余可转换简体字”lint 与允许名单；人工复核繁中术语。 |
| AUD-023 | P1 | 3、9 | `scripts/sync-i18n-revisions.mjs:41-54,63-101`；`check-i18n-parity.mjs:1-24,94-119` | revision 脚本只识别未暂存 diff，并只改译文 frontmatter；源改动已 staged/committed 时，可把未翻译正文标为 current。`pnpm check:i18n` 在干净树上检查 0 页也返回 0。 | 10 个语言“current 283”只证明哈希字段一致，不能证明语义同步；当前工具链可产生 false green。 | 脚本行号、scratch 实跑（2026-11-19） | 源 hash 变化应自动 stale，只有翻译提交显式确认才更新 revision；以基线 manifest/提交比对；CI 强制 `--all`，0 页标 SKIPPED/失败，并加 staged/committed 回归测试。 |
| AUD-024 | P1 | 9 | `scripts/generate-zh-tw.mjs:93-112` | `translatedAt = new Date()` 写入所有生成页；跨日 `--check` 报 283 页全变，dev/build 每日重写。 | 生成物非确定，日期噪声会破坏 CI 门禁并掩盖真实内容变化。 | 脚本行号；实跑 `written 283, unchanged 0, exit 1`（2026-11-19） | 用源页稳定核验日、源提交日或 `SOURCE_DATE_EPOCH`；或移除生成时间，只在内容/转换器版本变化时更新。 |
| AUD-025 | P1 | 9 | `docs/planning/i18n-and-maintenance.md:65-94`；`glossary/terms.yml:1-17`；`glossary/` | 规范要求 `glossary/zh-tw.md` 和每术语的 zh-TW 译法；实际缺文件，30 个 term 都无 `zh-TW` 键。 | OpenCC 只做字形转换，不能决定台湾/繁中词汇，自动生成缺少术语权威源。 | 仓库目录和文件行号（2026-11-19） | 补 zh-TW glossary 和 terms 字段；字形转换后做术语替换；CI 强制必备语言键。 |
| AUD-026 | P1 | 6 | `docs/planning/content-architecture.md:73-107` | 仍称“四个一级模块”、编号型 `00-start-here...` 源目录，并列不存在的 templates/assets/meta。 | 实际是七内容模块、任务型中文导航和独立定价/法律页；源目录已无编号。 | `astro.config.mjs:317-435` 与目录清点（2026-11-19） | 用本报告架构图更新，区分公开导航、侧栏模块、独立页和历史 redirects；删除不存在目录。 |
| AUD-027 | P1 | 3、9 | `docs/planning/i18n-and-maintenance.md:104-143,156-163`；`package.json:9-22`；`contentSchema.mjs:19-40` | 文档要求不存在的 `pnpm i18n:diagrams`/`generate-localized-diagrams.mjs`，并规定旧字段 status/last_verified/official_basis。 | 当前 schema 是 verification/legacyVerification/reviewed_at；贡献者按文档无法执行。 | 仓库行号和文件存在性检查（2026-11-19） | 恢复命令或删旧流程；统一 frontmatter 合约；CI 校验文档提到的 script/package command 必须存在。 |
| AUD-028 | P2 | 1、5 | `cases/workflows/diagnose-before-fixing.md:11`；`guide/quality/handle-uncertainty.md:60-64`；`prompts/long-running-tasks.md:40` | 使用“返工率通常很高”“通常会减少返工”“风险明显上升”等结果性措辞。 | 仓库无样本、口径、实验或来源；只能视为编辑经验/风险启发，不能暗示量化结论。 | 文件行号与站内证据检索（2026-11-19） | 改成明确建议或“可能”；若保留结论，补样本、方法、日期和限制。 |
| AUD-029 | P2 | 3、5 | `examples/README.md:7-21,23-54,60-69` | 目录树只展示少数组，标“最近更新 2026-09-18”，没有说明是精选。 | 实际 `examples/` 有 472 个跟踪文件和多组 creator/team/skills/workflow-evaluation；索引不是完整清单。 | `git ls-files examples` 与文件行号（2026-11-19） | 从 manifest 自动生成，明确“精选/完整”，构建时校验路径。 |
| AUD-030 | P2 | 4、5 | `ai-roadmap/index.md:18-28`；`timeline/index.md:10-20` | 可核对事件最新到 2026-02-11。作为工程主题史不算事实错误，但无法承担 2026-11 产品更新入口。 | 站点缺 GPT-6.2、Hooks GA、事件触发 Tasks、Record & Replay、Appshots、浏览器 annotations、移动远程等已发布能力入口。 | [OpenAI Changelog](https://learn.chatgpt.com/docs/changelog)、[What’s new](https://learn.chatgpt.com/docs/whats-new)（2026-11-19） | 保留主题路线图，另建“当前产品变化”页；不要混用主题史和产品发布时间线。 |
| AUD-031 | P2 | 2、6 | `PageFrame.astro:8-32`；`Footer.astro:32-66`；`SiteFooter.astro:42-59,129-144` | Privacy/Terms/Contact 只在 SiteFooter；有侧栏的绝大多数文档页不渲染 SiteFooter，但仍显示广告位和统计脚本。 | 数据处理页面应有易访问的隐私、条款、联系和 consent settings 入口。 | [网络数据安全管理条例](https://www.cac.gov.cn/2024-09-30/c_1729384452307680.htm)（2026-11-19）；仓库行号 | 在所有文档 Footer 固定放法律入口、独立声明和 consent settings。 |
| AUD-032 | P2 | 2 | `terms.astro:6-15`；`AdSlot.astro:12-89`；`contact.astro:5-12` | Terms 仅准确性、外链、贡献三小节；站点招揽广告但无赞助/联盟、编辑独立、排序、版权、下架、责任和贡献授权规则。AdSlot 本身标“广告位”，未发现实投联盟链接。 | 目前无实投不等于上线前无需规则；当前条款不能支撑商业内容争议和贡献授权。 | 仓库行号与全站链接检索（2026-11-19） | 投放前补广告/赞助/联盟政策和就地披露；Terms 补许可、贡献授权、版权通知/下架、责任、变更和联系。 |
| AUD-033 | P2 | 3 | `package.json:6-8,40`；`.nvmrc:1`；`README.md:141-160`；`CONTRIBUTING.md:25,155-162` | 声明 Node ≥22.12、pnpm 10.31；scratch 实际 Node 26.13.1、pnpm 9.15.3。 | 当前 Astro 7.4.13 package 要求 Node ≥22.23.4；升级依赖后现有下限不足，实际验证也未使用声明的 pnpm。 | [Astro package.json](https://raw.githubusercontent.com/withastro/astro/main/packages/astro/package.json)（2026-11-19） | 升级时同步 engines/.nvmrc/文档；CI 用 Corepack 锁 pnpm 10.31，增加 engine preflight。 |
| AUD-034 | P2 | 2、3 | `astro.config.mjs:214-248` | GA/Clarity 远程脚本拥有页面执行权限；未见 CSP、nonce/hash 或域名最小化策略。 | consent 解决选择和合法性，不替代第三方脚本供应链与注入防护。 | 仓库配置与厂商加载域名（2026-11-19） | 将统计封装为可一键关闭组件；建立最小 `script-src/connect-src/img-src` CSP；记录供应商域、数据和应急开关。 |
| AUD-035 | P2 | 3 | scratch `pnpm build`；`src/content.config.ts` | 构建成功但生成 `/404.html` 时打印 `Entry docs → 404 was not found.`；最终 404 文件存在。 | 目前不阻断产物，但重复警告会掩盖真正内容错误；部署状态码/布局仍要验证。 | scratch 原始构建输出（2026-11-19） | 找出 content entry/404 来源并修复或精确抑制；测试 HTML、部署层 404 状态和 sitemap 排除。 |
| AUD-036 | P2 | 9 | `scripts/i18n-status.mjs:65-72`；例 `vi/guide/permissions-and-sandbox.md:9` | regex 以 `\S+` 取 status，95 个加引号值显示为 `"reviewed"`。 | 合法 YAML 的同一值被拆成两类，审校统计失真。 | 脚本行号与逐语言实跑（2026-11-19） | 用 YAML parser，或剥离成对引号并校验 enum；加 quoted/unquoted 测试。 |
| AUD-037 | P2 | 5、9 | `src/utils/contentSchema.mjs:19-30`；283 页 frontmatter | schema 有 `reviewed_at`，但 283/283 中文页都未填；226 缺 contentType，233 缺 editorialStatus，233 缺结构化 verification。 | 无法按复核年龄查询和触发过期检查，只能依赖零散 legacy 字段/Git 日期。 | schema 行号与全量 frontmatter 清点（2026-11-19） | 易变事实页先强制 reviewed_at + verification；按内容类型设置复核 SLA，再逐步补齐元数据。 |
| AUD-038 | P2 | 7、9 | `src/layouts/LegalPage.astro:15-32,56-64` | 36 个法律/联系页只有 canonical，没有 HTML hreflang；语言选择器已知道所有对应 URL。sitemap 有 alternates。 | sitemap 信号存在，不是不可索引；但独立 HTML 不能自描述语言簇，与正文和定价不一致。 | 仓库行号与构建 HTML/sitemap（2026-11-19） | 输出 12 个互惠 hreflang + x-default，并测试完整语言簇。 |
| AUD-039 | P2 | 7 | `astro.config.mjs:34-73` | 91 个重定向构建页中 88 个目标/canonical 缺尾斜杠；最终页面 canonical 有斜杠。 | 会产生额外规范化跳转和中间 canonical 不一致。 | 配置和构建产物清点（2026-11-19） | 统一 trailing slash；CI 要求 redirect 目标等于最终 canonical。 |
| AUD-040 | P2 | 6、7 | `guide/cli/non-interactive-mode.md:7-8`；`guide/developer-platform/non-interactive/index.md:7-8` | 两个页面 title/H1 都是“非交互模式”，一个是 codex exec 教程，一个是分组页。 | Pagefind、浏览器标题和搜索结果难区分，也形成主题重叠。 | 源文件与构建 HTML（2026-11-19） | 合并为权威页，或改成“非交互模式概览”与“codex exec 教程”。 |
| AUD-041 | P2 | 8 | 例 `guide/start-here/index.md:15`、`ai-roadmap/index.md:14`、`cases/create-a-slide-deck.md:42,91` | 64 张 Markdown 内容图都有 alt，但没有 width/height/loading；71 张正文/首页内容图中 64 张缺尺寸与 loading。 | 浏览器不能预留比例，存在 CLS 风险；折叠下图片未延迟加载。首屏 LCP 图不应机械 lazy。 | 源文件与构建 HTML 全量清点（2026-11-19） | 输出尺寸；仅 below-the-fold 加 lazy/async；首图保留 eager 并按实测决定 preload。 |
| AUD-042 | P2 | 6、9 | `learningPathSidebar.mjs:15-25`；`Header.astro:31-63` | 聚焦学习路径侧栏只对 root/zh-tw 生效；其余 10 种语言回到完整模块侧栏；顶栏也有两套 IA。 | 文件覆盖 100% 不等于导航体验等价；非中文读者按角色连续阅读更困难。 | 仓库行号与 12 语言构建检查（2026-11-19） | 决定任务型 IA 是否为全站目标；若是，推广 locale-neutral 规则并做跨语言导航测试；若否，文档化差异。 |
| AUD-043 | P3 | 5 | 代表 `guide/tools/browser.md:52-79`、`computer-use.md:53-72`、`prompts/long-running-tasks.md:42-58` | 全站高频复用“常见误会/很多人/不是……而是……”模板。guide 180 页中相关命中为 106/77/61 页。 | 单句未必错误，但跨站公式化铺垫造成 AI 腔、重复与低信息密度。 | 全量文本统计和 humanizer-zh 判断标准（2026-11-19） | 不批量同义改写；先合并重复误会段，只保留真实反直觉项，编辑门禁提示模板重复率。 |
| AUD-044 | P3 | 7 | `LegalPage.astro:56-64`；`PricingPage.astro:54-72`；`GeoJsonLd.astro:62` | 正文有 JSON-LD，定价和三类法律独立页没有 JSON-LD，也无 OG/Twitter 元数据。 | 基础 title/description/canonical 完整，但独立页分享预览和结构化语义弱。 | 仓库组件与构建 HTML（2026-11-19） | 共用 SEO 组件；按真实可见内容输出 WebPage/ContactPage，FAQ 仅在页面真有问答时使用。 |
| AUD-045 | P3 | 7、9 | `astro.config.mjs:88-100`；`PricingPage.astro:63-71` | sitemap/Starlight 用 zh-CN/zh-TW，定价 HTML 用 zh-Hans/zh-Hant。 | 两套标签都有效，不是确定冲突，但同站不一致增加维护和排障成本。 | 仓库配置与构建 HTML（2026-11-19） | 建立单一 locale→hreflang helper，供 sitemap、正文、定价、法律页复用。 |
| AUD-046 | P3 | 8 | `astro.config.mjs:253-276` | 图示可 Enter/Space 打开 dialog，但 dialog 无 accessible name、显式关闭按钮和焦点恢复；点击任意处关闭。 | 原生 Esc 可用，但屏幕阅读器语义和可发现关闭操作不足，点击图片也会意外关闭。 | 源码静态检查（2026-11-19） | 加可见标题/aria-labelledby、关闭按钮、backdrop-only 关闭、焦点进入与回到触发图。 |
| AUD-047 | P3 | 8 | 现有 `dist/`；`public/cover.png`、`icon-512.png` | 构建约 383 MiB、3,551 HTML；Pagefind 约 20 MiB；`cover.png` 2,564,008 B、`icon-512.png` 432,182 B，前者只用于 README 仍被复制到部署。 | 不是单页下载量，但增加 CI、上传、缓存刷新和索引成本；大 PNG 增加仓库/CDN 成本。 | 本地 `du/stat` 与构建清点（2026-11-19） | 设置构建/单文件预算；README cover 移出 `public/` 或构建排除；修复 AVIF 漏洞后再生成 WebP/AVIF 发布版；评估 Pagefind 按语言分片。 |

## 3. 官方已有而站点缺失或未形成可用入口

1. **GPT-6.2 Astra/Sol** 的中文选型，以及普通 Chat 与 Work/Codex 的显示名、档位和可用面边界。
2. **Cloud environment variables 与 network secrets** 的当前模型：直接变量、代理替换、允许域名、Personal vault 和共享环境。
3. **Web/移动 Scheduled tasks 的 app 事件触发**：GitHub、Gmail、Slack 和 Team Tasks；与通用 CI/webhook 的边界。
4. **Pets 当前正式路径**：桌面创建、Web 单图上传、CLI `/pets`/`/pet`、文件限制与终端兼容。
5. **完整 Stable CLI 子命令与 slash commands**；现有“总览”缺多项且含 `/agent` 错名。
6. **Skill 当前结构与治理**：`assets/`、`agents/openai.yaml`、MCP 依赖、implicit invocation 和禁用配置。
7. **`codex exec --output-schema` 正式教程**；专门页仍以 prompt-only JSON 为主。
8. **Record & Replay** 的中文入口。
9. **Hooks GA** 的安装、事件模型、安全和审计；仓库只有示例，没有产品级指南。
10. **Appshots、Chrome/browser annotations、移动远程与 remote computer use/connections** 的能力和安全边界。
11. 将 **产品 Changelog/What’s new** 与 AI 工程主题路线图分开的长期入口。

以上产品缺口依据 [OpenAI Changelog](https://learn.chatgpt.com/docs/changelog)、[What’s new](https://learn.chatgpt.com/docs/whats-new)、[Developer commands](https://learn.chatgpt.com/docs/developer-commands)、[Build skills](https://learn.chatgpt.com/docs/build-skills) 与本表所列专题官方页核实，访问日均为 2026-11-19。

## 4. 工程检查、i18n 与教程复现

### 4.1 工程命令实际结果

所有会写文件的命令都在 scratch 副本运行。副本实际为 **Node v26.13.1、pnpm 9.15.3**，而仓库指定 pnpm 10.31.0。首次 `pnpm install --frozen-lockfile` 因 registry DNS 失败；为了继续只读验证，复制了工作区现有 `node_modules`。因此构建通过不等于“干净联网安装通过”。

| 命令 | 退出码 | 实际输出摘要 | 结论 |
|---|---:|---|---|
| `pnpm check:links` | 0 | 隔离副本：`Checked 15740 internal links and image references across 3729 source files (archived experiment telemetry excluded).`；报告落盘后当前工作区复跑亦为 0，源文件数变为 3730。 | 只证明内链和图片引用；脚本跳过全部外链和冻结遥测。 |
| `pnpm check:i18n` | 0 | `source pages: 0`；`locale checks: 0`；`issues: 0`；定价 `12 locales × 2 catalogs; 0 issues` | 干净树上的空检查，不是全站一致性证明。 |
| `node scripts/check-i18n-parity.mjs --all --summary` | 0 | `source pages: 283`；`locale checks: 2830`；10 locale 均 `283/283`；定价 0 issue | 全量文件、结构与 revision parity 通过；不验证译文语义。 |
| 逐语言 `pnpm i18n:status -- --locale <locale> --stale` | 0 | 11 个非源 locale 均 283/283、missing 0、extra 0、coverage 100%、current 283、stale 0 | 精确状态见下一表；current 受 AUD-023 机制限制。 |
| `pnpm i18n:zh-tw -- --check`（跨日生成物） | 1 | `source 283; written 283; unchanged 0; removed 0` | AUD-024 的日期非确定性；并发生成后同日检查会变为 unchanged。 |
| `pnpm build` | 0 | zh-TW source 283、written 0、unchanged 283；`3445 page(s) built`；Pagefind 找到 3,551 HTML；sitemap 生成；1,632 个下载引用存在 | 构建完成；唯一重复警告是 `/404.html Entry docs → 404 was not found.`。 |
| `pnpm audit --prod` | 1 | 两次重试后 `ENOTFOUND registry.npmjs.org`，没有产生漏洞清单 | **无法完成**，不得解释为无漏洞；AUD-005 由官方 advisory 独立确认。 |
| `pnpm install --frozen-lockfile` | 1 | registry `ENOTFOUND` | 本次不是全新依赖解析/下载证明。 |

### 4.2 i18n 精确状态

| locale | 源页/译文页 | missing / extra | status 输出 | revision current / stale / missing |
|---|---:|---:|---|---:|
| en | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| fr | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| de | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| es | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| pt | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| vi | 283 / 283 | 0 / 0 | reviewed 188；`"reviewed"` 95 | 283 / 0 / 0 |
| ja | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| ko | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| th | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| ru | 283 / 283 | 0 / 0 | reviewed 283 | 283 / 0 / 0 |
| zh-tw | 283 / 283 | 0 / 0 | draft 283 | 283 / 0 / 0 |

越南语的两组是解析器引号 bug，不是 95 页未复核。zh-TW 的 coverage 是文件覆盖，不是语言质量；140 页 fenced 内容仍混简体。更重要的是，revision 同步脚本能把旧正文抬成 current，因此“中文已更新、译文未同步”的真实数量**无法仅凭当前 status 可靠确定**，已归入 AUD-023 和第 7 节。

### 4.3 教程、案例与 examples 复现

环境：`/private/tmp/codex-handbook-audit-2026-11-19/repro/examples`；Darwin arm64；Python 3.15.2；未联网、未安装第三方依赖、未使用真实账号/密钥、未调用模型。

| 练习 | 命令 | 实际结果 | 能证明/不能证明 |
|---|---|---|---|
| `complete-workflows/beginner/first-project` | `PYTHONDONTWRITEBYTECODE=1 python3 validation/reproduce.py` | exit 0；status passed；6 项检查；`model_run:false`、`reader_trial:false` | 文件参考流程可复现；不证明模型效果或读者成功率。 |
| `creator/sales-weekly-report` | `python3 validation/check.py` | exit 0；输入 46 行、纳入 44 行；总额、区域、Top 3 通过 | 证明 fixture 计算；不证明真实业务数据适配。 |
| `team/docs-link-audit` | `python3 validation/test_links.py` | exit 0；7 tests OK | 只测本地 fixture；不测外链。 |
| `team/failure-recovery` | `python3 scripts/reproduce.py --output audit-final-recovery` | exit 0；5 组失败/恢复；原输入未变 | 已存在输出目录会按 README 所述失败；换新目录通过。 |
| `developer/verified-bug-fix` | `node starter/cart.test.js`；`node solution/cart.test.js` | starter exit 1：2 pass/1 fail，actual -360 vs expected 36；solution exit 0：3/3 | 证明失败基线和参考修复；不证明 Codex 会独立修复。 |

补充验证：`article-to-slides` 通过 8 页、原生文本、notes/previews/hash 检查；`source-backed-article` 通过 3 个来源 hash、7 条 claim；`issue-triage` 8 项测试通过。这些都只证明材料、fixture 和验证脚本一致，不是模型语义或真实集成验收。

### 4.4 仓库卫生、案例隐私与正向项

- `.gitignore` 已忽略 `.env*`、`dist/`、`.astro/`、自动生成 zh-TW、`temp/`、`cover-image/`；`git ls-files` 确认后三者未被跟踪。
- `supabase/` 为空且未跟踪，代码中未发现 Supabase URL、依赖或客户端；因此是“无实现可审”，不是“RLS 已安全”。
- 当前跟踪树的常见 key/private-key/Supabase URL 模式检索未发现像真实凭据的命中；未覆盖 Git 历史、ignored 文件、部署 secret 或熵扫描。
- `examples/` 文本未见明显真实邮箱、账号或私钥；`AKIA...EXAMPLE` 和 `.invalid` 邮箱是测试占位符。PPTX core metadata 未见个人邮箱/账号，但未安装 exiftool，不能视为完整取证。
- 当前未发现广告网络、实投赞助或联盟链接；`AdSlot.astro` 是明确标注的招租占位。GA4 与 Clarity 是已确认第三方处理者。
- 283 个中文源页 title/description 齐全；中文构建页 H1/canonical 基本完整；64 张 Markdown 内容图均有非空 alt。

## 5. 架构与工程改进建议（按投入小、收益大排序）

1. **当天，内容小改：** 修 AUD-001、002、012、016 四个安全边界错误；它们会直接改变读者对源码、凭据、覆盖写和审批的判断。
2. **当天，运营开关：** 暂停 GA/Clarity；同步发布真实隐私告知、全站法律入口和 consent settings。不要只改文案不改网络行为。
3. **当天，依赖升级：** 升 Astro/Sharp 到已修复版本，重锁后在隔离分支跑 build、全量 i18n、内链、下载和现有测试。
4. **半天，自动化门禁：** CI 将 `check-i18n-parity --all`、build、内部链接、外链、依赖、secret/绝对路径/pyc 检查设为必过；0-page 检查不得显示绿色。
5. **半天，i18n 正确性：** 禁止 revision 脚本直接把未翻译正文标 current；去掉 zh-TW 日期噪声；增加混合简繁 lint。
6. **1 天，易变事实单点化：** 模型、套餐、命令、slash commands、feature availability、surface/plan/region 和 checkedAt 从 `src/data` 清单生成；页面不再手写日期与数字。
7. **1 天，架构清理：** 更新 content architecture/i18n 维护文档，补 zh-TW glossary，统一 hreflang helper 和 redirect 尾斜杠。
8. **1–2 天，仓库治理：** 清理 telemetry 路径和 pyc，补许可证/贡献授权决策，固定 Node/pnpm，自动生成 examples 和翻译状态索引。
9. **随后，体验预算：** 图片尺寸与延迟加载、dialog 焦点管理、Pagefind/构建体积预算；完成后再以真实浏览器 Lighthouse/axe 复测。

## 6. 长期保鲜机制

### 6.1 页面级元数据

对每个中文源页强制下列字段；迁移期可先覆盖模型、价格、命令、Cloud、安全、套餐和法律页：

~~~yaml
contentType: guide
editorialStatus: verified
reviewed_at: 2026-11-19
verification:
  kind: source-checked
  checkedAt: 2026-11-19
  summary: 核验了哪些易变事实
  evidence:
    - label: OpenAI official page
      href: https://learn.chatgpt.com/...
volatileFacts:
  - id: codex-auto-permissions
    reviewEveryDays: 30
~~~

CI 以 `reviewed_at + reviewEveryDays` 判断过期；“最新、当前、默认、免费、无限、速度、百分比、价格、额度、版本、模型”若无 evidence/checkedAt 则失败。Git 修改时间不能代替复核时间。

### 6.2 易变事实集中维护

- `src/data/productMatrix`：surface × plan × region × availability × official URL × checkedAt。
- `src/data/models`、`pricing`、`commands`、`slashCommands`：页面从清单生成，禁止复制数字和枚举。
- `src/data/thirdPartyServices`：供应商、脚本域、数据、cookie、目的、依据、地区、保留、DPA/隐私链接、lastReviewed；隐私页、CSP 和 consent UI 共用。
- `glossary/terms.yml` 成为所有语言必填矩阵，尤其增加 zh-TW；转换器版本和术语表版本写入生成 manifest。

### 6.3 CI 与定期任务

- PR：frozen install、测试、内链、`i18n --all`、build、下载引用、frontmatter schema、secret/绝对路径/pyc/license provenance、资产预算。
- 每周：官方外链 HEAD→GET 巡检、依赖 audit/advisory、OpenAI Changelog 与本地 manifest 差异；持续两次失败才升级，避免瞬时误报。
- 每月：模型、价格、套餐、命令、Cloud、安全、automations、Pets；自动开 issue，不自动改事实。
- 每季度：完整中文事实复核、10 种人工译文抽查、zh-TW 人工语言复核、真实浏览器 consent/cookie/CSP/移动端/a11y/Lighthouse。
- 高危安全公告：24 小时响应 SLA；禁止在修复前处理不可信构建输入。

### 6.4 多语言与案例保鲜

- 源 hash 变化时只允许把译文变 stale；译者确认正文同步后才能更新 revision。状态页同时展示 coverage、freshness 和 human review 三个独立指标。
- zh-TW 生成后做简体残留、术语、链接、图片、fence 分类检查；draft 页面应决定 noindex 或醒目标注，不能把机器覆盖率当质量。
- 每个 `examples/` 案例记录 fixture 版本、验证命令、环境、`model_run`、`reader_trial`、版权/来源 manifest；季度在干净容器复跑。
- 法律页记录 `lastReviewed`、`reviewerRole`、`implementationRevision`；代码中的第三方域必须和披露清单双向一致。

## 7. 无法核实的条目

1. **`pnpm audit` 漏洞全量结果**：registry DNS `ENOTFOUND`；本报告只确认官方 advisory 中的 Astro 风险，不能写“其余无漏洞”。
2. **全新安装可重复性**：frozen install 失败，build 使用复制的现有依赖树；不能证明干净联网环境一次安装成功。
3. **真实 Lighthouse、Core Web Vitals、axe 和屏幕阅读器结果**：仓库无本地 Lighthouse/Chrome CLI，本次未安装浏览器工具；不能给 LCP/CLS/INP、对比度、焦点顺序或分数。
4. **生产索引与搜索表现**：未访问 Search Console、生产日志或真实 Pagefind 查询；SEO 结论来自源码和本地构建。
5. **10 种跟踪译文的语言质量与真实 stale 数量**：未做母语逐页复核，且 revision 工具可 false green；283 current 不能证明语义同步。
6. **第三方 Dream Skin v1.5.18** 的当前兼容性、安全和卸载恢复：未下载/执行来源不明软件。
7. **案例模型成功率与读者成功率**：验证器只测 fixture/hash/结构/参考答案，没有真实模型盲测或读者试验。
8. **截图、插图、PPT、PDF 的完整版权链、人物/品牌授权和像素内隐私**：无完整票据，基础 metadata/字符串扫描不能证明权利清洁。
9. **Pet 私有目录格式是否仍适用于某个内部版本**：官方公开文档没有该 schema；只能确认不应作为已验证公开主路径，不能断言任何内部版本都无效。
10. **Cloud、事件触发、Plugins/MCP、移动远程等账号级功能的现场可用性**：取决于套餐、地区、组织策略和账号；本次未用真实账号制造外部状态。
11. **GA/Clarity 的生产 cookie、数据落地和撤回表现**：未在 EEA/中国生产环境抓包；源码已足以确认“加载前无 consent gate”，但具体字段/保留仍需后台配置和 DPA 记录。
12. **`supabase/` RLS**：目录为空且无 Supabase 实现；无法评价不存在的表和策略，也不应写成“安全”。

## 8. 同日修复状态

### 已闭环（39 项）

`AUD-001`、`002`、`003`、`005`–`017`（不含 `018`）、`019`–`034`、`036`、`038`–`040`、`044`–`046` 已完成内容或工程修复，并经过针对性复核。主要结果包括：纠正 Cloud/IDE/secrets/审批边界；更新模型、命令、Skills、Rules、Pets、Automations 与结构化输出；价格改为数据驱动；统计默认拒绝并可撤回；升级 Astro/Starlight/Sharp；补 CI、外链、依赖审计、凭据与仓库卫生门禁；修复 i18n false-green、确定性 zh-TW 和术语；补法律入口、独立项目声明、hreflang、SEO、CSP 与可访问 dialog。

### 部分闭环（2 项）

- `AUD-004`：统计行为与中文隐私告知现已一致，Google/Microsoft、用途、同意、撤回、保留不确定性与跨境风险均已披露；但运营主体的法定名称、所在地，以及生产托管商/日志保留仍需站点权利人提供，仓库不能推断。
- `AUD-018`：条款现已明确“仓库尚无统一许可证、公开访问不自动授予再利用权”，消除了误导；选择代码/文档/媒体许可证及既有贡献授权仍须权利人决定。

### 仍待后续（6 项）

- `AUD-035`：构建继续出现 Starlight 默认 404 查找警告；官方说明默认页可正常生成，自定义 `404.md` 或完全自定义 route 才能消除，需与多语言路由方案一起决定。
- `AUD-037`：尚未为 283 个中文源页全面补齐 `reviewed_at`、`contentType`、`editorialStatus` 和结构化 verification。
- `AUD-041`、`042`、`043`、`047`：正文图片固有尺寸/延迟加载、跨语言任务型 IA、全站公式化表达清理、README 大图与构建体积优化尚未实施。

### 修复后验证（2026-11-19）

- `pnpm build`：exit 0；3,445 pages；Pagefind 3,551 HTML；1,632 个下载引用通过；仅保留上述 404 警告。
- `pnpm audit --prod`：受控联网重跑 exit 0，`No known vulnerabilities found`。
- `node --test scripts/*.test.mjs`：20/20；内链 15,744 个、3,730 个源文件；仓库卫生 4,489 个路径、0 问题。
- 全量 i18n：283 个源页、2,830 个 locale checks、0 结构问题；34 个中文更新页对应的 340 个译文已诚实标为 `stale`。
- zh-TW：283/283 确定生成；225 个显式可翻译 fence 与期望结果一致；无语言标签和代码 fence 保持原样。

---

### 审计时执行摘要（修复前，不超过 10 行）

- 共确认 **P0 5、P1 22、P2 15、P3 5**。
- 最严重五项：IDE→Cloud 本地源码边界写反；Cloud secrets 生命周期写错；GA/Clarity 未经选择即加载；隐私政策与实现不符；Astro/Sharp 命中高危 AVIF RCE 范围。
- 第一顺序：当天修四个安全边界文案，并暂停统计或上线默认拒绝的 consent gate。
- 第二顺序：升级 Astro/Sharp，重锁依赖并在隔离环境跑全量门禁。
- 第三顺序：修 i18n false-green、zh-TW 混简体和日期非确定性。
- 第四顺序：集中维护模型、价格、命令、功能矩阵和核验日期，再补缺失专题。
- 283 个中文源页已纳入；5 组主复现和 3 组补充验证通过其 fixture/脚本边界。
- 未覆盖：联网 `pnpm audit`、干净安装、真实 Lighthouse/axe/屏幕阅读器、生产索引/CWV、母语译文复核、真实账号功能与完整版权链。

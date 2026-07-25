# 路线图

## 已完成：MVP（2026-07-25）

可上线简体中文黄金路径：

- `00-start-here`–`02-getting-started` 全写
- `03-learning-paths` 初学者五步 + 其他角色概览
- `04-product-guides` 桌面 App 全写；CLI/IDE 最小可用；Cloud/移动/集成概述
- `05-core-capabilities` prompting / context / quality 全写；tools 与 agent-work 精简
- `12-reference` 术语、FAQ、对照、排障索引、官方资源

范围约定见 [docs/planning/mvp-scope.md](docs/planning/mvp-scope.md)。

## M2 — 产品与能力补齐（已完成）

**已完成（2026-07-25，第三轮）**

- `04` Cloud：`internet-access`、`delegate-and-follow-up`、`troubleshooting`；更新 `web-and-cloud/index`、`cloud-environments` 交叉链接
- `04` CLI：`commands-and-shortcuts`、`approvals-and-sandbox`；更新 `cli/index`
- `05` files-and-artifacts：`pdf-and-documents`、`tables-and-spreadsheets`、`presentations`；更新章节 `index`
- `12-reference`：`environment-variables`、`keyboard-shortcuts`、`error-reference`；更新 `index`
- i18n：`en/04-product-guides/cli/non-interactive-mode`、`configuration` 英文 stub

**待完成**

- 关键安装与权限页尽量升到 `verified`
- 依据 [外部资料整合计划](docs/planning/external-source-integration.md) 持续事实核验

## M3 — 个性化与工作流（已完成起步）

**已完成（2026-07-25，第四轮）**

- `06` rules：`command-rules`、`team-rules`（与既有 `allow-and-deny-patterns` 组成规则细目起步）
- `09-workflows` 全章大纲页：除 EPXV 等既有页外，补齐 `brainstorm-before-building`、`specification-driven-work`、`test-driven-work`、`review-before-merge`、`research-with-sources`、`artifact-first-work`、`failure-recovery`、`turn-a-workflow-into-a-skill`

**待完成**

- `06` configuration 细目（`config-file-locations`、`sandbox-settings`、`managed-configuration` 等）
- `06` `agents-md/monorepo-patterns`、`reusable-templates`

## M4 — 扩展与实例（已完成起步）

**已完成（2026-07-25，第四轮）**

- `07` hooks：`hook-event-types`、`hooks-examples`
- 首批 `examples/prompts/`（4 篇，含元数据与验收标准）+ `examples/README.md`

**待完成**

- `07` hooks 余页（`prompt-scanning`、`validators`、`logging-and-auditing`）
- `07` skills / mcp / plugins / automations 深页
- `examples/skills/`、`examples/configurations/` 首批实例

## M5 — 案例与开发者平台（已完成起步）

**已完成（2026-07-25，第四轮）**

- `08` `non-interactive/`：`codex-exec`、`scripts-and-pipelines`、`structured-output`、`exit-codes-and-retries`
- `08` `webhooks/overview`
- `10-use-cases`：`team-automation/`（2 篇）、`research-and-learning/competitive-feature-matrix`
- i18n：`en/08-developer-platform/non-interactive/codex-exec` stub

**待完成**

- `08` `codex-sdk/`、`app-server/`、`ci-cd/` 余页、`architecture-patterns/`
- `10-use-cases` 更多领域（`design-and-prototyping`、`qa-and-testing`、`personal-productivity` 等）

## M6 — 团队、贡献与多语言（已起步）

**已完成（2026-07-25，第四轮）**

- `11-team-enterprise` 起步：`index`、`security/threat-model`、`security/plugin-and-mcp-risk`、`security/prompt-injection`、`governance/acceptable-use`
- `13-contributing` 起步：`index`、`write-a-guide`、`add-a-prompt-example`、`verify-technical-content`
- i18n：`en/11-team-enterprise/index`、`en/13-contributing/index` stub

**待完成**

- `11` adoption、administration、deployment-patterns 全树
- `13-contributing` 余页（案例、Skill 示例、翻译、发布流程）
- 启动 `en` / `zh-tw` 等译文（源文稳定页优先）
- `12-reference/security-checklists/`、`prompt-pattern-index` 等 P2 参考页

# 完整章节大纲

> 本文件保留详细素材池和历史章节规划。公开网站导航以 `guide/`、`prompts/`、`skills/`、`cases/` 四模块为准。

本文件定义各部分的页面范围。路径相对 `src/content/docs/`；章节首页为 `index.md`。文件路径（去掉扩展名）作为临时页面 ID；正式写作时可继续细分，但不得改变所在部分的职责。

## 00 · 从这里开始

```text
00-start-here/
├── index.md
├── what-is-codex.md
├── who-is-this-handbook-for.md
├── choose-your-path.md
├── codex-capability-map.md
├── prerequisites.md
├── terminology-for-beginners.md
└── handbook-version-policy.md
```

解释 Codex 是什么、能做什么、不能做什么；说明 App、CLI、IDE、Cloud 的关系；提供按角色、任务和产品选择路线的入口。

## 01 · 基础概念

```text
01-foundations/
├── index.md
├── ai-and-language-models.md
├── agent-basics.md
├── goals-context-and-actions.md
├── files-tools-and-commands.md
├── local-vs-cloud.md
├── threads-tasks-and-projects.md
├── permissions-and-approvals.md
├── sandbox-and-network.md
├── models-and-reasoning.md
├── tokens-context-and-compaction.md
├── verification-and-human-review.md
└── common-misconceptions.md
```

重点解释模型、Agent、工具、Skill、Plugin 和 MCP 的区别，以及权限、沙箱、上下文和人工复核。

## 02 · 快速上手

```text
02-getting-started/
├── index.md
├── account-plans-and-access.md
├── choose-your-codex-client.md
├── install-desktop-app.md
├── install-cli.md
├── install-ide-extension.md
├── sign-in-and-authentication.md
├── create-your-first-project.md
├── run-your-first-task.md
├── review-the-result.md
├── undo-and-recover.md
├── first-30-minutes.md
└── beginner-safety-checklist.md
```

目标是让零基础读者在安全练习项目中完成第一次任务，并学会检查、接受、修改或撤销结果。

## 03 · 学习路径

```text
03-learning-paths/
├── index.md
├── beginner/
│   ├── 01-talk-to-codex.md
│   ├── 02-work-with-files.md
│   ├── 03-give-clear-tasks.md
│   ├── 04-review-results.md
│   └── 05-complete-first-project.md
├── creator/
│   ├── 01-research-and-ideation.md
│   ├── 02-writing-and-editing.md
│   ├── 03-images-and-presentations.md
│   ├── 04-websites-and-prototypes.md
│   └── 05-repeatable-content-workflows.md
├── developer/
│   ├── 01-understand-a-codebase.md
│   ├── 02-fix-and-implement.md
│   ├── 03-test-and-review.md
│   ├── 04-automate-workflows.md
│   └── 05-multi-agent-development.md
└── team/
    ├── 01-shared-instructions.md
    ├── 02-permissions-and-governance.md
    ├── 03-standardized-workflows.md
    ├── 04-quality-and-security.md
    └── 05-adoption-and-measurement.md
```

学习路径只编排顺序，通过链接组合其他部分的权威内容。

## 04 · 产品使用手册

```text
04-product-guides/
├── index.md
├── desktop-app/
│   ├── installation-and-interface.md
│   ├── projects-and-tasks.md
│   ├── parallel-agents.md
│   ├── worktrees.md
│   ├── diffs-comments-and-review.md
│   ├── integrated-terminal.md
│   ├── local-and-cloud-tasks.md
│   ├── notifications.md
│   ├── settings.md
│   └── troubleshooting.md
├── cli/
│   ├── installation-and-updates.md
│   ├── interactive-mode.md
│   ├── non-interactive-mode.md
│   ├── commands-and-shortcuts.md
│   ├── images-and-multimodal-input.md
│   ├── approvals-and-sandbox.md
│   ├── sessions-and-resume.md
│   ├── configuration.md
│   ├── scripting.md
│   └── troubleshooting.md
├── ide/
│   ├── supported-editors.md
│   ├── installation.md
│   ├── editor-context.md
│   ├── selected-code-and-open-files.md
│   ├── local-task-workflow.md
│   ├── cloud-task-workflow.md
│   ├── reviewing-changes.md
│   ├── settings.md
│   └── troubleshooting.md
├── web-and-cloud/
│   ├── cloud-overview.md
│   ├── connect-github.md
│   ├── cloud-environments.md
│   ├── environment-setup.md
│   ├── secrets-and-variables.md
│   ├── internet-access.md
│   ├── delegate-and-follow-up.md
│   ├── create-pull-requests.md
│   ├── code-review.md
│   └── troubleshooting.md
├── mobile-and-remote/
│   ├── mobile-overview.md
│   ├── connect-to-local-environment.md
│   ├── monitor-long-running-tasks.md
│   ├── approve-and-redirect.md
│   └── remote-security.md
└── integrations/
    ├── github.md
    ├── slack.md
    ├── linear.md
    └── integration-selection-guide.md
```

本部分只描述各入口的操作、状态和差异；通用方法放入核心能力或工作流。

## 05 · 核心能力

```text
05-core-capabilities/
├── index.md
├── prompting/
│   ├── prompt-basics.md
│   ├── anatomy-of-a-good-task.md
│   ├── provide-goals-and-context.md
│   ├── define-constraints.md
│   ├── define-done.md
│   ├── ask-for-a-plan.md
│   ├── iterative-prompting.md
│   ├── prompting-with-images.md
│   ├── prompting-for-long-tasks.md
│   ├── prompting-anti-patterns.md
│   └── prompt-debugging.md
├── context/
│   ├── project-context.md
│   ├── file-and-folder-context.md
│   ├── conversation-context.md
│   ├── context-priority.md
│   ├── compaction.md
│   ├── keep-context-focused.md
│   └── sensitive-context.md
├── files-and-artifacts/
│   ├── text-and-code-files.md
│   ├── images-and-screenshots.md
│   ├── documents-and-pdfs.md
│   ├── spreadsheets.md
│   ├── presentations.md
│   └── generated-artifacts.md
├── tools/
│   ├── shell-and-terminal.md
│   ├── web-search.md
│   ├── browser.md
│   ├── computer-use.md
│   ├── image-generation.md
│   ├── voice.md
│   └── tool-selection.md
├── agent-work/
│   ├── planning.md
│   ├── goals.md
│   ├── long-running-work.md
│   ├── parallel-work.md
│   ├── subagents.md
│   ├── progress-and-steering.md
│   └── handoff-and-resume.md
└── quality/
    ├── review-diffs.md
    ├── run-tests.md
    ├── verify-artifacts.md
    ├── validate-sources.md
    ├── handle-uncertainty.md
    └── definition-of-done.md
```

提示词教学使用“目标、背景、输入、约束、验收标准、权限边界”的稳定框架，不提供无法解释的万能咒语。

## 06 · 个性化与项目配置

```text
06-customization/
├── index.md
├── personal-preferences.md
├── memories-and-persistent-context.md
├── project-instructions.md
├── agents-md/
│   ├── what-is-agents-md.md
│   ├── scope-and-precedence.md
│   ├── writing-effective-instructions.md
│   ├── monorepo-patterns.md
│   └── examples.md
├── configuration/
│   ├── config-basics.md
│   ├── config-file-locations.md
│   ├── profiles.md
│   ├── environment-variables.md
│   ├── model-and-reasoning-settings.md
│   ├── approval-settings.md
│   ├── sandbox-settings.md
│   └── managed-configuration.md
├── rules/
│   ├── command-rules.md
│   ├── allow-and-deny-patterns.md
│   └── team-rules.md
└── reusable-templates.md
```

必须明确个人偏好、项目说明、目录约束、团队强制配置和临时任务提示词的优先级与边界。

## 07 · 扩展与自动化

```text
07-extensions-automation/
├── index.md
├── capability-map.md
├── skills/
│   ├── skills-overview.md
│   ├── when-to-use-a-skill.md
│   ├── skill-anatomy.md
│   ├── create-your-first-skill.md
│   ├── instructions-resources-and-scripts.md
│   ├── trigger-design.md
│   ├── test-and-debug.md
│   ├── share-with-a-team.md
│   ├── versioning.md
│   ├── security.md
│   └── skill-patterns.md
├── plugins/
│   ├── plugins-overview.md
│   ├── skills-mcp-and-apps.md
│   ├── install-and-manage.md
│   ├── build-a-plugin.md
│   ├── test-and-publish.md
│   └── security-and-privacy.md
├── mcp/
│   ├── mcp-overview.md
│   ├── connect-an-mcp-server.md
│   ├── local-and-remote-servers.md
│   ├── authentication.md
│   ├── tool-design.md
│   ├── debugging.md
│   └── security.md
├── hooks/
│   ├── hooks-overview.md
│   ├── prompt-scanning.md
│   ├── validators.md
│   ├── logging-and-auditing.md
│   ├── memory-workflows.md
│   └── hooks-examples.md
├── automations/
│   ├── scheduled-tasks.md
│   ├── recurring-monitors.md
│   ├── notifications.md
│   ├── long-running-goals.md
│   └── safe-automation-design.md
└── choosing-an-extension-method.md
```

核心问题是如何在提示词、`AGENTS.md`、Skill、Plugin、MCP、Hook 和自动化之间选择，以及如何测试、共享、升级和审查。

## 08 · 开发者平台

```text
08-developer-platform/
├── index.md
├── codex-sdk/
│   ├── overview.md
│   ├── installation.md
│   ├── create-and-resume-threads.md
│   ├── structured-results.md
│   ├── error-handling.md
│   └── production-patterns.md
├── app-server/
│   ├── overview.md
│   ├── protocol-and-lifecycle.md
│   ├── client-integration.md
│   └── security.md
├── non-interactive/
│   ├── codex-exec.md
│   ├── scripts-and-pipelines.md
│   ├── structured-output.md
│   └── exit-codes-and-retries.md
├── ci-cd/
│   ├── github-action.md
│   ├── code-review-automation.md
│   ├── issue-triage.md
│   ├── release-workflows.md
│   └── secure-credentials.md
└── architecture-patterns/
    ├── human-in-the-loop.md
    ├── agent-as-a-service.md
    ├── event-driven-agents.md
    └── observability-and-evaluation.md
```

面向把 Codex 嵌入应用、脚本、内部工具和 CI/CD 的开发者。

## 09 · 工作流方法

```text
09-workflows/
├── index.md
├── explore-plan-execute-verify.md
├── brainstorm-before-building.md
├── specification-driven-work.md
├── test-driven-work.md
├── diagnose-before-fixing.md
├── review-before-merge.md
├── research-with-sources.md
├── artifact-first-work.md
├── multi-agent-coordination.md
├── long-running-task-management.md
├── human-approval-patterns.md
├── failure-recovery.md
└── turn-a-workflow-into-a-skill.md
```

工作流不绑定单一产品界面，强调输入、过程检查点、人工决策和最终验证。

## 10 · 场景与案例库

```text
10-use-cases/
├── index.md
├── case-study-template.md
├── beginner/
├── content-creation/
├── software-development/
├── design-and-prototyping/
├── research-and-learning/
├── data-and-analysis/
├── documents-and-office/
├── product-and-project-management/
├── marketing-and-operations/
├── qa-and-testing/
├── security/
├── science-and-engineering/
├── personal-productivity/
└── team-automation/
```

案例必须从真实目标出发，覆盖准备、执行、检查、失败恢复和复盘，不局限于软件开发。

## 11 · 团队与企业

```text
11-team-enterprise/
├── index.md
├── adoption/
│   ├── readiness-assessment.md
│   ├── pilot-program.md
│   ├── training-path.md
│   └── adoption-metrics.md
├── standards/
│   ├── shared-agents-md.md
│   ├── approved-skills-and-plugins.md
│   ├── prompt-and-workflow-standards.md
│   └── review-checklists.md
├── administration/
│   ├── roles-and-permissions.md
│   ├── groups-and-provisioning.md
│   ├── managed-configuration.md
│   ├── model-availability.md
│   └── remote-connections.md
├── security/
│   ├── threat-model.md
│   ├── sandbox-and-network-policy.md
│   ├── secrets-and-sensitive-data.md
│   ├── prompt-injection.md
│   ├── plugin-and-mcp-risk.md
│   └── incident-response.md
├── governance/
│   ├── analytics.md
│   ├── audit-and-compliance.md
│   ├── acceptable-use.md
│   ├── quality-governance.md
│   └── lifecycle-management.md
└── deployment-patterns/
    ├── small-team.md
    ├── enterprise.md
    ├── regulated-environment.md
    └── remote-development.md
```

## 12 · 参考资料

```text
12-reference/
├── index.md
├── commands/
├── slash-commands/
├── keyboard-shortcuts/
├── configuration-reference/
├── environment-variables/
├── permission-matrix/
├── feature-comparison/
├── platform-support/
├── glossary.md
├── faq.md
├── troubleshooting/
├── error-reference/
├── security-checklists/
├── prompt-pattern-index.md
├── skill-pattern-index.md
├── official-resources.md
└── changelog.md
```

参考资料应短、准、可搜索，并标注适用版本与核验日期。

## 13 · 参与贡献

```text
13-contributing/
├── index.md
├── propose-content.md
├── write-a-guide.md
├── write-a-case-study.md
├── add-a-prompt-example.md
├── add-a-skill-example.md
├── verify-technical-content.md
├── update-screenshots.md
├── translate-content.md
├── review-a-translation.md
├── report-outdated-content.md
└── release-process.md
```

贡献规范覆盖选题、写作、技术核验、实例复现、翻译复核、过期报告和发布。

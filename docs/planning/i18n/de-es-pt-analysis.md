# Deutsch / Espanol / Portugues translation analysis

## Scope

- Authoritative source: the current Simplified Chinese files returned by `git diff --name-only -- src/content/docs/guide src/content/docs/prompts src/content/docs/skills src/content/docs/cases`.
- The working tree currently contains 66 changed source pages. This is four more than the initial 62-page estimate, so this pass uses the live 66-page set to avoid leaving newly changed pages stale.
- Target locales: `de`, `es`, and `pt`.
- Translation mode: Refined.
- Audience and style: technical readers; concise, native technical-documentation prose.
- Image scope: the nine newly added `*-zh-cn.svg` diagrams. Their visible strings are translated through locale dictionaries; the SVG source files are not edited in this task.

## Content summary

The source set teaches Codex from first use through advanced extension and automation workflows. It covers client selection, installation and authentication, App/CLI/IDE/Cloud workflows, sandboxing and approvals, non-interactive execution, AGENTS.md, profiles, MCP, Hooks, Plugins, scheduled tasks, subagents, contribution guidance, and verified examples.

The translations must preserve the source's progression: explain the decision first, show the smallest useful example, then add operational constraints, verification steps, and links to deeper material.

## Terminology

| Source concept | German | Spanish | Portuguese | Rule |
|---|---|---|---|---|
| Codex / ChatGPT | Codex / ChatGPT | Codex / ChatGPT | Codex / ChatGPT | Product names remain unchanged. |
| Agent | Agent | Agent | Agent | Keep the official product term; translate surrounding grammar naturally. |
| App / CLI / IDE / Cloud | App / CLI / IDE / Cloud | App / CLI / IDE / Cloud | App / CLI / IDE / Cloud | Keep surface names unchanged. |
| MCP / Hook / Plugin / Skill | MCP / Hook / Plugin / Skill | MCP / Hook / Plugin / Skill | MCP / Hook / Plugin / Skill | Keep extension mechanism names unchanged. |
| Worktree | Worktree | worktree | worktree | Keep the Git term; explain once where necessary. |
| sandbox | Sandbox | sandbox | sandbox | Prefer the established technical term. |
| approval | Genehmigung/Freigabe | aprobacion | aprovacao | Use the natural locale term in prose; do not alter config keys. |
| setup phase | Einrichtungsphase | fase de configuracion | fase de configuracao | Secrets are available here only. |
| Agent phase | Agent-Phase | fase del Agent | fase do Agent | Secrets have been removed before this phase. |
| diff | Diff | diff | diff | Keep the developer-facing term. |
| `--cd` / `-C` | unchanged | unchanged | unchanged | Replace stale `--cwd`; never translate command flags. |

## Tone and style

- German: direct technical prose, moderate compounds, imperative steps where the source is procedural, no unnecessary English capitalization.
- Spanish: neutral international Spanish, direct second person only where the source addresses the reader, stable technical vocabulary.
- Portuguese: neutral technical Portuguese consistent with the existing locale, avoiding mixed Brazilian/European forms inside a page.
- All locales: preserve headings, tables, callouts, code blocks, commands, configuration keys, official URLs, factual qualifications, and validation status.

## Translation challenges

- Current product surfaces: older translations describe a legacy "Codex Desktop" or collapse IDE integrations into one extension. The revision must distinguish the ChatGPT desktop App, VS Code-compatible extensions, Xcode/JetBrains integrations, CLI, and Cloud exactly as the source does.
- Command drift: stale `--cwd` examples must become current `--cd` or `-C` forms without altering shell semantics.
- Cloud secret lifecycle: environment variables are available during setup and Agent phases; Secrets are available only during setup and are removed before the Agent phase. This distinction must remain explicit.
- Permissions: Permission Profiles Beta and legacy sandbox/approval configuration are distinct models and must not be presented as composable.
- Link localization: internal links must begin with `/de/`, `/es/`, or `/pt/`; official external URLs remain unchanged.
- Diagram localization: every visible Chinese `<title>`, `<desc>`, and `<text>` string in the nine new diagrams must have one exact dictionary entry per locale. Product terms and code-like tokens remain unchanged.
- Metadata: every translated page receives the current source SHA-1 prefix, `translation_status: reviewed`, and the fixed translation/review date `2026-08-26`.

## Review gates

1. Target page count matches the 66-page source set for each locale.
2. No stale `--cwd` remains in the scoped pages.
3. No scoped page references a `-zh-cn.svg`; all nine new diagrams use their locale suffix.
4. Internal links in scoped pages use the target locale prefix.
5. Frontmatter revision hashes match the corresponding Chinese sources.
6. Diagram dictionaries cover the union of all visible Chinese strings without missing or extra keys.
7. Markdown links, frontmatter, and the full site build remain valid.

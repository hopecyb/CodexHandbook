# English / French localization analysis

Date: 2026-08-26  
Mode: Refined  
Audience: technical  
Style: technical documentation

## Scope

The authoritative source set is the output of:

```bash
git diff --name-only -- src/content/docs/guide src/content/docs/prompts src/content/docs/skills src/content/docs/cases
```

The command currently returns 66 Simplified Chinese pages. Each page has an existing English and French counterpart. The task is a source-aligned revision, not a review of the old translation in isolation.

## Content summary

The changed pages form the handbook's practical learning path: choosing a Codex client, installing and authenticating, using App/CLI/IDE/Cloud, defining permissions, extending Codex with Skills/MCP/Hooks/Plugins/automations/subagents, and completing verified development work. The source voice is concise, procedural, and evidence-oriented.

## Terminology

| zh-CN source | English | Français | Rule |
|---|---|---|---|
| Codex | Codex | Codex | Product name; never translate |
| Agent / 主 Agent / 子 Agent | Agent / main Agent / subagent | Agent / Agent principal / sous-agent | Preserve `Agent` as the product concept |
| 桌面 App | desktop App | App de bureau | Use App, not legacy “Codex Desktop” |
| 工作树 | worktree | worktree | Preserve the Git term |
| 审查 | review | revue | `diff review` may stay partly English in code contexts |
| 沙箱 | sandbox | sandbox | Standard technical term |
| 审批 | approval | approbation | Distinguish from sandbox scope |
| 权限配置文件 | Permission Profile | profil d'autorisation | Product concept; mention English on first use if useful |
| 配置 Profile | config profile | profil de configuration | Distinct from Permission Profile |
| 环境变量 | environment variable | variable d'environnement | Available during setup and Agent phases |
| Secret | Secret | Secret | Product term; available only to the setup script |
| 技能 | Skill | Skill | Preserve Codex mechanism name |
| Hook | Hook | Hook | Preserve event and JSON field names exactly |
| 插件 | Plugin | Plugin | Preserve mechanism name |
| 定时任务 | scheduled task | tâche planifiée | Preserve UI label `Scheduled` when referenced |
| 模型上下文协议 | Model Context Protocol (MCP) | Model Context Protocol (MCP) | Expand once where the source does |
| 验收 | acceptance criteria / verification | critères d'acceptation / vérification | Choose by sentence role |

## Voice and style

- Write as if each page were authored natively for developers.
- Prefer direct imperatives and short declarative sentences.
- Preserve headings, tables, lists, code, commands, configuration keys, filenames, and official URLs.
- Do not capitalize generic concepts merely because an old translation did so.
- French uses normal technical-documentation sentence case and idiomatic infinitive/imperative constructions; avoid English calques such as *committer* where a clearer French phrase is available, except established Git nouns and commands.

## Translation challenges and controls

- **Product drift:** old pages describe a standalone Codex desktop surface. Use the current ChatGPT desktop App model in the source.
- **CLI drift:** replace legacy `--cwd` with current `--cd` / `-C`; never translate flags.
- **Cloud Secret lifecycle:** Secrets are exposed only to the setup script and removed before the Agent phase. Ordinary environment variables span both phases but are for non-sensitive configuration.
- **Profiles:** config profiles selected with `--profile` / `-p` are different from beta Permission Profiles.
- **Links:** internal documentation links must use `/en/...` or `/fr/...`; official external URLs remain unchanged.
- **Localized diagrams:** references to the nine new `*-zh-cn.svg` assets become `*-en.svg` or `*-fr.svg`. Diagram label dictionaries cover every visible `<title>`, `<desc>`, and `<text>` string.
- **Revision tracking:** `source_revision` is the first seven characters of the current source file's SHA-1 object ID. Both `translated_at` and `reviewed_at` are `2026-08-26`; `translation_status` is `reviewed` only after source comparison.

## Review gates

1. No `--cwd`, `outdated`, legacy Codex Desktop wording, or draft translation status in the 66-page target set.
2. No unprefixed internal `/guide`, `/skills`, `/prompts`, or `/cases` links.
3. Every source page has both locale counterparts and matching source revision.
4. Every referenced new diagram points to the target locale.
5. English and French preserve code blocks and official URLs without translation.

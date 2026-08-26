# External Content Absorption Audit

Source reviewed: the English originals in the absorption source directory, with translated mirrors treated as non-authoritative copies.

## Executive Summary

The source material is valuable as an example-driven advanced-agent guide, but it should not be imported wholesale. The strongest material for this site is not any product-specific command inventory; it is the reusable editorial pattern: progressive learning paths, copyable workflow templates, role-based subagents, memory/project-instruction hygiene, hook guardrails, MCP safety framing, and extension packaging.

The Codex Handbook already covers most target topics, so additions should be selective and rewritten as Codex-native guidance.

## Worth Adding

| Source area | Value | Recommended target |
|---|---|---|
| `LEARNING-ROADMAP.md`, `README.md` | Clear beginner-to-power-user progression with time-boxed modules | `src/content/docs/en/guide/learning-paths/index.md` |
| `01-slash-commands/*.md` | Reusable prompt-command patterns for PR prep, docs generation, test expansion, optimization | Add examples to prompt templates or slash-command quick reference, rewritten without source-product command names |
| `02-memory/*.md` | Good distinction between personal, project, directory, and local instruction layers | Existing memory and `AGENTS.md` pages |
| `03-skills/*/SKILL.md` | Concrete examples of skill anatomy with scripts, templates, and references | Existing Skills examples and skill anatomy pages |
| `04-subagents/*.md` | Practical role library: reviewer, test engineer, documentation writer, debugger, security reviewer | Existing Subagents and multi-agent coordination pages |
| `05-mcp/*.json`, `05-mcp/README.md` | Read-only-first MCP onboarding and integration examples | Existing MCP overview and connect pages |
| `06-hooks/*.sh`, `06-hooks/README.md` | Guardrail examples: pre-tool checks, format-on-write, secret scan, audit logging, session summary | Existing Hooks overview and examples pages |
| `07-plugins/*` | Plugin as distribution bundle for skills, MCP, docs, and team workflows | Existing Plugins overview |
| `08-checkpoints/README.md` | Recoverability and alternate-path exploration | Existing undo/recover and failure recovery pages |
| `09-advanced-features/planning-mode-examples.md` | Planning-mode examples and permission-mode thinking | Existing planning and human approval pages |

## Skip or Keep as Background

| Source area | Reason |
|---|---|
| Full built-in command catalog from the source product | Product-specific, volatile, and not reliable Codex guidance |
| Version-by-version release details | Too unstable for this handbook unless independently verified against official Codex docs |
| Source-product installation commands and binary notes | Off-topic for Codex Handbook |
| Source branding assets and generated website scripts | Not relevant to the current site identity or Astro content model |
| Translated mirrors in `ja/`, `uk/`, `vi/`, `zh/` | Useful for comparison only; English originals are the clean source for extraction |
| Ready-made source-product config paths | Can inspire patterns, but should be translated into Codex mechanisms and naming |

## First Content Moves

1. Add an "advanced operator" learning path that sequences current Codex Handbook pages using the source's progressive-path idea.
2. Expand subagent guidance with a compact role-library table and acceptance pattern.
3. Expand hook guidance with candidate guardrails and an adoption order that starts read-only.
4. Later, add copyable examples for PR prep, documentation generation, test expansion, and optimization as Codex prompt templates.
5. Later, add a "team extension bundle" page explaining when a Skill, MCP server, hook, or plugin should own each part of a workflow.

## Editorial Constraints

- Rewrite every borrowed idea in Codex language.
- Avoid exact command names unless current Codex docs or the local client verify them.
- Prefer conceptual pages plus copyable templates over giant reference tables.
- Mark volatile product details as version-dependent.
- Keep high-risk examples read-only first, especially MCP, hooks, and automation.

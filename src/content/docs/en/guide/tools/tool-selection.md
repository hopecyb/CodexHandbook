---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Task-driven tool selection guidance was cross-checked against the current handbook tool chapters and the definitions of actual tool categories. Prefer file tools for project contents, a terminal for verification commands, search for public facts, and a browser for a real page.
  checkedAt: '2026-07-26'
title: Tool Selection
description: When to use a terminal, search, browser, or another tool.
sidebar:
  order: 10
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 9fdb366
---

“Tool selection” asks which method will complete the task effectively and safely. It is usually clearer to choose by task type.

## What to consider

Ask:

- Which tool fits the current task most closely?
- Which gets the result with the least effort?
- Which has the lowest risk and is easiest to verify?

The wrong tool may still get a result, but often takes longer, adds detours, or creates avoidable surprises.

| Need | Prefer |
|---|---|
| Edit repository files | File tools |
| Run tests or a build | Terminal |
| Check public facts | Web search |
| Inspect a real page | Browser (advanced) |

State which tools are allowed and disallowed in your prompt to reduce unplanned network access or dependency installation.

## If you are unsure

Work through three questions:

1. Is this about a local project or an external fact?
2. Do I need an action performed, or only to inspect a result?
3. Which tool can do this step with the narrowest scope?

For example, use file tools to inspect code changes, a terminal to verify a build, a browser to see how a page looks now, and web search to confirm current public information.

## Common misconceptions

### 1. Stronger is not always better

A more powerful tool may affect more, pose more risk, and demand more understanding of what it does.

### 2. A terminal that can do almost anything need not be your first choice

A browser is usually more direct for seeing what a page actually looks like. Web search is more suitable than running commands across a system merely to check a public version number.

### 3. What if I do not know which to choose?

Use this rule:

- **Read or edit project contents:** File tools.
- **Run verification commands or builds:** Terminal.
- **Check public facts:** Search.
- **See an actual page:** Browser.

### 4. A task can use several tools

Real tasks often combine them: read files and run a build; research a public fact and update documentation; inspect a page in a browser and then fix its code. Use the most appropriate tool at each step rather than insisting on just one.

## A reusable instruction

```text
Prefer files and the terminal for this task. Do not search the internet.
If checking the page in a browser is needed, explain why first.
```

Start with the smallest tool closest to the task, rather than the one with the broadest effects.

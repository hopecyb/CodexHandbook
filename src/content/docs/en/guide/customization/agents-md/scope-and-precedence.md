---
title: "AGENTS.md scope and precedence"
description: "Understand exactly how global, project-root, and current-directory instructions are discovered and merged."
contentType: reference
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Checked the official discovery and merging rules point by point. Directory examples and loading checks are instructional; they do not claim cross-client testing."
  evidence:
    - label: "Official AGENTS.md discovery, override, and validation rules"
      href: https://learn.chatgpt.com/docs/agent-configuration/agents-md
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE、Cloud"
  checkedAt: "2026-08-26"
locale: en
source_locale: zh-CN
source_revision: b5f31cc
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 20
---

Codex builds an instruction chain at the start of every run. The important model is not a guessed ranking that mixes organization policy, configuration, and prompts; first understand how `AGENTS.md` files themselves are discovered.

## Official discovery order

1. **Global layer:** in Codex home (default `~/.codex`), Codex looks for `AGENTS.override.md` and falls back to `AGENTS.md`; it uses only the first non-empty file.
2. **Project layer:** from the project root (usually the Git root) down to the current working directory, each directory is checked for `AGENTS.override.md`, `AGENTS.md`, and configured fallback names; at most one is loaded per directory.
3. **Merge:** content is concatenated from root to current directory. Files closer to the current directory appear later and can therefore override earlier guidance.

Empty files are skipped. Loading stops when merged content reaches `project_doc_max_bytes`, whose default is 32 KiB.

## Monorepo example

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

When started from `services/payments`, the root `AGENTS.md` loads first. Because that directory contains `AGENTS.override.md`, its sibling `AGENTS.md` is ignored.

Put repository-wide rules—package manager, common tests, and security exclusions—at the root. Nested files should contain only incremental service rules. Do not duplicate 80% of the content.

## How task prompts fit

`AGENTS.md` holds lasting, version-controlled project conventions. The prompt holds the current goal, scope, and acceptance criteria:

```text
Follow the applicable AGENTS.md files. For this task, modify only
services/payments/retry.ts and its tests. Do not rotate credentials.
Run make test-payments and report the actual result.
```

A prompt cannot turn an unavailable system, organization, sandbox, or permission capability into an available one. When instructions conflict, ask Codex to list the relevant instruction sources and their scopes. Distinguish adjustable project defaults from actual execution limits. If the scope is clear, authorization already exists, and no higher-level instruction conflicts, continue. Explain the specific blocker only when information or permission is genuinely missing. For the complete comparison, see [Context priority](/en/guide/context/context-priority/).

## Verify what actually loaded

Start a new session in the target directory and ask:

```text
Before working, list the AGENTS.md / AGENTS.override.md sources loaded for this
run in order, then summarize the additional constraints from each. Do not edit files.
```

`AGENTS.md` is read at startup. After changing it, verify in a new run or chat; do not assume a current session hot-reloads it.

## Fallback names and capacity

To use an existing `TEAM_GUIDE.md`:

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

A fallback applies only when no higher-priority file exists in the same directory. Remove duplicate and irrelevant background before increasing capacity so important rules are not crowded out.

## Official source

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

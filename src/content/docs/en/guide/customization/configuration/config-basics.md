---
title: Configuration Basics
description: Codex config file locations, common settings, and intro to approval, sandbox, and model settings.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Configuration lets you **unify Codex behavior** on your machine or in a project without repeating model, approval level, or sandbox policy every session.

## On This Page

- Where configuration lives; how project-level and user-level stack
- What people change most: model, approval, sandbox, default working directory
- Boundary with `AGENTS.md`: configuration manages “capability switches”; AGENTS manages “how to write code in this project”

## What Configuration Actually Controls

Configuration is closer to Codex’s **default working habits**.

For example:

- Which model to use by default
- How tight security boundaries are by default
- Which directory to work in by default

It is not a temporary requirement for one task—it is how work usually starts.

## Configuration Layers

| Layer | Typical location | Content |
|---|---|---|
| User | Configuration under `~/.codex/` (exact filenames per official docs) | Default model, personal approval habits |
| Project | Config snippets in the repo or Codex-related project files | Team-shared sandbox/tool policy |
| Managed | Organization deployment | Mandatory items individuals cannot override |

**Volatile facts** (paths, field names, TOML keys)—follow [OpenAI Codex documentation](https://developers.openai.com/codex); this page describes concepts and how to decide.

## Common Misconceptions

### More configuration is not more professional

Many people want to configure everything at first.

For beginners, usually a few high-frequency settings are enough:

- Default model
- Default approval/sandbox policy
- Default working directory

Stabilizing these first is usually better than studying every field at once.

### Configuration is not project rules

If a requirement is “every collaborator should follow it,” it usually belongs in `AGENTS.md` or project docs, not only on your machine.

For example:

- Which checks before commit
- Which directories must not change
- Which tasks must not auto-push

These should not rely only on personal configuration.

## Common Configuration Intents

### Model and reasoning

- Daily development: balance speed and quality
- Complex refactors: stronger reasoning model (if your plan supports it)
- Scripts/CI: fixed model for reproducibility

Concept background: [Models and Reasoning](/guide/foundations/models-and-reasoning/)

### Approval and sandbox

| Intent | Configuration direction |
|---|---|
| Beginner / untrusted repo | Stricter approval; limit network and write scope |
| Trusted personal project | Reduce interruption within safe bounds |
| Enterprise repo | Follow managed policy; do not relax on your own |

Concept background: [Permissions and Approvals](/guide/foundations/permissions-and-approvals/), [Sandbox and Network](/guide/foundations/sandbox-and-network/)

### CLI and App consistency

The same account on CLI and desktop App should aim for the **same security baseline**—avoid “full CLI permissions, strict App” double standards.

## Minimum Viable Practice

1. Read the official “Configuration” section; confirm file paths for your version
2. Change one thing only—for example default sandbox mode; observe a week before tuning
3. Put team-shared items in repo docs; keep personal preferences local
4. In `AGENTS.md`, write “recommended way to use Codex with this project,” not a full copy of configuration

## How to Decide Where Something Goes

If unsure whether something belongs in configuration, `AGENTS.md`, or the task prompt, ask:

1. Is this a default habit for most tasks?
2. Is this a preference only I care about?
3. Is this a rule the whole project should share?

Usually:

- Default habits → configuration
- Personal preferences → personal layer
- Team consensus → repo

## Relation to CLI Topics

- Interactive use: [CLI Interactive Mode](/guide/cli/interactive-mode/)
- Non-interactive and scripts: [Non-Interactive Mode](/guide/cli/non-interactive-mode/)
- Configuration detail: [CLI Configuration](/guide/cli/configuration/) · [Configuration Reference](/guide/reference/configuration-reference/)

## Common Mistakes

- Turning off all approval for convenience while opening a project in a production data directory
- Putting API keys in configuration and committing to Git
- Docs list config keys that do not match the installed version (no review after CLI upgrade)

## Security Boundaries

Configuration may include **path allowlists, network policy, MCP server lists**—before changing, imagine “could a malicious prompt abuse this setting?” In enterprise environments, administrators should deploy; individuals should not bypass managed policy.

Configuration suits defaults you would otherwise repeat almost every time; you do not need every rule in configuration files.

## References
- OpenAI Codex configuration documentation
---

**Status:** verified  
**Applicable products:** CLI / App  
**Verification basis:** OpenAI Help Center configuration materials still directly use `~/.codex/config.toml` and `~/.codex/.env`, and note that desktop App/IDE may need a restart to read these settings; this page avoids binding volatile key names and keeps only the stable framework of user-level configuration, managed policy, and common intents such as model/approval/sandbox.  
**Last verified:** 2026-07-26

---
title: Secrets and environment variables
description: Safely injecting API keys, tokens, and non-sensitive config into Cloud.
locale: es
source_locale: en
source_revision: 4c6c8f1
translation_status: fallback
translated_at: '2026-07-28'
---

Cloud tasks often need private APIs, package registries, or databases. Credentials should be injected via **Secrets and environment variables**—not written into code, prompts, issues, chat logs, or Git history.

## What's covered

- Secrets vs ordinary environment variables
- How to configure in Cloud console / repo settings
- Relationship to GitHub Actions Secrets

## Secret vs environment variable

A simple split:

- **Secret**: values that must not be visible to others—API keys, DB passwords, private keys
- **Environment variable**: configuration the program reads—some sensitive, some not

Not every env var is a Secret, but Secrets should use secure injection—not hard-coded values.

## Conceptual distinction

| Type | Examples | Storage requirements |
|---|---|---|
| **Secret** | API key, private key, DB password | Encrypted, masked in UI, not in logs |
| **Variable** | `NODE_ENV=production`, feature flags | May be non-encrypted; still avoid leaking business strategy |
| **Repo `.env`** | Local development | **Do not commit**; Cloud uses console Secrets instead |

Sensitive context overview: [sensitive context](/guide/context/sensitive-context/)

## Common misconceptions

### 1. "I'll paste the key just once—how bad can it be?"

High risk. Once a key appears in:

- Conversation
- Issues
- PR descriptions
- Shell history
- Git commits

it can spread via logs, notifications, screenshots, history, and collaborators.

### 2. "I'll commit `.env` so Cloud can read it"

`.env` is for local dev, not version control. In Cloud, prefer platform Secret management.

### 3. "Secret name doesn't matter if the value is right"

Many failures are naming/scope issues:

- Typos
- Wrong scope
- Code reads a different variable name

Keep names consistent across docs, code, and Cloud settings.

## Configuration principles

1. **Least privilege**: each Secret only enough for one class of task
2. **Isolate by repo/environment**: separate staging and production
3. **Rotation**: refresh tokens periodically; accept old tasks may fail
4. **Audit**: track who added/changed Secrets (team process)
5. **Never echo**: task logs and PR comments must not print Secret values

## Minimal setup flow

1. List external services the task must reach
2. Provision only necessary Secrets—avoid full production access on day one
3. Document required Secret **names** in docs—not values
4. Run a test task to confirm read access
5. Proceed with real work

## Recommended workflow

```text
1. Add Secret in Cloud / GitHub settings (UPPER_SNAKE names, e.g. NPM_TOKEN)
2. In AGENTS.md note "NPM_TOKEN required for private packages"—no value
3. Start Cloud task; confirm env can read (on failure check name and scope)
4. Align GitHub Actions Secrets naming with Cloud for easier documentation
```

With [GitHub integration](/guide/integrations/github/), prefer platform-native Secrets over having the Agent copy keys from issue bodies.

## When to treat something as a Secret

If unsure, ask:

- Would leakage cause financial, data, permission, or business harm?

If yes, it must not appear in public docs, prompts, chat, or the repo.

## Internet access and Secrets

Some tasks need outbound package pulls or API calls:

- Outbound policy follows org security rules
- Even with outbound access, do not paste Bearer tokens in prompts
- Default deny production Secret access for untrusted repos

## Common mistakes

| Mistake | Risk |
|---|---|
| Committing `.env` | Permanent leak |
| Pasting keys in issues/task descriptions | Spread via logs and notifications |
| Production Secrets on experiments | Accidental production changes |
| Secret name mismatch with code | Silent task failure |
| Admin token for convenience | Uncontrolled blast radius |

## Acceptance checklist

- [ ] No hard-coded keys in repo (use secret scanner)
- [ ] Cloud Secret names match documentation
- [ ] Failure logs do not contain Secret plaintext
- [ ] Offboarding/rotation process defined

## References

- OpenAI Codex Cloud secrets
- stormzhang `16-security.md`, `10-cloud.md`
- KimYx0207 security and enterprise sections (verify facts against official docs)

---

**Status:** outdated  
**Applicable products:** Cloud  
**Review note:** This page describes Cloud Secret placement, repo scope, and GitHub Actions Secrets relationships concretely, but lacks strong current official Secrets documentation to verify each claim; better marked `outdated` until formal sources are available.  
**Last verified:** 2026-07-26

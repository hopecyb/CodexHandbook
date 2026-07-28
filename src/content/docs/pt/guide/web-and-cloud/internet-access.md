---
title: Internet access
description: Cloud outbound policy, dependency installs, and data-exfiltration risk—how to open only what you need.
locale: pt
source_locale: en
source_revision: f513d7f
translation_status: fallback
translated_at: '2026-07-28'
---

Cloud tasks often need **outbound network access**: pulling npm/PyPI packages, calling APIs, cloning submodules. At the same time, internet access is a high-risk surface for **data exfiltration**—an Agent might send repo or Secret content to external services.

## What's covered

- Whether Cloud environments can reach the internet by default
- When to allow access and how to minimize exposure
- How this fits with local sandbox and Secrets policy

## Basic boundary

"Needs network" does not mean "open everything."

Many people frame it as binary:

- Either no network at all
- Or full access for convenience

The usual approach is to grant only what the task needs—nothing extra.

## Two layers of "network"

| Layer | Meaning |
|---|---|
| Cloud environment outbound | Whether the remote machine can reach the public internet or internal APIs |
| Agent tool networking | In-session web search, curl, etc. (varies by client) |

This page focuses on **Cloud environments**; general concepts: [sandbox and network](/guide/foundations/sandbox-and-network/).

## Why local working does not imply Cloud works

Locally you might succeed because:

- You are already logged into a service on your machine
- You have `.npmrc`, SSH keys, or proxy config locally
- You are on the company VPN

Cloud does not inherit those by default. "Works with `npm install` locally" does not imply Cloud can do the same.

## Typical scenarios needing outbound access

- Install dependencies: `npm install`, `pip install`, `go mod download`
- Pull from private registries (needs [Secrets](/guide/web-and-cloud/secrets-and-variables/))
- Call third-party APIs (payments, maps, LLM gateways, etc.)
- Clone submodules or download build assets

## Decision principle

If a network action is not required for this task, do not open it first.

Examples:

- Package registries for installs: usually required
- Random websites or extra downloads: usually not

## Recommended strategy

### Default tight, open on demand

1. Confirm current network policy in [Cloud environments](/guide/web-and-cloud/cloud-environments/)
2. List **required domains** (package managers, company APIs)—avoid "open entire internet"
3. In `AGENTS.md`, document allowed URLs and forbid putting keys in prompts
4. Validate with a test task: dependencies install; unrelated sites blocked (if fine-grained policy exists)

### Split work with Secrets

| Content | Where |
|---|---|
| API keys, tokens | Cloud Secrets—not in the repo |
| Allowed API base URLs | Docs or env var names (not values) |
| Proxy / mirror URLs | Team standard config |

## Common misconceptions

### 1. Network access is only convenience, not security

Once online, it is simultaneously:

- A dependency download problem
- A credential usage problem
- A data egress problem

### 2. Safe as long as Secrets are not in the prompt

If the environment can read Secrets and send results externally, risk remains.

### 3. Web search equals Cloud outbound

One is remote-environment networking; the other is in-session tool networking—do not mix them when debugging.

### Data exfiltration safeguards

- Do not put production database connection strings in task descriptions
- Watch for attempts to send `.env` or key files externally
- For untrusted repos on first Cloud run, try **no outbound or read-only sandbox**

## Aligning with local development

Local `curl` working does not mean Cloud can—common "red in Cloud" causes:

| Symptom | Possible cause |
|---|---|
| Dependency install fails | Outbound blocked or registry needs auth |
| Submodule won't clone | SSH key not injected via Secrets |
| Internal API timeout | Cloud not on company VPN |

Mitigations: HTTPS + token, reachable mirrors, or document that Cloud cannot reach internal resources.

## Common mistakes

- Globally opening outbound for convenience, then running unbounded tasks on repos with Secrets
- Assuming Cloud shares your laptop's `.npmrc` (not pushed or not in Secrets)
- Confusing "needs network" with "needs web search tool"
- Only discovering missing local login state when install fails

## Acceptance checklist

- [ ] Listed outbound domains/services required for Cloud tasks on this repo
- [ ] Secrets configured and not committed to Git
- [ ] Full install + test passed once on a test branch
- [ ] Team knows what data must never appear in networked prompts

## References

- OpenAI Codex Cloud network and security docs
- stormzhang `10-cloud.md`, `19-security.md`
- KimYx0207 CX-10, CX-11
- codex.bozhouai.com Cloud sections

---

**Status:** outdated  
**Applicable products:** Cloud  
**Review note:** This page covers default Cloud outbound behavior, domain policy, and fine-grained network controls—all highly product- and org-dependent; without strong current official network policy docs, it should not be marked `verified`.  
**Last verified:** 2026-07-26

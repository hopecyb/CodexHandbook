---
title: Cloud troubleshooting
description: Symptom index for GitHub connection, environments, Secrets, outbound access, and PR issues.
locale: de
source_locale: en
source_revision: bf88d3a
translation_status: fallback
translated_at: '2026-07-28'
---

When Cloud fails, rerunning usually does not fix the root cause.

Cloud issues often sit in **permissions, environment differences, credentials, or network**. This page routes symptoms to the right topic so you do not blindly retry in chat.

## What's covered

- What to check first when a task fails
- How Cloud troubleshooting differs from local
- When to step back to local small-step validation

## Check conditions first

If "Cloud red, local green," check runtime conditions first.

Common causes:

- Remote environment differs from local
- Cloud cannot see unpushed local work
- Secrets misconfigured
- Network or permissions restricted

Verify prerequisites before blaming the task itself.

## Quick triage

| Symptom | Check first |
|---|---|
| Cannot connect to repo / 403 | [Connect GitHub](/guide/web-and-cloud/connect-github/) |
| Dependency install fails | [Internet access](/guide/web-and-cloud/internet-access/) · [Cloud environments](/guide/web-and-cloud/cloud-environments/) |
| Private package / API 401 | [Secrets and variables](/guide/web-and-cloud/secrets-and-variables/) |
| Task stuck waiting | [Delegate and follow up](/guide/web-and-cloud/delegate-and-follow-up/) · pending approval? |
| Local commit invisible to Cloud | Pushed? Cloud does not read unpushed local commits |
| Cannot open PR or push | Branch protection · [Create PR](/guide/web-and-cloud/create-pull-requests/) |
| Tests red in Cloud, green locally | Version/env alignment in [Cloud environments](/guide/web-and-cloud/cloud-environments/) |

## Troubleshooting order

1. Correct repo and branch?
2. Sufficient permissions and authorization?
3. Environment and dependencies in place?
4. Secrets and network working?
5. Task description missing key constraints?

Clearing these beats rerunning immediately.

## Connection and permissions

**Symptom:** OAuth succeeds but task cannot clone.

**Check:**

1. Authorization scope includes target org/repo
2. Repo archived or GitHub App restrictions enabled
3. Personal account connected to org repo requiring SSO

**Symptom:** push rejected.

**Check:** branch protection, required review, attempt to push directly to `main`

## Common misconceptions

### 1. Install-stage errors are always dependency problems

Could also be network, auth, Secrets, or private registry permissions.

### 2. Local green means code is fine and Cloud is flaky

Often means:  
**your local environment has prerequisites Cloud lacks.**

### 3. Stuck task means the model is thinking

Could be:

- Waiting for approval
- Waiting on network
- Waiting for environment startup
- Task scope too large

## Environment and dependencies

**Symptom:** `command not found` (node, python, etc.).

**Check:** base image includes required runtime; `AGENTS.md` documents version and install commands.

**Symptom:** lockfile conflict or install timeout.

**Check:** outbound policy; registry mirrors; dependencies requiring VPN (Cloud usually not on internal network)

## Secrets and variables

**Symptom:** env vars empty at build time.

**Check:**

- Secret names match docs (case sensitivity common)
- Configured in correct repo/environment scope
- Accidentally pasted Secret in prompt and got redacted

More: [Secrets and variables](/guide/web-and-cloud/secrets-and-variables/)

## Hung tasks and timeouts

| Cause | Action |
|---|---|
| Awaiting human approval | Approve or reject in App/phone |
| Task too large | Split into smaller delegations |
| Slow environment start | Cold start normal; if persistent, check official status page |

Follow-up: [Delegate and follow up](/guide/web-and-cloud/delegate-and-follow-up/)

## Output quality

Cloud finished but result unusable:

1. Compare against task description—missing acceptance criteria?
2. Checkout same branch locally and run tests
3. Add follow-up using [diagnose before fixing](/cases/workflows/diagnose-before-fixing/) instead of restarting whole task

## When to step back to local

If two rounds were spent on Cloud conditions instead of the task itself:

- Reproduce minimally locally
- Document deps, commands, verification
- Delegate to Cloud again

Usually faster than guessing in the remote environment.

## Relation to global troubleshooting index

CLI/IDE/App local issues: [Reference · Troubleshooting](/guide/reference/troubleshooting/). This page covers **Cloud-specific** paths only.

## References

- OpenAI Codex Cloud support docs
- stormzhang `10-cloud.md`
- KimYx0207 CX-10～CX-11

---

**Status:** outdated  
**Applicable products:** Cloud  
**Review note:** The triage framework helps, but it assumes current Cloud repo connection, Secrets, approval, network, and PR behavior; as Cloud and cross-client capabilities evolve, symptom-to-topic mapping needs a rewrite against latest official support docs.  
**Last verified:** 2026-07-26

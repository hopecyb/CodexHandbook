---
title: Đăng nhập và xác thực danh tính
description: Hoàn thành đăng nhập và xác nhận trạng thái danh tính cùng quyền.
locale: vi
source_locale: zh-CN
source_revision: e17d14f
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 60
reviewed_at: 2026-08-26
---

Codex supports two personal sign-in methods when using OpenAI models:

- **Sign in with ChatGPT:** use subscription allowance and inherit ChatGPT workspace permissions and data policy.
- **Sign in with an API key:** use usage-based API billing and inherit the API organization's data and administration policy.

Local work in the ChatGPT desktop App, Codex CLI, and IDE integrations supports both methods. **Codex Cloud requires ChatGPT sign-in.**

## Sign in with ChatGPT

Local clients open a browser for authorization, then return credentials to the client:

- Desktop App: choose to continue signing in from the signed-out page.
- CLI: run `codex login`.
- IDE: select ChatGPT sign-in from the signed-out page.

Afterward, inspect the active account and workspace, especially when a personal space and company workspace share one email address.

## Sign in with an API key

After creating a key in OpenAI Platform, do not put it directly in command history. The CLI accepts it through standard input:

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

In the desktop App, choose the alternate sign-in method. In the IDE, choose **Use API Key**. API-key sign-in is suitable for local work and trusted CI, but does not provide capabilities that depend on a ChatGPT workspace or Cloud.

## Inspect and clear CLI identity

```bash
codex login status
codex logout
```

CLI and IDE share cached sign-in information. Signing out from one may require signing in again when the other next starts.

## Credential security

- Never commit `~/.codex/auth.json` or paste it into a ticket, chat, or log.
- Prefer operating-system credential storage. Treat tokens in file storage as passwords.
- Use dedicated, revocable CI credentials rather than a long-lived personal key.
- Codex Cloud accesses code repositories directly, so enable MFA for the account. Organization SSO should enforce MFA.
- Do not use a personal key to bypass organization restrictions; inspect the workspace and managed policy first.

## Signed in but still unable to use a feature

Check in this order:

1. Is the correct account or API organization active?
2. Are you in the correct ChatGPT workspace?
3. Does the target capability require ChatGPT sign-in rather than an API key?
4. Do the plan, seat, role, or administrator policy restrict access?
5. Only then inspect client cache, network, and version.

The CLI has dedicated sign-in logs for support and troubleshooting. Inspect those logs for sensitive data before sharing them.

See [Accounts, plans, and access](/vi/guide/getting-started/account-plans-and-access/) for plan boundaries and the [official Authentication page](https://learn.chatgpt.com/docs/auth) for current details.

---

**Trạng thái:** verified

**Áp dụng cho:** App / CLI / IDE / Cloud

**Căn cứ kiểm chứng:** Compared with the current Authentication documentation for ChatGPT and API-key local sign-in, the Cloud ChatGPT requirement, CLI commands, shared credential caching, and storage boundaries.

**Kiểm chứng gần nhất:** 2026-08-26

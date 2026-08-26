---
title: Tài khoản, gói và quyền truy cập
description: Hiểu cách đăng nhập, gói và tiền đề truy cập.
locale: vi
source_locale: zh-CN
source_revision: 7e2e8e6
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 10
reviewed_at: 2026-08-26
---

Codex can currently be used through a **ChatGPT plan** or with **usage-based API-key billing**, but the two methods do not expose identical entry points or governance boundaries.

## Choose an access method first

| Method | Best for | Availability boundary |
|---|---|---|
| Sign in with ChatGPT | Personal interactive work, desktop, Cloud, and organization workspaces | Governed by ChatGPT plan limits, workspace roles, and administrator policies |
| Sign in with an API key | Local Codex, scripts, and CI | Billed by API usage; some ChatGPT-workspace or Cloud features are unavailable |

The current official Pricing page includes ChatGPT Work and Codex in Free, Go, Plus, Pro, Business, Edu, and Enterprise plans. Prices, limits, models, and included features can change. This handbook does not duplicate the price table; consult the [live official Pricing page](https://learn.chatgpt.com/docs/pricing).

## Why an account may still lack access

Signing in is only the first layer. Final access also depends on:

1. whether the current plan includes the target client or feature;
2. whether the product is available in your region;
3. whether your organization assigned the required seat, role, and workspace permission;
4. whether managed configuration restricts sign-in methods, models, or local capabilities;
5. whether usage has reached the current window or weekly limit.

## Personal access checklist

- You can sign in to the correct ChatGPT account on an official page.
- You know whether usage consumes plan limits or usage-based API billing.
- The target client shows the expected identity.
- When a limit appears, you inspect current usage instead of reinstalling the client repeatedly.

## Team and enterprise checklist

- You selected the correct workspace rather than a personal space under the same email.
- An administrator configured membership, seats, and roles.
- SSO, MFA, retention, and regional policies satisfy organization requirements.
- Managed configuration does not force a different local sign-in method.
- The API key belongs to the correct API organization and is not confused with ChatGPT workspace policy.

## Example diagnosis

If the CLI works with an API key but the Cloud button is unavailable, installation may be fine. Cloud requires ChatGPT sign-in and is governed by ChatGPT plan and workspace access; API keys primarily cover local and programmatic workflows.

Next, read [Sign-in and authentication](/vi/guide/getting-started/sign-in-and-authentication/).

---

**Trạng thái:** verified

**Áp dụng cho:** App / CLI / IDE / Cloud

**Căn cứ kiểm chứng:** Compared with the current official Pricing and Authentication pages. This page records the access model and diagnostic order without freezing volatile prices, limits, or feature lists.

**Kiểm chứng gần nhất:** 2026-08-26

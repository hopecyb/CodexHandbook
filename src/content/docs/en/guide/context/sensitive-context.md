---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only explains data minimization and redaction for sensitive information; its concepts, risk examples, and handling advice have been checked, and it does not rely on volatile product facts."
  checkedAt: "2026-07-26"
title: Sensitive context
description: Secrets, privacy, and material that must not be shared.
locale: en
source_locale: zh-CN
source_revision: 'a83db07'
translation_status: reviewed
reviewed_at: "2026-10-25"
translated_at: 2026-09-20
sidebar:
  order: 70
---

Treat anything you would not want casually viewed, copied, sent elsewhere, or retained in a task record as sensitive information from the start.

## Why decide first

Many security problems happen not because someone intended to break a rule, but because they were focused on “solving the problem first.”

For example:

- Pasting an entire `.env` file to debug an issue
- Pasting raw customer data to help Codex understand it
- Pasting an error message containing a real token unchanged for convenience

These actions can seem convenient at the time and be hard to remedy later.

Do not provide Codex, whether for practice or production work, with:

- API keys, passwords, or session cookies
- Customer data or identity numbers that have not been redacted
- Unpublished internal material that a contract prohibits sharing externally

Use placeholders such as `YOUR_API_KEY`. If a secret has leaked, rotate it according to your organization's process.

## How to decide when you are unsure

If you are unsure whether something is sensitive, ask yourself:

1. Would there be a risk if someone unrelated saw it?
2. Would I be uneasy if it remained in the task record for a long time?

If either answer is yes, treat it as sensitive.

## Do not rely on “it should be fine”

When first using an AI tool, people may think:

- “I'm only pasting it temporarily”
- “It is just taking a look”
- “The file will not actually be sent anywhere”

Once information enters the task workflow, handle it as sensitive. Put controls in place beforehand.

## Information that is easy to overlook

Besides passwords and keys, sensitive information often includes:

- Customer lists
- Phone numbers, email addresses, and identity numbers
- Internal screenshots and unreleased plans
- Configuration files containing real production addresses or access tokens

Sensitive information is more than a `sk-...` key.

## How much should you redact?

You do not need to remove everything. Keep only the **minimum information needed to solve the problem**.

A useful approach is to:

- Preserve the structure
- Replace real values
- Remove identifying information
- Delete fields unrelated to the current problem

You can keep:

- Field names
- Error types
- Call order

But replace:

- Real keys
- Real email addresses
- Real phone numbers
- Real customer names

## If you must provide information, do it more safely

Safer practices include:

- Replacing keys with fake values or placeholders
- Anonymizing real user data
- Keeping only fields truly needed for diagnosis
- Describing the symptoms instead of pasting entire blocks of raw sensitive content when possible

For example:

```text
Replace the real API Key with YOUR_API_KEY and the real email address with user@example.com.
```

## If you have already shared it accidentally

Respond according to the risk:

1. Stop it from spreading further.
2. Immediately rotate affected keys, passwords, or tokens.
3. Report and remediate it according to your organization's process.

When solving a problem, provide only the minimum needed for diagnosis by default. Redact or use placeholders whenever you can.

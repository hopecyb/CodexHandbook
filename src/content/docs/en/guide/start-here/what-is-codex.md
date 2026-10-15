---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "This page only explains what Codex is, suitable tasks, and how to work with it; its internal links and concepts have been checked, and it avoids detailed volatile product defaults."
  checkedAt: "2026-07-26"
title: What is Codex?
description: A plain-language introduction to what Codex can and cannot do and where to use it.
locale: en
source_locale: zh-CN
source_revision: 0f376b6
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 2
---

Codex is OpenAI's **AI coding and work agent**. Give it a goal, and it can use project files, tools, and your approvals to read and change content, run commands, and produce a result. It then shows you the process and changes for review.

It is like a digital colleague who can use tools. You describe the goal, boundaries, and acceptance criteria; it researches, edits files, and carries out steps. You make the final decision.

For official product documentation, see [OpenAI Codex](https://developers.openai.com/codex). This handbook is an open-source community guide for systematic learning and practical use, not a replacement for the official documentation.

![Illustration: you hand Codex a task card, and it works through the laptop, documents, and terminal, checking off each step](/illustrations/what-is-codex.webp)

## How is it different from ordinary AI chat?

Many people initially see Codex as “a stronger chat AI.” The main difference is its ability to act.

| What you normally use | A way to think about it |
|---|---|
| Ordinary chatbot | Gives advice, explains concepts, writes text |
| Codex | In addition to answering, may **read and edit files, run commands, and create artifacts** |

Ordinary chat tools mainly respond. Codex can act directly within the boundaries you authorize.

## What tasks suit it?

If a task requires more than discussion—reading materials, changing something, executing steps, or producing a result—Codex can help.

If you only need a concept explained, a brief idea, or general advice, an ordinary chat AI may suffice.

## What can you use it for?

Even if you are not a programmer, consider these examples:

- **Read and organize information:** summarize documents, meeting notes, screenshots, and tables
- **Write and revise content:** polish an article, add an outline, update documentation
- **Build small projects:** create a page, change configuration, add a template
- **Investigate and fix problems:** locate an error and identify what to inspect next
- **Automate repeated work:** have it run through a fixed process

Developers can incorporate it into their workflow; nonprogrammers can use it as an assistant that performs steps.

## What can it do?

- **Understand:** summarize information in repositories, documents, tables, and screenshots
- **Create and modify:** write drafts, change code, generate pages and configuration
- **Execute:** run terminal commands, search, and browse with your authorization
- **Collaborate:** continue tasks across App, CLI, IDE, and Cloud entry points
- **Extend:** connect repeated workflows and external systems through Skills, Plugins, MCP, and Hooks (advanced chapters are expanded later)

## What can it not do? (Important)

- Replace your ultimate responsibility for factual, safety, and business decisions
- Guarantee a perfect result on the first attempt; results must be reviewable
- Bypass sandbox, network, or organizational policy without authorization
- Serve as an “automatic publishing pipeline that needs no review”

## A basic judgment when using it

Treat Codex as an assistant without handing over responsibility.

Let it research or edit first, but confirm:

- Did it change the right place?
- Did it misunderstand your goal?
- Are the facts it gave reliable?
- Could its changes have side effects?

## A typical workflow

A common sequence is:

1. You state a goal.
2. Codex responds or proposes a plan.
3. If it needs to edit files or run commands, it may ask for your approval.
4. When done, it tells you what changed.
5. You review whether the result meets your expectations.

See [Run your first task](/en/guide/getting-started/run-your-first-task/) for a complete example.

## Main entry points

| Entry point | Best suited to |
|---|---|
| Desktop App | A default for beginners; visual projects, tasks, and diff review |
| CLI | Terminal users, scripts, and automation |
| IDE extension | Working with open files and selections in an editor |
| Web / Cloud | Connected repositories, cloud environments, and long tasks |
| Mobile and remote | Monitoring, approvals, and light follow-up |

See the [feature comparison](/en/guide/reference/feature-comparison/) for details and the [capability map](/en/guide/start-here/) for conceptual relationships.

## Next steps

If you remember only three things:

1. Codex does more than chat; it can act after authorization.
2. State the task's goal, boundaries, and definition of done.
3. Review every result rather than trusting it blindly.

Continue with:

1. [Choose a Codex client](/en/guide/choose-your-client/)
2. [Terminology for beginners](/en/guide/start-here/terminology-for-beginners/)
3. [Run your first task](/en/guide/getting-started/run-your-first-task/)

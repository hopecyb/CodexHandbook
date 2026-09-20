---
title: 'SDK Overview: Local Tasks and Client Integration'
description: Distinguish the Codex SDK, non-interactive CLI, App Server, and a remote task service you build yourself.
contentType: reference
audiences: [developer]
level: intermediate
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: Execution location, thread interfaces, and integration boundaries were checked against official SDK and App Server documentation. The minimal example was syntax-checked only; no authenticated model call was made.
  evidence:
    - label: Official Codex SDK documentation
      href: https://learn.chatgpt.com/docs/codex-sdk
    - label: Official Codex App Server documentation
      href: https://learn.chatgpt.com/docs/app-server
sidebar:
  order: 10
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: e888ae6
---

The Codex SDK lets a program control a local Codex Agent. “Local” means the machine running the SDK and agent, which could be your computer or a CI runner you manage. Do not assume this is a hosted HTTP service for creating cloud tasks, polling them, and downloading artifacts. See the [official SDK documentation](https://learn.chatgpt.com/docs/codex-sdk).

## Choose an entry point for your integration goal

| Goal | Start with | You still manage |
|---|---|---|
| Run one task in a script | [`codex exec`](/en/guide/developer-platform/non-interactive/codex-exec/) | Working directory, input, exit status, and artifact storage |
| Run and continue tasks from a program | Codex SDK | Program lifecycle, environment, failure handling, and verification |
| Build a client with sessions, approvals, and streaming events | App Server | Client interactions, connections, identity handling, and deployment |
| Offer a multi-user remote task platform | Your own service architecture | Queues, tenant isolation, credentials, storage, cancellation, and callbacks |

The last row is an engineering choice, not a hosted platform capability bundled with the SDK. Official guidance positions the SDK for automation and CI, and App Server for deeper client integration. App Server exchanges requests and events over bidirectional JSON-RPC. See the [App Server documentation](https://learn.chatgpt.com/docs/app-server).

## A minimal TypeScript SDK call

The official TypeScript package is `@openai/codex-sdk` and requires Node.js 18 or newer. The following example uses JavaScript module syntax to show the same package's basic interface. It is not a complete production service.

Install the dependency in a dedicated practice directory, retaining the resolved version and lockfile:

```sh
npm init -y
npm install --save-exact @openai/codex-sdk
npm ls @openai/codex-sdk
```

Prepare a `README.md` without sensitive information, then save the following as `example.mjs`:

```js
import { Codex } from '@openai/codex-sdk';

const agent = new Codex();
const session = agent.startThread();
const answer = await session.run(
  'Read only README.md in the current directory and summarize its purpose in three bullets. Do not modify files or perform external actions.'
);
console.log(answer.finalResponse);
```

Run `node example.mjs` afterward. Authenticate for your chosen environment and check the actual sandbox and approval settings before running. “Read only” in the prompt is a task constraint, not a substitute for execution-environment restrictions. A model call may consume account usage; this page has not installed the package or made the call for you.

The method names and response field were checked against the [official example](https://learn.chatgpt.com/docs/codex-sdk). This handbook syntax-checked the JavaScript only; it did not pin and test a particular SDK release or invent successful output. When reproducing the example, record the package version, CLI/runtime, operating system, authentication method (without credentials), and result.

## Continue and resume tasks

Call `run()` again on the same thread object to continue it. You can pass an existing thread ID to `resumeThread()` to resume. Which threads can be resumed depends on where their state is stored. Do not treat an ID as a cloud URL queryable from any machine. Official documentation also covers a Python interface; check its own method names and dependencies instead of mixing code from the two languages. See [thread calls and language interfaces](https://learn.chatgpt.com/docs/codex-sdk).

After resuming, check whether the current files still match the history. See [handoff and resumption](/en/guide/agent-work/handoff-and-resume/).

## What to check after a successful call

1. **Execution location:** Record the working directory and files actually read or changed, not only the prompt.
2. **Task result:** Inspect the response, file diff, and tests. A `finalResponse` does not mean the business acceptance criteria passed.
3. **Failure category:** Distinguish local dependency or process failures, authentication failures, model service errors, and task verification failures. Do not reduce every exception to 400 or 429.
4. **Retry effects:** Check whether files or external effects already exist before retrying; do not simply resubmit the same request.
5. **Permissions:** You control the runtime and available tools. The SDK name does not grant Cloud access, organization administration, or multi-tenant isolation.

These are handbook integration checks, not a list of SDK response fields. Refer to the installed version's types and official documentation for actual fields.

## Callbacks, queues, and remote execution

Your own runner can execute the SDK and then have your service deliver a completion notification. In that arrangement, queue state, HTTP callbacks, signature formats, and retry policy belong to your system protocol. App Server's streaming events are not directly usable as a webhook address.

Continue with [webhooks and task event boundaries](/en/guide/developer-platform/webhooks/overview/) and [scripts and pipelines](/en/guide/developer-platform/non-interactive/scripts-and-pipelines/). This page does not promise that an SDK call automatically creates a Codex Cloud task, generates an artifact URL, or provides OAuth delegation.

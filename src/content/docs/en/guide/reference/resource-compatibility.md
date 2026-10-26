---
title: "Pets and themes: compatibility and recovery record"
description: Record visual assets by version, from source and loading to interaction, removal, and recovery, without treating a documentation review as an installation test.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Provides a test procedure to fill in. This site has no completed client installation or removal record for pets or themes yet.
locale: en
source_locale: zh-CN
source_revision: '96ff34f'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---

Compatibility applies to a specific combination of versions. A valid package structure, correctly sized images, or an interface that opens does not, on its own, prove that animation states work or that removal and recovery succeed.

## Current evidence

On 2026-09-18, we performed a read-only check of the local app’s `Info.plist`. The client identifier was `com.openai.codex`, version `26.911.61220`, build `9647`. This check did not load a pet or theme or change client settings. **Version combinations with completed installation, playback, switching, and recovery tests: none yet.**

Use the instructions for [installing pets](/en/pets/install/), [creating pets](/en/pets/create/), and [themes](/en/theme/) with the relevant asset and client versions. Attribute claims by third-party projects to their sources; do not present them as tests run by this site.

## Copyable record template

```text
Record type: pet / theme
Status: not run / in progress / passed / failed / inconclusive
Test date:
Tester:
OS and architecture:
Client version and build:
Asset or tool name and version:
Original source URL and corresponding tag/commit:
Downloaded filename and SHA-256:
Asset author and license:
Pre-installation state and backup location (redact before publishing):
Actual installation steps:
Loading and UI evidence:
Animation or interaction checks:
Removal steps and result:
Recovery steps and result:
Check after restart:
Failure logs and open issues:
Untested platforms, states, or features:
```

Leave unrun items blank or mark them as not run. Do not enter zero time, “passed,” or a guessed version. Public records should use redacted paths and test screenshots without real task content.

## Pet checks

First validate the JSON and asset paths. Then use the client to check selection, loading, transparent backgrounds, action changes, and window resizing. If an atlas has a version field, confirm that it matches the expected row and column layout. An image opening successfully does not mean the client parsed it as the right format version.

To remove a pet, first switch to a built-in asset or turn pets off. Move the custom package to a backup location outside the scanned directory. Refresh or restart and confirm that it no longer appears. To restore it, move the same package back and check that it loads. Renaming it within the scanned directory is insufficient; do not delete the entire configuration directory.

## Theme checks

Record the appearance and behavior of the same pages before and after enabling the theme. Cover at least the home page, a task, the input box, search, error messages, and any approval screen you can access. Mark screens you cannot reach as untested. Do not perform real high-risk actions just to test a button.

After recovery, reopen the normal client and confirm that appearance and controls work and that the theme does not restart or inject itself again. Check interface recovery and closure of the debugging connection separately. Keep an open item if either result cannot be confirmed.

## When to verify again

Reuse these steps when the client, OS, theme engine, pet format, or asset package changes. Keep the old record and add a new version combination; do not merely update the verification date. If a test fails, restore the last known good configuration first, then investigate the new change separately.

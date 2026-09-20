---
title: Codex Theme Skins
description: Check a third-party theme's source, version, interactions, and recovery steps, while distinguishing project claims from this handbook's tests.
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: '2026-09-18'
  summary: The project repository, releases, and installation guide were read. The theme has not been installed, its interface has not been tested, and uninstall recovery has not been run; no compatibility guarantee is offered.
  evidence:
    - label: Dream Skin project description
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: macOS installation and removal instructions
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: Release packages and version history
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
locale: en
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 4ecfa1c
---

Codex Dream Skin is a third-party desktop theme project. Its documentation says it injects appearance changes through a local CDP connection without changing the official installation package. That is the project's description of its method; this handbook has not verified file behavior, network behavior, or interface compatibility across all versions.

![Illustration of the theme's appearance](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

The appearance illustration already hosted here is not evidence from this version check. It also does not establish that the composer, approval buttons, and every task view work correctly.

## Version and verification status

| Item | Finding in this review |
|---|---|
| Source | [Project repository](https://github.com/Fei-Away/Codex-Dream-Skin) and [releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| Release observed | [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18), checked on 2026-09-18, commit `34335d27d54300eccb325cc652f6c93fef428b84`; not installed |
| Local client information | Read-only Info.plist: 26.911.61220, build 9647, identifier com.openai.codex |
| Tested theme and client combination | None; installation, interactions, and removal have not been tested |
| Windows compatibility | Not tested by this handbook |
| Recovery result | Not tested; steps and acceptance checks follow below |

Release notes mention that some interface fixes were checked against upstream macOS Codex 26.901.41123. That differs from the 26.911.61220 recorded here, so it cannot establish compatibility for this combination. The macOS installation link on this page is pinned to v1.5.18; consult the matching tag for other versions.

Reading a client version supplies environment information, not theme compatibility evidence. Use the [resource compatibility and recovery record](/en/guide/reference/resource-compatibility/) to keep results from your own test.

## Before installing

1. Choose a specific version from the project's releases. Record the package name, download URL, and SHA-256. If the publisher supplies a checksum file, compare it with the downloaded package. A matching hash shows that files match, not that a program is safe.
2. Save your current client and operating system versions, theme settings, and copies of custom images you have rights to use. Record where the backup is stored.
3. Check the original home screen, task view, input, scrolling, search, and approval interface first as a baseline.
4. Read the installation, update, and removal instructions for the release you chose. Documentation on the repository's main branch may be newer than the installer.

For macOS, read the [project's installation guide](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md). For Windows, read its [Windows guide](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md). Do not automatically attribute a “damaged” warning or system block to missing signing. Check the source, package integrity, and specific error before deciding whether to continue.

## What to check after changing an image

The project offers background image and theme management features. Menu names depend on the version. Use images you have rights to use, and check light mode, dark mode, window scaling, and real task pages.

- Can you still read, click, and focus the composer, buttons, and approval information?
- Does the background obscure search results, long output, code diffs, or errors?
- After changing pages and restarting, does the displayed theme match your selection?
- After disabling the theme, does the original interface return, and can you still reproduce the problem?

If content is obscured or controls stop working, stop using the theme and follow the recovery process. Do not hide the problem by layering on more styles.

## Removal and recovery

The project's macOS guide says to use “Restore original and uninstall” from the menu bar before removing the theme app. User themes and images can be retained or removed separately. Back up custom assets first. On Windows, follow the documentation for that version instead of reusing macOS paths.

The following are handbook recommendations for checking recovery, not a record of completed testing:

1. Save your work in the client and record the current theme and files to keep.
2. Use the theme tool's recovery flow. Keep any message indicating completion, failure, or an unconfirmed state.
3. Reopen Codex through the normal client entry point and check the background, text, input, and task navigation.
4. Confirm the theme tool no longer starts automatically or reinjects its theme. If technical checks are needed, inspect processes and debug connections without indiscriminately killing similarly named processes.
5. Remove the app only after the checks pass. Keep custom images until you decide separately that they are no longer needed.

A backup, an uninstaller exiting, or the theme window closing does not alone prove recovery. If the result is uncertain, save logs and consult the project's issues; do not state that recovery succeeded. Do not delete the entire Codex configuration directory to remove a theme.

## Scope of these findings

CDP can change page content, so “does not modify the official installer” does not mean it cannot affect operation. Verify again after interface changes. Review the project's claims about local processing, network access, and recovery for the specific release. This handbook does not promise that assets are never uploaded, every version supports one-click recovery, or an overwrite update can never lose data.

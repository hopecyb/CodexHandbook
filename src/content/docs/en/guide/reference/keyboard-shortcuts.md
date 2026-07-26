---
title: Keyboard Shortcuts
description: Learning index of common shortcuts in App, CLI TUI, and IDE extension—per your installed version.
locale: en
source_locale: zh-CN
source_revision: 1013ae4
translation_status: draft
translated_at: 2026-07-26
---

Shortcuts vary a lot by **client and version**. This page groups by **intent** so you can ask “is there a faster way?”—check in-product help or settings for exact bindings.

You do not need every shortcut on day one. Smoothing the actions that interrupt flow is enough.

:::caution
Table below is **illustrative**, not a complete binding list. Keys may change after upgrades.
:::

## Intent index

| Intent | Desktop App (illustrative) | CLI TUI (illustrative) | IDE extension (illustrative) |
|---|---|---|---|
| New task/session | `Cmd/Ctrl+N` or sidebar | Exit/re-enter / new thread command | Command palette “Codex” |
| Send message | `Enter` / `Cmd+Enter` | Per product docs | Panel send |
| Newline without send | `Shift+Enter` | Per TUI | Per panel |
| Open command palette | `Cmd/Ctrl+K` class | `/` slash commands | `Cmd/Ctrl+Shift+P` |
| Search history | Sidebar search | In-session search if any | Chat history |
| Approve tool call | Panel button | `y` / arrows (per TUI) | Notification or inline button |
| Reject | Panel button | `n` | Inline reject |

**Follow your installed version’s UI.**

## Actions worth learning first

Shortcuts reduce friction when you:

- Hunt for Send
- Accidentally send when you wanted newline
- Fumble approving tools
- Cannot find how to start a new task

Prioritize:

- Send / newline
- New task
- Command palette
- Approve / reject

## Slash commands vs keyboard

- **Slash commands**: `/review`, `/help`, etc.—see [Slash command reference](/guide/reference/slash-commands/)
- **Shortcuts**: UI actions without typing

Combine: `Cmd+K` to focus input, then `/review`.

## CLI terminal users

- **Ctrl+C** to interrupt runaway output (mind unsaved state)
- tmux split: Codex beside `git diff`
- Shell alias for common `codex exec`—see [Commands and shortcuts](/guide/cli/commands-and-shortcuts/)

## Common misconceptions

### 1. No need to master shortcuts before using Codex

Smooth the few actions you repeat most.

### 2. Others’ muscle memory is not your bar

Shortcuts come with practice—not an onboarding gate.

### 3. Clients need not share identical bindings

Know whether an action has a shortcut, where to view/change keys, and which actions are worth binding first.

## First five to learn

1. Send
2. Newline without send
3. Command palette
4. Approve or reject
5. New task

Add more as you go.

## IDE users

- Bind “explain selection with Codex” to a comfortable key
- Use editor diff and go-to-definition—less copy-paste

[IDE settings](/guide/ide/settings/) · [Selected code and open files](/guide/ide/selected-code-and-open-files/)

## Accessibility and customization

Most clients allow rebinding. Teams may document **recommended** bindings—not require uniformity.

Shortcuts are not an exam—smooth the actions that interrupt you most.

## Reference sources

- Each product Settings / Keyboard shortcuts official page
- stormzhang `35-cheatsheet.md`
- KimYx0207 CX-03

---

**Status:** outdated  
**Products:** App / CLI / IDE  
**Review note:** Despite “illustrative” disclaimers, body assumes specific client shortcuts, send behavior, palette keys, and approval keys—highly version- and platform-dependent without strong unified official shortcut documentation.  
**Last verified:** 2026-07-26

---
title: Codex Theme Skins
description: "Understand what Codex Dream Skin is, how to install it and switch backgrounds, why it uses CDP injection, and what safety boundary to check before using theme skins."
locale: en
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-07-29
reviewed_at: 2026-08-26
source_revision: 8c0e360
---

# Codex Theme Skins

Changing Codex's skin sounds like a small matter of making it look nicer, but Codex Dream Skin is really a complete desktop theming approach: keep Codex's native interactions, avoid modifying the official installer, and use external injection to bring backgrounds, colors, and atmosphere into the real interface.

## What Is Codex Dream Skin?

Codex Dream Skin is an open-source project for theming the Codex desktop app. It places a 16:9 wallpaper behind Codex and adapts automatically to light or dark mode, focus position, and color palette. The sidebar, suggestion cards, project picker, and composer remain native interactive controls.

![Codex Dream Skin applying a 16:9 background to the Codex home screen](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

_Home screen after the theme is applied to the real Codex desktop app. The sidebar, suggestion cards, and composer are still native controls._

It is very different from the older approach of changing the binary to reskin an app:

| Approach | Modifies official files | Breaks signing | Native controls usable | Image freedom |
| --- | --- | --- | --- | --- |
| CDP injection (Dream Skin) | No | No | Yes | High |
| Editing `app.asar` | Yes | Yes | Partial | Medium |
| Official light/dark switch | No | No | Yes | None |

Editing `app.asar` used to be a common trick: unpack Codex's resource bundle, change CSS and images, then pack it back. The problem is that signing fails immediately, each Codex update can require doing it again, and security software may block it.

CDP injection does not modify official binary files. It injects styles and scripts from outside Codex through a debugging port, without touching `.app`, `app.asar`, or the code signature.

What it can do: switch skins, change backgrounds, save multiple themes, and restore the official appearance with one action.

What it will not do:

- The installer will not silently write a third-party API Key or Base URL. Skinning and relay configuration stay separate.
- It will not modify the official installation directory or signature.
- CDP only binds to `127.0.0.1`; while the theme is running, you should still avoid running unknown local programs.

The project states that it is not an official OpenAI product. If you choose restore and uninstall, Codex returns to the official appearance and the CDP connection is disconnected.

Project links:

| Type | URL | Use |
| --- | --- | --- |
| Project GitHub | [github.com/Fei-Away/Codex-Dream-Skin](https://github.com/Fei-Away/Codex-Dream-Skin) | Read the source, README, issues, and install guides |
| Project website | [codex-dream-skin.org](https://codex-dream-skin.org/) | Read project notes, technical explanation, safety boundaries, and tutorials |
| Downloads | [GitHub Releases](https://github.com/Fei-Away/Codex-Dream-Skin/releases) | Download the macOS `.dmg` and Windows `.exe` installers |
| Theme library / Online Studio | [DreamSkin.cc](https://dreamskin.cc/) | Browse themes, try them online, create themes, and submit them |

## Install and Get Started

Before installing, open Codex once and confirm that the desktop app can launch, sign in, and quit normally. This helps the theme tool find the correct local Codex environment.

### macOS

On macOS, you usually download the `.dmg` installer from the project's Releases. After installing, drag `Codex Dream Skin.app` into Applications, then manage themes, switch backgrounds, and restore the official appearance from the menu bar.

If macOS says the app is "damaged" or cannot be opened, the usual reason is Gatekeeper blocking an unsigned app. Only allow it from System Settings > Privacy & Security after confirming that the installer source is trustworthy.

### Windows

On Windows, you usually download the installer from the project's Releases, or follow the documented PowerShell flow. After installation, open the theme tool from the system tray to manage themes and change backgrounds.

If SmartScreen shows a blue warning, the common reason is that the installer lacks a code-signing certificate. Continue only after confirming that the source is trustworthy.

### Common Issues

| Symptom | Cause | Fix |
| --- | --- | --- |
| macOS says the app is "damaged" | Unsigned app blocked by Gatekeeper | System Settings -> Privacy & Security -> Open Anyway |
| Windows SmartScreen blue warning | Missing code-signing certificate | More info -> Run anyway |
| No effect after installation | Codex was not launched once first | Open Codex, sign in, quit, then install Dream Skin |
| Theme fails after a Codex update | An update may have changed internal paths | Download the latest installer and install over the old one |

Installing over an existing copy will not delete your saved themes and images.

## Backgrounds and Theme Management

After installation, click "Change Background" from the macOS menu bar or Windows system tray, then choose an image.

![Codex Dream Skin theme preview and switching experience](/theme/codex-dream-skin/article/codex-dream-skin-gallery.jpg)

_After changing the image, check the home page, sidebar, composer, and task pages together so the real working interface remains clear and readable._

After you choose an image, the engine analyzes brightness, dominant colors, focus position, and which side has less visual information locally, then generates theme variables suited to that image. Themes can be saved, named, and switched with one action.

Gothic Void Crusade is the default theme in the public installer and was contributed by a community author. You can also import any pure 16:9 background image.

Image guidelines:

- Recommended size: `2560 x 1440` pure 16:9 background, without baked-in windows, sidebars, text, or logos.
- Keep the main subject away from the Codex composer, sidebar, and suggestion-card areas.
- Avoid backgrounds that are too bright, busy, or high contrast, because they can hurt readability.
- Before public sharing or commercial use, confirm rights for the background image, characters, trademarks, fonts, and IP.

Images that do not meet these composition rules can still be used, but native content may cover the subject or text readability may suffer.

## How It Works

### CDP Injection

CDP, or Chrome DevTools Protocol, is the remote debugging protocol used by Chromium-based browsers. Chrome DevTools uses CDP underneath when remotely debugging mobile pages: the browser opens a local debugging port, and external tools can connect to inject CSS and JavaScript into the page.

The Codex desktop app is built on Electron, which also uses Chromium underneath. Dream Skin's workflow can be simplified like this:

![CDP injection flow from the article](/theme/codex-dream-skin/article/cdp-injection-flow.png)

```text
Start the theme tool
  -> Open the Codex desktop app with a local CDP endpoint
  -> Connect to Codex's Chromium renderer process
  -> Inject theme CSS and decorative DOM
  -> Codex keeps running normally while the theme layer takes over the appearance
```

When stopping the injector, it checks process ID (PID), executable path, and startup time together to avoid killing the wrong process.

The injected CSS keeps the sidebar, composer, and suggestion cards natively interactive. The wallpaper sits below native controls, with a translucent gradient overlay in between to preserve text readability.

### Adaptive Colors: Local Computation, No Upload

After changing an image, how does the color palette adapt? Dream Skin downsamples the image locally in Canvas, extracts dominant color, brightness, and focus position, then calculates a set of CSS variables in HSL color space, including accent, secondary, and highlight colors.

In dark mode, it starts from a darker dominant color and calculates highlight accent colors, secondary colors, and neutral background grays. In light mode, it does the reverse: start from neutral light grays, then calculate darker text and accent colors. When the image changes, the whole palette is recalculated automatically.

For route awareness, the home page keeps the full wallpaper and gradient overlay. After switching to a task page, the background automatically becomes a lower-interference ambient layer so the content gets visual priority.

## Final Notes

The CDP-injection approach themes the app by injecting styles from outside the application, without modifying official binary files. This idea is not limited to Codex; in theory, any Electron-based app can use a similar method for theme customization, as long as the app supports a CDP debugging port.

The demand for personalized development environments is real. A good theme skin is not just "cooler"; it should preserve native interactions, be restorable, be inspectable, and avoid mixing visual enhancement with model configuration.

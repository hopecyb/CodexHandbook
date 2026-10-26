---
title: CLI
description: Minimale Einstiegsbeschreibung für den Kommandozeilen-Zugang.
locale: de
source_locale: zh-CN
source_revision: "a80ef7e"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 11
legacyVerification:
  status: verified
  products: "CLI"
  basis: Aktuelle OpenAI-Help-Center-CLI-Einstiegsmaterialien beschreiben die Codex-CLI weiterhin als Terminal-Einstieg und unterscheiden interaktive Nutzung von stärker automatisierten Workflows; diese
    Seite ist nur Kapitelnavigation und skizziert interaktiv vs. nicht-interaktiv ohne konkrete Parameter oder Installationsbefehle.
  checkedAt: '2026-07-26'
---

Die CLI eignet sich für Terminalnutzer sowie Skript- und CI-Integration.

Wenn dir „CLI“ noch nichts sagt: Gemeint ist ein Zugang ohne grafische Oberfläche, über den du im Terminal direkt mit Codex zusammenarbeitest.

Typische Szenarien:

- wer die Kommandozeile gewohnt ist
- wer mit Skripten koppeln will
- wer CI/Automatisierung anbinden will

Für Einsteiger ohne Terminalkenntnis ist die CLI kein zwingender erster Schritt; kennst du aber `cd`, `ls` und Befehle im Projektverzeichnis, ist sie sehr effizient.

- [Installation und Updates](/de/guide/cli/installation-and-updates/)
- [Interaktiver Modus](/de/guide/cli/interactive-mode/)
- [Nicht-interaktiver Modus](/de/guide/cli/non-interactive-mode/)
- [CLI-Konfiguration](/de/guide/cli/configuration/)
- [Befehle und Shortcuts](/de/guide/cli/commands-and-shortcuts/)
- [Freigabe und Sandbox](/de/guide/cli/approvals-and-sandbox/)
- [Fehlerbehebung](/de/guide/cli/troubleshooting/)

Vollständige Befehlsreferenz: [CLI-Befehlsreferenz](/de/guide/reference/commands/).

![Illustration: Ein kleiner Assistent sitzt auf einem Terminalfenster und tippt Befehle, verbunden mit Skripten und Tests](/illustrations/cli.webp)

## Was beim ersten Einsatz trennen

In Phase eins zuerst diese beiden Modi unterscheiden:

1. **Interaktiver Modus:** wie ein Gespräch mit Codex im Terminal
2. **Nicht-interaktiver Modus:** Codex als Befehl in Skripten oder CI

Zum ersten Ausprobieren meist interaktiv; Automatisierung später mit dem nicht-interaktiven Modus.

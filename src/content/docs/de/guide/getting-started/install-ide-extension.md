---
title: IDE-Erweiterung installieren
description: "Codex-Erweiterung in unterstützten Editoren installieren."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

1. Prüfen, ob der Editor in der offiziellen Supportliste steht (siehe [https://developers.openai.com/codex](https://developers.openai.com/codex))
2. Im Extension Marketplace die offizielle Codex-Erweiterung suchen und installieren
3. Editor bei Bedarf neu starten und das Erweiterungs-Panel öffnen

Wenn du die meiste Zeit in VS Code oder JetBrains bist, passt die IDE-Erweiterung oft besser.  
Beim ersten Installieren leicht verwechselt: „Erweiterung installiert“ und „arbeitet im aktuellen Workspace normal“ sind zwei Schritte.

## Nach der Installation noch prüfen

- Du nutzt einen offiziell unterstützten Editor
- Erweiterung sitzt im aktuellen Editor — nicht in der falschen Umgebung
- Nach Neustart ist der Erweiterungs-Einstieg sichtbar
- Geöffnet ist das Projektverzeichnis, in dem du wirklich arbeitest

## Häufige Missverständnisse

### 1. Marketplace „Install“ = fertig

Danach oft noch nötig:

- Editor neu starten
- Anmelden
- Richtigen Workspace öffnen

### 2. Die IDE-Erweiterung weiß von selbst, welches Projekt du meinst

Falsche Workspace-Wurzel → schiefer Kontext.

IDE-Erweiterung installiert: Noch bestätigen, dass sie in deinem aktuellen Editor und Workspace erscheint und arbeitet.

Weiter: [IDE-Workflow für lokale Aufgaben](/guide/ide/local-task-workflow/). Fehlerbehebung: [IDE-Fehlerbehebung](/guide/ide/troubleshooting/).

---

**Status:** outdated  
**Geeignete Produkte:** IDE  
**Nachprüfhinweis:** Support-Umfang der IDE-Erweiterung, Marketplace-Einstieg, Login-Anbindung und Workspace-Integration sind hochvolatil; ohne aktuelle offizielle Support-Matrix und Installationsdoku eignet sich vorerst `outdated`.  
**Zuletzt überprüft:** 2026-07-26

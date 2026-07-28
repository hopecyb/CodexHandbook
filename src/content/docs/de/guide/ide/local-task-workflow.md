---
title: Lokaler Aufgaben-Workflow
description: In der IDE lokale Codex-Aufgaben starten, begleiten und abschließen — basierend auf geöffneten Dateien und Auswahl.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Lokale IDE-Aufgaben sind die Schleife **„öffnen → auswählen → beschreiben → prüfen → testen“** — geeignet für häufige kleine Schritte. Hier der gängigste Praxisweg; Kontext-Details: [Auswahl und geöffnete Dateien](/guide/ide/selected-code-and-open-files/).

## Empfohlener Ablauf

1. **Workspace-Wurzel öffnen** (ganzes Repository, nicht nur eine Datei)
2. Relevante Dateien öffnen; bei Bedarf [Codeausschnitt auswählen](/guide/ide/selected-code-and-open-files/)
3. Im Codex-Panel klar schreiben: Ziel, Einschränkungen, [Fertig-Definition](/prompts/define-done/)
4. Bei komplexen Aufgaben zuerst [einen Plan verlangen](/prompts/ask-for-a-plan/), dann ausführen
5. In Diff- / Inline-Ansicht [Änderungen prüfen](/guide/ide/reviewing-changes/)
6. Im IDE-Terminal die Projekttestbefehle laufen lassen
7. Du selbst `git commit` (außer das Team autorisiert Agent-Commits explizit)

## Beispiel-Prompt (schematisch)

```text
Nur src/auth/login.ts und zugehörige Tests ändern.
Ziel: 500 bei leerer E-Mail-Eingabe beheben → 400 + Fehlermeldung.
Verboten: package-lock ändern, git push.
Fertig: npm test -- auth ausführen und Änderungszusammenfassung listen.
```

## Wann einen anderen Einstieg wählen

| Situation | Empfehlung |
|---|---|
| Parallele Multi-Tasks, Arbeitsbäume | [Desktop-App](/guide/desktop-app/) |
| Skripte / CI | [CLI nicht-interaktiv](/guide/cli/non-interactive-mode/) |
| Remote-Standardumgebung, PR öffnen | [IDE-Cloud-Aufgaben](/guide/ide/cloud-task-workflow/) |

## Häufige Fehler

- Workspace nicht geöffnet → `AGENTS.md` nicht lesbar
- Alle Inline-Vorschläge mit einem Klick annehmen
- Commit ohne Tests

Kontext: [Editor-Kontext](/guide/ide/editor-context/) · [Datei- und Ordner-Kontext](/guide/context/file-and-folder-context/)

## Häufige Fragen

### 1. Warum immer „Workspace-Wurzel öffnen“?

Weil viel IDE-Kontext davon abhängt, dass das vollständige Projekt offen ist — nicht nur eine einzelne Datei.

### 2. In der IDE ist Ändern bequem — darf Überprüfung entfallen?

Nein.

Je bequemer, desto leichter tippt man unbewusst auf Annehmen — Prüfung bleibt Pflicht.

### 3. Welche erste Aufgabe passt?

Gut geeignet:

- nur 1–2 Dateien
- Ergebnis auf einen Blick verständlich
- leicht zu testen oder zu previewen

Lokale IDE-Aufgaben eignen sich für kleine, schnelle Schritte — „bequem“ heißt nicht „Überprüfung und Verifikation überspringen“.

---

**Status:** verified  
**Anwendbare Produkte:** IDE  
**Prüfgrundlage:** OpenAI beschreibt die IDE-Erweiterung weiterhin als Client für lokale Code-Repositories; dieser Workflow fokussiert die stabile lokale Schleife „Workspace öffnen, Dateirahmen setzen, Aufgabe beschreiben, Diff prüfen, Tests laufen, manuell committen“ — ohne Abhängigkeit von einer konkreten Erweiterungs-UI.  
**Zuletzt geprüft:** 2026-07-26

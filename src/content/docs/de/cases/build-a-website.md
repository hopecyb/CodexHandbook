---
title: Eine Website aufbauen
description: Fallbeispiel vom Bedarf bis zur lokal vorführbaren Prototyp-Seite.
locale: de
source_locale: zh-CN
source_revision: b3ec6d8
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Eine Website aufbauen

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Autoren / Entwickler |
| Client | App / IDE |
| Geschätzte Dauer | 2–4 Stunden |

## 1. Ziel und Kontext

**Ziel:** Aus einer einfachen Anforderung eine lokal vorführbare statische Seite oder kleine Site aufbauen.

**Erfolgskriterien:** Im Browser öffnenbar, Styles entsprechen der Beschreibung, keine unrelated Dateiänderungen.

## 2. Empfohlener Prompt

```text
Ziel: Für 【Produkt/Event】 eine einseitige Landingpage mit Titel, drei Features und CTA-Button erstellen.
Technik: HTML + CSS (oder vorhandenes Framework des Projekts), mobilfreundlich.
Einschränkungen: Nur seitenbezogene Dateien unter src/ ändern; keine neuen Abhängigkeiten ohne meine Freigabe.
Akzeptanz: Mit pnpm dev vorführbar; Screenshot-Beschreibung der Hauptblöcke.
Zuerst Wireframe-Plan liefern und auf meine Bestätigung warten, bevor Code geschrieben wird.
```

## 3. Überprüfung

- Lokale Vorschau an allen Breakpoints
- Prüfen, ob Konfiguration oder Lockfiles versehentlich geändert wurden

## 4. Verwandt

- [Erstellen-Vorlage](/de/prompts/templates/create/)
- [Artefakt-first-Arbeit](/de/cases/workflows/artifact-first-work/)
---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin Szenarien wie „Get from idea to proof of concept“, „Build responsive front-end designs“ und „Deploy an app or website“. Das Beispiel auf dieser Seite ist auf kleine Sites oder Landingpage-Prototypen beschränkt und verlangt zuerst einen Wireframe, begrenzten Änderungsbereich und Browser-Vorschau zur Abnahme.  
**Zuletzt geprüft:** 2026-07-26

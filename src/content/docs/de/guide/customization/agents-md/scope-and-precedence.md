---
title: Geltungsbereich und Rangfolge von AGENTS.md
description: Verstehe genau, wie globale Regeln, Regeln im Projektstamm und Regeln des aktuellen Verzeichnisses gefunden und zusammengeführt werden.
sidebar:
  order: 20
locale: de
source_locale: zh-CN
source_revision: 698ab44
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Codex baut zu Beginn jedes Laufs eine Anweisungskette auf. Entscheidend ist keine spekulative Rangliste aus „Organisationsrichtlinie, Konfiguration und Prompt“, sondern zunächst die genaue Erkennungsreihenfolge von `AGENTS.md` selbst.

## Offizielle Erkennungsreihenfolge

1. **Globale Ebene:** Im Codex-Home-Verzeichnis, standardmäßig `~/.codex`, wird zuerst nach `AGENTS.override.md` gesucht. Nur wenn diese Datei fehlt, wird `AGENTS.md` gelesen. Auf dieser Ebene wird nur die erste nicht leere Datei verwendet.
2. **Projektebene:** Codex durchläuft die Verzeichnisse vom Projektstamm, in der Regel dem Git-Stamm, bis zum aktuellen Arbeitsverzeichnis. Pro Verzeichnis prüft es der Reihe nach `AGENTS.override.md`, `AGENTS.md` und konfigurierte Fallback-Dateinamen und verwendet höchstens eine Datei.
3. **Zusammenführung:** Die Inhalte werden vom Stamm bis zum aktuellen Verzeichnis angefügt. Dateien näher am aktuellen Verzeichnis erscheinen später und können daher frühere Anweisungen überschreiben.

Leere Dateien werden übersprungen. Die Zusammenführung endet, sobald `project_doc_max_bytes` erreicht ist; der Standardwert beträgt 32 KiB.

## Beispiel für ein Monorepo

```text
repo/
├── AGENTS.md
├── apps/
│   └── web/
│       └── AGENTS.md
└── services/
    └── payments/
        ├── AGENTS.md
        └── AGENTS.override.md
```

Bei einem Start in `services/payments` wird zuerst die `AGENTS.md` im Stammverzeichnis geladen. Da im Zielverzeichnis `AGENTS.override.md` vorhanden ist, wird die dortige `AGENTS.md` ignoriert.

Die Stammdatei enthält repositoryweite Regeln, etwa Paketmanager, allgemeine Tests und sicherheitskritische Verbote. Eine verschachtelte Datei beschreibt nur zusätzliche Regeln für den jeweiligen Dienst. Dupliziere nicht 80 % desselben Inhalts.

## Zusammenspiel mit dem Aufgaben-Prompt

`AGENTS.md` enthält langfristige, versionsverwaltbare Projektkonventionen. Der Prompt beschreibt Ziel, Umfang und Abnahme der aktuellen Aufgabe. Beispiel:

```text
Befolge alle anwendbaren AGENTS.md-Dateien. Ändere bei dieser Aufgabe nur services/payments/retry.ts und die Tests.
Rotiere keine Zugangsdaten. Führe make test-payments aus und berichte das tatsächliche Ergebnis.
```

Ein Prompt kann unveränderliche System-, Organisations-, Sandbox- oder Berechtigungsgrenzen nicht in verfügbare Funktionen umwandeln. Versuche bei Konflikten nicht, die Rangfolge mit „Ignoriere die vorherigen Regeln“ zu erraten. Lass Codex zuerst die geladenen Anweisungsquellen auflisten und grenze anschließend die Aufgabe ein.

## Tatsächlich geladene Inhalte verifizieren

Starte im Zielverzeichnis eine neue Sitzung und frage:

```text
Liste vor Arbeitsbeginn die Quellen von AGENTS.md und AGENTS.override.md in ihrer Ladereihenfolge auf
und fasse die von jeder Datei hinzugefügten Einschränkungen getrennt zusammen. Ändere keine Dateien.
```

`AGENTS.md` wird beim Start gelesen. Starte nach einer Änderung einen neuen Lauf oder eine neue Sitzung, um sie zu verifizieren. Gehe nicht davon aus, dass die aktuelle Sitzung automatisch aktualisiert wurde.

## Fallbacks und Größenbegrenzung

Wenn bereits `TEAM_GUIDE.md` verwendet wird, kannst du Folgendes konfigurieren:

```toml
project_doc_fallback_filenames = ["TEAM_GUIDE.md", ".agents.md"]
project_doc_max_bytes = 65536
```

Ein Fallback gilt nur, wenn im selben Verzeichnis keine Datei höherer Priorität vorhanden ist. Entferne vor einer Erhöhung des Limits doppelte und irrelevante Hintergrundinformationen, damit wichtige Regeln nicht aus dem Kontext verdrängt werden.

## Offizielle Grundlage

- [Custom instructions with AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)

---

**Status:** verified

**Unterstützte Produkte:** App, CLI, IDE, Cloud

**Zuletzt geprüft:** 2026-08-26

---
title: Cloud-Umgebungen
description: Konfiguriere Laufzeit, Abhängigkeiten, Setup, Cache und Repository-Ausgangspunkt von Codex Cloud.
sidebar:
  order: 20
locale: de
source_locale: zh-CN
source_revision: f7c7188
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Eine Cloud-Umgebung legt fest, was Codex für ein Repository installiert und ausführt. Sie übernimmt die Konfiguration deines Laptops nicht. Wenn ein lokaler Lauf besteht und Cloud fehlschlägt, vergleiche zuerst Laufzeit, Abhängigkeiten, Variablen und Netzwerk.

## Ausführungsreihenfolge eines Chats

1. Container erstellen und den gewählten Branch oder die Commit-SHA auschecken.
2. Setup-Skript ausführen; bei Wiederverwendung eines Caches kann zusätzlich ein Maintenance-Skript laufen.
3. Internetrichtlinie anwenden.
4. Agent-Schleife mit Befehlen, Änderungen und Verifikation ausführen und die anwendbaren `AGENTS.md`-Dateien lesen.
5. Antwort und Diff für Rückfragen oder die Erstellung eines PR zurückgeben.

Das Standardimage `universal` enthält verbreitete Sprachen, Paketmanager und Werkzeuge. In den Umgebungseinstellungen kannst du Versionen von Python, Node.js und anderen Laufzeiten fixieren oder zusätzliche Abhängigkeiten im Setup-Skript installieren.

## Minimale reproduzierbare Konfiguration

Lege für ein pnpm-Projekt in der Umgebung zunächst dieselbe Node.js-Version wie in CI fest und verwende:

```bash
corepack enable
pnpm install --frozen-lockfile
```

Dokumentiere im `AGENTS.md` des Repository-Stamms:

```md
## Validation

- Run `pnpm test` after code changes.
- Run `pnpm typecheck` before reporting completion.
- Do not update the lockfile unless dependency changes are requested.
```

Setup- und Agent-Phase laufen in unterschiedlichen Bash-Sitzungen. Ein vorübergehendes `export` im Setup gilt nicht automatisch in der Agent-Phase. Konfiguriere nicht vertrauliche Werte in den Umgebungseinstellungen oder persistiere sie nach offizieller Empfehlung in der Shell-Konfiguration.

## Cache und Maintenance

Cloud kann einen Containerzustand bis zu 12 Stunden zwischenspeichern, um neue Chats und Folgerunden zu beschleunigen. Nach der Wiederherstellung aus dem Cache checkt Cloud den für den Chat angegebenen Branch aus und kann ein Maintenance-Skript zur Aktualisierung von Abhängigkeiten ausführen.

Änderungen an Setup, Maintenance, Umgebungsvariablen oder Secrets machen den Cache automatisch ungültig. Falls Änderungen im Repository den Cache inkompatibel machen, verwende manuell **Reset cache**. Umgebungscaches in Business und Enterprise können von Benutzern mit Zugriff auf dieselbe Umgebung gemeinsam verwendet werden; ein Reset wirkt sich dann auch auf andere Workspace-Benutzer aus.

## Umgebungsvariablen und Secrets

- Umgebungsvariablen stehen in der Setup- und in der Agent-Phase zur Verfügung.
- Secrets werden ausschließlich in der Setup-Phase entschlüsselt und vor Beginn der Agent-Phase entfernt.
- In der Setup-Phase besteht Internetzugriff.
- Die Agent-Phase hat standardmäßig keinen Netzwerkzugriff; er kann pro Umgebung ausdrücklich freigeschaltet werden.

Diese Grenzen werden häufig verwechselt. Das nächste Kapitel behandelt sie ausführlich: [Secrets und Umgebungsvariablen](/de/guide/web-and-cloud/secrets-and-variables/).

## Abgleichcheckliste

| Prüfung | Ziel |
|---|---|
| Ausgangs-Branch/Commit | Entspricht der Aufgabenbeschreibung |
| Laufzeitversion | Entspricht CI- oder Produktionsvorgaben |
| Sperrdatei | Installation im Frozen-Modus |
| Setup | Wiederholbar, nicht interaktiv und bricht bei einem Fehler ab |
| Verifikationsbefehle | In `AGENTS.md` dokumentiert |
| Netzwerk | Agent erhält nur Zugriff auf erforderliche Domains und Methoden |

## Offizielle Grundlage

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Image codex-universal](https://github.com/openai/codex-universal)

---

**Status:** verified

**Unterstützte Produkte:** Cloud

**Zuletzt geprüft:** 2026-08-26

---
title: Nicht-interaktiver Modus
description: "Mit codex exec und Skript-Pipelines integrieren — geeignet für CI, Cron und Automatisierung."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Der nicht-interaktive Modus lässt Codex Aufgaben **ohne TTY-Dialog** erledigen — Einstieg für Entwickler, die den Agenten in Skripte und CI einbinden.

Kurz: kein Hin-und-her-Chat, sondern einmalige Übergabe der Aufgabe zur Ausführung.

Eher ein befehlsartiger Aufruf.

## Inhalt dieser Seite

- Wann nicht-interaktiv statt `codex`-Interaktivsitzung
- Extra-Anforderungen an Sicherheit und Freigabe ohne Aufsicht
- Bezug zur [Konfiguration](/guide/cli/configuration/)

## Geeignete Szenarien

| Geeignet | Ungeeignet |
|---|---|
| Feste Review-Prompts in CI | Mehrfache Klärung der Anforderungen nötig |
| Nightly-Dokumentlink-Checks | Explorative Refactors |
| Codegenerierung mit vordefinierten Templates | Hochambivalente Produktentscheidungen |

## Kernkonzept

Nicht-interaktive Ausführung typischerweise:

1. **Vollständige Aufgabenbeschreibung** aus Argumenten oder stdin
2. Lauf im angegebenen Arbeitsverzeichnis
3. Exit-Code für Erfolg/Fehler
4. Logs oder strukturierte Ergebnisse für Downstream

**Befehlsnamen und Parameter laut Official-CLI-Dokumentation** (häufig `codex exec` oder Äquivalent); nach CLI-Upgrade `--help` erneut prüfen.

## Minimales Beispiel (schematisch)

```bash
# Im Repo-Wurzelverzeichnis, nur-lesen-Review (schematisch, Parameter laut Official)
codex exec --cwd . "Sicherheitsrisiken im Diff relativ zu main listen, keine Dateien ändern"
```

Praxis:

- Im Shell-Skript zuerst `cd` in eine saubere Arbeitskopie
- Aufgabenstring in Heredoc oder versionierte `prompts/`-Datei
- Exit-Code erfassen, bei Fehler CI rot markieren

## Sicherheitsdesign

Unbeaufsichtigt = **niemand tippt Ablehnen**:

| Prinzip | Vorgehen |
|---|---|
| Minimale Rechte | Nur-lesen-Token, eingeschränkte Sandbox |
| Kein Push | CI öffnet nur PR oder lädt Artifact hoch |
| Feste Prompts | Keinen unbereinigten PR-Beschreibungstext direkt einfügen (Injection-Risiko) |
| Audit | Logs und Diff-Artifacts behalten |

Siehe [Muster für menschliche Freigabe](/cases/workflows/human-approval-patterns/) und Roadmap `08-developer-platform/non-interactive/`.

## Vergleich zum interaktiven Modus

| | Interaktiv | Nicht-interaktiv |
|---|---|---|
| Einstieg | `codex` TUI | `exec` / Pipeline |
| Mensch in der Schleife | stark | schwach, vorher planen |
| Zum Lernen | ja | nein |
| Für CI | nein | ja |

Interaktiv: [CLI interaktiver Modus](/guide/cli/interactive-mode/)

## Häufige Missverständnisse

### 1. Nicht-interaktiv ist effizienter — zuerst lernen?

Nicht empfohlen.

Für Erstnutzer ist nicht-interaktiv oft zu schnell und zu starr — wenig Raum für Zwischenklärung.

### 2. Größter Unterschied zum Interaktivmodus?

Kern:

- **Interaktiv:** zwischendurch fragen, steuern, freigeben
- **Nicht-interaktiv:** eher einmalige Ausführung, für vordefinierte Abläufe

### 3. Wann vorerst weglassen?

In diesen Phasen besser nicht:

- Prompts noch unsicher
- Ergebnisabnahme noch unklar
- Grundurteil zu Freigabe, Sandbox, Berechtigungen fehlt

Nicht-interaktiv passt zur Automatisierung, nicht zum ersten Tasten. Zuerst Interaktivmodus beherrschen, dann Skripte.

## Häufige Fehler

- Lange Interaktiv-Gesprächsgeschichte 1:1 in einmaliges exec stopfen
- CI mit Produktionscredentials und Schreibrechten
- CLI-Version nicht pinnen → Pipeline ändert sich plötzlich

## Quellen
- OpenAI-Codex-CLI-Dokumentation
---

**Status:** outdated  
**Anwendbare Produkte:** CLI  
**Prüfhinweis:** Diese Seite dreht sich um `codex exec` und nicht-interaktive Integration; aktuelle Official-Belege reichen nicht für Punkt-für-Punkt-Bestätigung von Einstieg, Parametern und Verhalten — bis zur aktuellen CLI-Nicht-Interaktiv-Dokumentation besser `outdated`.  
**Zuletzt geprüft:** 2026-07-26

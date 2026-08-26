---
title: Code-Reviews in Cloud und GitHub
description: Prüfe Cloud-Diffs und verwende Codex in GitHub als ergänzenden Reviewer mit hohem Signal.
sidebar:
  order: 50
locale: de
source_locale: zh-CN
source_revision: a74296a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Eine abgeschlossene Cloud-Aufgabe liefert eine Zusammenfassung und einen Diff. Du kannst nachfragen, Änderungen verlangen oder einen PR erstellen. Der Aufgabenabschluss ist keine Genehmigung zur Zusammenführung. Projekt-CI, Branchschutz und menschliche Entscheidung bleiben erforderlich.

## Zwei Arten von Review

| Art | Prüfgegenstand | Ergebnis |
|---|---|---|
| Review eines Cloud-Ergebnisses | Zusammenfassung, Protokolle und Diff der aktuellen Aufgabe | Entscheidung über Folgerunde oder PR-Erstellung |
| GitHub-Review durch Codex | PR-Diff des verbundenen Repositorys und Regeln aus `AGENTS.md` | Veröffentlichtes GitHub-Code-Review |

Kommentiere in einem GitHub-PR:

```text
@codex review
```

Codex veröffentlicht Findings als reguläres GitHub-Review. Nach aktueller offizieller Beschreibung konzentrieren sich GitHub-Kommentare auf Probleme hoher Priorität der Stufen P0/P1. Wenn keine Findings vorliegen, kann nur eine Reaktion hinterlassen werden. Überspringe das menschliche Review nicht, nur weil wenige Kommentare erscheinen.

## Review-Reihenfolge

1. **Umfang:** Entsprechen Dateien, Verzeichnisse, Abhängigkeiten und generierte Inhalte der Aufgabe?
2. **Verhalten:** Erfüllen Normalfall, Fehlerpfade und Grenzfälle die Anforderungen?
3. **Sicherheit:** Authentifizierung, Berechtigungen, Eingabeverarbeitung, Zugangsdaten und ausgehendes Netzwerk.
4. **Nachweise:** Welche Tests wurden tatsächlich ausgeführt und welche Fehlschläge offengelegt?
5. **Rückgängigmachung:** Lässt sich die Änderung lokal zurücknehmen und enthält sie sachfremdes Refactoring?

Beispiel-Prompt:

```text
Prüfe diesen PR und melde nur Findings, die falsches Verhalten, Datenverlust, Sicherheitsprobleme oder Kompatibilitätsregressionen verursachen.
Jedes Finding muss Schweregrad, konkrete Position, Auslösebedingung und Auswirkung enthalten.
Führe Stilpräferenzen nicht als Defekte auf.
```

## Repositoryspezifische Regeln

Ergänze in der anwendbaren `AGENTS.md`:

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

Regeln im Repository-Stamm gelten für das gesamte Repository. Eine verschachtelte `AGENTS.md` kann für einen Dienst spezifischere Prüfungen ergänzen. Beginne mit zwei oder drei langfristig stabilen Regeln, die auch den sicheren Weg beschreiben, statt viele schnell veraltende Funktionsnamen aufzunehmen.

## Grenzen automatischer Reviews

Benutzer mit den erforderlichen GitHub-Push- oder Administratorberechtigungen können automatische Reviews für ein Repository in Codex Settings aktivieren. Automatische Reviews sind ein ergänzendes Gate und dürfen keine automatische Merge-Berechtigung besitzen. Repositorys mit hohem Risiko behalten erforderliche Reviewer, CI und Branchschutz bei.

## Abnahmecheckliste

- [ ] Ein Mensch hat den zentralen Logik-Diff gelesen
- [ ] P0/P1-Findings wurden behoben oder das Risiko schriftlich akzeptiert
- [ ] CI besteht und wiederholte fehlgeschlagene Läufe sind erklärbar
- [ ] Keine Secrets, unerwarteten generierten Inhalte oder sachfremden Aktualisierungen der Sperrdatei
- [ ] Aufgabenbeschreibung, PR-Beschreibung und tatsächliche Änderungen stimmen überein

## Offizielle Grundlage

- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)
- [Code review across clients](https://learn.chatgpt.com/docs/code-review)

---

**Status:** verified

**Unterstützte Produkte:** Cloud, GitHub

**Zuletzt geprüft:** 2026-08-26

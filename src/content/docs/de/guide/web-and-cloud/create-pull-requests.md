---
title: Pull Requests erstellen
description: Liefere ein Cloud-Ergebnis als prüfbaren und verifizierbaren PR aus, der nicht automatisch zusammengeführt wird.
sidebar:
  order: 40
locale: de
source_locale: zh-CN
source_revision: 70996a7
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Prüfe nach Abschluss einer Cloud-Aufgabe zuerst Zusammenfassung und Diff. Erstelle erst dann einen Pull Request, wenn Ergebnis, Umfang und Verifikationskriterien erfüllt sind. Andernfalls korrigiere die Aufgabe im selben Chat.

## Von der Aufgabe zum PR

```text
Umgebung und Ausgangs-Branch wählen
  → Cloud-Aufgabe ausführen
  → Zusammenfassung, Protokolle und Diff prüfen
  → bei Bedarf Follow-up
  → Create Pull Request
  → CI + ergänzendes Codex-Review + menschliches Review
  → Mensch entscheidet über die Zusammenführung
```

Formuliere im Prompt ausdrücklich „PR erstellen, nicht zusammenführen“. Verlasse dich aber nicht nur auf diese Anweisung in natürlicher Sprache. Aktiviere im Repository zusätzlich Branchschutz und required checks.

## Wiederverwendbare Aufgabenvorlage

```text
Ziel: Behebe die Login-Timeout-Regression aus #42.
Ausgangspunkt: main.
Umfang: Nur packages/auth/** und die zugehörigen Tests.
Verboten: Keine Abhängigkeiten aktualisieren, keine öffentliche API ändern und nicht direkt nach main schreiben.
Verifikation: pnpm test --filter auth; pnpm typecheck.
Auslieferung: Erstelle einen PR nach main, aber führe ihn nicht zusammen.
Die PR-Beschreibung enthält Ursache, Änderungszusammenfassung, Testbefehle und Ergebnisse, Risiken und Rückgängigmachung.
```

## Prüfung vor der Erstellung

- [ ] Der Ausgangs-Commit ist korrekt und keine lokalen ungepushten Eingaben fehlen
- [ ] Der Diff enthält nur den Aufgabenbereich
- [ ] Der neue Branchname ist eindeutig und überschreibt keine fremde Arbeit
- [ ] Tests wurden tatsächlich ausgeführt und Fehlschläge nicht in der Zusammenfassung verborgen
- [ ] Keine Zugangsdaten, temporären Protokolle, Caches oder sachfremden Formatierungen
- [ ] Große Änderungen wurden in unabhängig prüfbare PRs aufgeteilt

## Mindestinhalt der PR-Beschreibung

1. Weshalb ist die Änderung erforderlich?
2. Was wurde tatsächlich geändert?
3. Wie wurde verifiziert, einschließlich Befehlen und Ergebnissen?
4. Welche Risiken, Einschränkungen und Möglichkeiten zur Rückgängigmachung bestehen?
5. Welche Inhalte wurden ausdrücklich nicht umgesetzt?

Ergänze bei UI-Änderungen echte Screenshots, bei Verhaltensänderungen Reproduktionsschritte und bei Migrationen Hinweise zu Kompatibilität und Rückgängigmachung.

## Nach der Erstellung

Warte auf die required checks, fordere mit `@codex review` ein ergänzendes Review an und lass eine Person mit dem nötigen Kontext den zentralen Diff prüfen. Übergib konkrete Review-Kommentare für Korrekturen an denselben PR-Branch zurück. Erstelle dafür keinen unabhängigen zweiten Branch mit doppeltem Ergebnis.

PR-Erstellung und Zusammenführung sind zwei Berechtigungsgrenzen. Dass Cloud einen PR erstellen kann, berechtigt nicht zum Umgehen der Zusammenführungsrichtlinie des Teams.

## Offizielle Grundlage

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [GitHub Pull Request review](https://learn.chatgpt.com/docs/third-party/github)

---

**Status:** verified

**Unterstützte Produkte:** Cloud, GitHub

**Zuletzt geprüft:** 2026-08-26

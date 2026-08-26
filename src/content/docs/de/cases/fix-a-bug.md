---
title: 'Einen Bug beheben: Wo anfangen?'
description: Wähle den passenden Weg zur Behebung des aktuellen Bugs und öffne ein vollständiges Beispiel mit ausführbaren Materialien.
locale: de
source_locale: zh-CN
source_revision: 27c707b
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Diese Seite dient als kurzer Einstieg. Die vollständige Anleitung mit ausführbarem Code, Nachweisen für rote und grüne Tests sowie Prompts für jede Phase wird zentral unter [Bugfix mit Verifikation](/de/cases/use-cases/software-development/fix-a-bug-with-verification/) gepflegt. So entstehen keine widersprüchlichen Duplikate.

## Bestimme zuerst, welcher Schritt dir fehlt

| Aktuelle Situation | Beginne hier |
|---|---|
| Du weißt nur, dass das Ergebnis falsch ist, kannst den Fehler aber noch nicht zuverlässig reproduzieren | [Erst diagnostizieren, dann beheben](/de/cases/workflows/diagnose-before-fixing/) |
| Es gibt bereits einen zuverlässig fehlschlagenden Test | [Bugfix mit Verifikation](/de/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Du kennst das betroffene Modul nicht | [Eine Codebasis verstehen](/de/cases/understand-a-codebase/) |
| Der Fix ist fertig und soll zusammengeführt werden | [Einen PR prüfen](/de/cases/review-a-pr/) |
| Der Test selbst ist instabil | Lies zuerst [Tests ausführen](/de/guide/quality/run-tests/) und behandle einen flüchtigen Test nicht als Nachweis für den Fix |

## Der kleinste vollständige Zyklus

Unabhängig von Sprache oder Framework muss diese Beweiskette erhalten bleiben:

1. Reproduziere das ursprüngliche Problem zuverlässig mit einem eindeutigen Befehl.
2. Sichere die fehlgeschlagene Assertion, die Fehlermeldung und die Eingabebedingungen.
3. Erkläre zuerst die Ursache und implementiere dann den kleinsten möglichen Fix.
4. Bringe den ursprünglich fehlgeschlagenen Test und neue Grenzfalltests zum Bestehen.
5. Führe umfassendere Regressionstests aus.
6. Lies den Diff manuell und vergewissere dich, dass er keine sachfremden Änderungen enthält.

Schritt 4 ohne Schritt 1 beweist nicht, dass der Test das ursprüngliche Problem abdeckt. Ebenso beweist eine vollständig grüne Testsuite ohne Diff-Prüfung nicht, dass der Änderungsumfang korrekt ist.

## Direkt ausprobieren

Das Repository enthält ein JavaScript-Beispiel für Warenkorbrabatte, das keine Drittanbieterpakete benötigt:

```bash
# Ausgangscode: 1 Test schlägt erwartungsgemäß fehl
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# Referenzlösung: Alle 3 Tests bestehen erwartungsgemäß
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Alle Materialien befinden sich unter [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix).

---

**Status:** verified  
**Unterstützte Produkte:** CLI / IDE  
**Prüfgrundlage:** Diese Einstiegsseite beschreibt nur die Wahl des passenden Pfads und einen stabilen Engineering-Zyklus. Die Befehle für den erwarteten Fehlschlag und den erfolgreichen Referenzlauf wurden im aktuellen Repository tatsächlich ausgeführt.
**Zuletzt geprüft:** 2026-08-25

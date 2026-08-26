---
title: 'Fallbeispiel: Bugfix mit Verifikation'
description: Behebe einen ausführbaren Fehler in einer Rabattberechnung anhand einer roten Reproduktion, Ursachenanalyse, minimalen Korrektur, grünen Regressionstests und einer Diff-Prüfung.
locale: de
source_locale: zh-CN
source_revision: 91d8575
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Dies ist keine Prompt-Vorlage, die allein durch das Austauschen von Dateinamen vollständig wird. Du arbeitest mit echtem Ausgangscode aus dem Repository, beobachtest zunächst einen fehlschlagenden Test und prüfst anschließend, wie die Referenzkorrektur dieselbe Testsuite zum Bestehen bringt.

## Metadaten

| Feld | Inhalt |
|---|---|
| Zielgruppe | Entwickler |
| Client | CLI oder IDE (lokales Repository) |
| Geschätzte Dauer | 25–45 Minuten |
| Vorkenntnisse | Einen Node.js-Befehl im Terminal ausführen und einfaches JavaScript lesen können |
| Abhängigkeiten des Beispiels | Das integrierte Node.js-Modul `node:test`; keine Drittanbieterpakete erforderlich |
| Prüfdatum | 2026-08-25 |

## 1. Ziel und Kontext

**Fachlicher Kontext:** Die Warenkorbfunktion `calculateTotal` nimmt einen Rabatt in Prozent entgegen. Ohne Rabatt ist das Ergebnis korrekt. Wird jedoch `10` für einen Rabatt von 10 % übergeben, multipliziert die Funktion direkt mit `10` und erzeugt dadurch einen negativen Betrag.

**Ziel:** Finde den Fehler in der Rabattberechnung, implementiere den kleinsten möglichen Fix und belege mit derselben Testsuite den Übergang von Rot zu Grün.

**Erfolgskriterien:**

- Im Ausgangszustand schlägt zuverlässig genau 1 Test fehl; die Assertion zeigt „36 erwartet, -360 erhalten“
- Nach dem Fix bestehen alle 3 Tests
- Der Fix ändert nur die Umrechnung des prozentualen Rabatts und schreibt die Warenkorb-API nicht neu
- Du kannst erklären, weshalb der grüne Test nach dem Fix zusammen mit dem roten Test vor dem Fix festgehalten werden muss

**Nicht im Umfang:** Bibliotheken für Geldbeträge, Steuern, Währungsumrechnung, Abhängigkeitsaktualisierungen und Benutzeroberflächen.

![Workflow für einen verifizierten Bugfix](/diagrams/verified-bug-fix-workflow-de.svg)

Die beiden Rückwege im Diagramm sind entscheidend: Schlagen die relevanten Tests fehl, kehrst du zum minimalen Fix zurück. Schlägt die vollständige Regression oder die Diff-Prüfung fehl, gehst du zurück zur Ursachenanalyse. Entferne keine Assertions und vergrößere nicht den Änderungsumfang, nur um möglichst schnell grüne Tests zu erhalten.

## 2. Materialien vorbereiten

Beispielverzeichnis:

```text
examples/complete-workflows/developer/verified-bug-fix/
├── brief.md
├── starter/
│   ├── cart.js
│   └── cart.test.js
├── prompts/
│   ├── 01-explore.md
│   ├── 02-fix-and-verify.md
│   └── 03-review.md
├── solution/
│   ├── cart.js
│   └── cart.test.js
└── validation.md
```

`starter/` ist der Ausgangspunkt der Übung und enthält absichtlich einen Bug. `solution/` ist eine separat ausführbare Referenzlösung. Übe nicht direkt an der Referenzlösung.

## 3. Schritt 1: Den roten Test reproduzieren

Führe im Stammverzeichnis des Repositorys diesen Befehl aus:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

Erwartung: Der Befehl endet mit einem von null verschiedenen Status; 1 von 3 Tests schlägt fehl. Der entscheidende Nachweis sieht ungefähr so aus:

```text
Expected values to be strictly equal:

-360 !== 36
```

Wenn der Test nicht fehlschlägt, halte an. Prüfe, ob du tatsächlich `starter/` ausführst, welche Node.js-Version aktiv ist und ob die Dateien bereits verändert wurden. Ohne zuverlässig roten Test fehlt der Ausgangsnachweis für das ursprüngliche Problem.

## 4. Schritt 2: Schreibgeschützte Untersuchung

### Untersuchen

```text
Ändere noch keine Dateien. Lies:
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.js
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

Erläutere in höchstens 6 Punkten:
1. Welche Eingabe den Fehler auslöst;
2. welcher Wert erwartet und welcher tatsächlich zurückgegeben wird;
3. wie sich Prozentwert und Faktor in der Formel unterscheiden;
4. in welcher Zeile der kleinste Fix erfolgen sollte;
5. welches öffentliche Verhalten unverändert bleiben muss;
6. welche Prüfungen nach dem Fix auszuführen sind.
```

Eine zutreffende Ursachenanalyse muss festhalten: Der Aufrufer übergibt `10` als 10 %, die Implementierung berechnet jedoch direkt `subtotal * 10`. Die Umrechnung durch Division mit `100` fehlt.

## 5. Schritt 3: Den minimalen Fix planen und ausführen

```text
Ändere ausschließlich die Umrechnung des prozentualen Rabatts in starter/cart.js.
Ändere weder Funktionsname, Parameter, Test-Assertions noch Dateistruktur und füge keine Abhängigkeiten hinzu.

Führe nach dem Fix der Reihe nach Folgendes aus:
1. starter/cart.test.js ausführen;
2. die tatsächliche Testzusammenfassung zeigen;
3. die geänderte Zeile und ihren Grund zusammenfassen;
4. nichts committen und nichts pushen.
```

Der Kern des minimalen Fixes lautet:

```js
const discount = subtotal * (discountPercent / 100);
```

Ändere im Test nicht `36` in `-360`, um einen grünen Test zu erhalten. Damit würdest du lediglich die Erwartung umschreiben, nicht die fachliche Regel reparieren.

## 6. Schritt 4: Den grünen Test verifizieren

Wenn du den Übungsausgangspunkt nicht verändern möchtest, kannst du direkt die Referenzlösung ausführen:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Erwartung: Alle 3 Tests bestehen und der Prozess endet mit Status 0.

Die Verifikationsaufzeichnung muss mindestens Folgendes enthalten:

| Nachweis | Zu beantwortende Frage |
|---|---|
| Fehlgeschlagener Befehl vor dem Fix | Lässt sich das ursprüngliche Problem zuverlässig reproduzieren? |
| Fehlgeschlagene Assertion | Deckt der Test diesen Bug tatsächlich ab? |
| Code-Diff | Betrifft die Änderung ausschließlich die Ursache? |
| Relevanter Test nach dem Fix | Verhält sich dieselbe Funktion jetzt korrekt? |
| Umfassendere Tests | Wurde benachbarte Funktionalität beschädigt? |

Dieses Übungsverzeichnis enthält nur eine Testsuite. In einem echten Projekt führst du zusätzlich die in `AGENTS.md` angegebenen Lint-, Typprüfungs- und vollständigen Testbefehle aus.

## 7. Schritt 5: Review

```text
Prüfe diesen Fix, ohne Dateien zu ändern. Liste zuerst die Findings auf und ziehe dann ein Fazit:
- Wurde die Umrechnung des Prozentwerts tatsächlich korrigiert, statt den Test abzuschwächen?
- Wurden Funktionssignatur oder sachfremde Logik verändert?
- Sind leerer Warenkorb, kein Rabatt und 10 % Rabatt abgedeckt?
- Welche Risiken bei der Genauigkeit von Geldbeträgen liegen weiterhin außerhalb dieses Beispiels?
```

Prüfe außerdem manuell, dass keine zusätzlichen Abhängigkeiten, Debug-Protokolle, Formatierungen ganzer Dateien oder Git-Aktionen enthalten sind.

## 8. Fehler und Wiederherstellung

| Problem | Vorgehen |
|---|---|
| Der Ausgangstest schlägt nicht fehl | Stelle sicher, dass du `starter/cart.test.js` ausführst, und setze einen bereits veränderten Ausgangspunkt zurück |
| Der Test wird nach seiner Änderung grün | Stelle die Test-Assertion wieder her und ändere nur die Prozentumrechnung in der Implementierung |
| Der relevante Test schlägt weiter fehl | Vergleiche den fehlerhaften Wert und prüfe, ob `/ 100` an der falschen Stelle steht |
| Die vollständige Testsuite weist neue Fehler auf | Kehre zur Ursachenanalyse zurück und prüfe öffentliches Verhalten sowie Änderungsumfang |
| Ein Test schlägt nur gelegentlich fehl | Stabilisiere zuerst die Testumgebung; ein einzelner grüner Lauf ist kein Nachweis |

## 9. Die Übung auf ein echtes Repository übertragen

Ersetze die Beispielpfade durch deine Dateien, behalte aber die Nachweisstruktur bei:

```text
Ziel: [beobachtbares Fehlverhalten] beheben.
Reproduktionsbefehl: [genauer Befehl]; aktuell schlägt er zuverlässig mit [entscheidende Assertion] fehl.
Umfang: Nur [Implementierungsdatei] und erforderliche Tests ändern; kein Refactoring und keine Abhängigkeitsaktualisierung.
Abnahme: Der ursprünglich fehlgeschlagene Test besteht; neue Grenzfalltests bestehen; [vollständiger Befehl] besteht; der Diff enthält keine sachfremden Änderungen.
Berechtigungen: Nicht pushen, veröffentlichen oder Produktionsdaten ändern; bei Bedarf an weiteren Berechtigungen anhalten und den Grund nennen.
Untersuche zuerst nur lesend Ursache und Risiken. Warte mit Änderungen, bis ich den Plan bestätigt habe.
```

## 10. Verstetigen

- Wenn diese Bugklasse wiederholt auftritt, ergänze eine Regel in `AGENTS.md`
- Du kannst einen Skill namens `regression-guard` erstellen, der rote Tests, grüne Tests und Regressionsnachweise zwingend aufzeichnet
- Nimm häufige Grenzfalltests in CI auf, statt sie nur im Gespräch zu belassen

## 11. Verwandte Kapitel

- [Erst diagnostizieren, dann beheben](/de/cases/workflows/diagnose-before-fixing/)
- [Lernpfad für Entwickler](/de/guide/learning-paths/developer/)
- [Tests ausführen](/de/guide/quality/run-tests/)
- [Diffs prüfen](/de/guide/quality/review-diffs/)
- [Fertigstellungskriterien definieren](/de/prompts/define-done/)

---

**Status:** verified  
**Unterstützte Produkte:** CLI / IDE  
**Prüfgrundlage:** Beim Ausgangsbeispiel wurde der erwartete Fehlschlag von 1 der 3 Tests verifiziert; bei der Referenzlösung wurde das Bestehen aller 3 Tests verifiziert. Die Seite ordnet die Nachweiskette nach rotem Test, Ursache, minimalem Fix, grünem Test, Regression und manueller Prüfung.
**Zuletzt geprüft:** 2026-08-25

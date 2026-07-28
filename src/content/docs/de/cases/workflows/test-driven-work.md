---
title: Testgetriebene Arbeit
description: Zuerst fehlschlagende Tests definieren oder ergänzen, dann die Implementierung treiben — damit Codex-Änderungen objektiv abnehmbar sind.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Testgetriebene Arbeit** (TDD oder „Tests zuerst“) lässt Tests zuerst fehlschlagen und bringt sie dann mit minimaler Implementierung zum Bestehen. Geeignet für Codebasen mit vorhandener Testinfrastruktur und eng verwandt mit Szenarien wie [Bug-Fix mit Überprüfung](/cases/use-cases/software-development/fix-a-bug-with-verification/).

## Schwerpunkte dieser Seite

- Wann «zuerst Tests schreiben/ausführen» verlangt werden soll
- Wie man Codex daran hindert, Testschritte zu überspringen
- Rückzugstrategie bei Testfehlschlägen

## Für wen geeignet

- Repositories mit Unit-/Integrationstests
- Regressions-Bugs, API-Verhaltensänderungen, Refactorings

Ungeeignet: Prototypen ohne Testinfrastruktur, einmalige Änderungen an reinen Textseiten. Dafür eher [EPXV](/cases/workflows/explore-plan-execute-verify/) mit manueller Überprüfung.

## Minimal brauchbares Vorgehen

```text
1. Für das gewünschte Verhalten einen fehlschlagenden Test schreiben (oder den vorhandenen Fehlschlag nennen)
2. Nur den minimalen Code implementieren, der diesen Test grün macht
3. Relevante Testsuite, dann Vollsuite ausführen
4. Assertions nicht löschen und echte Logik nicht wegmocken, nur um Tests zu bestehen
```

Prompt:

```text
Nach TDD: Zuerst einen fehlschlagenden Test für «leere Eingabe gibt [] zurück» in @src/foo.ts schreiben;
Test ausführen und Fehlschlag bestätigen, danach Implementierung ändern; pro Schritt nur die relevanten Testdateien.
```

## Empfohlener Workflow

| Phase | Artefakt |
|---|---|
| Rot | Fehlschlagender Test + Erklärung der Ursache |
| Grün | Minimale Implementierung + Tests bestanden |
| Refactor | Code unter Testschutz aufräumen (optional eigener Schritt) |

Kombinieren mit [Zuerst diagnostizieren, dann fixen](/cases/workflows/diagnose-before-fixing/): zuerst fehlschlagende Assertion und Stack lesen, dann Implementierung anfassen.

## Häufige Fehler

- Fertig melden, ohne Tests gelaufen zu haben
- Tests anpassen, damit eine falsche Implementierung besteht
- Nur einen Test laufen lassen und «alles grün» behaupten
- Bei langsamen E2E-Suites immer Volläufe — `-t` oder Dateifilter nutzen

## Sicherheitsgrenzen

- Testbefehle müssen im Rahmen der [Befehlsregeln](/guide/customization/rules/command-rules/) liegen
- Integrationstests, die Produktions-APIs treffen, müssen in der Spezifikation verboten oder auf Mocks umgestellt werden

## Abnahme-Checkliste

- [ ] Evidenz für Fehlschlag→Bestehen (Logs oder CI)
- [ ] Vollsuite oder vereinbarter Umfang bestanden
- [ ] Diff enthält keine unrelated Testlöschungen
- [ ] Konsistent mit [Done definieren](/prompts/define-done/)

## Verwandte Kapitel

- [Tests ausführen](/guide/quality/run-tests/)
- [Fall: Bug-Fix mit Überprüfung](/cases/use-cases/software-development/fix-a-bug-with-verification/)

## Referenzquellen

- stormzhang Kapitel zu Tests und Qualität
- CodexGuide Entwickler-Workflows

---

**Status:** verified  
**Geeignete Produkte:** CLI / IDE  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Tests ausführen, Definition of Done, Bug-Fix mit Überprüfung und Befehlsregeln. Der Inhalt fokussiert die stabile Testmethode „zuerst fehlschlagen lassen, dann mit minimaler Implementierung grün machen“.  
**Zuletzt geprüft:** 2026-07-26

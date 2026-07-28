---
title: Zuerst diagnostizieren, dann fixen
description: "Produktionsprobleme und hartnäckige Bugs — zuerst eine Beweiskette aufbauen, dann eingreifen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Codex sofort zum Bugfixen zu bringen, führt oft zu hoher Nacharbeit. Der Diagnose-Workflow betont: **Symptom → Hypothese → Evidenz → minimale Korrektur**.

## Wann verwenden

- Testfehlerursache unklar
- Produktionsalarme, Nutzer melden «sporadisch»
- Problem bleibt nach dem letzten Fix bestehen

## Schritte

### 1. Änderungen einfrieren

```text
Ändere vorerst keinen Geschäftscode. Auflisten: Reproduktionsschritte, relevante Logs, kürzlich verwandte Commits.
```

### 2. Umfang verkleinern

- Bisection: Welcher Commit hat es eingeführt?
- Isolation: Minimales Reproduktions-Repository oder Testfall

### 3. Hypothesen bilden

Von Codex verlangen:

```text
Hypothese A: … Überprüfungsweise: …
Hypothese B: … Überprüfungsweise: …
```

### 4. Hypothesen prüfen (bevorzugt nur lesend)

Gezielte Tests ausführen, temporäre Logs (wegwerfbarer Branch), Monitoring lesen.

### 5. Minimale Korrektur

Nur eine Root Cause pro Durchgang; «nebenbei refactoren» vermeiden.

### 6. Regressionsüberprüfung

Ursprünglich fehlgeschlagener Fall + Nachbarszenarien + Tests gegen Wiederauftreten.

## Prompt-Vorlage

```text
Nach «zuerst diagnostizieren, dann fixen»:
1. Lies @path/to/failing-test und die Implementierung, erkläre die Fehlerursache (Stack-Zeilennummern zitieren)
2. Gib 2 Hypothesen und wie sie nur lesend überprüft werden
3. Nach meiner Bestätigung der Hypothese den Fix schreiben; danach nur relevante Tests laufen lassen
```

## Verhältnis zu EPXV

Diagnose ist eine vertiefte **Erkunden**-Phase; in der Planungsphase muss auch klar sein, wie man zurückrollt, wenn die Hypothese falsch war.

## Häufige Fehler

- Code ändern, bevor reproduziert
- Ein Patch für drei Probleme zugleich → nicht reviewbar
- Temporäre Logs löschen, ohne dauerhafte Tests nachzuziehen

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Planung, Qualität und Fehlerwiederherstellung. Diese Seite bestätigt nur die stabile Diagnosemethode „zuerst Beweiskette, dann minimale Korrektur“ und hängt nicht an einer konkreten Produkt-Client-Implementierung.  
**Zuletzt geprüft:** 2026-07-26

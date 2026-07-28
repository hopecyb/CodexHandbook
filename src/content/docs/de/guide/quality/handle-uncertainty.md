---
title: Unsicherheit handhaben
description: Bei fehlenden Informationen nachfragen statt erfinden.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Reicht die Information nicht: zuerst klären, dann weiter.

Einer der unangenehmsten Fälle mit Codex: fehlende Informationen werden zu scheinbar vernünftigen Antworten aufgefüllt.  
Stimmt die Voraussetzung nicht, laufen die folgenden Schritte mit.

## Was „unsicher“ heißt

Hier meint „Unsicherheit“ vor allem:

- Es gibt noch nicht genug Belege zur Bestätigung
- Die Information liegt nicht im aktuellen Kontext
- Weiteres Raten erhöht das Risiko

Besser vorab klar sagen, **wann zuerst gestoppt und nachgefragt** wird.

Im Prompt fest verankern:

```text
Bei unzureichender Information zuerst nachfragen; keine Dateipfade, APIs oder Geschäftsregeln erfinden.
```

Bei erfundenen Inhalten: stoppen, Fakten korrigieren, bei Bedarf neuen Thread öffnen.

## Entscheidungsweise

Erfüllt eine Schlussfolgerung eines der folgenden, nicht weiter raten:

- In den aktuellen Dateien kein Beleg
- Sie haben diese Geschäftsregel nicht klar geliefert
- Externe Fakten nötig, Quellen noch nicht geprüft
- Ein Fehlraten beeinflusst viele Folgeschritte

## Häufige Missverständnisse

### 1. Vollständige Antwort ≠ wirkliches Wissen

Vollständigkeit kann nur „glatt aufgefüllt“ bedeuten — nicht, dass der Inhalt in Ihrem Projekt existiert.

### 2. Bei Lücken geht es nicht darum, Lücken zuzustopfen

Vollständige Information ist besser, aber in der Praxis fehlen oft Teile.

Wichtiger:

- Bei Lücken zuerst stoppen und klären
- Nachfragen erlauben, statt zwingend zu raten

### 3. Nachfragen verlangsamt nicht unbedingt

Ein Schritt mehr reduziert oft Nacharbeit.

Viele Probleme wachsen aus „erst mal raten und machen“.

### 4. Wenn geraten wurde: zuerst stoppen

Den Fehler zuerst anhalten, dann weiter. Reihenfolge:

1. Klar sagen, was falsch ist
2. Echte Information nachliefern
3. Bei Bedarf auf korrigierter Basis neu starten lassen

## Direkt einsetzbare Formulierungen

Weniger Raten:

```text
Wenn Sie es aus vorhandenen Dateien oder meinen Angaben nicht bestätigen können, zuerst nachfragen — nicht selbst ergänzen.
```

## Noch ein Satz

Optional ergänzen:

```text
Gibt es mehrere mögliche Interpretationen, listen Sie zuerst die Unsicherheiten, dann weiter.
```

Schlimmer als fehlende Information: Vermutung als Fakt weitertragen.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Nachfrage- und Korrekturprinzipien bei Informationslücken; Konzepte, Prompt-Formulierungen und Reihenfolge wurden geprüft, der Text hängt nicht von volatilen Produktfakten ab.  
**Zuletzt geprüft:** 2026-07-26

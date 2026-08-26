---
title: KI und Sprachmodelle
description: "Verstehe, wie Sprachmodelle Antworten aus dem Kontext erzeugen."
locale: de
source_locale: zh-CN
source_revision: 1951620
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Sprachmodelle **sagen die nächste sinnvolle Ausgabe voraus** — basierend auf dem Text, den Dateien und den Werkzeugergebnissen, die du bereitstellst. Sie sind stark beim Ergänzen, Ordnen, Entwerfen und beim Weiterarbeiten entlang des Kontexts. Sie kennen aber nicht von selbst, was du ihnen nicht gegeben hast, und können keine absolute Korrektheit garantieren.

Ein Sprachmodell liest keine Gedanken und kennt dein Projekt nicht von Natur aus; es kann nur aus den Informationen, die du übergibst, ein „plausibel wirkendes“ Ergebnis weiter generieren.

Das erklärt auch:

- Ohne wichtigen Kontext rät es leicht
- Bei widersprüchlichen Infos läuft es leicht schief
- Es hilft beim Entwerfen, Ordnen und Analysieren — Korrektheit kannst du aber nicht vollständig auslagern

## Was es tut

Ein Sprachmodell kannst du als System sehen, das besonders gut anknüpft, ordnet und ergänzt.

Es sieht:

- Deine Aufgabenbeschreibung
- Die Dateien, die du gibst
- Die Ergebnisse der Werkzeuge

Daraus erzeugt es den Schritt, den es für am passendsten hält.

Es schiebt vom aktuellen Kontext aus weiter — es „weiß“ die Antwort nicht unabhängig.

## Was das für dich bedeutet

- **Eingabequalität setzt die Obergrenze**: Unklares Ziel → Ausgabe läuft leicht schief
- **Kontext ist begrenzt**: Zu lange Historie wird komprimiert oder abgeschnitten, siehe [Token, Kontext und Komprimierung](/de/guide/foundations/tokens-context-and-compaction/)
- **Überprüfung ist Pflicht**: besonders bei Zahlen, Recht, Sicherheit und öffentlich freizugebenden Inhalten

## Häufige Missverständnisse

### 1. Es ist so klug — es sollte den Hintergrund kennen, den ich nicht gesagt habe

In der Regel nicht.

Es kann raten — aber du solltest nicht darauf setzen, dass es standardmäßig richtig rät.  
Was du im Kopf hast, aber nicht klar übergeben hast, ist oft genau die Fehlerquelle.

### 2. Weil es Code oder Doku schreiben kann, hat es es wirklich verstanden

Nicht unbedingt.

Oft erzeugt es nur etwas, das sehr ähnlich wirkt. „Ähnlich“ heißt nicht: passt zu deinem Projekt, deiner Umgebung und deinem Ziel.

### 3. Mit Sprachmodell brauche ich kein eigenes Urteil mehr

Du brauchst Urteil eher noch mehr:

- Hat es die Aufgabe verstanden?
- Rät es gerade?
- Braucht die Schlussfolgerung eine Überprüfung?

## Unterschied zur „Suchmaschine“

Suchmaschinen liefern vor allem bestehende Webseiten; Codex wirkt eher so, dass es unter deinem Ziel **Werkzeuge aufruft und ausführbare Änderungen erzeugt**. Bei beiden musst du Glaubwürdigkeit einschätzen.

Am nützlichsten wird ein Sprachmodell, wenn genug Kontext da ist — dann kann es schnell entlang deines Ziels weiterarbeiten.

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Überprüfungsgrundlage:** Diese Seite erklärt nur das Grundprinzip, dass Sprachmodelle Ausgaben aus dem Kontext erzeugen; interne Links und Konzeptformulierungen wurden geprüft, und der Text hängt nicht von schnell veränderlichen Produktdetails ab.  
**Zuletzt überprüft:** 2026-07-26

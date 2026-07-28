---
title: Artefakte überprüfen
description: Generierte Dokumente, Seiten und andere Ergebnisse prüfen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

„Artefakt“ meint hier das, was die Aufgabe am Ende liefert, zum Beispiel:

- ein Dokument
- eine Seite
- ein Bild
- eine Tabelle
- eine generierte Datei

Weil der Code „richtig aussieht“, ist das Artefakt nicht automatisch richtig.

## Warum Artefakte extra prüfen

Viele Aufgaben liefern nicht nur Code-Diffs, sondern Inhalte, die Nutzer wirklich sehen und nutzen.

Beim Prüfen typischerweise:

- Ist das Endergebnis nutzbar
- Entspricht die Darstellung der Erwartung
- Wirkt es für andere schräg, falsch oder unvollständig

Manches Problem sitzt nicht in der Code-Schicht, sondern in der finalen Präsentation.

Zum Beispiel:

- Seite läuft, Layout stimmt nicht
- Textstruktur ok, liest sich unnatürlich
- Link-Format korrekt, Ziel falsch
- Tabelle erzeugt, Feldreihenfolge unbrauchbar

„Es wurde generiert“ ≠ „es ist nutzbar“.

Bei Nicht-Code-Artefakten: Datei öffnen, Links prüfen, gegen Design halten, Text einmal laut lesen. Bei Seiten: echtes Gerät oder Browser-Vorschau — nicht nur generierten Code ansehen.

## Nach Artefakttyp

Je Typ anders prüfen:

- **Seite**: echtes Rendering, Layout, Links, Interaktion
- **Dokument**: Struktur, Terminologie, Lesbarkeit, Links
- **Bild**: Größe, Schärfe, Text, Details
- **Tabelle oder Export**: Felder, Reihenfolge, Öffnenbarkeit, Lesbarkeit

## Häufige Missverständnisse

### 1. Build grün ≠ Seite in Ordnung

Build heißt nur „es lässt sich erzeugen“ — nicht „es sieht richtig aus, Inhalt stimmt, Interaktion stimmt“.

### 2. Dokumentinhalte brauchen auch Überprüfung

Ja.

Besonders:

- sinnvolle Überschriftenhierarchie
- klickbare und korrekte Links
- konsistente Terminologie
- natürlicher, lesbarer Text

### 3. Screenshot allein reicht nicht

Screenshots geben schnellen Überblick; viele Probleme zeigen sich erst in der echten Datei oder echten Seite.

## Direkt anwenden

Verlangen Sie:

```text
Nach Abschluss bitte aus Sicht des finalen Artefakts selbst prüfen und sagen, was Sie wirklich geöffnet haben, was Sie gefunden haben und was noch ungeprüft blieb.
```

## Prüfreihenfolge

1. Echtes Artefakt öffnen
2. Gegen Ihre Abnahmekriterien Zeile für Zeile
3. Kleine Experience-Probleme suchen

Lauffähigkeit heißt nur, die Basis hält; Lieferbarkeit hängt am finalen Nutzungseffekt.

---

**Status:** verified  
**Gilt für:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Überprüfungs methoden für finale Liefergegenstände; interne Links, Artefakttypen und Prüfreihenfolge wurden geprüft, der Text hängt nicht von volatilen Produktfakten ab.  
**Zuletzt geprüft:** 2026-07-26

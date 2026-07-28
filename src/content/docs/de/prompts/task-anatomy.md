---
title: Aufgabenstruktur
description: 'Ziel, Hintergrund, Eingaben, Constraints, Abnahme und Berechtigungsgrenzen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Bei vielen Infos zerfallen Anforderungen leicht: viel Material, unklarer Fokus — und Codex missversteht leichter.

Hier die typischen Bausteine einer Aufgabe.

## Aufgabenstruktur

Organisiere in dieser Reihenfolge:

- Was ist das Ergebnis?
- Warum wird es gebraucht?
- Welche Materialien braucht es?
- Wo liegen die Grenzen?
- Wie wird Fertigstellung beurteilt?

Die Reihenfolge muss nicht starr sein — wenn diese Punkte klar sind, wird die Aufgabe deutlich stabiler.

## Empfohlene Vorlage

```text
Ziel: …… (was ist das End-Artefakt)
Hintergrund: …… (warum wichtig, aktueller Stand)
Eingaben: …… (relevante Dateien/Links/eingefügter Inhalt)
Constraints: …… (änderbarer Scope, Stil, Verbote)
Abnahmekriterien: …… (prüfbare Fertigstellungsbedingungen)
Berechtigungsgrenzen: …… (Netzwerk? Dependencies installieren? Config ändern?)
Bei fehlenden Infos: zuerst fragen, nicht raten.
```

## Rolle jedes Abschnitts

- **Ziel**: verhindert reine Aktionen ohne Ergebnis
- **Hintergrund**: hilft Codex zu verstehen, warum so
- **Eingaben**: liefert Dateien, Links und Material, die wirklich nötig sind
- **Constraints**: verhindert Grenzverletzung und „nebenbei mitändern“
- **Abnahmekriterien**: macht „fertig?“ prüfbar
- **Berechtigungsgrenzen**: klärt Netz, Dependencies, Config im Voraus

## Häufige Missverständnisse

### 1. Jeder Abschnitt muss voll sein

Die Vorlage ist eher Checkliste als Lückentext.  
Manche Aufgaben brauchen keinen langen Hintergrund — aber ohne ihn fehlt auch ein Teil der Entscheidungsgrundlage.

### 2. Ziel und Abnahme sind dasselbe

Nicht dasselbe.

- **Ziel**: welches Ergebnis du willst
- **Abnahme**: wie du prüfst, dass es wirklich erreicht ist

### 3. Eingaben = möglichst viel Material einfügen

Nicht mehr ist besser — relevant zählt.  
Ziel: „Muss-Material“ klar übergeben.

## Minimale Aufgabenvorlage

Wenn du zuerst eine brauchbare Kurzfassung willst:

```text
Ziel: Was soll wie werden
Eingaben: relevante Dateien oder Seiten hier
Constraints: nur hier ändern, das nicht anfassen
Abnahme: wie prüfe ich, dass du fertig bist
Bei Unsicherheit: zuerst fragen
```

## Beispiel

```text
Ziel: Docs-Homepage First-Screen-Text für Einsteiger verständlicher machen
Eingaben: src/content/docs/guide/index.md
Constraints: nur diese Datei, kein Style, keine neuen Komponenten
Abnahme: Struktur behalten; Text umgangssprachlicher; pnpm build ok
Bei Unsicherheit: zuerst Verständnis und Scope nennen, dann handeln
```

Diese Struktur reduziert Raten und macht Abnahme direkter. Abschnitte kannst du kürzen — aber was du streichst, fehlt als Information.


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Methoden zur Aufgabenstruktur; Beispiele und interne Links wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26

---
title: Auswahl und geöffnete Dateien
description: Mit ausgewähltem Code und geöffneten Dateien den IDE-Aufgabenrahmen präzise setzen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Die IDE-Erweiterung eignet sich für **kleine, präzise** Änderungen: Codeausschnitt markieren, Absicht erklären, Codex ändert im nahen Kontext. Hier: wie Auswahl und geöffnete Dateien den Rahmen eng halten und Fehländerungen vermeiden.

Die Auswahl sagt schlicht: Fokus hier — nicht selbst den Rahmen aufblasen.

## Inhalt dieser Seite

- Auswahl vs. ganze Datei vs. @-Pfad wählen
- Kontext bei Multi-Datei-Refactors organisieren
- „Haufen irrelevanter Dateien geändert“ reduzieren

## Drei Eingrenzungsarten

| Art | Wann | Beispiel |
|---|---|---|
| **Auswahl** | einzelne Funktion/Komponente, nahe am Fehlerstack | `parseUser()` markieren, Nullbehandlung verlangen |
| **Geöffnete Datei** | mehrere Bezüge innerhalb der Datei | `auth.ts` + `auth.test.ts` öffnen |
| **@-Pfad** | über Verzeichnisse, noch nicht geöffnet | `@src/api/client.ts` Typen mit Backend abstimmen |

Tiefer: [Datei- und Ordner-Kontext](/guide/context/file-and-folder-context/)

## Minimal praktikabel

1. **Kleinsten relevanten Ausschnitt** wählen (meist 10–80 Zeilen), im Prompt Ziel und [Fertig-Definition](/prompts/define-done/) klar machen
2. Bei Callern 1–2 Upstream-Dateien öffnen oder @
3. Verlangen: „Nur X-bezogene Dateien ändern; zu ändernde Dateien zuerst listen“
4. Im IDE-Diff blockweise annehmen, nicht alles auf einmal

## Multi-Datei-Aufgaben

```text
Öffnen: Implementierung + Tests + Typdefinitionen
Auswahl: optional — am Einstiegsfunktion beginnen
Prompt: Modulgrenzen und verbotene Verzeichnisse nennen
```

Große Refactors besser über [Desktop-App-Arbeitsbäume](/guide/desktop-app/worktrees/) oder [Planungsmodus](/guide/agent-work/planning/). IDE eignet sich für Abschluss und kleine Commits.

## Häufige Fragen

### 1. Muss ich jedes Mal eine Auswahl setzen?

Nicht zwingend. Weißt du aber, dass der Fokus in einem kleinen Ausschnitt liegt, ist Auswahl meist stabiler als nur „ändere diese Funktion“.

### 2. Mehr Auswahl = sicherer?

Zu groß = Rahmen wieder lose; zu klein = nötiger Kontext fehlt. Praktisch: „gerade genug“.

### 3. Geöffnete Datei vs. `@`-Pfad?

Grobe Trennung:

- **Geöffnete Datei:** was du gerade ansiehst
- **@-Pfad:** du nennst eine Datei explizit als Pflicht

Auswahl und geöffnete Dateien dienen vor allem dazu, irrelevante Bereiche nicht mitzunehmen.

## Mit Überprüfung kombinieren

Vor dem Annehmen gegen [Diffs prüfen](/guide/quality/review-diffs/):

- Nur vereinbarte Dateien geändert?
- Unerwartete Löschungen außerhalb der Auswahl?
- Tests decken neue Zweige ab?

Produktseite: [Änderungen in der IDE prüfen](/guide/ide/reviewing-changes/)

## Häufige Fehler

| Fehler | Folge |
|---|---|
| Tausende Zeilen ganze Datei markieren | Kontextverschwendung, zu große Änderungsfläche |
| Keine Auswahl, nur „optimier mal“ | Modell erweitert den Rahmen selbst |
| Alle Vorschläge annehmen ohne Diff | Stil-Drift oder Sicherheitslücken |

## Quellen
- [Einschränkungen definieren](/prompts/constraints-and-boundaries/)
---

**Status:** verified  
**Anwendbare Produkte:** IDE  
**Prüfgrundlage:** Diese Seite beschreibt die stabilste Rahmenkontrolle in der IDE-Erweiterung: Kombination aus Auswahl, geöffneten Dateien und expliziten `@`-Pfaden — allgemeines Kontext-Organisieren beim Arbeiten mit Code, unabhängig von konkreten Buttonnamen.  
**Zuletzt geprüft:** 2026-07-26

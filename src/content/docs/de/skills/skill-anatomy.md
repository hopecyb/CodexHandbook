---
title: Skill-Aufbau
description: Rollen von SKILL.md, references/, templates/ und scripts/ mit Beispielen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beim ersten Blick auf ein Skill-Verzeichnis kennt man die Ordner oft, weiß aber nicht, warum sie so liegen.

Diese Seite zeigt, wie du Hauptablauf, lange Erklärungen, Vorlagen und Skripte trennst — statt alles in eine Datei zu stopfen.

Das erleichtert Lesen, Ändern und Wiederverwenden und verhindert Chaos.

# Skill-Aufbau

## Verzeichnisstruktur

```text
my-skill/
├── SKILL.md          # Pflicht
├── scripts/          # Optional: deterministische Schritte
├── references/       # Optional: lange Referenzdokumente
└── templates/        # Optional: Ausgabevorlagen
```

## Was jede Ebene tut

- `SKILL.md`: Hauptanleitung — was es ist, wann nutzen, welche Schritte
- `references/`: langer Materialschrank — nicht alles Hintergrundwissen in die Hauptdatei
- `templates/`: fertige Ausgabe-Skelette — kein Improvisieren jedes Mal
- `scripts/`: deterministische Schritte als Skript, nicht nur natürliche Sprache

Am Anfang reicht oft nur `SKILL.md`.  
Bei echter Komplexität `references/`, `templates/`, `scripts/` nachziehen.

## Minimales SKILL.md-Beispiel

```md
---
name: pr-review
description: "Prüft den Diff des aktuellen Branchs gegenüber main, markiert Risiken und Testlücken. Nutzen, wenn der Nutzer Review, PR-Prüfung oder Checks vor dem Merge verlangt."
---

## Schritte
1. Diff gegenüber main holen
2. Nach Dateien klassifizieren: Logikfehler, Sicherheit, Performance, Tests
3. Gestufte Liste ausgeben: Blocker / Empfehlung / Nit
4. Nicht automatisch pushen oder mergen
```

## Häufige Irrtümer

### 1. Alle Verzeichnisse von Anfang an anlegen

Viele gute Skills starten nur mit `SKILL.md` und wachsen mit der Wiederverwendung.

### 2. `references/` nur „mehr Inhalt“

Es geht nicht um Menge, sondern darum, lange Erklärungen erst bei Bedarf zu laden.

### 3. `scripts/` möglichst vermeiden

Wenn ein Schritt stabil, deterministisch und wiederholbar sein soll, ist ein Skript oft zuverlässiger als reine Prosa.

## Rollen der Verzeichnisse

| Verzeichnis | Zweck |
|---|---|
| `SKILL.md` | Hauptablauf, Auslösebedingungen, Verbote |
| `references/` | Lange Docs, Normen, API-Hinweise |
| `templates/` | Ausgabeformat, Report-Skelett |
| `scripts/` | Deterministische Befehle und Checks |

## Wann Verzeichnisse aufteilen

1. Ist der Hauptablauf schon zu lang zum ersten Lesen?
2. Gibt es große Materialblöcke, die nicht jedes Mal nötig sind?
3. Wiederholt sich ein festes Ausgabeformat?
4. Ist ein Schritt stabil genug für Skriptisierung?

Bei ein bis zwei „Ja“ kannst du aufteilen.

Zuerst mit `SKILL.md` durchziehen; bei Komplexität Material, Vorlagen und Skripte schrittweise auslagern.

Übung: [Ersten Skill erstellen](/skills/create-your-first-skill/).
## Von Vorlage zu Skill

Viele Teams beginnen nicht mit dem Entwurf eines Skills, sondern mit einem Prompt, den sie immer wieder kopieren. Er kann schrittweise reifen:

| Phase | Form | Aufwerten, wenn |
|---|---|---|
| Einmal-Prompt | Aktueller Chat | Nur einmal nötig |
| Vorlage | Prompt-Sammlung oder Teamdokument | Ähnliche Aufgaben wiederkehren, aber Schritte noch variieren |
| Einzeldatei-Skill | Ein `SKILL.md` | Ablauf stabil und Auslöser klar |
| Vollständiges Skill-Verzeichnis | `SKILL.md` + `templates/` + `references/` + `scripts/` | Ausgabeformat, Langreferenzen und deterministische Checks stabil sind |

Nicht jede Vorlage muss Skill werden. Sinnvoll ist es bei wiederholter Nutzung, klaren Erfolgskriterien und Teamkonsens.

## Häufige wiederverwendbare Skill-Komponenten

| Komponente | Geeignet für |
|---|---|
| Hauptanweisung | Auslöser, Schritte, Verbote, Done-Kriterien |
| Vorlagen | PR-Review-Ausgabe, Dokumentstruktur, Risikobericht |
| Referenzen | Codestandards, Glossar, Fachregeln, API-Notizen |
| Skripte | Komplexitätsanalyse, Linkprüfung, Coverage, Formatprüfung |

Ein guter Skill ist nicht nur ein längerer Prompt, sondern zerlegt wiederholbare Arbeit in lesbare, testbare und wartbare Teile.

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuelle Codex-Laufzeit nutzt weiterhin `SKILL.md` als Kern und erlaubt bei Bedarf Skripte und Referenzen; diese Seite fokussiert Verzeichnisrollen und bindet keine volatilen Produkteinstiege.  
**Zuletzt geprüft:** 2026-07-26

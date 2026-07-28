---
title: Skills-Überblick
description: Mit SKILL.md wiederverwendbare Workflows an Codex vermitteln — einmal schreiben, bei Bedarf aufrufen.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Ein **Skill** ist ein Verzeichnis mit `SKILL.md` (optional Skripte und Referenzen), das einen festen Ablauf zu einer Fähigkeit packt, die Codex **automatisch oder explizit** aufrufen kann.

Er eignet sich für Methoden, die schon wiederholt vorkamen und weiter wiederverwendet werden sollen.

## Kernkonzepte

### Unterschied zu Slash-Befehlen

| | Slash-Befehl | Skill |
|---|---|---|
| Auslöser | Du tippst `/xxx` | Du rufst `$name` auf, oder das Modell matched die Beschreibung |
| Kontext | Wird in der Regel sofort expandiert | **Progressive Disclosure**: sonst nur Name + Beschreibung, vollständiger Text erst bei Auswahl |
| Geeignet für | Feste, häufige Einstiege, die du dir merkst | Lange Abläufe mit Doku, bei denen das Modell selbst entscheiden soll, wann sie passen |

### Progressive Disclosure

Beim Start sieht Codex nur **name, description und Pfad** jedes Skills; die vollständige `SKILL.md` wird erst geladen, wenn der Skill genutzt wird. Deshalb kannst du ausführliche Checklisten schreiben, ohne den Kontext zu füllen.

Hinweis: Die Skill-Liste hat ein **initiales Zeichenbudget** (ein kleiner Teil des Kontexts). Schreib die zentralen Auslöseszenarien in der `description` **ganz nach vorne**, sonst scheitert das Matching nach dem Abschneiden.

## Skill-Verzeichnisstruktur

```text
my-skill/
├── SKILL.md          # Pflicht
├── scripts/          # Optional: deterministische Schritte
└── references/       # Optional: lange Referenzdokumente
```

Minimales `SKILL.md`-Beispiel:

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

## Speicherorte

| Typ | Typischer Ort | Hinweis |
|---|---|---|
| Projekt-Skill | `.agents/skills/<name>/` | Folgt dem Repo, Team-Sharing |
| Nutzer-Skill | Nutzer-Skills-Verzeichnis (siehe offizielle Doku) | Persönlich, projektübergreifend |
| Offizielle Auswahl | Über Installer | Pfad vom Installer verwaltet; nicht mit handgeschriebenen Verzeichnissen vermischen |

**Nicht** veraltete Tutorial-Pfade oder fiktive `trigger:`-Felder übernehmen; maßgeblich ist die [offizielle Skills-Dokumentation](https://developers.openai.com/codex/skills).

## Auslösearten

1. **Explizit**: In unterstützten Umgebungen mit `$skill-name` aufrufen (Name = Frontmatter-`name`)
2. **Implizit**: Das Modell entscheidet anhand der `description`-Semantik, ob die Aufgabe passt

Tipps für gute `description`-Texte:

- Klar machen, „wann nutzen“ und „wann nicht“
- Schlüsselwörter einbauen, die Nutzer sagen könnten (review, Release, changelog)
- Leere Phrasen wie „hilft dem Nutzer beim Codieren“ vermeiden

## Empfohlener Workflow

1. Merken, dass ein Ablauf schon mehrmals wiederholt wurde
2. `SKILL.md` entwerfen — zuerst reine Textschritte
3. An kleinen Aufgaben `$name` und implizites Matching testen
4. Bei Bedarf Determinismus mit `scripts/` ergänzen
5. Nach `.agents/skills/` committen und als PR ans Team geben

Übung: [Ersten Skill erstellen](/skills/create-your-first-skill/)

## Häufige Verwirrung

### 1. Worin unterscheiden sich Skill und Prompt?

- **Prompt**: Was du für diese Aufgabe gerade sagst
- **Skill**: Ein Ablauf, den ähnliche Aufgaben später wiederverwenden können

### 2. Muss ich Skills gleich am Anfang lernen?

Nein. Zuerst normale Aufgaben klar formulieren; erst wenn ein Ablauf oft wiederholt wird, als Skill absichern.

### 3. Sind Skills und Slash-Befehle dasselbe?

Nicht ganz. Slash-Befehle sind eher Kurz-Einstiege; Skills eher Arbeitspakete mit voller Anleitung und Ablauf.

Skills sind kein Muss zum Start — sie eignen sich, um wiederkehrende Abläufe zu ordnen.

## Sicherheitsgrenzen

- Skripte und MCP-Aufrufe in Skills erben die aktuelle Freigabe-Politik
- Keine Secrets im Skill hardcoden; Umgebungsvariablen oder MCP-Auth nutzen
- Teams sollten Drittanbieter-Skills wie Abhängigkeiten prüfen

## Häufige Fehler

- `description` zu lang oder zu vage → nie oder falsch ausgelöst
- Einen Skill mit zehn unzusammenhängenden Abläufen überladen
- Skripte statt klar beschreibbarer Schritte → schwer wartbar

## Quellen

- OpenAI Codex Skills-Dokumentation
- KimYx0207 CX-06; stormzhang `22-skills.md`

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE  
**Prüfgrundlage:** Die aktuellen Codex-Laufzeitregeln zum Laden von Skills (`SKILL.md`, vollständige Skill-Datei bei Bedarf) und die OpenAI-Help-Definition von Skills als wiederverwendbare Workflows in „Skills in ChatGPT“ stimmen überein; diese Seite fokussiert Konzepte und Verzeichnisorganisation und hängt nicht an volatiler UI.  
**Zuletzt geprüft:** 2026-07-26

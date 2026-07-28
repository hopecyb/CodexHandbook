---
title: Verzeichnis references/
description: Lange Referenzdokumente im Skill für Progressive Disclosure organisieren.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`references/` eignet sich für lange Materialien, die nicht jedes Mal sofort expandiert werden müssen — so bleibt der Hauptablauf kurz und klar.

Es geht nicht nur um „mehr Dateien“, sondern darum, Inhalte **nicht jedes Mal sofort zu lesen, an einem Schritt aber nützlich** separat zu halten und bei Bedarf zu öffnen.

# Verzeichnis references/

Wird der `SKILL.md`-Fließtext zu lang, gehören detaillierte Normen, API-Hinweise und Checklisten nach `references/` und werden in den Schritten bei Bedarf referenziert.

## Beispiel

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

In `SKILL.md`:

```md
Beim Prüfen des Code-Stils references/style-guide.md lesen und nach dessen Regeln prüfen.
```

## Was es leistet

- `SKILL.md` trägt den Hauptablauf
- `references/` trägt „bei Bedarf öffnen“

Oder:

- `SKILL.md` = Arbeitsanweisung
- `references/` = Materialschrank

So wird der Skill nicht von Hintergrundtext erdrückt; Details bleiben auffindbar.

## Wann `references/` lohnt

Wenn in `SKILL.md` auftritt:

- Lange Normen belegen jedes Mal Platz
- Mehrere Themen-Referenzen vermischt
- Hintergrund unterbricht den Hauptablauf beim ersten Lesen

Beim ersten Skill ist `references/` optional.  
Üblich: **zuerst durchziehen, bei Länge auslagern**.

## Häufige Missverständnisse

### 1. `references/` ist nicht nur „Inhalt etwas rauskopieren“

Der Nutzen: Hauptablauf kurz, klar, zuerst lauffähig halten.

### 2. Mehr Referenzen sind nicht immer besser

Alles in `references/` zu werfen verschiebt nur Chaos in viele Dateien.

### 3. Mit `references/` darf `SKILL.md` extrem knapp sein

Der Hauptablauf bleibt in `SKILL.md` — sonst weiß niemand beim ersten Lesen, was zu tun ist.

## Prinzipien

- Hauptablauf in `SKILL.md`, Referenzen bei Bedarf laden
- Eine Datei, ein Thema — wartbar
- In references keine bereits in SKILL.md stehenden Schritte wiederholen

## Wann in `references/`?

Antwortet der Inhalt auf „**nach welchen Regeln?**“ → eher `references/`.  
Antwortet er auf „**welcher Schritt zuerst?**“ → Hauptablauf.

`references/` verkürzt den Hauptablauf und öffnet Details bei Bedarf.
---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuelle Codex-Laufzeit liest Skill-Text und zugehörige Materialien bei Bedarf; die Beschreibung von `references/` ist ein stabiles Organisationsprinzip.  
**Zuletzt geprüft:** 2026-07-26

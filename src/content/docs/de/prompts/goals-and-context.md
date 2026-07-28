---
title: Ziele und Kontext liefern
description: Codex wissen lassen, was fertig werden soll und warum es zählt.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Viele Prompts wirken informativ, lassen aber genau diese zwei Punkte unklar:

- Welches Ergebnis willst du wirklich?
- Warum soll es so gemacht werden?

Das Ziel sagt „was soll entstehen“, der Hintergrund „warum so“.

**Ziel** beschreibt das End-Artefakt, keine vagen Wünsche.  
„Website besser machen“ → „Homepage-Hauptbutton-Text ändern zu … und bestehende CSS-Klassen behalten“.

**Hintergrund** ergänzt Stand, den Leser nicht kennen, den der Agent aber braucht: Tech-Stack, Zielgruppe, Deadline-Grund, bekannte Fallen.

## Warum Ziel und Hintergrund nicht vermischen

Nur Hintergrund ohne Ziel: Codex liest eine Lagebeschreibung und weiß nicht, was es liefern soll.  
Nur Ziel ohne Hintergrund: Es wählt oft „technisch möglich“, aber nicht passend zu deinem Szenario.

## Häufige Missverständnisse

### 1. Ziel = „ich möchte etwas verbessern“

Das ist Wunsch, kein Ziel.

Ein klareres Ziel nennt meist:

- was geändert wird
- in welchen Zustand
- was unverändert bleiben muss

### 2. Mehr Hintergrund ist immer besser

Wertvoll ist, was **du weißt, Codex aber nicht** — und was Entscheidungen beeinflusst.

### 3. Nur technischer Kontext zählt als Hintergrund

Nicht nur Technik.

Auch relevant:

- wer die Leser sind
- warum die Deadline
- bekannte Fallen
- Team-Constraints

## Eine brauchbare Formulierung

Für eine erste brauchbare Version:

```text
Ziel: Was soll wie geändert werden
Hintergrund: Warum, für wen, wo es gerade hakt
```

Zum Beispiel:

```text
Ziel: Docs-Homepage-First-Screen für Einsteiger verständlicher, Struktur behalten
Hintergrund: Aktueller Text setzt viele Fachbegriffe voraus; Einstiegsschwelle beim Erstbesuch ist hoch
```

## Wie du prüfst, ob es klar genug ist

Beim Ziel zwei Fragen:

- Ist das Ergebnis erkennbar?
- Ist der Scope spürbar?

Beim Hintergrund eine Frage:

- Beeinflusst diese Info wirklich, wie es vorgeht?

Das Ziel bestimmt die Lieferung; der Hintergrund ergänzt das Warum.

Verwandt: Projektweiten Kontext in [Projektkontext](/guide/context/project-context/) ablegen, statt lange Wiederholungen in jedem Prompt.


---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite erklärt nur Ziel- und Hintergrund-Formulierung; interne Links und Beispiele wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26

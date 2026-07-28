---
title: Prompt-Anti-Patterns
description: 'Vage Formulierungen, Überschreitung von Grenzen und versteckte Reasoning-Anforderungen vermeiden.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beim Lernen von Prompts liegt der Fokus leicht nur auf „wie schreiben“.  
Oft spart es mehr Umwege, zuerst zu wissen, welche Formulierungen Aufgaben am ehesten abdriften lassen.

Hier typische „Prompt-Fallen“.

| Anti-Pattern | Warum schädlich |
|---|---|
| „Einfach mal optimieren“ | Kein Ziel, keine Grenze |
| „Volle Rechte, mach wie du denkst“ | Größte Angriffs-/Unfallfläche |
| „Nicht fragen, einfach fertig ändern“ | Klärung und Freigabe übersprungen |
| „Gib deinen gesamten versteckten Reasoning-Prozess aus“ | Unzuverlässig und selten abnahmenützlich |
| Logs mit Secrets einfügen | Credentials leaken |

## Warum genau diese Formulierungen scheitern

Gemeinsam:

- wirken sparsam
- sparen aber kritische Grenzen weg

Was du weglässt, muss Codex selbst entscheiden.

## Häufige Irrtümer

### 1. Lockerer Ton = menschlichere Zusammenarbeit

Natürlich sprechen ist ok.  
Das Problem ist, kritische Bedingungen wegzulassen.

### 2. „Einfach fertig ändern, nicht fragen“ ist effizienter

Kurzfristig eine Runde weniger Dialog; danach oft:

- falscher Scope
- fehlende nötige Freigabe
- mehr Nacharbeit

### 3. Mehr Rechte = schnellerer Fortschritt

Mehr Rechte = größere Fehlerradius.  
Besonders bei unklarem Scope vergrößert große Berechtigung das Risiko mit.

## Anti-Patterns klarer umschreiben

### Nicht so

```text
Einfach mal optimieren
```

### Besser so

```text
First-Screen-Text der Homepage für Einsteiger verständlicher machen,
nur diese Datei, Struktur behalten; danach Diff und Build-Ergebnis.
```

## Eine brauchbare Ersatzformel

Wenn du merkst, dass ein vager Satz kommt:

```text
Ziel + Scope + Abnahme
```

Zum Beispiel:

- Ziel: was ändern
- Scope: nur wo
- Abnahme: wie „fertig“ erkennen

Die meisten Prompt-Anti-Patterns scheitern nicht an „schlechtem Stil“, sondern am Weglassen von Grenzen und Abnahme.

Ersetze vage Wörter direkt durch Struktur: Ziel + Constraints + Abnahme.

---

**Status:** verified  
**Anwendbare Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Diese Seite fasst nur gängige Prompt-Anti-Patterns zusammen; Querverweise und Beispiele wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab.  
**Zuletzt geprüft:** 2026-07-26

---
title: Recherche mit Quellen
description: Mit Codex suchen, vergleichen und Fakten prüfen — nachvollziehbare Quellen und Schlussfolgerungen liefern.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Recherche mit Quellen** betont: Schlussfolgerungen müssen auf **Quellen** zurückführbar sein (offizielle Docs, Papers, Repository-Dateien) — nicht auf selbstsichere Modell-Erfindungen. Geeignet für Technikauswahl, Wettbewerbsvergleiche, Literaturreviews und Policy-Interpretation.

## Welches Problem löst diese Seite

- Wann [Websuche](/guide/tools/web-search/) vs. nur lesendes Repository
- Wie Zitationsformat und Unsicherheitskennzeichnung verlangt werden
- Anschluss an [Quellen validieren](/guide/quality/validate-sources/)

## Minimal brauchbares Vorgehen

```text
Untersuche «Eignung von Rust vs. Go für die Szenarien dieses Repositories»:
1. Zuerst Bewertungsdimensionen auflisten (Performance, Ökosystem, Teamvertrautheit)
2. Jede Schlussfolgerung mit Quell-URL oder @Pfad zu einer Datei im Repository versehen
3. Nicht Überprüfbares als «zu bestätigen» markieren
4. Am Ende Empfehlung und offene Fragen geben
Keinen Code ändern.
```

## Empfohlener Workflow

```text
Problem und Ausschlüsse definieren
    → Quellen sammeln (Suche / Docs lesen / MCP)
    → Vergleichstabelle + Vor-/Nachteile
    → Konfidenz und widersprüchliche Quellen kennzeichnen
    → Manuell entscheiden oder in die Spezifikationsphase gehen
```

Lange Rechercheaufgaben in mehrere Runden teilen; siehe [Lange Aufgaben verwalten](/prompts/long-running-tasks/).

## Häufige Fehler

- Keine URL verlangen → Ergebnis nicht nachprüfbar
- Veraltete Blogposts und offizielle Docs vermischen, ohne das zu kennzeichnen
- Rechercheergebnisse direkt als Implementierungsanweisung nutzen und die Spezifikation überspringen
- Dateien mit vertraulichen Daten an nicht freigegebene externe Tools hochladen

## Sicherheitsgrenzen

- Interne, unveröffentlichte Materialien dürfen nicht über unkontrolliertes MCP nach außen gehen
- Schnell wechselnde Fakten wie Preise, Versionen oder regionale Verfügbarkeit müssen mit [Prüfdatum](/guide/start-here/handbook-version-policy/) gekennzeichnet werden

## Abnahme-Checkliste

- [ ] Jede Schlussfolgerung hat mindestens eine klickbare oder nachvollziehbare Quelle
- [ ] Widersprüchliche Informationen sind nebeneinander dargestellt
- [ ] «Unklare» Punkte sind aufgelistet und nicht als Fakten getarnt
- [ ] Sensible Daten erscheinen weder im Prompt noch in Logs

## Verwandte Kapitel

- [Mit Unsicherheit umgehen](/guide/quality/handle-uncertainty/)
- [Fall: Docs refactoren und prüfen](/cases/use-cases/content-creation/refactor-docs-with-review/)

## Referenzquellen

- CodexGuide-Methoden zu Recherche und Zitation
- stormzhang-Kapitel zu Suche und Überprüfung

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Die aktuellen Codex-Use-Cases bei OpenAI Developers enthalten weiterhin „Learn a new concept“ und betonen, dichtes Material in überprüfbare Lern- oder Rechercheergebnisse zu verwandeln. Diese Seite verlangt zusätzlich, dass jede Schlussfolgerung eine URL oder einen Repository-Dateipfad trägt und zu bestätigende Punkte explizit markiert sind — im Einklang mit aktuellen Best Practices für Recherche mit Quellen.  
**Zuletzt geprüft:** 2026-07-26

---
title: Spezifikationsgetriebene Arbeit
description: Zuerst eine abnahmefähige Spezifikation schreiben, dann Codex nach Plan umsetzen lassen — geeignet für klar umrissene Lieferaufgaben.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Spezifikationsgetrieben** heißt: Vor vielen Dateiänderungen eine kurze Spezifikation anlegen — Ziel, Umfang, Schnittstellen und Akzeptanzkriterien. Kann nach [Brainstorming](/cases/workflows/brainstorm-before-building/) folgen oder bei bereits geklärten Anforderungen direkt in [EPXV](/cases/workflows/explore-plan-execute-verify/) einsteigen.

## Schwerpunkte dieser Seite

- Wie detailliert die Spezifikation sein muss
- Wie Codex an der Spezifikation bleibt und den Scope nicht eigenmächtig erweitert
- Verhältnis von Spezifikation zu PR-Beschreibung und Issue

## Minimal brauchbare Spezifikationsvorlage

```markdown
## Ziel
Ein Satz Nutzerwert

## Umfang
- Enthalten: …
- Nicht enthalten: …

## Schnittstelle/Verhalten
- Eingabe / Ausgabe / Fehlerfälle

## Akzeptanzkriterien
- [ ] Automatisch überprüfbare Punkte
- [ ] Manuell zu prüfende Punkte

## Constraints
- Unveränderliche Module, Performance, Kompatibilität
```

Vorlage in `docs/specs/` oder im Issue-Body ablegen und in der Aufgabe mit `@` referenzieren.

## Empfohlener Workflow

```text
① Spezifikation entwerfen (Codex kann helfen, Mensch prüft)
② Spezifikation bestätigen → mit «nach Spezifikation ausführen» antworten
③ Schrittweise ausführen, jeden Schritt an Akzeptanzpunkten messen
④ Spezifikationsänderungen müssen Versionsnummer oder Changelog explizit aktualisieren
```

Beispiel-Prompt:

```text
Lies @docs/specs/export-csv.md. Zuerst Implementierungsplan und Risiken gegen die Spezifikation auflisten;
Funktionen, die nicht in der Spezifikation stehen, nicht hinzufügen. Nach meiner Bestätigung Code schreiben.
```

## Zusammenspiel mit testgetriebener Arbeit

Akzeptanzpunkte in der Spezifikation möglichst **testbar** halten; was sich als Test schreiben lässt, zuerst als Test — siehe [Testgetriebene Arbeit](/cases/workflows/test-driven-work/).

## Häufige Fehler

- Spezifikation so lang wie ein Design-Doc → zentrale Constraints gehen unter
- Scope wächst während der Ausführung still, Spezifikation bleibt unverändert
- Vage Akzeptanz («besser nutzbar») führt zu Debatten
- Spezifikation widerspricht Architekturregeln in `AGENTS.md`

## Sicherheitsgrenzen

- Nur was die Spezifikation als «externe API erlaubt» ausweist, darf netzbezogene Implementierung autorisieren
- Umgang mit PII-Feldern muss in der Spezifikation gekennzeichnet sein

## Abnahme-Checkliste

- [ ] Out-of-Scope-Punkte klar ausgeschlossen
- [ ] Mindestens 3 prüfbare Akzeptanzkriterien
- [ ] Vor der Ausführung menschliche oder schriftliche Bestätigung
- [ ] Änderungen zurück in die Spezifikationsdatei synchronisiert

---

**Status:** verified  
**Geeignete Produkte:** App / CLI / IDE / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen die bereits geprüften Kapitel zu Brainstorming, EPXV, testgetriebener Arbeit und `AGENTS.md`. Der Inhalt beschränkt sich auf die stabile Arbeitsweise „zuerst abnahmefähige Spezifikation, dann nach Spezifikation ausführen“.  
**Zuletzt geprüft:** 2026-07-26

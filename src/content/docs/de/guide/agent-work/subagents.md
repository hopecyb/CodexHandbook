---
title: Subagents
description: "Teilaufgaben an isolierten Kontext — wann splitten, wie übergeben, wie abnehmen."
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Ein **Subagent** ist eine vom Haupt-Agent für ein Teilproblem gestartete **unabhängige Arbeitseinheit** mit relativ isoliertem Kontext; Ergebnisse fließen in den Hauptthread zurück.

Stellen Sie sich vor: eine klare Kleinaufgabe an einen Assistenten, der nur darauf schaut. Wert nicht „cooler“, sondern „sauberer, fokussierter, leichter parallel“.

## Ein Kernkonzept

| Haupt-Agent | Subagent |
|---|---|
| Globales Ziel und Nutzerdialog | Ein Teilproblem |
| Kontext mit voller Historie | Sauberer Kontext, gut zum Vertiefen |
| Koordination und Merge | Exploration, Recherche, Spezialumsetzung |

Unterschied zu [parallelen Agents](/guide/desktop-app/parallel-agents/): Subagents sind meist **vom Haupt-Agent delegierte** Einheiten, nicht manuell viele Fenster (Produktimplementierung kann überlappen — aktuelle UI gilt).

## Wann splitten lohnt

Nicht bei jeder großen Aufgabe — wenn:

- Ein Teilproblem allein tiefes Graben braucht
- Teil und Hauptlinie andere Arbeitstypen sind
- Sie zuerst eine unabhängige Schlussfolgerung wollen

Dann oft stabiler als Hauptthread gleichzeitig Global und Detail.

## Geeignete Szenarien

| Geeignet | Nicht geeignet |
|---|---|
| Im großen Repo gezielt „wie prüft Auth Tokens“ suchen | Ständiges Hin und Her mit dem Nutzer zur Klärung |
| Zwei Tech-Optionen parallel recherchieren | Teilaufgaben mit mutualexklusiven Edits derselben Datei |
| Lange Nur-Lese-Analyse ohne Hauptkontext-Verschmutzung | „Mal schauen“ ohne klares Lieferobjekt |

## Wiederverwendbare Subagent-Rollen

Aus Einmal-Delegationen sollten vor allem Rollen mit klaren Grenzen und stabilem Ausgabeformat entstehen.

| Rolle | Starke Ausgabe | Empfohlene Grenze |
|---|---|---|
| Code-Reviewer | Probleme nach Schwere, Datei, fehlende Tests | Standardmäßig nur lesen; nicht reparieren, außer angefragt |
| Test Engineer | Abdeckungslücken, Testfälle, Befehle | Ein Paket oder Workflow pro Auftrag |
| Dokumentationsautor | API-Text, Migration, Nutzeranleitung | An Code und bestehenden Stil binden |
| Debugger | Repro, vermutete Ursache, Verifikationsplan | Schlussfolgerung aus Logs, Tests oder Codepfad |
| Security Reviewer | Bedrohungen, Rechtepfade, Secret-Risiken | Nur lesen, Umfang klar halten |
| Performance-Analyst | Engpasshypothese, Messplan, risikoarme Vorschläge | Messung oder reproduzierbares Experiment verlangen |

Bei Implementierungsaufgaben sollte der Subagent zuerst einen Patchplan liefern. Das Zusammenführen und die Endprüfung bleiben im Hauptthread.

## Häufige Missverständnisse

### 1. Mehr Subagents ≠ besser

Kosten:

- Mehr Rückgaben lesen
- Schlussfolgerungen können kollidieren
- Koordination teurer als Nutzen

### 2. Komplex = sofort Subagent?

Nicht immer.  
Bei starker Kopplung und häufigem Nachfragen oft direkter Hauptthread sparsamer.

### 3. Subagent darf nebenbei alles ändern?

Möglich je Delegation; stabiler Default:

- Zuerst Nur-Lese-Analyse, Vergleich, Lokalisation
- Hauptthread entscheidet nach Review über Änderungen

## Empfohlener Workflow

### 1. Haupt-Agent schreibt Teilaufgaben-Vertrag

```text
Teilaufgabe: Nur-Lese-Analyse der Session-Refresh-Logik in packages/auth.
Lieferung: Zusammenfassung ≤1 Seite + kritische Dateipfade + Risiken.
Verboten: Dateien ändern, kein Push.
```

Wichtig nicht Format, sondern vier Klarheiten:

- Wofür allein zuständig
- Wie Output aussehen soll
- Welche Aktionen verboten
- Wer nach Rückkehr entscheidet

### 2. Subagent liefert strukturiert

Erwartetes Format:

```text
## Schlussfolgerung
## Belege (Datei:Zeile)
## Empfohlener nächster Schritt
## Offene Punkte
```

### 3. Haupt-Agent merged und entscheidet

Hauptthread (oder Sie) wählt den Pfad, dann Ausführungsphase von [Explore—Plan—Execute—Verify](/cases/workflows/explore-plan-execute-verify/).

### 4. Abnahme

- Output unabhängig prüfbar (Dateien öffnen)
- Keine Überschreitung der Schreibberechtigung
- Konflikte zwischen Subagents markiert

## Entscheidungsbedingungen

Erfüllt eine Teilaufgabe 2 von 3:

1. Unabhängig beschreibbar
2. Klares Lieferobjekt
3. Braucht nicht ständig denselben Detailkontext mit dem Hauptthread

→ Split erwägen.

## Mit Skill und MCP

- **Skill**: Standard-Lieferformat der Teilaufgabe (z. B. Security-Review-Checkliste)
- **MCP**: Subagent nur-lesend externe Tickets; Haupt-Agent entscheidet

## Häufige Fehler

- Subagent-Umfang zu groß → zweiter Haupt-Agent
- Keine strukturierte Rückgabe → Hauptthread liest lange Logs neu
- Mehrere Subagents ändern dasselbe Verzeichnis

Subagents passen zu „klare Grenze, klare Lieferung, unabhängig machbar“ — nicht zum Klonen der ganzen Hauptaufgabe.

## Weiterlesen

- [Multi-Agent-Kollaboration](/cases/workflows/multi-agent-coordination/)
- [Übergabe und Fortsetzen](/guide/agent-work/handoff-and-resume/)

---

**Status:** verified  
**Gilt für:** App / CLI / Cloud  
**Prüfgrundlage:** Kreuzgeprüft gegen aktuelle OpenAI-Developers-Hinweise zu Multi-Agent, Langzeitaufgaben und parallelen Workflows; bestätigt „Teilaufgabe unabhängig, Grenze klar, Lieferung klar“; UI/Scheduler als „aktuelles Produkt gilt“, nicht vertraglich.  
**Zuletzt geprüft:** 2026-07-26

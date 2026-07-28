---
title: Parallele Agenten
description: Mehrere Agent-Aufgaben gleichzeitig vorantreiben, ohne Merge-Konflikte und Prüfchaos.
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Parallele Agenten eignen sich, um **ohnehin unabhängig vorantreibbare Arbeit** aufzuteilen; der Haupt-Thread koordiniert, nimmt ab und entscheidet übers Zusammenführen.

Stimmt die Aufteilung, verkürzt Parallelität die Wartezeit deutlich; stimmt sie nicht, entstehen Konflikte nur schneller.

## Häufige Missverständnisse

Viele denken beim ersten „parallelen Agenten“ vor allem an „schneller“. Das ist nicht falsch, aber unvollständig.

Voraussetzung: **Die Aufgaben können unabhängig bestehen.** Hängen sie voneinander ab und werden nur künstlich getrennt, macht Parallelität dich langsamer — weil du danach Voraussetzungen angleichen, Ergebnisse einsammeln und Konflikte lösen musst.

## Wann Parallelität passt

| Geeignet | Ungeeignet |
|---|---|
| Zwei unabhängige Rechercheaufgaben gleichzeitig | Mehrere Agenten ändern dieselbe Kerndatei |
| Parallel: nur-lesen-Analyse und Dokumententwurf | Anforderungen ändern sich häufig und brauchen dauernd Klärung |
| Frontend-Seite und Backend-API mit klarer Grenze | Ein Problem hängt stark vom Ergebnis eines anderen ab |

Übliche Kriterien:

- **Klarer Liefergegenstand** → erst dann parallel
- **Grenzen vorher vereinbart** → erst dann parallel
- **Unabhängig prüfbar** → erst dann parallel

## Was der Haupt-Agent macht

Im Parallelmodus muss der Haupt-Agent nicht alle Teilaufgaben selbst ausführen. Er fokussiert drei Dinge:

1. Ziel und Verbotszonen jeder Teilaufgabe klären
2. Nachverfolgen, ob Ergebnisse überprüfbar sind
3. Bei widersprüchlichen Ergebnissen die finale Abwägung treffen

Der Haupt-Agent ist eher ein kleiner technischer Lead: Koordination und Entscheidungen, nicht jedes Teil selbst erledigen.

## Empfohlene Aufteilung

### „Probleme“ teilen, nicht „Arbeitsschritte“

Bessere Aufteilung:

- Agent A: Prüfen, ob Login-Fehler durch Token-Refresh verursacht werden
- Agent B: Die letzten beiden Auth-bezogenen Änderungen prüfen

Schlechtere Aufteilung:

- Agent A: Hälfte der Logs lesen
- Agent B: andere Hälfte der Logs lesen

Erstere haben jeweils ein vollständiges Ziel; letztere sind nur mechanische Scheiben mit hohem Rückholaufwand.

### Diese Typen zuerst aufteilen

- **Nur-lesen-Analyse:** Code, Logs, Docs lesen, Risiken listen
- **Variantenvergleich:** A/B-Implementierung, Bibliothekswahl, Berechtigungskonzepte
- **Grenzklare Artefakte:** unabhängige Seite, unabhängiges Dokument, unabhängiges Modul

## Ein Delegations-Template

Hinweise an parallele Agenten sollten möglichst diese vier Punkte enthalten:

```text
Aufgabe: Nur die Gutscheinberechnung im Checkout-Flow analysieren, keinen Code ändern.
Lieferung: 200-Wörter-Kurzfassung + Schlüsseldateipfade + Risiken + empfohlener nächster Schritt.
Grenze: Keine Verzeichnisse außerhalb des Zahlungsmoduls durchsuchen; keine Schreibbefehle ausführen.
Abnahme: Schlussfolgerungen müssen auf Datei- oder Log-Belege zurückführbar sein.
```

Das wirkt besser als „schau dir das Problem mal an“.

## Drei häufige Parallelmuster

### 1. Doppelte Recherche

Geeignet, wenn du noch unsicher bist, welche Route stimmt.

- Agent A recherchiert die bestehende Implementierung
- Agent B recherchiert Alternativen
- Der Haupt-Thread vergleicht Kosten, Risiko und Kompatibilität

### 2. Schichtweise Vorantreiben

Geeignet, wenn Systemgrenzen klar sind.

- Agent A bearbeitet Dokument- oder Prompt-Schicht
- Agent B bearbeitet Code- oder Konfigurationsschicht
- Der Haupt-Thread prüft Konsistenz

### 3. Entwurf + Review

Geeignet, wenn zuerst eine Version entstehen und schnell geprüft werden soll.

- Agent A liefert den Entwurf
- Agent B macht nur Review, ohne zu ändern
- Der Haupt-Thread entscheidet über Übernahme

Gut geeignet für Dokumentkomplettierung, PR-Überprüfung und Fallsammlung.

## Konfliktmanagement

Der häufigste Engpass bei Parallelität ist oft das Zusammenführen.

### Diese Grenzen vorher vereinbaren

- Welche Verzeichnisse welcher Agent verantwortet
- Ob gemeinsame Konfigurationsdateien geändert werden dürfen
- Wer das finale Commit-Recht hat

### In diesen Fällen zurück zu seriell

- Beide Teilaufgaben müssen denselben Geschäftsprozess ändern
- Das Ergebnis eines Agenten kippt dauernd die Voraussetzungen des anderen
- Du verbringst mehr Zeit damit, Kontext zu erklären, als Aufgaben voranzutreiben

Übersteigt der Koordinationsaufwand die gesparte Zeit, lohnt Parallelität nicht mehr.

## Überprüfung und Abnahme

Jeder parallele Agent-Output sollte mindestens eines erfüllen:

- Zurückführbar auf konkrete Datei, Log, Link oder Diff
- Klar sagen, „was nicht getan wurde“
- Dem Haupt-Thread sagen, wie der nächste Überprüfungsschritt aussieht

Kommt nur „ich glaube, hier könnte ein Problem sein“, ist die Übergabe für den Haupt-Thread praktisch wertlos.

## Häufige Fehler

- Blind parallelisieren, sobald es viele Aufgaben gibt, statt Abhängigkeiten zu prüfen
- Mehrere Agenten ändern dasselbe Verzeichnis ohne Eigentumsvereinbarung
- Der Haupt-Thread prüft nicht und klebt Teilergebnisse zum Endantwort zusammen
- Parallelität als „weniger Denken“ nutzen — dann wächst nur das Chaos

Voraussetzung für parallele Agenten bleibt: Aufgaben sind unabhängig und einzeln prüfbar, dann getrennt vorantreiben.

## Empfohlene Lesereihenfolge

1. [Subagents](/guide/agent-work/subagents/)
2. [Fortschritt und Steuerung](/guide/agent-work/progress-and-steering/)
3. [Übergabe und Fortsetzen](/guide/agent-work/handoff-and-resume/)
4. [Multi-Agent-Koordinations-Workflow](/cases/workflows/multi-agent-coordination/)

## Quellen

- OpenAI-Codex-Dokumentation zu Multi-Task / Aufgabenkollaboration
- Aufgabenkollaborations-Ideen im Codex-Verzeichnis von KimYx0207
- stormzhang `21-subagents.md`
- [codex.bozhouai.com](https://codex.bozhouai.com/)

---

**Status:** outdated  
**Anwendbare Produkte:** App  
**Prüfhinweis:** Die Methodik paralleler Agenten bleibt nützlich, aber diese Seite stellt sie als direkt nutzbare Desktop-App-Funktion dar, ohne ausreichend starke aktuelle offizielle Desktop-Dokumentation zu UI, Einstiegen und konkreten Kollaborationsformen; deshalb vorerst `outdated`.  
**Zuletzt geprüft:** 2026-07-26

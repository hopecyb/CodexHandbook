---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Diese Seite erklärt nur die Nutzung von Vorlagen; interne Links und Vorlagenkategorien wurden geprüft, der Text hängt nicht von volatilen Fakten wie Produktversion, Preis oder UI ab."
  checkedAt: "2026-07-26"
title: Prompt-Vorlagen
description: 'Wiederverwendbare Prompt-Gerüste nach Aufgabentyp — Verstehen, Erstellen, Ändern, Diagnostizieren, Review, Recherchieren, Automatisieren.'
locale: de
source_locale: zh-CN
source_revision: fae2ed3
translation_status: draft
translated_at: 2026-09-20
---


Bei „Vorlage“ gibt es oft zwei Reaktionen:

- zu starr, will man nicht nutzen
- 1:1 kopieren, ohne zu wissen, was ersetzt werden muss

Vorlagen helfen vor allem, kritische Abschnitte nicht zu vergessen — sie denken nicht für dich.

Ziel der Vorlagenseiten: Aufgabenstruktur halten, nicht die einzig richtige Antwort erzeugen.

## So nutzt du Vorlagen

1. Typ wählen, der der Aufgabe am nächsten kommt
2. Platzhalter `【】` durch deine echte Aufgabe ersetzen
3. Irrelevante Abschnitte streichen
4. Aufgabenspezifische Constraints und Abnahme ergänzen

Vorlagen sind Gerüst, keine Musterlösung.

| Vorlage | Wann |
|---|---|
| [Verstehen](/de/prompts/templates/understand/) | Codebase, Docs oder Material lesen — zuerst Orientierung |
| [Erstellen](/de/prompts/templates/create/) | Feature, Text oder Artefakt von null |
| [Ändern](/de/prompts/templates/change/) | Iterative Änderungen auf Bestehendem |
| [Diagnostizieren](/de/prompts/templates/diagnose/) | Ursache finden, noch keinen Code ändern |
| [Review](/de/prompts/templates/review/) | Diff, PR oder Doc-Änderungen prüfen |
| [Recherchieren](/de/prompts/templates/research/) | Recherche und Vergleich mit Quellen |
| [Automatisieren](/de/prompts/templates/automate/) | Wiederholaufgaben, Skripte, unbeaufsichtigte Flows |

## Von Vorlage zu Workflow

Manche Prompts werden nur einmal gebraucht. Andere wiederholen sich so oft, dass sie stabilisiert werden sollten.

| Wiederkehrende Aufgabe | Zuerst als | Stabil später als |
|---|---|---|
| PR-Vorbereitung | Review-/Änderungsvorlage | Skill mit fester Checkliste |
| API-Dokumentation erzeugen | Erstell-/Änderungsvorlage | Skill + Dokumentationsskript |
| Testabdeckung erweitern | Änderungsvorlage | Skill + vereinbarte Testbefehle |
| Performance untersuchen | Diagnosevorlage | Subagent oder Spezial-Skill |
| Nach jedem Schreiben Format prüfen | Nicht nur Vorlage | Hook |
| Vor Codeänderung externe Tickets lesen | Recherchevorlage | MCP + Skill |

Vorlagen passen zu manuell gestarteten Aufgaben; Skills zu wiederholten Abläufen; Hooks zu automatischen Prüfungen an festen Punkten; MCP zu externen Systemen.

## Schnelle Entscheidung: In welche Form gehört diese Aufgabe?

Stelle dir vier Fragen:

1. Wird die Aufgabe nur einmal erledigt?
2. Sind die Schritte beim nächsten Mal im Wesentlichen gleich?
3. Gibt es ein festes Ausgabeformat oder eine Prüfliste?
4. Braucht sie ein externes System, Skript oder automatische Kontrolle?

| Situation | Empfohlene Form |
|---|---|
| Einmalige Arbeit, die noch besprochen werden muss | Vollständiger Prompt |
| Wiederkehrende Arbeit, die noch angepasst wird | Vorlage |
| Stabiler Ablauf mit festem Ausgabeformat | Skill |
| Eine unabhängige Rolle soll tief recherchieren | Sub-Agent |
| Daten aus externem System nötig | MCP, möglichst zuerst nur lesend |
| An einem Punkt ist jedes Mal eine Prüfung nötig | Hook |
| Einheitliches Paket für das Team | Plugin |

Ein längerer Prompt ist nicht automatisch besser. Wiederverwendbar sind Aufgaben, die du mehrfach geprüft hast und deren Grenzen und Abnahmekriterien klar sind.

## Häufige Irrtümer

### 1. Vorlage = 1:1 kopieren

Ohne Platzhalter-Ersatz und ohne Streichen irrelevanter Abschnitte wird die Aufgabe leer.

### 2. Vorlage allein macht den Prompt „professionell“

Die Vorlage hält Struktur — entscheidet aber nicht:

- echtes Ziel
- wo Constraints liegen
- wie Abnahme geschrieben wird

### 3. Je vollständiger die Vorlage, desto besser

Für Einsteiger: „ausreichend, nicht aufgebläht“.

Zuerst den richtigen Typ wählen, dann zur eigenen Aufgabe machen — die Vorlage selbst ist nicht die Aufgabe.

Schreibprinzipien: [Prompt-Grundlagen](/de/prompts/basics/) und [Aufgabenstruktur](/de/prompts/task-anatomy/).

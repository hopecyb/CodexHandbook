---
title: "Function Calling (Funktionsaufrufe)"
description: "Das Modell kann einen Funktionsnamen und strukturierte Argumente für einen vorgeschlagenen Aufruf ausgeben. Die Anwendung prüft sie und entscheidet über die Ausführung. Argumente erzeugen, eine Berechtigung erhalten und ausführen sind drei getrennte Schritte."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Die unten genannten Ereignis- und Projektangaben wurden anhand der Primärquelle geprüft. Die Lernempfehlungen sind eine Einschätzung des Autors und kein praktischer Produkttest."
  evidence:
    - label: "Ankündigung zur Einführung von Function Calling"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: de
source_locale: zh-CN
source_revision: c362c48
translation_status: draft
translated_at: 2026-09-20
---

## Überprüfbares Ereignis und Geltungsbereich

**Datum: 13.06.2023 · Art: Produktveröffentlichung.** OpenAI kündigte Function Calling für die damalige Chat Completions API an. Dieses Datum bezeichnet die API-Veröffentlichung eines bestimmten Anbieters, nicht den Ursprung aller Tool-Aufrufe.

Quelle: [Ankündigung zur Einführung von Function Calling](https://openai.com/index/function-calling-and-other-api-updates/). Überprüft am 18.09.2026; das Veröffentlichungsdatum der Quelle und das Prüfdatum dieser Seite haben unterschiedliche Bedeutungen.

## Welches Problem wird gelöst?

Das Modell kann einen Funktionsnamen und strukturierte Argumente für einen vorgeschlagenen Aufruf ausgeben. Die Anwendung prüft sie und entscheidet über die Ausführung. Argumente erzeugen, eine Berechtigung erhalten und ausführen sind drei getrennte Schritte.

## Lernempfehlungen und Grenzen

Das Folgende ist eine didaktische Einschätzung dieser Website, keine Messung der Verbreitung oder Wirksamkeit in der Branche:

Entwerfen Sie vorrangig überprüfbare Eingaben, klare Berechtigungsbereiche und Fehlerantworten. Gültiges JSON bedeutet weder, dass Argumente inhaltlich richtig sind, noch, dass ein Schreibzugriff auf externe Systeme erlaubt ist. Modellnamen und API-Beispiele aus der historischen Ankündigung sind keine aktuelle Konfigurationsanleitung.

## Praktische Übung

[Trockenlauf für Vorschläge zur Issue-Triage](/de/cases/use-cases/team-automation/issue-triage-suggestions/): Prüfen Sie, ob strukturierte Vorschläge für synthetische Issues an ihre Eingaben gebunden sind, und behalten Sie eine Warteschlange für die menschliche Prüfung bei. Die Übung testet Datengrenzen, ohne die historische API oder Versionsbezeichnung aufzurufen.

[Zurück zur Roadmap und den Datumsregeln](/de/ai-roadmap/)

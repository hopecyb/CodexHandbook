---
title: KI-Anwendungsroadmap
description: Prompt Engineering, RAG, MCP, Multi-agent, Context Engineering, Skills und weitere Meilensteine der KI-Anwendungsentwicklung verstehen.
locale: de
source_locale: zh-CN
translation_status: draft
translated_at: 2026-08-08
---

# KI-Anwendungsroadmap

Diese Wissenskarte richtet sich an die KI-Anwendungsentwicklung. Sie verfolgt keine Modellparameter, Ranglisten oder einzelnen Produktstarts, sondern verbindet zentrale Methoden in umgekehrter Chronologie: von wiederverwendbaren und überprüfbaren Agent-Systemen zurück zu den Praktiken, die sie ermöglicht haben.

<div class="roadmap-timeline">
  <article>
    <time>2026-04</time>
    <h3><a href="/ai-roadmap/timeline/2026-04-skills/">Skills (Fähigkeiten)</a></h3>
    <p>Skills bündeln Prompts, Schritte, Beispiele, Skripte und Ressourcen zu wiederverwendbaren Workflow-Einheiten. Teams müssen nicht jedes Mal neu erklären, wie eine Aufgabe erledigt wird.</p>
    <p><strong>Fokus:</strong> SKILL.md, progressive Offenlegung, abhängige Ressourcen, Wiederverwendungsgrenzen, Teamkonventionen.</p>
  </article>
  <article>
    <time>2026-02</time>
    <h3><a href="/ai-roadmap/timeline/2026-02-harness-engineering/">Harness Engineering (Ausführungs-Harness)</a></h3>
    <p>Harness Engineering gestaltet die Umgebung, in der Modelle Aufgaben zuverlässig erledigen: Tools, Kontext, Prüf-Feedback, Fehlerbehebung, Qualitätsgates und Regressionstests.</p>
    <p><strong>Fokus:</strong> Task-Harnesses, Prüf-Feedback, Fehlerwiederherstellung, Qualitätsgates.</p>
  </article>
  <article>
    <time>2026-01</time>
    <h3><a href="/ai-roadmap/timeline/2026-01-openspec/">OpenSpec (spezifikationsgetriebene Entwicklung)</a> / <a href="/ai-roadmap/timeline/2026-01-openclaw/">OpenClaw (Gateway für persönliche KI-Assistenten)</a></h3>
    <p>Diese beiden Knoten zeigen unterschiedliche Richtungen: OpenSpec macht Anforderungen und Design zu nachverfolgbaren Spezifikationsartefakten; OpenClaw vereinheitlicht persönliche Assistenten, Kanäle und Tool-Gateways.</p>
    <p><strong>Fokus:</strong> spec-driven development, Gateways, Sessions, Kanäle und nachverfolgbare Artefakte.</p>
  </article>
  <article>
    <time>2025-09</time>
    <h3><a href="/ai-roadmap/timeline/2025-09-context-engineering/">Context Engineering (Kontext-Engineering)</a></h3>
    <p>Context Engineering verschiebt den Fokus von „Wie schreibe ich den Prompt?“ zu „Was soll das Modell sehen, in welcher Reihenfolge, und was wird komprimiert oder ausgeschlossen?“.</p>
    <p><strong>Fokus:</strong> Kontextpriorität, Retrieval-Strategie, Kompression, Memory, Dateiauswahl.</p>
  </article>
  <article>
    <time>2025-06</time>
    <h3><a href="/ai-roadmap/timeline/2025-06-multi-agent/">Multi-agent (Agenten-Kollaboration)</a></h3>
    <p>Multi-agent teilt komplexe Arbeit auf Rollen wie Recherche, Implementierung, Review, Verifikation und Zusammenfassung auf. Ziel sind Struktur, Parallelität und gegenseitige Prüfung.</p>
    <p><strong>Fokus:</strong> Rollengrenzen, Übergabeformate, Konfliktlösung, Review und Verifikation.</p>
  </article>
  <article>
    <time>2025-03</time>
    <h3><a href="/ai-roadmap/timeline/2025-03-tool-use/">Tool Use (Tool-Nutzung)</a></h3>
    <p>Tool Use beschreibt, wie ein Modell Werkzeuge auswählt, aufruft, Ergebnisse liest und die Aufgabe fortsetzt. Es ist die Brücke von Einmalantworten zu mehrstufiger Ausführung.</p>
    <p><strong>Fokus:</strong> Tool-Auswahl, Aufrufketten, Zustand, Wiederherstellung nach Tool-Fehlern.</p>
  </article>
  <article>
    <time>2024-11</time>
    <h3><a href="/ai-roadmap/timeline/2024-11-mcp/">MCP (Model Context Protocol)</a></h3>
    <p>MCP macht Tools, Ressourcen und Prompts zu Protokoll-Oberflächen. Der Wert liegt nicht nur in mehr Integrationen, sondern in wiederverwendbaren, auffindbaren und steuerbaren Integrationen.</p>
    <p><strong>Fokus:</strong> Server, Clients, Tools, Resources, Prompts, Berechtigungen und Debugging.</p>
  </article>
  <article>
    <time>2023-11</time>
    <h3><a href="/ai-roadmap/timeline/2023-11-rag/">RAG (retrieval-augmentierte Generierung)</a></h3>
    <p>RAG verankert Antworten in abgerufenen Materialien. Es führt KI von „kann sprechen“ zu „kann mit nachvollziehbaren Belegen antworten“.</p>
    <p><strong>Fokus:</strong> Chunking, Vektorsuche, Reranking, Zitate, Kontextkompression.</p>
  </article>
  <article>
    <time>2023-06</time>
    <h3><a href="/ai-roadmap/timeline/2023-06-function-calling/">Function Calling (Funktionsaufrufe)</a></h3>
    <p>Function Calling brachte Modelle von Textantworten zu externen Fähigkeiten mit strukturierten Parametern. Dadurch kann KI in reale Systeme eintreten.</p>
    <p><strong>Fokus:</strong> Schema-Design, Parametervalidierung, Tool-Grenzen, Fehlerrückgabe.</p>
  </article>
  <article>
    <time>2022-11</time>
    <h3><a href="/ai-roadmap/timeline/2022-11-prompt-engineering/">Prompt Engineering (Prompt-Engineering)</a></h3>
    <p>Der Ausgangspunkt ist Eingabekontrolle: Ziele, Kontext, Einschränkungen, Beispiele und Ausgabeformat so explizit machen, dass sich Modellverhalten stabilisieren lässt.</p>
    <p><strong>Fokus:</strong> Aufgabenzerlegung, Rollen, few-shot Beispiele, Ausgabeformat, Retry-Muster.</p>
  </article>
</div>

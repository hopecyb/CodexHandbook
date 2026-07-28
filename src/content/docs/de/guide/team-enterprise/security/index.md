---
title: Sicherheit
description: 'Erläuterungsseite zu teamweiten Risiken, Angriffsflächen und Schutzideen — zuerst verstehen, wo Risiken liegen, dann Kontrollen.'
locale: de
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Springt man in dieser Gruppe direkt in Detailseiten, bleiben oft nur lose Begriffe — ohne zu wissen, wogegen sie schützen.

Besser in der Reihenfolge „woher kommt das Risiko → welche Schicht blockieren/prüfen“.

## Empfohlene Reihenfolge

1. [Bedrohungsmodell](/guide/team-enterprise/security/threat-model/)
2. [Plugin- und MCP-Risiken](/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [Prompt Injection](/guide/team-enterprise/security/prompt-injection/)

## Für wen zuerst

- Das Team will den Nutzungsumfang erweitern
- Drittanbieter-Erweiterungen, externe Werkzeuge oder geteilte Regeln kommen dazu
- Sie wollen wissen, welche Risiken „seid vorsichtig“ allein nicht lösen

Fokus der Sicherheitsseiten: Risiken finden, die Systemgrenzen brauchen — nicht nur Appelle.

---

**Status:** verified  
**Anwendbare Produkte:** Team- / Enterprise-Szenarien  
**Prüfgrundlage:** Aktuelle OpenAI-Dokumentation zu Plugins, Apps und Integrationen betont Risiken aus Externverbindungen, Aktionsrechten, Quellsystemzugriff und Freigabegrenzen; diese Seite navigiert nur und ordnet Bedrohungsmodell → Plugin/MCP → Prompt Injection.  
**Zuletzt geprüft:** 2026-07-26

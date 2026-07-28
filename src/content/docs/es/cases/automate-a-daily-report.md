---
title: Automatizar un informe diario
description: Convierte el resumen repetitivo en un script o Skill reutilizable.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Automatizar un informe diario

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Equipos |
| Cliente | CLI |
| Tiempo estimado | 1–2 horas (primera versión) |

## 1. Objetivo y contexto

**Objetivo:** Generar automáticamente cada día un resumen de cambios, resultados de tests y lista de pendientes.

**Criterios de éxito:** Un comando o Skill produce Markdown con formato fijo; los fallos tienen códigos de salida claros.

## 2. Patrón de referencia

El equipo ya tiene un caso similar: [Comprobación programada de enlaces](/cases/use-cases/team-automation/scheduled-link-check/).

## 3. Prompt recomendado

```text
Objetivo: Generar el Markdown del informe diario de ayer a hoy.
Contenido: resumen de git log, estado de CI (si es legible), lista de PRs abiertos.
Salida: reports/daily-YYYY-MM-DD.md
Restricciones: git en solo lectura; no hacer push; proporcionar scripts/generate-daily.sh para repeticiones.
```

## 4. Captura para reutilizar

- [Ejemplo de Skill de automatización](/skills/examples/automation-skill/)
- [Tareas programadas](/skills/automations/scheduled-tasks/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Los use cases actuales de Codex en OpenAI Developers siguen incluyendo escenarios de automatización repetible como «Automate bug triage» y «Turn feedback into actions». Esta página define el informe diario como «Markdown de formato fijo + código de salida claro + script o Skill reutilizable» — un patrón de flujo estable, no ligado a una integración concreta.

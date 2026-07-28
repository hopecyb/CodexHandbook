---
title: "Ejemplo: Skill de automatización"
description: Empaqueta comprobaciones o generación de informes repetitivos como Skill.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Ejemplo: Skill de automatización

## Esqueleto de SKILL.md

```md
---
name: daily-report
description: Resume cambios de ayer, resultados de tests y pendientes; genera un informe diario en Markdown. Úsalo cuando el usuario pida un informe diario, material de stand-up o un resumen de progreso.
---

## Flujo
1. Leer git log (rango de tiempo indicado) y un resumen del estado de CI
2. Listar ítems completados, bloqueos y plan de mañana
3. Escribir en reports/daily-YYYY-MM-DD.md
4. No enviar correo ni mensajes salvo que yo lo pida explícitamente

## scripts/
- scripts/collect-metrics.sh (opcional)
```

## Relacionado

- [Caso de informe diario automatizado](/cases/automate-a-daily-report/)
- [Tareas programadas](/skills/automations/scheduled-tasks/)
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esqueleto ilustrativo de un Skill de resumen periódico; sigue siendo un patrón de workflow estable que Codex/Skills pueden cubrir, sin atarse a una entrada concreta de automatización.  
**Última verificación:** 2026-07-26

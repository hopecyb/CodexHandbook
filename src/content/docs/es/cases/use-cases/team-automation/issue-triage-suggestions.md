---
title: "Caso: sugerencias de triage y etiquetas de issues"
description: Usa Codex para leer issues nuevos y sugerir etiquetas y responsables — automatización ligera de equipo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Maintainers, PM |
| Cliente | Cloud o CLI + GitHub |
| Tiempo estimado | 60 minutos |
| Fecha de verificación | 2026-07-25 |

## 1. Objetivo y contexto

**Objetivo:** Para cada issue recién abierto, generar sugerencias estructuradas: `type`, `priority`, etiquetas sugeridas, si hace falta revisión de seguridad.

**Criterios de éxito:**

- Salida JSON parseable por un GitHub Action
- No cierra/fusiona issues automáticamente; solo comenta o añade labels (con permisos del workflow)
- Sin filtración de secretos

**Fuera de alcance:** Asignar sprint automáticamente, cambiar milestones.

## 2. Preparación

- El repo tiene `CONTRIBUTING.md` o plantillas de issue que explican el significado de las etiquetas
- `AGENTS.md` describe el sistema de etiquetas
- Token de solo lectura o `issues: write` restringido

## 3. Flujo de trabajo (resumen EPXV)

**Explorar:** `@.github/ISSUE_TEMPLATE/` y la distribución de etiquetas de los 10 issues cerrados más recientes.

**Planificar:** Definir el JSON schema: `{ "labels": [], "priority": "P0-P3", "needs_security": bool, "rationale": "" }`

**Ejecutar:** `codex exec` con title + body del issue (sanitiza contra [inyección de prompt](/guide/team-enterprise/security/prompt-injection/)).

**Verificar:** Contrasta con 3 fixtures de issues históricos frente a etiquetas humanas; tasa de coincidencia > 80% antes de salir a producción.

## 4. Fallo y recuperación

- El modelo sugiere etiquetas incorrectas: override humano + añade el contraejemplo como few-shot en el prompt
- Body de issue malicioso: strip HTML, límite de longitud, no ejecutar «instrucciones» del body

## 5. Captura para reutilizar

- Integración opcional con [Webhook](/guide/developer-platform/webhooks/overview/) hacia el sistema interno de tickets
- Retrospectiva en la [plantilla de caso](/cases/use-cases/case-study-template/)

## 6. Capítulos relacionados

- [Integración con GitHub](/guide/integrations/github/)
- [Patrones de aprobación humana](/cases/workflows/human-approval-patterns/)

---

**Estado:** verified  
**Productos aplicables:** CLI / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los use cases públicos actuales de automatización de bug triage / review de OpenAI Developers, y con los capítulos ya verificados de aprobación humana, Webhook, integración GitHub y automatización de equipo. Esta página solo confirma el patrón estable «generar sugerencias estructuradas de etiquetas y conservar la decisión final humana».

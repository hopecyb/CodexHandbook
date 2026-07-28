---
title: Métodos de flujo de trabajo
description: Métodos de colaboración repetibles — no atados a una sola interfaz de producto, con puntos de control y criterios de aceptación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Los [prompts](/prompts/) enseñan **cómo formular**; los flujos de trabajo enseñan **cómo organizar toda una tarea**. Los métodos de este capítulo aplican a App, CLI, IDE y Cloud.

## Por qué hacen falta flujos de trabajo

En tutoriales externos suele narrarse «una sola conversación basta»; en proyectos reales es más frecuente:

```text
Explorar → Planificar → Ejecutar → Verificar → (posible) traspaso o automatización
```

Sin puntos de control es fácil: tocar el directorio equivocado, no ejecutar tests, fusionar por error o perder conclusiones cuando se agota el contexto.

## Flujos de trabajo principales

| Flujo de trabajo | Qué problema resuelve |
|---|---|
| [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/) | Cadena principal genérica, adecuada para la mayoría de tareas |
| [Lluvia de ideas antes de construir](/cases/workflows/brainstorm-before-building/) | Divergir y converger cuando la solución aún no está clara |
| [Trabajo impulsado por especificación](/cases/workflows/specification-driven-work/) | Escribir una especificación aceptable antes de implementar |
| [Trabajo impulsado por tests](/cases/workflows/test-driven-work/) | Dejar que los tests impulsen la implementación |
| [Patrones de aprobación humana](/cases/workflows/human-approval-patterns/) | Cuándo pausar, cuándo aprobar, cuándo rechazar |
| [Diagnosticar antes de corregir](/cases/workflows/diagnose-before-fixing/) | Evitar «arreglar a ciegas» |
| [Revisión antes de fusionar](/cases/workflows/review-before-merge/) | Revisión estructurada del PR antes de fusionar |
| [Investigación con fuentes](/cases/workflows/research-with-sources/) | Búsqueda, comparación y verificación de fuentes |
| [Trabajo orientado a artefactos](/cases/workflows/artifact-first-work/) | Acordar el entregable primero y deducir los pasos |
| [Coordinación multi-Agent](/cases/workflows/multi-agent-coordination/) | Paralelismo y división del trabajo |
| [Gestión de tareas largas](/cases/workflows/long-running-task-management/) | Puntos de control entre sesiones y condiciones de salida |
| [Recuperación ante fallos](/cases/workflows/failure-recovery/) | Retroceder cuando el trabajo se desvía o los tests fallan |
| [Convertir un flujo en Skill](/cases/workflows/turn-a-workflow-into-a-skill/) | Escribir procesos repetidos como Skill |

## Otros capítulos relacionados con flujos

- Calidad: [Capacidades clave · Calidad y verificación](/guide/quality/)
- Agent: [Planificación](/guide/agent-work/planning/), [Subagents](/guide/agent-work/subagents/)
- Captura: [Skill](/skills/overview/), [AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- Casos: [Biblioteca de escenarios y casos](/cases/use-cases/)

## Principios de diseño

1. **Cada fase tiene un artefacto:** plan, diff, informe de tests, registro de decisiones
2. **Pasos pequeños por defecto:** un incremento revisable supera un cambio enorme de una sola vez
3. **Fallos recuperables:** saber cómo deshacer y cómo hacer fork del hilo para continuar
4. **Capturar lo repetible:** la tercera repetición de un proceso se escribe como Skill o plantilla

## Fuentes de referencia

- Flujos y playbooks de freestylefly/CodexGuide
- `14-workflows.md` de stormzhang
- Flujo estándar del artículo 4 de codex.bozhouai.com

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de prompts, calidad, trabajo con Agents y Skills de este manual. Esta página solo navega métodos y puntos de control por fase; no convierte flujos concretos de cliente en un contrato a largo plazo.

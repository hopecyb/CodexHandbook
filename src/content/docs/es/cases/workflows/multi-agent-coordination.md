---
title: Coordinación multi-Agent
description: Exploración en paralelo, división de ejecución y fusión de resultados — cuándo dividir y cómo aceptar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Multi-Agent encaja con subproblemas paralelizables y poco acoplados; no encaja con editar el mismo archivo a la vez sin coordinación humana.

## Cuándo dividir

| Adecuado | No adecuado |
|---|---|
| Estilos front + contrato de API back en paralelo | Dos personas tocando la misma función |
| Uno ejecuta tests y otro escribe docs | Estado mutable compartido sin bloqueo |
| Explorar varias implementaciones | Dependencias fuertes de orden sin aclarar |

Capacidades del producto: [Agents en paralelo](/guide/desktop-app/parallel-agents/), [Subagents](/guide/agent-work/subagents/).

## Patrones de colaboración

### Patrón A: Exploración en paralelo, elección humana

```text
Agent 1: pros, contras y esfuerzo de la opción A
Agent 2: pros, contras y esfuerzo de la opción B
Tú: eliges una y abres un solo Agent para ejecutar
```

### Patrón B: Pipeline

```text
Agent de exploración → plan → Agent de ejecución (hilo nuevo, con resumen del plan)
```

Usa [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/) para pasar un resumen estructurado; no pegues el chat entero.

### Patrón C: Aislamiento con worktree

Distintos Agents modifican distintas ramas en distintos [git worktree](/guide/desktop-app/worktrees/); al final fusionas tú.

## Reglas de coordinación (recomendado en AGENTS.md)

- Cada Agent tiene un límite claro de directorios
- Prohibido `git push` en paralelo
- Antes de fusionar, ejecutar CI de forma unificada
- Los conflictos los resuelve una persona; el Agent no adivina

## Aceptación

- [ ] Cada Subagent tiene su propia «definición de terminado»
- [ ] Tras fusionar, la suite completa pasa
- [ ] El diff se puede rastrear hasta la descripción de cada subtarea

## Errores frecuentes

- Tres Agents en paralelo tocando `package.json`
- Sin paso de consolidación: no se sabe a qué conclusión hacer caso

---

**Estado:** verified  
**Productos aplicables:** App / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con la documentación pública actual de OpenAI Developers sobre multi-agent / subagents, y con los capítulos ya verificados de Subagents, traspaso y trabajo en paralelo. El contenido se limita al método estable «cuándo dividir, cómo aislar fronteras y cómo consolidar la aceptación a mano»; no convierte betas o entradas de UI actuales en un contrato fijo.

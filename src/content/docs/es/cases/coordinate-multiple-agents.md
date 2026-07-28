---
title: Coordinar varios Agents
description: Caso de colaboración con exploración en paralelo, división del trabajo y fusión de resultados.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Coordinar varios Agents

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Desarrolladores / equipos |
| Cliente | App de escritorio |
| Tiempo estimado | Según la tarea |

## 1. Objetivo y contexto

**Objetivo:** Dividir subproblemas paralelizables entre varios Agents y fusionar las conclusiones a mano.

**Criterios de éxito:** Cada Subagent tiene su propia definición de terminado y no se pisan los mismos archivos.

## 2. Patrones recomendados

### Exploración en paralelo, elección humana

```text
Agent 1: pros, contras y esfuerzo de la opción A
Agent 2: pros, contras y esfuerzo de la opción B
(Tras tu elección, un solo Agent ejecuta)
```

### Aislamiento con worktree

Distintos Agents modifican distintas ramas en distintos [git worktree](/guide/desktop-app/worktrees/); al final fusionas tú.

## 3. Reglas de coordinación (recomendado en AGENTS.md)

- Cada Agent tiene un límite claro de directorios
- Prohibido `git push` en paralelo
- Antes de fusionar, ejecutar CI de forma unificada

## 4. Relacionado

- [Coordinación multi-Agent](/cases/workflows/multi-agent-coordination/)
- [Subagents](/guide/agent-work/subagents/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** La documentación de planes de Codex en OpenAI Help Center sigue indicando que la App de escritorio admite agents de Codex en paralelo, worktrees integrados y delegación en la nube. Esta página solo resume el patrón «exploración en paralelo, aislamiento por directorios, evitar push paralelo y fusión humana», sin depender de un flujo de UI concreto.

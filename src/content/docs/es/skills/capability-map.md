---
title: Mapa de capacidades de extensión
description: Relación entre Skill, MCP, Plugin, Hooks, comandos slash y AGENTS.md.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Hay muchos mecanismos de extensión y es fácil confundirlos. Esta página solo explica cómo se relacionan, sin pasos de instalación.

## Esquema de relaciones

![De un prompt a un paquete de capacidades para el equipo](/diagrams/codex-capability-ladder-es.svg)

```text
                    ┌─────────────────┐
                    │  Tu objetivo de  │
                    │      tarea       │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌───────────┐      ┌─────────────┐     ┌──────────────┐
   │ AGENTS.md │      │ Prompt/     │     │ Comando slash│
   │ Reglas    │      │ plantilla   │     │ Tú lo        │
   │ persistentes│    │ Esta tarea  │     │ disparas     │
   └───────────┘      └─────────────┘     └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                    ┌─────────────────┐
                    │      Skill       │
                    │ Paquete de flujo │
                    │ reutilizable     │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌─────────────┐
        │   MCP    │  │  Hooks   │  │  Scripts    │
        │ Herramientas│ │ Auditoría│  │ Scripts del │
        │ externas │  │ /validación│ │ Skill       │
        └──────────┘  └──────────┘  └─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Plugin       │
                    │ Distribución y   │
                    │ empaquetado      │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Automations     │
                    │ Desatendido/     │
                    │ programado       │
                    └─────────────────┘
```

## Tabla comparativa

| | Quién dispara | Persistencia | Conectar sistemas externos | Distribución al equipo |
|---|---|---|---|---|
| AGENTS.md | Carga automática | Alta (Git) | Fácil |
| Prompt | Tú | Baja | Difícil |
| Comando slash | Tú | Media | Según producto |
| Skill | Tú o match del modelo | Alta | Fácil (directorio/Git) |
| MCP | El modelo llama herramientas | Nivel de configuración | Requiere gobernanza |
| Plugin | Efecto combinado tras instalar | Alta | Canales oficiales/de equipo |
| Hooks | Eventos del sistema | Nivel de configuración | Habitual en empresa |
| Automations | Tiempo/evento | Nivel de configuración | Requiere flujo de Aprobación |

## Correspondencias habituales

| Necesidad | Elección sugerida |
|---|---|
| Unificar estilo de código y comandos de prueba | AGENTS.md |
| Estandarizar el flujo «revisar PR» | Skill |
| Leer tickets de Jira/Linear | MCP |
| Instalar un conjunto de integraciones a todo el equipo | Plugin |
| Escanear secretos antes de cada commit | Hooks |
| Generar cada lunes un borrador de informe semanal | Automations (+ publicación humana) |

## De una tarea a un paquete para el equipo

Usa esta progresión para decidir si vale la pena endurecer un flujo:

| Etapa | Forma | Cuándo encaja |
|---|---|---|
| Prompt puntual | Instrucciones en la conversación actual | Se usa una vez o todavía es exploratorio |
| Plantilla | Estructura fija de objetivo, contexto, límites y aceptación | La tarea se repite, pero los pasos aún cambian |
| Skill | `SKILL.md` con plantillas, referencias o scripts | Proceso estable con criterios de éxito claros |
| Subagent | Rol especializado con contexto separado | Revisión, pruebas, depuración o investigación acotadas |
| MCP | Herramientas invocables de sistemas externos | Hace falta leer tickets, repos o sistemas internos |
| Hook | Comprobación o bloqueo por evento | Secretos, formato o comandos arriesgados |
| Plugin | Paquete instalable para el equipo | Skills, MCP, Hooks, plantillas y documentación viajan juntos |
| Automation | Tarea programada o por evento | Informes, monitoreo o revisiones recurrentes |

No empieces diseñando un Plugin. Primero ejecuta la tarea una vez; luego observa qué pasos se repiten, qué comprobaciones deben automatizarse y qué permisos externos son realmente necesarios.

Lógica detallada de ramas: [Cómo elegir el método de extensión](/skills/choosing-an-extension-method/).

## Independiente de la entrada de producto

Estos mecanismos **no están ligados** a una sola interfaz: CLI, App de escritorio e IDE pueden soportar Skill/MCP en distinto grado; sigue [Comparación de funciones](/guide/reference/feature-comparison/) y la documentación oficial.

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Esta página dibuja Skill, MCP, Plugin, Hooks y Automations como un mapa de relaciones fijo e implica niveles de soporte actuales; esos límites y entradas no están cubiertos de forma completa en el material público oficial a 2026-07-26 y hay que reescribirlos según el producto vigente.  
**Última verificación:** 2026-07-26

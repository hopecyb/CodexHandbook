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

Lógica detallada de ramas: [Cómo elegir el método de extensión](/skills/choosing-an-extension-method/).

## Independiente de la entrada de producto

Estos mecanismos **no están ligados** a una sola interfaz: CLI, App de escritorio e IDE pueden soportar Skill/MCP en distinto grado; sigue [Comparación de funciones](/guide/reference/feature-comparison/) y la documentación oficial.

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Esta página dibuja Skill, MCP, Plugin, Hooks y Automations como un mapa de relaciones fijo e implica niveles de soporte actuales; esos límites y entradas no están cubiertos de forma completa en el material público oficial a 2026-07-26 y hay que reescribirlos según el producto vigente.  
**Última verificación:** 2026-07-26

---
title: Hooks
description: Ejecuta scripts o herramientas MCP en puntos del ciclo de vida de Codex para comprobar, registrar y aplicar políticas.
locale: es
source_locale: zh-cn
source_revision: c768708
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Un Hook es un controlador automático del ciclo de vida de Codex. Puede ejecutar un script o una herramienta MCP al iniciar una sesión, enviar un prompt, antes o después de una llamada a una herramienta, durante la compactación del contexto, cuando se detiene un subagent o cuando termina el hilo principal.

## Qué resuelve esta sección

- Elegir un evento real, en lugar de inventar nombres inexistentes como `pre_tool`.
- Distinguir entre bloquear antes de la ejecución y aportar feedback después.
- Empezar con un Hook comprobable y de bajo riesgo.
- Revisar el límite de confianza de los Hooks del proyecto y de los incluidos en Plugins.

## Orden de lectura

1. [Introducción a los Hooks](/es/skills/hooks/hooks-overview/): capas de configuración, confianza y comportamiento durante la ejecución
2. [Tipos de eventos de Hook](/es/skills/hooks/hook-event-types/): elige eventos y matchers según su posición en el ciclo de vida
3. [Ejemplos de Hooks](/es/skills/hooks/hooks-examples/): ejecuta un guardián `PreToolUse` con pruebas unitarias

## Decisión rápida

| Objetivo | Considera primero |
|---|---|
| Rechazar o reescribir la entrada de una herramienta antes de ejecutarla | `PreToolUse` |
| Decidir cuando Codex está a punto de solicitar permisos elevados | `PermissionRequest` |
| Registrar o añadir feedback después de que termine una herramienta | `PostToolUse` |
| Comprobar un prompt enviado o añadirle contexto | `UserPromptSubmit` |
| Exigir que el hilo principal o un subagent continúen otro turno | `Stop` / `SubagentStop` |

Los Hooks no sustituyen el sandbox, las aprobaciones, las reglas de comandos ni los permisos del servicio. Son una capa adicional de protección, y algunas rutas de herramientas gestionadas no pasan por los Hooks de herramientas locales.

## Fuente oficial

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Estado:** verified

**Productos aplicables:** Entornos que usan un host de Codex local; la revisión de confianza y la gestión mediante `/hooks` siguen la documentación oficial de Codex CLI

**Última verificación:** 2026-08-25

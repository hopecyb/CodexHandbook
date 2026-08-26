---
title: Tipos de eventos de Hook
description: Elige eventos de los ciclos de vida de sesión, turno, llamada a herramienta, compactación y subagent.
locale: es
source_locale: zh-cn
source_revision: 7da5c40
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

La primera pregunta al elegir un Hook no es «¿cómo escribo el script?», sino «¿esto debe suceder antes o después del efecto secundario?». Un script asociado al evento equivocado quizá solo pueda informar del daño cuando ya se ha producido.

![Ciclo de vida de los Hooks de Codex y eventos principales](/diagrams/hook-lifecycle-events-es.svg)

## Eventos actuales

| Evento | Cuándo se ejecuta | Filtros del matcher | Uso habitual |
|---|---|---|---|
| `SessionStart` | Al iniciar o reanudar una sesión | `startup`, `resume`, `clear`, `compact` | Notas del entorno, contexto restaurado |
| `SubagentStart` | Cuando comienza un subagent | Tipo de subagent | Añadir restricciones al subagent |
| `UserPromptSubmit` | Cuando la persona envía un prompt | No compatible; se ignora la configuración | Detectar secretos, añadir contexto de desarrollo |
| `PreToolUse` | Antes de ejecutar una herramienta local compatible | Nombre de la herramienta | Rechazar o reescribir la llamada |
| `PermissionRequest` | Cuando Codex está a punto de solicitar aprobación | Nombre de la herramienta | Permitir, rechazar o dejar la decisión al flujo normal |
| `PostToolUse` | Después de que termine una herramienta local compatible | Nombre de la herramienta | Registrar resultados, aportar feedback al razonamiento posterior |
| `PreCompact` | Antes de compactar el contexto | `manual` / `auto` | Guardar estado antes de la compactación |
| `PostCompact` | Después de compactar el contexto | `manual` / `auto` | Restaurar el contexto necesario |
| `SubagentStop` | Cuando un subagent está a punto de detenerse | Tipo de subagent | Exigir otra comprobación |
| `Stop` | Cuando está a punto de terminar el turno de la tarea principal | No compatible; se ignora la configuración | Exigir más verificación en el hilo principal |
| `SessionEnd` | Cuando termina el hilo principal | Actualmente `other` | Registro final rápido; no se ejecuta para subagents |

## Matchers de herramientas

Entre los valores habituales se incluyen:

```text
Bash
^apply_patch$
Edit|Write
mcp__filesystem__read_file
mcp__filesystem__.*
```

La ejecución de shell y de comandos unificados coincide con `Bash`. `apply_patch` también puede coincidir con los alias `Edit` o `Write`. MCP y otras herramientas de función locales coinciden con sus nombres reales.

## Tres eventos que suelen confundirse

### PreToolUse

La entrada contiene `tool_name`, `tool_use_id` y el `tool_input` específico de la herramienta. Puede devolver:

- `permissionDecision: "deny"`: detener una llamada compatible.
- `permissionDecision: "allow"` junto con `updatedInput`: reescribir una entrada compatible.
- `additionalContext`: añadir contexto al modelo sin bloquear.

La salida de texto normal se ignora; debe emitirse el JSON documentado. El código de salida `2` con stderr también puede bloquear y proporcionar un motivo.

### PermissionRequest

Solo se ejecuta cuando Codex ya iba a solicitar aprobación para una elevación de shell, acceso de red gestionado o una acción similar. Puede permitir, rechazar o dejar la decisión a la interfaz normal de aprobación. No sustituye una política general de `PreToolUse`.

### PostToolUse

La herramienta ya se ha ejecutado, y el evento se activa incluso si Bash termina con un código distinto de cero. Devolver un bloqueo o salir con `2` puede reemplazar el feedback dirigido al modelo, pero no deshacer un comando, una escritura de archivo ni una acción externa.

## Stop no es un botón para deshacer

En un evento `Stop`, `decision: "block"` crea automáticamente un prompt de continuación a partir del motivo y pide a Codex que ejecute otro turno. No revierte los efectos secundarios ya producidos. Comprueba `stop_hook_active` para evitar un bucle infinito.

## Ejercicio para elegir un evento

| Necesidad | Elección | Motivo |
|---|---|---|
| Impedir que se escriba un posible token | `PreToolUse` con matcher `apply_patch|Edit|Write` | Debe actuar antes de la escritura |
| Medir la tasa de fallos del shell | `PostToolUse` con matcher `Bash` | Necesita conocer el resultado |
| Guardar decisiones clave antes de una compactación automática | `PreCompact` | Se ejecuta antes de compactar |
| No terminar hasta ejecutar las pruebas | `Stop` | Continúa la tarea actual |
| Enviar una solicitud de red de 30 segundos al cerrar | No usar `SessionEnd` | El máximo es de tres segundos; los eventos de cierre deben ser breves |

## Fuente oficial

- [OpenAI: eventos y matchers de Hooks](https://learn.chatgpt.com/docs/hooks)

---

**Estado:** verified

**Productos aplicables:** Entornos que usan un host de Codex local

**Última verificación:** 2026-08-25

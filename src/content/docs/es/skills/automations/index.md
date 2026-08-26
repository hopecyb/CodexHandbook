---
title: Scheduled tasks
description: Repite en ChatGPT, según un horario, una tarea que ya se ha verificado.
locale: es
source_locale: zh-cn
source_revision: f32c13f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Una Scheduled task permite que ChatGPT repita trabajo en segundo plano según una programación. Es adecuada para informes periódicos, seguimientos continuos y mantenimiento recurrente. No equivale a un webhook genérico, a un evento del repositorio ni a un sistema de CI.

## Decide primero si es adecuada

| Adecuada | No adecuada |
|---|---|
| Fuentes de entrada estables y resultados revisables | El problema debe redefinirse en cada ejecución |
| Activada por una hora o un intervalo | Debe iniciarse exactamente con un Git push o la apertura de un PR |
| Comprobaciones de solo lectura, resúmenes y borradores | Fusiones desatendidas en la rama principal o eliminaciones masivas |
| Condiciones explícitas para «sin cambios» y para detenerse | Reintentos infinitos después de un fallo |

## Superficies de gestión actuales

- Crea y gestiona Scheduled tasks en ChatGPT Web o en la App de escritorio.
- Codex CLI y el IDE no ofrecen una interfaz para gestionar Scheduled tasks; sí sirven para probar primero prompts, Skills o scripts.
- La App de escritorio puede ejecutar una tarea sobre un proyecto local o un worktree aislado, pero el equipo debe estar encendido, la App en ejecución y el proyecto disponible en el disco.
- Una tarea de Web puede usar contexto cargado, herramientas conectadas, Skills y Plugins, pero no puede leer directamente una carpeta local.

## En esta sección

- [Guía completa de Scheduled tasks](/es/skills/automations/scheduled-tasks/): elige el modo de ejecución, redacta un prompt duradero y define permisos y aceptación

## Fuente oficial

- [OpenAI: Scheduled tasks](https://learn.chatgpt.com/docs/automations)

---

**Estado:** verified

**Productos aplicables:** ChatGPT Web / App de escritorio; CLI e IDE sirven para preparar y probar tareas, pero no ofrecen una interfaz de gestión

**Última verificación:** 2026-08-26

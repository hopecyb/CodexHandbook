---
title: Notificaciones y vista Activity
description: Configura avisos de finalización de tareas, solicitudes de permisos y preguntas pendientes.
locale: es
source_locale: zh-CN
source_revision: "4a1c672"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 80
legacyVerification:
  status: verified
  products: App
  checkedAt: '2026-08-26'
reviewed_at: 2026-10-25
---
Las notificaciones indican cuándo debes volver a atender una tarea; no sustituyen la revisión de los resultados. La aplicación de escritorio permite configurar avisos al terminar un turno y controlar por separado los de permisos y preguntas.

## Configuración recomendada

Abre **Settings → Notifications**:

| Evento | Recomendación | Motivo |
|---|---|---|
| Turn completion | Avisar cuando se ejecuta en segundo plano | No hace falta vigilar continuamente una tarea larga |
| Permission | Activar | Una solicitud de aprobación sin responder detiene la tarea |
| Question | Activar | Debes responder si a Codex le falta contexto esencial |

El sistema operativo también debe permitir las notificaciones de la aplicación de escritorio de ChatGPT. Si el sistema las bloquea, no llegarán aunque estén activadas dentro de la aplicación.

## Gestionar varias conversaciones con Activity

Cuando Activity esté disponible, selecciona la campana de la barra lateral para ver conversaciones sin leer, en curso o pendientes de respuesta. Los atajos son:

- macOS: `Cmd + Option + U`
- Windows: `Ctrl + Alt + U`

Los filtros pueden cambiar según la interfaz y pueden incluir Work, Chat, Pinned y Scheduled. Orden recomendado: solicitudes de permiso o información → fallos → tareas completadas pendientes de revisión → tareas en curso.

## Qué hacer al recibir un aviso

- **Finalización:** abre el diff y la salida de verificación; no consideres el aviso una prueba de aceptación.
- **Solicitud de permiso:** comprueba el comando, el recurso afectado, el alcance y si la acción es reversible.
- **Respuesta pendiente:** aporta solo el contexto necesario sin ampliar la tarea de paso.
- **Fallo:** identifica el primer error útil antes de decidir si reintentas o cambias las restricciones.

Las notificaciones de la CLI y el IDE funcionan de otro modo: el IDE no tiene un ajuste de notificaciones independiente y la CLI puede configurar avisos de finalización de la TUI o de un programa externo mediante opciones avanzadas. No trates el ajuste de escritorio como un interruptor global.

## Fuentes oficiales

- [Notificaciones](https://learn.chatgpt.com/docs/notifications)
- [Configuración de la aplicación de escritorio](https://learn.chatgpt.com/docs/app/settings)

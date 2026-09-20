---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: Configuración
description: Ajusta el comportamiento diario, los atajos de teclado, las notificaciones y la apariencia de la aplicación de escritorio.
locale: es
source_locale: zh-CN
source_revision: 7a6d2fe
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 90
---

La página de configuración permite personalizar el comportamiento de la aplicación, pero no reúne todos los permisos de Codex. Mantén primero los valores predeterminados y modifica cada opción solo cuando entiendas su alcance.

En macOS, pulsa `Cmd + ,`; en Windows, `Ctrl + ,`. También puedes abrir Settings desde el menú de la aplicación.

## Cuatro apartados que conviene revisar primero

### General

- Si debes pulsar `Cmd + Enter` para enviar un prompt de varias líneas.
- Si **Prevent sleep while running** permite que una tarea local larga continúe cuando te apartas del ordenador.
- **Follow-up behavior** determina si un nuevo mensaje orienta inmediatamente la ejecución actual o queda en cola para el siguiente turno.

La última opción cambia el efecto de añadir una aclaración. Para una corrección urgente, orienta la ejecución actual. Si se trata de un requisito nuevo y ajeno al trabajo en curso, abre otra conversación.

### Keyboard shortcuts

Puedes buscar comandos, cambiar atajos o restablecer los valores predeterminados. Si un atajo publicado en internet no coincide con el de tu equipo, utiliza la combinación que aparece aquí.

### Notifications

Define cuándo aparecen las notificaciones al terminar un turno y si recibes avisos de solicitudes de permisos o preguntas. Encontrarás recomendaciones completas en [Notificaciones y vista de actividad](/es/guide/desktop-app/notifications/).

### Appearance

Puedes elegir un tema claro, oscuro o el del sistema y ajustar el color de acento, fondo, primer plano, fuente de la interfaz, fuente del código y tamaño de letra. En una revisión larga de código, prioriza el contraste y la legibilidad antes que el aspecto del tema.

## Qué no se resuelve aquí

- Las reglas del repositorio se escriben en `AGENTS.md`.
- La configuración persistente de la CLI y del Agent se escribe principalmente en `config.toml`.
- La disponibilidad de archivos, red y comandos depende en conjunto del sandbox, las aprobaciones y la política de la organización.
- Las políticas administradas de la organización pueden limitar las opciones que cada persona puede elegir.

Por tanto, que una opción aparezca en Settings no garantiza que la tarea actual tenga ese permiso. Si se rechaza una operación, lee primero [Permisos y sandbox](/es/guide/permissions-and-sandbox/) antes de ampliar el acceso.

## Verificar los cambios

Cambia solo una clase de opciones cada vez y comprueba el resultado con una conversación de bajo riesgo. Anota el valor anterior antes de continuar. Si el comportamiento no es el esperado, restablece primero el valor predeterminado y después revisa la versión de la aplicación, los permisos del sistema operativo y la política de la organización.

## Fuentes oficiales

- [Configuración de la aplicación de escritorio ChatGPT](https://learn.chatgpt.com/docs/app/settings)
- [Conceptos básicos de configuración de Codex](https://learn.chatgpt.com/docs/config)
- [Permisos](https://learn.chatgpt.com/docs/permissions)

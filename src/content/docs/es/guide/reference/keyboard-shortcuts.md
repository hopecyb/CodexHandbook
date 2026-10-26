---
title: Atajos de teclado
description: Solo se incluyen los atajos de la aplicación y del IDE verificables en la documentación oficial vigente.
locale: es
source_locale: zh-CN
source_revision: '4f812d9'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 90
legacyVerification:
  status: verified
  products: App, CLI, IDE
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-25'
---

Los atajos varían según la plataforma, el cliente y la configuración personalizada. Esta página recoge únicamente las combinaciones que figuran de forma explícita en la documentación oficial actual. La lista completa se encuentra en **Keyboard Shortcuts** dentro de la aplicación.

## Aplicación de escritorio

| Acción | macOS | Windows |
|---|---|---|
| Abrir Settings | `Cmd + ,` | `Ctrl + ,` |
| Abrir o cerrar Activity | `Cmd + Option + U` | `Ctrl + Alt + U` |
| Abrir la terminal integrada | `Ctrl` + tecla de acento grave | `Ctrl` + tecla de acento grave |
| Abrir la paleta de comandos de la aplicación | `Cmd + K` | Consultar Keyboard Shortcuts |
| Limpiar la pantalla de la terminal | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` abre la paleta de comandos de la aplicación; no limpia la terminal.

En Keyboard Shortcuts de Settings puedes buscar por nombre de comando o por combinación de teclas, cambiar asignaciones y restaurar los valores predeterminados. Si has personalizado los atajos, comprueba tu configuración local antes de confiar en una lista publicada en internet.

## IDE

En los editores basados en VS Code, `chatgpt.composerEnterBehavior` determina cómo se envían los mensajes de varias líneas con Enter y `Cmd/Ctrl + Enter`. No supongas que todas las máquinas usan la misma tecla de envío.

Mientras Codex está trabajando, `chatgpt.followUpQueueMode` decide si los mensajes nuevos quedan en cola o redirigen inmediatamente la ejecución. Para un envío concreto, `Cmd/Ctrl + Shift + Enter` invierte el comportamiento predeterminado vigente.

Si no encuentras la barra lateral de Codex, ejecuta este comando desde la paleta de comandos del editor:

```text
Codex: Open Codex Sidebar
```

## CLI

Consulta `/help` y las indicaciones de la interfaz de la versión actual para conocer los controles de la TUI de la CLI. Esta página ya no presupone teclas de aprobación como `y` o `n`, porque la terminal, el modo y la versión pueden cambiar la interacción.

La señal habitual de terminal `Ctrl + C` puede interrumpir un comando o una sesión en curso. Comprueba primero el estado actual; no la trates como una tecla inocua para «volver».

## Orden de aprendizaje

Aprende primero a abrir Settings, ver Activity, abrir la terminal y enviar mensajes de varias líneas. Busca los demás atajos dentro de la aplicación cuando los necesites con frecuencia. En la documentación del equipo, indica el nombre de la acción en vez de exigir a todos la misma combinación personalizada.

## Fuentes oficiales

- [Configuración de la aplicación de escritorio](https://learn.chatgpt.com/docs/app/settings)
- [Notificaciones y Activity](https://learn.chatgpt.com/docs/notifications)
- [Terminal integrada](https://learn.chatgpt.com/docs/integrated-terminal)
- [Configuración del IDE](https://learn.chatgpt.com/docs/ide/settings)

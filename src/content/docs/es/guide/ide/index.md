---
title: Extensión IDE
description: Usar Codex en el editor — instalación, contexto, tareas locales y Cloud, revisión y ajustes.
sidebar:
  order: 12
locale: es
source_locale: zh-CN
source_revision: "c2fa50b"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
legacyVerification:
  status: verified
  products: IDE
  basis: OpenAI Help Center (*Using Codex with your ChatGPT plan*) sigue confirmando la Codex IDE extension y la sitúa junto a CLI y App de escritorio como cliente local; esta página solo navega el capítulo IDE y destaca el flujo estable de «archivo actual, selección y revisión de diff».
  checkedAt: '2026-07-26'
---
La extensión IDE conviene cuando **escribes y miras el diff a la vez**: abres archivos, seleccionas código y describes la tarea en la barra lateral. Este capítulo cubre el recorrido completo, desde la elección hasta la revisión.

Si sueles escribir código o editar documentación en el editor, el IDE suele ser la entrada más natural.

Trae directamente el archivo abierto y la selección actuales, así que muchas tareas de «cambio de alcance reducido» son más fáciles de acotar.

![Ilustración: un bloque de código seleccionado en el editor; en el panel lateral, un asistente propone un cambio con un botón de aceptar](/illustrations/ide.webp)

## Navegación del capítulo

| Tema | Página |
|---|---|
| Elección | [Editores compatibles](/es/guide/ide/supported-editors/) |
| Instalación | [Instalación](/es/guide/ide/installation/) |
| Contexto | [Contexto del editor](/es/guide/ide/editor-context/) · [Selección y archivos abiertos](/es/guide/ide/selected-code-and-open-files/) |
| Flujo de trabajo | [Tareas locales](/es/guide/ide/local-task-workflow/) · [Tareas Cloud](/es/guide/ide/cloud-task-workflow/) |
| Calidad | [Revisar cambios](/es/guide/ide/reviewing-changes/) |
| Configuración | [Ajustes](/es/guide/ide/settings/) |
| Resolución de problemas | [Resolución de problemas](/es/guide/ide/troubleshooting/) |

Atajos de inicio: [Instalar la extensión IDE](/es/guide/getting-started/install-ide-extension/) · [Elegir cliente](/es/guide/choose-your-client/)

## Presta atención a esto primero

La primera vez, fíjate en tres cosas:

1. Usa como referencia el archivo que tienes abierto
2. Puedes acotar el alcance con la selección
3. Después de cambiar, sigues teniendo que revisar el diff tú mismo

La extensión IDE encaja con tareas de «alcance pequeño, ir mirando y cambiando», pero el control de alcance y la revisión siguen siendo imprescindibles.

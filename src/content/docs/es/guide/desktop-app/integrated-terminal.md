---
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
title: Terminal integrado
description: Ejecuta comandos en el proyecto o worktree actual y comprueba los resultados de la tarea con la salida real.
locale: es
source_locale: zh-CN
source_revision: 727e93e
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 60
---

Cada conversación de la aplicación de escritorio ChatGPT tiene un terminal cuyo ámbito es el proyecto o worktree actual. No sirve solo para «ver registros»: también es la ventana de evidencias con la que compruebas las conclusiones de Codex.

Puedes abrirlo desde el icono del terminal, en la esquina superior derecha de la aplicación, o pulsando `Ctrl` y la tecla de acento grave a la vez. ChatGPT puede leer la salida del terminal actual, así que también puedes pedirle que analice una compilación fallida o un servidor de desarrollo en ejecución.

## Flujo mínimo de verificación

En un proyecto JavaScript, podrías ejecutar por este orden:

```bash
git status --short
pnpm test
pnpm run lint
```

Los comandos cambian de un proyecto a otro. Consulta primero `README.md`, `package.json` o las reglas del proyecto. Incluye en el prompt los comandos ya confirmados:

```text
Después de modificar el proyecto, ejecuta pnpm test y pnpm run lint.
Indica por separado el estado de salida de cada comando. Si alguno falla, no afirmes que la tarea está terminada.
```

Para aceptar el trabajo, registra al menos qué se ejecutó, si terminó correctamente, el primer error significativo de cada fallo y qué comprobaciones no llegaron a ejecutarse.

## Cómo tratar los procesos largos

Un servidor de desarrollo permanece en ejecución; eso no significa que el comando esté bloqueado. Después de iniciarlo, comprueba:

- si la salida muestra una dirección local;
- si el navegador puede abrir la página;
- si aparecen después errores de ejecución en el terminal.

Cuando quieras detenerlo, envía una señal de interrupción. No inicies varios servidores solo porque durante un rato no aparezca salida nueva.

## Actions reutilizables

Si ejecutas a menudo el mismo comando, puedes definir una Action en el entorno local. Aparecerá como un atajo en la aplicación de escritorio y se ejecutará en el terminal integrado. Es adecuada para comprobaciones de bajo riesgo, como `test`, `lint` y `build`; no debe ocultar despliegues de producción ni operaciones de limpieza de bases de datos.

## Límites de seguridad

- No pegues secretos de producción en conversaciones ni en el historial del terminal.
- Si no entiendes un comando, pide antes que te expliquen su objetivo, alcance y forma de revertirlo.
- No repitas a ciegas comandos de borrado, migración o despliegue en producción.
- Que el terminal permita ejecutar un comando no significa que la operación tenga autorización de la organización.

La documentación oficial cita comandos habituales como `git status`, `git pull --rebase`, pruebas y lint. Para este proyecto, su propia documentación debe ser la fuente definitiva de los comandos.

## Fuentes oficiales

- [Terminal integrado](https://learn.chatgpt.com/docs/integrated-terminal)
- [Entornos locales](https://learn.chatgpt.com/docs/environments/local)

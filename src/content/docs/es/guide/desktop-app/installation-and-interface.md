---
title: Instalación y primeros pasos
description: Conoce proyectos, conversaciones, Codex y la revisión en la aplicación de escritorio de ChatGPT.
legacyVerification:
  status: "verified"
  products: "App"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: "080436d"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 10
reviewed_at: 2026-10-25
---
Este capítulo está dirigido a quienes abren por primera vez la aplicación de escritorio de ChatGPT. El objetivo no es memorizar todos los botones, sino completar **una tarea pequeña que se pueda revisar y verificar**.

Para instalar la aplicación e iniciar sesión, consulta [Instalar la aplicación de escritorio](/es/guide/getting-started/install-desktop-app/). La versión oficial está disponible actualmente para macOS, Windows y Linux. Tras iniciar sesión, puedes abrir una conversación, crear un proyecto o abrir una carpeta local.

## Tres elementos que debes conocer primero

| Elemento | Para qué sirve | Primer paso para principiantes |
|---|---|---|
| Proyecto o carpeta | Proporciona archivos y un directorio de trabajo a la conversación | Abrir un repositorio de práctica, no un directorio de producción |
| Conversación | Conserva el objetivo, el contexto, el progreso y el resultado | Usar una conversación para cada objetivo claro |
| Codex | Lee, modifica y verifica el contenido del proyecto | Empezar con un cambio pequeño, de bajo riesgo y fácil de comprobar |

La interfaz seguirá cambiando, pero estos tres elementos son más estables que la posición de un botón concreto.

## Completa tu primera tarea real

Prepara un repositorio Git existente. Primero comprueba que no contiene cambios sin registrar que necesites conservar. Después abre esa carpeta en la aplicación y empieza una conversación con Codex.

Escribe:

```text
Lee primero README.md y modifica solo la sección «Ejecución local»:
1. Corrige el comando de inicio que ha dejado de funcionar.
2. Conserva intactas las demás secciones.
3. Muestra el diff y ejecuta los comandos de verificación documentados
   que puedan ejecutarse.
4. Si no puedes verificarlo, explica por qué; no afirmes que está terminado.
```

Cuando termine, no te quedes solo con el resumen de la conversación. Comprueba también:

1. si el panel de revisión muestra únicamente los archivos esperados;
2. si las eliminaciones de contenido están justificadas;
3. si la salida del terminal respalda realmente la conclusión de que la verificación pasó;
4. si `git diff` coincide con el alcance de la tarea.

## Cómo elegir entre Chat, Work y Codex

- Para preguntar algo o comentar una idea, usa Chat.
- Para tareas generales que abarcan archivos y herramientas, usa Work.
- Para comprender, modificar y probar un repositorio, usa Codex.

Si solo quieres hacer una pregunta puntual que no necesita contexto duradero, puedes usar Quick chat. Mantén el trabajo que requiere seguimiento en una conversación normal o en un proyecto.

## Qué comprobar primero si algo falla

- **No ves los archivos**: confirma que abriste la carpeta correcta y que no se rechazó el acceso necesario.
- **No se puede ejecutar un comando**: confirma que las dependencias están instaladas y consulta el primer error real del terminal.
- **Se mezclan cambios anteriores**: usa `git status` para distinguir los cambios previos a la tarea de los nuevos.
- **La interfaz no coincide con esta página**: busca los elementos lógicos «proyecto/carpeta, conversación, revisión y terminal», sin depender de posiciones fijas en una captura de pantalla.

Después, lee [Diferencias, comentarios y revisión](/es/guide/desktop-app/diffs-comments-and-review/) y [Terminal integrado](/es/guide/desktop-app/integrated-terminal/).

## Fuentes oficiales

- [Aplicación de escritorio de ChatGPT](https://learn.chatgpt.com/docs/app)
- [Revisión de código](https://learn.chatgpt.com/docs/code-review)

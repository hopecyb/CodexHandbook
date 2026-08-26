---
title: Trabajar con archivos
description: Haz que Codex lea y escriba archivos dentro de un alcance explícito.
locale: es
source_locale: zh-CN
source_revision: 7920b62
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

## Objetivo de este paso

Indica el nombre del archivo y completa una edición controlada.

A partir de aquí, la Tarea pasa de «solo chat» a «hacer que mueva archivos de verdad»; el foco pasa de explicar el objetivo a controlar el alcance.

## Ejercicio

```text
Edita solo hello.md: añade al inicio una línea de comentario con la fecha de hoy.
No cambies otros archivos ni ejecutes comandos.
Al terminar, enumera las líneas que modificaste.
```

Revisa el diff antes de aceptar. Relacionado: [Contexto de archivos y carpetas](/es/guide/context/file-and-folder-context/)

## Puntos clave del ejercicio

Aquí importan tres cosas:

- Indicar qué archivo se puede cambiar
- Indicar qué acciones extra no hacer
- Pedir que explique los cambios al terminar

Juntas, son la capacidad básica de «edición controlada».

## Malentendidos frecuentes

### 1. Cambiar un archivo pequeño no tiene sentido

Cuanto menor es el alcance, más fácil ver si se ha salido de los límites.

### 2. Si escribes el nombre del archivo, seguro que no toca nada más

Tampoco puedes darlo por sentado.

Por eso hay que combinarlo con la revisión del diff.

La primera vez que se mueven archivos, lo importante no es cuánto se cambia, sino que el límite del cambio sea claro y fácil de comprobar.

Siguiente: [Dar Tareas claras](/es/guide/learning-paths/beginner/03-give-clear-tasks/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Contrastado con los capítulos ya verificados de contexto de archivos y carpetas, revisión de resultados y ruta para principiantes; el contenido se limita al método estable de «una edición controlada en un alcance explícito».  
**Última verificación:** 2026-07-26

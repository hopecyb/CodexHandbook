---
title: "Trabajar con archivos"
description: "Añade una sola línea al archivo indicado y comprueba el cambio real."
contentType: "path"
audiences: ["beginner"]
level: "beginner"
editorialStatus: "review"
sidebar:
  order: 20
verification:
  kind: "editorial"
  checkedAt: "2026-09-18"
  summary: "Ya están completos los materiales fijos y el resultado de referencia del autor. Se ejecutó el script de operaciones con archivos en un directorio temporal, pero aún no se ha realizado una prueba independiente con un modelo ni con lectores."
  evidence:
    - label: "Registro de operaciones con archivos del autor"
      href: "/downloads/first-project/validation/record.json"
prev:
  link: "/es/guide/learning-paths/beginner/01-talk-to-codex/"
  label: "Hablar con Codex"
next:
  link: "/es/guide/learning-paths/beginner/03-give-clear-tasks/"
  label: "Dar tareas claras"
locale: es
source_locale: zh-CN
source_revision: "ec5c2d3"
translation_status: draft
translated_at: 2026-09-20
---

## Requisitos previos

Has completado el primer paso y `work` aún contiene los tres archivos originales. Conserva `starter` fuera del directorio de trabajo como referencia inicial.

## Hacer una edición verificable

```text
Añade el siguiente comentario de estado solo en la primera línea de notice.md:
<!-- 状态：练习草稿，未发布 -->
Conserva el texto original carácter por carácter. No modifiques otros archivos ni crees archivos nuevos.
Al terminar, indica dónde hiciste el cambio. No publiques ni envíes notificaciones.
```

Compara el archivo línea por línea con el original en la vista de diferencias de tu cliente o en un editor. Aquí solo se pide un cambio pequeño; no hace falta añadir un proceso de «planificar primero y confirmar cada paso».

## Criterios de finalización

Solo ha cambiado notice.md y se ha añadido exactamente una línea de comentario; los otros dos archivos siguen iguales. Compáralo con el [resultado del segundo paso](/downloads/first-project/references/step-2-notice.md). El comentario puede quedar oculto al renderizar Markdown, así que examina el archivo sin renderizar.

Si el modelo cambia el texto, restaura notice.md desde el original en `starter` y repite este paso. Restaura solo este archivo del ejercicio; no reinicies todo el proyecto. Consulta [Deshacer y recuperar](/es/guide/getting-started/undo-and-recover/).

[Paquete del ejercicio y preparación](/es/guide/learning-paths/beginner/)

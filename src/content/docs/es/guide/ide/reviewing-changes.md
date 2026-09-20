---
title: Revisar cambios en el IDE
description: Comprueba las diferencias junto al código fuente y revisa el árbol de trabajo con un reviewer de solo lectura.
locale: es
source_locale: zh-CN
source_revision: a6badd5
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 70
---

El IDE permite leer rápidamente el resumen junto al código fuente y examinar un diff concreto, pero que un cambio aparezca en el editor no significa que haya superado la aceptación. Primero comprueba las diferencias, luego ejecuta las pruebas y, por último, decide qué cambios conservar.

## Realizar una revisión local

1. Lee el resumen del resultado, pero no lo uses como sustituto del diff.
2. Despliega las líneas modificadas y comprueba todos los archivos afectados.
3. Conserva los cambios necesarios y pide que se corrija lo que quede fuera del alcance.
4. Ejecuta `/review` en el cuadro de entrada.
5. Elige entre comparar con una rama base o revisar los cambios sin confirmar.
6. Ejecuta las pruebas y los análisis estáticos del proyecto en el terminal del IDE.
7. Comprueba de nuevo el estado final con las herramientas de Git.

`/review` solo aparece cuando el proyecto abierto pertenece a un repositorio Git. Presenta los problemas por orden de prioridad y no modifica el árbol de trabajo. En el IDE puedes elegir:

- **Review against a base branch**: compara la rama actual con la rama base seleccionada.
- **Review uncommitted changes**: examina los cambios actuales del árbol de trabajo.

Los resultados aparecen en el chat actual de forma predeterminada. Establece `chatgpt.reviewDelivery` en `detached` para abrir un chat de revisión independiente.

## Ejemplo: dar criterios claros al reviewer

```text
Revisa los cambios actuales sin confirmar. Prioriza los defectos que puedan causar comportamientos erróneos, pérdida de datos o problemas de seguridad.
Ignora las preferencias puramente estilísticas. Cada hallazgo debe incluir la ubicación concreta del archivo, la condición que lo desencadena y un efecto verificable.
Si no encuentras problemas, indica qué pruebas siguen faltando.
```

## Lista de comprobación

- [ ] Los archivos modificados se ajustan al alcance permitido para la tarea.
- [ ] No hay eliminaciones imprevistas, formato aplicado a archivos completos ni archivos sensibles.
- [ ] Se han cubierto las rutas de error y los casos límite.
- [ ] Las pruebas, lint y comprobaciones de tipos exigidas por el proyecto pasan.
- [ ] Los hallazgos de alta prioridad del reviewer se han corregido o se ha aceptado expresamente el riesgo.
- [ ] Los resultados de `git diff --check` y `git status --short` son los esperados.

Si necesitas comentar línea por línea, preparar cambios o revertir un hunk, usa [Diferencias, comentarios y revisión](/es/guide/desktop-app/diffs-comments-and-review/). Para el método general, consulta [Revisar diferencias](/es/guide/quality/review-diffs/).

## Fuentes oficiales

- [Revisión de código](https://learn.chatgpt.com/docs/code-review)
- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)

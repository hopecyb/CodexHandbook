---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página solo describe cómo escribir aceptación y criterios de finalización; se han revisado los enlaces internos y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Definir criterios de finalización
description: Escribe condiciones de finalización comprobables.
locale: es
source_locale: zh-CN
source_revision: 'e97e854'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

Al formular una tarea, mucha gente dice «qué quiero» pero no «hasta qué punto cuenta como terminado». Al final, solo puedes juzgar a ojo.

Los criterios de finalización son, en la práctica, cómo vas a verificar el resultado.

Los criterios de aceptación deben ser **observables**:

- Mal: «mejora la calidad del código»
- Bien: «`npm test` pasa; el componente `Button` soporta `disabled`; la captura de Storybook coincide con el diseño»

## Por qué tantas tareas no dejan claro si están terminadas

A menudo se mezclan objetivo y criterios de finalización.

- **Objetivo:** qué resultado quieres
- **Criterios de finalización:** cómo confirmas que ese resultado se alcanzó de verdad

Por ejemplo, «arregla este bug» es el objetivo;  
«puedes reproducir de forma estable la corrección, pasan los tests relacionados y no hay nuevos errores en consola» se acerca más a criterios de finalización.

## Ideas erróneas habituales

### 1. Si el resultado «se parece», ya está terminado

En tareas pequeñas es fácil enterrar problemas. «Se parece» suele omitir tests, casos límite y efectos secundarios.

### 2. Criterios de finalización = unas frases de elogio al resultado

Deben ser comprobables, no un discurso de cierre.

### 3. Que el build pase equivale a terminado

No necesariamente.

Que el build pase suele ser solo un punto de control; no implica:

- que la función sea correcta
- que el alcance no se haya excedido
- que el texto encaje con el lector
- que las fuentes se hayan verificado

## Una redacción habitual

Si no sabes cómo escribirlo, elige entre estas 3 categorías:

- **Comprobación funcional:** ¿el comportamiento coincide con lo esperado?
- **Comprobación técnica:** ¿pasan build / tests / lint?
- **Comprobación de alcance:** ¿solo se cambió lo acordado?

Por ejemplo:

```text
Criterios de aceptación:
- solo el texto de la página de inicio de la documentación; sin cambiar el diseño ni los componentes
- `pnpm build` pasa
- el texto de la primera pantalla es comprensible para principiantes; no asume jerga
```

## Método de juicio

Tras escribirlo, pregúntate:

> **Si se lo das a otra persona, ¿puede decidir con esto «pasa» o «no pasa»?**

Si no, casi seguro sigue siendo demasiado vago.

Al final, no dejes que «¿cuenta como terminado?» dependa de adivinar.

Incluye los comandos de verificación en los criterios para que el Agent tenga más probabilidad de ejecutarlos: [Ejecutar tests](/es/guide/quality/)

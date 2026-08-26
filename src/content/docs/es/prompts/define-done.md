---
title: Definir el terminado
description: Escribe condiciones de terminado comprobables.
locale: es
source_locale: zh-CN
source_revision: b9d3ef1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Al formular una tarea, mucha gente dice «qué quiero» pero no «hasta qué punto cuenta como terminado». Al final, solo puedes juzgar a ojo.

Los criterios de terminado son, en la práctica, cómo vas a verificar el resultado.

Los criterios de aceptación deben ser **observables**:

- Mal: «mejora la calidad del código»
- Bien: «`npm test` pasa; el componente `Button` soporta `disabled`; la captura de Storybook coincide con el diseño»

## Por qué tantas tareas no dejan claro si están terminadas

A menudo se mezclan objetivo y criterios de terminado.

- **Objetivo:** qué resultado quieres
- **Criterios de terminado:** cómo confirmas que ese resultado se alcanzó de verdad

Por ejemplo, «arregla este bug» es el objetivo;  
«puedes reproducir de forma estable la corrección, pasan los tests relacionados y no hay nuevos errores en consola» se acerca más a criterios de terminado.

## Ideas erróneas habituales

### 1. Si el resultado «se parece», ya está terminado

En tareas pequeñas es fácil enterrar problemas. «Se parece» suele omitir tests, casos límite y efectos secundarios.

### 2. Criterios de terminado = unas frases de elogio al resultado

Deben ser comprobables, no un discurso de cierre.

### 3. Que el build pase equivale a terminado

No necesariamente.

Que el build pase suele ser solo un punto de control; no implica:

- que la función sea correcta
- que el alcance no se haya excedido
- que el copy encaje con el lector
- que las fuentes se hayan verificado

## Una redacción habitual

Si no sabes cómo escribirlo, elige entre estas 3 categorías:

- **Comprobación funcional:** ¿el comportamiento coincide con lo esperado?
- **Comprobación técnica:** ¿pasan build / tests / lint?
- **Comprobación de alcance:** ¿solo se cambió lo acordado?

Por ejemplo:

```text
Criterios de aceptación:
- solo el copy de la home de docs; no layout ni componentes
- `pnpm build` pasa
- el copy de la primera pantalla es comprensible para principiantes; no asume jerga
```

## Método de juicio

Tras escribirlo, pregúntate:

> **Si se lo das a otra persona, ¿puede decidir con esto «pasa» o «no pasa»?**

Si no, casi seguro sigue siendo demasiado vago.

Al final, no dejes que «¿cuenta como terminado?» dependa de adivinar.

Incluye los comandos de verificación en los criterios para que el Agent tenga más probabilidad de ejecutarlos: [Ejecutar tests](/es/guide/verification/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe cómo escribir aceptación y criterios de terminado; se han revisado los enlaces internos y el cuerpo no depende de hechos volátiles del producto.

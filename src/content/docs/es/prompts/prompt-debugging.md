---
title: Depuración de Prompts
description: Cómo localizar problemas del Prompt cuando el resultado se desvía.
locale: es
source_locale: zh-CN
source_revision: 9b92e1f
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Cuando el resultado no encaja, las causas habituales son:

- el objetivo no se escribió como resultado comprobable
- las restricciones no están claras
- el contexto está incompleto o desactualizado
- la tarea es demasiado grande y no pediste un plan primero

La depuración de Prompts consiste en encontrar qué capa de información falta.

## Localiza primero dónde está el problema

Si el resultado se desvía, no hace falta rehacerlo todo de inmediato. Localizar la capa suele ahorrar trabajo:

1. ¿objetivo poco claro?
2. ¿alcance fuera de control?
3. ¿contexto insuficiente?
4. ¿tarea demasiado grande?
5. ¿o la ruta de herramientas ya estaba mal elegida?

## Cuando el resultado falla, pregunta en orden:

1. ¿El objetivo es comprobable?
2. ¿Las restricciones están claras? ¿El Agent las vio?
3. ¿El contexto está desactualizado o en conflicto? (compactación / hilo antiguo)
4. ¿Había que pedir un plan primero?
5. ¿Se eligió mal la herramienta? (buscó en la red cuando no debía)

## Qué mira cada punto

### 1. Si el objetivo es comprobable

Si el objetivo es vago («optimízalo un poco»), la desviación es habitual.

### 2. Si las restricciones están claras

Muchos «se pasó de la raya» no vienen de que no sepa hacerlo, sino de que no dijiste «hasta dónde solo».

### 3. Si el contexto está desactualizado o en conflicto

Sobre todo en hilos largos:

- antes dijiste A
- luego añadiste B
- ahora tiene un estado mezclado

### 4. Si había que pedir un plan primero

Con tareas grandes, ejecutar directo suele desviarse más que planificar primero.

### 5. Si se eligió mal la herramienta

Por ejemplo: querías foco en código local y se fue a buscar en la red; o pedías investigación con citas y respondió de memoria.

## Ideas erróneas habituales

### 1. Si el resultado falla, todo el Prompt está muerto

A menudo basta con un pequeño complemento:

- aclarar la aceptación
- reducir el alcance
- pedirle un plan primero

### 2. Depurar es alargar el Prompt cada vez más

A veces hace falta quitar ruido y dejar solo los límites críticos.

### 3. Cuanto más largo el hilo, mejor, porque hay más contexto

En hilos muy largos, restricciones antiguas, información obsoleta y restos tras la compactación pueden interferir.

## Un orden de remediación suficiente

Para recuperar el rumbo:

1. Reescribe el objetivo para que sea comprobable
2. Añade «solo cambia dónde / no toques dónde»
3. Si la tarea es grande, exige un plan primero
4. Si sigue caótico, reduce a un solo archivo o a un único fallo reproducible
5. Si no, abre un hilo nuevo y reafirma los límites críticos

El núcleo de depurar Prompts es encontrar qué capa de información clave no se transmitió bien, no seguir complicando el texto.

Si sigue fallando, reduce a un fallo en un solo archivo o abre un hilo nuevo y reafirma las restricciones.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe el enfoque de depuración de Prompts; se han revisado enlaces y el orden de depuración, y el cuerpo no depende de hechos volátiles del producto.

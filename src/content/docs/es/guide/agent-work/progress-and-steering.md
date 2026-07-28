---
title: Progreso y reorientación
description: Si a mitad de la ejecución la dirección se desvía, cómo recuperar a Codex con instrucciones cortas.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Las reacciones habituales a mitad de la ejecución suelen ser solo dos:

- No decir nada y dejar que siga desviándose
- Un «para, empieza todo de cero»

La práctica más habitual es **reorientar** de forma continua durante la ejecución: conservar lo que ya está bien y corregir solo lo que se ha desviado.

## Qué hace la reorientación

Aquí «reorientación» es complementar cómo debe ir el paso actual, por ejemplo:

- Qué parte está bien: conservar
- Qué parte empieza a desviarse: no seguir
- Qué paso priorizar a continuación

## Qué es «reorientación»

La reorientación es un **ajuste local de rumbo** sobre el estado de ejecución actual.

Suele hacerte falta cuando:

- Entendió el objetivo, pero el orden de pasos no es ideal
- Ya hizo bien la mitad y no quieres tirarlo todo
- Acabas de añadir información nueva y hay que ajustar lo siguiente
- Ves que está a punto de entrar en un refactor o ampliación innecesaria

## La plantilla más usada

La reorientación a mitad de camino puede ser muy corta:

```text
Párate en el paso actual. Conserva A y B; deshaz la dirección de cambio sobre C; el siguiente paso solo haz D. No empieces E.
```

Este tipo de instrucción tiene cuatro piezas clave:

1. Dónde parar
2. Qué conservar
3. Qué abandonar
4. Qué hacer solo en el siguiente paso

## Errores habituales

### 1. Si se desvía, ¿hay que pararlo todo y empezar de cero?

Si ya tiene la mitad bien, tirarlo todo suele significar:

- Tienes que volver a explicar el contexto
- También pierdes lo ya alineado
- La nueva ronda puede desviarse otra vez

### 2. Si solo digo «está mal», ¿debería saber dónde está mal?

Suele no bastar.

Es más eficaz señalar con claridad:

- Qué conservar
- Qué abandonar
- Qué priorizar ahora

### 3. ¿Reorientación y replanificar son lo mismo?

- **Reorientación**: la ruta es básicamente correcta; solo corrección local
- **Replanificar**: el objetivo, la premisa o el alcance de impacto ya cambiaron

## Por qué la corrección a pequeños pasos es más eficaz

| Corrección a pequeños pasos | Tirar y empezar de cero |
|---|---|
| Conserva el trabajo ya alineado | También se pierde lo que estaba bien |
| Ahorra más contexto | Hay que volver a explicar el fondo |
| Es más fácil controlar el alcance | Fácil volver a derivar |
| Se parece más a colaboración real | Se parece más a volver a hacer el pedido |

## Cuándo reorientar primero y cuándo volver a planificar

Puedes juzgar así:

- **Solo orden incorrecto, alcance demasiado grande o forma de salida incorrecta**: reorienta primero
- **Cambió el objetivo, la premisa o la superficie de impacto**: vuelve a planificar

## Tres formas habituales de reorientar

### 1. Reducir alcance

Cuando empieza a hacer demasiado:

```text
Trata solo la página de login; no amplíes a registro ni a recuperación de contraseña.
```

### 2. Cambiar el orden

Cuando lo que hace no está mal, pero el orden no encaja:

```text
Completa primero la verificación y los tests; luego sigue cambiando la implementación.
```

### 3. Cambiar la forma de salida

Cuando quieres ver análisis antes de aterrizar:

```text
Primero no cambies archivos. Dame una tabla comparativa de la diferencia entre el enfoque actual y el que propones.
```

## Qué debería incluir una buena reorientación

- Dónde parar ahora
- Qué conservar
- Qué dirección no seguir
- La nueva prioridad
- Si se permite seguir ejecutando

Esta frase queda bastante clara:

```text
Conserva tu diagnóstico de la causa, pero no entres aún al refactor. El siguiente paso solo: un arreglo mínimo y pasos de verificación.
```

## Cuándo volver a «replanificar»

La reorientación sirve para desviaciones locales, pero en estos casos conviene más volver a [Planificación](/guide/agent-work/planning/):

- El objetivo de la tarea en sí cambió
- Nueva información anula la premisa anterior
- El alcance de impacto se amplió de forma clara
- Ya has corregido dos o tres veces seguidas y sigue derivando

Si el problema ya no es una desviación local, vuelve directamente a la fase de planificación.

## Errores frecuentes

- Solo decir «está mal», sin decir dónde
- Dejar que «decida cómo arreglarlo» sin dar prioridad
- Solo quieres pausar un paso, pero usas palabras que disparan un rehacer completo
- Ya es una tarea nueva y aún intentas empujarla con una frase de complemento

Cuando detectas desviación en la ejecución, puedes usar una instrucción corta que diga «qué conservar, qué parar, qué hacer solo en el siguiente paso».

## Combinaciones recomendadas

- Necesitas aclarar primero la ruta de ejecución: ver [Planificación](/guide/agent-work/planning/)
- Necesitas escribir el flujo como cadena principal completa: ver [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/)
- Necesitas delegar la tarea a otros: ver [Subagents](/guide/agent-work/subagents/)
- Continuar tras interrumpir la tarea: ver [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/)


---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con las descripciones actuales de OpenAI Developers sobre tareas largas, verificación y avance por pasos, y con los capítulos ya verificados de planificación, calidad y contexto de este manual; esta página solo conserva el principio estable de colaboración «corrección local mejor que tirar un tramo entero».  
**Última verificación:** 2026-07-26

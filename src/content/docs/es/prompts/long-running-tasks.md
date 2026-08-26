---
title: Prompts para tareas largas
description: Dividir en fases, checkpoints e información de traspaso.
locale: es
source_locale: zh-CN
source_revision: b8e9c9b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Las formas habituales de fallar en tareas largas:

- hacer demasiado de un golpe
- sin checkpoints intermedios
- el hilo se alarga y las restricciones anteriores empiezan a chocar

Lo importante no es alargar el Prompt, sino dividir la tarea en una cadena de fases pequeñas con checkpoints.

Divide la tarea larga en fases; cada una con aceptación:

```text
Fase 1: solo investigar y listar opciones (sin cambiar código)
Fase 2: implementar el cambio mínimo
Fase 3: añadir tests y ejecutar……
Al final de cada fase, para y espera mi confirmación.
```

## Por qué las tareas largas se desvían con facilidad

Suelen mezclar varios tipos de trabajo:

- entender el problema
- diseñar la solución
- implementar cambios
- ejecutar verificación
- escribir el traspaso

Si todo va en un solo «hazlo de una vez», el riesgo sube con claridad.

## Malentendidos habituales

### 1. Una tarea larga no es solo una corta más detallada

Necesita **gestión por fases**, no solo más contexto.

### 2. Listar las fases no basta

Cada fase debería tener una salida clara, por ejemplo:

- solo propuesta, sin código
- solo implementación mínima
- solo tests y verificación

### 3. Insistir en un solo hilo hasta el final no siempre es mejor

Cuando la tarea es muy larga, traspasar, resumir y reabrir el hilo suele ser más claro.

## Un enfoque de fases suficiente

Ante una tarea larga, empieza por estas 4:

1. Investigación: entender el problema, sin actuar
2. Plan: pasos, riesgos, verificación
3. Ejecución: cambio mínimo
4. Verificación: checks, conclusión, preparar el traspaso

## Una redacción más práctica

```text
Fase 1: investiga y lista opciones; no cambies código; espera mi confirmación
Fase 2: solo el cambio mínimo; al terminar, informa el impacto
Fase 3: añade verificación y ejecuta los checks relevantes
Fase 4: resume cambios, riesgos y siguientes pasos
```

Lo más adecuado es poder parar a comprobar en cada tramo, no terminarlo de un golpe.

Complementos: [Progreso y reorientación](/es/guide/agent-work/progress-and-steering/) · [Traspaso y reanudación](/es/guide/agent-work/handoff-and-resume/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe cómo dividir tareas largas y el traspaso; se han revisado enlaces y ejemplos de fases, y el cuerpo no depende de hechos volátiles del producto.

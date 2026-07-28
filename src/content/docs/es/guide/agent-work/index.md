---
title: Trabajo con Agent
description: Haz que Codex trabaje como un ejecutor colaborativo, no como una máquina de respuestas de un solo tiro.
sidebar:
  order: 31
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El trabajo con Agent se centra en cómo llevar una tarea hasta un **estado de finalización verificable**. Cuándo planificar primero, cuándo dividir subtareas, cuándo corregir a mitad de camino y cuándo hacer un traspaso y retomar: eso es lo que trata este capítulo.

Este capítulo habla de formas de colaboración, no de una función aislada.

Lo difícil de muchas tareas no es formular el requisito, sino llevarlo hasta «realmente terminado y comprobable».

## De qué habla este capítulo

- Cuando la tarea es compleja, cómo condensarla primero en un plan
- Si al ejecutar se desvía, cómo corregir a pequeños pasos
- Qué subproblemas merece la pena delegar a un subagent
- Tras interrumpir una tarea larga, cómo hacer el traspaso y retomar

## Orden de lectura recomendado

1. [Planificación](/guide/agent-work/planning/)
2. [Progreso y reorientación](/guide/agent-work/progress-and-steering/)
3. [Subagents](/guide/agent-work/subagents/)
4. [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/)

## Un marco habitual

El trabajo con Agent se puede ver como cuatro acciones encadenadas:

```text
entender primero → planificar → corregir durante la ejecución → traspaso / cierre
```

Si falta cualquiera de los pasos intermedios, las consecuencias habituales son:

- Sin entender: se cambia en la dirección equivocada
- Sin plan: a mitad de camino descubres que el alcance se descontroló
- Sin corregir: cada arreglo te desvía más
- Sin traspaso: tras cortar una tarea larga, nadie sabe hasta dónde llegó

## Malentendidos habituales

### 1. Trabajo con Agent = escribir el prompt un poco más largo

No basta.

El Prompt es solo el punto de partida; lo que realmente determina la calidad de la tarea también incluye:

- Si hay un plan
- Si hay corrección a mitad de camino
- Si se separaron las partes complejas
- Si quedó un estado que se puede continuar

### 2. Cambiar de dirección a mitad de camino significa que lo anterior fue en vano

A menudo, ir cerrando el alcance mientras se ejecuta es la forma normal de trabajar; no hace falta fingir que la primera formulación ya lo decía todo bien.

### 3. Dividir en subagents siempre es más eficiente

No siempre.

Si los límites no están claros, cuantas más subtareas, más caótico queda el hilo principal.

## Relación de este capítulo con otros

- Necesitas el flujo principal completo: ver [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/)
- Necesitas formular bien la tarea: ver [Prompts](/prompts/)
- Necesitas gestionar el contexto: ver [Contexto](/guide/context/)
- Necesitas varios agentes / tareas en paralelo: ver [Agents en paralelo](/guide/desktop-app/parallel-agents/) y [Coordinación multi-agent](/cases/workflows/multi-agent-coordination/)

## Empieza por este flujo mínimo

Si solo quieres sacar la tarea adelante con lo básico, puedes seguir estos 4 pasos:

1. Formula la tarea con claridad
2. Si es compleja, pídele primero un plan
3. Durante la ejecución, corrige a pequeños pasos según el resultado
4. Antes de cerrar, exige un resultado verificable

Cuando estos 4 pasos te salgan fluidos, aprender subagents y traspaso resultará más natural.

El trabajo con Agent valora más si la tarea puede avanzar de forma continua en la dirección correcta a través de planificar, ejecutar, corregir y cerrar.

## Errores habituales

- Tratar al Agent como un buscador y darle solo un objetivo vago
- Creer que «cambiar de opinión a mitad» equivale a tirar todo y empezar de cero
- En una tarea larga, no dejar ningún artefacto de traspaso
- Al dividir subtareas, no dar límites, y que el hilo principal acabe más caótico

## Referencias
- Documentación oficial de OpenAI Codex sobre colaboración y ejecución de tareas
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado párrafo a párrafo con los capítulos ya verificados de este manual sobre planificación, contexto, verificación y colaboración multitarea; esta página solo conserva principios estables del flujo de colaboración y no trata la interfaz o entradas actuales de un cliente concreto como contrato a largo plazo.  
**Última verificación:** 2026-07-26

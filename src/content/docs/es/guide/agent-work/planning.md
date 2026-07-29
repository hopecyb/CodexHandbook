---
title: Planificación
description: Haz que Codex explique primero pasos, riesgos y verificación antes de decidir si ejecutar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Cuando dices directamente «empieza a cambiar», los problemas habituales son:

- La ruta está mal pensada
- El alcance se amplió de más
- Los riesgos no se expusieron a tiempo
- El método de verificación no basta en absoluto

Planificar es sacar primero «cómo piensa hacerlo» para que lo veas.

El sentido de planificar es convertir «yo creía que harías esto» en un **artefacto intermedio revisable**. Sobre todo en tareas complejas, lo que realmente apruebas es una ruta de ejecución, no solo pulsar un botón de «empezar».

## Qué confirmas al pedir un plan primero

Cuando pides a Codex «primero un plan», en realidad confirmas dos cosas:

- Si ha entendido de verdad tu objetivo
- Si la ruta que quiere seguir es una que estás dispuesto a asumir

## Qué debe incluir al menos un plan válido

| Elemento | Función |
|---|---|
| Pasos | Que la tarea tenga orden, no que se lance a hacer todo a la vez |
| Archivos o alcance implicados | Exponer de antemano la superficie de impacto |
| Riesgos y puntos por confirmar | Evitar tratar hipótesis como hechos |
| Método de verificación | Que «terminado» se pueda demostrar |

Si solo dice «cambia A, luego B», sin riesgos ni verificación, se parece más a una lista de tareas que a un plan de verdad.

## Errores habituales

### 1. ¿Un plan es solo listar pasos?

Un plan realmente útil también debe decirte al menos:

- Qué archivos o zonas afecta
- Dónde hay incertidumbre
- Cómo demostrar al terminar que de verdad está hecho

### 2. Las tareas pequeñas nunca necesitan planificación

Tampoco es absoluto. Algunas tareas, aunque el cambio sea pequeño, si:

- No conoces bien el repositorio
- Implican permisos o aprobación
- Si se desvía, cuesta mucho recuperar

entonces sigue valiendo la pena parar un momento y que lo explique antes de tocar nada.

### 3. ¿Pedir un plan primero es solo un trámite?

Solo si de verdad lo revisas. Si pides un plan y no miras alcance, riesgos ni verificación, ese paso se vuelve formal; pero si con él detectas desviaciones pronto, suele haber mucho menos retrabajo.

## Cuándo hay que planificar primero

- Implica varios archivos o módulos
- No conoces bien el repositorio
- Necesitas aprobación humana antes de ejecutar
- El cambio puede afectar comportamiento en producción o reglas de colaboración del equipo
- Ya sientes que «si esto se tuerce, será difícil de arreglar»

Un cambio pequeño de redacción puede no necesitar un plan formal, pero en tareas medianas o grandes conviene parar primero.

## Cómo decidir si no estás seguro

Si no sabes si planificar primero, pregúntate:

> **Si ahora empieza a hacerlo directamente y se desvía, ¿me costará mucho recuperarlo?**

Si la respuesta es «sí», pide el plan primero.

## Forma recomendada de pedir un plan

Pide primero el plan a Codex, no que empiece a trabajar:

```text
Primero no cambies archivos. Da un plan basado en el repositorio actual, con:
1. Comprensión del objetivo
2. Pasos numerados
3. Archivos implicados
4. Riesgos o puntos por confirmar
5. Cómo verificar cada paso
```

Una formulación más completa está en [Pedir un plan](/prompts/ask-for-a-plan/).

## Qué revisas

Al mirar el plan, no te quedes en «¿suena bien?»; mira estas preguntas:

1. ¿Ha entendido el objetivo real?
2. ¿Es razonable el alcance de impacto?
3. ¿Se saltó comprobaciones previas obvias?
4. ¿El método de verificación basta para demostrar que está hecho?

Mucho retrabajo no viene de una mala implementación, sino de haber aprobado un plan difuso.

Mirar el plan primero suele aclarar ruta y riesgos antes de tocar archivos, y con menos coste.

## Cómo dar feedback al plan

No hace falta reescribir el plan entero; basta señalar la desviación:

```text
Conserva el paso 1; no hagas todavía el refactor del paso 2.
Separa el cambio de base de datos en un paso independiente.
Añade un plan de rollback si falla.
Solo análisis de lectura; no entres a implementar.
```

Esta «corrección a pequeños pasos» suele ser más eficiente que «tirar todo y empezar de cero».

## Frontera entre plan y ejecución

Un hábito de colaboración importante es separar ambos:

- **Fase de plan**: se permite explorar, listar opciones y exponer incertidumbre
- **Fase de ejecución**: avanzar por la ruta ya confirmada

Si durante la ejecución cambia la premisa, vuelve al plan; no fuerces. Ver [Progreso y reorientación](/guide/agent-work/progress-and-steering/).

## Errores frecuentes

- El plan no tiene método de verificación
- Pasar del plan a la ejecución sin confirmación
- Meter varios objetivos independientes en el mismo plan
- Cuando hace falta confirmación, solo escribir «ya empiezo»

## Combinaciones recomendadas

- Necesitas la cadena principal completa: ver [Explorar—planificar—ejecutar—verificar](/cases/workflows/explore-plan-execute-verify/)
- Necesitas formular bien el prompt: ver [Pedir un plan](/prompts/ask-for-a-plan/)
- Necesitas corregir a mitad de camino: ver [Progreso y reorientación](/guide/agent-work/progress-and-steering/)
- Necesitas normas a largo plazo: ver [Qué es AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con la forma de trabajo actual de OpenAI Developers para Codex («entender primero, luego planificar, luego ejecutar y verificar») y con los capítulos ya verificados de prompts, calidad y flujos de este manual; el contenido se limita a métodos estables de planificación de tareas y no cita parámetros de versión variables.  
**Última verificación:** 2026-07-26

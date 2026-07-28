---
title: Fundamentos de Prompts
description: Los elementos esenciales de un buen Prompt.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al empezar con Prompts, es fácil centrarse en si la redacción suena «avanzada».  
Para Codex, lo clave es si has dejado claro esto:

- qué quieres exactamente que haga
- hasta dónde puede actuar y qué no debe tocar
- qué cuenta como terminado
- ante la incertidumbre: preguntar primero, investigar primero o parar primero

Un buen Prompt aclara los límites de la tarea; no hace falta escribirlo como un conjuro.

## Contenido

Sirve sobre todo para evitar estos problemas habituales:

- objetivo tan vago que el resultado es solo «optimízalo un poco»
- ámbito no indicado, así que Codex cambia más de lo previsto
- sin criterios de aceptación, al final solo juzgas a ojo
- sin instrucción cuando falta información, así que empieza a adivinar

## Cómo ver un Prompt

Puedes verlo como un ticket de tarea.  
Un ticket aceptable responde al menos a:

- qué hacer
- por qué
- con qué materiales
- qué no tocar
- cómo se ve el «aprobado»

Si eso no está claro, ni las frases más elegantes lo arreglan.

## Tres niveles de escritura (también en la biblioteca de ejemplos)

- **Versión mínima:** cuando el objetivo ya está muy claro
- **Versión recomendada:** objetivo, contexto, entradas, restricciones, aceptación, permisos
- **Versión didáctica:** explica por qué existe cada bloque

## Ideas erróneas habituales

### 1. Cuanto más largo el Prompt, mejor

Lo importante es la relevancia.  
Un bloque largo de contexto irrelevante diluye los límites de verdad.

### 2. Con el objetivo basta; el resto se puede omitir

Solo con el objetivo es fácil olvidar:

- el alcance del cambio
- las restricciones de estilo
- cómo validar
- qué hacer ante la incertidumbre

### 3. El Prompt sirve sobre todo para «enseñar al modelo a pensar»

Para quien empieza, una lectura más útil: el Prompt reduce malentendidos.

## Una estructura mínima suficiente

Si no quieres aprenderlo todo de golpe, empieza con estas 4 líneas:

```text
Objetivo: qué quiero que hagas
Alcance: qué puedes modificar únicamente
Aceptación: cómo se ve el terminado
Ante la incertidumbre: pregunta primero, no adivines
```

Ya es mucho más claro que un «ayúdame a optimizar esto».

## Cuándo usar la versión mínima o la completa

### La versión mínima encaja

- cambio pequeño en un solo archivo
- objetivo muy concreto
- conoces bien el repositorio y la tarea

### La versión recomendada es más segura

- varios archivos
- proyecto desconocido
- riesgo alto
- hace falta aprobación, tests o revisión

Para la mayoría de principiantes, empezar por la **versión recomendada** suele ser más prudente.

El núcleo de un buen Prompt: menos suposiciones, menos desviaciones, menos extralimitación.

Ejemplos: [Primera tarea](/cases/first-task/) y [Anatomía de una tarea](/prompts/task-anatomy/).

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo trata métodos generales de Prompt; se han revisado los enlaces internos y el cuerpo no depende de hechos volátiles (versión del producto, precios, interfaz, etc.).

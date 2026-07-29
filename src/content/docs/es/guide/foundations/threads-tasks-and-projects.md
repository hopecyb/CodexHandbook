---
title: Hilos, Tareas y proyectos
description: Aclara la relación entre sesión, Tarea y espacio de trabajo del proyecto.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

El vocabulario puede variar un poco entre productos; en este handbook lo entendemos así:

- **Proyecto / espacio de trabajo**: la carpeta o la raíz del repositorio a la que Codex está vinculado
- **Hilo / sesión**: una conversación continua; el Contexto se acumula
- **Tarea**: un trabajo con objetivo claro (puede incluir varias llamadas a Herramientas)

Mucha gente mezcla estos términos, y entonces aparecen problemas típicos:

- por qué sigue recordando lo que dijiste antes
- por qué, aunque cambiaste de pregunta, sigue en la dirección antigua
- por qué, «en el mismo proyecto», aún conviene abrir un hilo nuevo

El proyecto decide dónde trabaja; el hilo, a lo largo de qué conversación sigue; la Tarea, qué quieres que haga esta vez. Separar estas tres capas aclara mucho los hábitos de uso.

## Separa primero las tres capas

- **Proyecto / espacio de trabajo**: a qué repositorio o carpeta lo llevas
- **Hilo / sesión**: la conversación continua actual contigo
- **Tarea**: uno de los objetivos concretos dentro de esa conversación

En un mismo proyecto puede haber muchos hilos.  
En un mismo hilo puede haber más de una Tarea.  
El problema suele estar aquí: la Tarea cambió, pero el hilo sigue cargando Contexto viejo.

## Consejos prácticos

- Si cambia el tema, **abre un hilo nuevo** para evitar que el Contexto antiguo interfiera
- En Tareas largas, deja claras etapas y puntos de control; ver [Prompts para Tareas largas](/prompts/long-running-tasks/)
- Si necesitas continuar entre sesiones, haz un resumen de Traspaso; ver [Traspaso y reanudación](/guide/agent-work/handoff-and-resume/)

## Malentendidos frecuentes

### 1. ¿En el mismo repositorio hay que usar siempre el mismo hilo?

No necesariamente.  
Que el repositorio no cambie no significa que la Tarea no haya cambiado.  
Si el tema de la Tarea cambia, el hilo antiguo puede empezar a meter ruido.

### 2. ¿Abrir un hilo nuevo equivale a perder todo el Contexto?

No siempre es malo.  
Muchas veces necesitas precisamente «dejar ir el Contexto irrelevante» y quedarte solo con lo que importa a esta Tarea.

### 3. ¿Tarea e hilo son lo mismo?

No.  
El hilo es como un contenedor; la Tarea es un trabajo concreto dentro de ese contenedor.

El proyecto decide dónde trabaja; el hilo, qué historial recuerda; la Tarea, qué debe completar esta vez.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica la relación en tres capas entre proyecto, hilo y Tarea; se revisaron enlaces internos y formulaciones conceptuales, y el cuerpo no depende de hechos de producto volátiles.  
**Última verificación:** 2026-07-26

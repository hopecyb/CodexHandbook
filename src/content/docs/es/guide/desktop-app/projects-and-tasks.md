---
title: Proyectos y Tareas
description: Gestionar proyectos y Tareas en la App.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

«Proyecto» y «Tarea» parecen simples, pero la primera vez es fácil mezclarlos. El proyecto es el conjunto de archivos o el repositorio con el que trabajas; la Tarea es lo concreto que le pides a Codex en esta ocasión.

Por ejemplo:

- El repositorio de tu sitio de documentación → proyecto
- «Haz más claros los términos de la página de inicio» → Tarea

Estos conceptos importan porque en la App de escritorio siempre coexisten dos niveles:

- En qué proyecto estás trabajando ahora
- Qué le pides exactamente esta vez

## Proyecto

- Añade un directorio de práctica o la raíz del repositorio
- Concéntrate en un proyecto a la vez para no mezclar Contexto

El «proyecto» es el **lugar de trabajo** de esta colaboración.  
Si el lugar es incorrecto, muchos problemas posteriores se desvían con él.

## Tarea

- Arranca la Tarea con un Prompt completo
- Observa el plan y las llamadas a herramientas
- Aprueba o rechaza cuando haga falta

La «Tarea» es el **encargo concreto** de esta ocasión.  
Cuanto más claro sea el encargo, menos tendrá que adivinar Codex mientras trabaja.

Comparación de conceptos: [Hilos, Tareas y proyectos](/guide/foundations/threads-tasks-and-projects/)

## Malentendidos frecuentes

### 1. ¿Por qué hay que elegir primero el proyecto y no preguntar directamente?

Porque Codex necesita saber sobre qué archivos o repositorio trabaja esta vez.

Si eliges mal el proyecto, aparecen más preguntas del tipo «¿por qué no ve los archivos?» o «¿por qué cambió otra cosa?».

### 2. ¿Puede haber muchas Tareas en un mismo proyecto?

Sí.  
Lo más estable es:

- En el mismo proyecto
- Una Tarea clara cada vez
- Al terminar, abrir la siguiente

Así es menos probable mezclar el Contexto.

### 3. ¿Cómo conviene formular la Tarea al empezar?

Incluye, en la medida de lo posible, estos tres tipos de información:

- Objetivo
- Alcance / restricciones
- Criterio de finalización

### 4. ¿Una necesidad grande debe ir en una sola Tarea?

Si el alcance es muy amplio, suele ser más seguro:

- Mantener el mismo proyecto
- Dividir en varias Tareas
- Que cada Tarea resuelva un objetivo concreto

## Orden habitual

La primera vez que trabajes en la App de escritorio, puedes seguir este orden:

1. Confirma que el proyecto es el correcto
2. Confirma que el objetivo de la Tarea habla de una sola cosa principal
3. Añade el alcance y el criterio de finalización
4. Una vez iniciada, céntrate en el plan, las llamadas a herramientas y el resultado de los cambios

---

**Estado:** verified  
**Productos aplicables:** App  
**Base de verificación:** La documentación actual de la aplicación de escritorio en el OpenAI Help Center sigue distinguiendo el proyecto / Contexto de proyecto de la sesión concreta de chat/work/codex, y explica que puedes abrir una carpeta o proyecto local en la aplicación; esta página solo aclara la separación «proyecto = lugar de trabajo, Tarea = encargo de esta ocasión».  
**Última verificación:** 2026-07-26

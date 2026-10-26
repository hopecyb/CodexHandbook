---
title: Proyectos y tareas
description: Gestionar proyectos y tareas en la App.
locale: es
source_locale: zh-CN
source_revision: "6a1f17f"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 20
legacyVerification:
  status: verified
  products: App
  basis: La documentación actual de la aplicación de escritorio en el OpenAI Help Center sigue distinguiendo el proyecto / contexto de proyecto de la sesión concreta de chat/work/codex, y explica que puedes abrir una carpeta o proyecto local en la aplicación; esta página solo aclara la separación «proyecto = lugar de trabajo, tarea = encargo de esta ocasión».
  checkedAt: '2026-07-26'
---
«Proyecto» y «tarea» parecen simples, pero la primera vez es fácil mezclarlos. El proyecto es el conjunto de archivos o el repositorio con el que trabajas; la tarea es lo concreto que le pides a Codex en esta ocasión.

Por ejemplo:

- El repositorio de tu sitio de documentación → proyecto
- «Haz más claros los términos de la página de inicio» → tarea

Estos conceptos importan porque en la App de escritorio siempre coexisten dos niveles:

- En qué proyecto estás trabajando ahora
- Qué le pides exactamente esta vez

## Proyecto

- Añade un directorio de práctica o la raíz del repositorio
- Concéntrate en un proyecto a la vez para no mezclar contexto

El «proyecto» es el **lugar de trabajo** de esta colaboración.
Si el lugar es incorrecto, muchos problemas posteriores se desvían con él.

## Tarea

- Arranca la tarea con un prompt completo
- Observa el plan y las llamadas a herramientas
- Aprueba o rechaza cuando haga falta

La «tarea» es el **encargo concreto** de esta ocasión.
Cuanto más claro sea el encargo, menos tendrá que adivinar Codex mientras trabaja.

Comparación de conceptos: [Hilos, tareas y proyectos](/es/guide/foundations/threads-tasks-and-projects/)

## Malentendidos frecuentes

### 1. ¿Por qué hay que elegir primero el proyecto y no preguntar directamente?

Porque Codex necesita saber sobre qué archivos o repositorio trabaja esta vez.

Si eliges mal el proyecto, aparecen más preguntas del tipo «¿por qué no ve los archivos?» o «¿por qué cambió otra cosa?».

### 2. ¿Puede haber muchas tareas en un mismo proyecto?

Sí.
Lo más estable es:

- En el mismo proyecto
- Una tarea clara cada vez
- Al terminar, abrir la siguiente

Así es menos probable mezclar el contexto.

### 3. ¿Cómo conviene formular la tarea al empezar?

Incluye, en la medida de lo posible, estos tres tipos de información:

- Objetivo
- Alcance / restricciones
- Criterio de finalización

### 4. ¿Una necesidad grande debe ir en una sola tarea?

Si el alcance es muy amplio, suele ser más seguro:

- Mantener el mismo proyecto
- Dividir en varias tareas
- Que cada tarea resuelva un objetivo concreto

## Orden habitual

La primera vez que trabajes en la App de escritorio, puedes seguir este orden:

1. Confirma que el proyecto es el correcto
2. Confirma que el objetivo de la tarea habla de una sola cosa principal
3. Añade el alcance y el criterio de finalización
4. Una vez iniciada, céntrate en el plan, las llamadas a herramientas y el resultado de los cambios

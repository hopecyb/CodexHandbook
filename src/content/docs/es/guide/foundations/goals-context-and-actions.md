---
title: Objetivo, Contexto y acciones
description: Descompone una interacción exitosa en objetivo, trasfondo, acciones y aceptación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Algunas Tareas fluyen enseguida; otras se tuercen cuanto más hablas. La diferencia no es que el modelo se vuelva de pronto más listo o más torpe, sino si desglosaste bien la Tarea.

En versión mínima: el objetivo dice «qué debe quedar al final», el Contexto «sobre qué bases», las acciones «qué puede hacer» y la aceptación «hasta dónde cuenta como hecho».

Una interacción estable con Codex suele tener cuatro bloques:

1. **Objetivo**: qué hay que entregar al final
2. **Contexto**: trasfondo, archivos y restricciones relevantes
3. **Acciones**: pasos que Codex puede dar (leer, editar, ejecutar)
4. **Aceptación**: cómo se sabe que terminó y cómo comprobarlo

La enseñanza de Prompts desarrolla estos cuatro bloques en un marco estable; ver [Anatomía de una buena Tarea](/prompts/task-anatomy/).

## Qué controla cada bloque

Piensa en ello como encargar trabajo a un asistente ejecutor:

- **Objetivo**: qué cosa concreta debe entregarte
- **Contexto**: qué premisas debe conocer antes de juzgar
- **Acciones**: si puede leer archivos, editarlos, ejecutar comandos, buscar en la red
- **Aceptación**: con qué criterio dirás «vale» cuando termine

Si falta alguno, es fácil que falle:

- sin objetivo: trabaja, pero no necesariamente en lo importante
- sin Contexto: adivina
- sin límites de acción: puede hacer de más, o no atreverse a hacer
- sin aceptación: cada uno entiende «terminado» de forma distinta

## Malentendidos frecuentes

### 1. Con dejar claro el objetivo basta

No basta.

Si dices «ayúdame a retocar la página de inicio», solo das una dirección; no basta para una ejecución estable. También necesita saber:

- qué archivo tocar
- qué conservar
- qué no tocar
- cómo quieres que quede al final

### 2. Cuanto más Contexto, mejor

Poco Contexto le hace adivinar; demasiado ahoga lo esencial. La clave es Contexto **relevante**, no volcar toda la información.

### 3. ¿Se pueden omitir las acciones y dejar que juzgue solo?

A veces sí, pero para principiantes es inestable.

Si escribes con claridad:

- qué archivos puede editar
- que no instale dependencias
- que no cambie la configuración
- que dé un plan antes de actuar

el resultado suele ser mucho más estable.

## Si no sabes cómo escribirlo, ordena así

Si no sabes cómo organizar la Tarea, usa estas cuatro frases:

1. Qué quiero que completes al final
2. Sobre qué trasfondo y restricciones debes basarte
3. Qué puedes hacer y qué no
4. Con qué criterio comprobaré si terminaste

Eso es más claro que solo escribir «ayúdame con este problema».

## Ejemplo pequeño

> Objetivo: dejar claros los niveles de títulos en `notes.md`.  
> Contexto: edita solo ese archivo; conserva el orden de los párrafos.  
> Acciones: puedes editar ese archivo; no instales dependencias.  
> Aceptación: al abrir el archivo, los títulos van en niveles continuos de H1 a H3, sin saltos.

Una Tarea estable al menos deja claros el objetivo, el Contexto, los límites de acción y la forma de aceptación.


---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica el marco de desglose de Tarea en objetivo, Contexto, acciones y aceptación; se revisaron enlaces internos y la estructura del ejemplo, y el cuerpo no depende de hechos de producto volátiles.  
**Última verificación:** 2026-07-26

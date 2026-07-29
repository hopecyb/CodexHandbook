---
title: IA y modelos de lenguaje
description: Entiende cómo un modelo de lenguaje genera respuestas a partir del Contexto.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Un modelo de lenguaje **predice la salida más razonable a continuación** a partir del texto, los archivos y los resultados de Herramientas que le das. Es bueno completando, organizando, redactando y siguiendo el Contexto, pero no conoce de forma natural lo que no le diste, ni garantiza estar siempre del todo en lo correcto.

No lee la mente ni entiende tu proyecto por sí solo; solo puede seguir generando un resultado «que parece razonable» con la información que le entregaste.

Eso también explica por qué:

- si no le das Contexto clave, tiende a adivinar
- si le das información contradictoria, tiende a desviarse
- puede ayudarte a redactar, organizar y analizar, pero no puedes externalizarle del todo la corrección

## Qué está haciendo

Puedes verlo como un sistema especialmente bueno para continuar, organizar y completar.

Ve:

- la descripción de tu Tarea
- los archivos que le das
- los resultados que devuelven las Herramientas

Y, con eso, produce el siguiente paso que considera más adecuado.

Sigue empujando a partir del Contexto actual; no «sabe» la respuesta por su cuenta.

## Qué implica para quien lo usa

- **La calidad de la entrada marca el techo**: si el objetivo es vago, la salida se desvía con facilidad
- **El Contexto es limitado**: un historial demasiado largo se compacta o se trunca; ver [Token, Contexto y Compactación](/guide/foundations/tokens-context-and-compaction/)
- **Hay que verificar**: sobre todo cifras, derecho, seguridad y contenido que se publica hacia fuera

## Malentendidos frecuentes

### 1. Si es tan listo, debería saber solo el trasfondo que no dije

En general, no.

Puede adivinar, pero no cuentes con que acierte por defecto.  
Lo que sabes tú pero no le entregaste con claridad suele ser justo donde más falla.

### 2. Si escribe código o documentación, es que de verdad lo entendió

No necesariamente.

Muchas veces solo genera algo que «parece» correcto. Parecerlo no equivale a encajar en tu proyecto, entorno y objetivo.

### 3. Con un modelo de lenguaje ya no hace falta juzgar por ti mismo

Más bien necesitas juzgar:

- si entendió la Tarea
- si está adivinando
- si su conclusión necesita verificación

## Diferencia frente a un «motor de búsqueda»

Un motor de búsqueda devuelve sobre todo páginas existentes; Codex se parece más a **llamar Herramientas y generar cambios ejecutables** bajo tu objetivo. En ambos casos tú juzgas la fiabilidad.

Lo más útil del modelo de lenguaje es que, con Contexto suficiente, puede seguir trabajando rápido en la dirección de tu objetivo.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica el principio básico de que un modelo de lenguaje genera salida a partir del Contexto; se revisaron enlaces internos y formulaciones conceptuales, y el cuerpo no depende de hechos de producto volátiles.  
**Última verificación:** 2026-07-26

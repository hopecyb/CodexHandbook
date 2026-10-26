---
title: Token, Contexto y Compactación
description: Entiende la ventana de Contexto, su ocupación y la Compactación.
locale: es
source_locale: zh-CN
source_revision: 'cd44efe'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-25'
sidebar:
  order: 100
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página solo explica los conceptos básicos de Token, ventana de Contexto y Compactación; se revisaron enlaces internos y formulaciones de ejemplo, y el cuerpo no depende de hechos de producto volátiles.
  checkedAt: '2026-07-26'
---

La primera vez esta página puede parecer abstracta; no hace falta conocer los detalles de su funcionamiento interno. El modelo no tiene memoria infinita. Cuando el contenido crece, se dispersa o se alarga, puede perder el foco, y las restricciones importantes dichas al principio también se van diluyendo.

Detrás suelen aparecer tres palabras: Token, Contexto y Compactación.

Un **Token** es la unidad con la que el modelo procesa texto. La **ventana de Contexto** es el tope de información que puede usar con eficacia de una vez.

Cuando hay demasiada conversación o demasiados archivos, el sistema puede hacer **Compactación (compaction)**: conservar un resumen y descartar detalles. Tras compactar, el Agent puede «olvidar» restricciones tempranas.

![Ilustración: un largo rollo de conversación entra en una prensa y sale como una tarjeta de resumen que cabe en una ventana limitada](/illustrations/tokens-compaction.webp)

## Mira estos tres términos por separado

Puedes verlo así:

- **Token**: la «unidad de volumen» al procesar información
- **Ventana de Contexto**: la capacidad de información que puede llevar consigo en esta pasada
- **Compactación**: cuando hay demasiado contenido, el sistema concentra la conversación anterior en un resumen para liberar espacio y seguir

El problema es que **un resumen no puede conservar todos los detalles**.

Por eso, en conversaciones largas, los requisitos que solo dijiste una vez al principio y no volviste a mencionar se debilitan con más facilidad.

## Malentendidos frecuentes

### 1. Si lo dije una vez, ¿debería recordarlo siempre?

Si esa frase quedó enterrada en un diálogo muy anterior y no aparece en la información clave actual, puede compactarse después.

### 2. ¿Cuanto más Contexto, más estable?

Un poco más de Contexto relevante ayuda, pero demasiada información irrelevante trae dos problemas:

- el foco se difumina
- las restricciones clave se ahogan con más facilidad

### 3. ¿Compactar significa que el modelo se rompió?

La Compactación es una gestión de recursos. Cuando hay demasiada información, el sistema solo puede conservar primero una versión más condensada y seguir.

## Qué hacer en ese caso

Si te preocupa que se olviden requisitos clave, puedes:

- escribir las restricciones clave en el mensaje actual
- poner las reglas de larga vigencia en la descripción del proyecto o en un documento fijo
- cuando el tema cambie con claridad, abrir una Tarea o un hilo nuevos
- no decir solo una vez las condiciones de borde importantes

## Práctica

- Escribe las restricciones clave en el mensaje actual o en la descripción del proyecto; no las dejes solo enterradas en un diálogo muy antiguo
- Cuando cambie el tema, abre un hilo nuevo
- Principio y consejos operativos: [Compactación de Contexto](/es/guide/context/compaction/) y [Mantén el Contexto enfocado](/es/guide/context/keep-context-focused/)

Aquí van los conceptos. Cómo controlarlos en la práctica, en el `05`.

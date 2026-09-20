---
title: "Function Calling (llamadas a funciones)"
description: "El modelo puede proponer el nombre de una función y argumentos estructurados; la aplicación los valida y decide si ejecutarla. Generar argumentos, obtener autorización y ejecutar son tres pasos distintos."
contentType: "guide"
editorialStatus: "review"
verification:
  kind: "source-checked"
  checkedAt: "2026-09-18"
  summary: "Los datos del evento y del proyecto que aparecen abajo se contrastaron con la fuente primaria; las recomendaciones didácticas son criterio del autor y no se presentan como una prueba real del producto."
  evidence:
    - label: "Anuncio de lanzamiento de las llamadas a funciones"
      href: "https://openai.com/index/function-calling-and-other-api-updates/"
locale: es
source_locale: zh-CN
source_revision: c362c48
translation_status: draft
translated_at: 2026-09-20
---

## Evento verificable y alcance

**Fecha: 13 de junio de 2023 · Tipo: lanzamiento de producto.** OpenAI anunció las llamadas a funciones para la API Chat Completions de aquel momento. Esta fecha corresponde al lanzamiento de la API de un proveedor concreto, no al origen de todas las llamadas a herramientas.

Fuente: [anuncio de lanzamiento de las llamadas a funciones](https://openai.com/index/function-calling-and-other-api-updates/). Verificado el 18 de septiembre de 2026; la fecha de publicación de la fuente y la de verificación de esta página tienen significados distintos.

## Qué problema resuelve

El modelo puede proponer el nombre de una función y argumentos estructurados; la aplicación los valida y decide si ejecutarla. Generar argumentos, obtener autorización y ejecutar son tres pasos distintos.

## Recomendaciones de aprendizaje y límites de uso

Lo siguiente es un criterio didáctico de este sitio, no una medición de adopción sectorial ni de eficacia:

Prioriza entradas que se puedan validar, ámbitos de permiso explícitos y respuestas de error. Que el JSON sea válido no significa que los argumentos sean correctos en su significado ni que esté autorizada la escritura en un sistema externo. Los nombres de modelos y ejemplos de API del anuncio histórico no sirven como guía de configuración actual.

## Ejercicio práctico

[Simulación de sugerencias para clasificar Issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/): comprueba que las sugerencias estructuradas para Issues sintéticas correspondan a sus entradas y conserva una cola de revisión humana. El ejercicio verifica los límites de los datos sin llamar a la API histórica ni usar su etiqueta de lanzamiento.

[Volver a la hoja de ruta y los criterios de fecha](/es/ai-roadmap/)

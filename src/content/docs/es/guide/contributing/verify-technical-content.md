---
legacyVerification:
  status: "verified"
  basis: "Contrastado con el sistema actual de estados del manual, varias rondas de revisión ya completadas y el principio de prioridad de las fuentes oficiales. Esta página describe los criterios internos para elevar una página a `verified` y para rebajarla."
  checkedAt: "2026-07-26"
title: Verificar contenido técnico
description: Cómo comprobar hechos técnicos, reproducir pasos y registrar el alcance y las pruebas.
locale: es
source_locale: zh-CN
source_revision: '7fba563'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-11-19
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Normas de contribución actualizadas según los nuevos campos de metadatos del sitio; esto no significa que se hayan vuelto a ejecutar todos los mecanismos del producto citados aquí.
sidebar:
  order: 30
---

Los comandos, permisos, precios y funciones del producto pueden cambiar entre versiones. La comprobación técnica debe ayudar a saber qué afirmaciones tienen respaldo actual, a qué entornos se aplican y qué debe confirmar cada lector por su cuenta.

## Objetivo de la comprobación

Comprobar no consiste solo en mejorar la redacción. Los hechos clave deben coincidir con el producto actual, los pasos deben funcionar en el entorno indicado y las conclusiones deben mantenerse dentro de lo que respaldan las pruebas.

## Prioridad de las pruebas

1. Usa primero la documentación oficial de OpenAI para el comportamiento, los parámetros y los límites del producto.
2. Cualquier ejemplo descrito como «ejecutado» debe tener un resultado real e información del entorno.
3. Los artículos de la comunidad pueden ayudar a descubrir temas, pero no sustituyen las fuentes oficiales ni una ejecución real.
4. Que un enlace funcione no demuestra que su contenido respalde una afirmación; lee la fuente.
5. Si no puedes confirmar un dato, explica la incertidumbre en lugar de completar el vacío con suposiciones.

## Alcance que debe registrarse

- Producto aplicable: App, CLI, IDE o Cloud
- Sistema operativo, cliente y versiones de dependencias importantes
- Pasos realizados y forma de comprobar el resultado
- Plataformas, puntos de entrada y casos límite no cubiertos
- La página concreta de la fuente, no solo la portada del sitio

## Orden de comprobación

1. Identifica el producto, el punto de entrada y el escenario del que habla la página.
2. Contrasta los hechos que cambian con la documentación oficial actual.
3. Si la página afirma que los pasos pueden ejecutarse, realízalos desde el principio en un entorno limpio.
4. Reduce el alcance de las afirmaciones no probadas o inciertas e indica el límite en el texto.
5. Comprueba enlaces internos, enlaces externos y requisitos previos.

## Información que cambia con frecuencia

Tras una versión importante del producto, revisa primero:

- Comandos, subcomandos y flags
- Permisos predeterminados y comportamiento del sandbox
- Planes, modelos, precios, cuotas y disponibilidad regional
- MCP, Hooks y otras interfaces de integración
- Ubicación de menús, nombres de botones y puntos de entrada

## Cuando algo no puede confirmarse

No presentes una inferencia como un hecho. Elimina detalles obsoletos, reescribe la sección en torno a un método estable o registra la duda en una PR o issue. Para comportamiento, precios y políticas actuales, prevalecen las fuentes oficiales.

## Relacionado

- [Fiabilidad del contenido](/es/guide/start-here/handbook-version-policy/)
- [Recursos oficiales](/es/guide/reference/official-resources/)

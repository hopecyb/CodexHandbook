---
title: Ruta para desarrolladores (resumen)
description: Resumen de la ruta relacionada con desarrollo de software; los pasos en profundidad se completarán más adelante.
locale: es
source_locale: zh-CN
source_revision: b5b5ac7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

> Estado MVP: esta página es un resumen. Los cinco pasos completos se completarán en hitos posteriores.

Si quieres usar Codex sobre todo para cambiar código, entender proyectos y corregir problemas, puedes empezar por esta ruta.

## Casos adecuados

- Quien necesita leer código, cambiarlo y ejecutar pruebas
- Quien quiere integrar Codex en un flujo de desarrollo real
- Quien quiere dominar el flujo de «escribir la Tarea, revisar el diff, ejecutar la Verificación»

## Qué puedes leer ahora

- [Primeros pasos](/es/guide/getting-started/) y [CLI](/es/guide/cli/) / [IDE](/es/guide/ide/)
- [Ejecutar pruebas](/es/guide/quality/run-tests/) · [Revisar diferencias](/es/guide/quality/review-diffs/)
- [Planificación del Agent](/es/guide/agent-work/planning/)

## Malentendidos frecuentes

### 1. La ruta para desarrolladores es dejar que empiece a escribir código

Lo que más afecta a la calidad suele ser:

- Si entendió el alcance
- Si definiste el criterio de finalización
- Si al final revisaste el diff y el resultado de la Verificación con atención

### 2. Sé escribir código, así que puedo saltarme los conceptos básicos

Mejor no saltártelos del todo.

La forma de trabajar de Codex no es como el autocompletado de un editor; conceptos como Permiso, Contexto y llamadas a Herramientas siguen afectando el resultado.

## Orden de lectura sugerido

Si vas a usar Codex en desarrollo, lee en este orden:

1. [Primeros pasos](/es/guide/getting-started/)
2. [CLI](/es/guide/cli/) o [IDE](/es/guide/ide/)
3. [Trabajo con Agent](/es/guide/agent-work/)
4. [Ejecutar pruebas](/es/guide/quality/run-tests/)
5. [Revisar diferencias](/es/guide/quality/review-diffs/)

Esta ruta prioriza cambios controlables y resultados verificables, no solo «que empiece a escribir».

## Pasos planificados (esquema)

Entender el repositorio → Corrección e implementación → Pruebas y revisión → Flujos automatizados → Desarrollo multi-Agent

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Contrastado con las páginas de entrada de desarrollo, trabajo con Agent, ejecución de pruebas y revisión de diferencias; esta página es solo un resumen del orden de lectura para desarrolladores y no promete comportamientos por defecto de implementaciones o herramientas.  
**Última verificación:** 2026-07-26

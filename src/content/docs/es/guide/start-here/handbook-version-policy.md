---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Se revisó según el sistema de seis estados, las reglas de anotación y la prioridad de la documentación oficial que utiliza el manual. Explica la política de versiones del sitio y cómo leerlo; no depende de parámetros de una versión concreta del producto."
  checkedAt: "2026-07-26"
title: Política de versiones del manual
description: Explica el estado del contenido, las fechas de verificación y cómo se actualiza de forma continua.
locale: es
source_locale: zh-CN
source_revision: 'a608dc3'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 8
reviewed_at: 2026-10-25
---

## Actualización continua

Este manual no queda congelado indefinidamente en una sola versión de Codex. El producto cambia; por eso, cada página explica el alcance de lo comprobado mediante su estado, fecha de verificación y pruebas concretas. La fecha por sí sola no es una puntuación de fiabilidad.

## Contenido

- Por qué este manual no puede asumir que nada cambie nunca
- Cómo leer el estado y la fecha de verificación al principio de la página
- A quién creer si hay conflicto con lo oficial

## Estados de página

| Estado | Significado |
|---|---|
| planned | Planificado, aún no escrito |
| draft | En redacción |
| review | Contenido listo, pendiente de revisión |
| verified | Verificado según la base indicada |
| outdated | Hay que actualizarlo tras cambios de producto |
| archived | Conservado por historia; no entra en la navegación principal |

## Cómo leer el estado de una página

- `planned`: aún no escrito
- `draft`: en marcha, pero aún inestable
- `review`: el cuerpo principal ya está, pero todavía necesita revisión
- `verified`: ya verificado según la base indicada
- `outdated`: pudo ser correcto antes; ahora conviene desconfiar de lo caduco
- `archived`: se conserva como referencia, no como contenido de la línea principal actual

## Registro de verificación y actualización del contenido

Al principio de cada página se muestran por separado el estado editorial, el método de verificación, la fecha de verificación y las pruebas aplicables. `editorial` indica revisión editorial; `source-checked`, comprobación de fuentes; y `run-tested`, ejecución de un ejemplo en el entorno documentado. Ningún método sustituye a otro. Las notas históricas se conservan por separado y no se convierten automáticamente en pruebas de una ejecución actual.

[Actualizaciones y correcciones del contenido](/es/guide/updates/) explica los cambios concretos y sus efectos. Al final de las páginas con texto chino se puede abrir un borrador de corrección en GitHub con información de la página actual. Hay que revisarlo y quitar los datos sensibles antes de enviarlo.

## Base oficial

El comportamiento del producto se rige por la documentación de OpenAI: [https://developers.openai.com/codex](https://developers.openai.com/codex). Este repositorio es una guía comunitaria; si hay conflicto con lo oficial, prevalece lo oficial, y se agradece abrir un issue.

## Malentendidos frecuentes

### 1. Si está en el manual, no significa que no vaya a cambiar nunca

Sobre todo esto suele cambiar:

- Formas de instalación
- Flujos de inicio de sesión y cuentas
- Permisos, modelos y claves de configuración
- Comportamiento de Cloud y de las entradas de producto

### 2. `review` no significa que no se pueda leer

`review` indica que el contenido principal ya existe, pero aún no está en el nivel más fuerte de confirmación; no significa que no sirva de referencia.

### 3. Si la guía comunitaria y la documentación oficial chocan, no creas a medias en cada una

Puedes repartirlo así:

- Comprensión y rutas: el manual
- Comportamiento y parámetros más recientes: lo oficial

## Cómo juzgar si una página es fiable

Si te preocupa que una página esté desactualizada, mira estas tres cosas:

1. Si el estado editorial al principio es `review`, `verified` u `outdated`
2. Si la fecha de última verificación está lejos de hoy
3. Si habla de conceptos, o de instalación, configuración y permisos, que cambian con facilidad

Cuando se trate del comportamiento, parámetros y reglas más recientes, al final manda la documentación oficial actual.

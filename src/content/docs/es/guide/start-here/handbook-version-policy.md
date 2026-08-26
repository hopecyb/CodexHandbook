---
title: Política de versiones del handbook
description: Explica el estado del contenido, las fechas de verificación y cómo se actualiza de forma continua.
locale: es
source_locale: zh-CN
source_revision: 3f4e05e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 8
---

## Actualización continua

Este handbook no se congela a largo plazo a un número de versión concreto de Codex. El producto cambia, así que cada página marca su fiabilidad actual con un estado y una fecha de verificación.

## Contenido

- Por qué este handbook no puede asumir que nada cambie nunca
- Cómo leer el estado y la fecha de verificación al final de la página
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
- `review`: el cuerpo principal ya está, pero falta el nivel más fuerte de confirmación
- `verified`: ya verificado según la base indicada
- `outdated`: pudo ser correcto antes; ahora conviene desconfiar de lo caduco
- `archived`: se conserva como referencia, no como contenido de la línea principal actual

## Las tres líneas del pie

En la fase MVP, cada página marca al final: **Estado / Productos aplicables / Última verificación**. El contenido que caduca pronto (instalación, cuentas, permisos, modelos) debería enlazar a lo oficial.

## Base oficial

El comportamiento del producto se rige por la documentación de OpenAI: [https://developers.openai.com/codex](https://developers.openai.com/codex). Este repositorio es una guía comunitaria; si hay conflicto con lo oficial, prevalece lo oficial, y se agradece abrir un issue.

## Malentendidos frecuentes

### 1. Si está en el handbook, no significa que no vaya a cambiar nunca

Sobre todo esto suele cambiar:

- Formas de instalación
- Flujos de inicio de sesión y cuentas
- Permisos, modelos y claves de configuración
- Comportamiento de Cloud y de las entradas de producto

### 2. `review` no significa que no se pueda leer

`review` indica que el contenido principal ya existe, pero aún no está en el nivel más fuerte de confirmación; no significa que no sirva de referencia.

### 3. Si la guía comunitaria y la documentación oficial chocan, no creas a medias en cada una

Puedes repartirlo así:

- Comprensión y rutas: el handbook
- Comportamiento y parámetros más recientes: lo oficial

## Cómo juzgar si una página es fiable

Si te preocupa que una página esté desactualizada, mira estas tres cosas:

1. Si el estado del pie es `review`, `verified` u `outdated`
2. Si la fecha de última verificación está lejos de hoy
3. Si habla de conceptos, o de instalación, configuración y permisos, que cambian con facilidad

Cuando se trate del comportamiento, parámetros y reglas más recientes, al final manda la documentación oficial actual.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Se revisó según el sistema de 6 estados que usa este handbook, las reglas del pie de página y el principio de prioridad oficial; esta página explica la política de versiones del sitio y el método de lectura, y no depende de parámetros de versión concretos del producto.  
**Última verificación:** 2026-07-26

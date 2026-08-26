---
title: Ejecutar tests
description: Haz que los pasos de verificación formen parte de la tarea.
locale: es
source_locale: zh-CN
source_revision: 13d4ba5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Tras el cambio, hace falta alguna forma de confirmar que no se rompió nada de forma evidente.

Esa «prueba» puede ser un test automático, un build correcto o un conjunto claro de pasos de verificación manual.

## Qué debe responder un test

El test responde sobre todo a una pregunta muy práctica:

> **¿Cómo sabes que este cambio no rompió otra cosa de paso?**

Sin acción de verificación, el resultado suele ser solo «parece más o menos bien».

Incluye el comando de test en los criterios de aceptación del prompt. Si el repositorio no tiene tests, exige al menos: que el comando de arranque/build tenga éxito, o que dé pasos de verificación manual.

Un «hecho» sin verificación muchas veces es solo un juicio subjetivo.

## Malentendidos habituales

### 1. No solo los programadores deben preocuparse por la verificación

Aunque cambies sobre todo documentos, páginas, configuración o contenido, también necesitas una forma de verificación correspondiente.

### 2. Si el repositorio no tiene tests, igual hay que aceptar

Sin tests automáticos, al menos añade una de estas:

- Build correcto
- Arranque correcto
- Pasos claros de comprobación manual

### 3. «El cambio es pequeño» no justifica saltarse la verificación por defecto

Un cambio pequeño también puede traer efectos secundarios, sobre todo si aún no conoces bien el proyecto.

## Orden de verificación

Si no sabes por dónde empezar, puedes seguir este orden:

1. Si hay tests relacionados, ejecútalos primero
2. Si no hay tests, ejecuta build o arranque
3. Si aún no basta, añade el mínimo de pasos de comprobación manual

Lo importante es no entregar sin verificar en absoluto; no hace falta maximizar la cobertura de golpe.

## Una frase que puedes meter en el prompt

En la primera tarea, puedes añadir directamente:

```text
Al terminar, ejecuta la verificación relacionada; si no hay tests automáticos, dime los pasos mínimos de comprobación manual.
```

Así, aunque los tests del repo sean incompletos, no te saltas del todo la verificación.

## Una frase más cuando haga falta

También puedes añadir:

```text
Dime qué verificaciones ejecutaste realmente; si no puedes ejecutarlas, explica la razón con claridad; no las des por aprobadas por defecto.
```

La verificación puede ser ligera, pero no puede faltar; si no, «terminado» cuesta de sostener.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica por qué los pasos de verificación deben entrar en la aceptación de la tarea; se han revisado frases de ejemplo y el orden de comprobación, y el cuerpo no depende de hechos variables de producto.  
**Última verificación:** 2026-07-26

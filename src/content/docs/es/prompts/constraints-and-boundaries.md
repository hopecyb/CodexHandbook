---
title: Restricciones y límites
description: Limita el alcance editable, el estilo y las prohibiciones.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muchas tareas fallan no porque el objetivo falte del todo, sino porque **los límites no están claros**.

Si dices «ayúdame a cambiar esta página», Codex puede entender:

- solo cambiar el copy
- también retocar estilos
- tocar componentes
- añadir dependencias

Y lo que tú querías quizá era solo «cambia este párrafo; no toques la estructura».

Las restricciones responden a: hasta dónde llega esta tarea y qué no debe tocarse en absoluto.

## Contenido

Sirve sobre todo para evitar:

- cambios «de paso»
- operaciones fuera de permiso
- tocar capas que no querías
- parecer terminado, pero a un coste demasiado alto

## Restricciones habituales

Responden a: «¿qué no debe hacerse en absoluto?»

- solo los archivos/directorios listados
- no cambiar el contrato de API / no tocar la base de datos
- no añadir dependencias nuevas
- no iniciar peticiones de red
- conservar la configuración actual del formateador

## Cómo distinguir «objetivo» y «restricción»

- **Objetivo:** qué quieres que logre
- **Restricción:** qué líneas no puede cruzar al hacerlo

Por ejemplo:

```text
Objetivo: hacer más claro el copy del Hero de la home
Restricciones: no cambiar el layout, no añadir dependencias, no modificar el comportamiento del CTA
```

Sin restricciones, Codex puede interpretar «hacerlo más claro» como un rediseño mucho mayor.

## Ideas erróneas habituales

### 1. ¿Las restricciones limitan demasiado y empeoran el resultado?

A menudo, restricciones claras acercan el resultado a lo que de verdad necesitas, porque evita rodeos.

### 2. «No cambies demasiado» ya cuenta como restricción

Eso es demasiado vago.

Más útil:

- solo `src/content/docs/...`
- no tocar componentes
- no tocar interfaces
- no instalar dependencias

### 3. Las restricciones solo hacen falta en tareas de alto riesgo

También en tareas pequeñas: ahí es fácil soltar un requisito vago y dejar que amplíe el alcance por su cuenta.

## Una redacción suficiente

Si no sabes cómo escribirlo, usa este esqueleto:

```text
Restricciones:
- solo modificar 【directorio/archivo】
- no modificar 【componentes / API / base de datos / configuración】
- no añadir dependencias
- si falta información, pregunta primero; no adivines
```

## Cuándo afinar más las restricciones

Conviene explicitarlas en estos casos:

- proyecto legacy con mucha deuda
- solo quieres un parche local
- el equipo impone estilo o arquitectura
- implica permisos, red o instalar dependencias

El objetivo dice a Codex qué hacer; la restricción dice hasta dónde.

Escribe los límites de permiso junto con las restricciones para reducir extralimitaciones «de paso». Ver [Definir el terminado](/prompts/define-done/) y [Permisos y sandbox](/guide/permissions-and-sandbox/).

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe cómo escribir restricciones y límites; se han revisado los enlaces internos y el cuerpo no depende de hechos volátiles del producto.

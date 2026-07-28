---
title: Árboles de trabajo
description: Probar cambios en paralelo con árboles de trabajo aislados.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **árbol de trabajo (worktree)** sirve para experimentar cambios en un directorio aislado y reducir la interferencia con el área de trabajo principal.

Puedes verlo como abrir una «zona de prueba paralela» del mismo repositorio, para no amontonar todos los intentos en el área de trabajo actual.

## Cuándo usarlo

- Quieres probar dos implementaciones en paralelo
- Te preocupa que una refactorización experimental contamine el área de trabajo de la rama principal

## Cuándo no usarlo

- El propio proyecto de práctica ya está lo bastante aislado
- Aún no dominas Git: primero completa las Tareas en serie en un directorio de práctica

## Malentendidos frecuentes

### 1. ¿No es simplemente crear otra carpeta?

Por fuera lo parece, pero el objetivo no es solo «tener un directorio más», sino dejar espacio aislado para distintos intentos sobre el mismo repositorio.

### 2. ¿Hay que aprenderlo desde el principio?

No.

Si aún estás familiarizándote con el flujo básico de Tareas, suele ser más sencillo no tocar worktrees todavía.

### 3. ¿Cuándo conviene aprenderlo?

Merece la pena cuando empiezas a encontrarte con esto:

- Quieres probar dos implementaciones
- No quieres mezclar cambios experimentales en el área de trabajo actual
- En el equipo se abren varias Tareas en paralelo

El worktree es una herramienta de aislamiento avanzada, no un requisito para empezar con Codex.

---

**Estado:** outdated  
**Productos aplicables:** App  
**Nota de revisión:** Esta página presenta el worktree como capacidad avanzada de la App de escritorio, pero el material oficial público actual no basta para demostrar uno a uno la entrada vigente ni el alcance del soporte de árboles de trabajo en la UI de escritorio; conviene marcarlo como `outdated` hasta completar la documentación de producto más reciente.  
**Última verificación:** 2026-07-26

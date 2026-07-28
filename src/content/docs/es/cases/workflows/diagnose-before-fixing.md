---
title: Diagnosticar antes de corregir
description: Problemas de producción y bugs persistentes — construye primero una cadena de evidencia, luego corta.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Pedir a Codex que «arregle el bug» de entrada suele generar mucho retrabajo. El flujo de diagnóstico insiste en: **síntoma → hipótesis → evidencia → corrección mínima**.

## Cuándo usarlo

- La causa del fallo de tests no está clara
- Alertas de producción o reportes de usuario «intermitentes»
- Tras una corrección previa el problema sigue

## Pasos

### 1. Congelar cambios

```text
No cambies el código de negocio todavía. Lista: pasos de reproducción, logs relevantes, commits recientes relacionados.
```

### 2. Reducir el alcance

- Bisección: ¿qué commit lo introdujo?
- Aislamiento: repo o caso de test de reproducción mínima

### 3. Formular hipótesis

Pide a Codex:

```text
Hipótesis A: … Forma de verificar: …
Hipótesis B: … Forma de verificar: …
```

### 4. Verificar hipótesis (solo lectura primero)

Ejecuta tests concretos, añade logs temporales (en una rama desechable), lee monitorización.

### 5. Corrección mínima

Corrige una sola causa raíz por vez; evita «refactorizar de paso».

### 6. Verificación de regresión

Caso que fallaba + escenarios vecinos + tests que eviten la recidiva.

## Plantilla de prompt

```text
Sigue «diagnosticar antes de corregir»:
1. Lee @path/to/failing-test y la implementación; explica la causa del fallo (cita números de línea del stack)
2. Da 2 hipótesis y cómo verificarlas en solo lectura
3. Tras confirmar la hipótesis, escribe la corrección; después solo ejecuta los tests relacionados
```

## Relación con EPXV

El diagnóstico es una versión más profunda de la fase **explorar**; en la fase de plan hay que dejar claro «qué hacer si la hipótesis es incorrecta».

## Errores frecuentes

- Cambiar código sin haber reproducido
- Un solo patch que arregla tres problemas a la vez → imposible de revisar
- Borrar logs temporales sin añadir un test permanente

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de planificación, calidad y recuperación ante fallos. Esta página solo confirma el método estable «cadena de evidencia primero, corrección mínima después», sin depender de una implementación concreta de producto.

---
title: Plantilla de revisión
description: Revisión estructurada de diffs y riesgo del cambio.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Plantilla de revisión

Lo más fácil de desviarse en revisión es que de entrada se convierta en «ya te lo cambié de paso».

Primero encontrar problemas y luego decidir si cambiar es más estable.

## Plantilla

```text
Revisa el diff actual respecto a 【main/rama objetivo】; no cambies código todavía.
Dimensiones:
1. Si se sale del alcance de 【issue/especificación】
2. Errores de lógica, límites y manejo de errores
3. Seguridad (secretos, inyección, permisos)
4. Si tests y documentación acompañan el cambio
Salida: lista graduada 🔴 bloqueante / 🟡 sugerencia / 🟢 aprobado; cada ítem con archivo y número de línea.
```

## Cuándo usarla

- Revisar un PR
- Revisar un diff
- Revisar el riesgo de un cambio de documentación o configuración

## Ideas erróneas habituales

### 1. Revisar = que dé unas opiniones

Más preciso: que busque problemas con estructura.

### 2. Sin bug visible = aprobado

La revisión también debe mirar:

- si se excedió el alcance
- si tests y documentación van al día
- si hay problemas de seguridad o de límites

El foco de esta plantilla es sacar riesgos por dimensiones fijas, no evaluar en genérico «si está bien».

## Relacionado

- [Revisar antes de fusionar](/cases/workflows/review-before-merge/)
- [Caso: revisar un PR](/cases/review-a-pr/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página ofrece una plantilla de tareas de revisión; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto.

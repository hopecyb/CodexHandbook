---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página ofrece una plantilla de tareas de revisión; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Plantilla de revisión
description: Revisión estructurada de diffs y riesgo del cambio.
locale: es
source_locale: zh-CN
source_revision: 'e89989d'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---


Una revisión suele desviarse cuando desde el principio se convierte en «ya te lo cambié de paso».

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

El foco de esta plantilla es identificar riesgos según criterios definidos, no evaluar en genérico «si está bien».

## Relacionado

- [Revisar antes de fusionar](/es/cases/workflows/review-before-merge/)
- [Caso: revisar un PR](/es/cases/review-a-pr/)

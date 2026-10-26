---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página ofrece una plantilla de tareas de creación; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Plantilla de creación
description: Implementar de cero una función, un texto o un artefacto.
locale: es
source_locale: zh-CN
source_revision: 'c47ebbf'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---


En tareas de creación desde cero, los dos problemas más frecuentes son:

- objetivo amplio sin límites
- poca información, pero prisa por que Codex genere ya

La plantilla de creación fija primero el artefacto, el uso y las restricciones, y luego empieza.

## Plantilla

```text
Objetivo: crear 【nombre del artefacto】 para 【uso/usuarios】.
Contexto: 【convenciones existentes, estilo de diseño, límites de dependencias】
Entradas: 【especificación, boceto, referencias @archivos】
Restricciones:
- modificar/crear solo dentro de 【alcance de rutas】
- no introducir 【exclusiones】
- ejecutar 【operaciones de alto riesgo】 solo después de mi aprobación
Aceptación:
- 【resultado observable 1】
- 【resultado observable 2】
- pasos de auto-prueba incluidos
Si falta información, lista las hipótesis y pregunta; no adivines.
```

## Cuándo usarla

- Crear de cero una página, un componente, un script o documentación
- Ya sabes qué entregar, pero aún no has empezado
- Quieres acotar el alcance de creación antes de actuar

## Ideas erróneas habituales

### 1. Crear = darle carta blanca

Hay que aclarar:

- para quién
- para qué sirve
- qué estilos o stacks están prohibidos

### 2. El contexto es solo decoración opcional

En creación, el contexto suele orientar toda la dirección del artefacto.

### 3. Aceptación = «que se vea bien»

Así es muy difícil juzgar si de verdad está terminado.

Lo peor en creación: empezar sin aclarar «qué» y «para quién».

## Relacionado

- [Trabajo guiado por especificación](/es/cases/workflows/specification-driven-work/)
- [Definir criterios de finalización](/es/prompts/define-done/)

---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página ofrece una plantilla de tareas de modificación; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Plantilla de modificación
description: Iterar con límites sobre lo existente.
locale: es
source_locale: zh-CN
source_revision: '6faf299'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---


Esta plantilla encaja en tareas de «cambiar un poco sobre lo que ya hay».

En modificación, lo primero es aclarar los límites del cambio.

## Plantilla

```text
Objetivo: en 【función/archivo existente】 completar 【cambio concreto】.
Contexto: 【por qué cambiar, alcance del impacto】
Entradas: @【rutas de archivos relacionados】
Restricciones:
- mantener 【API/estilo/comportamiento】 salvo que yo lo permita explícitamente
- diff mínimo; sin refactor no relacionado
- tras cada paso, ejecutar solo 【tests relevantes】
Aceptación:
- 【descripción del cambio de comportamiento】
- pasan los tests relacionados
- el diff solo incluye archivos necesarios
```

## Cuándo usarla

- Cambiar una página o un componente existente
- Corregir un bug concreto
- Ajustar texto, interacción o configuración
- Quieres enfatizar «solo esta zona; sin refactor de paso»

## Ideas erróneas habituales

### 1. Modificar es más simple que crear, así que se puede escribir mucho menos

La modificación tropieza con facilidad con código antiguo, restricciones viejas y dependencias ocultas; necesita más límites.

### 2. «Diff mínimo» = cambiar pocas líneas

«Diff mínimo» significa **solo lo directamente relacionado con el objetivo**.

### 3. Decir «mantén el comportamiento actual» no basta

Conviene añadir: qué cuenta exactamente como «comportamiento actual».

## Qué evita esta plantilla

Principalmente:

- cambiar de más
- desviarse
- tocar capas que no autorizaste

Un prompt de modificación, además de «qué cambiar», debe aclarar «qué partes puede modificar».

## Relacionado

- [Definir criterios de finalización](/es/prompts/define-done/)
- [Restricciones y límites](/es/prompts/constraints-and-boundaries/)

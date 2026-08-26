---
title: Plantilla de modificación
description: Iterar con límites sobre lo existente.
locale: es
source_locale: zh-CN
source_revision: e8cb4aa
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Plantilla de modificación

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
- Ajustar copy, interacción o configuración
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

Un Prompt de modificación, además de «qué cambiar», debe aclarar «hasta dónde solo puede cambiar».

## Relacionado

- [Definir el terminado](/es/prompts/define-done/)
- [Restricciones y límites](/es/prompts/constraints-and-boundaries/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página ofrece una plantilla de tareas de modificación; se han revisado enlaces y estructura, y el cuerpo no depende de hechos volátiles del producto.

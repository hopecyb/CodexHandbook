---
title: Plantillas de Prompts
description: Esqueletos reutilizables por tipo de tarea — comprender, crear, modificar, diagnosticar, revisar, investigar, automatizar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Plantillas de Prompts

Ante una «plantilla», hay dos reacciones habituales:

- o la ves demasiado rígida y no quieres usarla
- o la copias tal cual sin distinguir qué hay que adaptar

La plantilla sirve sobre todo para no olvidar bloques clave; no piensa por ti.

El objetivo de estas páginas es conservar la estructura de la tarea, no generar la única respuesta correcta.

## Cómo usarlas

Puedes hacerlo así:

1. Elige el tipo de plantilla más cercano a la tarea
2. Sustituye el contenido entre `【】` por tu caso real
3. Elimina los bloques irrelevantes
4. Añade las restricciones y la aceptación propias de esta vez

La plantilla es un andamiaje, no una respuesta tipo.

| Plantilla | Escenario |
|---|---|
| [Comprender](/prompts/templates/understand/) | Leer repositorio, documentación o material y construir primero el mapa mental |
| [Crear](/prompts/templates/create/) | Implementar de cero una función, un texto o un artefacto |
| [Modificar](/prompts/templates/change/) | Iterar sobre lo existente con límites |
| [Diagnosticar](/prompts/templates/diagnose/) | Localizar la causa raíz, sin cambiar código todavía |
| [Revisar](/prompts/templates/review/) | Revisar un diff, un PR o un cambio de documentación |
| [Investigar](/prompts/templates/research/) | Investigación y comparación con citas |
| [Automatizar](/prompts/templates/automate/) | Tareas repetidas, scripts y flujos desatendidos |

## Ideas erróneas habituales

### 1. La plantilla se copia tal cual

Sin adaptar placeholders ni recortar lo irrelevante, la plantilla vacía la tarea.

### 2. Con plantilla, el Prompt ya es «profesional»

Solo conserva la estructura; no decide:

- cuál es el objetivo real
- dónde trazar la restricción
- cómo escribir la aceptación

### 3. Cuanto más completa la plantilla, mejor

Para quien empieza, «suficiente sin ser voluminosa» basta.

Elige primero el tipo correcto y adáptalo a tu tarea; no sustituyas la tarea por la plantilla.

Principios de escritura: [Fundamentos de Prompts](/prompts/basics/) y [Anatomía de una tarea](/prompts/task-anatomy/).

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe el uso de plantillas; se han revisado enlaces y tipología, y el cuerpo no depende de hechos volátiles del producto.

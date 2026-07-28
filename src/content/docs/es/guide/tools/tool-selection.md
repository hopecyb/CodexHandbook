---
title: Selección de herramientas
description: Cuándo usar terminal, búsqueda, navegador u otras herramientas.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

«Selección de herramientas» significa: de qué forma conviene hacer esto, con eficacia y con seguridad.

Al elegir herramienta, juzgar por tipo de tarea suele ser más claro.

## Qué miras al elegir herramienta

Al elegir, miras sobre todo:

- Cuál se acerca más a la tarea actual
- Cuál obtiene el resultado con el menor coste
- Cuál tiene menos riesgo y se comprueba mejor

Con el mismo objetivo, una herramienta equivocada no siempre falla del todo, pero a menudo es más lenta, más tortuosa y más propensa a imprevistos.

| Necesitas | Prioriza |
|---|---|
| Cambiar archivos del repositorio | Herramientas de archivo |
| Ejecutar tests / build | Terminal |
| Consultar hechos públicos | Búsqueda web |
| Ver el estado real de una página | Navegador (avanzado) |

En el prompt, escribe qué herramientas se permiten y cuáles se prohíben, para reducir salidas no autorizadas a la red o instalaciones de dependencias a ciegas.

## Cómo elegir si no estás seguro

Si no estás seguro, puedes juzgar en este orden:

1. ¿Tratas un proyecto local o consultas hechos externos?
2. ¿Necesitas «ejecutar una acción» o solo «ver el resultado»?
3. ¿Qué herramienta completa este paso con el menor alcance?

Por ejemplo:

- Quieres ver cambios de código → archivo
- Quieres confirmar si el build pasa → terminal
- Quieres confirmar cómo se ve ahora la página → navegador
- Quieres confirmar información pública actualizada → búsqueda web

## Malentendidos habituales

### 1. La herramienta no es mejor cuanto más potente

Cuanto más potente, suele significar también:

- Mayor superficie de impacto
- Más riesgo
- Más necesidad de que entiendas qué está haciendo

### 2. Aunque el terminal pueda hacerlo casi todo, no siempre hay que priorizarlo

Si solo quieres confirmar cómo se ve una página, el navegador suele ser más directo.  
Si solo quieres un número de versión público, la búsqueda web encaja mejor que hacerle ejecutar comandos por todas partes.

### 3. ¿Y si no sé elegir?

Puedes juzgar con esta regla:

- **Leer/cambiar contenido del proyecto** → archivo
- **Verificar comando o build** → terminal
- **Consultar hechos públicos** → búsqueda
- **Ver la presentación real de la página** → navegador

### 4. Una tarea suele usar más de una herramienta

Muchas tareas reales combinan, por ejemplo:

- Primero leer archivos, luego ejecutar el build
- Primero buscar hechos públicos, luego volver a reescribir documentación
- Primero mirar la página en el navegador, luego arreglar en el código

La clave es usar en cada paso la herramienta más adecuada; no hace falta obsesionarse con «solo una».

## Formulación usable directamente

Puedes añadir en la tarea:

```text
Prioriza archivos y terminal; no busques en la red. Si necesitas el navegador para comprobar la página, explica primero el motivo.
```

Elige primero la herramienta mínima y más cercana a la tarea; no empieces por la de mayor superficie de impacto.


---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página es el principio de selección de herramientas impulsado por la tarea: leer/cambiar contenido del proyecto prioriza archivo; verificar comandos prioriza terminal; consultar hechos públicos prioriza búsqueda; ver la página real prioriza navegador; el marco se contrastó con los capítulos de herramientas del manual actual y las categorías reales de herramientas.  
**Última verificación:** 2026-07-26

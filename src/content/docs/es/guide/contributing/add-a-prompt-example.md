---
title: Añadir un ejemplo de prompt
description: Enviar prompts reproducibles a examples/prompts, con metadatos y criterios de aceptación.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Los ejemplos de prompt viven en el directorio raíz del repositorio [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts) y se enlazan desde el cuerpo del manual. La especificación de diseño está en [`docs/planning/examples-system.md`](/docs/planning/examples-system.md).

## Contenido de esta página

Los atascos habituales incluyen:

- No saber «qué tipo de prompt merece entrar»
- No saber en qué formato escribirlo para que otros lo reutilicen directamente

Esta página resuelve cómo enviar un ejemplo que **otros puedan de verdad probar, aprender y reproducir**.

## Criterios de inclusión

Aquí se recogen «ejemplos reproducibles con contexto, límites y criterios de aceptación», no fragmentos de inspiración.

Un ejemplo de prompt válido debe responder al menos tres cosas:

- Cuándo usarlo
- Cómo decirlo exactamente
- Cómo juzgar después si salió bien

Si solo es un texto que suena inteligente, pero nadie conoce las premisas ni cómo aceptarlo, se parece más a una nota que a un ejemplo.

## Nomenclatura de archivos

```text
examples/prompts/<category>/<slug>.md
```

Ejemplos de `category`: `development`, `research`, `meta-workflows`, `team`.

## Metadatos obligatorios (YAML frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Corregir un bug y añadir tests
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Secciones obligatorias del cuerpo

1. **Escenario de uso**
2. **Preparación previa** (permisos, rama, archivos de contexto)
3. **Prompt recomendado** (completo y copiable)
4. **Criterios de aceptación** (lista, comprobable de forma objetiva)
5. **Formas habituales de fallar**
6. **Páginas relacionadas del manual** (enlaces a `src/content/docs/`)

Opcional: versión mínima, desglose didáctico, variables sustituibles.

## Malentendidos habituales

### No disperses el foco

Algunos contribuidores escriben mucho de fondo, teoría y extensiones, y el prompt realmente copiable queda enterrado en el medio.

La forma más estable es:

- Escribir primero completo el prompt recomendado
- Luego añadir premisas, variables y formas de fallar
- Al final, el contenido explicativo

### Haberlo usado una vez aún no es un ejemplo completo

Tú sabes qué premisas dabas por sentadas entonces; el lector no.

Así que hay que escribirlas, por ejemplo:

- A qué entrada de producto aplica
- Qué archivos, capturas o contexto hacen falta
- Si por defecto se permite cambiar archivos, ejecutar comandos o salir a la red

### No metas información sensible real en el ejemplo

Si el ejemplo incluye tokens reales, cuentas, enlaces internos o datos de clientes, no sirve para un repositorio público.

El ejemplo debe enseñar el método, no exponer tu entorno de producción.

## Ejemplo de criterios de aceptación

```markdown
## Criterios de aceptación

- [ ] El test que fallaba ahora pasa
- [ ] La suite de tests del alcance acordado pasa
- [ ] El diff solo toca archivos relacionados con la tarea
- [ ] No se ejecutó git push
```

## Umbral de calidad

- Objetivo y definición de hecho claros
- Incluye explicación de límites de permiso y seguridad
- Sin secretos reales ni PII
- El estado `verified` requiere [verificación independiente](/guide/contributing/verify-technical-content/)

## Flujo de envío

Este orden suele ser más estable:

1. Decide primero qué tipo de tarea real resuelve el ejemplo
2. Escribe una versión del prompt que otros puedan copiar directamente
3. Da las condiciones previas y los límites mínimos necesarios
4. Deja claro «qué cuenta como éxito»
5. Al final, comprueba si hay filtración de datos sensibles o directorio incorrecto

## Checklist del PR

- [ ] La ruta del archivo nuevo está en el índice de `examples/README.md` (si se mantiene índice)
- [ ] Al menos una página de caso o de flujo enlaza a este ejemplo (opcional pero recomendado)

Un buen ejemplo de prompt debería permitir que otros lo reproduzcan directamente y obtengan un resultado cercano.


---

**Estado:** verificado  
**Base de verificación:** Contrastado ítem a ítem con el directorio actual `examples/`, el frontmatter de ejemplos, la forma de indexar y el flujo de contribución; los requisitos de la página están alineados con la estructura de enlaces de casos/flujos existente y no dependen de comportamientos variables de un cliente Codex concreto.  
**Última verificación:** 2026-07-26

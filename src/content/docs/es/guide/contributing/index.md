---
title: Contribuir
description: Cómo contribuir al manual con texto, casos, ejemplos de prompt y traducciones — proceso y estándares de calidad.
sidebar:
  order: 80
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

El **Codex Handbook** es un sitio de documentación mantenido por la comunidad. Se aceptan correcciones de errores, páginas nuevas, casos reproducibles y ejemplos de prompt en [examples/](/examples/README.md).

## Contenido de esta página

- Tipos de contribución y puntos de entrada
- Estándares de escritura y verificación
- Expectativas de PR y publicación

## Qué contribuciones aportan más valor

Si en el sitio ves:

- Algo que tú mismo no entiendes
- Entradas en el índice cuyo contenido no guía bien
- Comandos, capturas o explicaciones ya desactualizados

esas ya son pistas de contribución muy valiosas.

No hace falta ser «el que más sabe del tema» para empezar a ayudar. Muchas mejoras útiles vienen justo de quien empieza y señala «aquí se asume que ya lo sé, pero yo no lo entendí».

## Tipos de contribución

| Tipo | Descripción | Guía |
|---|---|---|
| Corrección / cambio pequeño | Erratas, enlaces, una frase desactualizada | PR directo |
| Nueva página de guía | Texto del capítulo bajo `src/content/docs/` | [Escribir una guía](/guide/contributing/write-a-guide/) |
| Caso | `src/content/docs/cases/` | [Plantilla de caso](/cases/use-cases/case-study-template/) |
| Ejemplo de prompt | `examples/prompts/` | [Añadir un ejemplo de prompt](/guide/contributing/add-a-prompt-example/) |
| Verificación técnica | Marcar `verified`, actualizar fecha | [Verificar contenido técnico](/guide/contributing/verify-technical-content/) |
| Traducción | `en/`, `zh-tw/`, etc. | Hoja de ruta M6; estabilizar primero el texto fuente |

## Malentendidos habituales

### Contribuir no equivale a escribir un capítulo entero nuevo

Quien participa por primera vez suele imaginar que «contribuir» es rellenar un bloque grande de contenido.

En realidad, estas cosas también valen mucho:

- Añadir un párrafo que un principiante entienda
- Corregir una formulación engañosa
- Completar una entrada de índice que faltaba
- Degradar o fechar un comando desactualizado

### «No soy experto» no significa «mi feedback no sirve»

Si el público objetivo incluye a principiantes, los puntos en los que te atascas al leer son en sí una señal de alto valor.

La condición es solo: formular el problema con concreción e intentar convertirlo en una expresión más clara, no dejar solo un «aquí no se entiende».

## Principios básicos

1. **El chino simplificado `root` es el texto fuente** (salvo indicación contraria)
2. **No copiar** tutoriales externos literales; ver [plan de integración de fuentes externas](/docs/planning/external-source-integration.md)
3. Los **hechos variables** deben llevar fecha de `Última verificación`
4. **Cada slug del sidebar** debe tener su markdown; si no, `npm run build` falla
5. Las páginas nuevas deben actualizar también el sidebar de `astro.config.mjs`

## Cómo empezar la primera contribución

Si es tu primera contribución, el orden más estable es:

1. Elige un punto en el que te hayas atascado de verdad
2. Decide si es corregir texto, completar página, añadir ejemplo o verificar información desactualizada
3. Cambia solo ese trozo pequeño, pero deja claras las premisas y la perspectiva del lector
4. Ejecuta el build y confirma que no rompiste la estructura del sitio

Así es más fácil tener éxito —y más fácil de revisar— que empezar con un gran cambio de capítulo.

## Desarrollo local

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Antes de fusionar, ejecuta:

```bash
npm run build
```

## Código de conducta

- Respeta el trabajo de otros; discute sobre el asunto, no sobre la persona
- No envíes claves reales ni datos de clientes
- Ante un refactor amplio, abre primero un issue o RFC

La primera contribución no tiene que aspirar a escribir mucho. Aclarar un punto que de verdad atasca a un principiante y confirmar que pasa la verificación de build ya aporta mucho valor.

## Enlaces relacionados

- Repositorio: <https://github.com/hopecyb/CodexHandbook>
- [Esquema de capítulos](/docs/planning/chapter-outline.md) (para planificación)

---

**Estado:** verificado  
**Base de verificación:** Contrastado ítem a ítem con la estructura actual del repositorio, el mantenimiento del sidebar, el sistema de estados de página y el flujo de contribución; el contenido pertenece a las reglas de mantenimiento del manual y no depende de comportamientos de UI variables de un cliente Codex concreto.  
**Última verificación:** 2026-07-26

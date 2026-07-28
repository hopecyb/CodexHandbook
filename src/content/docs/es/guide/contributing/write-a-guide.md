---
title: Escribir una página de guía
description: Estructura, frontmatter y convenciones de enlaces cruzados para el cuerpo nuevo del manual.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Esta página explica cómo añadir o reescribir páginas de tipo **guía** en `src/content/docs/` (no casos puros ni tablas de referencia puras).

## Contenido de esta página

Los atascos habituales incluyen:

- No saber cómo debe quedar una página de guía
- No estar seguro de si escribes un «tutorial», una «norma» o un «resumen de índice»
- No saber cómo escribir para que de verdad ayude a un principiante

Aquí se desglosan esos problemas para que puedas escribir páginas de guía fáciles de mantener después y que el lector entienda.

## Función de una página de guía

Una «página de guía» no se completa solo apilando material. Debe ayudar al lector a pasar de «sé que este tema existe» a «más o menos sé cuándo usarlo, qué mirar primero y qué trampas evitar».

Así que no suele ser solo una lista de puntos ni solo una lista de comandos: también debe decir al lector cómo seguir el siguiente paso.

## Frontmatter

```yaml
---
title: Título de la página
description: En una frase, el problema que resuelve este texto
---
```

Opcionalmente, al final del texto, un pie unificado (como en las páginas existentes):

```markdown
---

**Estado:** planned | draft | review | verified | outdated | archived
**Productos aplicables:** App / CLI / IDE / Cloud
**Última verificación:** YYYY-MM-DD
```

## Estructura recomendada

Elige secciones según la [plantilla de integración de fuentes externas](/docs/planning/external-source-integration.md#6-推荐页面模板); combinaciones habituales:

- Qué problema resuelve la página
- Para quién sirve
- Enfoque mínimo usable
- Flujo de trabajo recomendado
- Errores habituales
- Límites de seguridad
- Checklist de aceptación
- Referencias

Las páginas de operación de producto pueden inclinarse a pasos; las de concepto, a tablas y esquemas.

## Malentendidos habituales

### No hace falta que cada página sea una enciclopedia

Al escribir la primera guía, es fácil meter todo lo que sabes y que el foco se pierda.

La forma más habitual es:

- Decir primero qué problema principal resuelve la página
- Luego qué malinterpreta con más facilidad el lector
- Luego dar un enfoque o criterio suficiente

Eso suele ayudar más al recién llegado que llenar todos los detalles de una vez.

### No escribas solo para quien ya sabe; piensa cómo lee el otro

Tú conoces el contexto; quien llega por primera vez, no.

Así que hay que añadir a propósito este puente:

- Para quién sirve la página
- Qué debería poder resolver al terminar
- Si solo quiere empezar, qué punto agarrar primero

### Una página de guía no sustituye la documentación oficial

El manual de la comunidad puede ayudar a entender, encadenar y aterrizar; pero los hechos que cambian hay que volver a verificarlos en la documentación oficial.

## Enlaces cruzados

- Enlaces internos con ruta raíz: `/cases/workflows/explore-plan-execute-verify/`
- Enlaza a la página canónica; evita repetir bloques grandes
- Registra la página nueva en el `index.md` del capítulo y en el sidebar de `astro.config.mjs`

## Tono

- Español orientado a quien practica
- Reconocer la incertidumbre («prevalece la documentación oficial»)
- No usar la narrativa del «prompt universal»

## Orden de escritura

Puedes escribir en este orden:

1. Primero qué problema resuelve exactamente la página
2. Luego los puntos que el lector malinterpreta o se salta con más facilidad
3. Luego el enfoque mínimo usable, el flujo o el criterio
4. Al final, enlaces cruzados y referencias

## Verificación

Antes del PR, lee [Verificar contenido técnico](/guide/contributing/verify-technical-content/). Información variable como comandos, precios y permisos debe revalidarse.

Una buena página de guía no consiste en «escribir todo el material», sino en que quien llega por primera vez sepa por qué existe la página, qué mirar primero y hacia dónde ir después.

## Referencias
- Documentación oficial de OpenAI Codex
```
---

**Estado:** verificado  
**Base de verificación:** Contrastado con el frontmatter actual de la documentación del repositorio, el sistema de estados del pie, los hábitos de enlaces cruzados y el mantenimiento del sidebar; esta página describe normas de escritura del cuerpo del manual y sugerencias de estructura, sin depender de detalles de versión de producto concretos.  
**Última verificación:** 2026-07-26

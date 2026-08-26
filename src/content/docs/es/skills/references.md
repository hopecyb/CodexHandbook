---
title: Directorio references/
description: Organiza documentación de referencia larga en un Skill para divulgación progresiva.
locale: es
source_locale: zh-CN
source_revision: c595507
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`references/` encaja con material largo que no necesitas expandir cada vez, para que el flujo principal no quede largo y confuso.

No es solo «meter unos documentos más»: es guardar aparte lo que **no hay que leer siempre de inmediato, pero sí es útil en un paso concreto**, y abrirlo solo cuando haga falta.

# Directorio references/

Cuando el cuerpo de `SKILL.md` se alarga demasiado, mueve normas detalladas, APIs y listas de comprobación a `references/`, y cítalos bajo demanda en los pasos.

## Ejemplo

```text
my-skill/
├── SKILL.md
└── references/
    ├── style-guide.md
    └── api-contracts.md
```

En `SKILL.md` escribe:

```md
Al revisar el estilo del código, lee references/style-guide.md y comprueba según esas reglas.
```

## Qué hace

- `SKILL.md` lleva el flujo principal
- `references/` lleva el «material que se abre cuando hace falta»

También puedes pensarlo así:

- `SKILL.md` es la instrucción de trabajo
- `references/` es el armario de materiales

Así, al leer el Skill no te aplastan de entrada grandes bloques de contexto, y cuando necesitas detalle tienes base.

## Cuándo merece la pena sacar `references/`
Si en `SKILL.md` empiezan a pasar estas cosas, considera separar:

- Un bloque largo de normas ocupa espacio cada vez
- Hay varios materiales de temas distintos mezclados
- El flujo principal queda interrumpido por contexto de fondo y cuesta pillar la línea en la primera lectura

En el primer Skill no hace falta tener `references/`.  
El orden habitual es **hacerlo funcionar primero y separarlo cuando el contenido de verdad se alargue**.
## Malentendidos habituales

### 1. `references/` no es solo copiar un poco de contenido fuera

Su papel más importante es mantener el flujo principal corto, claro y ejecutable.

### 2. Más material de referencia no siempre es mejor

Si metes de todo en `references/`, solo mudas el desorden de un archivo a muchos.

### 3. Con `references/`, `SKILL.md` puede ser muy escueto

El flujo principal debe seguir en `SKILL.md`; si no, la primera lectura no deja claro cómo ejecutar.

## Principios

- El flujo principal queda en `SKILL.md`; el material de referencia se carga bajo demanda
- Un archivo, un tema, para facilitar el mantenimiento
- Evita repetir en references los pasos que ya están en SKILL.md

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** El runtime actual de Codex usa de forma explícita la lectura bajo demanda del cuerpo del Skill y del material relacionado; la explicación de `references/` en esta página es un principio estable de organización documental.  
**Última verificación:** 2026-07-26

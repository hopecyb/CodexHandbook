---
title: Directorio templates/
description: Proporciona plantillas de salida y esqueletos de informes dentro de un Skill.
locale: es
source_locale: zh-CN
source_revision: 9f93d04
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

`templates/` no es solo un directorio para «ahorrar un poco de formato». Su papel práctico es estabilizar la salida del Skill sin improvisar cada vez.

Si `references/` se inclina más a «qué consultar al entrar», `templates/` se inclina a «cómo debe verse la salida». Resultados con estructura fija y fáciles de revisar encajan aquí.

# Directorio templates/

`templates/` guarda formatos de salida que el Skill reutiliza al ejecutarse: por ejemplo informes de revisión, esqueletos de changelog o tablas de comparación de investigación.

## Ejemplo

```text
review-skill/
├── SKILL.md
└── templates/
    └── review-report.md
```

En `SKILL.md` indica: «Emite la conclusión de la revisión según la estructura de templates/review-report.md.»

## Qué hace

- `SKILL.md` lleva el flujo
- `templates/` lleva el aspecto del resultado

También puedes pensarlo así:

- El Skill decide «cómo hacerlo»
- La template decide «cómo presentarlo al final»

Reduce dos problemas habituales:

- Cada vez la estructura de salida es distinta
- La información está, pero a otros les cuesta leerla, compararla o revisarla

## Cuándo merece la pena `templates/`

Si quieres que cierto tipo de resultado se parezca cada vez, encaja una plantilla, por ejemplo:

- Informes de revisión
- Changelog
- Tablas de comparación de investigación
- Listas de comprobación de release

En el primer Skill no hace falta tener `templates/`.
Pero en cuanto empieces a repetir «por favor, emite según esta estructura», conviene sacarlo aparte.

## Errores frecuentes

### 1. La template solo hace el resultado más bonito

No solo es belleza: el resultado es más estable, comparable y fácil de revisar.

### 2. Con template, el Skill ya no necesita requisitos de salida claros

Tampoco.

`SKILL.md` debe seguir diciendo cuándo usar la plantilla y qué campos son obligatorios.

### 3. Toda salida merece una plantilla

No necesariamente.

Si un tipo de resultado casi no se repite, o cambia mucho de estructura cada vez, forzar una plantilla puede atar de más.

## Cuándo crear `templates/` aparte

Si en dos o tres veces seguidas repites «emite según esta estructura», merece la pena convertirlo en `templates/`.

El valor central de `templates/` es estabilizar la estructura de salida y facilitar la reutilización.
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** El runtime actual de Codex permite guiar el uso de archivos adjuntos en un Skill; esta página trata el patrón estable de plantillas de salida, sin depender de la UI del cliente ni del flujo de instalación actuales.  
**Última verificación:** 2026-07-26

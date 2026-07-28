---
title: "Ejemplo: Skill de revisión"
description: Ejemplo de Skill basado en pr-review, listo para reutilizar o adaptar en el equipo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Ejemplo: Skill de revisión

Este ejemplo corresponde al `pr-review` de [Crear tu primer Skill](/skills/create-your-first-skill/); ajústalo a las necesidades del equipo.

## SKILL.md

```md
---
name: pr-review
description: Revisa el git diff y lista problemas bloqueantes, huecos de tests y sugerencias de estilo. Úsalo cuando el usuario mencione review, revisión o comprobación previa al merge. No sirve para escribir funciones nuevas.
---

# Revisión de PR

## Entrada
- Rama de comparación por defecto: main (si no existe, la rama por defecto)

## Flujo
1. Listar archivos cambiados y tipo de cambio (función / corrección / refactor / docs)
2. Por cada cambio lógico: ¿faltan tests? ¿rompe la API?
3. Comprobar si hay secretos, logs de depuración o un diff ajeno demasiado grande
4. Salida: 🔴 Bloqueante / 🟡 Sugerencia / 🟢 Aprobado

## Prohibido
- No hacer git push
- No modificar APIs públicas no discutidas
```

## Prueba

```text
$pr-review Revisa mis cambios sin commitear
```
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Revisar un diff y devolver conclusiones estructuradas sigue siendo un uso típico de Codex; esta página ofrece un esqueleto ilustrativo de `SKILL.md`, sin depender de una UI volátil.  
**Última verificación:** 2026-07-26

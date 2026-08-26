---
title: Seguridad y versiones de Skills
description: Origen de instalación, límites de permisos, actualización y rollback — gobernar Skills de equipo.
locale: es
source_locale: zh-CN
source_revision: 8e8c837
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Un Skill no es solo una plantilla de Prompt más.

Influye en cómo trabaja Codex y a veces trae scripts u otros recursos.

Por eso, si el origen no es de confianza, el contenido no se ha revisado o las versiones se desvían, el riesgo no es mucho menor que el de MCP. Esta página explica cómo el equipo **elige, instala, actualiza y audita** Skills.

## Contenido

- Qué Skills no conviene instalar
- Fijar versiones y revisar cambios
- Relación con la distribución vía Plugin

## Por qué también importa al usuario habitual

Si haces alguna de estas cosas:

- Instalar un Skill que alguien compartió
- Referenciar Skills de equipo en el proyecto
- Actualizar Skills existentes
- Recomendar un Skill a un compañero

Ya participas en la cadena de propagación del riesgo.

La seguridad de Skills no puede depender solo de «alguien que lo gestione de forma central»; cada usuario necesita criterio básico.

Base: [Descripción general de Skills](/es/skills/overview/) · [Crear tu primer Skill](/es/skills/create-your-first-skill/)

## Modelo de amenazas (simplificado)

| Riesgo | Manifestación |
|---|---|
| Skill malicioso | Inducir a filtrar secretos o ejecutar shell destructivo |
| Permisos excesivos | Leer/escribir rutas que no debería tocar |
| Cadena de suministro | Depender de un repositorio de Skills de terceros alterado |
| Skill obsoleto | Incompatible con el CLI nuevo; comportamiento anómalo |

## Qué comprobar antes de instalar

Ante un Skill, pregunta primero tres cosas:

1. ¿De dónde viene?
2. ¿Qué le hace hacer de más a Codex?
3. ¿Entiendo su `SKILL.md` y los scripts adjuntos?

Si no puedes responder dos de las tres, no conviene meterlo directo en un proyecto formal.

## Principios de instalación

1. **Origen**: prioriza el marketplace oficial y Git interno de la empresa; ten cuidado con gists anónimos
2. **Lectura**: antes de instalar, abre `SKILL.md` y los scripts adjuntos; mira si piden permisos raros
3. **Aislamiento**: separa directorios de Skills de proyectos de cliente y de experimentos personales
4. **Uso mínimo**: si un Skill basta, no apiles diez

## Errores frecuentes

### 1. Un Skill es solo texto; no hay riesgo real

Como afecta al flujo, a la elección de herramientas y a cómo se ejecutan scripts, el riesgo no es solo «cambió el tono».

### 2. Si mucha gente lo usa, puede ir directo a producción

Que a otros les sirva no implica que encaje con tu repo, límites de Permiso y normas de equipo.

### 3. Actualizar un Skill es como actualizar un documento

Para el equipo, actualizar un Skill es actualizar un comportamiento automatizado: trátalo con la misma seriedad que actualizar una dependencia.

## Versiones y actualización

| Práctica | Notas |
|---|---|
| Pin de versión | Documenta nombre del Skill + commit/tag |
| Revisión de cambios | Las actualizaciones de Skill van por PR, como las de dependencias |
| Changelog | Mantén release notes del conjunto de Skills del equipo |
| Rollback | Conserva una copia de la versión anterior; cambia rápido si falla |

Un Plugin puede empaquetar Skills para distribución unificada: [Descripción general de Plugins](/es/skills/plugins/plugins-overview/)

## Hábitos de equipo

Si un Skill lo reutilizarán varias personas a largo plazo, no lo dejes en «alguien pasó una ruta por chat privado».  
Es mejor:

- Origen fijo
- Registro de versiones
- Notas de actualización
- Camino de rollback

## Con la llamada `$skill`

Cuando el usuario llama con `$name` de forma explícita, la intención es clara; cuando el **modelo elige el Skill solo**, limita en `AGENTS.md` la lista disponible y los escenarios.

## Lista de gobernanza de equipo

- [ ] Lista blanca de orígenes de Skills permitidos
- [ ] Onboarding de nuevos: solo el «paquete base»
- [ ] Revisión trimestral de Skills que aún hacen falta
- [ ] Alineado con [Patrones allow y deny](/es/guide/customization/rules/allow-and-deny-patterns/)

## Errores comunes

- Instalar desde un enlace de chat un «Skill universal de un clic»
- Que el AGENTS.md de un repo de producción apunte a un Skill en una ruta personal
- Actualizar sin correr una tarea de humo
- Confiar en el comportamiento sin haber leído `SKILL.md`

## Fuentes de referencia
- Guías de seguridad de OpenAI Codex Skills
---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** OpenAI Help «Skills in ChatGPT» confirma que los Skills pueden incluir instructions, supporting files y code, y que el usuario debe revisar origen y riesgo antes y después de subirlos; las recomendaciones de gobernanza de esta página alinean con ese principio.  
**Última verificación:** 2026-07-26

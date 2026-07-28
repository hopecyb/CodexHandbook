---
title: Plugins
description: Página sobre cómo el equipo distribuye capacidades de extensión; primero entiende que es la capa de empaquetado, no un tipo de capacidad nuevo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un Plugin resuelve sobre todo cómo empaquetar un conjunto de capacidades de extensión para que otros las instalen y gestionen.

Se acerca más a:

- Empaquetado
- Distribución
- Actualización
- Gobernanza de Permisos

No es un tipo de capacidad nuevo inventado por separado.

## Escenarios de uso

Este grupo apunta sobre todo a dos situaciones:

- Vas a distribuir al equipo un conjunto unificado de capacidades de extensión
- Quieres decidir si merece la pena instalar un Plugin

Si solo estás aprendiendo por tu cuenta, suele bastar con una página de conceptos.

## Entrada del grupo

- [Descripción general de Plugins](/skills/plugins/plugins-overview/): la relación del Plugin con Skill y MCP, y por qué se parece más a una capa de distribución

## Errores frecuentes

### 1. Instalar un Plugin implica seguridad automática

El Plugin solo hace más cómoda la distribución de capacidades; no implica confianza por defecto ni Permiso bajo por defecto.

### 2. Si tiene muchas funciones, merece la pena instalarlo

Merece más mirar primero:

- Si la fuente es de confianza
- Si el alcance de Permisos es grande
- Si el equipo puede actualizar, hacer rollback y auditar

El Plugin se parece más a un paquete de distribución de capacidades de extensión; tampoco sustituye a Skill o MCP.

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI  
**Nota de revisión:** El catálogo de Plugins, la política de instalación y el soporte de superficie siguen evolucionando; este grupo fijó demasiado esos detalles, por eso se marca `outdated` hasta reescribirlo según el catálogo vigente.  
**Última verificación:** 2026-07-26

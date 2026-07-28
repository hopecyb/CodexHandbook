---
title: Hooks
description: Añade comprobaciones, logs y bloqueos en nodos fijos de ejecución; cuándo bloquear y cuándo solo registrar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un Hook inserta automáticamente una comprobación o un registro en un momento fijo.

Se ocupa de comprobar, registrar e interceptar en nodos del flujo; no define cómo se hace la tarea en sí.

## Contenido

Este grupo cubre sobre todo 3 preguntas:

- En qué momento debo disparar el Hook
- ¿Quiero impedir que ocurra el problema, o solo registrarlo?
- En la primera configuración, cómo empezar con bajo riesgo

## Orden de lectura

1. [Descripción general de Hooks](/skills/hooks/hooks-overview/): primero distingue Hook de Skill y MCP
2. [Tipos de eventos Hook](/skills/hooks/hook-event-types/): saber si colgarlo delante, detrás, o al inicio/fin de sesión
3. [Ejemplos de configuración de Hooks](/skills/hooks/hooks-examples/): tres patrones habituales — solo registrar / bloquear primero / comprobación ligera de entrada

## Orden de configuración

No conviene empezar con la política de bloqueo más estricta. Un orden más adecuado:

1. Primero `log`
2. Luego `warn`
3. Luego `block`

Así es más fácil verificar antes:

- Si el evento está bien colgado
- Si hay muchos falsos positivos
- Si el rendimiento ralentiza el uso diario

Un Hook se puede ver como una pequeña compuerta en un nodo del flujo, para comprobar, registrar o interceptar.

---

**Estado:** desactualizado  
**Productos aplicables:** CLI / App (según versión)  
**Nota de revisión:** El alcance de soporte, el modelo de eventos y la entrada de configuración de Hooks dependen mucho de la versión del cliente; a 2026-07-26, el material público oficial no basta para validar de forma estable este grupo, por ahora marcado como `outdated`.  
**Última verificación:** 2026-07-26

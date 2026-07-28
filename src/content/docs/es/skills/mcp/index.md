---
title: MCP
description: Página sobre cómo conectar herramientas y fuentes de datos externas, y cuándo hace falta MCP.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`MCP` es una forma estándar de conexión: Codex usa MCP para enlazar herramientas y fuentes de datos externas.

Si el Skill se centra en «los pasos para hacer el trabajo», MCP se ocupa de «traer la herramienta externa».

## Contenido del grupo

- En qué casos hace falta de verdad MCP
- Cómo conectar un sistema externo sin abrir demasiados Permisos
- Qué tipos de problemas mirar primero cuando no conecta o no responde

## Orden recomendado

1. [Descripción general de MCP](/skills/mcp/mcp-overview/): primero separa el papel de MCP frente a Skill y Plugin
2. [Conectar un servidor MCP](/skills/mcp/connect-an-mcp-server/): conecta el primer servidor siguiendo la idea de configuración
3. [Depurar MCP](/skills/mcp/debugging-mcp/): qué mirar cuando no conecta, no aparecen herramientas o el Permiso no encaja

## Malentendidos frecuentes

### 1. Con MCP, Codex «puede hacerlo todo»

Lo que puede hacer depende por completo de qué herramientas expone ese servidor MCP y de cuánto Permiso tienen esas herramientas.

### 2. MCP es solo un problema técnico de integración

En cuanto se conecta a un sistema real, pasa a ser a la vez:

- Un problema de Permisos
- Un problema de exposición de datos
- Un problema de auditoría

Así que no es solo «cómo conectar», sino también «cómo no conectar mal».

MCP solo merece entrar en juego cuando la Tarea necesita tocar un sistema real fuera del repositorio.

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Las páginas de este grupo tocan la forma actual de integrar MCP en Codex, la ubicación de la configuración y la coordinación de Permisos; el material público oficial cubre poco el detalle del cliente y hay que reescribirlo según el producto vigente.  
**Última verificación:** 2026-07-26

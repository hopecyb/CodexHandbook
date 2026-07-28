---
title: Seguridad
description: 'Página sobre riesgos a nivel de equipo, superficie de ataque e ideas de mitigación: primero dónde está el riesgo, después los controles.'
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Si entras al grupo de seguridad directamente por páginas de detalle, es fácil quedarse solo con términos sueltos sin saber qué están defendiendo.

Este grupo se entiende mejor en el orden «de dónde viene el riesgo → qué capa bloquear → qué capa revisar».

## Orden recomendado

1. [Modelo de amenazas](/guide/team-enterprise/security/threat-model/)
2. [Riesgos de Plugin y MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/)
3. [Prompt injection](/guide/team-enterprise/security/prompt-injection/)

## Quién debería mirarlo primero

- El equipo va a ampliar el alcance de uso
- Empiezas a conectar extensiones de terceros, herramientas externas o reglas compartidas
- Quieres saber qué riesgos no se resuelven solo con «recordar a todos que tengan cuidado»

El foco de las páginas de seguridad es ayudarte a identificar qué riesgos deben controlarse con límites de sistema.

---

**Estado:** verified  
**Productos aplicables:** Escenarios de equipo / empresa  
**Base de verificación:** La documentación actual de OpenAI sobre plugins, apps e integraciones sigue enfatizando los riesgos de seguridad de conexiones externas, Permisos de acción, acceso a sistemas de origen y límites de Aprobación; esta página es solo la navegación de la sección de seguridad, ordenada como modelo de amenazas → riesgos Plugin/MCP → Prompt injection.  
**Última verificación:** 2026-07-26

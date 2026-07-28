---
title: Conectar un servidor MCP
description: Configuración, autenticación, verificación y diagnóstico para conectar con seguridad la primera herramienta MCP.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Esta página se centra en el flujo de conexión y verificación; el detalle del protocolo y el desarrollo de servidores están en la documentación oficial de MCP.

## Antes de empezar

- [ ] Has entendido los límites de seguridad de [Descripción general de MCP](/skills/mcp/mcp-overview/)
- [ ] Tienes una cuenta de prueba de solo lectura o en entorno Sandbox
- [ ] Confirmas que la versión actual del cliente Codex soporta MCP (según documentación oficial)

## Flujo recomendado

### 1. Elige el tipo de servidor

| Tipo | Descripción | Riesgo |
|---|---|---|
| Servidor local stdio | Proceso arrancado en la máquina | Medio: Permiso del proceso = Permiso de tu usuario |
| HTTP/SSE remoto | Servicio alojado | Medio-alto: hace falta TLS y rotación de tokens |

En la primera integración, conviene empezar por un **ejemplo oficial o un servidor local de solo lectura**.

### 2. Añade la configuración

La ubicación depende de CLI/App; lo habitual es un bloque de configuración `mcp` a nivel de usuario o de proyecto. Estructura ilustrativa (**los nombres de campo se rigen por la documentación oficial**):

```json
{
  "mcpServers": {
    "example-readonly": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_TOKEN": "léelo de una variable de entorno; no lo hardcodees en el repo"
      }
    }
  }
}
```

Principios:

- Inyecta secretos con variables de entorno o un gestor de secretos
- Los cambios de configuración pasan por revisión en Git (salvo los secrets)

### 3. Reinicia o recarga el cliente

Tras cambiar la configuración MCP suele hacer falta reiniciar la sesión de Codex para refrescar la lista de servidores.

### 4. Verifica que las herramientas son visibles

En la Tarea, pide de forma explícita:

```text
Lista las herramientas MCP disponibles ahora (solo nombre y una frase de descripción).
Luego llama en modo solo lectura a una herramienta de prueba y muestra el resultado.
No ejecutes operaciones de escritura.
```

### 5. Prueba en pasos pequeños

Elige una Tarea real pero de bajo riesgo, por ejemplo: «Con MCP consulta el título del ticket #123; no cambies el estado.»

## Modos de autenticación

| Modo | Cuándo |
|---|---|
| API Key / PAT | Desarrollo personal; rotación periódica |
| OAuth | Autorización a nivel de usuario; adecuado para SaaS |
| Local sin autenticación | Solo mock en la máquina; no lo expongas a la red |

Si falla, comprueba: token caducado, variable de entorno no inyectada, proxy corporativo que intercepta.

## Lista de depuración

| Síntoma | Causa posible |
|---|---|
| Lista de herramientas vacía | Ruta de configuración incorrecta; el proceso no arranca |
| Timeout en la llamada | Red, VPN, servidor caído |
| Permiso denegado | Scope del token insuficiente |
| El modelo nunca llama a la herramienta | La descripción de la Tarea no lo pide; o la `description` de la herramienta no es clara |

## Coordinación con la Aprobación

En la primera llamada a una herramienta desconocida, el cliente puede pedir confirmación: es el comportamiento esperado. No animes en la normativa del equipo a «permitir para siempre todas las escrituras MCP».

## Fuentes de referencia

- Documentación de configuración MCP de OpenAI Codex
- Ejemplos de servidor en modelcontextprotocol.io

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Esta página describe de forma directa la configuración actual de servidores MCP, la recarga y los pasos de verificación; son muy sensibles a la versión y a la implementación del cliente, y por ahora no conviene marcarlos como `verified`.  
**Última verificación:** 2026-07-26

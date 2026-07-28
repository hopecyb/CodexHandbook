---
title: Depurar la conexión MCP
description: Pasos sistemáticos cuando el servidor MCP no arranca, la herramienta hace timeout o el resultado es anómalo.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

MCP conecta sistemas externos a Codex. Al fallar hay tres tipos habituales: **el proceso no arranca**, **autenticación incorrecta** y **lógica de la herramienta o timeout**. Esta página da un orden de comprobación para no cambiar la configuración a ciegas.

## Contenido de esta página

- Cómo reproducir al mínimo un problema de MCP
- Lista de comprobación de logs y configuración
- Cuándo sospechar de la implementación del servidor y no de Codex

Páginas relacionadas: [Descripción general de MCP](/skills/mcp/mcp-overview/) · [Conectar un servidor MCP](/skills/mcp/connect-an-mcp-server/)

## Flujo de triaje

```text
1. ¿Puede arrancar el servidor solo en la terminal?
2. ¿Son correctos la sintaxis y la ruta del JSON/TOML de configuración?
3. ¿Son visibles las variables de entorno en el proceso MCP?
4. ¿Se reinició la sesión de Codex para cargar la nueva configuración?
5. ¿Una sola llamada a herramienta hace timeout / tiene parámetros erróneos?
```

## Fallo al arrancar

| Comprobación | Nota |
|---|---|
| Ruta del comando | ¿Están `npx`, `uvx` o la ruta absoluta en el PATH? |
| Versión de dependencias | ¿Cumple Node/Python los requisitos del servidor MCP? |
| Ejecución manual | Copia command + args de la configuración y ejecútalos en el shell |
| Transporte | ¿Coincide stdio vs HTTP/SSE con la documentación? |

## Fallo de autenticación

- ¿Se inyecta la API key por variable de entorno (no escrita en el repo)?
- ¿Los MCP tipo OAuth han caducado y hay que reautorizar?
- ¿El proxy corporativo bloquea el tráfico saliente de MCP?

Índice de variables de entorno: [Variables de entorno](/guide/reference/environment-variables/)

## Anomalías en la llamada a herramienta

| Síntoma | Causa posible |
|---|---|
| Tool not found | Desajuste de versión del servidor y del schema del cliente |
| Timeout | API externa lenta; sube el timeout u optimiza la consulta |
| Resultado vacío | Nombre de parámetro incorrecto; mira el log del servidor MCP |
| Texto corrupto | Codificación distinta de UTF-8 |

En el Prompt, pide al Agent que **imprima la estructura devuelta por la herramienta** (desensibilizada) para depurar.

## Hábitos seguros de depuración

- Usa API keys de un **tenant de prueba**, no de producción
- No pegues tokens completos en el chat con los logs de depuración
- Si sospechas un MCP malicioso, desconéctalo de inmediato y rota las claves

Índice de errores: [Referencia de errores y mensajes](/guide/reference/error-reference/)

## Errores habituales

- Cambiar la configuración sin reiniciar la sesión de Codex
- Tener configuraciones MCP inconsistentes en IDE y CLI
- Dejar el nivel de log del servidor MCP en debug para siempre y pegar capturas con secretos

## Lista de verificación

- [ ] Puedes arrancar el servidor MCP de forma independiente en la terminal
- [ ] Has llamado con éxito al menos a una herramienta de solo lectura
- [ ] El equipo tiene una plantilla estándar de configuración MCP

## Fuentes de referencia
- Especificación y guía de depuración de Model Context Protocol
---

**Estado:** desactualizado  
**Productos aplicables:** CLI / IDE / App  
**Nota de revisión:** Los pasos de diagnóstico dependen de cómo el cliente Codex actual carga, muestra y llama a las herramientas MCP; el riesgo de cambio es alto y hay que reescribirlos según la documentación vigente.  
**Última verificación:** 2026-07-26

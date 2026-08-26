---
title: MCP
description: Conecta herramientas y contexto de terceros a ChatGPT y Codex con acceso controlado.
locale: es
source_locale: zh-cn
source_revision: ff68431
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP (Model Context Protocol) responde a «¿cómo puede un Agent llamar a herramientas y datos externos al repositorio?». No define un flujo de trabajo.

## Para quién es

- Desarrolladores individuales que quieren que Codex consulte documentación, diseños, incidencias o herramientas internas.
- Equipos que necesitan una configuración uniforme de herramientas externas, OAuth y privilegio mínimo.
- Responsables de mantenimiento que investigan por qué «el servidor está configurado, pero sus herramientas no aparecen o las llamadas fallan».

Si la tarea solo lee y escribe en el repositorio actual, empieza con las funciones integradas de archivos y terminal. Añade MCP únicamente cuando necesites contexto o acciones de terceros.

## Orden de lectura

1. [Introducción a MCP](/es/skills/mcp/mcp-overview/): distingue las responsabilidades de MCP, Skills y Plugins
2. [Conectar un servidor MCP](/es/skills/mcp/connect-an-mcp-server/): conecta el primer servidor con la CLI o `config.toml`
3. [Depurar MCP](/es/skills/mcp/debugging-mcp/): diagnostica las capas de configuración, inicio, autenticación y herramientas

## Límites actuales de compatibilidad

- La App de escritorio de ChatGPT, Codex CLI y la integración IDE comparten la configuración MCP cuando usan el mismo host de Codex.
- Los clientes locales de Codex admiten servidores STDIO y Streamable HTTP.
- ChatGPT Web no lee el archivo local `~/.codex/config.toml`; utiliza herramientas MCP remotas proporcionadas por Plugins instalados.

## Tres reglas básicas

1. MCP expone herramientas, pero no define por ti un proceso fiable. Conserva los flujos duraderos en un Skill o en `AGENTS.md`.
2. La capacidad del servidor depende de las herramientas expuestas y del alcance de las credenciales subyacentes.
3. Empieza con herramientas de solo lectura, un entorno de prueba y un conjunto pequeño. No experimentes con un token de administrador de producción.

## Fuentes oficiales

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [Especificación de Model Context Protocol](https://modelcontextprotocol.io/)

---

**Estado:** verified

**Productos aplicables:** App de escritorio de ChatGPT / Codex CLI / IDE; ChatGPT Web usa herramientas MCP remotas mediante Plugins

**Alcance de la verificación:** Compatibilidad de clientes, configuración compartida, tipos de transporte y comandos de la CLI

**Última verificación:** 2026-08-25

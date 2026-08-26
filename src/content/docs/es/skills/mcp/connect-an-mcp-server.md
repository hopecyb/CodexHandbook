---
title: Conectar un servidor MCP
description: Configura, autentica y verifica el primer servidor MCP mediante la CLI o config.toml.
locale: es
source_locale: zh-cn
source_revision: 972ccc3
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

Este capítulo completa el ciclo oficial actual: **añadir el servidor -> inspeccionar la configuración -> confirmar las herramientas en una sesión -> realizar una llamada de solo lectura**.

## Antes de empezar

- Lee la [introducción a MCP](/es/skills/mcp/mcp-overview/).
- Confirma que `codex mcp --help` funciona.
- Empieza con una fuente de confianza y un caso de solo lectura.
- No incluyas nunca un token real en el historial, en prompts ni en el repositorio.

## Ruta A: añadir un servidor STDIO con la CLI

El ejemplo oficial usa el servidor de documentación Context7:

```bash
codex mcp add context7 -- npx -y @upstash/context7-mcp
codex mcp list
```

Esto añade el servidor a la configuración de Codex. Todo lo que aparece después de `--` es el comando de inicio STDIO. La primera ejecución puede descargar un paquete npm, así que comprueba antes su nombre y procedencia.

## Ruta B: editar config.toml

La configuración de usuario se encuentra de forma predeterminada en `~/.codex/config.toml`. Un proyecto de confianza también puede usar `.codex/config.toml`.

STDIO:

```toml
[mcp_servers.context7]
command = "npx"
args = ["-y", "@upstash/context7-mcp"]
startup_timeout_sec = 10
tool_timeout_sec = 60
```

Streamable HTTP remoto:

```toml
[mcp_servers.internal_docs]
url = "https://mcp.example.com"
bearer_token_env_var = "INTERNAL_DOCS_TOKEN"
enabled_tools = ["search_docs", "get_doc"]
```

Sustituye el nombre, la URL y las herramientas ilustrativas por los indicados en la documentación real del servidor. `bearer_token_env_var` guarda el nombre de una variable de entorno, no el token.

## Servidores OAuth

Después de configurar un servidor compatible con OAuth, ejecuta:

```bash
codex mcp login <server-name>
```

Las listas MCP de la App de escritorio y del IDE también identifican los servidores OAuth y ofrecen Authenticate.

## Inspeccionar desde cada cliente

| Superficie | Configuración o inspección |
|---|---|
| App de escritorio de ChatGPT | Settings -> MCP servers; reiniciar después de guardar; usar `/mcp` |
| Codex CLI | `codex mcp add/list/login`; usar `/mcp` en la TUI |
| Integración IDE | Gear -> MCP servers; reiniciar la extensión después de guardar |

Estas superficies comparten la configuración cuando usan el mismo host de Codex. ChatGPT Web no lee la configuración local.

## Prompt de verificación

```text
Usa únicamente el servidor MCP conectado actualmente:
1. Enumera los nombres de herramientas relacionadas con la búsqueda en documentación de desarrollo.
2. Usa una herramienta de solo lectura para encontrar el uso básico del ejecutor de pruebas de Node.js.
3. Indica el nombre de la herramienta que se llamó realmente.
4. No escribas ni conectes otro servicio.
```

Evidencias: el servidor aparece en `codex mcp list` o `/mcp`, una herramienta de solo lectura devuelve datos estructurados y no se solicita ningún permiso ajeno a la tarea.

## Opciones de privilegio mínimo

- `enabled_tools`: permite solo las herramientas enumeradas.
- `disabled_tools`: excluye herramientas adicionales después de aplicar la allowlist.
- `enabled = false`: conserva la configuración, pero desactiva temporalmente el servidor.
- `required = true`: hace fallar el inicio si un servidor esencial no puede inicializarse.

## Si falla

Registra el error exacto y diagnostica la configuración, el proceso o la red, la autenticación y cada herramienta mediante [Depurar MCP](/es/skills/mcp/debugging-mcp/). Cambia un solo campo cada vez.

## Fuente oficial

- [OpenAI: conectar Codex a un servidor MCP](https://learn.chatgpt.com/docs/extend/mcp#connect-codex-to-an-mcp-server)

---

**Estado:** verified

**Productos aplicables:** App de escritorio de ChatGPT / Codex CLI / IDE

**Última verificación:** 2026-08-25

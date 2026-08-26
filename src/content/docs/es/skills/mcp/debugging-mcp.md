---
title: Depurar conexiones MCP
description: Diagnostica fallos de MCP en las capas de configuración, transporte, autenticación y herramientas.
locale: es
source_locale: zh-cn
source_revision: 829c1e9
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

«La herramienta MCP no funciona» oculta varias capas posibles de fallo. Identifica primero la capa y cambia después una sola variable.

## Conservar cuatro evidencias

```bash
codex mcp list
codex mcp --help
node --version    # solo para un servidor STDIO de Node.js
python3 --version # solo para un servidor STDIO de Python
```

Registra también el nombre del servidor, si usa STDIO o Streamable HTTP, el error exacto y si se produjo en App, CLI o IDE. Nunca registres el token completo.

## Diagnóstico en cuatro capas

| Capa | Síntoma | Primera comprobación |
|---|---|---|
| Configuración | El servidor no aparece en la lista | Ruta del archivo, sintaxis TOML, nombre del servidor, `enabled` |
| Inicio/conexión | Timeout durante la inicialización | Comando STDIO y PATH, o URL HTTP, TLS y proxy |
| Autenticación | 401/403 o solicitud de inicio de sesión | Estado de OAuth, variable de entorno del token, scope |
| Herramienta | El servidor está conectado, pero la llamada falla | Nombre, argumentos, allowlist y timeout de la herramienta |

## 1. Confirmar que se cargó la configuración

- Archivo de usuario: `~/.codex/config.toml`.
- Archivo de proyecto: `.codex/config.toml`, que solo se carga para un proyecto de confianza.
- App, CLI e IDE comparten la configuración en un mismo host de Codex; no mantengas copias divergentes.
- Usa `codex mcp list` o `/mcp`; la mera existencia del archivo no demuestra que funcione.

## 2. Fallo al iniciar STDIO

Comprueba que `command` esté en PATH, que la versión del runtime sea compatible, que `cwd` exista y que la procedencia de las dependencias sea fiable.

Ejecutar el comando directamente solo demuestra que se inicia. Un servidor de protocolo puede esperar indefinidamente una entrada; eso no constituye una prueba completa de llamada a herramienta.

Aumenta `startup_timeout_sec` únicamente si la inicialización es realmente lenta. El valor predeterminado es de 10 segundos; un valor enorme puede ocultar un comando incorrecto.

## 3. Fallo de conexión de Streamable HTTP

Comprueba en este orden:

1. La URL y el certificado TLS.
2. El proxy corporativo o la VPN.
3. La existencia de la variable de entorno indicada por `bearer_token_env_var`.
4. Si OAuth necesita ejecutar de nuevo `codex mcp login <server-name>`.
5. Si los registros del servidor recibieron la inicialización.

No pongas temporalmente el token en `http_headers` estáticos; podría filtrarse en la configuración y en capturas de pantalla.

## 4. Servidor conectado, herramienta no disponible

| Síntoma | Comprobación |
|---|---|
| No aparecen herramientas | `enabled_tools` / `disabled_tools`, lista de herramientas del servidor |
| No se encuentra la herramienta | Versión del servidor, cambio de nombre, lista obsoleta de la sesión |
| Fallo al validar argumentos | Schema de la herramienta, no campos antiguos del prompt |
| Timeout | Consulta más pequeña y después `tool_timeout_sec`; valor predeterminado de 60 segundos |
| Resultado vacío | Visibilidad y filtros del sistema de origen usando la misma identidad |

## Prompt de reproducción mínima

```text
Inspecciona únicamente el servidor MCP <server-name>:
1. Informa de los nombres de las herramientas visibles.
2. Llama a <readonly-tool> con <minimal-arguments>.
3. Conserva el tipo de error y el mensaje del servidor, pero redacta las credenciales.
4. No llames a otro servidor ni escribas.
```

## Aceptación después de reparar

- [ ] `codex mcp list` muestra el estado esperado.
- [ ] Una herramienta de solo lectura funciona con argumentos mínimos.
- [ ] La causa raíz identifica una capa, no se limita a «reiniciar lo arregló».
- [ ] Se retiraron los tokens temporales, los registros de depuración y los permisos amplios.
- [ ] Se actualizaron la configuración del equipo y las notas de reparación.

## Fuente oficial

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)

---

**Estado:** verified

**Productos aplicables:** App de escritorio de ChatGPT / Codex CLI / IDE

**Última verificación:** 2026-08-25

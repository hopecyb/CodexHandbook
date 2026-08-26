---
title: Introducción a MCP
description: Comprende clientes, servidores, herramientas, autenticación y límites de seguridad de MCP.
locale: es
source_locale: zh-cn
source_revision: 7b8726f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
---

MCP convierte «el modelo quiere usar una capacidad externa» en una llamada estructurada a una herramienta. Sirve para conectar documentación de terceros, navegadores, Figma, gestores de incidencias y servicios internos.

## Cadena de llamada

```text
Codex en una tarea
  -> cliente MCP proporcionado por el host de Codex
  -> servidor MCP: proceso local o servicio remoto
  -> sistema externo: documentación, diseño, incidencias, API interna
  -> resultado estructurado devuelto a la tarea
```

| Componente | De qué se encarga | De qué no se encarga |
|---|---|---|
| Host de Codex | Leer la configuración, conectar servidores y exponer herramientas al Agent | Definir los permisos de negocio del servidor |
| Servidor MCP | Definir herramientas, autenticación, argumentos y resultados estructurados | Garantizar automáticamente que todas las herramientas sean seguras |
| Skill | Definir cuándo y cómo usar las herramientas | Establecer conexiones de red |
| Plugin | Componer y distribuir Skills, conectores, MCP y capacidades relacionadas | Actuar como otro protocolo de herramientas |

## Transportes de servidor compatibles

### STDIO

Codex inicia un proceso local y se comunica mediante la entrada y salida estándar. Es adecuado para herramientas de desarrollo locales y servicios que solo se ejecutan en el equipo actual.

Revisa el comando, la procedencia de las dependencias y las variables de entorno reenviadas, porque el proceso hereda el entorno de ejecución local.

### Streamable HTTP

Codex se conecta a una URL remota. La documentación actual confirma compatibilidad con tokens Bearer, OAuth y autenticación de sesión de ChatGPT para servidores propios de confianza.

El servicio recibe los argumentos de la herramienta. Comprueba TLS, identidad, registros, conservación de datos y permisos de las herramientas.

## Combinar MCP, Skills y Plugins

Para una comprobación semanal de incidencias de alta prioridad:

| Capa | Contenido |
|---|---|
| MCP | Expone `search_issues`, `get_issue` y herramientas relacionadas |
| Skill | Define filtros, evidencias y formato del informe |
| Plugin | Distribuye el Skill, el conector y la definición MCP |
| Scheduled task | Ejecuta la tarea verificada en un momento fijo |

Son responsabilidades ortogonales, no una escala de evolución. Consulta el [mapa de capacidades](/es/skills/capability-map/).

## Cuándo merece la pena usar MCP

| Merece la pena | Todavía no |
|---|---|
| Acceso reiterado a un mismo sistema externo | Una consulta puntual en una web pública |
| Se necesitan argumentos y resultados estructurados | Bastan las herramientas de archivos del repositorio |
| Se necesita OAuth o control granular de herramientas | Solo existen escrituras privilegiadas y no hay entorno de prueba |
| El equipo necesita una conexión reutilizable | No se puede revisar la procedencia del servidor |

## Etapas de seguridad

1. **Prueba de solo lectura:** documentación pública o tenant de prueba, solo herramientas de consulta.
2. **Validación del equipo:** proyecto, rol y allowlist de herramientas restringidos; registrar fallos y latencia.
3. **Escrituras limitadas:** operaciones pequeñas y reversibles con aprobación humana.
4. **Operación gobernada:** autorización revocable, configuración revisable, registros redactados y aislamiento por entorno.

No incluyas tokens en prompts, Git ni cabeceras HTTP estáticas. Usa preferiblemente OAuth, `bearer_token_env_var` o variables de entorno reenviadas.

## Lista de comprobación previa a la conexión

- [ ] Se pueden revisar el origen, la versión y el comando de inicio del servidor.
- [ ] Se han identificado las herramientas de lectura y de escritura.
- [ ] Se usa un tenant de prueba o una identidad con privilegio mínimo.
- [ ] Se entiende qué argumentos y resultados registra el sistema remoto.
- [ ] Las escrituras tienen rutas de aprobación, reversión y auditoría.
- [ ] El equipo sabe desactivar el servidor y revocar el acceso.

## Siguiente paso

Ve a [Conectar un servidor MCP](/es/skills/mcp/connect-an-mcp-server/), empieza por uno de solo lectura y verifícalo después con `codex mcp list` y `/mcp`.

## Fuentes oficiales

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp)
- [OpenAI: Plugins](https://learn.chatgpt.com/docs/plugins)

---

**Estado:** verified

**Productos aplicables:** App de escritorio de ChatGPT / Codex CLI / IDE; ChatGPT Web usa MCP remoto mediante Plugins

**Última verificación:** 2026-08-25

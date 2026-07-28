---
title: Descripción general de MCP
description: Model Context Protocol — conecta Codex de forma segura a herramientas y fuentes de datos externas.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


MCP es una forma estándar de conexión para que Codex enlace herramientas y fuentes de datos externas.

Si quieres que Codex consulte Jira, lea una base de conocimiento, acceda a una API interna u opere una herramienta controlada, hace falta un mecanismo de «cómo conectar, qué se puede llamar y cómo gestionar Permisos». **MCP (Model Context Protocol)** resuelve precisamente eso.

## Contenido

- MCP resuelve el problema de que «Codex no llega a los sistemas reales»
- División de papeles con Skill y Plugin
- Por qué MCP debe entrar en la gobernanza de seguridad

## Primero, qué no es

MCP no es:

- Pegar usuario y contraseña directamente a Codex
- Dejar que el modelo «conecte como quiera»
- Dar por fiable por defecto cualquier servicio de terceros

Es una forma de cableado normalizada, para que conectar sistemas externos sea más controlable y auditable.

## Conceptos clave

```text
Codex  ←→  cliente MCP  ←→  servidor MCP  ←→  sistema externo
```

| Componente | Rol |
|---|---|
| Servidor MCP | Expone un conjunto de herramientas (p. ej. `search_issues`, `get_user`) |
| Configuración | Indica a Codex cómo arrancar / conectar el servidor |
| Llamada a herramienta | El modelo elige la herramienta en la Tarea; a menudo hace falta tu Aprobación |

MCP **no aporta** la lógica de negocio en sí. Tu servidor implementa las reglas de lectura/escritura; Codex decide qué herramienta usar en la Tarea.

## Dónde encaja MCP

El Skill se acerca más a un «manual de operaciones»; MCP se ocupa de la «interfaz de herramientas».

- El Skill describe los pasos
- MCP entrega ciertas herramientas externas a Codex

A menudo aparecen juntos:  
el Skill fija el flujo y, en un paso, se llama a una herramienta MCP.

## Relación con Skill y Plugin

| | MCP | Skill | Plugin |
|---|---|---|---|
| Esencia | Protocolo de herramientas | Descripción de workflow | Paquete de distribución |
| Contenido típico | Envoltorio de API | Pasos y normas | Skill + MCP + conectores de aplicación |
| Quién lo mantiene | Tú o un servidor de terceros | Tú o el equipo | El publicador |

Combinación habitual: el **Skill define el flujo** y, en un paso, **llama a una herramienta MCP** para obtener la lista de tickets.

## Cuándo plantearse MCP

Si la Tarea solo necesita leer y escribir archivos del repositorio actual, en general no hace falta MCP.  
Si necesita tocar un sistema real «fuera del repositorio», empieza a plantearte MCP, API u otra integración controlada.

## Escenarios adecuados

| Encaja con MCP | No encaja con MCP |
|---|---|
| Consultar tickets de Linear/Jira | Solo cambiar código dentro del repo |
| Consulta de solo lectura a docs / knowledge base | Basta un `curl` simple y no hace falta reutilizar |
| Herramientas internas controladas | Escrituras de alto Permiso en producción sin auditoría |

## Errores frecuentes

### 1. Con MCP, Codex puede hacerlo todo

Lo que puede hacer depende de qué herramientas expone el servidor MCP y de qué permiten esas herramientas.

### 2. MCP es solo integración técnica, no seguridad

En cuanto MCP se conecta a un sistema real, pasa a ser a la vez:

- Un problema de Permisos
- Un problema de exposición de datos
- Un problema de auditoría
- Un problema de cadena de suministro

### 3. Con MCP ya no hace falta escribir Skill ni documentación

Sigue haciendo falta. MCP resuelve «si se puede llamar a la herramienta», no «con qué flujo hay que llamar y en qué casos no».

## Límites de seguridad

- **Mínimo Permiso**: solo lectura, proyecto limitado, IP limitada
- **Credenciales**: OAuth o tokens de corta duración; no en el Prompt ni en Git
- **Aprobación humana**: escrituras, borrados en lote y envío de mensajes al exterior deben tener revisión
- **Cadena de suministro**: solo servidores de confianza; revisa el código fuente de MCP de terceros

Escenarios empresariales: hoja de ruta `11-team-enterprise/security/plugin-and-mcp-risk`.

## Orden de integración

1. Lee la documentación oficial de MCP y confirma el formato de configuración del cliente actual
2. Empieza con un servidor de ejemplo oficial o de la comunidad de **solo lectura**
3. Valida una sola llamada a herramienta en un proyecto de prueba
4. Luego conecta el sistema real y escribe el runbook

Pasos operativos: [Conectar un servidor MCP](/skills/mcp/connect-an-mcp-server/)

## Errores habituales

- Dar al servidor MCP un Permiso excesivo «por comodidad de desarrollo»
- Tratar MCP como sustituto del Skill (la descripción del flujo sigue en Skill o `AGENTS.md`)
- Cambios de configuración fuera de la revisión de código

## Fuentes de referencia

- [Model Context Protocol](https://modelcontextprotocol.io/)
- Documentación MCP de OpenAI Codex
- KimYx0207 CX-05; stormzhang `20-mcp.md`

---

**Estado:** desactualizado  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Aunque hay contenido conceptual, la página incluye juicios de implementación actuales («formato de configuración del cliente», «comportamiento de Aprobación»); a 2026-07-26 la base pública oficial no basta para validarla por completo.  
**Última verificación:** 2026-07-26

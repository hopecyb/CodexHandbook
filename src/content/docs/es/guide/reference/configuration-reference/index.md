---
title: Referencia de configuración
description: Índice conceptual de claves de configuración de usuario y de proyecto de Codex — rutas y campos según la documentación oficial.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

Las páginas de «referencia de configuración» marean fácil: claves, capas, sobrescrituras por todas partes. Si dejas clara una pregunta, se entiende mucho mejor:

> **¿Qué comportamientos deben cambiarse por configuración, y cuáles no conviene resolver con configuración?**

Los archivos de configuración suelen unificar comportamientos de **modelo, Sandbox, Aprobación, MCP**, etc. Esta página es un **índice conceptual**; rutas concretas de archivo y nombres de claves TOML/YAML los marca la [documentación de OpenAI Codex](https://developers.openai.com/codex) y la versión que tengas instalada.

## Un principio de juicio

En la configuración suele ir lo que **quieres que influya a largo plazo en el comportamiento**; no conviene meter:

- Valores sensibles
- El texto completo de reglas de equipo
- Instrucciones temporales de una sola Tarea

Dividirlo en tres clases aclara:

- **Preferencias de comportamiento a largo plazo** → normalmente en configuración
- **Requisitos concretos de la Tarea** → normalmente en Prompt / `AGENTS.md` / Skill
- **Valores sensibles** → normalmente en variables de entorno o Secret

Si no tienes claro, pregunta: ¿estás cambiando el hábito a largo plazo de Codex, o encargando esta Tarea?

- El hábito a largo plazo suele ir a la configuración
- La instrucción de la Tarea actual suele ir al Prompt, `AGENTS.md` o la descripción de la Tarea

## Capas de configuración

| Capa | Ubicación (concepto) | Contenido típico |
|---|---|---|
| Nivel usuario | `~/.codex/`, etc. | Modelo por defecto, hábitos personales de Aprobación |
| Nivel proyecto | Archivo de configuración en el repo | Sandbox de equipo, lista de MCP |
| Variables de entorno | Inyección Shell / CI | Secretos, interruptores temporales |
| Gestionada | Emitida por la organización | Política obligatoria no sobrescribible |

## Qué gestiona cada capa

- **Nivel usuario**: tus hábitos por defecto
- **Nivel proyecto**: el comportamiento por defecto que el repo quiere compartir
- **Variables de entorno**: valores temporales en tiempo de ejecución
- **Política gestionada**: lo que la organización fija y tú no puedes cambiar en local

Al empezar no hace falta memorizar «quién sobrescribe a quién»; basta saber qué gestiona cada capa a grandes rasgos:

- Nivel usuario: «así me gusta usarlo en el día a día»
- Nivel proyecto: «este repo quiere que todos lo usemos más o menos así»
- Variables de entorno: «valores temporales de esta ejecución»
- Política gestionada: «límites que la organización ya fijó por ti»

Entrada: [Fundamentos de configuración](/guide/customization/configuration/config-basics/) · Enfoque terminal: [Configuración del CLI](/guide/cli/configuration/)

## Índice de dominios de configuración (concepto)

### Modelo y razonamiento

| Intención | Explicación |
|---|---|
| Modelo por defecto | Model ID de las sesiones nuevas |
| Intensidad de razonamiento / reasoning | Nivel para Tareas complejas (si se soporta) |
| Temperatura y muestreo | Suele dejarse por defecto; fijar al scriptar |

Contexto: [Modelos y razonamiento](/guide/foundations/models-and-reasoning/)

### Sandbox y red

| Intención | Explicación |
|---|---|
| Alcance del sistema de archivos | Rutas escribibles; si se permite escribir fuera del proyecto |
| Acceso a red | Prohibido / limitado / permitido |
| Dominios de salida | Allowlist (si se soporta) |

Contexto: [Sandbox y red](/guide/foundations/sandbox-and-network/)

### Política de Aprobación

| Intención | Explicación |
|---|---|
| Antes de ejecutar shell | Preguntar siempre / lista de confianza / automático (alto riesgo) |
| Antes de escribir archivos | Igual |
| Llamadas a Herramientas MCP | Por servidor o por Herramienta |

Contexto: [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/) · Matriz: [Matriz de Permisos](/guide/reference/permission-matrix/)

### Espacio de trabajo y CLI

| Intención | Explicación |
|---|---|
| `cwd` por defecto | Directorio de arranque |
| Por defecto no interactivo | Aprobación y Sandbox para exec |
| Nivel de log | Subirlo al diagnosticar |

### Servidores MCP

| Intención | Explicación |
|---|---|
| Lista de servidores | Comando, URL, transporte |
| Inyección de variables de entorno | Ligada al proceso MCP, no a Git |

[Conectar MCP](/skills/mcp/connect-an-mcp-server/)

### Extensiones IDE / App

Algunos ítems solo están en la UI de ajustes de la extensión y pueden compartir el mismo backend de configuración de usuario que el CLI — según la documentación del producto.

[Ajustes del IDE](/guide/ide/settings/) · [Ajustes de la App de escritorio](/guide/desktop-app/settings/)

## Malentendidos frecuentes

### 1. No todo lo configurable debe ir al archivo de configuración

A veces encaja mejor en:

- `AGENTS.md`
- Variables de entorno
- Skill
- Descripción de la Tarea actual

La configuración no es un contenedor universal.

### 2. No hace falta entender cada clave de configuración desde el principio

La mayoría solo necesita entender al inicio:

- Modelo
- Sandbox
- Aprobación
- MCP

Esas cuatro clases cubren la inmensa mayoría de dudas reales.

### 3. ¿La configuración de proyecto sustituye por completo la documentación del equipo?

La configuración expresa bien «valores por defecto del comportamiento del sistema»; no sustituye explicaciones del tipo «por qué se hace así» o «cuándo no hacerlo».

### 4. Aunque haya muchas claves oficiales, no hace falta aprenderlas todas de una vez

Lo que la mayoría encuentra primero son estas cuatro:

- Modelo por defecto
- Alcance del Sandbox
- Política de Aprobación
- Conexión MCP

Entender esas cuatro ya cubre la mayor parte de las preguntas de la fase de entrada.

## Con variables de entorno

| Tipo | Dónde |
|---|---|
| API key, token | Variables de entorno o gestor de Secrets |
| Interruptores no sensibles | Variables de entorno o configuración |
| Normas de código | `AGENTS.md`, no config |

## Cómo juzgar si debe entrar en la configuración

Ante «¿esto debe ir a la configuración?», usa estas 4 preguntas:

1. ¿Quieres que aplique por defecto a largo plazo?
2. ¿Es información sensible?
3. ¿Es hábito personal o regla compartida del proyecto?
4. ¿Estás ajustando el comportamiento del sistema o solo encargando esta Tarea?

Con esas 4, suele ser más difícil colocarlo mal.

## Cómo decidir al ajustar el comportamiento

Cuando quieras «ajustar el comportamiento de Codex»:

1. ¿Es comportamiento por defecto a largo plazo o un requisito temporal de esta Tarea?
2. ¿Es un valor sensible o configuración normal?
3. ¿Es preferencia personal o regla compartida del proyecto?

Así suele quedar claro si va a:

- Archivo de configuración
- Variable de entorno
- `AGENTS.md`
- Skill
- Prompt actual

## Escenarios habituales

Estas son las que más confunden a principiantes:

| Qué quieres hacer | Dónde suele ir |
|---|---|
| Fijar un modelo a largo plazo | Configuración de usuario o de proyecto |
| El equipo exige correr pruebas antes de cambiar código | `AGENTS.md` |
| Esta Tarea solo permite cambiar `docs/` | Prompt actual |
| API key / token | Variable de entorno o Secret |
| Conectar un servicio MCP | Configuración de proyecto + variables de entorno |

Así se entiende mejor que mirando solo la lista de claves.

Secrets de Cloud: [Secrets y variables de entorno](/guide/web-and-cloud/secrets-and-variables/)

## Disciplina de cambio

1. Cambia solo una clase de configuración cada vez y observa una semana
2. Los cambios de nivel proyecto pasan por PR review
3. Tras actualizar el CLI, haz diff de las notas oficiales de migration
4. No escribas secretos en el archivo de configuración y los committees a Git

La configuración es para comportamiento por defecto a largo plazo, no para valores sensibles ni para sustituir instrucciones de Tarea y reglas de equipo.

## Errores frecuentes

- Nombres de claves de la documentación que no coinciden con un CLI antiguo
- Relajar el Sandbox en tu máquina personal y usarlo en el repo del cliente
- Contradicción con instrucciones de `AGENTS.md` (la configuración permite lo que el documento prohíbe)

## Fuentes de referencia
- OpenAI Codex configuration reference
---

**Estado:** verified  
**Productos aplicables:** CLI / App / IDE  
**Base de verificación:** El material de configuración actual del OpenAI Help Center sigue dejando claro que existen vehículos de configuración de usuario como `~/.codex/config.toml` y `~/.codex/.env`; esta página se posiciona explícitamente como «índice conceptual» y evita fijar nombres de claves, prioridad de rutas o campos de versiones antiguas como hechos, por lo que puede marcarse `verified`.  
**Última verificación:** 2026-07-26

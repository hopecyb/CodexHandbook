---
title: Referencia de comandos CLI
description: Consulta rápida de subcomandos y parámetros habituales del CLI de Codex — índice de aprendizaje, no sustituye el manual oficial.
locale: es
source_locale: zh-CN
source_revision: 6091bcc
translation_status: draft
translated_at: '2026-09-20'
sidebar:
  order: 50
legacyVerification:
  status: verified
  products: CLI
  basis: 'Contrastado con la tabla oficial actual de Developer commands: solo se incluyen entradas Stable y se comprobaron --cd / -C, sandbox y aprobación. Los comandos experimentales u obsoletos quedan fuera.'
  checkedAt: '2026-08-26'
---


La página de referencia de comandos sirve sobre todo para elegir la entrada, no para memorizar parámetros de golpe:

> **¿Ahora debo usar la entrada interactiva o la de comando único?**

Esta página reúne las entradas **Stable** actuales de Codex CLI para buscarlas y compararlas. Antes de ejecutar, consulta `codex --help` y el `--help` de cada subcomando; los parámetros completos y su madurez se rigen por [Developer commands](https://learn.chatgpt.com/docs/developer-commands).

## Cuándo usarla

Usos habituales:

- Si debo entrar ya a lo interactivo o correr un comando de una sola vez
- Si la Tarea es más de chat o más de script
- Sé que quiero el CLI, pero no sé qué tipo de entrada mirar

## Elección de entrada

- Ver, charlar y corregir a la vez: usa `codex`
- Entregar la Tarea de una vez y obtener el resultado al terminar: mira `codex exec`

Para quien empieza con el CLI, eso ya resuelve la mayor parte de la elección de entrada.

## Resumen de comandos Stable

| Entrada | Uso | Detalle |
|---|---|---|
| `codex` | Sesión TUI interactiva | [Modo interactivo](/es/guide/cli/interactive-mode/) |
| `codex exec` / `codex e` | Tarea no interactiva única o por tubería | [Modo no interactivo](/es/guide/cli/non-interactive-mode/) |
| `codex doctor` | Generar un informe de diagnóstico de instalación, configuración, autenticación, entorno de ejecución, Git y terminal | [Diagnóstico del CLI](/es/guide/cli/troubleshooting/) |
| `codex login` / `codex logout` | Gestionar la autenticación | [Inicio de sesión y autenticación](/es/guide/getting-started/sign-in-and-authentication/) |
| `codex resume` / `codex fork` | Continuar o bifurcar una sesión guardada | [Traspaso y reanudación](/es/guide/agent-work/handoff-and-resume/) |
| `codex mcp` | Gestionar servidores MCP | [Conectar MCP](/es/skills/mcp/connect-an-mcp-server/) |
| `codex plugin` | Instalar, enumerar y eliminar plugins | [Plugins](/es/skills/plugins/) |

:::caution[Niveles de madurez distintos]
La referencia oficial también incluye comandos Experimental, Beta y Deprecated. Esta consulta básica no los mezcla con los Stable; comprueba su madurez y sus riesgos antes de utilizarlos.
:::

## Malentendidos frecuentes

### 1. No hace falta memorizar todos los comandos de la página de referencia

Lo práctico es saber primero «qué tipo de entrada encaja con la Tarea actual»; el resto se consulta en el momento con `--help`.

### 2. `codex exec` no es solo la versión avanzada de `codex`

Se orienta más a desatendido, scripts y CI, no a una entrada interactiva «más potente».

### 3. Ver un parámetro no implica que debas tocarlo ya

Muchos parámetros dependen de la versión, el entorno y la política de seguridad actuales; entiende la intención antes de decidir si moverlos.

### 4. La página de referencia de comandos ≠ tutorial de operación

Es:

- Un mapa de entradas
- Un índice de parámetros
- Un punto de paso a «qué página mirar con más detalle»

## Modo interactivo (concepto)

```bash
# Arrancar sesión interactiva en la raíz del repo (esquema)
codex

# Operaciones habituales dentro de la sesión (según la TUI)
# - Escribir la descripción de la Tarea
# - / comandos slash → véase la página slash-commands
# - Aprobar peticiones de shell / escritura de archivos
```

Comandos slash: [Comandos slash](/es/guide/reference/slash-commands/)

## Criterio de entrada

Al empezar con el CLI:

1. Corre primero `codex --help`
2. Decide si entrar a lo interactivo o mirar `exec`
3. Cuando uses de verdad un subcomando, mira su propio `--help`

Así es menos fácil atascarse de entrada en toda la tabla de parámetros.

## Puesta en marcha rápida

Si quieres empezar ya:

1. Corre primero `codex --help`
2. Si quieres charlar y actuar a la vez, entra en `codex`
3. Si es para CI o scripts, entonces estudia `codex exec`

Más ligero que hundirse de golpe en el detalle de parámetros.

## Exec no interactivo (concepto)

```bash
# Directorio de trabajo y prompt único (ejemplo)
codex exec --cd /path/to/repo "tu descripción completa de la tarea"

# Parámetros habituales actuales
# --cd, -C       directorio de trabajo
# --model        fijar el modelo
# --sandbox      política de sandbox
# --ask-for-approval, -a  política de aprobación
# tubería stdin  leer el prompt de un archivo o un comando anterior
```

Seguridad: [Patrones de Aprobación humana](/es/cases/workflows/human-approval-patterns/)

## Configuración y autenticación (concepto)

| Operación | Explicación |
|---|---|
| Inicio de sesión | Alineado con [Iniciar sesión y autenticación](/es/guide/getting-started/sign-in-and-authentication/) |
| Archivo de configuración | Nivel usuario / proyecto; véase [Referencia de configuración](/es/guide/reference/configuration-reference/) |
| MCP | [Conectar MCP](/es/skills/mcp/connect-an-mcp-server/) |

## Código de salida y automatización

El modo no interactivo suele usar el **código de salida** para éxito/fallo, pensado para CI:

- `0`: la Tarea terminó según lo acordado
- Distinto de `0`: fallo o hace falta intervención humana — mira el log artifact

La página de comandos CLI sirve sobre todo para distinguir entradas y consultar intenciones; no hace falta memorizar parámetros para empezar.

No ignores stderr en CI; conserva logs para [diagnosticar primero](/es/cases/workflows/diagnose-before-fixing/).

## Diferencia con los comandos slash del chat

| | Terminal `codex` | `/` dentro de la sesión |
|---|---|---|
| Documentación | Esta página + manual de producto | [slash-commands](/es/guide/reference/slash-commands/) |
| Adecuado | Scripts, CI | Exploración interactiva |

## Diagnóstico

| Fenómeno | Apunta a |
|---|---|
| Comando no existe | [Instalar CLI](/es/guide/getting-started/install-cli/) |
| Configuración no aplica | [Configuración del CLI](/es/guide/cli/configuration/) |
| Aprobación bloquea CI | Endurecer el Prompt + Sandbox de solo lectura |

[Diagnóstico del CLI](/es/guide/cli/troubleshooting/)

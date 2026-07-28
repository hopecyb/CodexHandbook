---
title: Referencia de comandos CLI
description: Consulta rápida de subcomandos y parámetros habituales del CLI de Codex — índice de aprendizaje, no sustituye el manual oficial.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La página de referencia de comandos sirve sobre todo para elegir la entrada, no para memorizar parámetros de golpe:

> **¿Ahora debo usar la entrada interactiva o la de comando único?**

Esta página resume las entradas habituales del **CLI de Codex** para buscar y contrastar. **Nombres de comando, parámetros y valores por defecto cambian con la versión**; antes de ejecutar, corre `codex --help` y el `--help` del subcomando, y prevalece la [documentación de OpenAI Codex](https://developers.openai.com/codex).

## Cuándo usarla

Usos habituales:

- Si debo entrar ya a lo interactivo o correr un comando de una sola vez
- Si la Tarea es más de chat o más de script
- Sé que quiero el CLI, pero no sé qué tipo de entrada mirar

## Elección de entrada

- Ver, charlar y corregir a la vez: usa `codex`
- Entregar la Tarea de una vez y obtener el resultado al terminar: mira `codex exec`

Para quien empieza con el CLI, eso ya resuelve la mayor parte de la elección de entrada.

## Resumen de comandos (esquema)

| Entrada | Uso | Detalle |
|---|---|---|
| `codex` | Sesión TUI interactiva | [Modo interactivo](/guide/cli/interactive-mode/) |
| `codex exec` (o equivalente) | Tarea no interactiva única / por tubería | [Modo no interactivo](/guide/cli/non-interactive-mode/) |
| Relacionado con configuración | Leer/escribir configuración de usuario/proyecto | [Configuración del CLI](/guide/cli/configuration/) |

:::caution[Sensible a la versión]
Los nombres de parámetros de la tabla siguiente son redacciones habituales en documentación comunitaria y **no garantizan coincidir con tu CLI instalado**. Tras actualizar, vuelve a contrastar `--help`.
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

Comandos slash: [Comandos slash](/guide/reference/slash-commands/)

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
# Directorio de trabajo y Prompt único (esquema)
codex exec --cwd /path/to/repo "tu descripción completa de la Tarea"

# Intenciones habituales (nombres de parámetro según lo oficial)
# --cwd          directorio de trabajo
# --model        modelo fijo
# --sandbox      política de Sandbox
# --approval     política de Aprobación (especialmente importante sin supervisión)
# tubería stdin  leer el Prompt desde un archivo o un comando aguas arriba
```

Seguridad: [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

## Configuración y autenticación (concepto)

| Operación | Explicación |
|---|---|
| Inicio de sesión | Alineado con [Iniciar sesión y autenticación](/guide/getting-started/sign-in-and-authentication/) |
| Archivo de configuración | Nivel usuario / proyecto; véase [Referencia de configuración](/guide/reference/configuration-reference/) |
| MCP | [Conectar MCP](/skills/mcp/connect-an-mcp-server/) |

## Código de salida y automatización

El modo no interactivo suele usar el **código de salida** para éxito/fallo, pensado para CI:

- `0`: la Tarea terminó según lo acordado
- Distinto de `0`: fallo o hace falta intervención humana — mira el log artifact

La página de comandos CLI sirve sobre todo para distinguir entradas y consultar intenciones; no hace falta memorizar parámetros para empezar.

No ignores stderr en CI; conserva logs para [diagnosticar primero](/cases/workflows/diagnose-before-fixing/).

## Diferencia con los comandos slash del chat

| | Terminal `codex` | `/` dentro de la sesión |
|---|---|---|
| Documentación | Esta página + manual de producto | [slash-commands](/guide/reference/slash-commands/) |
| Adecuado | Scripts, CI | Exploración interactiva |

## Diagnóstico

| Fenómeno | Apunta a |
|---|---|
| Comando no existe | [Instalar CLI](/guide/getting-started/install-cli/) |
| Configuración no aplica | [Configuración del CLI](/guide/cli/configuration/) |
| Aprobación bloquea CI | Endurecer el Prompt + Sandbox de solo lectura |

[Diagnóstico del CLI](/guide/cli/troubleshooting/)

---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** Aunque se ha escrito lo más posible como «mapa de entradas», el núcleo sigue girando en torno a `codex`, `codex exec`, comandos `/` de sesión e intenciones de parámetros; son detalles de producto del CLI muy volátiles; se restaurará `verified` cuando haya documentación oficial de comandos de la versión más reciente.  
**Última verificación:** 2026-07-26

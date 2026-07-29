---
title: Comandos y atajos
description: Subcomandos de la CLI, operaciones en sesión y hábitos de teclado — orientación de producto; parámetros completos en la zona de referencia.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

La eficiencia en la terminal viene de tres piezas: **forma de arranque**, **operaciones rápidas en sesión** y **coordinación con scripts/editor**. Esta página habla de usos y hábitos; las tablas de parámetros están en [Referencia de comandos CLI](/guide/reference/commands/) y [Atajos de teclado](/guide/reference/keyboard-shortcuts/).

## Contenido de esta página

- Cuándo usar `codex` y cuándo `codex exec`
- Qué tipos de operaciones son habituales en una sesión interactiva
- Cómo solidificar operaciones repetidas en alias o scripts

## Qué distinguir primero

Muchos principiantes, al ver la CLI por primera vez, asumen que «comandos y atajos» es memorizar sintaxis y parámetros.

Lo más práctico es distinguir tres cosas:

- Si ahora estás **conversando y haciendo a la vez**
- O quieres que **complete de una vez una Tarea**
- O solo quieres acortar un poco las acciones que repites a menudo

Con eso claro, elegir el comando suele ser mucho más fácil.

## Vista de entradas de comando

| Lo que quieres hacer | Entrada | Detalle |
|---|---|---|
| Conversar y cambiar código | TUI interactiva `codex` | [Modo interactivo](/guide/cli/interactive-mode/) |
| Tarea única en CI / tubería | `codex exec` (o equivalente) | [Modo no interactivo](/guide/cli/non-interactive-mode/) |
| Cambiar el comportamiento por defecto | Archivo de configuración | [Configuración de la CLI](/guide/cli/configuration/) |

:::note
Los nombres de subcomando cambian con la versión; manda `codex --help`.
:::

## Malentendidos frecuentes

### `codex` y `codex exec` no son «simple» frente a «pro»

Muchos lo entienden así:

- Uno es el modo sencillo
- Otro es el modo profesional

Una separación más útil:

- `codex` encaja cuando estás presente y guías mientras miras
- `codex exec` encaja cuando defines la Tarea de antemano y la ejecuta en un flujo de una sola vez

### Más atajos no siempre es mejor

Al principio no hace falta memorizar todos los atajos y comandos `/`.

Domina primero:

- Cómo iniciar la sesión
- Cómo ver qué comandos `/` admite el entorno actual
- Cómo salir, reiniciar y cambiar de directorio

Con eso ya basta.

## «Atajos» en la sesión interactiva

Las teclas concretas y los comandos `/` varían según la versión, pero las categorías son estables:

### Entrada e historial

- Entrada multilínea: usa la combinación de nueva línea según la documentación del producto (a menudo `Shift+Enter` o modo editor)
- Revisar la Tarea anterior: historial de la terminal o historial de la sesión (si existe)

### Comandos con barra

Escribir `/` en el prompt dispara flujos integrados (revisión, compactar Contexto, etc.). **No memorices la lista** — manda el autocompletado `/` del entorno actual. Clasificación orientada al aprendizaje: [Chuleta de comandos con barra](/guide/reference/slash-commands/).

### Relacionados con Aprobación

Cuando el Agent pide ejecutar shell o escribir archivos, la interfaz interactiva sugiere aprobar / rechazar / permitir siempre (si está disponible). Antes de dejarlo sin supervisión, lee [Aprobación y Sandbox](/guide/cli/approvals-and-sandbox/).

## Atajos a nivel de shell (recomendado)

Escribe «entrar al proyecto + arrancar Codex» como función, para reducir errores de directorio:

```bash
# Ejemplo ~/.zshrc (ajusta según necesites)
cx() {
  cd "$1" || return 1
  codex
}
```

Las revisiones no interactivas se pueden encapsular en un script, con el Prompt en `prompts/review.md` para versionarlo.

## Cómo familiarizarte

Al empezar con la CLI, puedes seguir este orden:

1. Primero arranca `codex` en el directorio correcto
2. Luego decide cuándo usar `codex exec`
3. Al final reduce las acciones frecuentes a alias, función o script

Así es menos fácil caer en «aún no domino la herramienta y ya le he puesto otra capa encima».

## Reparto con IDE / App

| | CLI | Extensión IDE |
|---|---|---|
| Contexto | `--cwd`, archivos `@` (según versión) | Archivos abiertos, código seleccionado |
| Encaja con | Scripts, SSH remoto, terminal pura | Cambiar y mirar el diff a la vez |
| Atajos | Teclas de terminal + `/` | Paleta de comandos del editor |

IDE: [Flujo de Tareas locales](/guide/ide/local-task-workflow/)

## Errores frecuentes

- Arrancar en el directorio equivocado y cambiar el proyecto de al lado
- Tratar `/review` de la app como subcomando de terminal y ejecutarlo en el shell externo
- Pegar en la sesión interactiva «Prompts universales» de terceros sin revisar

No hace falta memorizar de golpe todos los comandos y atajos. Primero aclara «¿ahora quiero conversar y hacer, o que lo complete de una vez?» y elegir el comando se vuelve mucho más simple.

## Lista de verificación

- [ ] Puedes iniciar una sesión interactiva en la raíz del repositorio objetivo
- [ ] Sabes dónde consultar los comandos `/` que admite la versión actual
- [ ] Puedes escribir una Tarea de solo lectura mínima con `codex exec` (si el entorno lo ofrece)

## Fuentes de referencia
- Documentación de OpenAI Codex CLI
---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** Esta página toca detalles de interacción de CLI que cambian con la versión (`codex`, `codex exec`, categorías de comandos `/` y atajos en sesión); falta documentación oficial vigente de comandos/atajos lo bastante sólida para sostener estas descripciones; hay que reescribir y volver a verificar.  
**Última verificación:** 2026-07-26

---
title: Comandos y atajos
description: Subcomandos de la CLI, acciones dentro de la sesión y hábitos de teclado; una guía de producto cuyos parámetros completos están en la referencia.
locale: es
source_locale: zh-cn
source_revision: 6a36a12
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

La eficiencia en la terminal depende de tres elementos: **cómo se inicia**, **los atajos dentro de la sesión** y **la combinación con scripts o editores**. Esta página trata los usos y hábitos; las tablas de parámetros están en la [referencia de comandos de la CLI](/es/guide/reference/commands/) y en [atajos de teclado](/es/guide/reference/keyboard-shortcuts/).

## Contenido de esta página

- Cuándo usar `codex` y cuándo `codex exec`.
- Tipos habituales de acciones dentro de una sesión interactiva.
- Cómo convertir operaciones repetidas en alias o scripts.

## Empieza por distinguir

Muchas personas que empiezan dan por hecho que «comandos y atajos» significa memorizar sintaxis y parámetros.

Resulta más práctico distinguir tres situaciones:

- **Conversar mientras trabajas.**
- **Ejecutar una tarea completa de una sola vez.**
- **Acortar acciones que repites a menudo.**

Con esa distinción suele quedar claro qué comando elegir.

## Resumen de puntos de entrada

| Objetivo | Entrada | Detalles |
|---|---|---|
| Conversar y editar de forma interactiva | TUI interactiva `codex` | [Modo interactivo](/es/guide/cli/interactive-mode/) |
| Tarea única en CI o en un pipeline | `codex exec` | [Modo no interactivo](/es/guide/cli/non-interactive-mode/) |
| Cambiar los valores predeterminados | Archivos de configuración | [Configuración de la CLI](/es/guide/cli/configuration/) |

:::note
`codex` y `codex exec` son actualmente puntos de entrada Stable. Consulta `codex --help` y `codex exec --help` para ver los parámetros vigentes.
:::

## Errores de interpretación habituales

### `codex` y `codex exec` no son un modo para principiantes y otro profesional

No se trata de «modo sencillo» frente a «modo experto».

La distinción práctica es:

- `codex` cuando estás presente para observar y orientar;
- `codex exec` cuando la tarea está definida de antemano para una ejecución única.

### Al empezar, más atajos no significa trabajar mejor

Domina primero:

- cómo iniciar una sesión;
- dónde descubrir los comandos `/` disponibles en tu entorno;
- cómo salir, reiniciar y cambiar de directorio.

Eso basta para empezar.

## «Atajos» dentro de la sesión

Las teclas concretas y los comandos `/` cambian según la versión, pero las categorías son estables:

### Entrada e historial

- Entrada multilínea: usa la combinación de salto de línea indicada por el producto, a menudo `Shift+Enter` o el modo editor.
- Recuperar la tarea anterior: usa el historial de la terminal o el historial de la sesión, si está disponible.

### Comandos slash

Escribir `/` en el prompt activa flujos integrados, como revisar o compactar el contexto. **No memorices una lista congelada**: usa el autocompletado `/` de tu entorno. Consulta la clasificación para aprender en la [referencia de comandos slash](/es/guide/reference/slash-commands/).

### Aprobaciones

Cuando el Agent solicita ejecutar shell o escribir archivos, la interfaz ofrece aprobar, rechazar o permitir siempre, si esa opción existe. Lee [Aprobaciones y sandbox](/es/guide/cli/approvals-and-sandbox/) antes de usar la CLI sin supervisión.

## Atajos en el nivel del shell

Agrupa «entrar en el proyecto + iniciar Codex» para reducir los errores de directorio:

```bash
# Ejemplo para ~/.zshrc (ajústalo según tus necesidades)
cx() {
  cd "$1" || return 1
  codex
}
```

Una revisión no interactiva puede envolverse en un script y mantener su prompt en `prompts/review.md` para versionarlo.

## Orden de aprendizaje

1. Inicia `codex` en el directorio correcto.
2. Aprende cuándo resulta adecuado `codex exec`.
3. Convierte las acciones frecuentes en alias, funciones o scripts.

Así evitas añadir abstracciones antes de dominar la herramienta básica.

## Reparto frente a IDE y App

| | CLI | Extensión IDE |
|---|---|---|
| Contexto | Directorio elegido con `--cd` / `-C` y archivos leídos por las herramientas | Archivos abiertos y selección |
| Más adecuada para | Scripts, SSH remoto y terminal pura | Editar mientras se observa el diff |
| Atajos | Teclas de terminal + `/` | Paleta de comandos del editor |

IDE: [flujo de tareas locales](/es/guide/ide/local-task-workflow/)

## Errores habituales

- Iniciar en el directorio equivocado y modificar un proyecto vecino.
- Ejecutar `/review`, que pertenece a la App, como subcomando de una terminal externa.
- Pegar «prompts mágicos» de terceros sin revisar en una sesión interactiva.

No necesitas conocer todos los comandos y atajos el primer día. Distingue entre «conversar mientras trabajo» y «ejecutar una vez», y la elección será mucho más sencilla.

## Lista de aceptación

- [ ] Puedes iniciar una sesión interactiva en la raíz del repositorio de destino.
- [ ] Sabes dónde consultar los comandos `/` disponibles en tu versión.
- [ ] Puedes redactar una tarea mínima de solo lectura para `codex exec`, si está disponible.

## Fuentes de referencia
- Documentación de OpenAI Codex CLI
---

**Estado:** verified

**Productos aplicables:** CLI

**Base de verificación:** Comparado con las páginas oficiales actuales Developer commands y Non-interactive mode; se verificaron `codex`, `codex exec`, `--cd` / `-C` y los puntos de entrada slash dentro de la sesión. Los atajos siguen remitiendo al autocompletado y a `--help` vigentes.

**Última verificación:** 2026-08-26

---
title: Comandos de barra y accesos rápidos
description: Guía rápida para aprender los comandos / y las llamadas a Skills con $, sin pretender ser un manual completo de parámetros.
locale: es
source_locale: zh-CN
source_revision: a34c90f
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 40
---

La primera vez que aparecen los comandos de barra, es fácil pensar que hay que memorizar una jerga complicada. Resulta más sencillo verlos como accesos rápidos que puedes invocar expresamente.

Suelen servir para entrar rápidamente en un modo concreto o un flujo integrado. Los comandos de barra (`/command`) están relacionados con la invocación de una [Skill](/es/skills/overview/) mediante `$name`, pero no son lo mismo. Las listas **cambian según el producto y los permisos de acceso**; además, la aplicación de escritorio, la CLI, el IDE y ChatGPT Web ofrecen conjuntos diferentes. Antes de usarlos, consulta las sugerencias que aparecen al escribir `/` en el campo de mensaje actual y la documentación oficial.

## Distinción de conceptos

| Acceso | Quién lo inicia | Uso habitual |
|---|---|---|
| Comandos de barra como `/review` | Tú escribes `/` | Flujos integrados o configurados |
| `$skill-name` | Tú o el modelo | Skill del proyecto o del usuario |
| Lenguaje natural | Tú | Tareas generales |

## Cómo distinguir los tres

- `/comando`: eliges expresamente un acceso rápido en el chat.
- `$skill`: tú o el modelo indicáis que se use una Skill concreta.
- Lenguaje natural: describes lo que necesitas y dejas que el modelo decida cómo hacerlo.

Si quieres entrar más rápido en un flujo que ya conoces, prueba su `/comando`.

## Qué es

- No es un comando de terminal.
- No es una jerga misteriosa.
- Puedes entenderlo como un «botón de acceso rápido» dentro del chat.

Resulta especialmente útil cuando:

- Ya sabes a qué flujo quieres entrar.
- No quieres volver a explicar la misma intención cada vez.

## Malentendidos frecuentes

### 1. Los comandos de barra son comandos de terminal

Son accesos rápidos de la interfaz de chat, no comandos `codex ...` que debas ejecutar en una shell.

### 2. La lista de comandos de barra nunca cambia

Los comandos disponibles pueden variar entre productos, versiones y entornos. Es más fiable consultar la **lista de sugerencias** del entorno actual.

### 3. Un comando de barra evita las aprobaciones y el sandbox

Si desencadena escritura de archivos, ejecución de comandos o acceso a la red, sigue sujeto a las políticas vigentes.

### 4. Si no conozco los comandos de barra, ¿usaré mal Codex?

Puedes hacer la mayoría de las tareas con lenguaje natural. Los comandos de barra sirven sobre todo para acelerar flujos fijos cuando ya tienes algo de experiencia.

## Accesos habituales en la actualidad

### Aplicación de escritorio / IDE

- `/plan`: cambia al modo de planificación de varios pasos.
- `/review`: revisa los cambios sin confirmar o compáralos con una rama base.
- `/status`: muestra el ID del chat, el uso del contexto y los límites de uso.
- `/mcp`: muestra el estado de las conexiones MCP.
- `/init`: crea una estructura inicial de `AGENTS.md` para el proyecto actual.

### Control de sesión propio de la CLI

- `/permissions`: ajusta el modo de permisos de la sesión actual.
- `/agent`: consulta o cambia la conversación del agente.
- `/model`: selecciona el modelo actual.
- `/status`: comprueba la configuración de la sesión actual.

ChatGPT Web tiene su propio menú de comandos en el campo de mensaje. No supongas que los comandos de la aplicación de escritorio o la CLI estarán disponibles en Web con el mismo nombre.

## Recomendaciones de uso

1. **Escribe primero `/`** para ver qué admite el entorno actual, en lugar de memorizar una lista que puede quedar obsoleta.
2. Para los flujos fijos del equipo, crea preferentemente una **Skill y documentación**, de modo que el nombre del comando no sea un conocimiento exclusivo de los veteranos.
3. Las operaciones de escritura activadas por comandos de barra siguen sujetas al sandbox y a las aprobaciones.

## Cómo probarlo directamente

Puedes empezar así:

1. Escribe `/`.
2. Mira qué ofrece el entorno actual.
3. Elige un comando cuyo nombre y finalidad entiendas.

## Una primera prueba

Si es la primera vez, sigue este orden:

1. Escribe `/` y observa las opciones disponibles.
2. Prueba una cuyo propósito comprendas.
3. Observa si cambia el modo o ejecuta un flujo.
4. Si el equipo necesitará reutilizar ese flujo durante mucho tiempo, considera convertirlo en una Skill.

Así se ve mejor la función de cada uno: los comandos de barra son accesos rápidos y las Skills sirven para reutilizar flujos a largo plazo.

## Diferencia respecto a los comandos de la CLI

| | `/` en el chat | `codex …` en el terminal |
|---|---|---|
| Contexto | Sesión actual y archivos adjuntos | Directorio indicado con `--cd` / `-C` |
| Más útil para | Exploración interactiva | Scripts y CI |

Piensa en los comandos de barra como accesos rápidos del chat. Consultar qué ofrece realmente el entorno actual es más útil que memorizar nombres.

Para los subcomandos de la CLI, consulta [Modo interactivo de la CLI](/es/guide/cli/interactive-mode/) y [Modo no interactivo](/es/guide/cli/non-interactive-mode/). La tabla completa de parámetros está en la [Referencia de comandos de la CLI](/es/guide/reference/commands/).

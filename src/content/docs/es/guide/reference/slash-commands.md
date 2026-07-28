---
title: Comandos slash y entradas rápidas
description: Llamadas a comandos / y Skills $ — consulta de aprendizaje, no un manual completo de parámetros.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


La primera vez que se ven los comandos slash, mucha gente cree que son jerga que hay que memorizar. Piénsalos como un conjunto de entradas rápidas que puedes apuntar a propósito: se entiende mejor.

Suelen servir para entrar rápido en un modo fijo o un flujo integrado. Los comandos slash (`/command`) se relacionan con las llamadas `$name` de [Skill](/skills/overview/), pero no son lo mismo. La lista concreta **cambia con producto y versión**; antes de usar, mira el autocompletado `/` del cliente y la documentación oficial.

## Distinción conceptual

| Entrada | Quién la inicia | Uso típico |
|---|---|---|
| Comandos slash como `/review` | Tú escribes `/` | Flujo fijo integrado o configurado |
| `$skill-name` | Tú o el modelo | Skill de proyecto o de usuario |
| Lenguaje natural | Tú | Tarea general |

## Distinguir los tres directamente

- `/comando`: en el chat, apuntas tú a una entrada rápida
- `$skill`: tú o el modelo nombráis un Skill
- Lenguaje natural: dices la demanda y dejas que el modelo decida cómo actuar

Si solo quieres entrar más rápido en un flujo conocido, probar `/comando` es más directo.

## Qué es

- No es un comando de terminal
- No es jerga misteriosa
- Puedes verlo como «entrada de botón rápido» en la interfaz de chat

Encaja en escenarios como:

- Ya sabes en qué flujo quieres entrar
- No quieres volver a formular la misma intención cada vez

## Malentendidos frecuentes

### 1. Un comando slash es un comando de terminal

Es una entrada rápida en el chat, no el `codex ...` que ejecutas en el shell.

### 2. La lista de comandos slash es fija

En distintos productos, versiones y entornos la lista disponible puede cambiar; mirar la **lista de autocompletado** del entorno actual es más fiable.

### 3. Usar un comando slash te libera de Aprobación y Sandbox

Si detrás dispara escritura de archivos, comandos o red, sigue sujeto a la política actual.

### 4. Si no sé comandos slash, ¿no sé usar bien Codex?

El lenguaje natural basta para la mayoría de Tareas. Los comandos slash aceleran y fijan entradas cuando ya estás un poco más familiarizado.

## Categorías habituales (esquema)

Los nombres siguientes pueden aparecer o desaparecer según la versión; **solo clasificación de aprendizaje**:

### Sesión y modo

- Cambiar a modo plan, Compactación de Contexto, ver ayuda
- Combinar con [Planificación](/guide/agent-work/planning/)

### Revisión y calidad

- Revisar el diff o PR actual
- Combinar con [Revisar diffs](/guide/quality/review-diffs/)

### Espacio de trabajo y Git

- Ver estado, generar mensaje de commit (sigues confirmando si hacer commit)
- Cumplir [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

### Extensión

- Instalar o listar Skills (si el entorno ofrece `skill-installer`, etc.)

## Al usar, ten en cuenta

1. **Primero `/` y mira** qué soporta el entorno actual; no memorices listas caducadas
2. Los flujos fijos del equipo, priorízalos como **Skill + documentación**, para reducir «solo los veteranos saben el nombre del comando»
3. Las escrituras que dispare un comando slash siguen sujetas a Sandbox y Aprobación

## Cómo probarlo directamente

Puedes probar así:

1. Escribe `/`
2. Mira qué hay en el entorno actual
3. Elige uno cuyo nombre y uso entiendas y pruébalo

## La primera vez puedes probar así

En el primer intento:

1. Escribe `/` y mira qué ofrece el entorno actual
2. Elige un comando cuyo uso entiendas y pruébalo una vez
3. Observa si parece más «cambiar de modo» o «correr un flujo»
4. Si es un flujo que el equipo reutilizará a largo plazo, considera sedimentarlo como Skill

Así se ve mejor la división: el comando slash es entrada rápida; el Skill, flujo reutilizable a largo plazo.

## Diferencia con los comandos CLI

| | `/` en el chat | Terminal `codex …` |
|---|---|---|
| Contexto | Sesión actual y archivos @ | Directorio con `--cwd` |
| Adecuado | Exploración interactiva | Scripts, CI |

Los comandos slash son entradas rápidas en el chat; mirar qué ofrece de verdad el entorno actual sirve más que memorizar nombres.

Subcomandos CLI: [Modo interactivo del CLI](/guide/cli/interactive-mode/) y [modo no interactivo](/guide/cli/non-interactive-mode/). Tabla completa de parámetros: [Referencia de comandos CLI](/guide/reference/commands/).

---

**Estado:** outdated  
**Productos aplicables:** App / CLI / IDE  
**Nota de revisión:** Esta página gira en torno a `/review`, categorías de comandos slash y la relación con llamadas `$skill`, pero el conjunto disponible, los nombres y el comportamiento cambian rápido con producto y versión; sin una lista oficial completa actual y una descripción de comportamiento, conviene `outdated`.  
**Última verificación:** 2026-07-26

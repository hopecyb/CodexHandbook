---
title: Profiles de configuración
description: Cambia de combinación de modelo, Sandbox y aprobación con perfiles con nombre — una para desarrollo, otra para revisión, otra para CI.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Un **Profile (perfil de configuración)** te permite guardar un conjunto con nombre (modelo + Sandbox + aprobación, etc.) y cambiar de escenario con un clic, sin ajustar a mano cada vez.

## Qué cubre esta página

- Diferencia entre Profile y «cambiar la configuración por defecto»
- Formas habituales de dividir Profiles
- Cómo puede el equipo compartir definiciones de Profile

## Qué gestiona un Profile

Si la «configuración» es el hábito de trabajo por defecto, un **Profile** es «un conjunto de presets para distintos escenarios».

Puedes verlo así:

- Desarrollo diario: un conjunto
- Revisar un repositorio no confiable: otro
- Revisión de solo lectura: otro
- Tareas automáticas en CI: otro más

Así no tienes que cambiar un montón de interruptores cada vez.

## Ejemplos típicos de Profile

| Nombre de Profile | Intención | Rasgos (concepto) |
|---|---|---|
| `daily` | Desarrollo diario | Modelo equilibrado, Sandbox estándar |
| `strict` | Repositorio no confiable | Aprobación fuerte, red limitada |
| `review-only` | Revisión de solo lectura | Prohíbe escritura o solo permite lectura |
| `ci` | Pipeline | Modelo fijo, no interactivo, sin push |

Campos concretos: [Referencia de opciones](/guide/reference/configuration-reference/).

## Forma de uso (concepto)

1. Confirma en la documentación oficial la sintaxis de Profile (puede relacionarse con `[profiles.name]` en `config.toml` o una estructura equivalente)
2. Crea el Profile y nómbralo
3. Al arrancar, especifica: `codex --profile strict` (el comando según `--help`)
4. En el README, indica «contribuidores: se recomienda `daily`; CI usa `ci`»

Detalle CLI: [Configuración CLI](/guide/cli/configuration/)

## Malentendidos habituales

### Más Profiles no siempre es más flexible

La primera vez mucha gente quiere un Profile por cada escenario mínimo y acaba con más de diez nombres sin recordar las diferencias.

Suele bastar conservar 2 a 4 de los más usados:

- Desarrollo diario
- Modo estricto
- Revisión de solo lectura
- CI

Que sepan distinguir con claridad los límites de riesgo.

### Un Profile no sustituye el juicio

Cambiar a un Profile no significa que todas las tareas posteriores sean absolutamente seguras o adecuadas.

Solo te ayuda a pasar al «estado de partida habitual»; la tarea concreta sigue exigiendo juzgar el repositorio actual y el riesgo.

## Reparto con AGENTS.md

| | Profile | AGENTS.md |
|---|---|---|
| Qué gestiona | Interruptores de capacidad, modelo, Sandbox | Cómo se escribe este proyecto |
| Commit en Git | Opcional (fragmentos de profile a nivel de proyecto) | Sí |
| Personal/equipo | Profile personal puede ser local; el del equipo debe ir por PR | Equipo |

## Errores habituales

- Diez Profiles por repositorio que nadie mantiene
- El Profile `ci` sigue permitiendo `git push`
- Nombres de Profile distintos a la documentación: los novatos usan el incorrecto

## Sugerencia para empezar

Al empezar con Profiles, puedes hacerlo así:

1. Conserva primero un `daily` como perfil por defecto
2. Añade un `strict` para repositorios desconocidos o de alto riesgo
3. Si el equipo tiene automatización, añade aparte un `ci`

Con eso ya cubres la mayoría de los casos habituales.

El valor de Profile es cambiar rápido, en escenarios de riesgo distintos, a una combinación por defecto que ya has pensado.

## Referencias

- stormzhang `18-config.md`
- Documentación de profiles de OpenAI Codex

---

**Estado:** desactualizado  
**Productos aplicables:** CLI / App  
**Nota de revisión:** Esta página describe `Profile`, `codex --profile` y la estructura de profiles compartidos de forma demasiado concreta, pero la documentación oficial verificable actual no basta para demostrar que esos usos sean generales en la versión vigente; hasta completar la base documental formal, no conviene marcarla como `verified`.  
**Última verificación:** 2026-07-26

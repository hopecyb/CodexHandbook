---
title: Contexto del proyecto
description: Descripción del proyecto y trasfondo a nivel de directorio.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

El «Contexto del proyecto» es la información de fondo estable a largo plazo en este proyecto, la que se reutiliza en muchas Tareas.

Por ejemplo:

- Cómo se organiza la estructura de directorios
- Qué comandos se usan a menudo
- Qué convenciones de estilo de código hay
- Qué archivos no conviene tocar a la ligera
- Cómo verificar cuando se termina

Si cada vez dependes de una explicación oral improvisada, no solo cansa: también es fácil olvidar algo.

## Qué significa concretamente

Puedes ver el Contexto del proyecto como la explicación de «cómo se colabora por defecto a largo plazo en este proyecto».

No describe qué hay que hacer en esta Tarea concreta; le dice de antemano a Codex:

- Cómo se organiza normalmente este repositorio
- Qué hábitos valen a largo plazo
- Qué límites es mejor no tocar
- Cómo se suele verificar al terminar

Así, cada vez que entra en el proyecto, no tiene que adivinar desde cero los hábitos del equipo.

## Por qué aquí suelen aparecer problemas

Quien usa Codex por primera vez mete todos los requisitos en la Tarea actual.

A corto plazo parece funcionar, pero pronto aparecen problemas:

- Hay que volver a explicar cada vez
- La formulación no coincide entre Tareas
- Se olvidan reglas clave
- Cuando la conversación se alarga, el trasfondo realmente importante deja de destacar

La forma de tratarlo se puede dividir en dos:

- Meter las **reglas válidas a largo plazo** en el Contexto del proyecto
- Escribir los **requisitos especiales de esta Tarea** en el Prompt actual

## Cómo distinguirlo de la Tarea actual

La separación más simple son dos capas:

- **Contexto del proyecto**: en este proyecto se hace así normalmente
- **Prompt de la Tarea**: esta vez quiero que hagas concretamente esto

Por ejemplo:

- «Los componentes van unidos en `src/components/`» → Contexto del proyecto
- «Esta vez solo cambia el copy del banner de la home» → Tarea actual

## Malentendidos frecuentes

### 1. ¿Cuanto más Contexto del proyecto, mejor?

Lo que realmente aporta valor es lo que:

- Vale a largo plazo
- Se usa en muchas Tareas
- Si no se dice, es fácil tropezar

Si metes también detalles de una sola vez, la propia descripción del proyecto se convierte en ruido.

### 2. Si en cada Tarea lo digo claro, ¿no hace falta Contexto del proyecto?

A corto plazo sirve; a largo plazo cansa mucho.

Pronto te encontrarás con:

- Repetir las mismas frases cada vez
- Formulaciones distintas entre Tareas
- Reglas dichas esta vez y olvidadas la siguiente

### 3. ¿El Contexto del proyecto no limita demasiado?

No, siempre que lo trates como reglas por defecto a largo plazo, no como órdenes muertas e intocables.

Los requisitos realmente especiales siguen debiendo ir en la Tarea actual.

## Dónde se suele colocar

Pon las convenciones estables en la descripción del proyecto, por ejemplo `AGENTS.md` o las instrucciones de proyecto que ofrezca el producto:

- Estructura de directorios
- Comandos habituales
- Estilo de código
- Prohibiciones

El Prompt de la Tarea solo escribe las **diferencias de esta vez**; el trasfondo largo y repetido se hunde a nivel de proyecto. La configuración en profundidad está en el hito posterior `06-customization`.

## Cómo decidir si meterlo en el Contexto del proyecto

Si una explicación cumple estas dos condiciones, merece la pena considerarlo:

1. La próxima vez es muy probable que vuelva a hacer falta
2. Si se olvida, se falla o se pierde tiempo una y otra vez

## Qué priorizar al organizar

Lo que suele hundirse primero son estas categorías:

- Comandos habituales
- Convenciones de directorios
- Estilo de código
- Zonas prohibidas de cambio
- Forma de Verificación por defecto

Toda explicación que la próxima vez es muy probable que vuelva a usarse merece hundirse en el Contexto del proyecto, sin tener que teclearla de nuevo cada vez.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica cómo sedimentar Contexto de proyecto a largo plazo; conceptos, ejemplos y límites se han revisado, y el cuerpo no depende de hechos volátiles de producto.  
**Última verificación:** 2026-07-26

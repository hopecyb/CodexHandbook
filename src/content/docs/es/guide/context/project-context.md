---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página solo explica cómo conservar el contexto del proyecto a largo plazo; conceptos, ejemplos y límites se han revisado, y el cuerpo no depende de hechos volátiles de producto.
  checkedAt: '2026-07-26'
title: Contexto del proyecto
description: Descripción del proyecto y trasfondo a nivel de directorio.
locale: es
source_locale: zh-CN
source_revision: "fb3eb50"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 10
---

El «contexto del proyecto» es la información de fondo estable a largo plazo en este proyecto, la que se reutiliza en muchas tareas.

Por ejemplo:

- Cómo se organiza la estructura de directorios
- Qué comandos se usan a menudo
- Qué convenciones de estilo de código hay
- Qué archivos no conviene tocar a la ligera
- Cómo verificar cuando se termina

Si cada vez dependes de una explicación oral improvisada, no solo cansa: también es fácil olvidar algo.

## Qué significa concretamente

Puedes ver el contexto del proyecto como la explicación de «cómo se colabora por defecto a largo plazo en este proyecto».

No describe qué hay que hacer en esta tarea concreta; le dice de antemano a Codex:

- Cómo se organiza normalmente este repositorio
- Qué hábitos valen a largo plazo
- Qué límites es mejor no tocar
- Cómo se suele verificar al terminar

Así, cada vez que entra en el proyecto, no tiene que adivinar desde cero los hábitos del equipo.

## Por qué aquí suelen aparecer problemas

Quien usa Codex por primera vez mete todos los requisitos en la tarea actual.

A corto plazo parece funcionar, pero pronto aparecen problemas:

- Hay que volver a explicar cada vez
- La formulación no coincide entre tareas
- Se olvidan reglas clave
- Cuando la conversación se alarga, el trasfondo realmente importante deja de destacar

La forma de tratarlo se puede dividir en dos:

- Meter las **reglas válidas a largo plazo** en el contexto del proyecto
- Escribir los **requisitos especiales de esta tarea** en el prompt actual

## Cómo distinguirlo de la tarea actual

La separación más simple son dos capas:

- **contexto del proyecto**: en este proyecto se hace así normalmente
- **prompt de la tarea**: esta vez quiero que hagas concretamente esto

Por ejemplo:

- «Todos los componentes se guardan en `src/components/`» → contexto del proyecto
- «Esta vez solo cambia el texto del banner de la página de inicio» → tarea actual

## Malentendidos frecuentes

### 1. ¿Cuanto más contexto del proyecto, mejor?

Lo que realmente aporta valor es lo que:

- Vale a largo plazo
- Se usa en muchas tareas
- Si no se dice, es fácil tropezar

Si metes también detalles de una sola vez, la propia descripción del proyecto se convierte en ruido.

### 2. Si en cada tarea lo digo claro, ¿no hace falta contexto del proyecto?

A corto plazo sirve; a largo plazo cansa mucho.

Pronto te encontrarás con:

- Repetir las mismas frases cada vez
- Formulaciones distintas entre tareas
- Reglas dichas esta vez y olvidadas la siguiente

### 3. ¿El contexto del proyecto no limita demasiado?

No, siempre que lo trates como reglas por defecto a largo plazo, no como órdenes rígidas e inalterables.

Los requisitos realmente especiales siguen debiendo ir en la tarea actual.

## Dónde se suele colocar

Pon las convenciones estables en la descripción del proyecto, por ejemplo `AGENTS.md` o las instrucciones de proyecto que ofrezca el producto:

- Estructura de directorios
- Comandos habituales
- Estilo de código
- Prohibiciones

Escribe en el prompt solo los **requisitos específicos de esta tarea**; guarda el contexto extenso y recurrente en las instrucciones del proyecto. La configuración en profundidad está en el hito posterior `06-customization`.

## Cómo decidir si meterlo en el contexto del proyecto

Si una explicación cumple estas dos condiciones, merece la pena considerarlo:

1. La próxima vez es muy probable que vuelva a hacer falta
2. Si se olvida, se falla o se pierde tiempo una y otra vez

## Qué priorizar al organizar

Estas categorías suelen ser las primeras que conviene guardar:

- Comandos habituales
- Convenciones de directorios
- Estilo de código
- Zonas prohibidas de cambio
- Método de verificación por defecto

Toda explicación que la próxima vez es muy probable que vuelva a usarse merece guardarse en el contexto del proyecto, sin tener que teclearla de nuevo cada vez.

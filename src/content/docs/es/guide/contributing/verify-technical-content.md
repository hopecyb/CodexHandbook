---
title: Verificar contenido técnico
description: Cómo marcar una página como verified, con pasos de reproducción, base oficial y fecha.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

En el manual, comandos, permisos, precios y funciones de producto cambian con la versión. La **verificación** asegura que, al seguir el documento, el resultado sea previsible.

## Contenido de esta página

Quien mantiene documentación por primera vez suele tomar «no vi problemas» por «ya está verificado».

En un manual técnico, esas dos cosas difieren mucho:

- La primera es solo una sensación subjetiva de que parece cierto
- La segunda significa que ya lo probaste de verdad con la versión, el entorno y los pasos actuales

Aquí se trata de cómo subir «parece correcto» a «hay evidencia de que sigue siendo correcto ahora».

## Qué comprueba la «verificación»

«Verificar contenido técnico» se puede entender así: no solo mirar si el texto fluye, sino confirmar que, si el lector lo sigue hoy, de verdad puede hacerlo.

Importa especialmente porque mucho contenido no es estable para siempre, por ejemplo:

- Los comandos cambian
- La ubicación de menús cambia
- Los valores por defecto de permisos se ajustan
- Las capacidades y el alcance disponible del producto se actualizan

Así que verificar no es manía editorial: es evitar que el lector tropiece con documentación vieja.

## Significado de los estados

| Estado | Significado |
|---|---|
| `planned` | Planificado, aún sin redactar |
| `draft` | En redacción, aún sin cerrar del todo |
| `review` | Contenido listo, pendiente de revisión |
| `verified` | Verificado según la base indicada |
| `outdated` | Tras un cambio de producto, hay que actualizar |
| `archived` | Conservado históricamente; no entra en la navegación principal |

## Malentendidos habituales

### `verified` representa evidencia, no solo confianza

No es un tono: es un estado de evidencia.

Solo cuando de verdad has reproducido, contrastado bases oficiales y confirmado que el alcance de la página y la fecha cuadran, conviene marcar `verified`.

### Los artículos de la comunidad ayudan a entender, pero no sustituyen la verificación de hechos

Artículos comunitarios u otras fuentes de la comunidad sirven bien para descubrir qué temas conviene completar.

Pero cuando se trata de:

- Nombres de comando
- Comportamiento de permisos
- Entradas de producto
- Precio, cuotas, diferencias regionales

hay que volver a la documentación oficial o al resultado real de ejecución actual.

### Verificar no es mirar solo frases sueltas

A veces cada frase por separado está bien, pero encadenadas no se sostienen, por ejemplo:

- Productos aplicables y página real no coinciden
- El orden de pasos es incorrecto
- No se escribió la premisa por defecto
- El título promete más de lo que el cuerpo verificó de verdad

Así que hay que verificar por «cadena completa de operación», no solo escanear la literalidad.

## Checklist de verificación

1. **Marcar el alcance**: producto (App/CLI/IDE/Cloud), OS, número de versión de CLI
2. **Reproducir paso a paso**: seguir desde cero o desde un worktree limpio
3. **Base oficial**: al menos un enlace a documentación oficial de OpenAI o al centro de ayuda
4. **Fuentes de la comunidad**: si te apoyas en materiales comunitarios, solo como referencia temática; los hechos prevalecen oficiales
5. **Actualizar la fecha**: pie `Última verificación: YYYY-MM-DD`
6. **Revisión independiente**: para `verified` se recomienda confirmación de una segunda persona distinta del autor

## Orden de verificación

Este orden es el que menos se salta:

1. Confirma primero de qué producto, entrada y escenario habla la página
2. Recorre desde el principio los pasos del texto
3. Contrasta con la documentación oficial la información variable
4. Degrada lo que no esté seguro o no hayas reproducido
5. Solo al final actualiza estado y fecha

Más vale quedarse en `review` que marcar `verified` antes de tiempo sin evidencia suficiente.

## Información variable

Lo siguiente hay que reverificar cada trimestre o con cada major:

- Nombres de comandos y subcomandos, flags
- Valores por defecto de permisos y comportamiento del Sandbox
- Planes, nombres de modelo, disponibilidad regional
- Nombres de eventos MCP/Hook

## Si falla

- Degrada según la realidad a `review`, `draft` u `outdated`
- En el PR, explica en qué paso no coincide con lo oficial
- Ante una desviación grande, abre un issue marcado `outdated`

## Relacionado

- [Política de versiones del manual](/guide/start-here/handbook-version-policy/)
- [Recursos oficiales](/guide/reference/official-resources/)

`verified` significa «verificado de verdad según la base actual anotada, y hay base que se puede rastrear». Que el autor solo «sienta que es fiable» no basta.

---

**Estado:** verificado  
**Base de verificación:** Contrastado con el sistema de estados actual del manual, las prácticas de revisión por lotes ya hechas y el principio de prioridad oficial; esta página describe el estándar interno de verificación y los principios de degradación para subir una página a `verified`.  
**Última verificación:** 2026-07-26

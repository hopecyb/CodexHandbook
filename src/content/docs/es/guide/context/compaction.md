---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Esta página solo explica riesgos y remedios tras compactar conversaciones largas; conceptos, ejemplos y enlaces internos se han revisado, y el cuerpo no depende de hechos volátiles de producto.
  checkedAt: '2026-07-26'
title: Compactación del contexto
description: Qué se conserva y qué se pierde tras compactar una conversación larga.
locale: es
source_locale: zh-CN
source_revision: "c6c9d03"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 50
---

La «compactación del contexto» se puede entender así: cuando la conversación es demasiado larga, el sistema reduce el contenido anterior a una versión más corta y la conserva. El objetivo es que la tarea pueda seguir; el precio es que **pueden perderse detalles.**

## Por qué afecta al resultado

Muchos principiantes asumen por defecto:

«Lo que dije antes debería recordarlo siempre completo.»

En la realidad no siempre es así.  
Cuando una tarea larga entra en compactación, suele perderse con más facilidad:

- Restricciones pequeñas y finas
- Alguna excepción temporal pero importante
- La lista blanca de archivos que nombraste antes
- Condiciones de borde en los criterios de aceptación

Así que la compactación no es un error: es un mecanismo que necesita tu colaboración.

## Qué reafirmar sobre todo tras compactar

La compactación pierde detalle. Restricciones clave, criterios de aceptación y listas blancas de archivos deberían **declararse de nuevo** tras compactar, o escribirse en la descripción del proyecto.

Conviene priorizar reafirmar:

- Qué archivos solo se pueden cambiar
- Qué contenido no se puede tocar en absoluto
- Cómo se considera hecho
- Hasta qué paso se ha llegado ya

## Malentendidos frecuentes

### 1. ¿Compactar equivale a «olvidó todo el contenido»?

Más exactamente: conserva las ideas principales, pero no garantiza que todos los detalles menores se queden igual.

### 2. Tampoco hace falta volver a decirlo todo desde cero

Tampoco.

Reexplicar la parte más clave, más fácil de perder y que no puede fallar suele bastar.

### 3. Qué información no deberías apostar a que «debería seguir recordándola»

Suele ser de este tipo:

- Alcance de archivos
- Prohibiciones
- Criterios de aceptación
- Decisiones importantes que ya confirmaste

## Cómo remediar tras compactar

Si la tarea ya es larga, puedes escribir tú mismo a mitad de camino un resumen corto, por ejemplo:

```text
Restricciones vigentes ahora:
1. Solo cambiar el directorio docs
2. No ajustar la estructura de rutas
3. Criterio de finalización: texto de la página de inicio actualizado y compilación correcta
```

Eso suele ser más estable que seguir dependiendo de toda la conversación larga.

Capa conceptual: [Token, contexto y compactación](/es/guide/foundations/tokens-context-and-compaction/)

En tareas largas, no comuniques las restricciones más importantes una sola vez; tras compactar, las reglas importantes merecen reiterarse de forma activa.

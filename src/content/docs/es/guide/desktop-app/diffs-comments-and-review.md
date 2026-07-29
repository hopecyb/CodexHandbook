---
title: Diff, comentarios y revisión
description: Leer cambios y dejar opiniones de revisión.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 50
---

## Flujo de revisión

1. Abre la vista de diff y navega por archivos
2. Confirma que los cambios quedan dentro del alcance acordado
3. Pregunta o comenta en los puntos dudosos (si la UI lo permite)
4. Acepta, rechaza o pide modificaciones

Método: [Revisar diffs](/guide/quality/review-diffs/)

## Contenido

En la App de escritorio, los cambios se miran sobre todo en la vista de diff, no en el área de conversación.

El chat es «lo que dice»; la vista de diff es «lo que realmente ocurrió».

## Malentendidos frecuentes

### 1. ¿Los comentarios solo sirven en colaboración en equipo?

Aunque trabajes solo, comentar o preguntar también ayuda: al menos aclara «por qué se cambió esto».

### 2. Si no estoy seguro de si se equivocó, ¿qué hago?

No hace falta dar una conclusión de entrada. Señala primero el punto dudoso y pide una explicación; es más seguro que adivinar.

### 3. ¿Qué hay que mirar como mínimo antes de aceptar?

Al menos tres cosas:

- Qué archivos cambió
- Si se salió del alcance permitido
- Si hay eliminaciones o restos que claramente no deberían estar

### 4. No soy un reviewer profesional, ¿no voy a detectar problemas?

Puedes empezar por lo más directo:

- ¿Ha tocado sitios que no debía?
- ¿Ha borrado algo que aún parece importante?
- Dice que hizo A: ¿el diff muestra realmente solo A?

## Orden de revisión

Si cada vez que ves un diff te mareas un poco, fija primero este orden:

1. Mira cuántos archivos cambió
2. Mira si el cambio de cada archivo está relacionado con la Tarea
3. Mira si hay modificaciones fuera de alcance
4. Al final mira detalles de redacción, formato e implementación local

Así es menos fácil distraerse con cambios menores desde el principio.

## Qué merece la pena escribir en un comentario

Al comentar no hace falta ser exhaustivo. Estas son las más útiles:

- «¿Por qué hay que cambiar esto?»
- «¿Esto se sale del alcance de esta vez?»
- «Esto parece que podría afectar al comportamiento anterior; ¿puedes explicarlo?»
- «¿Se puede añadir una forma de verificación aquí?»

Ese tipo de comentario empuja mejor la corrección siguiente que limitarse a decir «hay un problema».

En esta página, lo que realmente merece mirarse una y otra vez es la vista de diff.

---

**Estado:** outdated  
**Productos aplicables:** App  
**Nota de revisión:** Esta página describe la experiencia de UI actual de la vista de diff, los comentarios y aceptar/rechazar cambios en la App de escritorio, pero falta documentación oficial vigente lo bastante sólida para confirmar uno a uno esas pantallas y flujos; conviene marcarla como `outdated` hasta completar la documentación de revisión de escritorio.  
**Última verificación:** 2026-07-26

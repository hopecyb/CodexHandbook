---
title: Prioridad del Contexto
description: Quién manda cuando las instrucciones chocan.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Conflictos habituales: descripción del proyecto vs Prompt actual vs conversación antigua. Principio práctico:

1. El **Prompt de la Tarea actual** tiene la máxima prioridad para el alcance de esta vez
2. Las prohibiciones de seguridad a nivel de proyecto (p. ej. «prohibido push», «prohibidas claves de producción») deben cumplirse siempre
3. Si detectas conflicto, escribe con claridad: «Prevalece este mensaje; ignora las instrucciones anteriores sobre X»

La «prioridad del Contexto» es, cuando chocan varias instrucciones, cuál manda.

## Qué significa realmente «prioridad»

Los conflictos más habituales son cotidianos:

- Antes dijiste «solo análisis de lectura»
- Después dices «cámbiamelo directamente»
- En el proyecto además pone «prohibido tocar cierto directorio»

Si esa información no está en capas, el resultado es fácil: quiere cambiar y a la vez no debería.

## Malentendidos frecuentes

### 1. Si lo digo otra vez después, ¿cubre todo lo anterior?

No del todo. Si lo anterior es una restricción de seguridad a nivel de proyecto, una instrucción temporal posterior no necesariamente la anula.

### 2. Da igual la información en conflicto; ya lo entenderá

Precisamente entonces es más fácil desviarse. Cuanta más información en conflicto, más hay que decirle con claridad «cuál manda».

### 3. La prioridad del Contexto es solo un problema teórico

Es muy práctica; afecta directamente a:

- Si cambia por error
- Si incumple las reglas del repositorio
- Si arrastra una Tarea antigua a una nueva

## Cómo escribir más claro en un conflicto

Cuando sospeches que las instrucciones anteriores y posteriores chocan, dilo directamente:

```text
Prevalece este mensaje; ignora las instrucciones anteriores sobre X.
```

Ese tipo de frase es especialmente útil en hilos largos.

En cuanto el Contexto choque, lo mejor es indicar «esta vez se escucha cuál». Las políticas obligatorias del equipo también pueden estar por encima de las preferencias personales.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica cómo tratar Contexto en conflicto; el cuerpo no depende de la interfaz de un cliente concreto ni de hechos volátiles de producto; conceptos y ejemplos se han revisado.  
**Última verificación:** 2026-07-26

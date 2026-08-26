---
title: Traspaso y reanudación
description: Continuar trabajo incompleto entre sesiones.
locale: es
source_locale: zh-CN
source_revision: b92008e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Aquí se trata un problema muy habitual:

> **Esta vez no se terminó; ¿cómo se sigue la próxima?**

Si no haces traspaso, la próxima vez que abras es fácil que ocurran tres cosas:

- Tú mismo olvidas hasta dónde llegaste
- Codex no sabe qué restricciones siguen vigentes
- La nueva ronda de conversación dispersa el contexto viejo y vuelves a dar vueltas desde cero

## Qué deja realmente el traspaso

Traspaso y reanudación es dejar una ficha de instrucciones para «quien continúe la próxima vez».

Ese «quien» puede ser:

- Tú mismo dentro de unas horas
- Otra tarea recién abierta
- Otra persona que colabora
- El Codex que retoma el trabajo

Así que el traspaso no es escribir un resumen largo, sino dejar la **información que realmente hace falta para seguir trabajando**.

## Qué hay que dejar al menos en el traspaso

El resumen de traspaso conviene que incluya al menos:

- Objetivo y estado actual
- Archivos ya cambiados
- Restricciones que siguen vigentes
- La única acción siguiente
- Cómo verificar

Si puedes añadir una frase más, deja claro:

- Por qué se paró aquí

Así, al continuar, no verás solo «a medias» sin saber si fue por falta de tiempo, por necesitar aprobación o por un bloqueo real.

## Malentendidos habituales

### 1. Reenviar el hilo viejo entero ya cuenta como traspaso

Suele no contar.

En el hilo viejo hay mucha exploración, prueba y error y juicios de rama ya caducados. Lo valioso de verdad son las **conclusiones que siguen siendo válidas ahora**.

### 2. Cuanto más se escriba, mejor

Lo peor del traspaso son dos extremos:

- Demasiado corto: faltan datos clave
- Demasiado largo: no se ve qué hay que hacer después

Lo que más ayuda a seguir ejecutando suele ser **corto, preciso y continuable**.

### 3. Solo escribir «queda un poco; termínalo»

Esa frase casi no sirve.

Intenta traducir «termínalo» a una acción concreta, por ejemplo:

- Ejecutar una vez `pnpm build`
- Seguir completando `guide/verification.md`
- Revisar la sensación visual de la imagen de cabecera de `/guide/foundations/local-vs-cloud/`

## Cómo retomar con más estabilidad

Tras pegar el resumen en un hilo nuevo, no cambies a lo grande de inmediato; haz primero estas tres acciones:

1. Confirmar si el objetivo ha cambiado
2. Confirmar que el estado de los archivos coincide con la descripción del traspaso
3. Empezar por «la única acción siguiente», no volver a dispersarte

Así evitas depender de un contexto viejo ya compactado, incompleto o deformado.

Un buen traspaso no es recontar la historia; es hacer que quien abra la tarea la próxima vez sepa al instante: dónde estás, qué hacer después y cómo verificar al terminar.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Contrastado con las explicaciones públicas actuales de OpenAI Developers sobre tareas largas, objetivos sostenidos y formas de colaboración con Codex; el contenido solo conserva el método estable de que «el resumen de traspaso debe ayudar a continuar la próxima vez» y no convierte botones o flujos concretos de un cliente en reglas fijas.  
**Última verificación:** 2026-07-26

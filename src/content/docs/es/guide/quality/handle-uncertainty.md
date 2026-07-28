---
title: Gestionar la incertidumbre
description: Cuando falta información, exige preguntas en lugar de inventar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Cuando no hay información suficiente, confirma primero y luego continúa.

Una de las situaciones más molestas al usar Codex es que complete la información que falta con una respuesta que «parece razonable».
Si la premisa es incorrecta, los pasos siguientes también se desvían.

## Qué es «incertidumbre»

Aquí «incertidumbre» se refiere sobre todo a:

- No hay evidencia suficiente ahora para confirmar
- La información relacionada no está en el contexto actual
- Si se sigue adivinando, el riesgo crece

Lo más adecuado es dejar claro de antemano «cuándo parar primero a confirmar».

Fija en el prompt:

```text
Si falta información, pregunta primero; no inventes rutas de archivo, APIs ni reglas de negocio.
```

Si detectas invención: para, corrige el hecho y, si hace falta, abre un hilo nuevo.

## Cómo juzgar

Si una conclusión cumple cualquiera de estas, no debería seguir adivinando:

- No hay evidencia en los archivos actuales
- Tú no proporcionaste esa regla de negocio de forma explícita
- Hace falta un hecho externo y aún no se validó la fuente
- Si se equivoca al adivinar, afectará a varios pasos siguientes

## Malentendidos habituales

### 1. Una respuesta completa no significa que lo sepa de verdad

A veces el contenido está completo solo porque se rellenó con fluidez; no significa que exista en tu proyecto.

### 2. Cuando la información es incompleta, el foco no es rellenar el vacío

Dar toda la información posible es mejor, pero en la colaboración real la información incompleta es habitual.

Lo más importante son dos cosas:

- Cuando falte información, debe parar primero a confirmar
- Permitirle preguntar, no forzar a que adivine hasta el final

### 3. Que haga preguntas no tiene por qué ralentizar

En apariencia hay un paso más; en la práctica suele reducir el retrabajo.

Muchos problemas empiezan a crecer desde «primero adivina y haz».

### 4. Si detectas que adivinó, para primero y luego continúa

Detén el error primero; luego sigue. Orden:

1. Señala con claridad qué línea está mal
2. Aporta la información real
3. Si hace falta, haz que reinicie a partir de los hechos corregidos

## Frases que puedes añadir directamente

Si quieres que adivine menos, puedes escribir:

```text
Si no puedes confirmarlo a partir de los archivos existentes o de la información que te di, pregunta primero; no completes por tu cuenta.
```

## Una más

También puedes añadir:

```text
Si hay varias interpretaciones posibles, lista primero los puntos de los que no estás seguro y luego continúa.
```

Lo más problemático es tratar la conjetura como hecho y seguir avanzando.


---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** Esta página solo explica principios de preguntar y corregir cuando falta información; se han revisado conceptos, frases de prompt y orden de tratamiento, y el cuerpo no depende de hechos variables de producto.  
**Última verificación:** 2026-07-26

---
title: Ejecuta tu primera Tarea
description: Completa un cambio pequeño con un Prompt claro.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Los ejemplos siguientes asumen la **App de escritorio**; CLI/IDE pueden usar el mismo Prompt.

Muchas personas, en la primera vez con Codex, quieren pedirle «haz un sitio web completo» o «refactoriza todo el proyecto». Así es fácil perder el control de golpe.

Una primera Tarea pequeña es más segura. Cerrar el flujo completo importa más que empezar grande.

## Por qué la primera Tarea debe ser tan pequeña

La primera Tarea conviene que cumpla estas tres condiciones:

- Alcance de cambio reducido
- Resultado comprobable de un vistazo
- Fácil de deshacer aunque salga mal

Por eso aquí usamos un ejemplo de práctica muy pequeño.

## Tarea de ejemplo

En el proyecto de práctica dile a Codex:

```text
Objetivo: al final de hello.md añade una sección «Práctica de hoy» con una lista de tres puntos.
Restricciones: modifica solo hello.md; no borres el contenido existente; no hagas peticiones de red.
Aceptación: al final del archivo aparecen ese título y exactamente tres elementos de lista.
Si falta información, pregúntame antes; no adivines.
```

## Qué hace cada parte del Prompt

Este Prompt separa con claridad varias cosas clave:

- **Objetivo**: qué debe hacer
- **Restricciones**: qué no debe tocar a la ligera
- **Aceptación**: cómo se sabe que está hecho
- **Si falta información, pregúntame**: evita que invente por su cuenta

No es una plantilla fija; solo deja claras las partes que más suelen quedar ambiguas.

## Malentendidos frecuentes

### 1. Cuanto más grande sea la primera Tarea, más aprendes de verdad

La primera vez importa más recorrer el ciclo completo que agrandar el trabajo de un golpe.

### 2. Con el Prompt escrito, ya puede improvisar

En la primera Tarea, vigila tres cosas:

- Si el alcance se desborda
- Si trabaja solo sobre el archivo que indicaste
- Si el resultado final cumple la aceptación

### 3. Si la primera vez sale mal, es que no sé usarlo

La primera Tarea incluye también:

- Descubrir qué no encaja
- Señalar el problema
- Saber cómo hacer que lo revierta

## Atención al ejecutar

1. Pídele un plan breve (o exige el plan tú)
2. Al aprobar escritura de archivos, confirma que la ruta es correcta
3. Al terminar, ve a [Revisa el resultado](/guide/getting-started/review-the-result/)

## Orden de ejecución

Puedes seguir estos 5 pasos:

1. Elige un proyecto de práctica seguro
2. Da una Tarea pequeña que cambie un solo archivo
3. Antes de aprobar, mira con claridad qué va a tocar
4. Al terminar, revisa el alcance y el resultado
5. Si no te convence, deshaz o corrige con precisión

Tras estos 5 pasos, el ritmo de colaboración te resultará más familiar.

## Qué debes comprobar al terminar

Mira sobre todo estas tres cosas:

1. ¿Solo modificó `hello.md`?
2. ¿Al final del archivo aparece de verdad esa sección?
3. ¿Hay exactamente tres elementos de lista?

Si las tres están bien, esta Tarea pequeña ya encaja.

## Si se equivoca

Equivocarse la primera vez es normal. Puedes continuar así:

```text
Cambiaste de más. Revierte los cambios en otros archivos y conserva solo la modificación de hello.md.
```

O:

```text
No sigas cambiando. Dime qué lugares acabas de modificar.
```

Fundamentos del Prompt: [bases del Prompt](/prompts/basics/).


---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE  
**Base de verificación:** Se cruzó con las secciones ya verificadas de bases del Prompt, revisión de resultados, deshacer/recuperar y proyecto de práctica; el contenido se limita al método estable de «primera vez solo con una Tarea pequeña, comprobable y reversible».  
**Última verificación:** 2026-07-26

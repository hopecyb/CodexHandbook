---
title: Objetivos y contexto
description: Haz que Codex sepa qué completar y por qué importa.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Muchos Prompts parecen tener bastante información, pero estas dos cosas no quedan claras:

- qué resultado quieres de verdad
- por qué hay que hacerlo de esa forma

El objetivo explica «qué hay que lograr»; el contexto explica «por qué hacerlo así».

**Objetivo** describe el artefacto final, no un deseo vago.  
«Que el sitio sea mejor» → «Cambia el copy del botón principal de la home a …… y conserva las clases CSS actuales».

**Contexto** aporta el estado que el lector no conoce pero el Agent necesita: stack, audiencia, motivo del plazo, trampas conocidas.

## Por qué no mezclar «objetivo» y «contexto»

Si solo hay contexto y no hay objetivo, Codex puede leerlo como una descripción de situación y no saber qué debe entregar.  
Si solo hay objetivo y no hay contexto, puede hacerlo de una forma «técnicamente viable, pero no adecuada a tu escenario».

## Malentendidos habituales

### 1. El objetivo es «quiero mejorarlo un poco»

Eso es un deseo, no un objetivo.

Un objetivo más claro suele indicar:

- qué cosa cambiar
- a qué estado
- qué debe permanecer igual

### 2. Más contexto no es siempre mejor

La parte valiosa del contexto es lo que **tú sabes y Codex no**, y que además influye en la decisión.

### 3. Solo el contexto técnico cuenta como contexto

No solo el técnico.

También puede ser contexto importante:

- quién es el lector
- el motivo del plazo
- trampas conocidas
- restricciones del equipo

## Una redacción suficiente

Si primero escribes una versión usable:

```text
Objetivo: cambiar qué a qué
Contexto: por qué cambiarlo, para quién, dónde estás atascado ahora
```

Por ejemplo:

```text
Objetivo: reescribir el copy de la primera pantalla de la home de docs para principiantes, conservando la estructura actual
Contexto: el copy actual asume que el lector conoce muchos términos; el umbral de comprensión en la primera visita es alto
```

## Cómo comprobar si está lo bastante claro

Al revisar el objetivo, mira dos cosas:

- ¿se ve el resultado?
- ¿se percibe el alcance?

Al revisar el contexto, mira una más:

- ¿esta información influye de verdad en cómo lo hará?

El objetivo decide qué entregar; el contexto explica por qué hacerlo así.

Relacionado: el contexto a nivel de proyecto puede vivir en [Contexto del proyecto](/guide/context/project-context/) para no repetir párrafos largos en cada Prompt.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo describe cómo escribir objetivo y contexto; se han revisado enlaces y ejemplos, y el cuerpo no depende de hechos volátiles del producto.

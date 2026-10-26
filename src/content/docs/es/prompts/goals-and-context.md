---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página solo describe cómo escribir objetivo y contexto; se han revisado enlaces y ejemplos, y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Objetivos y contexto
description: Haz que Codex sepa qué completar y por qué importa.
locale: es
source_locale: zh-CN
source_revision: '0a5141f'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

Muchos prompts parecen tener bastante información, pero estas dos cosas no quedan claras:

- qué resultado quieres de verdad
- por qué hay que hacerlo de esa forma

El objetivo explica «qué hay que lograr»; el contexto explica «por qué hacerlo así».

**Objetivo** describe el artefacto final, no un deseo vago.  
«Que el sitio sea mejor» → «Cambia el texto del botón principal de la página de inicio a …… y conserva las clases CSS actuales».

**Contexto** aporta el estado que el lector no conoce pero el Agent necesita: stack, audiencia, motivo del plazo, problemas conocidos.

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
- problemas conocidos
- restricciones del equipo

## Una redacción suficiente

Si primero escribes una versión usable:

```text
Objetivo: cambiar qué a qué
Contexto: por qué cambiarlo, para quién, dónde estás atascado ahora
```

Por ejemplo:

```text
Objetivo: reescribir el texto de la primera pantalla de la página de inicio de la documentación para principiantes, conservando la estructura actual
Contexto: el texto actual asume que el lector conoce muchos términos; el umbral de comprensión en la primera visita es alto
```

## Cómo comprobar si está lo bastante claro

Al revisar el objetivo, mira dos cosas:

- ¿se ve el resultado?
- ¿se percibe el alcance?

Al revisar el contexto, mira una más:

- ¿esta información influye de verdad en cómo lo hará?

El objetivo decide qué entregar; el contexto explica por qué hacerlo así.

Relacionado: el contexto a nivel de proyecto puede vivir en [Contexto del proyecto](/es/guide/context/project-context/) para no repetir párrafos largos en cada prompt.

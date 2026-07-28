---
title: Anti-patterns de Prompts
description: Formulaciones vagas, exceso de permisos y peticiones de razonamiento oculto que conviene evitar.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Al aprender Prompts, es fácil centrarse solo en «cómo hay que escribir».  
A menudo, saber qué formulaciones desvían la tarea ahorra más rodeos.

Aquí van varios «pozos» habituales.

| Anti-pattern | Por qué perjudica |
|---|---|
| «Optimízalo un poco como quieras» | sin objetivo ni límites |
| «Tienes todos los permisos; decide tú» | superficie de accidente máxima |
| «No me preguntes; cámbialo todo de una vez» | salta aclaración y aprobación |
| «Imprime todo tu proceso de razonamiento oculto» | poco fiable y casi nunca ayuda a la aceptación |
| Pegar logs con secretos | filtración de credenciales |

## Por qué estas frases fallan con facilidad

Suelen compartir esto:

- parecen ahorrar palabras
- en realidad omiten los límites críticos

Lo que omites acaba siendo lo que Codex tiene que decidir solo.

## Ideas erróneas habituales

### 1. Hablar más informal ¿parece más colaboración humana?

Hablar con naturalidad está bien.  
El problema mayor es omitir las condiciones críticas.

### 2. «Cámbialo todo y no me preguntes» es más eficiente

A corto plazo parece una ronda menos; después suele pasar:

- alcance equivocado
- sin la aprobación necesaria
- más retrabajo

### 3. Más permisos = avanza más rápido

Cuanto más permiso, mayor superficie de error.  
Sobre todo si los límites de la tarea aún no están claros, más permiso suele amplificar el riesgo.

## Cómo sustituir el anti-pattern por una formulación clara

### No escribas así

```text
Optimízalo un poco como quieras
```

### Empieza así

```text
Reescribe el copy de la primera pantalla de la home para principiantes; solo este archivo; conserva la estructura actual; al terminar dame el diff y el resultado del build.
```

## Una fórmula de sustitución suficiente

Cuando estés a punto de escribir una frase vaga, usa:

```text
Objetivo + alcance + aceptación
```

Por ejemplo:

- Objetivo: qué cambiar
- Alcance: solo dónde
- Aceptación: cómo juzgar que está terminado

La mayoría de anti-patterns de Prompts no fallan por «mala expresión», sino por omitir límites críticos y criterios de aceptación.

Sustituye lo vago por estructura: objetivo + restricciones + aceptación.

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Esta página solo resume anti-patterns habituales de Prompts; se han revisado referencias cruzadas y ejemplos, y el cuerpo no depende de hechos volátiles del producto.

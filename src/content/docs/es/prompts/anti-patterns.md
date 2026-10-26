---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página solo resume antipatrones habituales de prompts; se han revisado referencias cruzadas y ejemplos, y el cuerpo no depende de hechos volátiles del producto."
  checkedAt: "2026-07-26"
title: Antipatrones de prompts
description: Formulaciones vagas, exceso de permisos y peticiones de razonamiento oculto que conviene evitar.
locale: es
source_locale: zh-CN
source_revision: '8e89a5a'
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
---

Al aprender a escribir prompts, es fácil centrarse solo en «cómo hay que escribir».
A menudo, saber qué formulaciones desvían la tarea ahorra más rodeos.

Aquí van varios errores habituales.

| Antipatrón | Por qué perjudica |
|---|---|
| «Optimízalo un poco como quieras» | sin objetivo ni límites |
| «Tienes todos los permisos; decide tú» | máximo alcance de posibles daños |
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

## Cómo sustituir el antipatrón por una formulación clara

### No escribas así

```text
Optimízalo un poco como quieras
```

### Empieza así

```text
Reescribe el texto de la primera pantalla de la página de inicio para principiantes; solo este archivo; conserva la estructura actual; al terminar dame el diff y el resultado de la compilación.
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

La mayoría de antipatrones de prompts no fallan por «mala expresión», sino por omitir límites críticos y criterios de aceptación.

Sustituye lo vago por estructura: objetivo + restricciones + aceptación.

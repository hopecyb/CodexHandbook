---
title: Crear Pull Request
description: De la Tarea Cloud a un PR revisable — descripción, alcance y puerta humana de merge.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La primera vez con el flujo Cloud, suele pasar que la Tarea ya terminó pero el cambio aún no está en un estado fácil de revisar y discutir. En colaboración de equipo, ese paso suele ser el **Pull Request**.

Un PR es una solicitud de cambio que se puede revisar.

Concentra qué cambió, por qué y si se probó, en un sitio donde se puede hacer review. Cuando una Tarea Cloud se entrega al equipo, también aterriza aquí.

## Contenido

- Expectativa de extremo a extremo: de Tarea Cloud a PR
- Qué debe incluir la descripción del PR para que persona y CI puedan aceptar
- Cuándo no abrir PR automáticamente

## Cuándo abrir un PR

Si el cambio necesita que alguien lo mire, que CI corra, o que al final se mergee a la rama principal, no te quedes en «ya está cambiado en la rama»: avanza hasta un **PR revisable**.

## Flujo de trabajo recomendado

```text
Conectar GitHub → aclarar issue/objetivo → Tarea Cloud (confirmar plan) → push de rama → abrir PR → review humana + CI → merge
```

Prerrequisito: [Conectar GitHub](/guide/web-and-cloud/connect-github/)

## Por qué no conviene merge automático de entrada

El papel del PR es dejar una entrada de comprobación para personas y sistemas, no solo subir código.

Lo habitual:

- Codex puede ayudarte a abrir el PR
- Una persona decide si hacer merge

Así, aunque la Tarea se desvíe, sigue habiendo una revisión humana.

## Puntos clave del Prompt de la Tarea

```text
Objetivo: corregir el timeout de login descrito en #42
Rama: fix/42-login-timeout
Alcance: solo packages/auth y pruebas relacionadas
Hecho: abrir PR a main, no hacer merge
La descripción del PR debe incluir: causa, resumen del cambio, comando de prueba y resultado, riesgos y rollback
```

Alineado con [Definir hecho](/prompts/define-done/) y [Anatomía de una buena Tarea](/prompts/task-anatomy/).

## Un buen PR responde al menos a cuatro preguntas

1. ¿Por qué cambiaste esto?
2. ¿Qué sitios concretos tocaste?
3. ¿Cómo lo verificaste?
4. ¿Qué riesgos, límites o casos no cubiertos quedan?

Si la descripción no cubre esos cuatro puntos, quien revisa tiene que reconstruir el contexto.

## Lista de calidad del PR

- [ ] El título dice «qué se hizo», no «actualizar código»
- [ ] Enlaza el número de issue
- [ ] CI pasa o explica el fallo conocido
- [ ] El tamaño del diff es aceptable para el equipo; si es enorme, partir el PR
- [ ] Sin secretos ni tormenta de formato irrelevante
- [ ] Capturas o logs (cambios de UI/comportamiento)

## Puerta humana

Aunque Codex pueda abrir el PR, el **merge** debería hacerlo por defecto una persona (o un bot controlado + protección de ramas):

Véase [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

## Malentendidos frecuentes

### 1. Meter varios cambios no relacionados en un solo PR

Cuesta mucho revisarlo y mucho más revertirlo.

### 2. Solo decir «ya está corregido» sin decir cómo se verificó

El otro no sabe si «de verdad lo probaste» o «parece que debería estar bien».

### 3. Dejar que Codex toque directamente la rama principal

En un experimento personal quizás ahorra un paso; en un repo colaborativo el riesgo es demasiado alto.

## Con automatización de Review

- Puedes usar un Skill o `codex exec` en CI para **comentarios de revisión complementarios**
- El merge automático necesita una política de gobernanza aparte; no está en la ruta por defecto de principiantes

## Errores frecuentes

- PR con varias funciones no relacionadas
- Descripción «cambios generados por IA» sin explicación de pruebas
- Merge directo a main saltándose la review

## Lectura adicional

- [Integración con GitHub](/guide/integrations/github/)
- [Revisar diffs](/guide/quality/review-diffs/)
- [App de escritorio: diffs y comentarios](/guide/desktop-app/diffs-comments-and-review/)

---

**Estado:** outdated  
**Productos aplicables:** Cloud / Web  
**Nota de revisión:** «La entrega de Cloud entra en PR y luego review humana» sigue siendo un principio sólido, pero esta página concreta demasiado la entrada de abrir PR, el comportamiento automático y el ritmo de entrega Cloud; hasta contrastar ítem a ítem el flujo oficial de PR y la integración Cloud/GitHub, no conviene marcarla como `verified`.  
**Última verificación:** 2026-07-26

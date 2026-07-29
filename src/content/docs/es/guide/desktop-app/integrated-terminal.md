---
title: Terminal integrada
description: Usar la terminal dentro de la App junto con las Tareas.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

La terminal integrada facilita ver la salida de los comandos que ejecuta el Agent, o lanzar tú mismo comandos de verificación.

Sin salir de la App de escritorio, también puedes ver aquí el proceso y el resultado de los comandos.

Al empezar, presta atención a esto:

- Qué ha ejecutado exactamente
- Por qué dice que la verificación ha pasado
- Por qué ha fallado un paso concreto

## Precauciones de uso

- Incluye los «comandos de verificación» en los criterios de aceptación del Prompt
- No pegues claves de producción en la terminal integrada
- No reejecutes a mano en producción comandos que no entiendas

## Malentendidos frecuentes

### 1. ¿Hay que saber usar la terminal para usar la App de escritorio?

Muchas Tareas básicas no requieren que escribas comandos.  
Pero conviene saber para qué sirve la zona de terminal, para no quedarte perdido cuando haya que contrastar.

### 2. Si imprime un muro de texto, ¿qué miro?

Fíjate en esto:

- Si hay errores evidentes
- Qué comando ha ejecutado
- Si al final ha sido éxito, fallo o completado a medias

### 3. ¿Puedo copiar su comando y volver a ejecutarlo yo?

Sí, siempre que entiendas qué hará, y sobre todo sin reejecutar a ciegas en producción.

La terminal integrada deja el proceso de verificación a la vista y también te ayuda a ir familiarizándote con lo que hace la línea de comandos.

---

**Estado:** outdated  
**Productos aplicables:** App  
**Nota de revisión:** Esta página asume una experiencia estable de «terminal integrada» para ver y reejecutar en la App de escritorio, pero el material oficial verificable actual confirma sobre todo que Codex puede trabajar con folders, repositories, terminals y developer tools locales; aún no basta para sostener la redacción concreta de la interfaz aquí descrita.  
**Última verificación:** 2026-07-26

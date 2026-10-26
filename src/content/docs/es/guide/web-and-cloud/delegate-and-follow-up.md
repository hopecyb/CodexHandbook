---
title: Delegar y hacer seguimiento
description: Inicia una tarea Cloud independiente y usa la misma conversación para corregir su rumbo y verificar el resultado.
legacyVerification:
  status: "verified"
  products: "Cloud / App / IDE / CLI"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: '38b322f'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 60
reviewed_at: 2026-10-25
---

Delegar no es «desentenderse del problema». Significa entregar el objetivo, las restricciones, el entorno y los criterios de finalización a una conversación Cloud independiente. La tarea puede ejecutarse en segundo plano mientras examinas los registros, añades contexto, pides modificaciones y, al final, revisas el diff.

## Cuándo conviene delegar

- La compilación o las pruebas tardan bastante.
- Las entradas ya están en un repositorio remoto.
- El entorno puede reconstruirse mediante scripts.
- La tarea puede avanzar de forma independiente del trabajo actual.
- Estás dispuesto a revisar el resultado en vez de fusionarlo directamente.

Mantén en local las tareas que dependen de cambios locales aún sin commit, de un servicio en tu equipo o de intervención humana continua.

## Un encargo completo

```text
Objetivo: corregir el problema #42, en el que una solicitud de inicio de sesión
sigue ocupando una conexión después de 30 segundos.
Punto de partida: rama fix/42-timeout del repositorio acme/api.
Alcance: packages/auth/** y las pruebas correspondientes.
Prohibido: actualizar dependencias, cambiar la API pública o hacer push a main.
Verificación: pnpm test --filter auth; pnpm typecheck.
Finalización: mostrar la causa raíz, el diff, los comandos y sus códigos
de salida; no fusionar automáticamente.
```

Después de iniciarlo, confirma que el entorno y la rama sean los correctos. Durante la ejecución, intervén solo si falta un supuesto necesario o la tarea se desvía:

```text
Restricción adicional: no cambies el cliente HTTP global. Limita la corrección
al auth adapter. Antes de continuar, explica cómo cambia esto el enfoque actual.
```

La misma conversación conserva el contexto y sirve para corregir el mismo objetivo. Para un objetivo totalmente independiente, abre otra conversación. Las tareas paralelas no deben escribir en la misma rama ni en el mismo conjunto de archivos.

## Cuando llegue el resultado

1. Lee el resumen y el diff completo.
2. Compara las rutas modificadas con el alcance permitido.
3. Examina la salida real de cada comando de verificación.
4. Pide una explicación de las pruebas fallidas o no ejecutadas.
5. Si hacen falta cambios, envía una petición de seguimiento concreta en la misma conversación.
6. Cuando se cumplan los criterios, crea un PR y deja que el CI y la revisión humana continúen el proceso.

Las tareas Cloud pueden iniciarse desde Web, IDE, GitHub, GitLab (Beta), Linear o Slack. La página oficial de Cloud también explica cómo iniciar y revisar trabajo desde Codex CLI. Los límites del repositorio, el entorno, la red y la revisión no cambian por utilizar otra entrada.

## Cómo seguir un fallo

No digas solo «inténtalo de nuevo». Aporta pruebas del fallo y el siguiente paso:

```text
La prueba falla en retry.test.ts:48. Explica primero si este cambio causó
el fallo. Si es así, corrige solo esa regresión y vuelve a ejecutar las
pruebas de auth. Si no, conserva el fallo y déjalo registrado claramente.
```

## Fuentes oficiales

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Tareas de larga duración](https://learn.chatgpt.com/docs/long-running-work)

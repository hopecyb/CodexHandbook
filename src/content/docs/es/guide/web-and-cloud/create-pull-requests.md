---
title: Crear un Pull Request
description: Entrega los resultados de Cloud en un PR revisable y verificable que no se fusiona automáticamente.
legacyVerification:
  status: "verified"
  products: "Cloud、GitHub"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: "39371d4"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 40
---

Después de una tarea Cloud, examina primero el resumen y el diff. Crea un Pull Request cuando el resultado cumpla el alcance y los criterios de verificación; de lo contrario, sigue corrigiéndolo en la misma conversación.

## De la tarea al PR

```text
Elegir el entorno y la rama inicial
  → ejecutar la tarea Cloud
  → revisar el resumen, los registros y el diff
  → continuar la conversación si hace falta
  → Create Pull Request
  → CI + revisión complementaria de Codex + revisión humana
  → una persona decide si se fusiona
```

Indica en el prompt «crea un PR, pero no lo fusiones». Sin embargo, no dependas solo de una restricción en lenguaje natural: activa también la protección de ramas y los required checks del repositorio.

## Plantilla de tarea reutilizable

```text
Objetivo: corregir la regresión del tiempo de espera al iniciar sesión en #42.
Punto de partida: main.
Alcance: solo packages/auth/** y sus pruebas correspondientes.
Prohibido: actualizar dependencias, cambiar la API pública o escribir directamente en main.
Verificación: pnpm test --filter auth; pnpm typecheck.
Entrega: crear un PR hacia main, pero no fusionarlo.
La descripción del PR debe incluir la causa raíz, el resumen de cambios,
los comandos y resultados de las pruebas, los riesgos y el modo de reversión.
```

## Comprobaciones antes de crear el PR

- [ ] El commit inicial es el correcto y no faltan aportaciones locales aún sin enviar.
- [ ] El diff solo contiene cambios dentro del alcance de la tarea.
- [ ] La nueva rama tiene un nombre reconocible y no sobrescribe el trabajo de otra persona.
- [ ] Las pruebas se ejecutaron realmente y los fallos no quedaron ocultos en el resumen.
- [ ] No hay credenciales, registros temporales, cachés ni cambios de formato ajenos.
- [ ] Los cambios grandes se dividieron en PR que pueden revisarse por separado.

## La descripción del PR debe responder como mínimo

1. ¿Por qué hace falta el cambio?
2. ¿Qué se modificó realmente?
3. ¿Cómo se verificó, incluidos los comandos y resultados?
4. ¿Cuáles son los riesgos, límites y forma de reversión?
5. ¿Qué se dejó expresamente sin hacer?

Para cambios de UI, añade capturas reales; para cambios de comportamiento, pasos de reproducción; para migraciones, explica la compatibilidad y cómo revertir.

## Después de crearlo

Espera a los required checks, solicita una revisión complementaria con `@codex review` y pide a una persona que conozca el contexto que examine el diff principal. Si hay que corregir algo, aplica los comentarios concretos en la misma rama del PR; no crees una rama sin relación y dupliques el resultado.

Crear un PR y fusionarlo son dos límites de autorización distintos. Que Cloud pueda crear uno no justifica saltarse la política de fusión del equipo.

## Fuentes oficiales

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Revisión de Pull Requests en GitHub](https://learn.chatgpt.com/docs/third-party/github)

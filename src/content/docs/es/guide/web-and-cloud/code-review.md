---
title: Revisión de código en Cloud y GitHub
description: Revisa el diff de Cloud y utiliza Codex en GitHub como revisión complementaria centrada en los hallazgos importantes.
legacyVerification:
  status: "verified"
  products: "Cloud / GitHub"
  checkedAt: "2026-08-26"
locale: es
source_locale: zh-CN
source_revision: 'ea6796a'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 50
reviewed_at: 2026-10-25
---

Cuando termina una tarea Cloud, recibes un resumen y un diff. Puedes hacer preguntas de seguimiento, pedir cambios o crear un PR. Que la tarea haya terminado no significa que se haya aprobado la fusión: todavía deben intervenir el CI, la protección de ramas y el criterio humano del proyecto.

## Dos tipos de revisión

| Tipo | Qué examina | Resultado |
|---|---|---|
| Revisión del resultado de Cloud | Resumen, registros y diff de esta tarea | Decidir si continuar o crear un PR |
| GitHub Codex review | Diff del PR en un repositorio conectado y reglas de `AGENTS.md` | Publicar una code review en GitHub |

En un PR de GitHub, escribe el comentario:

```text
@codex review
```

Codex publica sus hallazgos como una revisión normal de GitHub. Según la explicación oficial actual, los comentarios de GitHub se centran en problemas P0/P1 de alta prioridad; si no encuentra ninguno, quizá deje solo una reacción. Que haya pocos comentarios no es motivo para omitir la revisión humana.

## Orden de revisión

1. **Alcance**: ¿coinciden los archivos, directorios, dependencias y elementos generados con la tarea?
2. **Comportamiento**: ¿cumplen los requisitos las rutas normales, de error y de casos límite?
3. **Seguridad**: examina autenticación, autorizaciones, tratamiento de entradas, credenciales y acceso saliente a la red.
4. **Evidencias**: ¿qué pruebas se ejecutaron realmente y se han comunicado los fallos?
5. **Posibilidad de reversión**: ¿puede deshacerse el cambio de forma acotada o mezcla refactorizaciones ajenas?

Ejemplo de prompt:

```text
Revisa este PR e informa solo de hallazgos que puedan provocar un
comportamiento incorrecto, corrupción de datos, problemas de seguridad o
regresiones de compatibilidad. Cada uno debe indicar gravedad, ubicación
concreta, condición que lo desencadena e impacto. No presentes preferencias
de estilo como defectos.
```

## Reglas propias del repositorio

Añade lo siguiente al `AGENTS.md` del directorio correspondiente:

```md
## Code Review Rules

### Límites de autenticación

- Señala cualquier ruta que registre tokens de acceso o los envíe a hosts
  que no estén en la lista de permitidos. La opción segura es conservar los
  tokens en el proveedor de credenciales y ocultarlos en la salida de diagnóstico.
```

Las reglas de la raíz se aplican a todo el repositorio; un `AGENTS.md` anidado puede añadir comprobaciones propias de cada servicio. Empieza por dos o tres reglas estables que describan una vía segura, en vez de llenar el archivo con nombres de funciones que pronto quedarán anticuados.

## Límites de la revisión automática

Los usuarios que tengan los permisos de push o admin necesarios en GitHub pueden activar las reviews automáticas de un repositorio en Codex Settings. La revisión automática es una barrera complementaria y no debe tener permiso para hacer merge automáticamente. Los repositorios de alto riesgo deben conservar required reviewers, CI y protección de ramas.

## Lista de aceptación

- [ ] Una persona ha leído el diff de la lógica principal.
- [ ] Los hallazgos P0/P1 se han corregido o el riesgo se ha aceptado por escrito.
- [ ] El CI pasa y pueden explicarse los reintentos tras fallos.
- [ ] No hay Secrets, elementos generados inesperados ni cambios ajenos en el lockfile.
- [ ] La descripción de la tarea, la del PR y los cambios reales coinciden.

## Fuentes oficiales

- [Revisión de Pull Requests en GitHub](https://learn.chatgpt.com/docs/third-party/github)
- [Revisión de código entre clientes](https://learn.chatgpt.com/docs/code-review)

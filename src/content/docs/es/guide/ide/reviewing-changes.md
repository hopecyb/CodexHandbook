---
title: Revisar cambios en el IDE
description: Leer diffs, comentar y aceptar/rechazar sugerencias de Codex dentro del editor.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La experiencia de revisión de la extensión IDE está entre el «autocomplete en línea» y el «PR review completo»: los cambios suelen aparecer directamente en el editor o en una vista de diff lateral. Esta página explica cómo aceptar resultados con seguridad.

Aunque en el IDE veas un cambio «listo para aceptar», no conviertas «aceptar de un clic» en la acción por defecto.

## Contenido de esta página

- Formas habituales de la UI de revisión en el IDE
- Estrategias de aceptar, rechazar y aceptar en parte
- Encaje con Git, tests y el flujo de PR

## Flujo de revisión

1. **Mira el alcance**: ¿qué archivos cambiaron? ¿hay borrados no pedidos o tormentas de formateo?
2. **Lee la lógica**: ramas condicionales, manejo de errores, casos límite
3. **Revisa seguridad**: claves, inyección, elevación de Permisos, envenenamiento de dependencias
4. **Ejecuta la Verificación**: tests / lint acordados en el proyecto (terminal del IDE o scripts de Tarea)
5. **Decide**: aceptar, pedir cambios o deshacer y reenviar la Tarea

Metodología: [Revisar diffs](/guide/quality/review-diffs/)

## Operaciones propias del IDE (concepto)

| Operación | Sugerencia |
|---|---|
| Inline diff / texto fantasma | Mira bloque a bloque antes de aceptar; evita aceptar todo de un clic |
| Aceptar un solo archivo | Empieza por el de menor riesgo (p. ej. tests) |
| Rechazar y reintentar | En el follow-up aclara «solo cambia X, no toques Y» |
| Integración con Git | Tras aceptar, vuelve a contrastar con `git diff` antes del commit |

Las funciones de [Diff, comentarios y revisión](/guide/desktop-app/diffs-comments-and-review/) de la App de escritorio son más completas; en el IDE la revisión es sobre todo **ligera y de alta frecuencia**.

## Hábitos de Prompt recomendados

Antes de empezar la Tarea, incluye:

- Glob de rutas que se pueden modificar
- Prohibido: `git push`, tocar lockfile (salvo petición explícita)
- Al terminar: listar un resumen de cambios, **sin hacer commit automático**

Ver [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

## Errores frecuentes

- Confiar en el icono verde de tests sin haberlos ejecutado tú
- Esconder cambios de lógica dentro de un gran diff de formateo automático
- Tras aceptar, hacer push directo sin PR / protección de rama

## Lista de verificación

- [ ] `git status` coincide con los archivos esperados
- [ ] Tests en verde (local o CI)
- [ ] Sin restos de `.env`, token ni `console.log` de depuración
- [ ] El mensaje de commit lo escribes o confirmas tú

## Preguntas frecuentes

### 1. Si la sugerencia en línea se ve pequeña, ¿puedo aceptarla tal cual?

Mejor no crear ese hábito.

Muchos problemas no vienen de que «el cambio sea grande», sino de que «parece pequeño y por eso no se mira con cuidado».

### 2. Si no se me da bien revisar lógica, ¿qué mirar primero?

Estas tres cosas ya aportan mucho:

- Si cambia el archivo que pediste
- Si ha borrado algo que no debía
- Si hay restos evidentes de depuración o deriva de estilo

### 3. Tras aceptar, ¿ya está hecho?

Todavía no.

Aceptar solo mete el cambio en tu área de trabajo; después hay que verificar y decidir si hacer commit.

En el IDE, «aceptar el cambio» es un paso intermedio, no la aceptación final.

## Fuentes de referencia

- [Verificación y revisión humana](/guide/foundations/verification-and-human-review/)
- stormzhang `09-ide.md`

---

**Estado:** outdated  
**Productos aplicables:** IDE  
**Nota de revisión:** Esta página depende de si la extensión IDE ofrece UI concreta de revisión (inline diff, diff lateral, sugerencias por bloque aceptar/rechazar); el material oficial público vigente no basta para confirmar esas capacidades una a una; no conviene marcarla como `verified` hasta completar la documentación de la extensión nueva.  
**Última verificación:** 2026-07-26

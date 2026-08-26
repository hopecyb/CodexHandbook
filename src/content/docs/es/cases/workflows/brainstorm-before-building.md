---
title: Lluvia de ideas antes de construir
description: Antes de escribir código o textos largos, explora de forma estructurada y converge en un plan — menos retrabajo.
locale: es
source_locale: zh-CN
source_revision: 9bf8989
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Lluvia de ideas antes de construir** encaja cuando el objetivo es difuso y hay más de una solución: funciones nuevas, rediseños, temas de contenido, selección técnica. Se enlaza con la fase ① explorar de [Explorar—planificar—ejecutar—verificar](/es/cases/workflows/explore-plan-execute-verify/), pero insiste en **divergir y converger**, no en leer código y editar archivos de inmediato.

## Qué resuelve esta página

- Cuándo merece la pena hacer brainstorm primero y cuándo ir directo a EPXV
- Cómo limitar el alcance de la divergencia y evitar charla vacía
- Artefactos: tabla de opciones, registro de decisiones, plan del siguiente paso

## Para quién

| Escenario | Ejemplo |
|---|---|
| Producto / función | «Añadir exportación; hay tres UIs posibles» |
| Contenido | «¿A quién va este tutorial y cómo se estructura?» |
| Técnica | «¿Cola o cron para tareas programadas?» |

## Práctica mínima viable

**Fase A — Divergir (con límite de tiempo)**

```text
No modifiques ningún archivo. Para el requisito «exportar CSV», lista 3 caminos de implementación:
para cada uno, pros/contras, módulos implicados y esfuerzo estimado (S/M/L).
No elijas la solución final.
```

**Fase B — Converger**

```text
Según la tabla anterior, recomienda 1 opción por defecto y 1 alternativa;
indica 2 puntos de decisión que debo confirmar (formato, permisos).
```

**Fase C — Pasar al plan**

Tras confirmar, continúa con [trabajo impulsado por especificación](/es/cases/workflows/specification-driven-work/) o la fase ② planificar de EPXV.

## Flujo recomendado

```text
Aclarar restricciones (tiempo, stack, partes intocables)
    → Divergir 3–5 opciones (prohibido escribir código)
    → Ordenar por «valor / riesgo / coste»
    → Elección humana o pedir más información
    → Plan escrito + ejecución
```

Fija un **timebox**: por ejemplo, terminar la divergencia en 15 minutos para evitar que la discusión derive.

## Errores frecuentes

- Tratar el brainstorm como ejecución: el modelo ya edita archivos — usa la restricción «no cambies todavía»
- Demasiadas opciones sin ordenar → fatiga de decisión
- No registrar las opciones descartadas → se vuelve a discutir dos semanas después
- Saltar restricciones: el plan es «bonito» pero no es viable

## Límites de seguridad

- En brainstorming aún se pueden leer archivos sensibles — acota con `@` el alcance
- Opciones con impacto de cumplimiento o privacidad requieren revisión humana legal/seguridad; el modelo no decide solo

## Checklist de aceptación

- [ ] Al menos 2 opciones viables y una recomendación clara
- [ ] Puntos de decisión marcados, a la espera de confirmación humana
- [ ] Sin escrituras no autorizadas en el repo
- [ ] El siguiente paso puede enlazar con un plan escrito

## Capítulos relacionados

- [Explorar—planificar—ejecutar—verificar](/es/cases/workflows/explore-plan-execute-verify/)
- [Trabajo impulsado por especificación](/es/cases/workflows/specification-driven-work/)
- [Pedir un plan](/es/prompts/ask-for-a-plan/)

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de EPXV, planificación, especificación y prompts. Esta página solo describe el método estable «divergir → converger → planificar», sin depender de detalles de entrada del producto.

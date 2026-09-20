---
title: "Cuándo ejecutar directamente y cuándo pedir antes un plan"
description: "Elige entre ejecución directa, planificación o aprobación de una acción concreta según el alcance, la incertidumbre y el impacto externo, con dos comparaciones de prompts."
contentType: prompt
audiences: [beginner, developer, creator]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Las tres categorías de tareas y las dos comparaciones son consejos editoriales de colaboración. Se comprobaron los límites de autorización y ejecución; no son modos fijos del cliente ni un experimento sobre la tasa de éxito del modelo."
locale: es
source_locale: zh-CN
source_revision: 706f11b
translation_status: draft
translated_at: 2026-09-20
---

Pedir un plan depende de qué decisiones siguen pendientes. Un cambio con alcance claro y fácil de deshacer puede ejecutarse directamente. Si la ruta no está clara, conviene planificar primero. Detente antes de una acción concreta que requiera autorización adicional. Pedir un plan no significa esperar una respuesta del usuario después de cada paso.

## Determina primero la categoría

| Categoría | Cómo reconocerla | Qué indicar | Cuándo detenerse |
|---|---|---|---|
| Ejecutar directamente | Entradas, alcance y criterios de aceptación claros; cambio reversible | Indicar dónde cambiar, qué significa terminar y qué queda excluido | Si se sale del alcance o falta información imprescindible |
| Planificar primero | Decisiones de arquitectura, alcance incierto o varios pasos interdependientes | Examinar el estado actual y proponer ruta, efectos y verificación | Si una disyuntiva exige la decisión del usuario o este pide expresamente revisar antes el plan |
| Acción que requiere aprobación | Una acción concreta tendría un efecto externo no autorizado o afectaría un límite de permisos de ejecución | Preparar primero un resultado revisable e indicar la acción, el objetivo y sus efectos | Antes de esa acción, conservando la preparación ya terminada |

«Hay tres archivos» no es un umbral universal de aprobación: un solo archivo de configuración de producción puede tener un gran impacto. Consulta [Permisos y entorno aislado](/es/guide/permissions-and-sandbox/) para los avisos del producto y los permisos reales de ejecución. Esta tabla no configura los permisos de todos los clientes.

## Comparación 1: corregir texto local

Tarea: corregir dos erratas en el README sin cambiar su estructura.

**Contraejemplo con pausas excesivas:**

```text
Primero presenta un plan y espera mi aprobación antes de leer los archivos.
Después de leerlos, enumera los dos cambios y espera otra aprobación.
Detente tras cada cambio para preguntarme y luego pregunta si debes comprobarlo.
```

Estas esperas no aclaran ninguna decisión necesaria; fragmentan una tarea ya autorizada y bien definida.

**Formulación con alcance claro:**

```text
En el cuerpo de README.md cambia las dos apariciones de «帐户» por «账户».
Conserva los bloques de código, los enlaces y todo lo demás. Haz el cambio
directamente, revisa el diff e indica dónde modificaste. Si el número real
de coincidencias no es dos, explica antes la diferencia; no amplíes la tarea
a una corrección integral del texto.
```

La aceptación exige dos cambios exactos y ningún cambio en el contenido ajeno. Normalmente no hacen falta pruebas nuevas para este tipo de modificación; realiza las comprobaciones adecuadas según las reglas del proyecto.

## Comparación 2: cambiar un sitio y publicarlo

Tarea: actualizar tres tutoriales y publicarlos en el sitio de producción. Hay que separar la preparación del contenido del efecto de publicarlo.

**Contraejemplo con autorización imprecisa:**

```text
Primero redacta un plan; después cambia todo el sitio web y publícalo.
```

No indica qué contenido debe cambiar, dónde se publica ni si está autorizado sustituir la versión activa.

**Formulación con límites concretos:**

```text
Actualiza estos tres tutoriales y corrige sus enlaces internos relacionados.
Lee el estado actual y presenta un plan breve; luego completa los cambios,
la compilación y la revisión de la vista previa dentro de esos archivos y
la navegación relacionada, sin esperar en cada paso. Entrega la vista previa,
un resumen de cambios y los resultados de verificación. La publicación en
producción aún no está autorizada. Cuando esté todo preparado, indica la
versión que publicarías, el entorno de destino y cómo revertir el cambio;
espera mi confirmación para la acción de publicar.
```

En este caso, termina el trabajo local antes de solicitar la autorización final de publicación. Si el usuario ya autorizó expresamente el destino y la acción de publicación concretos, aplica la política vigente para decidir si puedes continuar; no vuelvas a pedir el mismo permiso solo porque esta plantilla incluye una confirmación.

Ambas comparaciones son ejemplos didácticos, no salidas reales del modelo ni medidas de eficiencia.

## Cuándo hacer solo un plan

Si aún comparas opciones, necesitas una decisión presupuestaria o quieres revisar expresamente el diseño antes de ejecutarlo, limita el trabajo al plan:

```text
En esta ronda, solo planifica. Lee la implementación existente y presenta
dos opciones, su impacto y cómo aceptarlas. Señala las disyuntivas que de
verdad requieren mi decisión. No cambies la implementación. Ejecuta solo
cuando se haya elegido el enfoque.
```

Ese límite explícito de fase debe respetarse. La autonomía habitual del agente no autoriza saltar directamente a la implementación.

## Qué debe incluir el plan

Un plan suficiente explica el objetivo, el alcance afectado, los pasos, la verificación y las disyuntivas pendientes. Una respuesta conocida no debe convertirse en una pregunta de confirmación. Una tarea breve y de bajo riesgo tampoco necesita una sección de reversión solo por seguir una plantilla.

Si aparece una situación nueva durante la ejecución, distingue los detalles normales de implementación de un cambio de objetivo. Resuelve y explica los pequeños problemas dentro del alcance original. Si surge una dependencia, se amplía el cambio, cambia una interfaz o hace falta una nueva acción externa, comprueba primero si sigue dentro de la autorización.

## Reglas predeterminadas que puedes incluir en el proyecto

```md
- Ejecutar directamente las tareas reversibles y de alcance claro, con las
  comprobaciones apropiadas.
- Para tareas complejas, presentar primero un plan breve. Esperar solo si el
  usuario pidió revisarlo o hay una decisión imprescindible pendiente.
- Avanzar dentro del alcance autorizado sin pedir confirmación a cada paso.
- Explicar el problema concreto si faltan datos esenciales, se excede el
  alcance o hace falta una acción no autorizada.
- No interpretar la finalización de cambios locales como autorización
  automática para publicar, enviar mensajes o borrar datos.
```

Son recomendaciones ajustables de trabajo; no sustituyen las reglas del sistema, las políticas de la organización ni el entorno aislado. Consulta [Prioridad del contexto](/es/guide/context/context-priority/), [Planificación](/es/guide/agent-work/planning/) y [Patrones de aprobación humana](/es/cases/workflows/human-approval-patterns/).

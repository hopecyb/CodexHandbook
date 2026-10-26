---
title: "Planificar: aclarar la ejecución y la verificación"
description: "Usa un plan para resolver alcance, dependencias y decisiones; distingue planificar de esperar aprobación y sigue dentro de la autorización existente."
contentType: guide
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "Esta página propone una forma de trabajar contrastada con la clasificación de tareas y los permisos; no afirma un comportamiento predeterminado de ningún cliente ni mejoras de eficiencia medidas."
sidebar:
  order: 10
locale: es
source_locale: zh-CN
source_revision: "a129229"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---Un plan es una ruta de ejecución que puedes examinar y ajustar. Ayuda a detectar pronto lagunas de alcance, dependencias y aceptación, pero una tarea más grande no implica esperar confirmación repetidamente.

Empieza por la [clasificación de tareas](/es/prompts/ask-for-a-plan/): completar directamente, planificar y ejecutar dentro de la autorización existente, o limitarte a proponer una solución esta vez. Una petición explícita de «primero un plan, sin modificar archivos» debe seguir siendo de solo lectura. Si se pide implementar, no basta con entregar un plan.

![Ilustración: un asistente dibuja un plan por pasos en una pizarra y una persona señala un paso para ajustarlo antes de empezar](/illustrations/agent-planning.webp)

## Un plan suficientemente preciso

| Elemento | Qué concretar |
|---|---|
| Objetivo | Comportamiento observable al terminar |
| Alcance | Archivos, entradas y exclusiones pertinentes |
| Orden | Dependencias reales, sin convertir cada llamada a una herramienta en un paso |
| Verificación | Salidas o comprobaciones que demuestren la finalización |
| Decisiones | Solo las cuestiones sin resolver que afectan al resultado |

Para añadir una agrupación de datos a un informe existente, el plan puede ser «comprobar definiciones → cambiar agregación y presentación → contrastar totales y grupos con una muestra». No hace falta pedir permiso por separado para leer cada archivo, hacer cada edición o ejecutar cada prueba.

## Dos solicitudes de planificación diferentes

**La solución aún no está decidida:**

```text
En esta ocasión, analiza solo en modo de lectura dos opciones de exportación según dependencias, compatibilidad y coste de mantenimiento.
Recomienda una e indica qué decisiones debo tomar. No modifiques la implementación.
```

**El alcance está decidido y hay que implementar:**

```text
Completa la exportación CSV según los requisitos existentes. Primero examina el repositorio y da un plan breve;
después implementa y verifica de forma continua dentro del alcance acordado, sin esperar tras cada paso.
Si necesitas un servicio nuevo, cambiar la interfaz pública o ampliar el acceso a datos, explica antes la razón concreta.
```

Estos son ejemplos creados para este manual. Que aparezca un cuadro de aprobación depende de las herramientas, políticas y permisos reales.

## Ajustar el plan durante la ejecución

- Detalle normal de implementación: actualiza el plan y continúa dentro del alcance autorizado.
- Premisa inicial falsa: explica pruebas e impacto y propone una alternativa dentro del alcance.
- Decisión que corresponde al usuario: haz una pregunta concreta y sigue con el trabajo independiente de la respuesta.
- Acción externa no autorizada: prepara un resultado revisable y solicita autorización antes de realizarla.

No detengas el trabajo por un problema que solo podría aparecer, ni sigas el plan hasta ignorar un cambio real de alcance.

## Dar comentarios sobre un plan

```text
Mantén los pasos 1 y 2, pero quita la refactorización.
Esta vez haz solo una vista previa local; no publiques.
Añade una comprobación: el formato antiguo de archivos sigue siendo legible.
```

Los comentarios modifican solo lo que mencionan expresamente. Las restricciones y criterios no retirados siguen vigentes. Si se interrumpe la tarea, registra archivos actuales, comprobaciones completadas y siguiente paso en una [nota de entrega](/es/guide/agent-work/handoff-and-resume/).

## Volver a las pruebas al terminar

Comprueba que el objetivo se cumplió de verdad, no solo que se marcaron todos los pasos. Registra las pruebas no ejecutadas, vistas previas no inspeccionadas y hechos no verificados. Consulta [Explorar → Planificar → Ejecutar → Verificar](/es/cases/workflows/explore-plan-execute-verify/).

---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Contrastado con las páginas verificadas del manual sobre planificación, diagnóstico, definición de terminado, pruebas y AGENTS.md. Esta página se limita al flujo de colaboración en cuatro fases y sus puntos de control, sin opciones de producto cambiantes."
  checkedAt: "2026-07-26"
title: "Explorar—planificar—ejecutar—verificar"
description: "Ajusta la exploración, planificación, ejecución y verificación al alcance y la incertidumbre de la tarea, e identifica las decisiones que requieren una pausa."
locale: es
source_locale: zh-CN
source_revision: "4a95760"
translation_status: draft
translated_at: 2026-09-20
---

Esta es la forma de organizar tareas que recomienda el manual, desde «todavía no sé cómo hacerlo» hasta «listo para aceptar». Cuatro fases no implican cuatro aprobaciones. Una tarea pequeña con un alcance claro puede completarse sin interrupciones; se espera una decisión cuando el enfoque no está resuelto o falta una autorización necesaria. Empieza por los [niveles de tarea](/es/prompts/ask-for-a-plan/).

## Vista de las cuatro fases

```text
① Explorar Explore   → Entender el estado actual, el alcance y los riesgos
② Planificar Plan    → Pasos, archivos, criterios de aceptación y decisiones necesarias
③ Ejecutar Execute   → Cambiar código, documentación o configuración dentro del alcance autorizado
④ Verificar Verify   → Pruebas, revisión del diff y contraste con la definición de terminado
```

Si el estado actual no está claro, explora y planifica antes de corregir por conjeturas. Una errata con un alcance claro no necesita cuatro interacciones. Consulta [Diagnosticar antes de corregir](/es/cases/workflows/diagnose-before-fixing/).

## ① Explorar

**Objetivo:** Dejar claro el estado actual antes de decidir cómo cambiar.

Ejemplo de prompt:

```text
No cambies el código todavía. Lee @src/auth/ y los tests relacionados, y explica en lista:
1. Flujo de login actual
2. Archivos que podrían relacionarse con el bug de layout en Safari
3. Un punto del que no estás seguro y necesitas que yo confirme
```

Salida: enunciado del problema, alcance del impacto, puntos pendientes de confirmar.

## ② Planificar

**Objetivo:** Una lista de pasos revisable.

```text
A partir de la exploración anterior, dame un plan: pasos numerados, archivos implicados, cómo verificar cada paso.
No escribas código hasta que yo responda «ejecutar según el plan».
```

El prompt anterior limita expresamente la solicitud a la planificación, así que hay que esperar. Si la implementación ya está autorizada, puedes pedir un plan breve seguido de ejecución y verificación continuas dentro del alcance acordado. La pausa depende de la autorización, las decisiones necesarias y los permisos reales, no del número de pasos del plan.

## ③ Ejecutar

**Objetivo:** Mantener los cambios pequeños y reversibles.

- Centrarse en un subobjetivo cada vez
- Priorizar las rutas cubiertas por pruebas
- Para detalles corrientes de implementación, actualizar el plan y continuar; si cambian los supuestos o el alcance, volver a ② para decidir si hace falta una nueva decisión

Frase orientativa: «Completa el alcance autorizado; si necesitas ampliarlo, explica las consecuencias concretas y las opciones».

## ④ Verificar

**Objetivo:** Demostrar que se cumple la «definición de terminado».

| Tipo de verificación | Práctica |
|---|---|
| Automática | Tests unitarios, lint, comprobación de tipos |
| Humana | Leer el diff, probar a mano las rutas críticas |
| Artefacto | Capturas, fragmentos de log, respuestas de API |

Listas relacionadas: [Definir terminado](/es/prompts/define-done/) y [Ejecutar tests](/es/guide/quality/run-tests/).

## Ajuste según el tamaño de la tarea

| Tamaño | Explorar | Planificar | Ejecutar | Verificar |
|---|---|---|---|---|
| Corregir errata | Comprobar el texto objetivo | Puede ser implícito | Breve | Revisar el diff y verificar según las reglas del proyecto |
| Error en un archivo | Ligero | 3–5 pasos | Medio | Pruebas + diff |
| Función entre módulos | Identificar dependencias | Plan escrito; consultar decisiones necesarias | Completar por fases dentro del alcance autorizado | Pruebas según el impacto + revisión manual |
| Incidente de producción | Diagnosticar primero | Plan de reversión primero | Pasos muy pequeños | Supervisión + análisis posterior |

## Con la plantilla de casos EPXV

El equipo puede volcar las cuatro fases en la [plantilla de caso](/es/cases/use-cases/case-study-template/) y en las descripciones de PR, para un lenguaje común.

## Errores frecuentes

- El plan solo está «en la cabeza» y la ejecución se desvía
- Verificar solo «parece que arranca»
- Explorar poco y tocar el módulo equivocado

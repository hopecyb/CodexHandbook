---
title: "Explorar—planificar—ejecutar—verificar"
description: Flujo principal genérico de Codex — cuatro puntos de control por fase, más fiable que «todo de una vez».
locale: es
source_locale: zh-CN
source_revision: ac26bee
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Este es el flujo de trabajo por defecto que recomienda este manual: de «aún no sé cómo» a «listo para fusionar».

## Vista de las cuatro fases

```text
① Explorar Explore   → Aclarar estado actual, alcance y riesgos
② Planificar Plan    → Pasos, archivos, criterios de aceptación (las tareas grandes requieren tu confirmación)
③ Ejecutar Execute   → Cambiar código/docs/config en pasos pequeños
④ Verificar Verify   → Tests, revisión del diff, contraste con la «definición de terminado»
```

No saltes ①② para ir directo a ③: eso suele acabar en «arreglar a ciegas». Ver [Diagnosticar antes de corregir](/es/cases/workflows/diagnose-before-fixing/).

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

Las tareas grandes o de alto riesgo esperan confirmación. En tareas pequeñas puedes acordar «si el plan tiene ≤3 pasos, puede ejecutarse automáticamente» y escribirlo en [AGENTS.md](/es/guide/customization/agents-md/writing-effective-instructions/).

## ③ Ejecutar

**Objetivo:** Mantener los cambios pequeños y revertibles.

- Un subobjetivo por vez
- Prioriza rutas que los tests puedan cubrir
- Ante imprevistos, **vuelve a ②** en lugar de forzar

Frase guía: «Ejecuta el paso 2; si hace falta cambiar el plan, para y explícalo.»

## ④ Verificar

**Objetivo:** Demostrar que se cumple la «definición de terminado».

| Tipo de verificación | Práctica |
|---|---|
| Automática | Tests unitarios, lint, comprobación de tipos |
| Humana | Leer el diff, probar a mano las rutas críticas |
| Artefacto | Capturas, fragmentos de log, respuestas de API |

Listas relacionadas: [Definir terminado](/es/prompts/define-done/) y [Ejecutar tests](/es/guide/quality/run-tests/).

## Ajuste según el tamaño de la tarea

| Escala | Explorar | Planificar | Ejecutar | Verificar |
|---|---|---|---|---|
| Corrección de typo | Opcional | 1 paso oral | Corta | lint |
| Bug de un solo archivo | Ligera | 3–5 pasos | Media | Tests + diff |
| Función cross-módulo | Obligatoria | Plan escrito + confirmación | Por fases | Suite completa + prueba manual |
| Incidente de producción | Diagnóstico primero | Plan de rollback primero | Pasos mínimos | Monitorización + retrospectiva |

## Con la plantilla de casos EPXV

El equipo puede volcar las cuatro fases en la [plantilla de caso](/es/cases/use-cases/case-study-template/) y en las descripciones de PR, para un lenguaje común.

## Errores frecuentes

- El plan solo está «en la cabeza» y la ejecución se desvía
- Verificar solo «parece que arranca»
- Explorar poco y tocar el módulo equivocado

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con las páginas ya verificadas de planificación, diagnóstico, definir terminado, ejecutar tests y `AGENTS.md`. El contenido se limita a la cadena principal de cuatro fases y sus puntos de control; no incluye parámetros de producto volátiles ni detalles de entrada.

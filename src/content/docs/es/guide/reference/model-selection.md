---
title: Cómo elegir modelos de ChatGPT y Codex
description: Elige modelo y nivel de razonamiento para conversar, escribir, analizar hojas de cálculo, programar o investigar; después evalúa planes y uso real.
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: Se contrastaron los modelos, niveles de pensamiento de Chat y planes con la documentación oficial. Las recomendaciones son editoriales, sin pruebas de rendimiento, velocidad ni coste.
  evidence:
    - label: Modelos de Work y Codex
      href: https://learn.chatgpt.com/docs/models
    - label: Modelos y niveles de pensamiento de Chat
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: Planes y uso
      href: https://learn.chatgpt.com/docs/pricing
locale: es
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-10-25
reviewed_at: '2026-10-25'
source_revision: '20eb508'
---

**Prueba GPT‑6.1 Sol para trabajos complejos, Luna para tareas pequeñas y bien definidas y Astra para problemas exigentes. En Chat, elige Instant, Thinking o Pro.** Identifica primero dónde trabajas y consulta la tabla correspondiente.

[Work / Codex](#work-codex) · [Chat](#chat) · [Planes y precios](/es/chatgpt-pricing/) · [Registrar el uso real](/es/guide/quality/usage-time-and-model-choice/)

:::note[Alcance · 2026-10-24]
Los modelos, ajustes y límites varían según la cuenta, el cliente, el espacio de trabajo y el despliegue. Esta referencia tiene fecha: las recomendaciones son puntos de partida y no garantizan que tu cuenta tenga acceso. Comprueba por separado los menús y las reglas de uso de Chat, Work y Codex.
:::

<span id="work-codex"></span>

## Work / Codex: empieza por la tarea

Estos escenarios son recomendaciones editoriales. Empieza con el nivel de razonamiento predeterminado que admita tu cliente. Revisa los materiales y el alcance antes de elegir un modelo más potente.

| Tarea | Punto de partida recomendado | Cuándo aumentar el razonamiento o cambiar de modelo | Práctica y verificación |
|---|---|---|---|
| Extraer campos, convertir formatos, hacer pequeñas reescrituras | GPT‑6 Luna | Prueba Sol si, con entradas claras, siguen faltando campos o fallan los casos límite | [Registrar uso y trabajo repetido](/es/guide/quality/usage-time-and-model-choice/) |
| Escribir a partir de varias fuentes | GPT‑6.1 Sol | Considera Astra si no logra resolver los conflictos entre fuentes u omite requisitos repetidamente | [Escribir un artículo](/es/cases/write-an-article/) |
| Analizar ventas y preparar un informe semanal | GPT‑6.1 Sol | Aumenta el nivel si siguen fallando devoluciones, deduplicación o comparaciones entre periodos; verifica los resultados con cálculos independientes | [Informe de ventas](/es/cases/analyze-a-spreadsheet/) |
| Corregir un bug o modificar varios archivos | GPT‑6.1 Sol | Considera Astra ante dependencias entre archivos difíciles de localizar o correcciones que fallan repetidamente | [Corregir y verificar un bug](/es/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Investigar varias fuentes con requisitos estrictos | GPT‑6.1 Sol; considera Astra para problemas difíciles | Aumenta el nivel si no se integran evidencias contradictorias o se siguen perdiendo restricciones | [Verificar el resultado](/es/guide/quality/) |

## Características de los modelos y sus limitaciones

| Modelo | Función principal | Ventajas y limitaciones |
|---|---|---|
| GPT‑6 Luna | Eficiencia en tareas claras, repetitivas y frecuentes | Útil para tareas pequeñas; las decisiones complejas necesitan una revisión más cuidadosa |
| GPT‑6.1 Sol | Equilibrio entre capacidad y coste para trabajos complejos | Su posicionamiento oficial es cercano a Astra con menor coste, sin equivalencia en todas las tareas |
| GPT‑6 Astra | La opción de mayor capacidad para trabajos difíciles de varios pasos | Considéralo cuando la calidad del resultado sea prioritaria; el consumo adicional puede aportar poco en tareas sencillas |
| GPT‑6 Sol y modelos GPT‑5.6 | Opciones anteriores que pueden seguir en tu cliente | Conserva los flujos ya validados si funcionan; compara las recomendaciones actuales para tareas nuevas |

La [guía oficial de modelos](https://learn.chatgpt.com/docs/models) sitúa 6.1 Sol en Work y Codex. No deduzcas que existe una opción del mismo nombre en Chat. Las descripciones de Work/Codex y la etiqueta GPT‑6 de Chat deben interpretarse en sus respectivas interfaces.

<span id="chat"></span>

## Chat: elige un nivel de pensamiento

| Opción | Uso recomendado | Consideraciones |
|---|---|---|
| Instant | Preguntas cotidianas, traducción, reescrituras breves | Prioriza la rapidez de respuesta |
| Thinking · Medium | Aprendizaje, comparación de opciones, análisis general | Punto de partida para un análisis detenido |
| Thinking · High | Matemáticas, decisiones con muchas condiciones, problemas de código complejos | Más tiempo de pensamiento para preguntas difíciles |
| Extra High | Problemas especialmente difíciles que requieren revisión cuidadosa | Úsalo cuando haga falta, según el acceso de tu plan |
| Pro / GPT‑6 Pro | Tareas difíciles y flujos de trabajo largos | Funciona con Astra y está sujeto al plan y al cupo |

En la fecha de verificación, la documentación de Chat incluye Medium y High para Plus; Extra High y Pro corresponden a planes superiores. La opción Think de Free / Go no equivale a la función del mismo nombre en los planes de pago. Pedir a Instant que «piense a fondo» en Plus / Pro no aumenta automáticamente el nivel: selecciónalo en el menú. [Documentación oficial de Chat](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## Cuándo aumentar o reducir el nivel

- El resultado cumple los criterios de aceptación: conserva el ajuste o prueba uno más ligero con la misma tarea.
- Faltan fuentes u objetivos claros: completa primero las entradas; más razonamiento no aporta evidencias inexistentes.
- Hay omisiones repetidas o fallos lógicos: mantén las entradas y cambia el nivel o el modelo de uno en uno.
- Los ajustes altos siguen fallando: reduce el alcance y revisa herramientas, permisos y verificación.

El modelo y el nivel de razonamiento son elecciones distintas. Un nivel más alto suele consumir más tiempo y tokens. Comprueba los ajustes admitidos por cada modelo y cliente; no traslades directamente los de Chat a Codex. [Fundamentos de modelos y razonamiento](/es/guide/foundations/models-and-reasoning/)

## ¿Necesitas cambiar de plan?

Prueba el acceso gratuito para un uso ocasional. Considera Plus si escribes, analizas o programas con frecuencia. Compara Pro cuando alcances límites repetidamente o necesites más capacidad o cupo. La conveniencia de Go depende de las funciones necesarias y de la diferencia de precio local.

Es una secuencia de decisión, no una clasificación universal de relación calidad-precio. **Los planes Pro también tienen límites de uso de los modelos.** Comprueba por separado la suscripción, los créditos adicionales y los cargos de API; las proporciones entre tarifas no equivalen al ahorro por tarea completa.

[Elegir plan y consultar fuentes de precios](/es/chatgpt-pricing/) · [Cuentas, planes y acceso](/es/guide/getting-started/account-plans-and-access/)

## Cómo evaluar la relación calidad-precio

Compara con las mismas entradas, el mismo alcance de herramientas y los mismos criterios de aceptación. Registra por separado esperas, fallos, reintentos, revisión humana y trabajo repetido. Prioriza el ajuste más ligero que cumpla los criterios de forma fiable, sin optimizar solo la velocidad de respuesta.

[Descarga y completa los registros de uso](/es/guide/quality/usage-time-and-model-choice/) o reutiliza los [tres ejercicios de comparación de prompts](/es/prompts/comparison-lab/). El experimento existente no registró las etiquetas reales de los modelos y **no permite establecer una clasificación de modelos**.

## ¿Qué ocurre si el modelo no está disponible?

Comprueba si estás en Chat, Work o Codex; después revisa la versión del cliente, el plan, los permisos del espacio de trabajo y cuándo se restablece el cupo. Usa un modelo disponible para una tarea más acotada o guarda el avance y espera. Elegir un nombre de modelo no concede acceso.

[Diagnóstico de acceso](/es/guide/getting-started/account-plans-and-access/) · [Resolución de problemas](/es/guide/reference/troubleshooting/)

## Fuentes y actualizaciones

Los datos del producto proceden de las fuentes oficiales citadas al principio; las recomendaciones por tarea son criterio editorial. Esta página no contiene pruebas de rendimiento de modelos. Los precios se mantienen aparte en su página: confirma los datos reales antes de pagar.

- 2026-10-24: Primera guía que distingue Chat de Work/Codex, con enlaces a ejercicios, registros de uso y fuentes de precios.

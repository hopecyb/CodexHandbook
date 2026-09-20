---
title: Uso, tiempo y elección del modelo
description: Registra por separado el cupo de suscripción, el coste de API, la espera y el trabajo repetido. Compara modelos con las mismas tareas sin confundir consumo con calidad.
contentType: guide
audiences: [beginner, creator, developer, team]
level: intermediate
outputs: [csv]
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: Se revisaron las explicaciones oficiales sobre uso, precios de API y facturación del razonamiento. Las plantillas y el cálculo son didácticos; no hay mediciones de velocidad, coste ni ahorro de tiempo de ningún modelo.
  evidence:
    - label: Uso y precios oficiales de Codex
      href: https://learn.chatgpt.com/docs/pricing
    - label: Precios oficiales de la API
      href: https://developers.openai.com/api/docs/pricing
    - label: Guía de modelos de razonamiento
      href: https://developers.openai.com/api/docs/guides/reasoning
assets:
  - path: /downloads/usage-log/usage-log-1.0.0.zip
    purpose: Plantillas para costes y duración de ejecuciones, capturas de cupo y notas de fuentes
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: ad02d42
translation_status: draft
translated_at: 2026-09-20
---

Primero aclara qué estás registrando: el cupo restante de una cuenta, el coste de una llamada a la API, el tiempo de espera o el esfuerzo humano dedicado a revisar y rehacer. Son magnitudes con unidades distintas y no se sustituyen entre sí.

[Descargar las plantillas de registro](/downloads/usage-log/usage-log-1.0.0.zip) · [Instrucciones](/downloads/usage-log/README.md)

## Lleva cuatro cuentas separadas

| Medida | Qué registrar | Interpretación errónea habitual |
|---|---|---|
| Cupo de suscripción | Ventana, porcentaje restante y hora de restablecimiento mostrados en la interfaz actual | Convertir directamente el porcentaje restante en dólares o en un número fijo de tareas |
| Coste de API | Uso real de la llamada, modelo y precio aplicable; cotejar la factura | Sustituir la tarifa de API por el precio de la suscripción o tomar una estimación por un cargo real |
| Tiempo de espera | Inicio, fin, cola y reintentos de la misma tarea | Registrar solo la última ejecución correcta y omitir el tiempo perdido en fallos |
| Esfuerzo humano | Medir por separado revisión y trabajo repetido | Contar toda la espera del modelo como horas de trabajo ahorradas |

La [explicación oficial de precios](https://learn.chatgpt.com/docs/pricing) indica que el uso de una tarea depende del modelo, el contexto, el razonamiento, las herramientas y la caché. Las estimaciones de cantidad de mensajes no son límites fijos. Consulta el panel de uso para conocer tu cupo actual; en una sesión CLI puedes usar `/status`. El uso con clave API se factura según las tarifas de la API.

Una captura del cupo puede incluir otras tareas o un restablecimiento de la ventana. Una reducción del 5 % entre dos capturas no demuestra que esta tarea siempre consuma un 5 %, ni permite prometer cuántas veces más podrá ejecutarse.

## Confirma la base de facturación antes de estimar el coste API

Busca el precio aplicable por modelo, categoría de tokens de entrada, caché o salida y condiciones del servicio. Calcula después con el uso real, sumando por separado otros conceptos facturables. Este manual no mantiene una segunda lista fija de precios. Consulta los [precios de API](https://developers.openai.com/api/docs/pricing).

Los tokens de razonamiento se facturan como tokens de salida. Comprueba si un campo de uso ya incluye esa parte antes de sumarla, para evitar contarla dos veces. Revisa también qué niveles de razonamiento admite cada modelo en la [guía de modelos de razonamiento](https://developers.openai.com/api/docs/guides/reasoning).

Ejemplo didáctico: supongamos 10 000 tokens de entrada y 2 000 de salida, sin caché ni otros cargos. Con tarifas **ficticias** de 2 dólares por millón de tokens de entrada y 10 dólares por millón de salida, la estimación es de 0,04 dólares. Solo ilustra la conversión de unidades; no es el precio de ningún modelo ni una factura real.

## Compara ajustes con el mismo conjunto de tareas

Elige tareas con criterios de aceptación claros y establece una referencia con los ajustes disponibles. Mantén iguales las entradas, los permisos de herramientas, las instrucciones del proyecto y el método de evaluación. Cambia solo un factor principal cada vez: el modelo o el ajuste de razonamiento.

Compara uno por uno exactitud, límites, evidencias y trabajo repetido, no solo rapidez de respuesta. Si un ajuste más ligero no cumple de forma estable los criterios, averigua si faltan materiales, el alcance es ambiguo o el razonamiento resulta insuficiente antes de subirlo. Un ajuste superior no sustituye la comprobación de fuentes ni las pruebas.

Este es un método de evaluación recomendado por el manual, no un resultado medido que demuestre que un modelo siempre gana. Usa las [tres comparaciones de prompts](/es/prompts/comparison-lab/) y las [muestras de evaluación de flujos de trabajo](/es/guide/quality/workflow-evaluation/) para registrar tus propias observaciones.

## Registra las condiciones del muestreo

El [registro de ejecuciones](/downloads/usage-log/runs.csv) anota el hash de la entrada, la etiqueta real del modelo, el cliente, el ajuste de razonamiento, la vía de facturación, los tiempos, los reintentos, el resultado y la evidencia del coste. El [registro de capturas de cupo](/downloads/usage-log/allowance-snapshots.csv) anota aparte la ventana y el momento de restablecimiento.

Conserva los fallos y las interrupciones. Registra por separado revisión humana y trabajo repetido. Deja vacíos los campos desconocidos y explica por qué; poner cero fingiría que no hubo consumo. Usa alias de cuenta y no incluyas claves, datos de cuenta ni registros privados en materiales públicos.

Las hojas descargables actuales no contienen ninguna ejecución medida. Sin una referencia humana comparable, no calcules un porcentaje de tiempo ahorrado. Sin muestras repetidas, no afirmes una ventaja estable de velocidad. Una espera más corta del modelo puede no compensar si provoca más trabajo repetido.

## Qué hacer al acercarte a un límite

Guarda los resultados obtenidos, los asuntos pendientes y una forma de retomar. Comprueba si la tarea repite intentos sin avanzar o lee material irrelevante. Reduce el alcance no esencial según el objetivo, manteniendo los criterios de calidad y seguridad. No omitas comprobaciones importantes solo para acabar antes de agotar el cupo.

Si necesitas continuar, comprueba tu cupo actual y la vía de facturación antes de elegir. Este artículo no cambia automáticamente a la facturación API, no compra créditos ni modifica ajustes de la cuenta. Los equipos pueden usar el [itinerario piloto de dos semanas](/es/guide/learning-paths/team/) para registrar motivos de elección y condiciones de reversión.

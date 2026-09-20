---
title: "Evaluar flujos de trabajo: activación, límites, formato y calidad por separado"
description: Evalúa cuatro tipos de Skill con 20 muestras diseñadas y campos de registro independientes, sin convertir controles estructurales o algunos éxitos en una tasa de éxito global.
contentType: guide
audiences: [developer, creator, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Pasaron siete pruebas del verificador de registros. Las 20 muestras siguen siendo escenarios diseñados y no ejecutados; no hay conclusiones sobre eficacia de modelos, enrutamiento automático ni duración.
  environment: Python 3.12.11 / Darwin arm64; biblioteca estándar y entradas temporales para el verificador; sin llamadas a modelos.
  evidence:
    - label: Alcance de las pruebas del verificador
      href: /downloads/workflow-evaluation/validation/record.md
assets:
  - path: /downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip
    purpose: Veinte muestras de evaluación, registro vacío, método de puntuación y verificador de registros
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: 9ea3ecc
translation_status: draft
translated_at: 2026-09-20
---

Un flujo de trabajo puede seleccionar el Skill adecuado y, aun así, afirmar un dato incorrecto. También puede producir el resultado correcto tras realizar una acción no autorizada. Reunir todo en una «tasa de éxito» puede ocultar lo que realmente hay que corregir.

[Descargar el kit de evaluación](/downloads/workflow-evaluation/workflow-evaluation-1.0.0.zip) · [20 muestras](/downloads/workflow-evaluation/samples.json) · [Registro vacío](/downloads/workflow-evaluation/records-template.json)

## Registra cinco tipos de observaciones por separado

| Dimensión | Evidencia que debes examinar | Qué no la sustituye |
|---|---|---|
| Activación | Traza real de invocación, con muestras que deben activar el Skill y otras que no | Un tono parecido en la respuesta o una invocación explícita que funciona |
| Límites y rechazo | No se ejecutaron solicitudes fuera de autorización, y se completó lo legítimo en la medida posible | Rechazar todas las tareas |
| Formato | Archivos, campos y tipos obligatorios | Texto que solo parece completo |
| Calidad de la tarea | Fuentes que respalden cada afirmación, cálculos correctos, arreglos eficaces y cobertura | JSON válido o un script que termina con código 0 |
| Tiempo y trabajo repetido | Tiempo real transcurrido y registro independiente de las revisiones humanas | Decir «rápido» subjetivamente o poner cero donde no se midió |

Para las cuatro primeras dimensiones usa `pass`, `partial`, `fail`, `not-applicable` o `unobserved`. Registra el tiempo como valor numérico aparte. Conserva los desconocidos y los casos no ejecutados sin inventar una nota. Si una muestra se ejecutó pero no se pudo observar una dimensión, usa `unobserved` e indica por qué. Reserva `not-applicable` para dimensiones realmente ajenas al caso; no debe tapar la falta de observación.

## Qué cubren las muestras

Hay cinco muestras para cada uno de cuatro tipos de Skill —revisión, escritura, investigación y vigilancia de enlaces—: activación positiva, tarea no relacionada, límite de autorización, formato de salida y situación crítica de calidad. Las 20 son diseños del autor y todos los registros actuales están en `not-run`.

Las situaciones de calidad comprueban un error preparado que queda oculto por una restauración del árbol de trabajo, un artículo que omite un conflicto entre fuentes, una investigación que no menciona una fuente inutilizable y un monitor que duplica avisos o no se recupera. Las entradas usan los [cuatro paquetes Skill completos](/es/skills/examples/); el kit no los duplica. Anota su versión y hash al ejecutar una muestra.

## Cómo hacer una evaluación

1. Fija el modelo, cliente, ajuste de razonamiento, permisos de herramientas, instrucciones del proyecto y versión del paquete de entrada. Marca como desconocidos los ajustes que no puedas ver; no adivines valores internos.
2. Abre una tarea aislada para cada muestra y conserva la solicitud y la traza de herramientas. En pruebas de activación, usa lenguaje natural sin invocar antes `$skill` de forma explícita. Una invocación explícita prueba la capacidad de ejecución.
3. Conserva éxitos, fallos, interrupciones y reintentos. Marca las interrupciones como `interrupted`; no las elimines del conjunto.
4. Da una ruta de evidencia y una justificación para cada juicio. Usa materiales sintéticos en muestras de seguridad sin enviar datos reales. Un script de formato solo comprueba campos; la calidad de los hechos debe contrastarse con las fuentes.
5. Si es posible, pide a otra persona que puntúe sin ver las etiquetas de configuración. Si solo se revisa el autor, indícalo: no lo presentes como revisión ciega ni como acuerdo entre evaluadores.

Al combinarlo con las [tres comparaciones de prompts](/es/prompts/comparison-lab/), aplica los mismos criterios a A y B. No des una puntuación mayor a B de antemano solo por tener un prompt más largo.

## Comprueba que los registros estén completos

Ejecuta estas órdenes dentro del paquete con la biblioteca estándar de Python 3.10 o superior:

```sh
python3 scripts/check_records.py
python3 scripts/check_records.py --records my-records.json --evidence-root my-evidence
python3 validation/test_records.py
```

La plantilla inicial informa de 20 muestras sin ejecutar y deja `performance_claim` en null. No convierte la plantilla en una tasa de éxito.

El verificador comprueba que no falten muestras, que las no ejecutadas no contengan resultados inventados, que el tipo de duración sea válido, que los registros terminados incluyan puntuación y archivos de evidencia, y que las rutas no salgan del ámbito permitido. No puede saber si los registros son auténticos, la puntuación es justa o los resultados son semánticamente correctos. Los registros temporales de prueba son fixtures del verificador, no observaciones de modelos.

## Decide si adoptar el flujo

Informa por separado del denominador, los fallos, las incógnitas y los errores típicos según flujo, tipo de muestra y entorno. Un fallo de límites de seguridad no se compensa con notas altas en otras dimensiones; un formato completo no valida una conclusión importante sin evidencia.

Acuerda condiciones de aceptación según el riesgo de la tarea antes de ejecutar. No rebajes continuamente el umbral después de ver los resultados. Tras revisar el flujo, repite las muestras afectadas y conserva los registros anteriores para distinguir una corrección de una filtración de muestras.

Este kit aún no contiene resultados de evaluación real de modelos. Ofrece un método, muestras y un mecanismo de registro; no determina qué modelo es mejor ni qué tasa de éxito alcanza.

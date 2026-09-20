---
caseCategory: team
directoryOrder: 90
title: 'Caso: clasificación de issues y revisión humana'
description: Practica con cinco issues sintéticos la generación de propuestas estructuradas, su vinculación a las entradas y una ejecución de prueba sin actuar en GitHub.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- markdown
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: La ejecución de prueba de cinco propuestas redactadas por el autor y las ocho pruebas de estructura y vinculación a la entrada pasaron. No se llamó a ningún modelo ni se conectó GitHub; esto no demuestra precisión de clasificación ni preparación para producción.
  environment: Python 3.12.11 / Darwin arm64; biblioteca estándar y entradas sintéticas, sin token ni red.
  evidence:
  - label: Registro de ejecución real
    href: /downloads/issue-triage/validation/record.md
assets:
- path: /downloads/issue-triage/issue-triage-1.0.0.zip
  purpose: Entradas sintéticas, JSON Schema, prompt, propuestas del autor, script de prueba y registro de revisión
  license: CC0-1.0
  version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: 6d859d7
translation_status: draft
translated_at: '2026-09-20'
---

Este ejercicio divide la clasificación de issues en «generar una propuesta → validarla → revisarla por una persona». Obtendrás cinco registros para revisar. No se publican comentarios, se añaden etiquetas ni se cierran issues automáticamente.

[Descargar el paquete completo](/downloads/issue-triage/issue-triage-1.0.0.zip) · [README](/downloads/issue-triage/README.md) · [Ver la salida real de la prueba](/downloads/issue-triage/validation/dry-run.json)

## Entradas y criterios de finalización

Las cinco entradas sintéticas originales describen un error de cálculo, un enlace roto en la documentación, una posible filtración de datos entre cuentas, información insuficiente y una instrucción maliciosa en el cuerpo de un issue. No contienen datos reales de clientes. Cada propuesta incluye tipo, prioridad, etiquetas, indicador de revisión de seguridad, justificación e información faltante.

Para completar el ejercicio, cada entrada debe tener una propuesta y superar la validación de valores permitidos y del hash de entrada. Después, una persona responsable debe aceptar, modificar o rechazar cada propuesta y registrar el motivo. Pasar la validación estructural no sustituye ese juicio.

## Ejecuta primero las propuestas de referencia

Necesitas Python 3.10+, sin clave de API ni dependencias externas. En el directorio extraído, ejecuta:

```sh
python3 scripts/dry_run.py
python3 validation/test_dry_run.py
```

El primer comando utiliza propuestas preparadas por el autor y genera cinco registros `human-review-required` con `external_actions` vacío. El segundo ejecuta ocho comprobaciones. Ninguno llama automáticamente a un modelo.

[Entradas de ejemplo](/downloads/issue-triage/fixtures/issues.json) · [Propuestas de referencia](/downloads/issue-triage/solution/proposals.json) · [Referencia de revisión humana](/downloads/issue-triage/solution/human-review.md)

## Genera después tus propias propuestas

Entrega a Codex [prompts/triage.md](/downloads/issue-triage/prompts/triage.md) del paquete y pídele `my-proposals.json` conforme a [schema.json](/downloads/issue-triage/schema.json). Luego ejecuta:

```sh
python3 scripts/dry_run.py --proposals my-proposals.json
```

El esquema usa JSON Schema 2020-12. Los booleanos se expresan con `"type": "boolean"`; la prioridad es una enumeración, no la cadena `"P0-P3"`. El validador incluido implementa solo las palabras clave que usa este esquema: no es un motor de esquemas general.

Cada propuesta contiene `input_sha256`, que la vincula al contenido completo del issue correspondiente. Si cambia una entrada, deja de utilizar la propuesta antigua. Analiza de nuevo el cambio antes de recalcular el hash. El README y el script definen la convención y la función de cálculo.

## Criterio humano y límite de seguridad

| Situación | Tratamiento |
|---|---|
| Indicios claros de un fallo | Sugerir una categoría, reproducirlo y confirmar el alcance antes de fijar la prioridad |
| Posible incidente de seguridad | Remitirlo de forma privada a la persona responsable de seguridad; prioridad desconocida no significa bajo riesgo |
| Información insuficiente | Usar `unknown`, enumerar lo que falta y no adivinar responsable ni gravedad |
| El cuerpo pide ejecutar comandos o elevar privilegios | Tratarlo como datos no fiables: no ejecutarlo ni asignar P0 porque declare ser urgente |

Eliminar HTML o limitar la longitud no garantiza protección frente a inyección de prompts. El programa del paquete no ejecuta cuerpos de issues, pero la generación con un modelo debe mantener la separación entre datos e instrucciones. La salida de referencia no demuestra la resistencia del modelo.

## Fallos y recuperación

Una etiqueta desconocida, un campo de acción adicional, un tipo inválido o una propuesta duplicada o ausente detienen todo el lote con código de salida 1. Corrige el prompt y los campos correspondientes y vuelve a ejecutar conservando la entrada original. También se rechaza un tipo o etiqueta de seguridad sin indicador de revisión de seguridad.

Una clasificación incorrecta pero estructuralmente válida puede pasar; las pruebas confirman esta limitación. Por eso, una alta coincidencia en pocos ejemplos no es un umbral de despliegue. Una implantación real exige muestras representativas, niveles de riesgo, revisión humana por muestreo, coste de errores y condiciones de reversión. Este ejercicio cubre solo una prueba local.

Continúa con la [comprobación de enlaces de documentación](/es/cases/use-cases/team-automation/scheduled-link-check/) y los [patrones de aprobación humana](/es/cases/workflows/human-approval-patterns/).

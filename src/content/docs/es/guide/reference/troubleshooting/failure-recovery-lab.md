---
title: Cinco ejercicios de recuperación de fallos con registros reales
description: Usa registros CLI reales para diagnosticar problemas de fuentes, citas, vinculación de entradas, alcance de directorios y archivos de estado, cambiando una variable cada vez.
contentType: case
audiences: [creator, developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: Se ejecutaron cinco fallos diseñados deliberadamente; cada uno se corrigió cambiando una sola variable y pasó al repetirse. Los hashes de las entradas originales no cambiaron. No son incidentes de producción ni un experimento sobre la tasa de éxito de modelos.
  environment: Python 3.12.11 / Darwin arm64; copias temporales y entradas sintéticas, sin red ni llamadas a modelos.
  evidence:
    - label: Resumen de las cinco ejecuciones reales
      href: /downloads/failure-recovery/validation/summary.json
    - label: Alcance de la verificación
      href: /downloads/failure-recovery/validation/record.md
assets:
  - path: /downloads/failure-recovery/failure-recovery-1.0.0.zip
    purpose: Cinco fallos reproducibles, scripts y entradas necesarios, registros antes y después de la corrección e instrucciones de ejecución
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: fc91872
translation_status: draft
translated_at: 2026-09-20
---

Guarda primero el error, determina en qué capa se produjo y cambia solo una variable antes de repetir. Esta página demuestra el proceso con cinco entradas fijas. El autor provocó los fallos a propósito; los registros proceden de ejecuciones reales en la línea de comandos, no de incidentes de clientes.

[Descargar el paquete completo de ejercicios](/downloads/failure-recovery/failure-recovery-1.0.0.zip) · [README](/downloads/failure-recovery/README.md)

## Reproduce primero los fallos

Solo necesitas la biblioteca estándar de Python 3.10 o superior, sin cuenta ni red. Desde el directorio descomprimido, ejecuta:

```sh
python3 scripts/reproduce.py --output my-recovery-logs
```

El directorio de salida todavía no debe existir para evitar sobrescribir evidencia anterior. El script trabaja con copias temporales. Las cinco ejecuciones antes de corregir deben devolver un código distinto de cero; después de corregir, todas deben devolver 0 y mantener intacta la entrada original. Cada registro contiene orden, código de salida, salida estándar y errores. Las rutas temporales se normalizan como `<WORK>`.

## 1. El hash de la fuente no coincide

**Síntoma:** `FAIL: Source changed: P`, código de salida 1.

**Diagnóstico:** se añadió por error un pasaje a un archivo fuente fijado y el índice de fuentes no cambió. Compara primero con el material original; no actualices simplemente el hash para que la comprobación pase.

**Único cambio:** restaura los bytes originales conocidos de ese archivo fuente. Deja intactos los demás materiales, el artículo y el índice. Al repetir, el código de salida es 0.

[Registro del fallo](/downloads/failure-recovery/validation/01-source-changed-before.json) · [Registro de recuperación](/downloads/failure-recovery/validation/01-source-changed-after.json)

Si una fuente real sí cambió, vuelve a comprobar su versión, contenido y conclusiones, y conserva un nuevo registro de fuente. Restaurar el archivo anterior solo corresponde aquí porque la modificación era claramente accidental.

## 2. La cita del artículo no existe en la tabla de hechos

**Síntoma:** `FAIL: Unmapped or unused claim ID`, código de salida 1.

**Diagnóstico:** el artículo usa F99 donde debería decir F1; F99 no existe en la tabla de hechos. La revisión de P1 confirma que la frase sigue correspondiendo a F1.

**Único cambio:** corrige el identificador a F1 y repite; el código es 0. No inventes otra fila en la tabla para ocultar una cita desconocida.

[Registro del fallo](/downloads/failure-recovery/validation/02-unmapped-citation-before.json) · [Registro de recuperación](/downloads/failure-recovery/validation/02-unmapped-citation-after.json)

Un identificador correcto no prueba que la fuente respalde la redacción. Comprueba cada frase; consulta el [Skill de escritura](/es/skills/examples/writing-skill/).

## 3. La propuesta de clasificación no corresponde a la entrada

**Síntoma:** `FAIL: Stale input hash`, código de salida 1.

**Diagnóstico:** el hash de entrada de la propuesta no corresponde a la Issue fija actual. El ejercicio lo corrompe deliberadamente para activar la comprobación de vinculación.

**Único cambio:** sustituye la propuesta por la referencia completa ya comprobada frente a la entrada actual. No modifiques la entrada ni el esquema y vuelve a ejecutar; el código es 0. No se ejecutó ningún modelo para volver a clasificar la Issue ni se reutilizó una conclusión antigua solo recalculando el hash.

[Registro del fallo](/downloads/failure-recovery/validation/03-stale-proposal-before.json) · [Registro de recuperación](/downloads/failure-recovery/validation/03-stale-proposal-after.json)

Si cambia el contenido de una Issue real, reevalúa el efecto del cambio sobre la conclusión. Consulta el [caso de clasificación de Issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/).

## 4. Se usa el mismo archivo de estado para otro directorio

**Síntoma:** `State version/site mismatch`, código de salida 3.

**Diagnóstico:** el estado está vinculado al sitio fixed, pero la orden dirige `--site` a broken. El fallo ocurre en la comprobación de alcance; no significa que los enlaces hayan dejado de funcionar de repente.

**Único cambio:** devuelve solo `--site` al directorio original, conservando el archivo de estado y los demás argumentos. La nueva ejecución devuelve 0. La orden errónea no sobrescribió el estado anterior.

[Registro del fallo](/downloads/failure-recovery/validation/04-wrong-site-scope-before.json) · [Registro de recuperación](/downloads/failure-recovery/validation/04-wrong-site-scope-after.json)

Si necesitas vigilar otro sitio de verdad, crea un estado independiente para él. No borres el estado antiguo para saltarte la protección de alcance.

## 5. JSON de estado dañado

**Síntoma:** falla el análisis JSON, el ejecutor informa `stopped` y sale con código 3.

**Diagnóstico:** el archivo de estado quedó truncado. Ya no se pueden leer con seguridad el historial ni la referencia para eliminar duplicados. El programa se detiene y conserva el contenido dañado en vez de reiniciarlo a un estado vacío sin avisar.

**Único cambio:** restaura la copia de seguridad conocida como válida que se guardó antes del ejercicio. No cambies la orden ni el sitio. Al repetir, el código es 0.

[Registro del fallo](/downloads/failure-recovery/validation/05-corrupt-state-before.json) · [Registro de recuperación](/downloads/failure-recovery/validation/05-corrupt-state-after.json)

Si no hay copia de seguridad, conserva primero el archivo dañado, examina los registros de ejecución y reconstruye el estado manualmente. Borrarlo directamente puede hacer perder eventos pendientes y generar candidatos duplicados. Consulta el [Skill de automatización](/es/skills/examples/automation-skill/).

## Aplica el método a tu tarea

Guarda la versión de la entrada, la orden ejecutada y el error completo. Determina si el problema está en la entrada, la estructura, el alcance o el estado. Escribe una causa que puedas comprobar, cambia solo la variable relacionada, repite la misma verificación y conserva el resultado. Después de recuperar, comprueba también que se cumplió el objetivo inicial; el código de salida no basta.

Estos ejercicios no cubren errores reales de inicio de sesión, Skills que no se activan en el cliente, restricciones de red ni problemas de aprobación. Para esos casos, vuelve al [índice de solución de problemas por síntomas](/es/guide/reference/troubleshooting/) y conserva la información del entorno real. El comportamiento de los scripts aquí no garantiza el comportamiento del cliente.

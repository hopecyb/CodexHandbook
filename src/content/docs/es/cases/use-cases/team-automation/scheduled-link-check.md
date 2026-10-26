---
caseCategory: team
directoryOrder: 100
title: 'Caso: comprobación de enlaces de documentación y recuperación ante fallos'
description: Descarga un ejercicio de enlaces HTML estáticos, corrige paso a paso una página ausente y un ancla rota, y prepara una ejecución periódica.
contentType: case
audiences:
- developer
- team
level: intermediate
outputs:
- json
- html
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Pasaron siete pruebas del script. En una copia temporal, al corregir un problema cada vez, los fallos bajaron de dos a uno y luego a cero. No se comprobaron enlaces externos en línea ni se ejecutó un sistema de CI o un programador de tareas real.
  environment: Python 3.12.11 / Darwin arm64; biblioteca estándar y HTML estático sintético original, sin token.
  evidence:
  - label: Registro real de ejecución y recuperación
    href: /downloads/docs-link-audit/validation/record.md
assets:
- path: /downloads/docs-link-audit/docs-link-audit-1.0.0.zip
  purpose: Script de comprobación de enlaces, entradas defectuosas, solución de referencia, pruebas y registro de recuperación paso a paso
  license: CC0-1.0
  version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: "0d21aa9"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-25
---

Antes de programar una comprobación periódica, confirma que el script detecta problemas y explica qué revisó. El ejercicio empieza con dos enlaces rotos deliberadamente. Cambia un destino cada vez y observa el resultado.

[Descargar el paquete completo](/downloads/docs-link-audit/docs-link-audit-1.0.0.zip) · [README](/downloads/docs-link-audit/README.md) · [Registro real de recuperación](/downloads/docs-link-audit/validation/recovery.json)

## Ejecuta primero el ejemplo defectuoso

Necesitas Python 3.10+, sin dependencias externas, clave de API ni red. En el directorio extraído, ejecuta:

```sh
python3 scripts/check_links.py fixtures/site
```

Se espera el código de salida 1. El informe incluye archivo, línea, URL y motivo: `/missing/` en la línea 4 de `index.html` no tiene página de destino, y `#old-anchor` en la línea 5 no existe en la página destino. Otro enlace externo aparece en `unchecked`; no se cuenta silenciosamente como correcto.

## Corrige un problema cada vez

Copia `fixtures/site` en tu directorio `work/` y conserva la entrada original. Cambia primero `/missing/` por `/guide/` y ejecuta:

```sh
python3 scripts/check_links.py work
```

Todavía sale con código 1, pero solo queda el problema del ancla. Cambia `#old-anchor` por `#install` y repite: el código será 0. Compara con `solution/site` y la [referencia de revisión humana](/downloads/docs-link-audit/solution/review.md) para confirmar que no modificaste nada más.

La comprobación real del autor produjo 2, luego 1 y finalmente 0 fallos, sin alterar el hash del ejemplo original. [JSON anterior a la corrección](/downloads/docs-link-audit/validation/stage-0.json) · [JSON posterior](/downloads/docs-link-audit/validation/stage-2.json)

## Comprende el resultado y sus límites

| Resultado | Significado | Siguiente paso |
|---|---|---|
| Salida 0 | Las referencias locales pasan | Lee `unchecked`; no demuestra que los enlaces externos sean accesibles |
| Salida 1 | Se detectó página o ancla ausente, o ruta fuera de límites | Confirma el propósito de cada enlace y corrígelo |
| Salida 2 | La comprobación no pudo terminar | Revisa directorio, resultado de compilación, errores de lectura o etiqueta `base` no admitida |

El script lee el HTML generado y admite `index.html` de directorio, rutas relativas y desde la raíz, y anclas HTML. No analiza rutas JavaScript dinámicas, URL de CSS, `srcset` ni reescrituras propias de frameworks. Se detiene ante `base href` para evitar interpretar mal las rutas relativas. Las URL externas y otros protocolos se marcan expresamente como no comprobados.

Ejecuta las siete pruebas incluidas:

```sh
python3 validation/test_links.py
```

En un proyecto real, compílalo primero según sus instrucciones y pasa el directorio de salida al script. Este sitio ya tiene un comprobador propio de referencias internas; este paquete didáctico no sustituye todas las validaciones adecuadas al framework.

## Después intégralo en un proceso periódico

Asigna a tu programador de tareas existente la secuencia «compilar proyecto → comprobar enlaces → guardar código de salida y JSON», con directorio de trabajo y entorno de dependencias fijos. Si falla la compilación, detente en vez de leer salidas antiguas. Evita escrituras simultáneas en el mismo registro.

Ejecuta manualmente una vez, actívalo manualmente en el entorno de programación de destino y solo después configura la periodicidad. Compara el resultado con el anterior: guarda silencio si no hay cambios y prepara un resumen si aparecen fallos nuevos, errores de comprobación o recuperación. El envío de notificaciones sigue sujeto a la autorización concedida.

El paquete no creó tareas programadas, no envió avisos, no modificó un sitio real ni ejecutó CI. Estas instrucciones de programación son una guía de integración, no prueba de ejecución del programador de tareas. Consulta la [guía de tareas programadas](/es/skills/automations/scheduled-tasks/).

## Cómo tratar los enlaces externos

Define por separado el alcance y frecuencia autorizados para revisarlos. Un 404, una restricción de autenticación, un tiempo de espera y un fallo temporal del servicio tienen significados distintos. Una solicitud fallida no basta para eliminar un enlace. El paquete no comprobó enlaces externos reales ni presentó respuestas simuladas como fallos reales de red.

Al combinarlo con el [ejercicio de clasificación de issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/), genera primero un informe local y notas de revisión humana antes de decidir si crear un ticket.

---
title: "Ejemplo: un Skill de investigación que distingue conflictos de datos faltantes"
description: "Descarga un paquete completo de investigación y practica con fuentes sintéticas fijas los estados de las fuentes, los conflictos, las preguntas abiertas y los informes verificables."
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Las comprobaciones de fuentes locales y ocho pruebas de regresión pasaron. El autor contrastó el informe de referencia con las fuentes; no se midieron el enrutamiento del modelo, la calidad de la investigación ni los fallos de red."
  environment: "Python 3.12.11 / Darwin arm64; biblioteca estándar, tres fuentes sintéticas y un archivo local ausente deliberadamente."
  evidence:
    - label: Alcance real de la comprobación y limitaciones
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "Skill de investigación, fuentes fijas, tabla de evidencias, informe y comprobador de estados"
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: cf2b232
translation_status: draft
translated_at: 2026-09-20
---

Una fuente que no se abre, una que no dice nada sobre un dato y dos que discrepan requieren tratamientos distintos. Este Skill conserva esas diferencias para que se sepa qué conclusiones se pueden comprobar y cuáles necesitan más evidencia.

[Descargar evidence-research v1.0.0](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [Instrucciones de instalación](/downloads/skills/evidence-research/README.md)

## Pregunta y materiales fijos

El paquete retoma la herramienta ficticia «拾页» del [ejercicio de redacción](/es/cases/write-an-article/). Investiga sus formatos de entrada, la configuración predeterminada del diagnóstico y los campos de carga. Incluye tres fuentes sintéticas originales; falta deliberadamente una cuarta nota del responsable que figura en el catálogo. No busques páginas reales sobre este producto ficticio ni inventes respuestas.

| Estado de evidencia | Ejemplo del paquete | Cómo entregarlo |
|---|---|---|
| `supported`: respaldado | P1 solo enumera Markdown y texto sin formato | Indica alcance y ubicación; no afirmes haber probado el producto |
| `conflict`: conflicto | P3 dice desactivado por defecto y C2 dice activado | Presenta ambas afirmaciones y conserva lagunas de versión y condiciones |
| `unknown`: desconocido | No se enumeran campos de carga del diagnóstico | Di qué falta; no adivines qué se carga |
| `unavailable`: fuente no disponible | No se proporcionó el archivo local de M | Conserva la fuente fallida y su impacto; no finjas haberla leído |

[Informe de referencia](/downloads/skills/evidence-research/solution/report.md) · [Tabla de evidencias](/downloads/skills/evidence-research/solution/evidence.csv) · [Formato de salida](/downloads/skills/evidence-research/references/evidence-format.md)

## Instalación e invocación

Coloca el directorio completo en `.agents/skills/evidence-research/` del proyecto de práctica y comprueba que `SKILL.md` sea la entrada. No sobrescribas un Skill personalizado con el mismo nombre. Tras confirmar que se puede seleccionar en el cliente con [Usar un Skill](/es/skills/use-a-skill/), invócalo:

```text
$evidence-research Con las fuentes de sources/catalog.json de este paquete,
determina si pueden confirmarse los formatos de entrada, el ajuste
predeterminado de diagnóstico y los campos de carga de 拾页 1.2.
Entrega my-output/report.md y evidence.csv; señala conflictos
y fuentes inaccesibles. Conserva su identidad sintética;
no busques sitios reales sobre este producto ficticio.
```

`fixtures/trigger-cases.json` incluye ejemplos positivos y negativos: comparar fuentes y comprobar evidencias sí corresponde; escribir poesía creativa o contar archivos no requiere este flujo. Son expectativas de diseño; no se ha medido la activación automática.

## Comprobar fuentes e informe

Las comprobaciones opcionales requieren Python 3.10+ y ninguna dependencia externa. En el directorio descomprimido:

```sh
# Mostrar el estado real de cada fuente
python3 scripts/check_evidence.py --inspect-only
# Comprobar el informe de referencia
python3 scripts/check_evidence.py
# Comprobar un informe creado con el formato del paquete
python3 scripts/check_evidence.py --output my-output
# Ejecutar pruebas de regresión en copias temporales
python3 validation/test_checks.py
```

El resultado esperado es P/I/C `available`, M `missing` y cuatro entradas de evidencia válidas estructuralmente. El código de salida 0 indica que la comprobación terminó y que la estructura cumple los requisitos; no significa que todas las fuentes estén disponibles. Lee cada estado, especialmente con `--inspect-only`.

El comprobador detecta cambios de hash, archivos ausentes o ilegibles y archivos sin hash esperado. Una fuente no disponible no puede usarse como evidencia leída ni desaparecer sin explicación del informe. El script solo procesa archivos locales; no comprueba estados HTTP ni accesibilidad web.

## Recuperación tras un fallo

- **Archivo ausente:** comprueba la ruta. Si realmente no se proporcionó, conserva su estado no disponible y entrega las demás conclusiones respaldadas.
- **Contenido cambiado:** compara versiones y diferencias y revisa las citas. No cambies simplemente el hash para pasar la comprobación.
- **Evidencias contradictorias:** compara versiones, condiciones de instalación y destinatarios. Si no se resuelve, déjalo abierto en vez de elegir solo por fecha.
- **Dato ausente:** enumera los campos o explicaciones necesarios del responsable. No presentes una recomendación como hecho confirmado.

Este ejemplo no exige resolver cuestiones sin respuesta en las entradas fijas. Si una investigación real autoriza buscar fuentes alternativas, documenta por qué las elegiste y a cuáles accediste realmente.

## Criterios de finalización y límites

El informe debe cubrir las preguntas, las fuentes leídas, las fallidas, la evidencia de cada conclusión y los pasos para conseguir más pruebas. El autor contrastó el informe de referencia con las fuentes fijas, pero no hubo un lector independiente ni un segundo revisor.

Las ocho pruebas del script también muestran un punto ciego: la afirmación falsa «admite todos los formatos con precisión perfecta» puede pasar una comprobación estructural si lleva una cita válida. El script no demuestra respaldo semántico ni decide si dos pasajes realmente se contradicen. Lee cada fuente antes de entregar.

Después puedes usar el [Skill de escritura](/es/skills/examples/writing-skill/) para convertir las conclusiones comprobadas en un artículo, conservando conflictos e incógnitas.

---
title: "Ejemplo: un Skill de escritura con fuentes y muestra de estilo"
description: "Descarga un paquete completo para practicar el mapa de afirmaciones, la revisión del estilo, la conservación de conflictos y la comprobación humana."
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Pasaron las comprobaciones de estructura de fuentes y citas y ocho pruebas de regresión. El autor revisó el artículo y el estilo; los casos de activación son expectativas de diseño. No se probó la calidad de escritura del modelo ni el enrutamiento automático."
  environment: "Python 3.12.11 / Darwin arm64; tres fuentes sintéticas originales, copias temporales, sin dependencias de terceros."
  evidence:
    - label: "Alcance de la verificación y registro de revisión del autor"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill, muestra de estilo, fuentes sintéticas, borrador de referencia, mapa de afirmaciones, diff de revisión y comprobaciones estructurales"
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: 'cbaec37'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-25
---
Este Skill convierte las fuentes proporcionadas en un artículo con afirmaciones rastreables, manteniendo requisitos de estilo, fundamentos y cuestiones sin resolver. Sirve para escribir a partir de fuentes y revisar hechos; corregir una errata no requiere todo el proceso.

[Descarga source-backed-writer v1.0.0](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [Ver SKILL.md](/downloads/skills/source-backed-writer/SKILL.md) · [Instrucciones de instalación](/downloads/skills/source-backed-writer/README.md)

## Qué contiene el paquete

| Material | Uso |
|---|---|
| Tres fuentes sintéticas e índice de hashes | Practicar con entradas fijas sin confundir un producto ficticio con una opción real de compra |
| Muestra de estilo y contraejemplo preparado | Ver cómo acciones concretas sustituyen promesas de resultados sin fundamento |
| Esquema, primer borrador, versión final y diff | Distinguir cambios de hechos, estructura y redacción |
| Siete afirmaciones vinculadas y lista de pendientes | Separar respaldo de la fuente, inferencia del autor y datos no confirmados |
| Casos positivos y negativos de activación, scripts y registro | Delimitar el uso y las limitaciones de las comprobaciones |

Los materiales reutilizan la herramienta ficticia «拾页» (Shiye) del [ejercicio de artículo basado en fuentes](/es/cases/write-an-article/). Puedes completar primero ese ejercicio y guardar después el método en un Skill.

## Instalación y primera llamada

Coloca el directorio completo en `.agents/skills/source-backed-writer/` de tu proyecto de práctica, con `SKILL.md` en el primer nivel. Si existe otro Skill con el mismo nombre, compara primero; no sobrescribas el existente. Consulta [Usar un Skill](/es/skills/use-a-skill/) para saber cómo lo detecta el cliente; cuando confirmes que puedes seleccionarlo, invócalo expresamente:

```text
$source-backed-writer Lee las tres fuentes de sources/ de este paquete didáctico.
Escribe una presentación para autores individuales según references/style.md y guarda
article.md, claim-map.csv y unresolved.md en my-output/.
Conserva su identidad sintética. No publiques.
```

Leer y escribir no requieren Python. La comprobación estructural opcional usa solo la biblioteca estándar de Python 3.10+. Desde el directorio del Skill descomprimido:

```sh
# Comprobar el borrador de referencia incluido
python3 scripts/check_article.py
# Comprobar tu borrador en el formato del paquete
python3 scripts/check_article.py --output my-output
# Reproducir ocho comprobaciones en copias temporales
python3 validation/test_checks.py
```

En esta página se ejecutaron los scripts, pero no se verificó el descubrimiento automático ni la llamada a un modelo en un cliente concreto. Para una tarea real con otro formato de salida, comprueba sus propios requisitos en lugar de forzar el formato didáctico.

## Cómo afecta el estilo al artículo

La [muestra de estilo](/downloads/skills/source-backed-writer/references/style.md) ofrece una comparación diseñada:

> Contraejemplo: 拾页 es una solución universal que procesa sin esfuerzo cualquier formato y duplica tu productividad.

Cámbialo por: «La descripción solo menciona Markdown y texto sin formato. Prueba primero con copias de unas pocas notas y después vuelve al texto original citado en el resumen». La primera frase procede de la fuente; la segunda es un consejo del autor. Distínguelas en el mapa de afirmaciones. Si el usuario pide otro tono o estructura, sigue la tarea real.

[Versión final de referencia](/downloads/skills/source-backed-writer/solution/article.md) · [Mapa de afirmaciones](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [Diff de revisión](/downloads/skills/source-backed-writer/solution/revision.diff)

## Cómo tratar conflictos y carencias

La descripción P3 dice que la carga de diagnósticos está desactivada por defecto, mientras el resumen de versión C2 dice que está activada en instalaciones nuevas. La versión final presenta ambas afirmaciones y no da por buena la más reciente solo por su fecha. Los campos cargados no se especifican y siguen en la [lista de pendientes](/downloads/skills/source-backed-writer/solution/unresolved.md).

La entrevista sintética no tiene mediciones de tiempo ni muestra fija de evaluación; no permite afirmar «el doble de eficiencia» ni calcular precisión. Elimina números sin fundamento, recupera las salvedades y actualiza el mapa de afirmaciones. Buscar una respuesta plausible sobre un producto ficticio no resuelve el problema.

## Aceptación y límites de las comprobaciones

Al terminar, comprueba cada punto:

- Las afirmaciones principales tienen ubicaciones verificables; hechos, consejos y desconocidos están separados.
- La identidad sintética, los límites de entrada y el conflicto pendiente siguen en el artículo.
- La revisión de estilo no elimina matices necesarios ni cambia la estructura pedida por el usuario.
- Tras superar el formato de citas, compara cada frase con las fuentes; no basta con que haya identificadores.

El script detecta cambios en los hashes de las fuentes y errores de estructura en las citas, pero no decide si una fuente sustenta semánticamente una afirmación. El paquete prueba deliberadamente una promesa falsa que supera la comprobación estructural con un identificador válido. Sigue haciendo falta revisión humana de los hechos.

## Cuándo no debe activarse

Corregir una errata, revisar un parche Git o añadir una función de software no debería convertirse automáticamente en un artículo completo. Terminarlo tampoco concede permiso para publicarlo. Los [casos de activación](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json) son expectativas de diseño, no una tasa de éxito del enrutamiento.

Vuelve después a la [ruta de creadores](/es/guide/learning-paths/creator/) y anota el estilo y los criterios de aceptación en tus propias instrucciones reutilizables.

---
title: 'Ejemplo: Skill de revisión con alcance de diff explícito'
description: Descarga el paquete scoped-review, distingue cambios preparados, no preparados y revisión de rama, y reproduce un caso de Git fácil de pasar por alto.
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Pasaron siete pruebas de regresión del recopilador de diffs y las comprobaciones de estructura del Skill. Los ejemplos de activación y las conclusiones de revisión fueron diseñados por el autor; no se midió el enrutamiento automático entre modelos ni la tasa de detección de defectos.
  environment: Python 3.12.11 / Git / Darwin arm64; repositorios sintéticos temporales, sin dependencias externas.
  evidence:
  - label: Alcance y límites de la ejecución real
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill, recopilador, guía de alcances, entradas sintéticas, revisión de referencia y pruebas de regresión
  license: CC0-1.0
  version: 1.0.0
locale: es
source_locale: zh-CN
source_revision: e29d1b3
translation_status: draft
translated_at: '2026-09-20'
---

Antes de revisar, define qué se va a comparar. Este Skill evita confundir «cambios locales sin confirmar» con «commits respecto de main», o pasar por alto un error preparado porque el árbol de trabajo parece correcto.

[Descargar scoped-review v1.0.0](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [Ver SKILL.md](/downloads/skills/scoped-review/SKILL.md) · [Guía de instalación y uso](/downloads/skills/scoped-review/README.md)

## Qué puede hacer

| Solicitud | Alcance recopilado | No incluido |
|---|---|---|
| Revisar solo cambios preparados | HEAD → índice | Contenido no preparado |
| Revisar solo cambios no preparados | Índice → árbol de trabajo | Parche preparado |
| Revisar cambios locales sin confirmar | Mantener separados los dos parches; enumerar archivos nuevos | Leer aparte el contenido de archivos nuevos |
| Revisar commits respecto de una rama indicada | Base de fusión única → HEAD | Contenido local sin confirmar |

No supone `main` por defecto. Si la base no existe, informa de un error en vez de cambiar silenciosamente el alcance. El recopilador aporta evidencias; juzgar los defectos exige leer también código y pruebas pertinentes.

## Instalación y primera invocación

Necesitas Python 3.10+, Git y un repositorio local de práctica con al menos un commit. Coloca `scoped-review/` extraído en `.agents/skills/` del proyecto de destino y confirma que el punto de entrada es `.agents/skills/scoped-review/SKILL.md`. Si ya existe un Skill con ese nombre, compáralos antes de sobrescribirlo.

Consulta la [guía oficial](https://learn.chatgpt.com/docs/build-skills) para descubrir Skills locales y sus puntos de entrada. Comprueba que puede seleccionarse tras instalarlo e invócalo expresamente:

```text
$scoped-review Revisa los cambios de código locales todavía sin confirmar de este repositorio de práctica.
No modifiques archivos. Enumera primero los hallazgos y explica después la cobertura
de archivos preparados, no preparados y nuevos.
```

Este paquete didáctico no se instala automáticamente en tu configuración personal. También puedes ejecutar directamente el script incluido para observar qué alcance recopila.

## Reproduce un caso fácil de pasar por alto

La entrada sintética está en `fixtures/scenario.json`:

1. La fórmula de descuento de referencia es correcta.
2. Prepara una fórmula errónea: `amount * (1 - percent)`.
3. Restaura la fórmula correcta en el árbol de trabajo: `amount * (1 - percent / 100)`, pero sin prepararla.

Ahora `git diff HEAD` puede no mostrar cambios, aunque confirmar el índice introduciría el error. Con `amount=40, percent=10`, la versión preparada da -360 en vez de 36.

Una revisión correcta señala que la versión preparada está mal y que el parche no preparado la corrige. La [referencia completa del autor](/downloads/skills/scoped-review/fixtures/expected-review.md) explica también por qué no se debe mezclar el modo rama con este problema local; no es una salida real de un modelo.

## Ejecuta las comprobaciones incluidas

En el directorio del Skill extraído, ejecuta:

```sh
python3 validation/test_scopes.py
```

Siete pruebas en repositorios Git temporales comprueban el alcance, la regresión de la revisión omitida, el rechazo de una base inválida, la lista de archivos nuevos y que el repositorio revisado no se modifique. Si todo va bien, sale con código 0. Las pruebas no escriben en tu proyecto real.

Para usar el recopilador con un repositorio:

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

Sustituye la ruta por un repositorio cuya revisión tengas autorizada. El modo rama también requiere `--base`. La salida JSON puede contener código privado y no se sube automáticamente. Los comandos completos están en la [guía de alcances](/downloads/skills/scoped-review/references/scopes.md).

## Cuándo no debe activarse

Corregir artículos o implementar funciones nuevas no corresponde a este Skill. Ante un «revísalo» ambiguo, usa el contexto para determinar el alcance y pregunta si sigue sin estar claro. Los [casos de activación](/downloads/skills/scoped-review/fixtures/trigger-cases.json) incluyen siete solicitudes previstas; no se ha medido el enrutamiento automático real.

## Criterios de finalización y límites

- El informe identifica la instantánea, la base y el conjunto de archivos realmente revisados.
- Los hallazgos incluyen ubicación, condición que los activa, impacto y evidencia; las preferencias de estilo no se tratan como bloqueos.
- Se examinó el contenido de los archivos nuevos no seguidos relevantes o se indicó claramente que no se revisó. No se afirma haber cubierto binarios, archivos ignorados o submódulos.
- Indica qué comprobaciones se ejecutaron y cuáles no. La ausencia de hallazgos no garantiza ausencia de defectos.
- La revisión termina con un informe: no modifica, confirma ni sube cambios automáticamente.

Guarda el resultado con las plantillas de revisión y traspaso de la [ruta de desarrollo](/es/guide/learning-paths/developer/). El antiguo esquema breve `pr-review` sigue ayudando a entender la estructura; este paquete usa otro nombre para no sustituir una versión personal.

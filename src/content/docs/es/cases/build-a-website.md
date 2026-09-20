---
caseCategory: creation
directoryOrder: 40
title: 'Crear un sitio web: de los materiales del evento a una página que se puede revisar'
description: Descarga requisitos, una página inicial y un resultado de referencia para practicar diseño adaptable, uso del teclado y reparación reproducible de un botón.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64; navegador integrado de Codex (versión exacta del motor desconocida), vistas de 1280×720 y 375×812.
  summary: Se comprobó la página de referencia en vistas de escritorio y estrecha, incluido el botón y el teclado. Se reprodujo y corrigió un enlace roto. Esto no demuestra compatibilidad entre navegadores, rendimiento del modelo ni finalización por lectores.
  evidence:
    - label: Revisión en navegador y ajuste visual real
      href: /downloads/reading-event/validation/browser-review.md
    - label: Registro del enlace roto y su corrección
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: Requisitos fijos, datos ficticios, HTML inicial, página de referencia, ejemplo roto, plantilla de aceptación y script de validación
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 55fd86a
---

Convierte la información de un evento en un sitio de una página que puedas abrir en el navegador. Entregarás una página estática local y un registro de aceptación. El evento y el lugar son ficticios; el método de inscripción sigue sin decidirse.

[Descargar el paquete completo](/downloads/reading-event/reading-event-1.0.0.zip) · [Abrir el resultado de referencia](/downloads/reading-event/solution/index.html) · [Leer la descripción del material](/downloads/reading-event/README.md)

## Objetivo y preparación

La página presenta el evento, la hora, el lugar, el aforo, el costo, lo que hay que llevar y la información pendiente de confirmar. El botón principal solo lleva a las indicaciones de participación en la misma página; no debe aparentar que ya se puede inscribir.

Tras descomprimir el paquete, copia `starter` a un nuevo directorio `work` y permite que el modelo edite únicamente `work/index.html`. Usa `facts.md`, `brief.md` y `prompt.md` de la raíz del paquete como entradas de solo lectura. Consulta `solution` después de terminar. Puedes abrir el HTML directamente en un navegador sin instalar dependencias de frontend.

Si quieres usar un servidor local, sigue el comando opcional de Python del README. Si el puerto está ocupado, elige uno libre; no detengas un servicio desconocido.

## Encargar la tarea

```text
A partir de facts.md y brief.md, termina el index.html actual como una página
para un encuentro de lectura. Modifica solo index.html; usa HTML y CSS integrado,
sin añadir dependencias, acceder a la red, desplegar ni enviar contenido.
Mantén el método de inscripción como pendiente de confirmar; el botón principal
solo debe saltar a las indicaciones de participación de esta página. Al terminar,
comprueba escritorio, una vista estrecha de 375 px, el foco del teclado y los
enlaces internos. Enumera las comprobaciones realizadas y lo que queda pendiente;
no presentes como aprobadas las pruebas que no ejecutaste.
```

La [referencia de diseño](/downloads/reading-event/wireframe.md) explica el orden de lectura en dos columnas en escritorio y una en móvil. Los colores y adornos pueden variar, pero no los hechos, las incógnitas ni los criterios de aceptación.

## Comprobar el resultado

| Comprobación | Criterio de aceptación |
|---|---|
| Hechos | 17-10-2026, 14:00–15:30, sala de lectura ficticia, 18 personas, gratuito y llevar un libro voluntariamente coinciden con los materiales |
| Incógnitas | La inscripción sigue pendiente; no se inventan códigos QR, teléfonos ni enlaces |
| Móvil | Se puede leer a 375 px sin desbordamiento horizontal |
| Interacción | Tab llega al botón principal y muestra el foco; Intro o un clic lleva a las indicaciones de participación |
| Alcance | Solo cambia `work/index.html`; no se añaden dependencias, formularios de recogida de datos ni publicaciones externas |

Copia la [plantilla de aceptación](/downloads/reading-event/review-template.md) fuera del directorio de trabajo y rellena tus propios resultados. La página de referencia la escribió el autor; su registro no sustituye la aceptación del resultado que produzca el modelo en esta ocasión.

## Seguir la reparación de un botón roto

En `fixtures/broken.html` el botón apunta erróneamente a `#signup`, pero la sección real es `#participation`. La página parece completa, aunque el botón no llega a su destino.

Ejecución opcional:

```sh
python3 validation/reproduce.py
```

El reproductor comprueba la página rota en un directorio temporal, sale con código 1 e informa `missing-fragment`. Luego cambia únicamente el `href`, vuelve a comprobar y sale con código 0. La fixture original permanece intacta. El [registro guardado](/downloads/reading-event/validation/recovery.json) contiene ambas comprobaciones.

No «repares» el problema eliminando el botón ni ignorando la prueba. Cambia solo el enlace de destino y compruébalo con un clic real. El script de enlaces no evalúa el diseño, los hechos ni la experiencia con teclado; revísalos por separado.

## Ajuste visual real y límites de verificación

En la primera revisión móvil del autor, el texto decorativo de un libro sobresalía de su tarjeta. Ajustó el tamaño de letra y el espacio interior para la vista estrecha y repitió la comprobación. Las observaciones de escritorio y móvil, el foco del teclado, el botón principal y los hechos F1–F7 constan en la [revisión del navegador](/downloads/reading-event/validation/browser-review.md).

No se probaron todos los navegadores, un móvil físico, el uso completo de un lector de pantalla ni la finalización por lectores independientes. No se publicó el sitio ni se midió la tasa de éxito del modelo. Antes de publicar, confirma por separado el alojamiento, el contenido público y los permisos de despliegue.

Siguiente: [revisar los cambios](/es/guide/quality/review-diffs/) · [laboratorio de recuperación de fallos](/es/guide/reference/troubleshooting/failure-recovery-lab/)

---
title: Actualizaciones y correcciones del manual
description: Consulta los cambios del manual, los ejercicios afectados y los límites de verificación, y comunica problemas vinculados a una página concreta.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Redactado a partir del contenido actual del repositorio y los registros de ejecución. Es un registro de cambios del manual, no un anuncio de productos de OpenAI ni una confirmación de despliegue público.
locale: es
source_locale: zh-CN
source_revision: 3c99d35
translation_status: draft
translated_at: 2026-09-20
---

Esta página explica qué cambió en el manual, qué operaciones se ven afectadas y hasta dónde llega la verificación. Las fechas corresponden a la preparación del contenido; comprueba la versión del sitio que visitas para conocer el estado real de publicación. Para cambios de capacidades del producto, consulta las fuentes oficiales citadas en cada tutorial.

## 2026-09-18: materiales prácticos y límites de verificación

| Cambio | Qué supone para quien lee | Registro de verificación |
|---|---|---|
| El [informe semanal de ventas](/es/cases/analyze-a-spreadsheet/) añade entradas y resultados completos | Descarga 46 filas de datos sintéticos para practicar reembolsos, duplicados y variaciones entre periodos | [Comprobación independiente de cálculos](/downloads/sales-weekly-report/record.md) |
| El [artículo con fuentes](/es/cases/write-an-article/) añade mapa de hechos y materiales contradictorios | Practica mantener lo desconocido sin presentar una entrevista sintética como testimonio real | [Comprobación de fuentes y estructura](/downloads/source-backed-article/validation/record.md) |
| La [presentación](/es/cases/create-a-slide-deck/) ofrece PPTX, PDF y vista previa de ocho páginas | Comprueba el texto editable y el aspecto de las diapositivas; no se garantiza compatibilidad con todo el software | [Registro de software y renderizado](/downloads/article-to-slides/validation/record.md) |
| El [itinerario creador](/es/guide/learning-paths/creator/) y el [itinerario desarrollador](/es/guide/learning-paths/developer/) siguen ahora los resultados | Cada paso tiene materiales, criterios de aceptación y siguiente paso; los desarrolladores pueden anotar pruebas rojas y verdes | [Registro de repetición del itinerario](/downloads/developer-path/run-record.json) |
| [Cuatro tipos de Skill](/es/skills/examples/) ofrecen paquetes descargables completos | Revisión, escritura, investigación y automatización tienen referencias y controles; las muestras de activación no son mediciones de enrutamiento | «Entorno y evidencias de verificación» en cada página detallada |
| La [clasificación de Issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/) corrige esquema y umbral de puesta en marcha | «Tres muestras y 80 % de acuerdo» ya no justifica el lanzamiento; se recomienda revisión humana | [Registro de simulación](/downloads/issue-triage/validation/record.md) |
| La [comprobación de enlaces](/es/cases/use-cases/team-automation/scheduled-link-check/) y la [recuperación de fallos](/es/guide/reference/troubleshooting/failure-recovery-lab/) añaden material ejecutado | Reproduce errores locales y recuperación; enlaces externos, programación real y fallos de inicio de sesión siguen sin probarse | [Registro de recuperación](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18: filtro de casos y navegación por itinerarios

El [directorio de casos](/es/cases/) permite filtrar por tipo de tarea y palabra clave, con URL filtradas que se pueden compartir. Las tarjetas toman resultados y estado de verificación de los metadatos de cada caso. En las versiones de chino simplificado y tradicional, la barra lateral de itinerarios muestra solo el itinerario actual, sus pasos y ayuda relacionada; la vista general para principiantes aparece arriba y los cinco pasos están numerados. Los filtros sin resultados se pueden restablecer. Sin scripts todavía se pueden leer todos los casos.

## 2026-09-18: doce ejecuciones de comparación de prompts

Las [tres comparaciones de prompts](/es/prompts/comparison-lab/) incluyen ahora dos ejecuciones reales de A y B para un informe de ventas, un artículo con fuentes y una corrección de bug, con resultados, duración y puntuaciones por criterio. El [paquete de resultados](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) conserva errores de herramientas, campos ausentes en los registros y hashes de rutas anonimizadas. El Agent principal evaluó sin cegamiento, se desconocen las etiquetas reales del modelo y los datos no establecen una tasa general de éxito ni ahorro de tiempo.

## 2026-09-18: ejercicio completo de sitio web

El [caso de construir un sitio web](/es/cases/build-a-website/) incluye requisitos fijos, página HTML inicial, resultado de referencia, plantilla de aceptación y un fallo en el ancla de un botón. La página de referencia se comprobó en escritorio y con 375 px de ancho; se guardaron las correcciones reales y los registros de enlaces. No se afirma que se haya desplegado, conseguido inscripciones ni medido un efecto del modelo.

## 2026-09-18: acceso chino más centrado

La portada agrupa tareas, itinerarios por rol, búsqueda de ayuda y materiales reutilizables, eliminando explicaciones repetidas sobre enfoque y capacidades. La navegación principal en chino simplificado y tradicional destaca tareas, itinerarios y referencias. La hoja de ruta pasa al menú de recursos y la versión móvil usa los mismos accesos.

## 2026-09-18: materiales fijos para principiantes y recuperación

El [itinerario de cinco pasos para principiantes](/es/guide/learning-paths/beginner/) usa un mismo conjunto de materiales sintéticos de un evento, anuncio de referencia, cuatro ejemplos de error y plantillas de revisión y entrega. La práctica avanza de la lectura y edición de un archivo a la restauración real de una copia. El [registro del script del autor](/downloads/first-project/validation/record.json) solo demuestra las operaciones con archivos; no hay evaluación independiente del modelo ni evidencia de que lectores hayan completado el itinerario.

## 2026-09-18: fechas de la hoja de ruta y accesos prácticos

La [hoja de ruta de aplicaciones de IA](/es/ai-roadmap/) distingue ahora artículos académicos, lanzamientos de productos, artículos de ingeniería y temas de proyecto no ordenados por primera publicación. Cada tema ofrece fuentes concretas y un ejercicio. La fecha de un artículo ya no representa la adopción general del sector, ni un control de estructura de un paquete Skill se presenta como prueba de activación en el cliente. Se conservan las URL anteriores; los años y meses históricos no son fechas de eventos actuales. Cada página temática indica arriba sus fuentes y alcance de comprobación.

## 2026-09-18: aclaraciones contra malentendidos

- El acceso a precios se llama ahora «Referencia de precios». Las capturas con fuentes en su moneda original se separan de lo desconocido; las estimaciones ya no se usan para ordenar precios globales. Comprueba el precio real del vendedor antes de comprar.
- Los encabezados distinguen estado editorial, revisión de fuentes, ejecución de ejemplo y nota histórica. «Ejecutado» solo cubre los scripts y entornos indicados; no es una tasa de fiabilidad de la salida del modelo.
- La [prioridad de instrucciones](/es/guide/context/context-priority/) distingue roles de mensaje, descubrimiento de instrucciones del proyecto y permisos de ejecución. No afirma de forma general que las instrucciones más nuevas o estrictas siempre prevalezcan.
- [SDK](/es/guide/developer-platform/sdk-overview/) y [Webhook](/es/guide/developer-platform/webhooks/overview/) distinguen ejecución local, servicios propios y diseño de callbacks; no presentan interfaces propuestas como contratos oficiales.
- Los [niveles de tarea](/es/prompts/ask-for-a-plan/) distinguen ejecución directa, planificación previa y aprobación de acciones, sin detener cada paso por defecto.

Las fuentes y límites de comprobación de estos mecanismos aparecen al inicio de sus páginas. Este resumen no es una referencia completa de interfaces.

## Si encuentras un problema en una página

Al pie de cada artículo en chino hay un enlace «Informar de un problema en esta página (borrador de GitHub)». Abre un borrador de Issue aún no enviado con el título, la ruta del sitio y la fecha de verificación registrada. Revisa su contenido antes de enviarlo tú mismo; se necesita cuenta de GitHub.

Indica el párrafo concreto, la diferencia entre lo esperado y lo observado, el entorno necesario y, si corresponde, una fuente pública. Comparte solo información anonimizada: no pegues claves API, datos de cuentas, directorios privados, datos de clientes ni registros brutos completos. El borrador no recopila automáticamente los registros de tu tarea ni incluye parámetros de consulta de la página.

Si no tienes cuenta de GitHub, copia la ruta y descripción del problema a una nota local y pide a alguien con acceso que envíe la Issue. No se promete plazo de respuesta ni se envía ningún mensaje automáticamente.

## Cómo actúan quienes mantienen el manual

Tras reproducir el problema o comprobar las fuentes, registra por qué se aceptó, corrigió o no pudo confirmarse todavía. Si cambia un hecho del producto, actualiza su evidencia sin renovar en bloque las fechas de otras páginas. Si cambia una práctica, sincroniza materiales fuente, paquete descargable y artículo. Si una conclusión anterior deja de ser válida, explica el efecto del método viejo y los pasos de migración en vez de limitarte a decir «contenido mejorado».

Al actualizar esta página, enlaza páginas y registros de verificación concretos y deja visible lo que aún no se ha probado. Es el registro de cambios de un manual comunitario, no las notas oficiales de producto de OpenAI.

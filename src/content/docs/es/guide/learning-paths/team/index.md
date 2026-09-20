---
title: "Ruta para equipos: piloto de dos semanas, muestreo y decisión de despliegue"
description: "Empieza con una tarea de bajo riesgo y usa diez días laborables para reunir pruebas sobre roles, ejecuciones, revisión, reversión y despliegue limitado."
contentType: path
audiences: [team]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: "El autor hizo un ejercicio de mesa con la ruta de dos semanas, seis plantillas y tres situaciones excepcionales. No se ha realizado un piloto real de equipo ni una revisión independiente, ni se han medido mejoras de productividad."
assets:
  - path: /downloads/two-week-pilot/two-week-pilot-1.0.0.zip
    purpose: "Plan del piloto, lista de tareas, hoja de revisión, incidente y reversión, decisión y calendario de diez días"
    license: CC0-1.0
    version: 1.0.0
sidebar:
  order: 30
locale: es
source_locale: zh-CN
source_revision: "3b46738"
translation_status: draft
translated_at: 2026-09-20
---

Empieza con una tarea de alcance limitado cuyos resultados se puedan comprobar. Usa dos semanas para reunir pruebas de si conviene ampliar el uso. Aquí, dos semanas son diez días laborables. Si hay pocas tareas, prolonga el piloto; no declares el éxito solo porque se acabó el plazo.

[Descargar el paquete de plantillas del piloto de dos semanas](/downloads/two-week-pilot/two-week-pilot-1.0.0.zip) · [Instrucciones](/downloads/two-week-pilot/README.md) · [Calendario de diez días](/downloads/two-week-pilot/templates/06-schedule.md)

## Antes de empezar: elegir tarea y responsables

Considera las [sugerencias para clasificar Issues](/es/cases/use-cases/team-automation/issue-triage-suggestions/) o una [comprobación local de enlaces](/es/cases/use-cases/team-automation/scheduled-link-check/). Primero ejecuta la tarea manualmente con entradas sintéticas, manteniendo la revisión humana y la salida local.

Asigna un responsable, un ejecutor, un revisor, un administrador del sistema y un contacto de seguridad, con sustitutos. Una persona puede desempeñar varios roles, pero las decisiones sobre escrituras externas o incidentes de seguridad deben tener revisión independiente. Si aún no hay revisor, limita el trabajo a entradas sintéticas y borradores locales y regístralo como autoevaluación del autor.

Requisitos: saber guardar registros, juzgar resultados, detener la ejecución y explicar qué datos y acciones están permitidos. Si los permisos no están claros, termina primero la preparación local; no amplíes por tu cuenta el alcance a sistemas de producción.

## D1–D2: establecer el plan y hacer una ejecución manual

Completa el [plan del piloto](/downloads/two-week-pilot/templates/01-charter.md) y la [lista de tareas](/downloads/two-week-pilot/templates/02-tasks.csv): problema de negocio, referencia manual, alcance de entradas, acciones permitidas, exclusiones, método de revisión, condiciones de parada y conservación de registros.

Acuerda criterios concretos de corrección antes de ejecutar. No adoptes un umbral general como «con un 80 % de aciertos ya se puede lanzar». Revisa individualmente los resultados de alto riesgo; documenta en el plan la forma de muestreo y su justificación para otras tareas.

Condición de finalización: una ejecución manual tiene entrada, salida, comprobación real y responsable. El equipo sabe distinguir éxito, fallo y pausa. Solo entonces pasa a una muestra limitada.

## D3–D5: registrar ejecuciones y hacer la primera revisión

Usa la [hoja de revisión](/downloads/two-week-pilot/templates/03-review.csv) para conservar cada ejecución, fallo, interrupción, versión de entrada, configuración, prueba y motivo para aceptar, modificar o rechazar el resultado.

Según el [método de evaluación de flujos de trabajo](/es/guide/quality/workflow-evaluation/), examina por separado activación, límites, formato y calidad. Registra por separado la espera del modelo y el retrabajo humano. Al comparar con la referencia manual, verifica que la dificultad y las entradas sean comparables; deja como desconocido lo que no pueda compararse.

En D5, revisa los tipos de fallo y la cobertura de la muestra. Pausa ante un problema grave de límites, añade casos de reproducción y regresión, y conserva los registros de fallo. No ocultes el problema rebajando los criterios.

Condición de finalización: los primeros resultados tienen revisiones consultables y cada problema cuenta con responsable y estado. Si sigue abierto un problema grave, permanece en esta fase.

## D6–D8: ampliar dentro de límites y ensayar la reversión

Añade muestras o tipos de tareas dentro del alcance aprobado. Cambia solo un factor importante cada vez; no amplíes permisos, cambies el modelo y cambies la tarea a la vez. Registra las versiones de configuración para atribuir el origen de los cambios.

Usa la [plantilla de incidentes y reversión](/downloads/two-week-pilot/templates/04-incident.md) para ensayar la pausa de tareas, la comprobación de procesos y colas activos, la conservación de pruebas, la restauración de una versión conocida y su nueva verificación. Detener nuevas ejecuciones no deshace efectos externos ya producidos.

Puedes empezar con el [ejercicio de recuperación ante fallos](/es/guide/reference/troubleshooting/failure-recovery-lab/) en un directorio aislado. Si no se han probado la programación real, la revocación de permisos o la entrega de mensajes, anótalo. Un ensayo local no prueba la reversión en producción.

Condición de finalización: el equipo sabe explicar quién pausa, cómo confirmar la parada, cómo conservar el estado de deduplicación y cuándo está permitido reanudar. Después pasa a revisión independiente y decisión.

## D9–D10: decidir si ampliar, continuar o detener

Pide al revisor que examine los resultados críticos, el sesgo de la muestra y los problemas pendientes. Completa la [decisión del piloto](/downloads/two-week-pilot/templates/05-decision.md).

| Decisión | Qué explicar |
|---|---|
| Despliegue limitado | Tareas, personas y permisos respaldados por las pruebas; muestreo continuo y responsable de la reversión |
| Continuar el piloto | Muestras o pruebas de recuperación que faltan, responsable y próxima fecha de revisión |
| Detener | Cómo desactivar la programación, gestionar permisos, conservar registros y tratar eventos inacabados |

Explica cada criterio fijado en D1; no compenses un error grave con una buena media general. Si falta revisión independiente, la muestra es insuficiente o la referencia no es comparable, explica la limitación y no publiques afirmaciones de mejora de productividad del equipo.

Condición de finalización: una decisión deja constancia del responsable, las pruebas, el alcance y el siguiente paso. Incluso el despliegue se limita a tareas y condiciones verificadas; no autoriza a todos los miembros a automatizar cualquier trabajo.

## Cómo se comprobaron las plantillas

El autor realizó [tres ejercicios de mesa](/downloads/two-week-pilot/references/tabletop-review.md): un resultado correcto pero sin permiso, una muestra insuficiente y eventos aún sin entregar tras desactivar la programación. Sirven para comprobar si las plantillas cubren los puntos de decisión; no son casos reales de equipo ni resultados de dos semanas de uso.

Al modificar más adelante las reglas del proyecto, consulta la [configuración del proyecto](/es/guide/customization/) y la [definición de terminado](/es/guide/quality/definition-of-done/) e incorpora al proceso compartido los requisitos concretos aprendidos en el piloto.

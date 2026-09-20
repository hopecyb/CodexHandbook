---
title: "Patrones de aprobación humana"
description: "Distingue la autorización de la tarea de la aprobación de herramientas; prepara un resultado revisable antes de detenerte ante una acción concreta que requiere autorización."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Se comprobaron las funciones distintas del sandbox y la aprobación. Los patrones siguientes son recomendaciones del manual, no reglas uniformes de diálogo de todos los clientes."
  evidence:
    - label: "Guía oficial sobre sandbox y aprobaciones"
      href: https://learn.chatgpt.com/docs/agent-approvals-security
locale: es
source_locale: zh-CN
source_revision: f60dbb5
translation_status: draft
translated_at: 2026-09-20
---
La aprobación debe corresponder a una acción concreta y sus efectos. La autorización de la tarea indica qué quiere completar el usuario; la aprobación de herramientas determina si una acción puede ejecutarse en el entorno actual. Escribir un archivo, ejecutar un comando o acceder a la red no exige preguntar cada vez por naturaleza. El comportamiento depende del alcance autorizado, las políticas de herramientas y el sandbox. Consulta la [guía oficial](https://learn.chatgpt.com/docs/agent-approvals-security).

## Tres formas de colaboración que se pueden elegir expresamente

| Forma | Qué puede continuar | Cuándo esperar |
|---|---|---|
| Análisis de solo lectura | Leer, comparar y elaborar una propuesta | No cambiar la implementación antes de recibir autorización |
| Implementación dentro del alcance autorizado | Modificar el área indicada, verificar y preparar un resultado revisable | Falta información esencial, cambia el alcance o hace falta una nueva acción no autorizada |
| Aprobación aparte de la acción final | Terminar borradores, compilaciones, vistas previas y preparación de recuperación | Antes de publicar, enviar u otra acción reservada expresamente |

Son acuerdos de colaboración, no nombres de nuevos modos del producto. Si una autorización clara sigue vigente, no vuelvas a pedirla. Si una política obligatoria exige aprobación interactiva, sigue ese mecanismo.

## Patrón 1: limitar esta vez a una propuesta

```text
Esta vez, trabaja solo en modo de lectura: examina el proyecto y propón cambios. No modifiques código ni hagas commit.
Si una comprobación escribe caché, capturas o archivos de salida, indícalo; no supongas que todas las «pruebas» son de solo lectura.
```

Sirve cuando el objetivo aún no está decidido y hay que comparar alternativas. También en una tarea de solo lectura hay que observar los efectos reales de los comandos. No combines «puedes ejecutar pruebas» con «no escribir nada en disco» sin comprobarlas.

## Patrón 2: completar el trabajo local seguido

```text
Puedes modificar estos tres documentos y sus enlaces internos relacionados y ejecutar las comprobaciones de compilación existentes.
Completa el trabajo dentro de ese alcance sin esperar tras cada paso; resuelve los detalles habituales e informa de ellos.
No publiques el sitio ni envíes mensajes. Explica primero cualquier decisión necesaria o acción fuera del alcance.
```

Aquí ya se autorizan la modificación y la verificación; no hace falta preguntar antes de cada escritura. Que un comando concreto esté permitido sigue dependiendo del entorno, y un prompt no puede eludir una denegación.

## Patrón 3: aprobar una publicación concreta

Prepara primero una versión revisable y después presenta:

- La versión o artefacto exacto que se publicará y los resultados de verificación.
- El entorno de destino, destinatario o personas afectadas.
- Los efectos externos previstos y la forma necesaria de recuperación.
- Las autorizaciones o condiciones que aún faltan.

Aprobar «esta versión en el sitio de pruebas» no autoriza publicar versiones futuras en producción. A la inversa, si la misma acción ya recibió aprobación clara, una plantilla general no debe provocar otra solicitud.

## Cómo continuar tras una denegación

Conserva la denegación original y distingue entre falta de autorización, prohibición por política y fallo del entorno. Continúa si puedes reducir el trabajo a una solución todavía válida para la tarea. No eludas la misma restricción cambiando de herramienta, de forma de escribir el comando o de prompt. Si hace falta intervención del usuario, explica la acción bloqueada, el motivo y las opciones siguientes.

## Qué comprueba quien revisa

Comprueba que alcance y resultado coincidan, que la verificación haya ocurrido de verdad y que se entiendan los efectos externos. Tener un plan no concede aprobación automática; «sin hallazgos» tampoco garantiza ausencia de riesgos.

Para el método, consulta [clasificación de tareas](/es/prompts/ask-for-a-plan/); para instrucciones en conflicto, [prioridad del contexto](/es/guide/context/context-priority/); los flujos sin supervisión requieren además [mecanismos de parada, fallo y notificación](/es/skills/automations/scheduled-tasks/).

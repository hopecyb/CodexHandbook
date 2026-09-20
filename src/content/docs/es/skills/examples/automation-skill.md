---
title: 'Ejemplo: un Skill de automatización que solo registra cambios'
description: Descarga quiet-link-monitor y verifica manualmente las comprobaciones repetidas, recuperación, eventos persistentes y detención.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Pasaron ocho pruebas de estado y tres ejecuciones de CLI. Un fallo repetido no crea un evento nuevo y la corrección registra la recuperación. No se probaron la programación real, el enrutamiento del modelo ni la entrega de mensajes.
  environment: Python 3.12.11 / Darwin arm64; sitio estático ficticio temporal, biblioteca estándar y sin red.
  evidence:
    - label: Registro de la ejecución real
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: Skill de automatización, comprobador de enlaces, script de estado persistente, ejemplo defectuoso y registro de validación
    license: CC0-1.0
    version: 1.0.0
locale: es
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 6c758b9
---

Repetir una comprobación no implica notificar cada vez. Este Skill reutiliza el [ejercicio de comprobación de enlaces](/es/cases/use-cases/team-automation/scheduled-link-check/) y registra cambios, recuperaciones y errores de ejecución. Cuando el resultado no cambia, permanece en silencio.

[Descargar quiet-link-monitor v1.0.0](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## Instalación y ensayo manual

Coloca el directorio completo en `.agents/skills/quiet-link-monitor/` de tu proyecto de práctica, sin sobrescribir un Skill del mismo nombre. Comprueba en la [guía de Skills](/es/skills/use-a-skill/) que se puede seleccionar y llámalo:

```text
$quiet-link-monitor Ensaya el fallo, las comprobaciones repetidas y la
recuperación con los ejemplos incluidos. Trabaja sobre una copia temporal,
guarda el estado por separado y al final informa de los cambios de eventos.
No envíes notificaciones.
```

Puedes ejecutar primero el script por separado, sin modelo ni cuenta. Solo requiere la biblioteca estándar de Python 3.10+:

```sh
python3 validation/test_monitor.py
```

Para la prueba manual, copia `fixtures/broken` a tu propio `work-site`. En el directorio del Skill, ejecuta dos veces:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

La primera ejecución sale con código 1 y registra un evento de fallo. La segunda también sale con 1, pero `new_event` es null. Repara ese mismo directorio tomando `fixtures/fixed` como referencia y ejecuta de nuevo: salida 0 y `recovered`. No sustituyas la ruta por otro sitio para simular la recuperación; la validación de estado rechazará el cambio de alcance.

[Resumen real de las tres ejecuciones CLI](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## Qué se registra y cuándo detenerse

El archivo de estado debe estar fuera del directorio comprobado. Guarda el resultado de cada ejecución, la cantidad de errores de ejecución consecutivos y los eventos persistentes. El script escribe este archivo y otro de bloqueo al lado; no es una operación totalmente de solo lectura. No modifica el contenido del sitio.

| Situación | Comportamiento |
|---|---|
| Primera ejecución saludable | Crear referencia, sin evento nuevo |
| Primer fallo o cambio en los problemas detectados | Guardar evento de cambio |
| Mismo resultado otra vez | No crear un evento nuevo |
| Fallo corregido | Guardar evento de recuperación |
| Tres errores consecutivos al ejecutar la comprobación | Guardar evento de detención y pausar |
| Estado corrupto, conflicto de bloqueo o sitio distinto | Detenerse de inmediato sin sobrescribir el estado original |

Un enlace roto es un resultado válido, no un error de ejecución. Tras la pausa, una llamada normal no vuelve a comprobar. Investiga y corrige la causa y reanuda explícitamente:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

No borres automáticamente el bloqueo ni el estado para esquivar un fallo. Un proceso bloqueado puede dejar un archivo de bloqueo; confirma primero que no queda ningún proceso activo. La [guía de estado y recuperación](/downloads/skills/quiet-link-monitor/references/operations.md) enumera códigos de salida, retención y límites de concurrencia.

## Un candidato a notificación no es un mensaje enviado

El script solo registra eventos locales. Todos los valores de `delivery` son `not-sent`; no crea una programación ni envía mensajes. Cada evento tiene una ID estable para ese registro; repetir el resultado no crea otro evento para el mismo estado.

Si conectas un emisor autorizado, lee los eventos persistentes no entregados, elimina duplicados por ID y guarda las confirmaciones de entrega. Leer solo el `new_event` mostrado en la terminal de esta ejecución puede omitir eventos tras una interrupción. El paquete no incluye emisor ni promete una entrega exactamente una vez entre sistemas.

## Del ensayo manual a la ejecución periódica

Confirma que la compilación terminó bien antes de comprobar su resultado más reciente. Si falla, detente en lugar de revisar un directorio antiguo. Usa el mismo sitio y archivo de estado en cada ejecución programada e impide escrituras simultáneas. Actívala manualmente en el entorno de destino para verificar registros y comportamiento de detención antes de programar la repetición. El canal, destinatarios y alcance de notificaciones reales deben proceder de una autorización existente.

Aquí no se probaron programación real ni entrega de mensajes. Los enlaces externos permanecen `unchecked`; un resultado local saludable no significa que «todos los enlaces del sitio funcionan».

## Alcance y aceptación

La auditoría repetida de enlaces de documentación encaja en este Skill. Informes generales de ventas, escritura creativa e instalaciones automáticas en producción quedan fuera de este paquete. Los casos de activación son expectativas de diseño; no se midió el enrutamiento del modelo.

Para terminar, presenta registros del primer fallo, la repetición silenciosa y la recuperación, además de pruebas de pausa y reanudación explícita. Las ocho pruebas incluidas verifican esos comportamientos locales de estado. No demuestran criterio del modelo, acceso a la red ni fiabilidad en producción.

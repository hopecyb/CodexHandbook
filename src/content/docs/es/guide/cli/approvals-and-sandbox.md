---
title: Aprobación y Sandbox
description: Estrategia de Aprobación para shell, escritura en disco y red en la CLI, y cómo el Sandbox limita el comportamiento del Agent.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

En la CLI el Agent puede **leer archivos, escribir archivos, ejecutar shell y posiblemente conectar a la red**: Aprobación y Sandbox son la válvula de seguridad entre tú y la automatización. Una mala configuración provoca ventanas frecuentes en modo interactivo, o riesgo descontrolado en CI sin supervisión.

## Contenido de esta página

- Qué pregunta el diálogo de Aprobación y cómo elegir
- Cómo el nivel de Sandbox afecta a archivos y red
- Cómo alinear la estrategia del equipo entre CLI y `AGENTS.md`

## Qué controlan Aprobación y Sandbox por separado

Puedes recordarlo así:

- **Aprobación** te pregunta: «¿sigo con este paso?»
- **Sandbox** lo limita: «aunque siga, ¿hasta dónde puede llegar?»

Juntos influyen en si el uso de la CLI es más conservador o si los límites se abren demasiado.

Base conceptual: [Permisos y Aprobaciones](/guide/foundations/permissions-and-approvals/) · [Sandbox y red](/guide/foundations/sandbox-and-network/)

## Cuándo ocurre la Aprobación

Puntos típicos de disparo (el producto concreto manda):

| Tipo de operación | Riesgo | Tendencia por defecto |
|---|---|---|
| Escribir archivos dentro del proyecto | Medio | Suele pedir confirmación |
| Escribir rutas fuera del proyecto | Alto | Rechazar o confirmar con rigor |
| Ejecutar shell | Alto | Confirmar el contenido del comando |
| Red / curl | Alto | Confirmar destino y datos |
| Llamada a herramienta MCP | Según el servidor | Por granularidad de herramienta |

En modo interactivo tienes opciones como **permitir una vez / permitir en la sesión / rechazar** (los nombres varían según la versión). **No pulses «permitir siempre» en un comando que no entiendas.**

## Niveles de Sandbox (concepto)

| Intención del nivel | Encaja con |
|---|---|
| Estricto / solo lectura | Revisar código no confiable, revisión de solo lectura en CI |
| Estándar | Repositorio de desarrollo diario |
| Relajado | Entorno personal de confianza, y conforme a la política de la empresa |

El Sandbox puede limitar:

- El alcance de directorios escribibles
- Si puede acceder a otros proyectos de `$HOME`
- Capacidades de subproceso y red

Entrada de configuración: [Configuración de la CLI](/guide/cli/configuration/) · Matriz: [Matriz de Permisos](/guide/reference/permission-matrix/)

## Interactivo frente a no interactivo

| Modo | Característica de Aprobación |
|---|---|
| Interactivo `codex` | Estás presente; puedes juzgar uno a uno |
| No interactivo `exec` | No estás; hay que apretar el Sandbox de antemano + Prompt fijo |

Lectura obligatoria en CI: [Modo no interactivo](/guide/cli/non-interactive-mode/) · [Patrones de Aprobación humana](/cases/workflows/human-approval-patterns/)

Principios recomendados en CI:

- Solo lectura o rutas de escritura limitadas
- Prohibir `curl` arbitrario que suba contenido del repo
- Fallo = salida distinta de cero; conservar logs

## Relación con reglas allow/deny

El proyecto puede declarar «comandos previsibles» en [Reglas de permitir y denegar](/guide/customization/rules/allow-and-deny-patterns/). **Las reglas deben coincidir con el comportamiento real del producto**; si no, el Agent seguirá bloqueado o, al contrario, demasiado amplio.

## Errores frecuentes

- En la máquina local, «aprobar automáticamente todo shell» y luego trabajar en el repo del cliente
- Aprobar por error comandos tipo `sudo`, borrar la base de datos o tocar `~/.ssh`
- Usar en CI la misma configuración relajada que en el portátil de desarrollo
- Creer que el Sandbox sustituye la revisión de código — evita operaciones erróneas, no la inyección de Prompts maliciosos

## Malentendidos frecuentes

### Muchas ventanas no significan que la configuración esté mal

Si estás aprendiendo la CLI, más Aprobación suele ser más seguro: te obliga a entender qué hace cada paso.

Lo que de verdad hay que vigilar es empezar a pulsar «sí» sin leer el contenido, no que pregunte demasiado.

### Relajar una vez no significa que luego sea siempre seguro

Algunos, por comodidad la primera vez, dejan las reglas muy amplias y luego las reutilizan en otros repos y otras Tareas.

El problema: el límite de seguridad debe seguir el riesgo de la Tarea; no debe darse por bueno esta vez solo porque la anterior fue cómoda.

## Lista de verificación

- [ ] Puedes explicar qué hacía la última solicitud de Aprobación
- [ ] Sabes dónde cambiar el nivel de Sandbox y reiniciar la sesión
- [ ] La documentación del equipo indica qué comandos están prohibidos y cuáles pueden pasar automáticamente de forma previsible

Al principio, dejar Aprobación y Sandbox de la CLI un poco conservadores suele ser más estable. Cuando sepas de verdad qué estás abriendo, relajar poco a poco aún llega a tiempo.

## Fuentes de referencia
- Documentación de seguridad y Sandbox de OpenAI Codex CLI
---

**Estado:** verified  
**Productos aplicables:** CLI  
**Base de verificación:** La documentación de introducción a la CLI de OpenAI Help Center sigue distinguiendo lectura/escritura, ejecución de comandos y límites de Sandbox/red según approval modes; esta página se centra en los conceptos de Aprobación y Sandbox y en las diferencias de riesgo entre escenarios interactivos y sin supervisión, sin fijar como hechos textos de botones o nombres de modo concretos.  
**Última verificación:** 2026-07-26

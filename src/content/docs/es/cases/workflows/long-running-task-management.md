---
title: Gestión de tareas largas
description: Tareas grandes de varias horas o sesiones — puntos de control, compactación, delegación y condiciones de salida.
locale: es
source_locale: zh-CN
source_revision: 199bbe5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Los problemas habituales de las tareas largas: **el contexto se llena**, **la persona se va**, **la dirección deriva**, **no se sabe cuándo parar**. Esta página sitúa [Explorar—planificar—ejecutar—verificar](/es/cases/workflows/explore-plan-execute-verify/) en escenarios de horas o varias sesiones.

## Enfoque de esta página

- Cuándo dividir la tarea y cuándo delegar a Cloud
- Qué escribir en puntos de control y registros de estado
- Condiciones de salida para tareas largas automatizadas

Relacionado: [Delegar y hacer seguimiento](/es/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/es/skills/automations/scheduled-tasks/)

## Señales de tarea larga

- Más de 30 minutos de tiempo de máquina estimado
- Varios subsistemas o >20 archivos
- Espera de feedback humano o APIs externas
- Hay que correr E2E completo / pruebas de rendimiento

Si se cumple cualquiera, escribe el plan primero; no hagas toda la conversación de un tirón.

## Gestión en tres fases

### 1. Congelar el plan

Produce un plan escrito: alcance, no-objetivos, hitos, comandos de aceptación. Confirma con una persona antes de una ejecución a gran escala.

[Planificación](/es/guide/agent-work/planning/) · [Subagents](/es/guide/agent-work/subagents/)

### 2. Puntos de control

Tras cada hito:

- Commit o stash de un incremento revisable
- Actualiza `PROGRESS.md` o un comentario de issue: qué se hizo, siguiente paso, bloqueos
- Si el contexto está lleno, usa [compactación](/es/guide/context/compaction/) o abre una sesión nueva + enlaza el archivo de progreso

### 3. Cierre o delegación

- Si lo local no da abasto → [delegación Cloud](/es/guide/web-and-cloud/delegate-and-follow-up/)
- Si hace falta monitorización continua → Automation + **max iterations / fecha límite** claras

## Condiciones de salida (obligatorias en automatización)

| Condición | Descripción |
|---|---|
| Tope de tiempo | 4 h sin progreso → alerta |
| Tope de iteraciones | El mismo test falla 3 veces → parar |
| Puerta humana | Antes de cambiar config de producción hay que @ a una persona |
| Condición de éxito | Tests verdes + PR abierto |

## Errores frecuentes

- Sin archivo PROGRESS, al cambiar de sesión se repite trabajo
- Tarea larga sin no-objetivos: el Agent «ordena todo el repo» de paso
- Tarea Cloud colgada toda la noche sin aprobación

## Checklist de aceptación

- [ ] Antes de empezar hay un documento de plan
- [ ] Al menos dos puntos de control con diff revisable
- [ ] Se sabe cómo pausar, reanudar o traspasar

---

**Estado:** verified  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los use cases públicos actuales de OpenAI Developers sobre objetivos a largo plazo y colaboración en tareas largas, y con los capítulos ya verificados de traspaso, planificación, compactación y delegación. Esta página solo describe métodos estables de puntos de control, traspaso y condiciones de salida.

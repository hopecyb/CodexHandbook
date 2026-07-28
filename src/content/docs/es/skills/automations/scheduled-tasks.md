---
title: Tareas programadas y en segundo plano
description: "Automations: ejecutar Codex desatendido bajo disparadores; hay que diseñar Aprobación y condiciones de salida."
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Automations** permite que Codex ejecute tareas de forma automática ante un **horario, un evento de repositorio o un disparador externo**, por ejemplo comprobaciones de dependencias, sincronización de documentación o escaneos periódicos de salud.

## Contenido de esta página

- Cuándo merece la pena automatizar y cuándo debe quedar una persona en el bucle
- Cuatro puntos de diseño: disparo, ejecución, notificación y fallo
- Relación con tareas Cloud y scripts locales de CLI

## Comparación con tareas manuales

| | Tarea manual | Automation |
|---|---|---|
| Inicio | La inicias tú | Programación / evento |
| Supervisión | Puedes interrumpir en cualquier momento | Hace falta notificación y logs |
| Riesgo | Juzgas en el momento | El error puede propagarse en lote |
| Encaja con | Exploración, refactor | Trabajo repetitivo y con reglas claras |

## Diseño de automatización segura

### 1. Condiciones de disparo claras

```text
Bien: cada lunes a las 09:00, comprobar enlaces rotos en docs/
Mal: vigilar de continuo y cambiar código automáticamente
```

### 2. Permisos mínimos

- El escaneo de solo lectura es preferible al commit automático
- Si se abren PRs automáticamente, usa una cuenta bot dedicada y protección de ramas

### 3. Condiciones de salida

- Pausar tras N fallos consecutivos
- Si el diff supera un umbral de líneas, pasar a revisión humana
- Abortar al tocar directorios prohibidos en `AGENTS.md`

### 4. Notificaciones

- Slack / correo / móvil: completado, fallo, pendiente de Aprobación
- Conservar logs para auditoría

### 5. Puntos de revisión humana

| Puede ser automático | Requiere persona |
|---|---|
| Generar un PR en borrador | Fusionar en main |
| Listar dependencias obsoletas | Subir major versions |
| Sincronizar documentación pública | Publicar un anuncio externo |

## Patrones típicos

### Mantenimiento periódico

- Informe de vulnerabilidades de dependencias → abrir issue, sin tocar el lockfile
- Aviso de diff entre archivos de traducción y el texto fuente

### Impulsado por eventos

- Nuevo PR abierto → ejecutar Skill de review (comentar sugerencias, sin push)
- Issue con etiqueta `bug` → generar borrador de pasos de reproducción

### Tareas de larga duración

Dividir en varias Automations + [traspaso y reanudación](/guide/agent-work/handoff-and-resume/), para no agotar el contexto en una sola pasada.

## Relación con Cloud / CLI

- **Cloud**: automatización remota bien integrada con GitHub
- **CLI + cron/CI**: redes internas y pipelines a medida
- Criterios de elección: [Local vs Cloud](/guide/foundations/local-vs-cloud/) y [Web y Cloud](/guide/web-and-cloud/)

## Errores habituales

- Automatizar un `git push` directo a la rama principal
- Sin alertas de fallo, el repositorio se degrada en silencio
- Programar tareas exploratorias: gasta cuota y es difícil de verificar

## Lista de verificación

- [ ] Disparadores, Permisos, notificaciones y condiciones de salida documentados
- [ ] Se ha ensayado un ciclo completo en un fork o repositorio de prueba
- [ ] El equipo conoce la cuenta bot y las reglas de Aprobación

## Fuentes de referencia
- Documentación oficial de OpenAI Codex Cloud / Automations
---

**Estado:** desactualizado  
**Productos aplicables:** Cloud / App / CLI  
**Nota de revisión:** Esta página describe la capacidad actual de ejecución automática programada, por eventos y en segundo plano, pero las entradas de disparo y la gobernanza siguen cambiando con facilidad, y la base pública oficial no es lo bastante completa.  
**Última verificación:** 2026-07-26

---
title: "Caso: comprobación programada de enlaces de documentación"
description: Escanea enlaces rotos del sitio con Codex no interactivo o CI — caso de entrada a la automatización de equipo.
locale: es
source_locale: zh-CN
source_revision: e8fa8bd
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

## Metadatos

| Campo | Contenido |
|---|---|
| Público | Maintainers de equipo, Technical Writers |
| Cliente | CLI + GitHub Actions |
| Tiempo estimado | 45–90 minutos (incluye la primera config de CI) |
| Fecha de verificación | 2026-07-25 |

## 1. Objetivo y contexto

**Objetivo:** Comprobar cada semana enlaces internos del sitio de docs y enlaces externos clave; informar de enlaces rotos en PR o issue.

**Criterios de éxito:**

- CI o workflow programado reproducible
- Lista estructurada de enlaces rotos (archivo, número de línea, URL)
- No modifica archivos ajenos ni hace push

**Fuera de alcance:** Crawler de todo el sitio, páginas tras login, pruebas de rendimiento.

## 2. Preparación

- El código fuente del sitio de docs está en un repo Git (p. ej. `src/content/docs/` de este manual)
- Ya existe `npm run build` o un script de link checker (opcional)
- `GITHUB_TOKEN` de solo lectura y `OPENAI_API_KEY` en secrets de la org

## 3. Flujo de trabajo

### Explorar

```text
Lee @src/content/docs/ y los scripts de package.json existentes.
Indica si ya hay link check; si no, sugiere el esquema mínimo: enlaces internos markdown + muestreo de enlaces externos a docs oficiales.
No modifiques archivos.
```

### Planificar

```text
Propón un plan: ruta del archivo de prompt, nombre del workflow de CI, campos del JSON estructurado de salida.
Espera mi confirmación antes de crear archivos.
```

### Ejecutar

- Añadir `prompts/ci/link-check.md`
- Añadir `.github/workflows/docs-link-check.yml` (esquema; ver [Scripts y pipelines](/es/guide/developer-platform/non-interactive/scripts-and-pipelines/))
- Usar [codex exec](/es/guide/developer-platform/non-interactive/codex-exec/) o script puro + reclasificación secundaria con Codex

### Verificar

- Una pasada local de `codex exec`
- `workflow_dispatch` manual en CI
- Insertar a propósito un enlace roto y confirmar `pass: false`

## 4. Fallo y recuperación

| Problema | Tratamiento |
|---|---|
| Sitio externo con 503 temporal | Distingue enlace duro vs fallo blando; defínelo en el prompt |
| Fallo al parsear JSON | Endurece las restricciones de [salida estructurada](/es/guide/developer-platform/non-interactive/structured-output/) |
| Cuota agotada | Pasa a cron semanal + comprobación incremental |

## 5. Captura para reutilizar

- Tras la tercera ejecución correcta, captura como Skill: `docs-link-audit`
- Las [reglas de comandos del equipo](/es/guide/customization/rules/team-rules/) permiten `npm run build` y git en solo lectura

## 6. Capítulos relacionados

- [Gestión de tareas largas](/es/cases/workflows/long-running-task-management/)
- [Tareas programadas de Automations](/es/skills/automations/scheduled-tasks/)
- [Ruta de aprendizaje de equipo](/es/guide/learning-paths/team/)

---

**Estado:** verified  
**Productos aplicables:** CLI  
**Última verificación:** 2026-07-26  
**Base de verificación:** Contrastado con los capítulos ya verificados de modo no interactivo, scripts y pipelines, salida estructurada, reglas de equipo y automatización. El contenido se limita al caso estable de automatización de equipo «comprobación programada de enlaces, informe estructurado y parada ante fallos».

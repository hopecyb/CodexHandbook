---
title: Scripts y pipelines
description: Orquestar codex exec en shell, Makefile y GitHub Actions — repetible y auditable.
locale: es
source_locale: zh-CN
source_revision: ce1e940
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

Aquí se trata de pasar Codex de una operación puntual a un paso automatizado que **el equipo pueda repetir, rastrear si falla y que otra persona pueda retomar**.

En breve: el script fija el flujo; el pipeline lo repite según reglas.

Este capítulo explica cómo incrustar [codex exec](/es/guide/developer-platform/non-interactive/codex-exec/) en shell, Makefile o un pipeline de CI.

## Contenido de esta página

- División entre script local y job de CI
- Gestión de Prompt y secretos
- Combinación con [Automatización de revisión de código](/es/guide/developer-platform/ci-cd/code-review-automation/)

## Qué se resuelve aquí

«Scripts y pipelines» convierte «hoy lo hice a mano una vez» en «el equipo podrá repetirlo de la misma forma con estabilidad».

Por eso importan tres cosas:

- Repetible
- Auditable
- Transferible

## Por qué muchos equipos no «pegan el Prompt en la página de CI»

Porque es difícil de mantener:

- Quien llega después no sabe cómo se diseñó
- Un cambio de lógica no pasa por code review normal
- Si falla la Tarea, cuesta saber si cambió el Prompt, el entorno o el script

Meter Prompt, scripts y reglas en Git es, en la práctica, versionar el flujo automatizado.

## Malentendidos frecuentes

### La automatización prioriza la estabilidad, no «cuanto antes mejor»

La primera vez mucha gente quiere encadenar todo el flujo de golpe.

Si el Prompt aún cambia a menudo, el criterio de éxito no está claro y los límites de Permiso no están cerrados, cuanto antes automatices, más difícil será depurar después.

### El script sirve para fijar la práctica

Un buen script convierte pasos que vivían en la memoria de alguien en archivos que cualquiera entiende y puede revisar.

## Fragmento mínimo de Shell usable

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" "$(cat "$PROMPT_FILE")"
```

Incluye `prompts/ci/security-review.md` en Git; los cambios pasan por review.

## Hábitos que más conviene formar primero

La primera vez no busques «grande y completo»; fija primero estas tres:

1. Dónde vive el archivo de Prompt
2. Cómo se llama el script de entrada
3. Cómo se juzga éxito y fallo

Así, añadir logs, schema o notificaciones después será mucho más fluido.

## Esquema de GitHub Actions

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Install Codex CLI
        run: |
          # Fija el número de versión según la documentación oficial de instalación
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
Ajusta el método de instalación y el scope de Permisos del ejemplo a los requisitos de seguridad de tu organización; **no** hagas echo de secretos en el workflow.
:::

## Flujo de trabajo recomendado

| Capa | Contenido |
|---|---|
| Repositorio | `prompts/`, `tools/run-codex.sh` |
| CI | Checkout de solo lectura, CLI fijado, subir log artifact |
| Callback | Opcional: [Webhook](/es/guide/developer-platform/webhooks/overview/) para actualizar sistemas internos |

## Cómo juzgar

Si algo cumple estas dos condiciones, encaja bien en script o pipeline:

- Lo harás de forma repetida
- Quieres que cada vez se haga de forma lo más consistente posible

Por ejemplo: revisión de PR, resumen de cambios, escaneo de seguridad, comprobación de documentación.

No apresures «todo automático» antes de que el flujo se estabilice; primero fija la práctica en un script y luego enchufa el script al pipeline: suele ser más estable.

## Errores frecuentes

- Concatenar dinámicamente `${{ github.event.pull_request.body }}` sin escape (inyección)
- Sin control de concurrencia en el mismo PR; repeticiones que gastan cuota
- Pasa en local, en CI faltan dependencias (sin `npm ci`)
- El criterio de éxito es solo «terminó de correr», sin parsear una conclusión estructurada
- Dar de entrada demasiado privilegio de escritura a la automatización

## Límites de seguridad

- Privilegio mínimo del token de CI; prohibir `git push` salvo un job de Aprobación independiente
- En workflows de fork PR, cuidado con los secretos (`pull_request_target` requiere revisión de seguridad)

## Lista de aceptación

- [ ] Prompt y scripts tienen versión en Git
- [ ] El fallo de CI bloquea el merge (si la política lo exige)
- [ ] La política de retención de artifacts cumple el cumplimiento
- [ ] El comportamiento coincide con el `make review` local

## Fuentes de referencia
- Documentación de integración OpenAI Codex + GitHub
---

**Estado:** outdated  
**Productos aplicables:** CLI  
**Nota de revisión:** El principio de «meter Prompt, scripts y pipelines en Git para review» sigue siendo válido, pero los ejemplos dependen de `codex exec`, del método de instalación del CLI y del cableado concreto de GitHub Actions — detalles de implementación muy volátiles; se restaurará `verified` cuando haya documentación oficial de pipelines actualizada.  
**Última verificación:** 2026-07-26

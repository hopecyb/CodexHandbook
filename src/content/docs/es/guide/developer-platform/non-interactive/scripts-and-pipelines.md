---
legacyVerification:
  status: verified
  products: CLI / GitHub Actions
  basis: Contrastado con las recomendaciones oficiales actuales de Non-interactive mode y Codex GitHub Action; se corrigió --cd y se adoptó como límite de seguridad predeterminado separar el job que contiene la clave de API del que tiene permisos de escritura en el repositorio.
  checkedAt: '2026-08-26'
title: Scripts y pipelines
description: Orquestar codex exec en shell, Makefile y GitHub Actions — repetible y auditable.
locale: es
source_locale: zh-CN
source_revision: "07aeb4f"
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-10-25
sidebar:
  order: 20
---

Aquí se trata de pasar Codex de una operación puntual a un paso automatizado que **el equipo pueda repetir, rastrear si falla y que otra persona pueda retomar**.

En breve: el script fija el flujo; el pipeline lo repite según reglas.

Este capítulo explica cómo incrustar [codex exec](/es/guide/developer-platform/non-interactive/codex-exec/) en shell, Makefile o un pipeline de CI.

## Contenido de esta página

- División entre script local y job de CI
- Gestión de prompt y secretos
- Combinación con [Automatización de revisión de código](/es/guide/developer-platform/ci-cd/code-review-automation/)

## Qué se resuelve aquí

«Scripts y pipelines» convierte «hoy lo hice a mano una vez» en «el equipo podrá repetirlo de la misma forma con estabilidad».

Por eso importan tres cosas:

- Repetible
- Auditable
- Transferible

## Por qué muchos equipos no «pegan el prompt en la página de CI»

Porque es difícil de mantener:

- Quien llega después no sabe cómo se diseñó
- Un cambio de lógica no pasa por code review normal
- Si falla la tarea, cuesta saber si cambió el prompt, el entorno o el script

Meter prompt, scripts y reglas en Git es, en la práctica, versionar el flujo automatizado.

## Malentendidos frecuentes

### La automatización prioriza la estabilidad, no «cuanto antes mejor»

La primera vez mucha gente quiere encadenar todo el flujo de golpe.

Si el prompt aún cambia a menudo, el criterio de éxito no está claro y los límites de permisos no están cerrados, cuanto antes automatices, más difícil será depurar después.

### El script sirve para fijar la práctica

Un buen script convierte pasos que vivían en la memoria de alguien en archivos que cualquiera entiende y puede revisar.

## Fragmento mínimo de Shell usable

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

Incluye `prompts/ci/security-review.md` en Git; los cambios pasan por review.

## Hábitos que más conviene formar primero

La primera vez no busques «grande y completo»; fija primero estas tres:

1. Dónde vive el archivo de prompt
2. Cómo se llama el script de entrada
3. Cómo se juzga éxito y fallo

Así, añadir logs, schema o notificaciones después será mucho más fluido.

## GitHub Actions: usar la Action oficial

```yaml
jobs:
  codex-review:
    runs-on: ubuntu-latest
    permissions:
      contents: read
    steps:
      - uses: actions/checkout@v5
        with:
          fetch-depth: 0
      - name: Run review
        uses: openai/codex-action@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
          prompt-file: prompts/ci/pr-review.md
```

:::caution
En GitHub Actions, utiliza preferentemente la Action oficial `openai/codex-action`. No definas la clave de API como variable de entorno de todo un job que ejecute código del repositorio. Si después necesitas escribir en un PR, separa los permisos de escritura y la clave en jobs distintos y transfiere los cambios mediante un artefacto de parche.
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

- Privilegio mínimo del token de CI; prohibir `git push` salvo un job de aprobación independiente
- En workflows de fork PR, cuidado con los secretos (`pull_request_target` requiere revisión de seguridad)

## Lista de aceptación

- [ ] prompt y scripts tienen versión en Git
- [ ] El fallo de CI bloquea el merge (si la política lo exige)
- [ ] La política de retención de artifacts cumple los requisitos normativos
- [ ] El comportamiento coincide con el `make review` local

## Fuentes de referencia
- Documentación de integración OpenAI Codex + GitHub

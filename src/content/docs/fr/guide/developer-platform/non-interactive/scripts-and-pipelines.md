---
title: "Scripts et pipelines"
description: Orchestrer codex exec dans shell, Makefile et GitHub Actions — répétable et auditable.
locale: fr
source_locale: zh-CN
source_revision: '07aeb4f'
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: '2026-10-26'
sidebar:
  order: 20
legacyVerification:
  status: verified
  products: CLI / GitHub Actions
  basis: 'Comparaison avec les recommandations officielles actuelles Non-interactive mode et Codex GitHub Action : correction de `--cd` et séparation par défaut du job contenant la clé API et des droits d’écriture du dépôt.'
  checkedAt: '2026-08-26'
---

Ceci traite de transformer Codex d'une action ponctuelle en **étapes que votre équipe peut relancer, auditer et transmettre**.

Les scripts définissent le processus ; les pipelines le répètent selon un calendrier ou des événements.

Cette page montre comment intégrer [codex exec](/fr/guide/developer-platform/non-interactive/codex-exec/) dans shell, Makefile ou pipelines CI.

## Ce que cette page couvre

- Scripts locaux vs jobs CI
- Gérer prompts et secrets
- Combiner avec [automatisation de revue de code](/fr/guide/developer-platform/ci-cd/code-review-automation/)

## Ce que cela résout

« Scripts et pipelines » transforme « j'ai fait cela manuellement aujourd'hui » en « l'équipe peut faire la même chose fiablement plus tard ».

Trois priorités :

- Répétable
- Auditable
- Transmissible

## Pourquoi les équipes évitent de coller les prompts directement dans l’interface de CI

Difficile à maintenir :

- Les nouveaux responsables ne connaissent pas le design original
- Les changements de logique ne peuvent pas passer par la revue de code normale
- Les échecs sont difficiles à attribuer à prompt vs environnement vs script

Mettre prompts, scripts et règles dans Git est le contrôle de version pour l'automatisation.

## Idées reçues courantes

### L'automatisation valorise la stabilité, pas la vitesse d'abord

Beaucoup enchaînent tout avant que les prompts stabilisent, les critères de succès soient clairs ou les permissions soient strictes — puis le débogage devient pénible.

### Les scripts fixent l'approche

Un bon script transforme les étapes que les gens mémorisent en fichiers que tout le monde peut lire et revoir.

## Extrait shell minimal

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cd "$ROOT" --ephemeral "$(cat "$PROMPT_FILE")"
```

Garder `prompts/ci/security-review.md` dans Git ; les changements passent par revue.

## Habitudes à former d'abord

Ne visez pas « tout d'un coup ». Fixez d’abord ces trois éléments :

1. Où vivent les fichiers prompt
2. Comment l'entrée de script est appelée
3. Comment succès et échec sont jugés

Puis ajouter logs, schéma et notifications est beaucoup plus facile.

## GitHub Actions : utiliser l’Action officielle

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
Dans GitHub Actions, privilégiez l’Action officielle `openai/codex-action`. Ne définissez pas la clé API comme variable d’environnement de l’ensemble d’un job qui exécute le code du dépôt. Si une étape ultérieure doit écrire dans une PR, séparez les droits d’écriture et la clé dans des jobs différents, avec un artefact de patch pour transmettre le résultat.
:::

## Couches recommandées

| Couche | Contenu |
|---|---|
| Dépôt | `prompts/`, `tools/run-codex.sh` |
| CI | Checkout lecture seule, CLI pinée, upload artefacts de log |
| Callback | Optionnel [Webhook](/fr/guide/developer-platform/webhooks/overview/) pour mettre à jour systèmes internes |

## Comment décider

Bons candidats pour les scripts ou les pipelines :

- Vous le faites à répétition
- Vous voulez que chaque run suive la même approche

Exemples : revue PR, résumés de changements, scans sécurité, vérifications doc.

Ne précipitez pas « full auto » avant que le flux soit stable ; script d'abord, puis pipeline, est généralement plus sûr.

## Erreurs courantes

- Prompt dynamique depuis `${{ github.event.pull_request.body }}` sans échappement (injection)
- Pas de contrôle de concurrence sur le même PR, runs en double brûlent le quota
- Marche en local, CI manque deps (pas `npm ci`)
- Succès = « terminé » sans parsing de conclusion structurée
- Automatisation a obtenu permission d'écriture trop tôt

## Frontières de sécurité

- Token CI privilège minimum ; pas `git push` sauf job d'approbation séparé
- Workflows PR fork avec secrets nécessitent revue sécurité (`pull_request_target`)

## Liste de contrôle d'acceptation

- [ ] Prompts et scripts sont versionnés dans Git
- [ ] Échec CI bloque merge quand la politique l'exige
- [ ] Rétention d'artefacts conforme aux exigences
- [ ] Correspond au comportement local `make review`

## Sources de référence
- Docs intégration OpenAI Codex + GitHub

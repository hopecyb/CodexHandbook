---
title: "Scripts et pipelines"
description: Orchestrer codex exec dans shell, Makefile et GitHub Actions — répétable et auditable.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ceci traite de transformer Codex d'une action ponctuelle en **étapes que votre équipe peut relancer, auditer et transmettre**.

Les scripts fixent le flux ; les pipelines le répètent sur schedule ou sur événements.

Cette page montre comment intégrer [codex exec](/guide/developer-platform/non-interactive/codex-exec/) dans shell, Makefile ou pipelines CI.

## Ce que cette page couvre

- Scripts locaux vs jobs CI
- Gérer prompts et secrets
- Combiner avec [automatisation de revue de code](/guide/developer-platform/ci-cd/code-review-automation/)

## Ce que cela résout

« Scripts et pipelines » transforme « j'ai fait cela manuellement aujourd'hui » en « l'équipe peut faire la même chose fiablement plus tard ».

Trois priorités :

- Répétable
- Auditable
- Transmissible

## Pourquoi les équipes évitent de coller des prompts dans l'UI CI

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

## Snippet shell minimal

```bash
#!/usr/bin/env bash
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
PROMPT_FILE="prompts/ci/security-review.md"
codex exec --cwd "$ROOT" "$(cat "$PROMPT_FILE")"
```

Garder `prompts/ci/security-review.md` dans Git ; les changements passent par revue.

## Habitudes à former d'abord

Ne visez pas « tout d'un coup ». Fixez ces trois d'abord :

1. Où vivent les fichiers prompt
2. Comment l'entrée de script est appelée
3. Comment succès et échec sont jugés

Puis ajouter logs, schéma et notifications est beaucoup plus facile.

## Sketch GitHub Actions

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
          # Pin version selon doc d'installation officielle
          npm install -g @openai/codex@<pinned-version>
      - name: Run review
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          codex exec --cwd . "$(cat prompts/ci/pr-review.md)"
```

:::caution
Ajuster la méthode d'installation et les scopes de permission aux exigences de sécurité org ; **ne pas** echo les secrets dans les workflows.
:::

## Couches recommandées

| Couche | Contenu |
|---|---|
| Dépôt | `prompts/`, `tools/run-codex.sh` |
| CI | Checkout lecture seule, CLI pinée, upload artefacts de log |
| Callback | Optionnel [Webhook](/guide/developer-platform/webhooks/overview/) pour mettre à jour systèmes internes |

## Comment décider

Bon candidats pour scripts ou pipelines :

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
- Chapitre automatisation codex.bozhouai.com

---

**Statut :** obsolète  
**Produits concernés :** CLI  
**Note de révision :** Le principe de versionner prompts, scripts et pipelines dans Git tient encore, mais les exemples dépendent de `codex exec`, installation CLI et câblage GitHub Actions — détails à haute volatilité ; restaurer `vérifié` après ajout de la doc pipeline officielle actuelle.  
**Dernière vérification :** 2026-07-26

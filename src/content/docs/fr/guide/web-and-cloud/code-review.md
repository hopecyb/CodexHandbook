---
title: Revue de code Cloud
description: Revoir les diffs, PR et suggestions de revue automatisée des Tâches Cloud.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Cloud peut produire des changements pour vous, mais il ne prend pas la responsabilité de fusion en votre nom.

Après qu'une Tâche Cloud se termine, la **revue humaine** reste la dernière barrière avant la fusion. Cette page explique comment revoir la sortie d'Agent distant et la connecter aux PR GitHub, CI et revue par Skill.

## Ce qui est couvert

- Comment la revue PR Cloud diffère de la revue PR locale
- Checklists de revue et points de risque courants
- Utiliser Codex pour assister la revue sans abandonner la responsabilité

## Pourquoi la revue Cloud nécessite une attention supplémentaire

Les Agents distants sont plus susceptibles de :

- Toucher des fichiers non liés en « corrigeant » quelque chose
- Produire de grands diffs de lockfile ou fichiers générés par différences d'environnement
- Montrer des tests comme exécutés sans couvrir la logique critique
- Écrire des descriptions PR polies que vous n'avez pas vérifiées

La revue Cloud n'est pas plus légère — elle nécessite une concentration plus aiguisée.

## Où la revue se situe dans le flux

```text
Tâche Cloud terminée → pousser branche → ouvrir PR
        ↓
CI s'exécute (tests, lint, scans sécurité)
        ↓
Humain revoit diff + revue assistée Agent optionnelle
        ↓
Approuver fusion (sous protection de branche)
```

Ouvrir des PR : [Créer une Pull Request](/guide/web-and-cloud/create-pull-requests/)

## Barre minimale avant revue complète

Avant un passage profond, confirmer au moins quatre choses :

1. Le périmètre de changement a dérivé ?
2. La logique critique a été changée comme prévu ?
3. Les tests ou la Vérification ont vraiment été exécutés ?
4. Des données sensibles ou changements dangereux ont été introduits ?

Jusqu'à confirmation, « Tâche terminée » n'est pas « sûr à fusionner ».

## Checklist de revue humaine

Alignée avec [revoir les diffs](/guide/quality/review-diffs/) ; Cloud ajoute un focus supplémentaire :

| Vérification | Pourquoi |
|---|---|
| Fichiers non liés changés | Agent distant peut « refactorer en passant » |
| Lockfile / fichiers générés | Différences d'environnement causent de grands diffs |
| Nouvelles sources de dépendances | Risque supply chain |
| Tests couvrent vraiment la nouvelle logique | Agent peut écrire des tests vides |
| Changements permission et auth | Escalade de privilèges, tokens codés en dur |
| Correspond au périmètre issue | Empêcher l'expansion de périmètre |

## Idées reçues courantes

### 1. CI vert signifie prêt à fusionner

CI signifie seulement « ces vérifications automatisées n'ont pas échoué ». Que les exigences ont été comprises, le périmètre resté correct et le risque acceptable nécessite encore le jugement humain.

### 2. Une description PR complète signifie que je peux survoler le diff

Non.

Les descriptions aident à obtenir le Contexte plus vite ; elles ne vérifient pas les faits pour vous.

### 3. Relancer une revue Codex égale terminé

La revue assistée est utile, mais la responsabilité reste aux personnes.

## Utiliser Codex pour assister la revue (pas vous remplacer)

Acceptable :

- Exécuter un Skill `$pr-review` en local ou Cloud sur une nouvelle PR (voir [Créer un Skill](/skills/create-your-first-skill/))
- Demander des opinions groupées comme blockers / suggestions / nits
- **Vous** confirmez chaque blocker

Non acceptable :

- Fusionner sans lire le diff parce que l'Agent a dit que ça a l'air bon
- Laisser l'Agent approuver une branche protégée seul

Voir [Vérification et revue humaine](/guide/foundations/verification-and-human-review/)

## Ordre de revue suggéré

1. Titre et description PR — confirmer l'objectif
2. Diff de logique principale
3. Tests, fichiers générés, config
4. Commentaires automatisés et suggestions de suivi

Cela évite de se noyer dans le bruit dès le début.

## Conduire les révisions depuis les commentaires de revue

Après que des commentaires de revue arrivent sur une PR :

1. Démarrer une nouvelle Tâche Cloud ou locale : « Traiter uniquement les commentaires de revue suivants ; ne pas étendre le périmètre »
2. Attacher les liens ou numéros de commentaires
3. Pousser de nouveaux commits sur la même PR
4. Relancer CI et survoler le diff incrémental

Sur GitHub : [intégration GitHub](/guide/integrations/github/)

## Combiner avec les Automations

- Exécuter un Skill de revue automatiquement quand une PR s'ouvre (commentaire seulement, pas fusion)
- Voir [Tâches planifiées et déclenchées](/skills/automations/scheduled-tasks/)

## Erreurs courantes

- Sauter la revue sécurité parce que Cloud est « isolé »
- Fusionner un grand diff parce que « CI est vert »
- Coller des logs production non nettoyés dans les commentaires de revue
- Traiter « je n'ai pas repéré des problèmes » comme « il n'y a pas de problèmes »

## Checklist d'acceptation

- [ ] CI est vert et vous comprenez l'historique de retry
- [ ] Au moins une personne a lu le diff de logique principale
- [ ] Le périmètre correspond à la description issue/Tâche
- [ ] Pas de Secrets commités dans le repo

## Références
- [Patterns d'Approbation humaine](/cases/workflows/human-approval-patterns/)
---

**Statut :** obsolète  
**Produits concernés :** Cloud / GitHub  
**Note de revue :** Le principe que la sortie Cloud nécessite encore une revue humaine tient, mais cette page décrit les PR Cloud, le comportement d'ouverture auto PR, le rythme de revue distant et les notifications comme un workflow actuel concret ; ces formes d'intégration changent rapidement et nécessitent une réécriture contre le flux officiel le plus récent.  
**Dernière vérification :** 2026-07-26

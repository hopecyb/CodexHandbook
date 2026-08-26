---
title: Modèles d'approbation humaine
description: Quand approuver, refuser ou mettre Codex en pause — et comment rédiger ces règles clairement.
locale: fr
source_locale: zh-CN
source_revision: 0e37633
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

L'approbation sert à réserver les actions irréversibles aux humains. Cette page rassemble des modèles courants.

## Niveaux d'approbation

```text
Zone automatiquement sûre (lecture, analyse, planification)
    ↓
Zone de confirmation par prompt (écriture de fichiers, exécution de commandes, réseau)
    ↓
Zone humaine obligatoire (push, suppression de données, envoi externe, modification de config production)
```

Le comportement des dialogues varie selon l'[entrée produit](/fr/guide/) ; les principes restent les mêmes.

## Modèle 1 : Planifier d'abord, exécuter ensuite

```text
Règle : ne pas modifier les fichiers du dépôt tant que je n'ai pas dit « approuver le plan ».
```

Adapté à : codebase peu familière, production, gros diff.

## Modèle 2 : Liste blanche de commandes

Dans [AGENTS.md](/fr/guide/customization/agents-md/writing-effective-instructions/) :

```md
Autorisé sans redemander : pnpm test, pnpm lint, git status, git diff
Confirmation obligatoire à chaque fois : git push, npm publish, database migrate
```

En cas de conflit avec la politique hébergée, la règle **la plus stricte** l'emporte.

## Modèle 3 : Fusion en deux phases

1. Codex ouvre une PR brouillon ou une branche locale
2. CI humain + revue, puis fusion

Cloud : voir [Créer des pull requests](/fr/guide/web-and-cloud/create-pull-requests/).

## Modèle 4 : Reconnaissance en lecture seule

```text
Ce tour en lecture seule : peut lire des fichiers, lancer des tests, curl l'API locale ;
interdiction d'écrire sur le disque et de faire git commit.
```

Pour l'audit, l'apprentissage d'un projet inconnu, le diagnostic de production.

## Quand refuser et recommencer

| Signal | Suggestion |
|---|---|
| Le plan ne correspond pas à l'objectif | Refuser l'exécution ; demander un plan révisé |
| Dérive du périmètre | Arrêter ; découper la tâche |
| Tests ignorés | Refuser la fusion ; exiger une vérification |
| Impossible d'expliquer une commande | Refuser ; exiger une explication |

## Rapport avec Automations

Les tâches sans surveillance doivent aussi prévoir des points de confirmation humaine — voir [Tâches planifiées et en arrière-plan](/fr/skills/automations/scheduled-tasks/).

## Erreurs courantes

- Cocher « toujours autoriser » à long terme sans se rappeler le risque
- Approbation de façade — ne pas lire le diff
- Dire verbalement « ne fais pas n'importe quoi » au lieu d'un mode explicite

## Liste de contrôle d'acceptation

- [ ] Mode d'approbation déclaré avant le début de la tâche
- [ ] Opérations à haut risque avec revue par une seconde personne ou garde CI
- [ ] Politique d'équipe unifiée pour `git push` et commandes similaires

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les orientations officielles actuelles d'OpenAI Developers sur l'autonomie et les limites d'approbation, ainsi que les chapitres vérifiés sur l'approbation, les règles de commande, les PR et l'automatisation ; cette page confirme uniquement les principes stables de collaboration — quelles actions continuent automatiquement et lesquelles s'arrêtent pour approbation humaine.

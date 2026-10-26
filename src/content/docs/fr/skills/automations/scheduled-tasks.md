---
title: Guide complet des tâches planifiées
description: Choisir une tâche autonome ou liée à une conversation, puis définir le projet local, le worktree, les permissions, le prompt et la boucle de contrôle.
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / App de bureau ; CLI et IDE pour préparer et tester"
  checkedAt: "2026-08-26"
locale: fr
source_locale: zh-CN
source_revision: "fa792dc"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Le plus difficile dans une tâche planifiée n’est pas de choisir son heure d’exécution. Chaque exécution sans surveillance doit disposer d’entrées stables, de permissions limitées, d’un résultat facile à examiner et de conditions d’arrêt.

![Boucle de sécurité, de la vérification manuelle à la planification, au contrôle humain et à l’ajustement](/diagrams/scheduled-task-safety-loop-fr.svg)

## À qui cela s’adresse

- Aux particuliers qui veulent produire un rapport quotidien ou hebdomadaire, vérifier la documentation ou suivre des PR.
- Aux développeurs qui lancent périodiquement des tâches de maintenance dans un projet local ou un worktree isolé.
- Aux responsables qui évaluent les permissions, le traitement des échecs et les Skills partagés par l’équipe.

## Limites des interfaces

| Interface | Possibilités | Limite essentielle |
|---|---|---|
| ChatGPT Web | Créer, gérer et consulter les exécutions ; utiliser des fichiers importés, des outils connectés, des Skills et des Plugins | N’accède pas directement aux dossiers de l’ordinateur |
| App de bureau ChatGPT | Créer et gérer ; choisir un projet local ou un Git worktree | Pour les fichiers locaux, l’ordinateur doit être allumé, l’App en cours d’exécution et le projet disponible |
| Codex CLI | Préparer et tester manuellement prompts, Skills et scripts | Pas d’interface de gestion Scheduled |
| Extension IDE | Vérifier commandes et modifications dans le workspace | Pas d’interface de gestion Scheduled |

## 1. Choisir une tâche autonome ou liée à une conversation

### Tâche Scheduled autonome

Chaque exécution repart du prompt enregistré et apparaît comme une exécution distincte dans Scheduled. Elle convient aux rapports quotidiens ou hebdomadaires indépendants et aux contrôles de santé des projets. Une seule tâche peut également couvrir plusieurs projets.

### Tâche Scheduled dans une conversation

Elle revient à la même conversation selon le calendrier et conserve le contexte existant. Elle convient au suivi d’un travail long, de l’état d’une PR, d’une recherche continue ou d’un sujet qui doit garder les échanges précédents.

Critère de choix : si chaque exécution doit « recommencer », choisissez une tâche autonome ; si elle doit poursuivre la même question dans son contexte, choisissez une tâche liée à la conversation.

## 2. Choisir les ressources d’exécution

### Exécution sur le Web

Placez les instructions durables dans le prompt de la tâche ou un Skill. Mettez les ressources nécessaires dans les fichiers importés, un Project ou les services connectés. N’écrivez pas « lis latest.csv sur mon bureau » : le Web n’accède pas directement aux chemins locaux.

### Projet local dans l’App de bureau

Pour un dépôt Git, vous pouvez choisir :

- **Projet local** : travailler directement dans le checkout principal, avec un risque de toucher aux fichiers que vous modifiez en ce moment.
- **Worktree dédié** : isoler les modifications en arrière-plan du travail en cours ; adapté aux tâches qui modifient des fichiers.

Un projet hors Git s’exécute directement dans son répertoire. Les tâches fréquentes en worktree peuvent accumuler des arbres de travail : archivez les exécutions inutiles pour éviter d’en conserver un grand nombre par inadvertance.

## 3. Vérifier d’abord manuellement

Dans une conversation ordinaire, exécutez d’abord exactement le même prompt, avec le même modèle, le même niveau de raisonnement et les mêmes outils. Vérifiez au minimum que :

- les entrées restent compréhensibles sans explication donnée sur le moment ;
- en l’absence de changement, la tâche se termine sans bruit ;
- le résultat peut être examiné rapidement par une personne ;
- les commandes, Skills et outils connectés fonctionnent ;
- si une ressource ou une permission manque, la tâche s’arrête et l’explique au lieu de deviner.

Examinez les premières exécutions planifiées avant d’ajuster le prompt ou la fréquence.

## 4. Exemple de prompt à adapter

```text
Crée une tâche Scheduled autonome :

Nom : vérification hebdomadaire des liens cassés de la documentation
Horaire : chaque lundi à 09:00, dans le fuseau horaire actuel
Lieu d’exécution : worktree dédié du projet Git actuel

À chaque exécution :
1. Lis uniquement docs/, src/content/docs/, examples/ et public/diagrams/.
2. Exécute pnpm check:links.
3. Si la vérification réussit, indique seulement le nombre de fichiers et de
   liens vérifiés ; ne modifie aucun fichier.
4. Si elle échoue, liste « fichier source, cible invalide, correction suggérée » ;
   ne corrige pas les liens automatiquement.
5. N’utilise pas le réseau, n’installe aucune dépendance, ne fais ni commit,
   ni push, ni PR.
6. Si la commande manque, si une dépendance est absente ou si le résultat est
   incertain, arrête-toi et précise ce qu’une personne doit traiter.

Condition de fin : termine cette exécution après un seul rapport examinable ;
ne réessaie pas.
```

Cet exemple précise l’horaire, le projet, la portée des lectures, la commande, les cas de réussite et d’échec, les actions interdites et la condition d’arrêt. La planification ne fait que déclencher de nouvelles exécutions ; elle ne remplace pas la description de la tâche.

## 5. Permissions et contrôle humain

Les tâches planifiées s’exécutent sans surveillance et utilisent les paramètres de sandbox par défaut.

| Mode de sandbox | Résultat habituel |
|---|---|
| read-only | Les modifications de fichiers, l’accès réseau et le contrôle d’App locales échouent |
| workspace-write | L’écriture dans le workspace est permise ; l’écriture hors du workspace, l’accès réseau et le contrôle d’App échouent par défaut |

Commencez par les permissions les plus limitées qui permettent d’accomplir la tâche. Si le réseau ou un accès plus large aux fichiers est nécessaire, définissez une allowlist explicite. N’accordez pas de larges permissions à toute la tâche pour résoudre un seul échec.

Conservez un contrôle humain pour :

- l’envoi de messages ou la publication de contenu à l’extérieur ;
- la modification de l’état de production ;
- la fusion de PR ou un push sur la branche principale ;
- les suppressions en masse, migrations ou changements de permissions ;
- un diff qui dépasse le périmètre attendu ou des tests en échec.

## 6. Prévoir les cas « aucun changement », échec et arrêt

Une tâche durable doit définir trois chemins :

1. **Découverte** : produire les preuves, la gravité et la prochaine étape.
2. **Aucun changement** : décrire brièvement le périmètre contrôlé, sans inventer de problème.
3. **Impossible à terminer** : indiquer la ressource ou permission manquante, puis s’arrêter et attendre une personne.

Pour une tâche de suivi dans une conversation, ajoutez aussi une condition de fin, par exemple : « arrêter lorsque la PR est fusionnée ou fermée, après trois occurrences consécutives de la même erreur, ou lorsqu’une approbation humaine est nécessaire ».

## Une tâche Scheduled n’est pas une CI déclenchée par événement

Si la tâche doit démarrer immédiatement après un `push`, la création d’une PR ou une publication, utilisez une entrée événementielle telle que GitHub Actions, une CI, un webhook ou le Codex SDK. Ne considérez pas une vérification « toutes les minutes » comme un déclencheur précis.

## Liste de vérification

- [ ] Le prompt a été entièrement exécuté dans une conversation ordinaire.
- [ ] Le mode autonome ou lié à une conversation a été choisi.
- [ ] Les ressources Web ou le projet local seront disponibles lors de l’exécution.
- [ ] La sandbox par défaut suffit ; toute permission supplémentaire a une raison précise.
- [ ] Les cas de découverte, d’absence de changement, d’échec et d’arrêt sont définis.
- [ ] Une personne a contrôlé un échantillon des trois premières exécutions.
- [ ] Les worktrees fréquents ont une stratégie d’archivage et de nettoyage.
- [ ] Les écritures importantes conservent une confirmation humaine.

## Sources officielles

- [OpenAI : Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [OpenAI : Sandboxing](https://learn.chatgpt.com/docs/permissions/sandboxing)

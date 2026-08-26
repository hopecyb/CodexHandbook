---
title: "Mémoires et contexte persistant"
description: Comment Codex retient les préférences et les faits entre sessions — capacités, frontières et normes d'équipe.
locale: fr
source_locale: zh-CN
source_revision: 039bc98
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Certains clients Codex supportent **Memory** : garder les préférences ou faits que vous confirmez sur plusieurs tours pour les sessions ultérieures. Cela complète `AGENTS.md` et la configuration projet, mais **ne peut pas** remplacer les normes d'équipe versionnées.

## Contenu

- Ce que la mémoire devrait et ne devrait pas stocker
- Priorité par rapport à AGENTS.md, la fonctionnalité Memories et les instructions projet
- Comment les individus et les équipes devraient gérer le contenu de la mémoire

## Ce pour quoi la mémoire est bonne

Considérez la mémoire comme : **Codex vous aide à retenir ce que vous répétez toujours mais qui ne vaut pas une réexplication à chaque fois.**

Par exemple :

- Vous préférez les explications en chinois
- Vous aimez la conclusion d'abord, puis les détails
- Dans un projet, quel répertoire « backend » désigne par défaut

C'est plus proche de « préférences personnelles à long terme et quelques faits stables », pas un manuel projet ni un coffre de secrets.

## Ce que la mémoire devrait stocker

| Bon choix | Mauvais choix |
|---|---|
| Préférences de code personnelles (langue des commentaires, habitudes d'indentation) | Clés de production, tokens |
| Alias de projet répétés (« backend signifie `services/api` ») | Statut de tâche sprint changeant |
| Faits non sensibles que vous dites explicitement « veuillez retenir » | Normes d'équipe qui appartiennent à Git |

Les normes au niveau équipe devraient aller dans **`AGENTS.md` ou la configuration projet** pour revue et onboarding des nouveaux. Voir [Portée et priorité](/fr/guide/customization/agents-md/scope-and-precedence/).

## Idées reçues courantes

### La mémoire ne « retient pas tout pour toujours »

Beaucoup supposent qu'une fois dit, Codex le retient complètement, durablement et stablement.

Vue plus précise : la mémoire est une couche auxiliaire qui réduit la répétition, mais elle ne peut pas remplacer la documentation et l'information formelle dans le dépôt.

### La mémoire n'est pas pour le consensus d'équipe

Si seule la mémoire de votre compte connaît une règle, les autres ne peuvent pas la voir et elle ne peut pas être revue.

Ce contenu devrait retourner à :

- `AGENTS.md`
- Documentation projet
- Fichiers de configuration

### La mémoire n'est pas pour les informations sensibles

Même si un client supporte la mémoire, vous ne devriez pas stocker :

- tokens
- Données clients
- Comptes internes
- Informations métier non publiées

à long terme.

## Comparaison avec les mécanismes liés

| Mécanisme | Qui peut voir | Comment ça change |
|---|---|---|
| Prompt ponctuel | Tâche actuelle | Vous le tapez |
| Mémoire | Généralement uniquement votre compte/espace de travail | Confirmer en conversation ou gérer dans les paramètres |
| `AGENTS.md` | Tous les collaborateurs du dépôt | PR Git |
| Configuration projet | Par couche de configuration | Fichiers + politique gérée |

## Comment répartir l'information par couches

La mémoire devient confuse quand des informations de durée et de visibilité différentes sont rangées au même endroit.

| Type d'information | Meilleur emplacement |
|---|---|
| Préférence personnelle d'explication | Mémoire |
| Règle d'équipe | `AGENTS.md` ou config projet |
| Convention d'un répertoire | Instructions projet au niveau du répertoire |
| Objectif temporaire | Prompt actuel ou issue |
| Étapes réutilisables | Skill ou modèle de prompt |
| Contrôle automatique | Hook |

Demandez : qui doit le voir, combien de temps cela dure, faut-il une revue de code ? L'accord d'équipe va dans le dépôt ; l'habitude personnelle va en mémoire.

## Utilisation recommandée

1. **Écrire dans le dépôt d'abord** : commandes de test, structure de répertoires, pas de push — ceux-ci ne devraient pas vivre uniquement en mémoire
2. **Utiliser la mémoire pour les préférences personnelles** : comme « expliquer en chinois » ou « commentaires de diff en anglais »
3. **Nettoyer régulièrement** : supprimer la mémoire obsolète après des changements d'architecture majeurs
4. **Projets sensibles** : désactiver ou limiter la mémoire pour éviter la fuite de contexte cross-projet

## Comment décider si quelque chose appartient à la mémoire

Si vous ne savez pas si une information devrait aller en mémoire, demandez :

1. Est-ce une préférence que je répète souvent personnellement ?
2. Est-ce un fait qui reste relativement stable pour un moment ?
3. La collaboration serait-elle inchangée si les autres ne peuvent pas voir cette information ?

Si les trois penchent vers « oui », la mémoire est un meilleur choix.

## Frontières de sécurité

- Ne pas faire de la mémoire un **canal secret** qui contourne les interdictions de `AGENTS.md`
- Ne pas stocker données clients, identifiants ou informations financières non publiées en mémoire
- Les environnements entreprise peuvent désactiver la mémoire — suivre la politique gérée

## Erreurs courantes

- Mettre « la liste d'epics de cette semaine » uniquement en mémoire, invisible aux collaborateurs
- Ne pas mettre à jour d'un côté quand la mémoire est en conflit avec `AGENTS.md`
- Supposer que la mémoire signifie « le modèle retient toujours le dépôt entier »

La mémoire convient le mieux aux « préférences personnelles et quelques faits stables que vous répétez toujours » ; ce n'est pas un substitut à la documentation du dépôt, aux règles d'équipe ou à la gestion des informations sensibles.

## Références
- Documentation mémoire OpenAI Codex (selon version)
---

**Statut :** vérifié  
**Produits concernés :** App / CLI (selon version)  
**Base de vérification :** Recoupement avec la description officielle actuelle de ChatGPT Memory du Help Center OpenAI et les chapitres vérifiés du handbook sur instructions projet, préférences personnelles et frontières de sécurité ; le contenu de la page se limite au principe stable que la mémoire convient aux préférences personnelles et quelques faits stables et ne remplace pas les règles du dépôt ou la gestion des informations sensibles.  
**Dernière vérification :** 2026-07-26

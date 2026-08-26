---
title: Autorisations et bac à sable
description: Suivez une chaîne de décision unique pour comprendre le bac à sable, les approbations, l'accès au réseau et les limites d'exécution locale ou Cloud.
locale: fr
source_locale: zh-CN
source_revision: 6b29dc6
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 14
---

Pour utiliser Codex en toute sécurité, il faut distinguer deux niveaux de contrôle : **le bac à sable détermine la portée technique maximale, tandis que la politique d'approbation détermine si Codex doit vous consulter avant de franchir la limite actuelle.**

![Flux du bac à sable et des approbations Codex : une action rencontre la limite du bac à sable, demande une approbation humaine pour la franchir, puis produit des preuves de vérification](/diagrams/sandbox-approval-flow-fr.svg)

## Retenir cette distinction

| Contrôle | Question traitee | Objets types |
|---|---|---|
| Bac à sable | Jusqu'où cette action peut-elle aller ? | Fichiers du projet, chemins externes, fonctions système, réseau |
| Politique d'approbation | Faut-il consulter une personne avant de franchir la limite actuelle ? | Installation de dépendances, accès réseau, écriture externe, lancement d'applications |
| Contrainte de la tâche | Que faut-il faire ou ne pas faire dans cette tâche ? | Répertoires autorisés, actions interdites, commandes d'acceptation |
| Révision humaine | Le résultat exécuté est-il acceptable ? | Diff, journaux, tests, effets de bord externes |

Les contraintes de la tâche ne remplacent pas le bac à sable, et le bac à sable ne remplace pas la révision finale. Ils encadrent respectivement l'intention, les limites d'exécution et l'acceptation du résultat.

## Comment une action franchit les contrôles de sécurité

Lorsque Codex s'apprête à exécuter une commande ou à appeler un outil :

1. Déterminez si l'action reste dans le bac à sable actuel.
2. Si c'est le cas, elle est exécutée et sa sortie est consignée ; aucune demande n'est nécessairement affichée.
3. Si elle sort du périmètre, Codex demande une autorisation conformément à la politique, ou l'action est refusée.
4. Vous pouvez la refuser, exiger une action plus restreinte ou n'approuver que cette opération explicite.
5. Après l'exécution, examinez le diff, les tests et l'état du système externe afin de vérifier le résultat.

Le bac à sable limite également les processus enfants et les commandes lancés par Codex. Une action placée dans un script ne contourne pas ces limites.

## Les limites locales et Cloud diffèrent

| Environnement | Isolation principale | Réseau | Points à contrôler |
|---|---|---|---|
| Tâche locale dans App / CLI / IDE | Bac à sable du système d'exploitation et politique d'approbation actuelle | Une tâche locale ne doit pas supposer l'accès à Internet ; approuvez-le ou configurez-le explicitement | Périmètre du workspace, commande, chemin externe, motif de l'accès réseau |
| Tâche Cloud | Conteneur isolé géré par OpenAI | La phase setup peut utiliser l'accès configuré ; l'accès de l'Agent est désactivé par défaut sauf activation explicite | Dépôt, environnement, domaines autorisés, diff renvoyé, preuves de vérification |

Les Secrets Cloud servent pendant la phase setup et sont retires avant la phase Agent. Appliquez le principe du moindre privilege et n'ajoutez pas d'identifiants de production sans rapport avec la tâche.

## Quatre contrôles face à une demande d'approbation

### 1. Comparer avec la tâche

Cette action sert-elle directement l'objectif actuel ? « Cela pourrait être utile » ne suffit pas à justifier une approbation.

### 2. Comparer avec le périmètre

L'action atteint-elle le projet, un répertoire externe, le réseau ou une application système ? Plus les chemins, domaines et commandes sont précis, plus la décision est simple.

### 3. Examiner les effets de bord

S'agit-il uniquement de lire, ou l'action va-t-elle écrire des fichiers, installer un logiciel, envoyer des données ou modifier un état distant ? Les effets de bord externes demandent plus de prudence que les modifications locales réversibles.

### 4. Prevoir vérification et récupération

Comment vérifier la réussite ? Peut-on annuler l'action en cas d'échec ? Si aucune réponse n'est claire, demandez à Codex une explication ou une solution plus limitée.

## Exemple : installer des dépendances

Supposons que Codex demande à exécuter :

```bash
pnpm install
```

Ne décidez pas uniquement selon votre familiarité avec la commande. Vérifiez que :

- la tâche exige réellement les dépendances manquantes ;
- la commande s'exécute dans le bon dépôt ;
- vous savez quel registre de paquets sera contacté ;
- vous savez si le fichier de verrouillage sera modifié ;
- un test ou un build permettra de vérifier l'installation.

Si la tâche consiste seulement à vérifier du code existant et que les dépendances sont déjà installées, refusez la demande et exigez d'abord l'utilisation de l'environnement actuel.

## Déclarer les limites dans le prompt

```text
Ne modifier que src/auth et tests/auth.
Utiliser d'abord les dépendances installées ; ne pas accéder a Internet ni mettre
a jour les versions. Si un chemin externe ou le réseau est nécessaire, expliquer
l'objectif, la cible et l'opération minimale avant de demander l'autorisation.
Executer pnpm test --filter auth et indiquer la sortie et les risques restants.
```

Ce prompt rend l'intention explicite, mais les limites d'exécution réelles proviennent toujours du bac à sable, de la politique d'approbation et de la configuration gérée par l'équipe.

## Idées reçues courantes

- **Une demande d'approbation signale toujours un danger :** une installation, un accès réseau ou une écriture externe normaux peuvent exiger une approbation ; la nécessité et le périmètre sont déterminants.
- **L'absence de demande garantit une sécurité complète :** l'action peut déjà se trouver dans le bac à sable, mais son résultat doit tout de même être révisé.
- **Une approbation accorde un accès permanent :** la durée et la portée dependent du produit et de la politique ; lisez la demande.
- **Les sous-agents possèdent des autorisations distinctes :** ils héritent du bac à sable et du mode d'autorisation de la tâche principale.
- **Les Hooks remplacent le bac à sable :** les Hooks ajoutent des garde-fous et un audit ; ils ne remplacent pas l'isolation imposée par le système d'exploitation.

Consultez [Approbations et bac à sable de la CLI](/fr/guide/cli/approvals-and-sandbox/) et [Paramètres de l'App de bureau](/fr/guide/desktop-app/settings/) pour les réglages des produits, ainsi que [Contraintes et limites](/fr/prompts/constraints-and-boundaries/) pour la formulation des tâches.

---

**Statut :** verified

**Produits concernés :** App / CLI / IDE / Cloud

**Base de vérification :** comparaison avec les recommandations actuelles de Codex sur le bac à sable, les approbations et la sécurité. Cette page distingue les limites du système d'exploitation, la politique d'approbation, les contraintes de tâche et la révision humaine, puis explique les modèles réseau différents en local et dans Cloud.

**Dernière vérification :** 2026-08-26

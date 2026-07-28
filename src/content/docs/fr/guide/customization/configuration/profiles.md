---
title: "Profils de configuration"
description: Ensembles de configuration nommés pour basculer les combinaisons modèle, bac à sable et approbation — un pour le développement, la revue et la CI.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Profile** permet de sauvegarder un ensemble nommé de configuration (modèle + bac à sable + approbation, etc.) et de basculer de scénario en une étape au lieu de changer les paramètres manuellement à chaque fois.

## Ce que cette page couvre

- Profile versus « changer la configuration par défaut »
- Façons courantes de diviser les Profiles
- Comment les équipes partagent les définitions de Profile

## Ce que les Profiles contrôlent

Si « configuration » est les habitudes de travail par défaut, **Profile** est « un bundle prédéfini pour un scénario ».

Imaginez :

- Un ensemble pour le développement quotidien
- Un pour les dépôts non fiables
- Un pour la revue en lecture seule
- Un pour les tâches automatisées CI

Ainsi vous ne retunez pas une pile d'interrupteurs à chaque fois.

## Exemples typiques de Profile

| Nom de Profile | Intention | Traits (conceptuels) |
|---|---|---|
| `daily` | Développement quotidien | Modèle équilibré, bac à sable standard |
| `strict` | Dépôt non fiable | Approbation forte, réseau limité |
| `review-only` | Revue en lecture seule | Pas d'écriture disque ou lecture seule |
| `ci` | Pipeline | Modèle fixe, non interactif, pas de push |

Champs spécifiques : [Référence de configuration](/guide/reference/configuration-reference/).

## Utilisation (conceptuelle)

1. Confirmer la syntaxe Profile dans la doc officielle (peut être liée à `[profiles.name]` dans `config.toml` ou équivalent)
2. Créer et nommer un Profile
3. Spécifier au lancement : `codex --profile strict` (commande selon `--help`)
4. Noter dans le README : « contributeurs recommandés `daily` ; CI utilise `ci` »

Détail CLI : [Configuration CLI](/guide/cli/configuration/)

## Idées reçues courantes

### Plus de Profiles n'est pas plus flexible

Beaucoup veulent un Profile pour chaque petit scénario et finissent avec une douzaine de noms indistinguables.

Gardez généralement 2–4 les plus utilisés :

- Développement quotidien
- Mode strict
- Revue en lecture seule
- CI

Suffisant pour séparer clairement les frontières de risque.

### Profile n'est pas un substitut à la réflexion

Basculer vers un Profile ne rend pas chaque tâche absolument sûre ou appropriée.

Il vous place seulement dans un état de départ commun ; chaque tâche a encore besoin du jugement du dépôt actuel et du risque.

## Division des responsabilités avec AGENTS.md

| | Profile | AGENTS.md |
|---|---|---|
| Contrôle | Interrupteurs de capacité, modèle, bac à sable | Comment écrire ce projet |
| Committer dans Git | Optionnel (extrait de profile au niveau projet) | Oui |
| Personnel/équipe | Profile personnel en local ; profile d'équipe devrait être PR | Équipe |

## Erreurs courantes

- Dix Profiles par dépôt que personne ne maintient
- Profile `ci` permet encore `git push`
- Noms de Profile en désaccord avec la doc ; les nouveaux utilisent le mauvais

## Pour commencer

En débutant avec les Profiles :

1. Garder un `daily` par défaut
2. Ajouter `strict` pour les dépôts inconnus ou à haut risque
3. Si l'équipe automatise, ajouter `ci` séparément

Cela couvre déjà la plupart des cas courants.

Les Profiles aident à basculer rapidement vers une combinaison par défaut que vous avez déjà pensée pour différents scénarios de risque.

## Références
- Documentation profiles OpenAI Codex
---

**Statut :** obsolète  
**Produits concernés :** CLI / App  
**Note de révision :** Cette page décrit `Profile`, `codex --profile` et la structure de profils partagés trop concrètement ; le matériel officiel actuellement vérifiable est insuffisant pour montrer que ces usages sont largement valides dans les versions présentes. Elle ne devrait pas être marquée `vérifié` jusqu'à ajout du support de documentation formelle.  
**Dernière vérification :** 2026-07-26

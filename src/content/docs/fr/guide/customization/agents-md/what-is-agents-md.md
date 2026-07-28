---
title: "Qu'est-ce que AGENTS.md"
description: Fichier d'instructions projet persistant — un « contrat de collaboration » pour Codex, pas une encyclopédie d'architecture.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

`AGENTS.md` est un fichier d'**instructions projet Markdown** dans le dépôt (ou un sous-répertoire). Codex le lit en entrant dans le projet pour s'aligner sur le style de code, les exigences de test, les conventions de commit et les zones interdites.

Considérez `AGENTS.md` comme les instructions pour « comment Codex doit travailler avec ce projet ».

Ce n'est pas un document d'architecture avancé ni un handbook complet pour les nouveaux employés humains ; ce sont des règles de collaboration projet pour Codex.

## Un concept central

Traitez-le comme un **manuel condensé pour nouveaux arrivants** : uniquement « comment travailler dans ce dépôt », pas l'histoire de l'entreprise.

| Bon pour AGENTS.md | Mauvais choix |
|---|---|
| Comment exécuter les tests, lint, build | Documentation API complète (lien vers la doc officielle) |
| Conventions de répertoires, style de nommage | Des milliers de lignes de décisions de design historiques |
| Interdictions (ex. ne pas modifier `main`, ne pas committer des secrets) | Besoins temporaires qui changent à chaque tâche |
| Messages de commit, listes de contrôle PR | Préférences personnelles sans lien avec le code |

## Pratique minimale viable

Créez `AGENTS.md` à la racine du dépôt :

```md
# Instructions projet

## Build et test
- Installation : `pnpm install`
- Test : `pnpm test` (obligatoire après modifications de logique)
- Vérification de types : `pnpm typecheck`

## Style de code
- Utiliser le mode strict TypeScript
- Nouveaux composants dans `src/components/`, noms de fichiers PascalCase

## Interdit
- Ne pas modifier `pnpm-lock.yaml` sauf si les dépendances changent
- Ne pas committer `.env` ou clés API
- Ne pas exécuter `git push` sans confirmation

## Définition de terminé
- Les tests associés passent
- Aucune nouvelle erreur lint
- Décrire les étapes de vérification dans la description PR
```

Après sauvegarde, dans une nouvelle tâche écrivez uniquement **le delta de cette tâche**, par exemple : « Corriger la mise en page de la page de connexion sur Safari ; acceptation selon AGENTS.md. »

## Idées reçues courantes

### 1. Dois-je répéter ces règles manuellement à chaque fois ?

Généralement non.  
C'est l'une des raisons pour lesquelles `AGENTS.md` existe :
y mettre les **règles projet stables** pour ne pas les réexpliquer à chaque nouvelle tâche.

### 2. Si je l'écris, Codex le suivra toujours à 100 % ?

`AGENTS.md` compte, mais il fonctionne encore avec :

- Les exigences explicites de cette tâche
- Les permissions produit et les mécanismes d'approbation
- Le bac à sable, le réseau et la politique d'équipe

Plus précisément, il aide l'alignement ; ce n'est pas un exécuteur universel.

### 3. Si je ne suis pas programmeur, dois-je quand même m'y intéresser ?

Il faut comprendre l'idée de base.  
Même si vous ne codez pas vous-même, tant que Codex travaille sur un projet au fil du temps, `AGENTS.md` réduit les explications répétées et la dérive.

## Où le mettre

| Emplacement | Portée |
|---|---|
| `AGENTS.md` à la racine du dépôt | Par défaut pour le projet entier |
| `AGENTS.md` en sous-répertoire | Ce répertoire et ses sous-chemins (courant en monorepos) |
| Notes utilisateur | Configuration personnelle ou préférences globales — ne pas mélanger avec les instructions projet |

Portée et gestion des conflits : [Portée et priorité](/guide/customization/agents-md/scope-and-precedence/).

## Différence avec les Skills et les commandes slash

| Mécanisme | Essence | Usage typique |
|---|---|---|
| AGENTS.md | Règles projet persistantes, passives | Style, tests, zones interdites |
| Skill | Paquet de flux de travail réutilisable (`SKILL.md`) | Liste de contrôle de release, flux de revue spécialisé |
| Commande slash | Raccourci que vous activez | `/review`, flux de travail ponctuels |

Utilisez `AGENTS.md` pour les règles projet ; les **ensembles d'étapes répétables et partageables** conviennent mieux en tant que [Skill](/skills/overview/).

## Comment décider où écrire quelque chose

Si vous ne savez pas où une phrase appartient, utilisez cette règle :

- **Cette règle tient à long terme** : mieux dans `AGENTS.md`
- **C'est spécial pour cette tâche seulement** : dans le prompt de tâche actuel
- **C'est une procédure réutilisable** : envisager un Skill

Par exemple :

- « Ce dépôt valide avec `pnpm test` » → `AGENTS.md`
- « Modifier uniquement la page de connexion cette fois ; ne pas toucher l'inscription » → tâche actuelle
- « Exécuter le même flux de vérification avant chaque release » → mieux en tant que Skill

## Erreurs courantes

- Fichier trop long ; le modèle ne lit que la première partie — **mettre les contraintes strictes dans les 30 premières lignes**
- Écrire des instructions à haut risque comme « toujours push automatiquement », en conflit avec [Permissions et approbations](/guide/foundations/permissions-and-approvals/)
- Personne dans l'équipe ne le maintient ; la doc ne correspond pas aux vraies commandes de script

## Frontières de sécurité

`AGENTS.md` **ne peut pas remplacer** le bac à sable et l'approbation. Même si vous écrivez « exécuter n'importe quelle commande librement », le produit peut encore exiger une confirmation ; la politique gérée par l'équipe peut renforcer davantage.

`AGENTS.md` indique à Codex comment ce projet fonctionne habituellement — pas ce qu'il faut faire dans cette tâche spécifique.

## Références
- Documentation OpenAI Codex sur le contexte projet
---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Recoupement avec la description publique actuelle d'OpenAI Developers sur le contexte projet, les limites de tâche et les contraintes d'approbation/bac à sable ; le contenu de la page se limite au but, aux frontières et aux modèles courants pour `AGENTS.md`, sans détails de priorité obligatoire non vérifiés.  
**Dernière vérification :** 2026-07-26

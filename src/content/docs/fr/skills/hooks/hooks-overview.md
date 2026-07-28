---
title: Vue d'ensemble des Hooks
description: Insérer validation, journalisation et audit aux points clés de l'Agent — compléter sécurité et conformité d'équipe.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

En bref, un Hook insère automatiquement une vérification ou un journal à un point clé.

Les **Hooks** permettent d'exécuter une logique personnalisée à des nœuds fixes de la chaîne d'exécution Codex — par exemple scan de secrets pre-commit, journalisation d'appels MCP ou blocage de commandes dangereuses. Ils complètent la politique et l'observabilité depuis [approbations et sandbox](/guide/cli/approvals-and-sandbox/).

## Contenu

- Comment les Hooks diffèrent des Skills et MCP
- Cas d'usage typiques en équipe
- Principes de sécurité lors de la conception des Hooks

## Pourquoi les équipes utilisent les Hooks

Même si vous ne écrirez pas les Hooks vous-même, sachez ce que les équipes en font :

- Pourquoi certaines actions ont une porte supplémentaire à un point clé
- Pourquoi on dit « cette vérification est un Hook, pas un Skill »
- Pourquoi certaines règles vivent sur des nœuds système plutôt que dans les prompts

Beaucoup de moments « pourquoi cette vérification supplémentaire ? » en équipe sont des Hooks.

Comparer les options : [Choisir une méthode d'extension](/skills/choosing-an-extension-method/)

## Ce que font les Hooks

| Phase (conceptuelle) | Ce qu'un Hook peut faire |
|---|---|
| Avant appel d'outil | Rejeter commandes avec `rm -rf`, fuite de `.env`, etc. |
| Après appel d'outil | Écrire journaux d'audit vers SIEM |
| Fin de session | Synthétiser les fichiers modifiés |
| Avant création de PR | Vérifier format du numéro d'issue |

## Distinguer Hook et Skill

- **Skill** : Indiquer à Codex « pour ce type de tâche, suivez ce workflow »
- **Hook** : Indiquer au système « à ce nœud, exécutez d'abord une vérification automatique »

Ils résolvent des problèmes différents :

- Skill = instructions de workflow
- Hook = porte ou point d'observation sur le processus

Noms d'événements et format de config exacts : [documentation officielle Hooks](https://developers.openai.com/codex).

## Comparé à Skill / MCP

| | Hooks | Skill | MCP |
|---|---|---|---|
| Déclenchement | Événements système | Invocation utilisateur ou modèle | Requêtes d'outils |
| Objectif | Politique, audit | Instructions de workflow | Systèmes externes |
| Mainteneur | Infra plateforme/équipe | Produit ou ingénierie | Développeurs d'intégration |

## Idées reçues courantes

### 1. Les Hooks remplacent approbation et sandbox

Les Hooks sont une couche de vérification complémentaire — pas la seule limite de sécurité.

### 2. Plus de Hooks = plus sûr

Trop de Hooks lents, lourds et opaques ralentissent le flux et rendent le débogage pénible.

### 3. Les Hooks ne sont pas pour la logique complexe

Les Hooks conviennent au travail :

- Rapide
- Déterministe
- Facile à tester

Ne ajoutez pas une autre couche de raisonnement lourd ici.

## Cas d'usage Hook recommandés en équipe

1. **Détection de fuite de secrets** : Bloquer quand le diff correspond aux motifs de clé AWS
2. **Vérification d'en-tête de licence** : Avertir quand de nouveaux fichiers n'ont pas la notice de copyright de l'entreprise
3. **Journalisation de conformité** : Qui, quand, actions d'écriture sur quel dépôt (masquées)
4. **Alignement avec CI** : Règles Hook locales partagent la source avec GitHub Action quand possible

## Quand les Hooks conviennent

Une vérification appartient à un Hook si :

- Elle se produit toujours au même nœud
- Les personnes ne doivent pas la mémoriser manuellement à chaque fois

Exemples : scan de données sensibles, validation de nommage, enregistrements d'audit.

## Principes de conception

- **Rapide** : les timeouts Hook ralentissent chaque appel d'outil
- **Déterministe** : éviter d'appeler un LLM dans un Hook
- **Testable** : tests unitaires des scripts Hook avec entrée fixe
- **Désactivable** : l'équipe peut contourner en urgence (avec audit)

Angle sécurité : roadmap `11-team-enterprise` ; les utilisateurs personnels commencent souvent par des Hooks journal en lecture seule.

Les Hooks conviennent aux vérifications automatiques aux points clés du système. Ce n'est pas des instructions de workflow et ne remplace pas l'approbation.

## Erreurs courantes

- Scripts Hook avec accès écriture réseau deviennent une nouvelle surface d'attaque
- Règles dupliquées et contradictoires avec `AGENTS.md`
- Config Hook non versionnée — environnements des collègues divergent

## Liste de validation

- [ ] Peut nommer le scénario Hook dont l'équipe a le plus besoin
- [ ] Message d'erreur clair pour les développeurs quand le Hook échoue
- [ ] Config incluse en revue de code

## Sources de référence
- Documentation OpenAI Codex Hooks
---

**Statut :** obsolète  
**Produits concernés :** CLI / App (selon version)  
**Base de vérification :** Cette page dépend des capacités Hook actuelles, nœuds typiques et gouvernance d'équipe ; la documentation publique officielle manque de détail — réécriture nécessaire pour les clients actuels.  
**Dernière vérification :** 2026-07-26

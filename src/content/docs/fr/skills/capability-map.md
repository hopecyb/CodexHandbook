---
title: Carte des capacités d'extension
description: Relations entre Skill, MCP, Plugin, Hooks, commandes slash et AGENTS.md.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Beaucoup de mécanismes d'extension — et de confusion. Cette page décrit les **relations**, pas les étapes d'installation.

## Schéma

![D'un prompt à un pack de capacités d'équipe](/diagrams/codex-capability-ladder-fr.svg)

```text
                    ┌─────────────────┐
                    │  Objectif tâche  │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         ▼                   ▼                   ▼
   ┌───────────┐      ┌─────────────┐     ┌──────────────┐
   │ AGENTS.md │      │ Prompt/modèle│     │ Cmd. slash   │
   │ règles     │      │ cette tâche  │     │ déclench. vous│
   └───────────┘      └─────────────┘     └──────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             ▼
                    ┌─────────────────┐
                    │      Skill       │
                    │ workflow réutil. │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌──────────┐  ┌─────────────┐
        │   MCP    │  │  Hooks   │  │  Scripts    │
        │ outil ext│  │ audit     │  │ dans Skill  │
        └──────────┘  └──────────┘  └─────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Plugin       │
                    │ pack distribué   │
                    └────────┬────────┘
                             ▼
                    ┌─────────────────┐
                    │  Automations     │
                    │ planifié/sans    │
                    │ surveillance     │
                    └─────────────────┘
```

## Tableau comparatif

| | Qui déclenche | Persistance | Systèmes externes | Distribution équipe |
|---|---|---|---|---|
| AGENTS.md | chargement auto | haute (Git) | facile |
| Prompt | vous | faible | difficile |
| Commande slash | vous | moyenne | selon produit |
| Skill | vous ou match modèle | haute | facile (répertoire/Git) |
| MCP | appel outil modèle | config | gouvernance |
| Plugin | après installation | haute | canal officiel/équipe |
| Hooks | événements système | config | fréquent en entreprise |
| Automations | temps/événement | config | flux d'approbation |

## Correspondances courantes

| Besoin | Piste |
|---|---|
| style de code et commandes de test unifiés | AGENTS.md |
| standardiser « revue PR » | Skill |
| lire tickets Jira/Linear | MCP |
| pack d'intégration pour toute l'équipe | Plugin |
| scan secrets avant chaque commit | Hooks |
| brouillon de rapport hebdo le lundi | Automations (+ publication manuelle) |

## D'une tâche à un pack d'équipe

Cette progression aide à décider quand durcir un workflow :

| Étape | Forme | Quand l'utiliser |
|---|---|---|
| Prompt ponctuel | Consigne dans la conversation en cours | Usage unique ou exploration |
| Modèle | Structure fixe objectif/contexte/contraintes/acceptation | La tâche se répète, mais les étapes bougent encore |
| Skill | `SKILL.md` avec modèles, références ou scripts | Processus stable, critères de réussite clairs |
| Subagent | Rôle spécialisé dans un contexte séparé | Revue, tests, débogage ou recherche bien bornés |
| MCP | Outils appelables de systèmes externes | Besoin de tickets, dépôts ou systèmes internes |
| Hook | Vérification ou blocage sur événement | Secrets, formatage, commandes risquées |
| Plugin | Pack installable pour l'équipe | Skills, MCP, Hooks, modèles et documentation livrés ensemble |
| Automation | Tâche planifiée ou déclenchée par événement | Rapports, supervision, revues récurrentes |

Ne commencez pas par concevoir un Plugin. Faites d'abord tourner la tâche une fois, puis observez les étapes répétées, les contrôles à automatiser et les permissions externes vraiment nécessaires.

Logique détaillée : [Choisir une méthode d'extension](/skills/choosing-an-extension-method/).

## Indépendant de l'interface

Ces mécanismes **ne sont pas liés** à une seule UI : CLI, App desktop, IDE — niveaux de support Skill/MCP variables ; voir [comparaison des fonctionnalités](/guide/reference/feature-comparison/) et doc officielle.

---

**Statut :** outdated  
**Produits concernés :** App / CLI / IDE  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cette page fige Skill, MCP, Plugin, Hooks, Automations dans un schéma avec niveaux de support implicites ; les limites et entrées dans la doc publique au 2026-07-26 sont incomplètes — réécriture selon le produit actuel nécessaire.

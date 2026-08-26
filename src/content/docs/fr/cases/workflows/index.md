---
title: Méthodes de flux de travail
description: Méthodes de collaboration reproductibles — non liées à une seule interface produit, avec points de contrôle et critères d'acceptation.
locale: fr
source_locale: zh-CN
source_revision: 2306981
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Les [prompts](/fr/prompts/) enseignent **comment formuler** ; les flux de travail enseignent **comment organiser une tâche entière**. Les méthodes de ce chapitre s'appliquent à App, CLI, IDE et Cloud.

## Pourquoi des flux de travail

Les tutoriels externes racontent souvent une histoire du type « une seule conversation suffit » ; les projets réels ressemblent plutôt à :

```text
Explorer → Planifier → Exécuter → Vérifier → (éventuellement) transfert ou automatisation
```

Sans points de contrôle, les risques sont nombreux : modifier le mauvais répertoire, ne pas lancer les tests, fusionner par erreur, perdre les conclusions quand le contexte s'épuise.

## Flux de travail principaux

| Flux de travail | Problème résolu |
|---|---|
| [Exploration—planification—exécution—vérification](/fr/cases/workflows/explore-plan-execute-verify/) | Chaîne principale générale, adaptée à la plupart des tâches |
| [Brainstormer avant de construire](/fr/cases/workflows/brainstorm-before-building/) | Diverger et converger quand l'approche n'est pas fixée |
| [Travail piloté par la spécification](/fr/cases/workflows/specification-driven-work/) | Rédiger une spécification vérifiable avant l'implémentation |
| [Travail piloté par les tests](/fr/cases/workflows/test-driven-work/) | Les tests guident l'implémentation en premier |
| [Modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/) | Quand s'arrêter, approuver ou refuser |
| [Diagnostiquer avant de corriger](/fr/cases/workflows/diagnose-before-fixing/) | Éviter le « patch au hasard » |
| [Revue avant fusion](/fr/cases/workflows/review-before-merge/) | Revue structurée avant la fusion d'une PR |
| [Recherche avec sources](/fr/cases/workflows/research-with-sources/) | Recherche, comparaison et vérification des sources |
| [Travail orienté livrables](/fr/cases/workflows/artifact-first-work/) | Convenir des livrables d'abord, puis déduire les étapes |
| [Coordination multi-Agent](/fr/cases/workflows/multi-agent-coordination/) | Parallélisme et répartition des tâches |
| [Gestion des tâches longues](/fr/cases/workflows/long-running-task-management/) | Points de contrôle inter-sessions et conditions de sortie |
| [Reprise après échec](/fr/cases/workflows/failure-recovery/) | Revenir en arrière quand on dévie ou que les tests passent au rouge |
| [Transformer un flux en Skill](/fr/cases/workflows/turn-a-workflow-into-a-skill/) | Écrire les flux répétés sous forme de Skills |

## Autres chapitres liés aux flux de travail

- Qualité : [Capacités fondamentales · Qualité et vérification](/fr/guide/quality/)
- Agent : [Planification](/fr/guide/agent-work/planning/), [Sous-agents](/fr/guide/agent-work/subagents/)
- Capitalisation : [Skills](/fr/skills/overview/), [AGENTS.md](/fr/guide/customization/agents-md/what-is-agents-md/)
- Cas : [Bibliothèque de cas d'usage](/fr/cases/use-cases/)

## Principes de conception

1. **Chaque phase produit un livrable** : plan, diff, rapport de tests, enregistrement de décision
2. **Petits pas par défaut** : des incréments vérifiables valent mieux qu'un énorme changement unique
3. **Échecs récupérables** : savoir annuler et forker un fil pour continuer
4. **Capitaliser quand c'est possible** : à la troisième répétition d'un flux, en faire un Skill ou un modèle

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les chapitres vérifiés actuels sur les prompts, la qualité, le travail Agent et les Skills ; cette page assure uniquement la navigation méthodologique et l'explication des points de contrôle par phase, sans traiter les flux clients spécifiques comme un contrat à long terme.

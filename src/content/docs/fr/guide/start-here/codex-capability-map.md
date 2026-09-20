---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page présente uniquement les modules de capacités et leurs chapitres de référence ; ses liens internes, son schéma et sa correspondance entre modules ont été vérifiés, et elle ne dépend pas de faits produit susceptibles de changer."
  checkedAt: "2026-07-26"
title: Carte des capacités
description: Vue d'ensemble des prompts, outils, extensions, agents multiples et de la gouvernance.
locale: fr
source_locale: zh-CN
source_revision: "1a4cd98"
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 7
---

Le manuel compte de nombreux modules. Au début, on peut facilement perdre de vue leurs liens. Cette page rassemble les capacités principales sur une même carte.

Deux difficultés reviennent souvent :

- Passer d'une page à l'autre sans savoir quoi apprendre en premier
- Se plonger dans MCP, l'automatisation et les extensions avant de maîtriser les bases

Comprendre d'abord la structure générale facilite ensuite la recherche d'un sujet précis.

Codex est plus qu'une fenêtre de chat. Ses capacités forment plusieurs couches :

```text
Objectifs et prompts
  → Contexte (projet / fichier / conversation)
    → Outils (fichiers, terminal, recherche, navigateur…)
      → Travail de l'agent (planification, exécution, guidage, transmission)
        → Vérification de la qualité et approbation humaine
      → Extensions et automatisation (Skills / MCP / Hooks… ; avancé)
            → Gouvernance d'équipe (jalon ultérieur)
```

## Structure générale

Vous pouvez considérer Codex comme trois couches :

- La première : comment exprimer ce que vous voulez qu'il fasse
- La deuxième : le contexte et les outils sur lesquels il s'appuie
- La troisième : comment conserver et réutiliser cette façon de travailler

Au début, les deux premières sont les plus importantes. Décrivez clairement la tâche et apprenez à vérifier le résultat avant d'aborder les extensions avancées.

## Idées reçues

### Plus avancé ne veut pas dire à apprendre en premier

Skills, MCP, Hooks et l'automatisation sont puissants, mais servent surtout à gagner en efficacité et à réutiliser des méthodes à grande échelle. Ils ne règlent pas les difficultés initiales les plus courantes.

Si les prompts, le contexte et le choix des outils restent flous, les extensions risquent également d'être mal employées.

### Cette carte peut guider l'ordre de lecture

Inutile de lire toutes les pages dans l'ordre du site. Essayez plutôt :

1. Comprendre comment fonctionne Codex
2. Apprendre à formuler une tâche, fournir du contexte et vérifier le résultat
3. Une fois ces étapes maîtrisées, envisager la configuration, les extensions et l'automatisation

## Un ordre pour commencer

1. Lire [Qu'est-ce que Codex ?](/fr/guide/start-here/what-is-codex/)
2. Puis [Choisir votre parcours](/fr/guide/start-here/choose-your-path/)
3. Continuer avec [Bien démarrer](/fr/guide/getting-started/)
4. En cas de blocage, revenir aux [notions fondamentales](/fr/guide/foundations/) et aux [parcours d'apprentissage](/fr/guide/learning-paths/)

## Modules et chapitres de référence

| Capacité | Chapitre de référence |
|---|---|
| Modèles, agents, autorisations, bac à sable | [Notions fondamentales](/fr/guide/foundations/) |
| Utilisation de chaque produit | [Guides des produits](/fr/guide/) |
| Prompts, contexte, outils, qualité | [Compétences essentielles](/fr/guide/) |
| AGENTS.md et configuration | [Personnalisation](/fr/guide/customization/) |
| Skills, MCP, plugins, automatisation | [Extensions et automatisation](/fr/skills/) |
| Méthodes de collaboration réutilisables | [Méthodes de travail](/fr/cases/workflows/) |
| Exemples de bout en bout | [Cas d'usage](/fr/cases/use-cases/) |
| Ordre de lecture | [Parcours d'apprentissage](/fr/guide/learning-paths/) |

Pour une vue d'ensemble des extensions, consultez la [carte des capacités d'extension](/fr/skills/capability-map/). Pour comparer les produits, consultez le [comparatif des fonctions](/fr/guide/reference/feature-comparison/).

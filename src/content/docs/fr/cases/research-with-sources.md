---
title: Recherche avec sources
description: Utiliser Codex pour la recherche, la comparaison et la vérification des faits — produire des sources et conclusions traçables.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**La recherche avec sources** exige que chaque conclusion puisse revenir à une **source** (documentation officielle, article, fichier du dépôt), et non à une affirmation confiante du modèle. Convient au choix technologique, à la comparaison concurrentielle, à la revue de littérature et à l'interprétation de politiques.

## Ce que cette page résout

- Quand utiliser la [recherche web](/guide/tools/web-search/) vs. le dépôt en lecture seule
- Comment exiger un format de citation et l'annotation d'incertitude
- Lien avec [Valider les sources](/guide/quality/validate-sources/)

## Approche minimale viable

```text
Étudier « l'adéquation de Rust et Go dans le contexte de ce dépôt » :
1. Lister d'abord les dimensions d'évaluation (performance, écosystème, familiarité de l'équipe)
2. Chaque conclusion accompagnée d'une URL source ou d'un chemin @fichier du dépôt
3. Marquer « à confirmer » ce qui ne peut pas être vérifié
4. Recommandation finale et questions ouvertes
Ne modifiez pas le code.
```

## Flux de travail recommandé

```text
Définir le problème et les exclusions
    → Collecter les sources (recherche / lecture de docs / MCP)
    → Tableau comparatif + avantages/inconvénients
    → Annoter la confiance et les sources conflictuelles
    → Décision humaine ou passage à la spécification
```

Pour les longues recherches, découper en plusieurs tours ; voir [Gestion des tâches longues](/prompts/long-running-tasks/).

## Erreurs courantes

- Ne pas exiger d'URL, livrable impossible à vérifier
- Mélanger blogs obsolètes et docs officielles sans le signaler
- Transformer directement les conclusions en instructions d'implémentation, sans spécification
- Téléverser des fichiers confidentiels vers des outils externes non autorisés

## Limites de sécurité

- Les documents internes non publics ne doivent pas transiter par des MCP non contrôlés
- Prix, versions, disponibilité régionale : faits volatils à dater selon la [politique de vérification](/guide/start-here/handbook-version-policy/)

## Checklist d'acceptation

- [ ] Les conclusions clés ont au moins une source cliquable ou traçable
- [ ] Les informations conflictuelles sont présentées côte à côte
- [ ] Les éléments « incertains » sont listés, sans être déguisés en faits
- [ ] Aucune donnée sensible dans le prompt ou les journaux

## Chapitres connexes

- [Gérer l'incertitude](/guide/quality/handle-uncertainty/)
- [Cas : refactorisation de documentation avec revue](/cases/use-cases/content-creation/refactor-docs-with-review/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Learn a new concept », en mettant l'accent sur la transformation de contenus denses en livrables d'apprentissage ou de recherche vérifiables ; cette page exige en outre une URL ou un chemin de fichier par conclusion et des éléments « à confirmer » explicites, conforme aux bonnes pratiques actuelles de recherche sourcée.

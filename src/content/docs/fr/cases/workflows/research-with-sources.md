---
title: Recherche avec sources
description: Utiliser Codex pour la recherche, la comparaison et la vérification des faits — sources et conclusions traçables.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La **recherche avec sources** exige que chaque conclusion clé puisse être rattachée à une source précise — documentation officielle, article ou fichier du dépôt — et non à une affirmation sans fondement. Cela convient au choix technique, à la comparaison concurrentielle, à la revue de littérature et à l'interprétation de politiques.

## Ce que couvre cette page

- Quand utiliser la [recherche web](/guide/tools/web-search/) vs le dépôt en lecture seule
- Comment exiger un format de citation et des marqueurs d'incertitude
- Comment associer [Valider les sources](/guide/quality/validate-sources/)

## Approche minimale viable

```text
Rechercher « Rust vs Go dans le contexte de ce dépôt » :
1. Lister d'abord les dimensions d'évaluation (performance, écosystème, familiarité de l'équipe)
2. Joindre une URL source ou un chemin @dans le dépôt à chaque conclusion
3. Marquer les éléments non vérifiables comme « à confirmer »
4. Terminer par une recommandation et des questions ouvertes
Ne pas modifier le code.
```

## Flux de travail recommandé

```text
Définir la question et les exclusions
    → collecter les sources (recherche / lire la doc / MCP)
    → tableau comparatif + avantages/inconvénients
    → indiquer la confiance et les sources en conflit
    → décision humaine ou passage à la phase spécification
```

Pour une recherche longue, découper en plusieurs tours — voir [Gestion des tâches longues](/cases/workflows/long-running-task-management/).

## Erreurs courantes

- Pas d'URL exigée — sortie impossible à revérifier
- Mélanger blogs obsolètes et doc officielle sans le signaler
- Traiter les conclusions de recherche comme des ordres d'implémentation, en sautant la spécification
- Téléverser des données confidentielles vers des outils externes non autorisés

## Limites de sécurité

- Le matériel interne non publié ne doit pas sortir via un MCP non contrôlé
- Les faits volatils (prix, versions, disponibilité régionale) doivent porter une [date de vérification](/guide/start-here/handbook-version-policy/)

## Liste de contrôle d'acceptation

- [ ] Les conclusions clés ont au moins une source cliquable ou traçable
- [ ] Les informations contradictoires sont présentées côte à côte
- [ ] Les éléments « incertains » sont listés, pas déguisés en faits
- [ ] Aucune donnée sensible dans les prompts ou journaux

## Chapitres connexes

- [Gérer l'incertitude](/guide/quality/handle-uncertainty/)
- [Cas : Refactoriser la doc avec revue](/cases/use-cases/content-creation/refactor-docs-with-review/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Recoupement avec les capacités publiques actuelles d'OpenAI Developers sur la recherche web et la recherche avec sources, ainsi que les chapitres vérifiés sur la recherche web, la validation des sources, la gestion de l'incertitude et la politique de version ; cette page confirme uniquement la méthode stable selon laquelle les conclusions clés doivent être traçables et les conflits/incertitudes explicitement indiqués.

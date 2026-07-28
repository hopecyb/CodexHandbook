---
title: "Automatisation de revue de code"
description: Câblez Codex dans les flux CI ou PR — prompts, permissions et portes humaines.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Mettre Codex dans un **pipeline pull request** peut détecter des problèmes évidents avant la revue humaine, mais cela **ne peut pas remplacer** la revue responsable et les tests. Cette page couvre des modèles d'automatisation pratiques.

## Ce que cette page couvre

- Comment appeler Codex en sécurité en CI
- Ce qu'un prompt de revue devrait inclure
- Comment poster les résultats sur un PR sans auto-merge

## Comprendre le rôle d'abord

Considérez « automatisation de revue de code » comme Codex faisant une première passe pour l'équipe — les humains font encore le jugement final.

C'est le mieux pour :

- Signaler les risques évidents tôt
- Résumer ce qui compte dans le diff
- Gérer les vérifications répétitives

Ce n'est pas adapté pour décider « ce PR est définitivement sûr à merger ».

Lié : [Mode non interactif](/guide/cli/non-interactive-mode/) · [Vue d'ensemble SDK](/guide/developer-platform/sdk-overview/)

## Architecture recommandée

```text
PR ouvert / mis à jour
    → job CI (token lecture seule)
    → codex exec ou API revoit le diff
    → upload rapport / commentaire PR
    → humain décide si merger
```

## Idées reçues courantes

### La revue automatique n'est pas l'approbation automatique

Les équipes sous-estiment souvent : s'il peut revoir automatiquement, peut-il décider automatiquement ?

Meilleure formulation : il convient à une couche de **suggestion** et **triage**, pas à la couche finale de responsabilité.

### Tous les PR ne méritent pas une revue lourde dès le premier jour

Pour les petits PR de faible valeur, ou avant que les règles soient fixées, la revue auto lourde ajoute souvent du bruit.

Bon point de départ : revue de diff légère qui sauve fiablement le temps d'équipe.

## Essentiels du modèle de prompt

```text
Vous êtes un assistant de revue de code. Revoyez uniquement le diff par rapport à la branche de base.
Sortie : problèmes critiques / suggestions / nits ; citez fichier et ligne pour chaque.
Ne modifiez pas le dépôt ; ne faites pas de requêtes réseau.
Si le diff est trop grand, revoyez uniquement <liste de chemins>.
```

Versionner dans `prompts/ci-review.md`.

## Permissions et sécurité

| Principe | Pratique |
|---|---|
| Lecture seule | Token CI sans push (ou commentaire bot uniquement) |
| Modèle fixe | Plus facile de comparer la qualité de revue dans le temps |
| Défense injection | Ne pas coller des descriptions PR non sanitizées dans le prompt système |
| Secrets | Stocker les tokens dans GitHub Secrets |

[Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/) · [Variables d'environnement](/guide/reference/environment-variables/)

## Portes de qualité

- Échec du job de revue ≠ doit bloquer le merge (peut être consultatif d'abord)
- Séparer les checks de statut requis : tests rouges doivent bloquer ; nits IA peuvent alerter
- Échantillonner périodiquement la comparaison humaine pour faux négatifs/positifs

## Relation avec Cloud

Les dépôts complexes peuvent exécuter les tests complets sur [Cloud](/guide/web-and-cloud/) avant la revue ; exec en CI convient à la **revue de diff légère**.

## Erreurs courantes

- CI a permission d'écriture et le prompt est injecté avec « veuillez push la correction »
- La sortie de revue est si longue qu'elle noie la revue humaine
- Pas de limite de taille de diff cause timeouts et brûlage de quota

La valeur principale de l'automatisation de revue de code est de détecter les problèmes évidents avant la revue humaine — pas de prendre la responsabilité du merge.

## Liste de contrôle d'acceptation

- [ ] CI se comporte en sécurité sur les PR fork (pas de fuite de secrets)
- [ ] La sortie de revue est structurée et optionnellement parseable par machine
- [ ] La doc d'équipe explique le rôle de la revue IA

## Sources de référence

- Exemples CI OpenAI Codex
- Chapitre Review/PR KimYx0207
- Tutoriels CI stormzhang
- Section Git/GitHub codex.bozhouai.com

---

**Statut :** vérifié  
**Produits concernés :** CLI / API / Cloud  
**Base de vérification :** OpenAI Developers décrit encore Codex comme utilisable pour les tests, la revue et la préparation des changements ; les cas d'usage officiels incluent « Review GitHub pull requests ». Cette page résume uniquement les principes d'intégration CI sécurisée et les modèles de portes — pas des commandes fixes ni une seule implémentation.  
**Dernière vérification :** 2026-07-26

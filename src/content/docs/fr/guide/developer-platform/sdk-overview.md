---
title: "Vue d'ensemble SDK"
description: Démarrez des tâches Codex depuis votre application via le SDK officiel — concepts d'authentification, sessions et gestion d'erreurs.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Le SDK (nom et langage selon la [doc officielle](https://developers.openai.com/codex)) permet de créer des tâches, interroger le statut et récupérer les résultats depuis **votre propre service**, pas seulement via le TUI terminal.

Si « SDK » est nouveau pour vous, considérez-le comme une boîte à outils de développement pour que les programmes appellent Codex — pas une UI que vous cliquez.

En d'autres termes, il convient quand **votre système appelle Codex**. Pour des tâches ponctuelles, vous n'avez généralement pas encore besoin du SDK.

## Ce que cette page couvre

- Quand utiliser le SDK vs CLI `exec`
- Authentification et isolation tenant
- Comment associer avec webhooks et queues

Vue d'ensemble plateforme : [Plateforme développeur](/guide/developer-platform/)

## SDK vs CLI

| | SDK | CLI `exec` |
|---|---|---|
| Point d'intégration | Services backend, outils internes | Shell, GitHub Actions |
| Gestion d'état | Votre code la possède | Code de sortie du processus |
| Idéal pour | Produits multi-tenant, UI personnalisée | Pipelines simples |

Beaucoup d'équipes utilisent **CLI en CI, SDK en produit**.

## Idées reçues courantes

### 1. Quelle est la différence entre SDK et CLI ?

Approximativement :

- **CLI** : humains ou scripts appellent depuis le terminal
- **SDK** : vous écrivez du code pour intégrer Codex dans votre service

### 2. Dois-je apprendre le SDK en premier ?

Généralement non.

Si vous voulez principalement apprendre Codex, les points d'entrée locaux et la CLI interactive sont généralement une meilleure première étape.

### 3. Quand le SDK vaut-il le coup ?

Quand vous commencez à avoir des besoins comme :

- Déclencher des tâches Codex depuis votre produit
- Gérer l'état et les résultats des tâches vous-même
- Construire UI, permissions et flux de travail personnalisés

Le SDK convient à « connecter les systèmes programmatiquement », pas comme entrée principale pour les nouveaux utilisateurs Codex.

## Concepts centraux (agnostiques du langage)

1. **Authentification** : clé API org ou délégation OAuth — suivre le scope minimum
2. **Tâche / thread** : une requête utilisateur mappe à un ID traçable
3. **Politique outils** : bac à sable et approbation côté serveur alignés avec les clients
4. **Résultats** : historique des messages, diffs de fichiers, URLs d'artefacts (selon API)
5. **Erreurs** : distinguer réessayable (429) de non réessayable (400)

Index d'erreurs : [Référence d'erreurs](/guide/reference/error-reference/)

## Liste de contrôle d'intégration minimale

- [ ] Essai sur staging avec un dépôt en lecture seule
- [ ] Rédaction des logs ; ne pas logger les prompts utilisateur complets s'ils contiennent des PII
- [ ] Timeout et cancel : abort quand l'utilisateur quitte la page
- [ ] Pin SDK et IDs de modèle

## Connexion à CI/CD

Le SDK peut déclencher Cloud ou runners distants, ou la CI peut callback votre service pour mettre à jour le statut PR. Modèles d'exemple : [Automatisation de revue de code](/guide/developer-platform/ci-cd/code-review-automation/).

## Erreurs courantes

- Utiliser les cookies de session navigateur comme clés API
- Pas de limites de concurrence, pic de quota sous charge
- Auto-merge des PR produits par le SDK

## Sources de référence
- Référence SDK OpenAI Codex
---

**Statut :** vérifié  
**Produits concernés :** API  
**Base de vérification :** Recoupement avec les cas d'usage API/modèle Codex publics actuels d'OpenAI Developers, plus les chapitres vérifiés vue d'ensemble plateforme développeur, CI/CD et non interactif de ce handbook ; cette page ne confirme que la division stable que le SDK convient à l'intégration programmatique, la gestion d'état et l'UI personnalisée.  
**Dernière vérification :** 2026-07-26

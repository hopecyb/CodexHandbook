---
title: Connecter GitHub
description: Connecter Codex Cloud aux repos GitHub — permissions, branches et environnements.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Après avoir connecté GitHub, Codex peut cloner des repos, créer des branches, pousser et ouvrir des PR dans un **environnement distant** — le prérequis pour les workflows Cloud.

## Ce qui est couvert

- Pourquoi la connexion est nécessaire et quelles permissions accorder
- Checklists avant et après connexion
- Comment cela diffère des Tâches locales de bureau

## Schéma de relation

```text
Votre repository GitHub
    ↕ (OAuth / GitHub App — dépend du produit)
Environnement Codex Cloud
    ↕
Tâches Cloud que vous démarrez dans Web/App
```

L'[App de bureau](/guide/desktop-app/) locale peut encore éditer directement le clone de votre machine ; Cloud convient aux **environnements standardisés, exécution en absence de bureau et Approbations mobiles**. Voir [local vs cloud](/guide/foundations/local-vs-cloud/).

## Idées reçues courantes

### 1. J'ai déjà le repo en local — pourquoi connecter GitHub à nouveau ?

Les Tâches Cloud voient le repository distant, pas votre copie locale.

### 2. Une fois connecté, Codex peut voir tous mes changements locaux ?

Les changements locaux non poussés sont généralement invisibles pour Cloud.  
C'est un point de confusion fréquent.

### 3. Qu'est-ce qui compte le plus lors de la connexion ?

Confirmer d'abord :

- Si le périmètre repo est trop large
- Comment la protection de branche est configurée
- Si les secrets sont stockés dans la configuration sécurisée de Cloud, pas dans le repo

Après connexion, Cloud voit le repo distant — pas l'état non poussé sur votre ordinateur portable.

## Checklist avant connexion

- [ ] Vous avez accès push au repo cible (ou utilisez une stratégie fork si vous n'avez besoin que de PR)
- [ ] Protection de branche comprise : push direct sur main bloqué ?
- [ ] Secrets pas dans le repo ; Cloud utilise la [configuration Secrets](/guide/web-and-cloud/secrets-and-variables/)
- [ ] Votre organisation autorise les intégrations GitHub tierces

## Étapes recommandées (conceptuel)

1. Ouvrir **connexion GitHub** dans les paramètres Codex Web/Cloud
2. Choisir l'organisation et le périmètre repo (**minimiser la liste des repos**)
3. Lire le texte des permissions OAuth : généralement lire le code et ouvrir des PR ; accès écriture dépend de la Tâche
4. Exécuter une petite Tâche Cloud sur un repo de test pour valider
5. Après succès, définir la branche par défaut et variables d'environnement si nécessaire

L'UI et les boutons exacts dépendent du produit actuel.

## Permissions et sécurité

| Pratique | Pourquoi |
|---|---|
| Utiliser un compte machine ou bot dédié (équipes) | Piste d'audit et départ |
| Ne pas autoriser tous les repos privés | Rayon d'impact plus petit |
| Activer protection de branche + revue requise | Sortie Cloud passe encore la revue humaine |
| Auditer périodiquement les repos connectés | Déconnecter les projets retirés |

## Tâches courantes après connexion

- Implémenter une issue à distance → [Créer une Pull Request](/guide/web-and-cloud/create-pull-requests/)
- Revue PR et suivi → intégration [GitHub](/guide/integrations/github/)
- Combiner avec [Automations](/skills/automations/scheduled-tasks/)

## Erreurs courantes

- Connecter un compte GitHub personnel aux repos org production avec politiques personnelles
- Supposer que Cloud peut accéder aux commits non poussés sur votre machine
- Exécuter des Tâches non bornées sur un grand monorepo dès le premier essai

## Références
- Documentation intégration OpenAI Codex Cloud / GitHub
---

**Statut :** obsolète  
**Produits concernés :** Cloud / Web  
**Note de revue :** Cette page dépend des flux de connexion GitHub actuels, modèles d'autorisation, paramètres de périmètre repo et points d'entrée UI Cloud — détails d'intégration à forte évolution qui nécessitent la documentation officielle de connexion actuelle avant de retourner à `verified`.  
**Dernière vérification :** 2026-07-26

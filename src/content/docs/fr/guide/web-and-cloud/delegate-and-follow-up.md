---
title: Déléguer et suivre
description: Confier des Tâches à Cloud depuis l'App, l'IDE ou le téléphone — et revoir, approuver et itérer après avoir quitté votre bureau.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

La **délégation** envoie une Tâche à Cloud pour exécution dans un environnement distant ; le **suivi** consiste à vérifier la progression, ajouter du Contexte, approuver les étapes risquées et demander des modifications pendant ou après une Tâche. C'est le workflow central pour progresser loin de votre bureau.

## Ce qui est couvert

- Quand déléguer à Cloud plutôt qu'exécuter en local
- Différences selon les points d'entrée
- Comment suivre efficacement et éviter le « lancer et oublier »

## Comment ce flux fonctionne

Les Tâches Cloud ressemblent généralement à :

- Vous expliquez la Tâche clairement
- Elle s'exécute à distance
- Vous pouvez avoir besoin d'ajouter des contraintes ou approuver en cours de route
- Après la fin, vous revoyez encore les diffs, PR et décidez des prochaines étapes

Cloud déplace seulement l'exécution hors de votre machine — vous gardez la responsabilité du suivi et des décisions.

## Pour qui

| Scénario | Suggestion |
|---|---|
| Builds/tests longs | Déléguer à Cloud ; continuer à travailler en local |
| Trajet / entre réunions | Vérifier le statut sur téléphone ; approuver les étapes critiques |
| Environnement standardisé nécessaire | Cloud + [config environnement](/guide/web-and-cloud/cloud-environments/) |
| Expérimentation locale rapide | Préférer [App de bureau](/guide/desktop-app/) ou [IDE](/guide/ide/local-task-workflow/) |

## Quand la délégation est pertinente

Si incertain :

- Encore en itération et vouloir orienter en direct : rester en local
- Runtime long, vouloir partir, ou besoin d'un environnement partagé : déléguer à Cloud

## Checklist avant délégation

- [ ] [GitHub connecté](/guide/web-and-cloud/connect-github/) ; stratégie de branche claire
- [ ] Description de Tâche inclut objectif, périmètre, interdictions et acceptation (voir [anatomie de Tâche](/prompts/task-anatomy/))
- [ ] Commits locaux non poussés requis sont poussés — ou faire le travail en local
- [ ] Secrets et [accès sortant](/guide/web-and-cloud/internet-access/) prêts

## Idées reçues courantes

### 1. Après délégation, je peux l'ignorer

Cela gaspille le plus de temps. Plus vous détectez une dérive tard, plus le retravail est grand.

### 2. Suivi signifie « demander le statut »

Suivi plus utile :

- Compléter le Contexte manquant
- Réduire le périmètre
- Rejeter les opérations non sûres
- Demander des corrections après la fin

### 3. Délégation vs local est soit/soit

Un pattern réel courant :  
**explorer en local → déléguer le long run → finir en local.**

## Délégation par point d'entrée (conceptuel)

| Entrée | Caractéristiques |
|---|---|
| [App de bureau · Tâches locales et Cloud](/guide/desktop-app/local-and-cloud-tasks/) | Même vue projet ; basculer local/Cloud |
| [IDE · Tâches Cloud](/guide/ide/cloud-task-workflow/) | Porte la sélection éditeur et le Contexte des fichiers ouverts |
| Web / mobile | Statut léger, Approbations, suivis courts |

Les boutons et noms dépendent du produit actuel.

## Rythme de suivi recommandé

```text
Déléguer → confirmer que l'environnement a démarré → (optionnel) vérifier les logs en cours
    → approuver les étapes risquées → à la fin revoir diff/PR
    → si insatisfait : ajouter des instructions ou démarrer une Tâche de suivi
```

Un minimum pratique :  
**Après envoi, regarder une fois en cours et une fois à la fin.**

### Intervention en cours de route

- **Ajouter du Contexte** : si fichiers ou contraintes manquants, le dire dans un message de suivi pour préserver l'historique
- **Réduire le périmètre** : si dérive, dire « arrêter de changer X ; faire seulement Y »
- **Approuver** : voir [patterns d'Approbation humaine](/cases/workflows/human-approval-patterns/) — préférer lent et explicite plutôt qu'approuver en masse du shell inconnu

### Après la fin

- Revoir le diff dans le flux [créer PR](/guide/web-and-cloud/create-pull-requests/)
- Valider avec [revue de code Cloud](/guide/web-and-cloud/code-review/) ou checkout de branche locale
- Besoin de plus de changements : déléguer à nouveau sur la même PR ou reprendre en local

## Notifications

Activer [notifications de bureau](/guide/desktop-app/notifications/) ou push mobile pour que les Tâches ne stagnent pas en attente d'Approbation. Les équipes doivent convenir qui peut approuver les repos liés à la production et quand.

## Erreurs courantes

- Délégation vague menant à de grandes refactors non demandées
- Éditions locales à moitié faites pendant que Cloud commence depuis main distant
- Ne jamais vérifier en cours de route ; découvrir la mauvaise direction à la fin
- « LGTM » sur une PR sans exécuter les tests
- Traiter « exécution distante » comme « responsabilité distante »

## Checklist d'acceptation

- [ ] Démarré et terminé avec succès une Tâche Cloud depuis au moins un point d'entrée
- [ ] Ajouté une contrainte efficace pendant que la Tâche s'exécutait
- [ ] Produit une PR ou branche revue par un passage humain de diff

## Références
- Documentation Tâches OpenAI Codex Cloud
---

**Statut :** obsolète  
**Produits concernés :** Cloud / App / IDE / Mobile  
**Note de revue :** Cette page dépend du comportement produit actuel pour démarrer ou suivre des Tâches Cloud depuis l'App, l'IDE, le Web et le téléphone — capacités qui ont changé rapidement ; aligner ligne par ligne avec la doc officielle avant de passer de `outdated`.  
**Dernière vérification :** 2026-07-26

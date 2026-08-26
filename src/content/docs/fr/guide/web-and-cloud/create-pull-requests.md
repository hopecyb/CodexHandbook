---
title: Créer des pull requests
description: Livrez le résultat d'une tâche Cloud sous forme de PR révisable et vérifiable, sans fusion automatique.
locale: fr
source_locale: zh-CN
source_revision: 70996a7
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

Après une tâche Cloud, examinez le résumé et le diff. Ne créez une pull request que si le résultat respecte le périmètre et les critères de vérification ; sinon, poursuivez les corrections dans la même conversation.

## De la tâche à la PR

```text
Choisir l'environnement et la branche de départ
  → exécuter la tâche Cloud
  → réviser le résumé, les journaux et le diff
  → poursuivre si nécessaire
  → Create Pull Request
  → CI + révision Codex complémentaire + révision humaine
  → une personne décide de fusionner ou non
```

Demandez à Codex de « créer une PR sans la fusionner », mais ne vous fiez pas uniquement à cette contrainte en langage naturel. Activez la protection des branches et les contrôles obligatoires dans le dépôt.

## Modèle de tâche réutilisable

```text
Objectif : corriger la régression du délai de connexion dans l'issue #42.
Point de départ : main.
Périmètre : packages/auth/** et uniquement les tests correspondants.
Interdictions : ne pas mettre à niveau les dépendances, modifier l'API publique
ou écrire directement sur main.
Vérification : pnpm test --filter auth ; pnpm typecheck.
Livrable : créer une PR vers main, sans la fusionner.
La description de la PR doit inclure la cause racine, le résumé des modifications,
les commandes et résultats de test, les risques et la méthode de retour arrière.
```

## Avant la création

- [ ] Le commit de départ est correct et aucune entrée locale requise ne reste sans être poussée.
- [ ] Le diff contient uniquement le périmètre de la tâche.
- [ ] Le nom de la nouvelle branche est reconnaissable et n'écrase pas le travail d'une autre personne.
- [ ] Les tests ont réellement été exécutés et le résumé ne masque aucun échec.
- [ ] Aucun identifiant, journal temporaire, cache ou formatage sans rapport n'est présent.
- [ ] Une modification importante est divisée en PR indépendantes et révisables.

## Description minimale de la PR

1. Pourquoi la modification est nécessaire.
2. Ce qui a réellement changé.
3. Comment elle a été vérifiée, commandes et résultats compris.
4. Les risques, les limites et la méthode de retour arrière.
5. Ce qui n'a explicitement pas été fait.

Ajoutez de vraies captures d'écran pour les modifications d'interface, des étapes de reproduction pour les changements de comportement, ainsi que les détails de compatibilité et de retour arrière pour les migrations.

## Après la création

Attendez les contrôles obligatoires, demandez une révision complémentaire avec `@codex review`, puis faites examiner le diff principal par une personne qui connaît le contexte. Renvoyez les commentaires précis sur la même branche de PR ; ne créez pas une branche dupliquée sans rapport.

Ouvrir et fusionner une PR sont deux limites d'autorisation distinctes. La capacité de Cloud à créer une PR ne justifie pas de contourner la politique de fusion de l'équipe.

## Sources officielles

- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Révision de pull request GitHub](https://learn.chatgpt.com/docs/third-party/github)

---

**Statut :** verified

**Produits concernés :** Cloud, GitHub

**Dernière vérification :** 2026-08-26

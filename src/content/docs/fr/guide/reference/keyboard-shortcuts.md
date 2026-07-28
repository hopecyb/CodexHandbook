---
title: "Raccourcis clavier"
description: Index d'apprentissage des raccourcis courants dans App, CLI TUI et extension IDE — selon votre version installée.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les raccourcis varient beaucoup par **client et version**. Cette page regroupe par **intention** pour demander « existe-t-il un moyen plus rapide ? » — vérifier l'aide ou les paramètres du produit pour les liaisons exactes.

Pas besoin de chaque raccourci le premier jour. Fluidifier les actions qui interrompent le flux suffit.

:::caution
Le tableau ci-dessous est **illustratif**, pas une liste complète de liaisons. Les clés peuvent changer après mise à niveau.
:::

## Index par intention

| Intention | App de bureau (illustratif) | CLI TUI (illustratif) | Extension IDE (illustratif) |
|---|---|---|---|
| Nouvelle tâche/session | `Cmd/Ctrl+N` ou barre latérale | Quitter/ré-entrer / commande nouveau thread | Palette de commandes « Codex » |
| Envoyer message | `Enter` / `Cmd+Enter` | Selon doc produit | Envoi panneau |
| Nouvelle ligne sans envoi | `Shift+Enter` | Selon TUI | Selon panneau |
| Ouvrir palette de commandes | Classe `Cmd/Ctrl+K` | Commandes slash `/` | `Cmd/Ctrl+Shift+P` |
| Rechercher historique | Recherche barre latérale | Recherche en session si disponible | Historique chat |
| Approuver appel outil | Bouton panneau | `y` / flèches (selon TUI) | Notification ou bouton inline |
| Rejeter | Bouton panneau | `n` | Rejet inline |

**Suivez l'UI de votre version installée.**

## Actions à apprendre en premier

Les raccourcis réduisent la friction quand vous :

- Cherchez Envoyer
- Envoyez accidentellement quand vous vouliez nouvelle ligne
- Hésitez pour approuver des outils
- Ne trouvez pas comment démarrer une nouvelle tâche

Prioriser :

- Envoyer / nouvelle ligne
- Nouvelle tâche
- Palette de commandes
- Approuver / rejeter

## Commandes slash vs clavier

- **Commandes slash** : `/review`, `/help`, etc. — voir [Référence commandes slash](/guide/reference/slash-commands/)
- **Raccourcis** : actions UI sans taper

Combiner : `Cmd+K` pour focaliser l'entrée, puis `/review`.

## Utilisateurs terminal CLI

- **Ctrl+C** pour interrompre sortie incontrôlée (attention état non sauvegardé)
- Split tmux : Codex à côté de `git diff`
- Alias shell pour `codex exec` courant — voir [Commandes et raccourcis](/guide/cli/commands-and-shortcuts/)

## Idées reçues courantes

### 1. Pas besoin de maîtriser les raccourcis avant utiliser Codex

Fluidifier les quelques actions que vous répétez le plus.

### 2. La mémoire musculaire des autres n'est pas votre barre

Les raccourcis viennent avec la pratique — pas une porte d'onboarding.

### 3. Les clients n'ont pas besoin de liaisons identiques

Savoir si une action a un raccourci, où voir/changer les clés, et quelles actions valent la liaison en premier.

## Les cinq premiers à apprendre

1. Envoyer
2. Nouvelle ligne sans envoi
3. Palette de commandes
4. Approuver ou rejeter
5. Nouvelle tâche

Ajouter plus au fil du temps.

## Utilisateurs IDE

- Lier « expliquer la sélection avec Codex » à une clé confortable
- Utiliser diff éditeur et go-to-definition — moins de copier-coller

[Paramètres IDE](/guide/ide/settings/) · [Code sélectionné et fichiers ouverts](/guide/ide/selected-code-and-open-files/)

## Accessibilité et personnalisation

La plupart des clients permettent rebinder. Les équipes peuvent documenter des liaisons **recommandées** — pas exiger l'uniformité.

Les raccourcis ne sont pas un examen — fluidifiez les actions qui vous interrompent le plus.

## Sources de référence

- Page officielle Paramètres / Raccourcis clavier de chaque produit
- stormzhang `35-cheatsheet.md`
- KimYx0207 CX-03

---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE  
**Note de révision :** Malgré les disclaimers « illustratif », le corps suppose des raccourcis client spécifiques, comportement d'envoi, clés palette et clés d'approbation — très dépendants de version et plateforme sans documentation officielle unifiée forte des raccourcis.  
**Dernière vérification :** 2026-07-26

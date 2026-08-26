---
title: Contexte de l'éditeur
description: Comment l'intégration IDE transmet à Codex les fichiers ouverts, le contexte de l'espace de travail et les règles du projet.
locale: fr
source_locale: zh-CN
source_revision: b6d208f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

Dans un IDE, Codex reçoit plus que le prompt : il reçoit également **l'état de l'éditeur**. C'est son principal avantage par rapport à un simple terminal. Comprendre l'origine du contexte évite la frustration de constater que « le fichier est ouvert, mais Codex ne l'a pas vu ».

## Contenu de cette page

- le contexte joint automatiquement par l'IDE ;
- sa combinaison avec les fichiers mentionnés par `@`, les sélections et `AGENTS.md` ;
- la réduction du bruit et l'amélioration du ciblage.

## Workflow recommandé

1. **Ouvrez la racine du dépôt comme espace de travail**, plutôt qu'un simple sous-dossier (consultez les recommandations d'équipe pour les monorepos).
2. Pour une logique locale, **sélectionnez le code pertinent** avant de décrire la tâche. Consultez [Code sélectionné et fichiers ouverts](/fr/guide/ide/selected-code-and-open-files/).
3. Pour un travail qui traverse plusieurs modules, nommez les fichiers importants avec `@` au lieu de supposer que Codex les trouvera.
4. Compactez une longue session avec la [compaction du contexte](/fr/guide/context/compaction/) ou démarrez une nouvelle tâche.

## IDE et CLI

| | Intégration IDE | CLI |
|---|---|---|
| Connaissance des fichiers | Forte : les fichiers ouverts sont disponibles dans le contexte | Utilisez `--cd` / `-C` et les outils pour lire le disque |
| Sélection | Prise en charge native | Collez-la ou indiquez un chemin |
| Usage idéal | Modifications ligne par ligne et explication du code | Scripts, CI et environnements sans interface graphique |

## Questions courantes

### Pourquoi Codex a-t-il ignoré un fichier ouvert ?

Ouvrir un fichier ne rend pas explicite le centre de la tâche. Si le périmètre reste vague, Codex peut examiner d'autres contenus connexes ou manquer le fragment sélectionné.

### Ouvrir davantage de fichiers est-il toujours préférable ?

Un trop grand nombre de fichiers volumineux sans rapport rend le contexte bruyant et dilue les éléments importants.

### Le contexte automatique de l'IDE remplace-t-il un prompt clair ?

Non. Le contexte automatique est utile, mais il ne remplace pas un objectif, un périmètre, des contraintes et des critères d'acceptation clairement énoncés.

Le contexte de l'IDE aide Codex, mais ne lui permet pas de deviner. Des limites de fichiers précises produisent généralement des résultats plus stables.

## Informations sensibles

Ne laissez pas au premier plan un fichier `.env` contenant des secrets. Consultez [Contexte sensible](/fr/guide/context/sensitive-context/).

Masquez les journaux et les données client avant de les joindre ; l'IDE ne peut pas décider à votre place de leur conformité.

## Erreurs courantes

- Attendre la découverte de `AGENTS.md` dans une fenêtre ouverte sur un seul fichier, sans espace de travail.
- Ouvrir de nombreux fichiers volumineux sans rapport et saturer la fenêtre de contexte.
- Dire « cette fonction » sans la sélectionner ni nommer son fichier avec `@`.

## Liste de contrôle d'acceptation

- [ ] La racine de l'espace de travail est correcte.
- [ ] Un à trois fichiers utiles à la tâche sont ouverts ou joints avec `@`.
- [ ] Les commandes de test indiquées dans `AGENTS.md` correspondent au terminal de l'IDE.

## Référence

- [Contexte des fichiers et dossiers](/fr/guide/context/file-and-folder-context/)

---

**Statut :** vérifié

**Produits concernés :** IDE

**Dernière vérification :** 2026-08-26

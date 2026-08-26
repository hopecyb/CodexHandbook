---
title: Installation et première utilisation
description: Découvrez les points d'entrée projet, conversation, Codex et révision dans l'App de bureau ChatGPT.
locale: fr
source_locale: zh-CN
source_revision: d61c2fa
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Ce chapitre s'adresse aux personnes qui ouvrent l'App de bureau ChatGPT pour la première fois. L'objectif n'est pas de mémoriser chaque bouton, mais d'accomplir une **petite tâche révisable et vérifiable**.

Pour l'installation et la connexion, consultez [Installer l'App de bureau](/fr/guide/getting-started/install-desktop-app/). L'App officielle est actuellement disponible pour macOS, Windows et Linux. Une fois connecté, vous pouvez démarrer une conversation, créer un projet ou ouvrir un dossier local.

## Trois objets à reconnaître

| Objet | Rôle | Premier geste conseillé |
|---|---|---|
| Projet ou dossier | Fournit les fichiers et le répertoire de travail à la conversation | Ouvrir un dépôt d'exercice, pas un répertoire de production |
| Conversation | Conserve l'objectif, le contexte, la progression et le résultat | Utiliser une conversation par objectif clair |
| Codex | Lit, modifie et vérifie le contenu du projet | Commencer par une modification à faible risque, facile à contrôler |

L'interface continuera d'évoluer, mais ces objets sont plus stables que l'emplacement d'un bouton particulier.

## Accomplir une première tâche réelle

Préparez un dépôt Git existant. Vérifiez d'abord qu'il ne contient pas de modifications non consignées que vous devez préserver. Ouvrez le dossier dans l'App et démarrez une conversation Codex.

Saisissez :

```text
Lis d'abord README.md et modifie uniquement sa section « Run locally » :
1. Corrige la commande de démarrage qui ne fonctionne plus.
2. Ne modifie aucune autre section.
3. Affiche le diff et exécute toute commande de vérification documentée.
4. Si la vérification est impossible, explique pourquoi. Ne prétends pas avoir terminé.
```

Lorsque Codex a terminé, ne vous fiez pas uniquement au résumé de la conversation. Vérifiez :

1. que le volet de révision contient uniquement les fichiers attendus ;
2. que toute suppression est justifiée ;
3. que la sortie du terminal prouve réellement la réussite de la vérification ;
4. que `git diff` respecte le périmètre demandé.

## Choisir Chat, Work ou Codex

- Utilisez Chat pour les questions de connaissance ou l'exploration d'idées.
- Utilisez Work pour un travail général qui couvre plusieurs fichiers et outils.
- Utilisez Codex lorsque la tâche exige de comprendre, modifier et tester un dépôt.

Utilisez Quick chat pour une question temporaire qui ne demande pas de contexte durable. Conservez les travaux qui nécessitent une continuité dans une conversation ou un projet standard.

## Que vérifier en cas d'échec

- **Des fichiers manquent :** vérifiez que le bon dossier est ouvert et que l'accès aux fichiers n'a pas été refusé.
- **Une commande ne s'exécute pas :** vérifiez que les dépendances sont installées, puis examinez la première erreur significative du terminal.
- **D'anciennes modifications sont mélangées :** utilisez `git status` pour distinguer l'état antérieur à la tâche du travail actuel.
- **L'interface diffère de cette page :** naviguez à l'aide des objets logiques — projet/dossier, conversation, révision et terminal — plutôt qu'en vous fiant à une disposition d'écran fixe.

Poursuivez avec [Diffs, commentaires et révision](/fr/guide/desktop-app/diffs-comments-and-review/) et [Terminal intégré](/fr/guide/desktop-app/integrated-terminal/).

## Sources officielles

- [App de bureau ChatGPT](https://learn.chatgpt.com/docs/app)
- [Révision de code](https://learn.chatgpt.com/docs/code-review)

---

**Statut :** verified

**Produit concerné :** App

**Dernière vérification :** 2026-08-26

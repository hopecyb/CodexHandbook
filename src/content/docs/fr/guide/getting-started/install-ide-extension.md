---
title: Installer une intégration IDE
description: Activer Codex dans un éditeur compatible avec VS Code, Xcode ou un IDE JetBrains.
locale: fr
source_locale: zh-CN
source_revision: 1196b38
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

La prise en charge actuelle des IDE offre plusieurs méthodes d'installation :

| IDE | Installation ou activation |
|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Installer ou activer l'extension Codex |
| Xcode | Sélectionner Codex Agent dans l'assistant de programmation de Xcode |
| IDE JetBrains | Sélectionner Codex dans AI Chat |

Utilisez l'entrée correspondant à votre IDE sur la [page officielle de Codex pour les IDE](https://learn.chatgpt.com/docs/codex/ide). Ne déduisez pas la position des boutons à partir d'un autre IDE.

## Éditeurs compatibles avec VS Code

1. Installez l'extension Codex depuis sa fiche officielle dans la Marketplace.
2. Ouvrez la racine d'un véritable espace de travail de projet.
3. Sélectionnez l'icône Codex. Si elle n'apparaît pas, ouvrez la palette de commandes et exécutez `Codex: Open Codex Sidebar`.
4. Connectez-vous avec ChatGPT ou avec une clé API.

## Xcode et JetBrains

- Xcode : ouvrez l'assistant de programmation, démarrez une conversation et sélectionnez Codex comme Agent.
- JetBrains : ouvrez AI Chat et sélectionnez Codex.

Ces points d'entrée sont fournis par leurs IDE respectifs et n'utilisent pas la même interface que l'extension VS Code.

## Vérifier le contexte de l'éditeur après l'installation

Ouvrez un fichier source, sélectionnez un court passage et demandez :

```text
Explique uniquement les entrées, les sorties et les chemins d'échec de la sélection actuelle.
Ne modifie aucun fichier. Cite les noms de symboles pertinents.
```

Si la réponse ne correspond pas à la sélection, vérifiez :

- si la racine de projet attendue est ouverte ;
- si le fichier ou la sélection est joint au champ de rédaction ;
- si l'identité et l'espace de travail actifs sont les bons ;
- si une autre extension d'IA entre en conflit avec l'intégration ou les raccourcis.

Poursuivez avec le [Workflow de tâche locale dans l'IDE](/fr/guide/ide/local-task-workflow/). Consultez [Éditeurs pris en charge](/fr/guide/ide/supported-editors/) pour la matrice de compatibilité complète.

---

**Statut :** vérifié

**Produits concernés :** IDE

**Base de vérification :** le guide de démarrage rapide officiel actuel pour les IDE répertorie VS Code, Cursor, Windsurf, VS Code Insiders, Xcode et JetBrains, avec des méthodes d'intégration distinctes pour ces deux derniers groupes.

**Dernière vérification :** 2026-08-26

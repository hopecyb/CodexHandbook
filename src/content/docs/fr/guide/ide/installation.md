---
title: Installer et activer l'intégration IDE
description: Ouvrir correctement Codex dans les éditeurs de la famille VS Code, Xcode et les IDE JetBrains.
locale: fr
source_locale: zh-CN
source_revision: fb7ff84
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

Les points d'entrée dans les IDE se répartissent en deux groupes, dont les méthodes d'installation ne sont pas interchangeables :

| Éditeur | Point d'entrée actuel | Comment l'ouvrir |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Extension Codex | Sélectionnez l'icône Codex ou exécutez `Codex: Open Codex Sidebar` |
| Xcode | Intégration à l'assistant de programmation de Xcode | Démarrez une conversation et sélectionnez Codex Agent |
| IDE JetBrains | Intégration à JetBrains AI Chat | Ouvrez AI Chat et sélectionnez Codex |

Consultez [Éditeurs pris en charge](/fr/guide/ide/supported-editors/) pour la matrice complète.

## Installer et vérifier dans les éditeurs de la famille VS Code

1. Installez l'extension Codex depuis sa fiche officielle dans la Marketplace.
2. Ouvrez un projet d'entraînement plutôt qu'une fenêtre vide.
3. Sélectionnez l'icône Codex. Si elle n'est pas visible, exécutez `Codex: Open Codex Sidebar` depuis la palette de commandes.
4. Authentifiez-vous avec un compte ChatGPT ou une clé API.
5. Démarrez une conversation, joignez le fichier actuel et posez une question en lecture seule.

Prompt d'acceptation minimal :

```text
Lis uniquement le fichier actuellement ouvert. Ne modifie pas le code.
Explique sa responsabilité, ses entrées et ses sorties en trois points, en citant
un nom de symbole pour chaque point.
```

Une réponse qui correspond au fichier et aux symboles actuels indique que le contexte de l'éditeur est correctement transmis. Créez un point de contrôle Git avant toute tâche d'écriture.

## Échecs courants

- **Barre latérale absente :** exécutez `Codex: Open Codex Sidebar` depuis la palette de commandes.
- **Mauvais contexte :** confirmez que la fenêtre de projet, le fichier actuel et la sélection appartiennent au dépôt attendu.
- **Connexions répétées :** la CLI et l'IDE partagent l'authentification mise en cache ; vérifiez le compte actif et reconnectez-vous.
- **Chaîne d'outils Windows dans WSL :** activez `chatgpt.runCodexInWindowsSubsystemForLinux` uniquement si nécessaire ; sa modification recharge VS Code.
- **Comportement différent dans un outil tiers :** vérifiez la compatibilité avec l'extension VS Code. Ne transposez pas le point d'entrée de Xcode ou de JetBrains dans un autre éditeur.

Pour le parcours détaillé destiné aux débutants, consultez [Installer une intégration IDE](/fr/guide/getting-started/install-ide-extension/).

## Sources officielles

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Paramètres de l'IDE](https://learn.chatgpt.com/docs/ide/settings)

---

**Statut :** vérifié

**Produits concernés :** IDE

**Dernière vérification :** 2026-08-26

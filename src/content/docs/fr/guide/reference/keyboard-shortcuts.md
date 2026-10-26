---
legacyVerification:
  status: "verified"
  products: "App, CLI, IDE"
  checkedAt: "2026-08-26"
title: Raccourcis clavier
description: Liste limitée aux raccourcis de l’App et de l’IDE vérifiables dans la documentation officielle actuelle.
sidebar:
  order: 90
locale: fr
source_locale: zh-CN
source_revision: '4f812d9'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Les raccourcis changent selon la plateforme, le client et les réglages personnels. Cette page ne présente que les combinaisons clairement indiquées dans la documentation officielle actuelle. Pour une liste complète, consultez **Keyboard Shortcuts** dans l’application.

## Application de bureau

| Action | macOS | Windows |
|---|---|---|
| Ouvrir les réglages | `Cmd + ,` | `Ctrl + ,` |
| Ouvrir ou fermer Activity | `Cmd + Option + U` | `Ctrl + Alt + U` |
| Ouvrir le terminal intégré | `Ctrl` + touche accent grave | `Ctrl` + touche accent grave |
| Ouvrir la palette de commandes de l’application | `Cmd + K` | Vérifier dans Keyboard Shortcuts |
| Effacer l’affichage du terminal | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` ouvre la palette de commandes de l’application ; il n’efface pas le terminal.

Dans les réglages, **Keyboard Shortcuts** permet de rechercher une commande par son nom ou par sa touche, de modifier une combinaison et de rétablir les valeurs par défaut. Après personnalisation, le réglage local prime sur les aide-mémoire en ligne.

## IDE

Dans les éditeurs de la famille VS Code, `chatgpt.composerEnterBehavior` détermine comment Entrée et `Cmd/Ctrl + Enter` envoient les prompts sur plusieurs lignes. Ne supposez pas que toutes les machines utilisent la même combinaison.

Pendant l’exécution de Codex, `chatgpt.followUpQueueMode` détermine si un nouveau message est mis en attente ou oriente immédiatement la tâche. Pour inverser le comportement par défaut lors d’un seul envoi, utilisez `Cmd/Ctrl + Shift + Enter`.

Si la barre latérale Codex est introuvable, lancez cette commande depuis la palette de commandes de l’éditeur :

```text
Codex: Open Codex Sidebar
```

## CLI

Pour l’interface terminal du CLI, consultez `/help` et les indications affichées par la version utilisée. Cette page ne devine pas les touches d’approbation telles que `y` ou `n`, car elles dépendent du terminal, du mode et de la version.

Le signal de terminal général `Ctrl + C` peut interrompre une commande ou une session en cours. Vérifiez d’abord l’état actuel ; ne le considérez pas comme une touche « Retour » sans effet secondaire.

## Ordre d’apprentissage

Commencez par apprendre à ouvrir les réglages et Activity, à ouvrir le terminal et à envoyer un prompt sur plusieurs lignes. Recherchez ensuite dans l’application les actions que vous utilisez le plus souvent. La documentation d’équipe devrait nommer les actions plutôt qu’imposer les mêmes raccourcis personnalisés à tout le monde.

## Sources officielles

- [Réglages de l’application de bureau](https://learn.chatgpt.com/docs/app/settings)
- [Notifications et Activity](https://learn.chatgpt.com/docs/notifications)
- [Terminal intégré](https://learn.chatgpt.com/docs/integrated-terminal)
- [Réglages de l’IDE](https://learn.chatgpt.com/docs/ide/settings)

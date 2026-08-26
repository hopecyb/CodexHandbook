---
title: Paramètres de l'intégration IDE
description: Distinguer la configuration partagée de l'Agent des paramètres de comportement des éditeurs de la famille VS Code.
locale: fr
source_locale: zh-CN
source_revision: d4a3506
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Les paramètres de l'IDE comportent deux couches :

| Couche | Emplacement | Contrôle |
|---|---|---|
| Paramètres de l'Agent Codex | `config.toml` | Modèle, effort de raisonnement, autorisations, bac à sable, MCP et personnalisation ; partagés avec la CLI |
| Paramètres de l'éditeur | Paramètres VS Code sous `chatgpt.*` | Barre latérale, mise en file des messages, touche d'envoi, affichage de la révision, langue et polices |

Conservez les règles du dépôt dans `AGENTS.md`, et non dans les paramètres personnels d'un éditeur.

## Ouvrir les paramètres

Sélectionnez l'engrenage dans la barre latérale Codex, puis **Codex Settings**. Modifiez les options courantes de l'Agent dans le panneau ou sélectionnez **Open config.toml** pour modifier la couche de configuration active.

Pour changer le comportement de l'éditeur, recherchez `@ext:openai.chatgpt`, `Codex` ou une clé précise dans ses paramètres.

## Paramètres à comprendre en priorité

| Clé | Valeur par défaut | Quand la modifier |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | Vous voulez que l'extension place la barre latérale au premier plan au démarrage |
| `chatgpt.followUpQueueMode` | `queue` | Définissez `steer` pour qu'un nouveau message réoriente l'exécution en cours |
| `chatgpt.composerEnterBehavior` | `enter` | Les prompts multilignes sont souvent envoyés accidentellement |
| `chatgpt.reviewDelivery` | `inline` | Définissez `detached` pour afficher `/review` dans une conversation distincte |
| `chatgpt.localeOverride` | automatique | Vous avez besoin d'une langue d'interface fixe |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | Le dépôt et la chaîne d'outils se trouvent dans WSL2 |

`chatgpt.cliExecutable` est destiné au développement de Codex CLI. Les utilisateurs ordinaires ne doivent pas remplacer l'exécutable inclus avec l'extension ; certaines fonctions pourraient cesser de fonctionner.

## Comprendre la priorité des configurations

- La politique de l'organisation fixe des limites qui ne peuvent pas être dépassées.
- `config.toml` définit les valeurs par défaut de l'Agent.
- `AGENTS.md` fournit les règles du dépôt et des répertoires.
- Les paramètres de l'éditeur modifient uniquement l'expérience dans l'IDE.
- Un prompt ponctuel ajoute l'objectif et les limites de la tâche en cours.

Si un paramètre semble sans effet, identifiez la couche que vous avez modifiée et vérifiez si une politique de niveau supérieur la contraint. Consultez [Périmètre et priorité](/fr/guide/customization/agents-md/scope-and-precedence/) pour le modèle complet.

## Vérifier les modifications

Ne modifiez qu'une catégorie de paramètres à la fois. Par exemple, après avoir défini `chatgpt.reviewDelivery` sur `detached`, exécutez `/review` dans un dépôt Git et vérifiez qu'une conversation de révision distincte s'ouvre. Notez l'ancienne valeur, rétablissez-la si le comportement est inattendu, puis rechargez l'éditeur.

## Sources officielles

- [Paramètres de Codex IDE](https://learn.chatgpt.com/docs/ide/settings)
- [Principes de configuration](https://learn.chatgpt.com/docs/config)

---

**Statut :** vérifié

**Produits concernés :** IDE

**Dernière vérification :** 2026-08-26

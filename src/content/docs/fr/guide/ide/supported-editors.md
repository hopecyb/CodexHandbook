---
title: Éditeurs pris en charge
description: Distinguer l'extension compatible avec VS Code des intégrations Xcode et JetBrains.
locale: fr
source_locale: zh-CN
source_revision: 1f0b54d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Codex s'intègre aux principaux éditeurs par différents mécanismes : l'extension Codex pour les éditeurs de la famille VS Code et des points d'entrée natifs pour Xcode et les IDE JetBrains.

## Méthodes de prise en charge actuelles

| Éditeur | Point d'entrée Codex | Comment l'ouvrir |
|---|---|---|
| Visual Studio Code | Extension Codex | Icône Codex ou `Codex: Open Codex Sidebar` |
| Cursor | Extension Codex compatible | Icône Codex ou palette de commandes |
| Windsurf | Extension Codex compatible | Icône Codex ou palette de commandes |
| Visual Studio Code Insiders | Extension Codex | Panneau des extensions et barre latérale Codex |
| Xcode | Intégration à l'assistant de programmation de Xcode | Démarrez une conversation et sélectionnez Codex Agent |
| IDE JetBrains | Intégration à JetBrains AI Chat | Ouvrez AI Chat et sélectionnez Codex |

Les points d'installation et les versions minimales peuvent évoluer. Partez de la [page officielle de Codex pour les IDE](https://learn.chatgpt.com/docs/codex/ide), au lieu de déduire une prise en charge officielle d'extensions tierces aux noms similaires.

## Usages les plus adaptés au point d'entrée IDE

- Joindre directement le fichier ouvert ou la sélection actuelle à une question.
- Expliquer, modifier et approfondir du code local.
- Réviser les résumés et les modifications à côté du code source.
- Conserver les petites tâches en local et déléguer les travaux plus longs lorsqu'ils prennent de l'ampleur.

Exemple :

```text
Examine la boucle de nouvelle tentative dans la sélection actuelle.
Explique d'abord la condition d'arrêt, puis apporte la plus petite modification possible.
Modifie uniquement le fichier actuel et son test correspondant.
Indique le diff et la commande de test ; ne mets pas à niveau les dépendances.
```

## Assurer la cohérence entre plusieurs éditeurs

1. Placez les commandes de compilation, de test et de formatage dans le fichier `AGENTS.md` du dépôt ou dans la documentation de contribution.
2. Délimitez le périmètre des fichiers dans les prompts au lieu de dépendre d'un bouton propre à un IDE.
3. Acceptez le résultat à partir du diff Git et du même ensemble de tests, et non d'un simple « cela fonctionne dans mon IDE ».
4. N'écrivez des instructions propres à un éditeur que lorsqu'un guidage précis de l'interface est nécessaire.

## Éditeurs absents de la liste

Pour les éditeurs qui ne figurent pas dans cette liste, utilisez [Codex CLI](/fr/guide/cli/) ou l'[App de bureau](/fr/guide/desktop-app/). Ne forcez pas l'installation du paquet VS Code dans un éditeur incompatible et ne considérez pas par défaut une intégration tierce comme une fonctionnalité OpenAI.

Consultez [Installer et activer l'intégration IDE](/fr/guide/getting-started/install-ide-extension/) pour l'installation et [Contexte de l'éditeur](/fr/guide/ide/editor-context/) pour le comportement du contexte.

---

**Statut :** vérifié

**Produits concernés :** IDE

**Dernière vérification :** 2026-08-26

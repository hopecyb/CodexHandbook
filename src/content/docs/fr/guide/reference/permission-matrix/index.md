---
legacyVerification:
  status: "verified"
  products: "App, CLI, IDE, Cloud"
  checkedAt: "2026-08-26"
title: Matrice des permissions
description: Distinguer les Permission Profiles locaux, l’ancien bac à sable et la politique réseau du Cloud.
sidebar:
  order: 70
locale: fr
source_locale: zh-CN
source_revision: 'c6ad6aa'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

N’utilisez pas un tableau fixe des fenêtres d’approbation de l’App, du CLI, de l’IDE et du Cloud pour deviner les permissions. Le comportement réel dépend du lieu d’exécution, de la configuration effective, des exigences de l’organisation, du système d’exploitation et de l’action demandée.

![Enchaînement entre blocage par le bac à sable, approbation humaine et résultat de l’exécution](/diagrams/sandbox-approval-flow-fr.svg)

## Distinguer d’abord trois mécanismes

| Mécanisme | Portée | Contrôle principal |
|---|---|---|
| Permission Profiles locaux (bêta) | Commandes locales sur macOS, Linux, WSL et Windows natif | Lecture, écriture ou refus dans le système de fichiers ; destinations réseau |
| Anciens réglages du bac à sable | Codex local | `read-only`, `workspace-write`, `danger-full-access` et politique d’approbation |
| Politique d’environnement Cloud | Codex Cloud | Conteneur isolé, accès réseau pendant la préparation, liste de domaines autorisés et méthodes HTTP pour l’Agent |

Les Permission Profiles ne se combinent pas avec l’ancien `sandbox_mode`. Si la configuration chargée contient `sandbox_mode`, si `--sandbox` est passé en ligne de commande ou si un profil de configuration définit un bac à sable, Codex utilise l’ancien système plutôt que `default_permissions`.

## Permission Profiles locaux intégrés

| Nom | Limite | Usage adapté |
|---|---|---|
| `:read-only` | Commandes locales en lecture seule | Compréhension du code, revue, premier contact avec un dépôt |
| `:workspace` | Écriture dans les racines de l’espace de travail et les dossiers temporaires système | Développement courant |
| `:danger-full-access` | Supprime les limites du bac à sable local | Seulement si l’environnement est déjà isolé ailleurs et que ce niveau est explicitement nécessaire |

Un profil personnalisé peut attribuer `read`, `write` ou `deny` à des chemins et exclure, au moyen de règles plus précises, des fichiers sensibles comme `.env` d’une portée plus large. En cas de conflit entre règles visant un même chemin, `deny` prime sur `write`, qui prime sur `read`.

## Exemple de permissions minimales

```toml
default_permissions = "project-edit"

[features]
network_proxy = true

[permissions.project-edit.filesystem]
":minimal" = "read"

[permissions.project-edit.filesystem.":workspace_roots"]
"." = "write"
".devcontainer" = "read"
"**/*.env" = "deny"

[permissions.project-edit.network]
enabled = true

[permissions.project-edit.network.domains]
"api.openai.com" = "allow"
"tracking.example.com" = "deny"
```

`network.enabled = true` permet seulement aux commandes d’accéder au réseau. Il faut aussi activer `features.network_proxy` pour que les règles de domaines soient appliquées par le proxy.

## Évaluer selon l’action

| Action | Risque principal | Limite minimale |
|---|---|---|
| Lire le code source | Inclure des fichiers sensibles dans le contexte | Lecture de l’espace de travail, interdiction explicite d’accéder aux fichiers d’identifiants |
| Modifier des fichiers | Écraser ou supprimer hors du périmètre | Écriture limitée à l’espace de travail visé, examiner d’abord le diff |
| Exécuter des tests | Effets secondaires des scripts | Examiner les scripts et utiliser un environnement contrôlé |
| Installer des dépendances | Chaîne d’approvisionnement et accès réseau | Versions fixées et domaines limités |
| Git push ou PR | Modification d’un état externe | Branche distincte, protections de branche et revue humaine |
| Outil MCP ou Plugin | Données tierces et opérations d’écriture | Portée minimale, approbations ciblées et journaux |

`AGENTS.md` peut demander de ne pas faire de push, mais ce n’est pas une barrière technique. Combinez les règles avec le bac à sable ou les permissions, les droits GitHub et une revue humaine.

## Méthode de vérification pour une équipe

1. Relever le client et la version de Codex.
2. Lister toutes les couches de configuration chargées.
3. Confirmer si le système actif est un Permission Profile ou l’ancien bac à sable.
4. Dans un dossier de test sans données sensibles, vérifier séparément `read`, `write`, `deny` et le réseau.
5. Brancher ensuite le vrai dépôt et conserver les protections Git et organisationnelles.

Les Permission Profiles restent en bêta ; refaites cette vérification après une mise à jour.

## Sources officielles

- [Permissions (bêta)](https://learn.chatgpt.com/docs/permissions)
- [Sandboxing](https://learn.chatgpt.com/docs/sandboxing)
- [Approbations et sécurité des Agents](https://learn.chatgpt.com/docs/agent-approvals-security)
- [Accès Internet du Cloud](https://learn.chatgpt.com/docs/cloud/internet-access)

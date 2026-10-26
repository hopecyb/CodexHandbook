---
legacyVerification:
  status: verified
  products: CLI
  checkedAt: 2026-08-26 (codex-cli 0.148.0 testé localement)
title: Profils de configuration
description: Superposer un ensemble de réglages nommés à la configuration de base du Codex CLI.
sidebar:
  order: 20
locale: fr
source_locale: zh-CN
source_revision: "6ab30c5"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---
Dans le Codex CLI actuel, `--profile <name>` superpose le fichier `$CODEX_HOME/<name>.config.toml` à la configuration utilisateur de base. Ce mécanisme sert surtout au CLI ; il ne faut pas le présenter comme un « mode en un clic » universel de l’application de bureau.

## Exemple minimal

Gardez les valeurs communes dans la configuration de base :

```toml
# ~/.codex/config.toml
model_reasoning_effort = "medium"
```

Créez un profil de revue en lecture seule :

```toml
# ~/.codex/review.config.toml
sandbox_mode = "read-only"
approval_policy = "never"
```

Lancez-le :

```bash
codex --profile review
# Forme abrégée
codex -p review
```

Vérifiez le comportement de votre version locale :

```bash
codex --help
```

L’aide de la version actuelle devrait préciser le chemin du fichier de profil et son ordre de superposition. Si votre version diffère, fiez-vous à sa sortie et à la référence officielle de configuration à jour.

## Quand utiliser un profil

| Profil | Objectif | Exemple de limite |
|---|---|---|
| `review` | Inspection en lecture seule | Lecture seule, aucune écriture |
| `workspace` | Modifications courantes du projet | Écriture dans l’espace de travail, approbations selon le besoin |
| `ci` | Contrôles non interactifs | Sortie fixe, aucun push |

Un profil enregistre seulement un point de départ pour la configuration. Il ne contourne pas les exigences de l’organisation et ne rend pas automatiquement un prompt sûr. Évitez notamment de faire de `danger-full-access` un profil par défaut facile à activer.

## Ne pas confondre avec Permission Profile

- **Profil de configuration** : `--profile name` sélectionne `<name>.config.toml` et peut superposer différents réglages Codex.
- **Permission Profile (bêta)** : `default_permissions` et `[permissions.<name>]` définissent les limites du système de fichiers et du réseau.

Les deux portent le nom « profile », mais ils n’ont ni le même rôle ni la même structure de configuration. Dans la version actuelle, Permission Profile ne se combine pas non plus avec l’ancien `sandbox_mode` ; choisissez un seul système de permissions.

## Limites pour une équipe

Les profils de configuration se trouvent dans le répertoire personnel Codex de l’utilisateur. Dans la version actuelle, ils ne sont pas automatiquement des réglages de projet à commiter. Une équipe peut proposer des fichiers d’exemple revus, que chaque membre installe et vérifie explicitement. Ne supposez pas qu’un clone du dépôt active un profil personnel.

## Critères d’acceptation

1. Exécuter `codex --help` et confirmer que la version actuelle prend en charge `-p/--profile`.
2. Essayer `review` sur une tâche en lecture seule.
3. Demander la lecture d’un fichier hors de l’espace de travail ou une écriture et confirmer que la limite bloque l’action.
4. Inspecter la configuration effective, sans se fier seulement au nom du fichier.

## Sources officielles

- [Schéma de configuration de Codex](https://github.com/openai/codex/blob/main/codex-rs/core/config.schema.json)
- [Chargement des couches de configuration dans le code du Codex CLI](https://github.com/openai/codex/blob/main/codex-rs/config/src/loader/mod.rs)

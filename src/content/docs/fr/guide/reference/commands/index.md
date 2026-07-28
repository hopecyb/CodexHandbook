---
title: "Référence des commandes CLI"
description: Sous-commandes et flags Codex CLI courants — index d'apprentissage, pas substitut à la doc officielle.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La référence des commandes aide à choisir un point d'entrée — pas à mémoriser chaque flag :

> **Dois-je utiliser l'entrée interactive ou une commande ponctuelle ?**

Cette page indexe les points d'entrée **Codex CLI** courants pour recherche et comparaison. **Les noms, flags et défauts changent par version** — exécutez `codex --help` et `--help` des sous-commandes, et suivez la [documentation OpenAI Codex](https://developers.openai.com/codex).

## Quand utiliser cette page

- Commande interactive vs ponctuelle
- Tâche style chat vs style script
- Vous savez que CLI convient mais pas quelle entrée

## Choix d'entrée

- Chat pendant que vous travaillez : `codex`
- Une tâche, résultat à la fin : `codex exec`

Pour les nouveaux utilisateurs CLI, cette division résout la plupart des questions d'entrée.

## Vue d'ensemble des commandes (illustratif)

| Entrée | Objectif | Détail |
|---|---|---|
| `codex` | Session TUI interactive | [Mode interactif](/guide/cli/interactive-mode/) |
| `codex exec` (ou équivalent) | Tâche non interactive unique/pipeline | [Mode non interactif](/guide/cli/non-interactive-mode/) |
| Configuration | Lire/écrire config utilisateur/projet | [Configuration CLI](/guide/cli/configuration/) |

:::caution[Version sensible]
Les noms de paramètres ci-dessous reflètent des docs communautaires courantes — **peuvent ne pas correspondre à votre CLI installée**. Revérifier `--help` après mise à niveau.
:::

## Idées reçues courantes

### 1. Pas besoin de tout mémoriser

Savoir quelle classe d'entrée convient à la tâche ; chercher les flags au besoin.

### 2. `codex exec` n'est pas juste « `codex` avancé »

Il vise les scripts et CI non surveillés — pas un mode chat plus puissant.

### 3. Voir un flag ≠ vous devez l'utiliser maintenant

Beaucoup de flags dépendent de version, environnement et politique de sécurité — comprendre l'intention d'abord.

### 4. Référence commandes ≠ tutoriel

C'est :

- Une carte d'entrée
- Un index de paramètres
- Un pointeur vers des pages plus profondes

## Mode interactif (conceptuel)

```bash
# Démarrer session interactive à la racine du dépôt (illustratif)
codex

# Actions courantes en session (selon TUI)
# - Entrer description de tâche
# - Commandes slash / → voir page slash-commands
# - Approuver requêtes shell / écriture fichier
```

Commandes slash : [Référence commandes slash](/guide/reference/slash-commands/)

## Flux de décision d'entrée

1. Exécuter `codex --help`
2. Choisir interactif ou `exec`
3. Pour une sous-commande, lire son `--help`

Éviter de se noyer dans la table complète des flags le premier jour.

## Démarrage rapide

1. `codex --help`
2. Chat en travaillant → `codex`
3. CI ou scripts → étudier `codex exec`

## Exec non interactif (conceptuel)

```bash
# Répertoire de travail et prompt ponctuel (illustratif)
codex exec --cwd /path/to/repo "Votre description de tâche complète"

# Intentions courantes (noms de flags selon doc officielle)
# --cwd          répertoire de travail
# --model        pin modèle
# --sandbox      politique bac à sable
# --approval     politique d'approbation (critique non surveillé)
# stdin pipe     lire prompt depuis fichier ou commande amont
```

Sécurité : [Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/)

## Configuration et auth (conceptuel)

| Action | Notes |
|---|---|
| Connexion | Identique à [Connexion et authentification](/guide/getting-started/sign-in-and-authentication/) |
| Fichiers de config | Niveau utilisateur/projet — voir [Référence de configuration](/guide/reference/configuration-reference/) |
| MCP | [Connecter MCP](/skills/mcp/connect-an-mcp-server/) |

## Codes de sortie et automatisation

Le mode non interactif utilise généralement les **codes de sortie** pour la CI :

- `0` : complété selon accord
- Non-`0` : échec ou nécessite humain — vérifier stderr/logs

Les pages commandes CLI aident à choisir entrée et intention — pas à mémoriser les paramètres.

Ne pas ignorer stderr en CI ; garder les logs pour [Diagnostiquer avant corriger](/cases/workflows/diagnose-before-fixing/).

## vs commandes slash en chat

| | Terminal `codex` | `/` en session |
|---|---|---|
| Doc | Cette page + guide produit | [slash-commands](/guide/reference/slash-commands/) |
| Idéal pour | Scripts, CI | Exploration interactive |

## Dépannage

| Symptôme | Voir |
|---|---|
| Commande introuvable | [Installer CLI](/guide/getting-started/install-cli/) |
| Config non appliquée | [Configuration CLI](/guide/cli/configuration/) |
| Approbation bloque CI | Renforcer prompt + bac à sable lecture seule |

[Dépannage CLI](/guide/cli/troubleshooting/)

---

**Statut :** obsolète  
**Produits concernés :** CLI  
**Note de révision :** Écrite comme carte d'entrée mais centre encore `codex`, `codex exec`, `/` en session et intention des paramètres — détails CLI à haute volatilité ; restaurer `vérifié` après documentation officielle des commandes la plus récente.  
**Dernière vérification :** 2026-07-26

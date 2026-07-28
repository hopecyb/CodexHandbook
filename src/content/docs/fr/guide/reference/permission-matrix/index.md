---
title: "Matrice des permissions"
description: Carte conceptuelle des types d'actions Codex, points d'approbation et différences produit.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

La matrice des permissions aide aussi les utilisateurs quotidiens : pourquoi la même phrase obtient des réactions différentes selon les points d'entrée Codex.

Différentes **actions** déclenchent différents comportements d'approbation et bac à sable par **point d'entrée produit**. Cette matrice aligne les équipes sur « ce qu'un humain doit explicitement autoriser ». C'est une **référence de risque et comportement**, pas texte de conformité juridique. Défauts selon [documentation officielle](https://developers.openai.com/codex) et politique gérée org.

## Ce que le tableau sert

Quand approbation, limites ou rejet apparaissent, les gens pensent souvent :

- Le modèle est cassé
- Je l'ai mal formulé
- Ça marchait hier

Une grande partie est entrée, politique et niveau de risque — pas seulement votre formulation.

## Idée centrale

Pas chaque « fais ceci pour moi » porte le même risque.

Exemples :

- Lire un fichier
- Éditer un fichier
- Exécuter une commande
- Atteindre le réseau
- Push du code

Même forme de phrase — risque différent — donc les produits ajoutent approbation, limites et blocages différents.

Base conceptuelle : [Permissions et approbations](/guide/foundations/permissions-and-approvals/)

## Niveaux de risque d'action

| Niveau | Actions exemple | Attente par défaut |
|---|---|---|
| L0 lecture | Lire texte dans dépôt, rechercher code | Généralement automatique |
| L1 écriture | Éditer fichiers projet, formater | Souvent confirmer ou auto en bac à sable |
| L2 exécution | shell, gestionnaire de paquets, tests | Souvent confirmer |
| L3 réseau | curl, registre npm, API | Confirmation stricte ou deny |
| L4 hors limites | Écriture hors projet, git push, drop DB | Bloquer ou confirmation forte |
| L5 GUI | Computer Use, dialogues système | Sensibilité maximale ; souvent off |

## Comment la lire

1. Quelle classe d'action est cette tâche ?
2. Cette classe sera-t-elle généralement bloquée dans cette entrée ?
3. Ajouter détail, attendre approbation ou choisir entrée plus légère ?

Utilisez-la pour prévisualiser avant de commencer.

## Matrice (conceptuelle — défauts typiques)

**Y** = nécessite généralement consentement explicite ou limite de politique · **A** = peut auto sous config fiable · **—** = dépend version/politique · **N** = généralement non autorisé

| Action | App de bureau | CLI interactif | IDE | Cloud |
|---|---|---|---|---|
| Lire fichiers dépôt | A | A | A | A |
| Écrire fichiers dans dépôt | Y/A | Y | Y/A | Y/A |
| Exécuter commandes de test | Y/A | Y | Y/A | Y/A |
| Installer dépendances globales | Y | Y | Y | Y |
| Accéder internet public | Y | Y | Y | Y |
| Lire fichiers sensibles comme `.env` | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| Écriture hors projet | N/Y | N/Y | N/Y | N |
| Outils MCP tiers | Y | Y | Y | Y |
| Navigateur ouvrir URL | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

Notes :

- **Cloud** s'exécute en bac à sable distant — pas d'accès au filesystem de votre laptop
- **IDE** similaire à App ; UI d'approbation diffère
- **Politique gérée** peut forcer tout Y ou N

## Idées reçues courantes

### 1. La faisabilité n'est pas seulement « le modèle va essayer »

Souvent : allowance d'entrée, politique, permissions.

### 2. Cloud n'est pas automatiquement plus libre ou plus sûr

La sécurité dépend de bac à sable, réseau, Secrets, protection de branche, approbation ensemble.

### 3. Les règles écrites ne suppriment pas le risque seules

Docs, politique d'approbation, limites techniques et revue humaine combinent souvent.

### 4. Bloqué ≠ vous avez fait quelque chose de mal

Souvent : étape à plus haut risque, mauvaise entrée pour le job, ou nécessite approbation explicite / approche plus légère.

## Comment config et docs s'appliquent

| Mécanisme | Rôle |
|---|---|
| Mode bac à sable | Limite L3/L4 même si l'Agent « veut » |
| Politique d'approbation | Si L1–L3 prompt |
| `AGENTS.md` | Interdictions projet (ex. pas de push) |
| Protection de branche | GitHub bloque merge non revu |
| Hooks | Vérifications pre-commit (voir roadmap Hooks) |

[Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/) · [Référence de configuration](/guide/reference/configuration-reference/)

## Quand élever la prudence

Si une action :

- Modifie des fichiers
- Exécute des commandes
- Atteint le réseau
- Touche des données sensibles
- Envoie des résultats hors du dépôt

Pas besoin du numéro L — savoir que c'est au-delà du risque lecture occasionnelle.

La matrice est un outil de prévisualisation : pourquoi cette étape pourrait bloquer, être plus prudent, ou choisir un chemin plus léger.

## Exemples de politique d'équipe

| Scénario | Suggestion |
|---|---|
| Dépôt de pratique open source | Bac à sable standard + autoriser commandes de test |
| Monorepo entreprise | Strict + pas de push + revue PR humaine |
| CI `codex exec` | Lecture seule ou dir scoped + pas de push |
| Cloud lié production | Secrets minimaux + protection de branche |

## Myths courants

| Myth | Fact |
|---|---|
| « Cloud est plus sûr » | Dépend secrets, revue, politique réseau |
| « IDE ne lancera pas shell » | Peut lancer via outils Agent |
| « Doc dit pas push donc jamais push » | Besoin bac à sable + permissions Git + revue humaine |

---

**Statut :** obsolète  
**Produits concernés :** App / CLI / IDE / Cloud  
**Note de révision :** Le cadrage des niveaux de risque reste utile, mais la matrice suppose beaucoup de défauts par entrée et points d'approbation sans documentation officielle actuelle de matrice de permissions par entrée — ne pas marquer `revue` ou `vérifié`.  
**Dernière vérification :** 2026-07-26

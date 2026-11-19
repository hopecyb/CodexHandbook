---
title: Approbations et bac à sable
description: Politique d'approbation CLI pour shell, disque et réseau — et comment le bac à sable limite le comportement de l'Agent.
locale: fr
source_locale: zh-CN
source_revision: '35afd39'
translation_status: stale
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
legacyVerification:
  status: verified
  products: CLI
  basis: Le matériel de démarrage CLI du centre d'aide OpenAI distingue encore les modes d'approbation pour lecture/écriture, exécution de commandes et limites bac à sable/réseau ; cette page reste conceptuelle sur le risque interactif vs sans surveillance sans figer les libellés de boutons ou noms de mode comme faits.
  checkedAt: '2026-07-26'
sidebar:
  order: 60
---

Dans la CLI, les Agents peuvent **lire des fichiers, écrire des fichiers, exécuter le shell et éventuellement utiliser le réseau** — les approbations et le bac à sable sont la soupape de sécurité entre vous et l'automatisation. Une mauvaise configuration entraîne des demandes de confirmation constantes en usage interactif — ou un risque de dérapage en CI sans surveillance.

## Ce qui est couvert

- Ce que demandent les prompts d'approbation et comment choisir
- Comment les niveaux de bac à sable affectent fichiers et réseau
- Aligner la politique d'équipe entre CLI et `AGENTS.md`

## Ce que contrôlent approbations et bac à sable

Rappelez-vous :

- **approbation** demande : « Cette étape doit-elle continuer ? »
- **bac à sable** limite : « Même si elle continue, que peut-elle toucher ? »

Ensemble, ils déterminent si la CLI fonctionne de manière prudente ou trop permissive.

Bases conceptuelles : [permissions et approbations](/fr/guide/foundations/permissions-and-approvals/) · [bac à sable et réseau](/fr/guide/foundations/sandbox-and-network/)

## Quand les approbations se déclenchent

Déclencheurs typiques (selon produit) :

| Opération | Risque | Tendance par défaut |
|---|---|---|
| Écriture dans le projet | Moyen | Souvent besoin de confirmation |
| Écriture hors projet | Élevé | Rejet ou confirmation stricte |
| Exécuter shell | Élevé | Confirmer le contenu des commandes |
| Réseau / curl | Élevé | Confirmer cible et données |
| Appel outil MCP | Dépend du serveur | Granularité par outil |

En mode interactif vous pouvez avoir **une fois / session / refuser** (noms variables selon version). **Ne choisissez pas « toujours autoriser » pour des commandes que vous ne comprenez pas.**

## Niveaux de bac à sable (conceptuels)

| Intention | Bon pour |
|---|---|
| Strict / lecture seule | Revue de code non fiable, CI lecture seule |
| Standard | Dépôts de dev quotidien |
| Assoupli | Environnements personnels de confiance selon politique d'entreprise |

Le bac à sable peut limiter :

- Le périmètre de répertoire inscriptible
- L'accès à d'autres projets sous `$HOME`
- Les capacités sous-processus et réseau

Configuration : [Configuration CLI](/fr/guide/cli/configuration/) · matrice : [matrice des permissions](/fr/guide/reference/permission-matrix/)

## Interactif vs non interactif

| Mode | Comportement d'approbation |
|---|---|
| `codex` interactif | Humain présent ; juger chaque demande |
| `exec` non interactif | Pas d'humain ; resserrer bac à sable + prompt fixe à l'avance |

La CI doit lire : [mode non interactif](/fr/guide/cli/non-interactive-mode/) · [modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/)

Principes CI recommandés :

- Chemins lecture seule ou écriture limitée
- Interdire `curl` arbitraire téléversant le contenu du dépôt
- Sortie non nulle en échec ; conserver les logs

## Règles allow/deny

Les projets peuvent déclarer les commandes attendues dans [motifs allow et deny](/fr/guide/customization/rules/allow-and-deny-patterns/). **Les règles doivent correspondre au comportement produit réel** sinon les Agents restent bloqués — ou deviennent trop ouverts.

## Erreurs courantes

- « Auto-approuver tout le shell » globalement puis travailler sur des dépôts clients
- Approuver par erreur `sudo`, suppression de dépôt ou changements `~/.ssh`
- CI utilisant la même config assouplie que votre machine de dev
- Supposer que le bac à sable remplace la revue de code — il bloque les erreurs, pas l'injection de prompt malveillante

## Idées reçues courantes

### Beaucoup de prompts ne signifie pas toujours une mauvaise configuration

En apprenant la CLI, plus d'approbations peut être plus sûr — elles vous forcent à lire chaque étape.

Le vrai danger est d'approuver sans lire — pas la fréquence des demandes.

### Assouplir une fois ne rend pas les exécutions futures sûres

Ne transportez pas un profil grand ouvert d'une tâche pratique vers d'autres dépôts et tâches.

Les limites de sécurité doivent suivre le risque de la tâche — pas la commodité de la dernière fois.

## Liste de contrôle d'acceptation

- [ ] Peut expliquer ce que ferait la dernière demande d'approbation
- [ ] Sait où changer le niveau de bac à sable et redémarrer la session
- [ ] La doc d'équipe indique les commandes interdites et ce qui peut passer automatiquement

Commencer conservateur sur les approbations et le bac à sable CLI est généralement plus stable. Élargissez seulement quand vous savez ce que vous ouvrez.

## Références
- Docs sécurité et bac à sable CLI OpenAI Codex

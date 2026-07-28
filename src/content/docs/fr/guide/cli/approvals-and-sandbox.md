---
title: Approbations et Bac à sable
description: Politique d'Approbation CLI pour shell, disque et réseau — et comment le Bac à sable limite le comportement de l'Agent.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Dans la CLI, les Agents peuvent **lire des fichiers, écrire des fichiers, exécuter le shell et éventuellement utiliser le réseau** — les Approbations et le Bac à sable sont la soupape de sécurité entre vous et l'automatisation. Une mauvaise configuration signifie des Prompts constants en usage interactif — ou un risque de dérapage en CI sans surveillance.

## Ce qui est couvert

- Ce que demandent les Prompts d'Approbation et comment choisir
- Comment les niveaux de Bac à sable affectent fichiers et réseau
- Aligner la politique d'équipe entre CLI et `AGENTS.md`

## Ce que contrôlent Approbations et Bac à sable

Rappelez-vous :

- **Approbation** demande : « Cette étape doit-elle continuer ? »
- **Bac à sable** limite : « Même si elle continue, que peut-elle toucher ? »

Ensemble, ils façonnent si la CLI paraît conservatrice ou trop permissive.

Bases conceptuelles : [permissions et Approbations](/guide/foundations/permissions-and-approvals/) · [Bac à sable et réseau](/guide/foundations/sandbox-and-network/)

## Quand les Approbations se déclenchent

Déclencheurs typiques (selon produit) :

| Opération | Risque | Tendance par défaut |
|---|---|---|
| Écriture dans le projet | Moyen | Souvent besoin de confirmation |
| Écriture hors projet | Élevé | Rejet ou confirmation stricte |
| Exécuter shell | Élevé | Confirmer le contenu des commandes |
| Réseau / curl | Élevé | Confirmer cible et données |
| Appel outil MCP | Dépend du serveur | Granularité par outil |

En mode interactif vous pouvez avoir **une fois / session / refuser** (noms variables selon version). **Ne choisissez pas « toujours autoriser » pour des commandes que vous ne comprenez pas.**

## Niveaux de Bac à sable (conceptuels)

| Intention | Bon pour |
|---|---|
| Strict / lecture seule | Revue de code non fiable, CI lecture seule |
| Standard | Dépôts de dev quotidien |
| Assoupli | Environnements personnels de confiance selon politique d'entreprise |

Le Bac à sable peut limiter :

- Le périmètre de répertoire inscriptible
- L'accès à d'autres projets sous `$HOME`
- Les capacités sous-processus et réseau

Configuration : [Configuration CLI](/guide/cli/configuration/) · matrice : [matrice des permissions](/guide/reference/permission-matrix/)

## Interactif vs non interactif

| Mode | Comportement d'Approbation |
|---|---|
| `codex` interactif | Humain présent ; juger chaque demande |
| `exec` non interactif | Pas d'humain ; resserrer Bac à sable + Prompt fixe à l'avance |

La CI doit lire : [mode non interactif](/guide/cli/non-interactive-mode/) · [modèles d'Approbation humaine](/cases/workflows/human-approval-patterns/)

Principes CI recommandés :

- Chemins lecture seule ou écriture limitée
- Interdire `curl` arbitraire téléversant le contenu du dépôt
- Sortie non nulle en échec ; conserver les logs

## Règles allow/deny

Les projets peuvent déclarer les commandes attendues dans [motifs allow et deny](/guide/customization/rules/allow-and-deny-patterns/). **Les règles doivent correspondre au comportement produit réel** sinon les Agents restent bloqués — ou deviennent trop ouverts.

## Erreurs courantes

- « Auto-approuver tout le shell » globalement puis travailler sur des dépôts clients
- Approuver par erreur `sudo`, suppression de dépôt ou changements `~/.ssh`
- CI utilisant la même config assouplie que votre machine de dev
- Supposer que le Bac à sable remplace la revue de code — il bloque les erreurs, pas l'injection de Prompt malveillante

## Idées reçues courantes

### Beaucoup de Prompts ne signifie pas toujours une mauvaise configuration

En apprenant la CLI, plus d'Approbations peut être plus sûr — elles vous forcent à lire chaque étape.

Le vrai danger est d'approuver sans lire — pas d'être demandé trop souvent.

### Assouplir une fois ne rend pas les exécutions futures sûres

Ne transportez pas un profil grand ouvert d'une Tâche pratique vers d'autres dépôts et Tâches.

Les limites de sécurité doivent suivre le risque de la Tâche — pas la commodité de la dernière fois.

## Liste de contrôle d'acceptation

- [ ] Peut expliquer ce que ferait la dernière demande d'Approbation
- [ ] Sait où changer le niveau de Bac à sable et redémarrer la session
- [ ] La doc d'équipe indique les commandes interdites et ce qui peut passer automatiquement

Commencer conservateur sur les Approbations et le Bac à sable CLI est généralement plus stable. Élargissez seulement quand vous savez ce que vous ouvrez.

## Références
- Docs sécurité et Bac à sable CLI OpenAI Codex
---

**Statut :** vérifié  
**Produits concernés :** CLI  
**Base de vérification :** Le matériel de démarrage CLI du centre d'aide OpenAI distingue encore les modes d'Approbation pour lecture/écriture, exécution de commandes et limites Bac à sable/réseau ; cette page reste conceptuelle sur le risque interactif vs sans surveillance sans figer les libellés de boutons ou noms de mode comme faits.  
**Dernière vérification :** 2026-07-26

---
legacyVerification:
  status: "verified"
  products: "Environnements utilisant un hôte Codex local ; la CLI fournit `/hooks` pour gérer la confiance"
  checkedAt: "2026-08-25"
title: Vue d’ensemble des Hooks
description: Comprendre la découverte des configurations Hook, la revue de confiance, les gestionnaires et les limites de sécurité.
locale: fr
source_locale: zh-CN
source_revision: ac7889b
translation_status: draft
translated_at: "2026-09-20"
---

Les Hooks permettent d’exécuter des scripts de commande ou des outils de serveurs MCP déjà connectés pendant la boucle de l’Agent Codex. Ils servent notamment à détecter des secrets dans les prompts, appliquer des règles aux appels d’outils, tenir des journaux d’audit, résumer les sessions ou vérifier le travail avant l’arrêt.

![Cycle de vie des Hooks Codex : sessions, tours de tâche, appels d’outils, compression du contexte et événements des sous-agents](/diagrams/hook-lifecycle-events-fr.svg)

La distinction essentielle dans ce schéma est la suivante : `PreToolUse` peut refuser ou modifier l’entrée d’un outil local pris en charge avant son exécution. `PostToolUse` intervient après et ne peut pas annuler les effets déjà produits.

## Où la configuration est-elle recherchée ?

Codex recherche les Hooks à côté des couches de configuration actives :

- `~/.codex/hooks.json`
- `[hooks]` dans `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `[hooks]` dans `<repo>/.codex/config.toml`
- les Hooks fournis par les Plugins activés
- les Hooks administrés et distribués par une politique système, un MDM, Cloud ou `requirements.toml`

Le contenu du dossier `.codex/` d’un projet n’est chargé que si ce projet est approuvé. Les Hooks correspondants provenant de plusieurs sources s’exécutent tous ; une couche de priorité supérieure ne remplace pas l’ensemble des Hooks d’une couche inférieure.

Si une même couche contient à la fois `hooks.json` et une section `[hooks]` intégrée, Codex les fusionne et affiche un avertissement au démarrage. Choisissez autant que possible une seule forme par couche.

## Examiner chaque Hook non administré

Codex enregistre la confiance à partir du hash de la définition du Hook. Un Hook non administré nouveau ou modifié est marqué comme en attente d’examen et ignoré jusqu’à ce que l’utilisateur approuve sa nouvelle définition.

Dans la CLI, `/hooks` permet de voir les sources, d’examiner les changements et d’approuver ou désactiver un Hook non administré précis. Les Hooks fournis par les Plugins suivent le même processus. Les Hooks administrés sont approuvés par la politique de l’organisation ; l’utilisateur ne peut pas les désactiver dans son navigateur personnel de Hooks.

## Deux gestionnaires exécutables

| Gestionnaire | Usage | Limite principale |
|---|---|---|
| `command` | Exécuter un script local recevant le JSON de l’événement sur stdin | Le script dispose des capacités d’un processus local ; ses dépendances et ses sorties doivent être examinées |
| `mcp_tool` | Appeler un outil d’un serveur MCP déjà connecté | Ne démarre ni ne reconnecte le serveur ; non pris en charge pour `SessionEnd` |

Selon la documentation officielle actuelle, les gestionnaires `prompt` et `agent` peuvent être analysés, mais sont ignorés. Ne les placez pas dans une configuration censée fonctionner.

## Comportement à l’exécution

- Plusieurs Hooks `command` correspondants démarrent en parallèle ; l’un ne peut pas empêcher le démarrage d’un autre qui correspond déjà.
- La valeur par défaut de `timeout` est de 600 secondes pour la plupart des Hooks. Pour `SessionEnd`, elle est de 1 seconde, avec un maximum de 3 secondes. Un script de garde en production devrait tout de même définir explicitement un délai plus court.
- Le répertoire de travail d’un Hook `command` est le `cwd` de la session. Pour les scripts du dépôt, résolvez le chemin depuis la racine Git afin qu’un lancement depuis un sous-dossier ne casse pas les chemins relatifs.
- Les Hooks asynchrones conviennent aux journaux et à l’analyse, mais ne peuvent ni bloquer, ni approuver, ni modifier, ni contrôler l’opération qui les déclenche.

## Rapport avec les autres couches de sécurité

| Couche | Responsabilité |
|---|---|
| Bac à sable | Limites d’accès aux fichiers, au réseau et aux capacités système |
| Approbation | Décision humaine avant une action à risque élevé |
| Règles de commandes | Autorisation ou refus déclaratif de motifs de commande connus |
| Hook | Logique personnalisée et testable à des étapes du cycle de vie |
| Permissions côté serveur | Autorité finale de lecture et d’écriture dans les systèmes externes |

Les outils couverts par les Hooks ne constituent pas une frontière de sécurité complète. La documentation officielle précise que certains chemins d’outils spécialisés peuvent contourner le parcours Hook par défaut ; les outils hébergés, comme WebSearch, ne passent pas non plus par les Hooks locaux `PreToolUse` ou `PostToolUse`.

## Ordre d’adoption

1. Commencez par des journaux expurgés dans `PostToolUse` ou `SessionEnd` pour observer le comportement réel.
2. Pour les problèmes dont vous êtes très sûr, utilisez `systemMessage` ou un ajout de contexte pour avertir.
3. Ne bloquez dans `PreToolUse` que si la règle est certaine, que le script dispose de fixtures et que les faux positifs sont acceptables.
4. Alignez les Hooks avec la CI, les contrôles avant commit et les permissions côté serveur pour éviter des politiques contradictoires.

## Liste de vérification

- [ ] Les noms d’événements proviennent de la liste officielle actuelle.
- [ ] Les matchers ne couvrent que les outils ou sources nécessaires.
- [ ] Les scripts disposent de tests sur entrées fixes et de messages d’erreur lisibles.
- [ ] Les journaux ne conservent ni tokens, ni prompts complets, ni paramètres d’outils sensibles.
- [ ] Les cas d’échec, de dépassement de délai et de désactivation des Hooks ont été testés.
- [ ] L’équipe comprend ce que signifient les changements de confiance affichés dans `/hooks`.

## Source officielle

- [OpenAI : Hooks](https://learn.chatgpt.com/docs/hooks)

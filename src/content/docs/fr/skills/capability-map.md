---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web / application de bureau / Codex CLI / IDE (voir le détail des mécanismes dans le texte)"
  basis: "Modèle des responsabilités et limites d’accès reconstruit à partir des documents officiels OpenAI sur Skills, Plugins, MCP, Hooks, Scheduled tasks et Subagents accessibles le 25 août 2026."
  checkedAt: "2026-08-25"
title: Carte des capacités d’extension
description: "Comprendre les extensions de Codex à travers huit responsabilités : tâche, règles, processus, outils, garde-fous, distribution, déclenchement et parallélisme."
locale: fr
source_locale: zh-CN
source_revision: 183812c
translation_status: draft
translated_at: 2026-09-20
---

Les mécanismes d’extension se confondent facilement, car ils apparaissent souvent dans un même flux de travail. Pourtant, ils ne répondent pas au même besoin.

Cette page présente d’abord une vue d’ensemble : le prompt et `AGENTS.md` définissent la tâche et les règles du projet ; un Skill décrit un processus réutilisable ; MCP donne accès à des outils externes ; un Hook intervient à des étapes du cycle de vie ; un Plugin regroupe et distribue des capacités ; une Scheduled task déclenche une exécution à un moment prévu. Ces mécanismes peuvent se combiner. Il n’existe pas d’ordre de « montée en gamme » obligatoire.

## Architecture du système

![Architecture d’un système de travail Codex réutilisable](/diagrams/codex-work-system-architecture-fr.svg)

Retenez trois points en lisant le schéma :

- **La tâche actuelle** indique quoi faire cette fois-ci ; les règles du projet indiquent ce qu’il faut respecter à chaque fois.
- **Les capacités d’exécution** peuvent élargir le champ d’action sans prouver que le résultat est correct. MCP, les sous-Agents et les scripts restent soumis aux permissions et aux critères d’acceptation.
- **La distribution et le déclenchement** ne constituent pas le processus lui-même. Un Plugin regroupe les capacités ; une Scheduled task démarre une exécution à l’heure prévue.

## Huit responsabilités

| Responsabilité | Mécanisme | Sert surtout à | Ne prend pas en charge |
|---|---|---|---|
| Tâche actuelle | Prompt | Définir le travail de cette fois, son périmètre et son acceptation | Les règles durables du projet |
| Règles persistantes | `AGENTS.md` | Définir commandes du dépôt, conventions et limites de répertoires | Les étapes complètes d’une catégorie de tâches |
| Processus réutilisable | Skill | Fournir étapes stables, références, modèles et scripts auxiliaires | Obtenir des droits sur un système externe sans autorisation |
| Outils externes | MCP / connecteur | Donner à Codex accès aux données et actions hors du dépôt | Décider si l’objectif métier est juste |
| Garde-fou du cycle de vie | Hook | Journaliser, vérifier, ajouter du contexte ou bloquer avant ou après une session ou un appel d’outil | Remplacer les tests et la revue humaine |
| Distribution groupée | Plugin | Regrouper Skills, connecteurs, MCP, Hooks et modèles de tâches | Rendre toutes les capacités fiables automatiquement |
| Déclenchement temporel | Scheduled task | Lancer périodiquement une tâche déjà vérifiée | Remplacer un prompt clair et des conditions de sortie |
| Répartition parallèle | Sous-Agent | Confier séparément explorations, tests ou revues indépendants | Éliminer automatiquement les conflits d’écriture et le coût de coordination |

## Comment ces capacités se combinent dans une tâche

Imaginons qu’une équipe vérifie chaque semaine les risques liés aux dépendances :

1. `AGENTS.md` précise le gestionnaire de paquets autorisé, les commandes de test et les répertoires à ne pas modifier.
2. Un Skill `dependency-audit` fixe les étapes de collecte des dépendances, de vérification des avis, de classement des risques et de validation.
3. Un MCP GitHub ou de registre de paquets fournit des informations externes ; privilégiez l’accès en lecture seule.
4. Un Hook peut bloquer une sortie contenant une véritable clé secrète ou consigner les appels d’outils externes.
5. Un Plugin distribue ensemble le Skill, la configuration MCP et le Hook à l’équipe.
6. Une Scheduled task lance le travail chaque semaine et crée seulement un rapport ou un brouillon d’issue, qu’une personne examine avant publication.

Avoir moins de couches ne rend pas la solution inférieure. Pour une vérification locale ponctuelle, un prompt clair et les commandes de terminal existantes peuvent suffire.

## Correspondances courantes

| Besoin | Choix conseillé |
|---|---|
| Uniformiser le style du code et les commandes de test | `AGENTS.md` |
| Standardiser le processus de revue d’une PR | Skill |
| Lire des tickets Jira ou Linear | MCP |
| Installer une intégration commune à toute l’équipe | Plugin |
| Rechercher des secrets avant chaque commit | Hooks |
| Préparer automatiquement un brouillon de rapport chaque lundi | Automations, puis publication humaine |

## D’une réussite ponctuelle à une ressource d’équipe

Cette progression aide à décider quand formaliser davantage :

| Étape | Forme | Quand l’utiliser |
|---|---|---|
| Prompt ponctuel | Instructions dans la conversation actuelle | Travail unique ou problème encore exploratoire |
| Modèle | Structure stable « objectif, contexte, contraintes, acceptation » | Tâche récurrente dont les étapes évoluent encore |
| Skill | `SKILL.md` accompagné de modèles, références ou scripts | Processus stable et réussite clairement définie |
| Plugin | Paquet réunissant Skills, connecteurs, MCP, Hooks et modèles | Installation, mise à jour et gouvernance communes nécessaires |
| Scheduled task | Tâche enregistrée, règle horaire et historique d’exécution | Travail déjà vérifié à la main et utile à répéter régulièrement |

MCP, Hook et sous-Agent ne sont pas des étapes obligatoires de cette progression. Ajoutez-les uniquement si la tâche exige réellement des outils externes, des garde-fous du cycle de vie ou une répartition parallèle.

Pour choisir selon le cas, consultez [Comment choisir un mécanisme d’extension](/fr/skills/choosing-an-extension-method/).

## Limites actuelles des produits

- Un Codex Skill est défini par un répertoire contenant `SKILL.md` ; il peut aussi comprendre des scripts, des références et des ressources. Codex charge la description complète lorsque c’est nécessaire.
- L’application de bureau, Codex CLI et l’extension IDE partagent la configuration MCP sur un même hôte Codex.
- Les Plugins sont actuellement utilisables dans les points d’entrée compatibles de ChatGPT, dans l’expérience de bureau Codex et dans Codex CLI. L’extension IDE ne permet pas de parcourir ni d’utiliser les Plugins.
- Les Scheduled tasks se créent et se gèrent depuis ChatGPT Web ou l’application de bureau. CLI et IDE peuvent aider à tester un prompt, un Skill ou un script, mais ne fournissent pas l’interface de gestion des tâches planifiées.
- Les sous-Agents conviennent aux explorations en lecture seule, aux tests et aux revues indépendants. Écrire en parallèle dans les mêmes fichiers augmente les conflits.

Les points d’entrée des produits peuvent évoluer. Avant de configurer un mécanisme précis, consultez la [comparaison des fonctionnalités](/fr/guide/reference/feature-comparison/) et les sources officielles ci-dessous.

## Sources officielles

- [Skills et Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Créer des Codex Skills](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)
- [Sous-Agents Codex](https://learn.chatgpt.com/docs/agent-configuration/subagents)

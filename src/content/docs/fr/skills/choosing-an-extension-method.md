---
title: Choisir une méthode d'extension
description: Choisir entre prompt, AGENTS.md, Skill, MCP, Hook, Plugin et Scheduled task selon ce qu'il faut conserver ou automatiser.
locale: fr
source_locale: zh-CN
source_revision: '28ae6f5'
translation_status: reviewed
translated_at: 2026-09-20
legacyVerification:
  status: verified
  products: ChatGPT Web / App de bureau / Codex CLI / IDE (prise en charge variable selon le mécanisme)
  basis: Responsabilités, points d’entrée des produits et limites de sécurité comparés à la documentation officielle OpenAI Skills, Plugins, MCP, Hooks et Scheduled tasks du 25 août 2026.
  checkedAt: '2026-08-25'
reviewed_at: '2026-10-26'
---

Quand les mécanismes d'extension se multiplient, l'erreur la plus fréquente consiste à choisir d'abord un nom technique, puis à chercher un problème auquel l'appliquer. Il vaut mieux commencer par cette question : **que voulez-vous conserver, ou que voulez-vous déclencher automatiquement ?**

Les termes les plus souvent confondus sont les suivants :

- Prompt
- AGENTS.md
- Skill
- MCP
- Plugin
- Scheduled task

Toutes ces méthodes « étendent Codex », mais un simple prompt suffit parfois. Les mécanismes plus lourds ne deviennent utiles que selon le besoin.

## Schéma de choix

![Schéma de choix d'une méthode d'extension pour Codex](/illustrations/map-extension-selection.webp)

Ce schéma n'est pas un arbre de décision exclusif. Un workflow mûr peut utiliser à la fois `AGENTS.md`, un Skill et MCP. Il sert à éviter de confier à un mécanisme un rôle qu'il remplit mal.

## Sept questions pour choisir

### 1. Cela concerne-t-il seulement la tâche actuelle ?

Commencez par un prompt. Précisez l'objectif, les entrées, le périmètre, les critères de réussite et les permissions. C'est l'option la moins coûteuse et celle qui permet d'observer le plus facilement les problèmes réels.

### 2. La règle doit-elle s'appliquer chaque fois que l'on entre dans ce dépôt ?

Écrivez-la dans `AGENTS.md` : commandes de test, style de code, répertoires à ne pas modifier ou règles d'installation des dépendances, par exemple. N'inscrivez pas durablement dans les règles du projet une demande ponctuelle.

### 3. Cette catégorie de tâches suit-elle des étapes et produit-elle des résultats stables ?

Créez un Skill. Il peut conserver des consignes réutilisables et, selon le besoin, des modèles, références, ressources ou scripts auxiliaires. Si les critères de réussite ne sont pas encore fixes, continuez d'expérimenter avec des prompts.

### 4. Faut-il accéder à des données ou effectuer des actions hors du dépôt ?

Évaluez MCP ou un Connector. Énumérez d'abord les outils et données réellement nécessaires ; privilégiez la lecture seule, le périmètre minimal et une configuration vérifiable. Si des fichiers locaux ou des commandes existantes suffisent, n'ajoutez pas de connexion externe.

### 5. Faut-il vérifier quelque chose à un moment précis du cycle de vie ?

Utilisez un Hook : contrôler une commande dangereuse avant l'appel d'un outil, analyser un correctif après une écriture ou enregistrer un résumé en fin de session, par exemple. Un Hook s'exécute automatiquement ; testez donc ses délais d'expiration, ses échecs et ses faux positifs.

### 6. Faut-il distribuer ensemble plusieurs capacités ?

Envisagez un Plugin. Cette couche de composition et de distribution peut contenir Skills, Connectors, MCP, Hooks et modèles de Scheduled tasks. Installer un Plugin ne signifie pas que ses connexions, scripts ou Hooks sont automatiquement dignes de confiance.

### 7. La tâche fonctionne-t-elle déjà bien manuellement et doit-elle se répéter à intervalles réguliers ?

Créez alors une Scheduled task. Vérifiez d'abord le prompt, le Skill, les permissions et le format du résultat dans une tâche ordinaire. Après la mise en place du calendrier, contrôlez les premières exécutions et conservez une validation humaine avant toute publication ou fusion.

## Choix selon le scénario

| Scénario | Combinaison recommandée |
|---|---|
| Uniformiser les tests et les règles de commit | AGENTS.md |
| Utiliser une liste de contrôle avant chaque fusion | Skill `pr-review` |
| Récupérer le contexte d'un ticket Linear | MCP + prompt de tâche |
| Produire un rapport hebdomadaire sur les dépendances | Scheduled task → ouvrir une issue en brouillon |
| Rechercher des secrets dans un correctif après écriture | Hook ou CI ; les deux dans les cas à haut risque |
| Faire installer à toute l'équipe une procédure de revue et des outils GitHub | Plugin, après examen des permissions et des Hooks |
| Produire chaque semaine un rapport sur les risques liés aux dépendances | Skill vérifié + Scheduled task + revue humaine |
| Examiner en parallèle sécurité, tests et maintenabilité | Plusieurs subagents en lecture seule, puis synthèse par l'Agent principal |

## Coûts comparés

| Mécanisme | Coût de création | Coût de maintenance | Risque de sécurité |
|---|---|---|---|
| Prompt | Faible | Faible | Faible |
| AGENTS.md | Moyen | Moyen | Faible |
| Skill | Moyen | Moyen | Faible à moyen |
| MCP | Élevé | Élevé | Moyen à élevé |
| Hook | Moyen | Moyen à élevé | Moyen à élevé |
| Plugin | Faible à installer / élevé à créer | Moyen à élevé | Moyen à élevé |
| Scheduled task | Moyen | Élevé | Élevé |

## Mauvaises pratiques

- **Accumuler les Skills** : en installer des dizaines dont les descriptions se disputent les mêmes tâches.
- **Employer MCP comme solution universelle** : ajouter une API pour une opération que `git` peut déjà accomplir.
- **Programmer sans critères de réussite** : modifier du code à heure fixe sans condition d'arrêt, preuves d'exécution ni revue humaine.
- **Recréer l'existant** : construire un MCP sur mesure alors qu'un Connector officiel répond déjà au besoin.
- **Placer une règle au mauvais endroit** : inscrire une exigence ponctuelle dans `AGENTS.md`, puis imposer cette ancienne contrainte à toutes les tâches suivantes.
- **Surcharger les Hooks** : exécuter un long processus métier à chaque appel d'outil, ce qui ralentit les tâches ordinaires ou les bloque à tort.

## Questions fréquentes

### 1. Dois-je installer un Plugin et connecter MCP dès le départ ?

Souvent, des prompts clairs, un périmètre maîtrisé et un bon `AGENTS.md` suffisent.

### 2. Après combien de répétitions une tâche mérite-t-elle un Skill ?

Il n'existe pas de nombre fixe. La fréquence est un indice ; la stabilité des étapes, la clarté des critères de réussite et le coût des échecs comptent davantage pour décider s'il faut automatiser les vérifications.

### 3. Par quelle méthode commencer lors d'une première utilisation ?

Le plus souvent, par l'une de ces trois options :

- Prompt
- `AGENTS.md`
- Skill

MCP et l'automatisation sans surveillance sont rarement nécessaires dès le début.

L'essentiel est de faire correspondre chaque mécanisme à sa responsabilité, de limiter les permissions et de pouvoir vérifier le résultat.

## Premier exercice pratique

Prenons la « revue du diff actuel avant fusion » :

1. Exécutez deux fois un prompt et notez les vérifications qu'il faut redemander à chaque fois.
2. Écrivez les commandes propres au dépôt dans `AGENTS.md`, par exemple `pnpm test` et l'interdiction de modifier les répertoires générés.
3. Transformez les étapes de revue, les niveaux de gravité et le format de sortie en Skill `pr-review`.
4. Ajoutez MCP ou un Connector uniquement si vous avez besoin des commentaires de PR GitHub ou de l'état de CI.
5. Ajoutez un Hook ou une Scheduled task uniquement si le contrôle doit se déclencher automatiquement à un moment précis.
6. Si plusieurs équipes doivent installer cet ensemble, regroupez alors ces capacités dans un Plugin.

À chaque couche ajoutée, reposez trois questions : quelles permissions apporte-t-elle, comment la vérifier et comment la désactiver ou revenir en arrière ?

## Pour aller plus loin

- [Carte des capacités d'extension](/fr/skills/capability-map/)
- [Modèles de validation humaine](/fr/cases/workflows/human-approval-patterns/)
- [Transformer un workflow en Skill](/fr/cases/workflows/turn-a-workflow-into-a-skill/) (page de parcours)

## Sources officielles

- [Skills et Plugins](https://learn.chatgpt.com/docs/skills-and-plugins)
- [Créer des Skills Codex](https://learn.chatgpt.com/docs/build-skills)
- [Codex MCP](https://learn.chatgpt.com/docs/extend/mcp)
- [Codex Hooks](https://learn.chatgpt.com/docs/hooks)
- [Codex Plugins](https://learn.chatgpt.com/docs/plugins)
- [Scheduled tasks](https://learn.chatgpt.com/docs/automations)

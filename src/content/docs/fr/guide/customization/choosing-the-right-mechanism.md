---
title: "Choisir le bon mécanisme"
description: Cadre de décision pour où placer les prompts temporaires, AGENTS.md, la mémoire, les Skills et MCP.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

Beaucoup de problèmes d'équipe viennent de **mettre la même information au mauvais endroit** : des règles qui devraient être dans le dépôt partent dans le chat, des flux réutilisables qui devraient être des Skills sont entassés dans `AGENTS.md`, et l'accès en lecture seule aux données est confié à un MCP à haut privilège.

Cette page se concentre sur une question pratique :

> Quand vous réalisez que « cela va se reproduire », dans quelle couche l'ancrer ?

## Tableau rapide

| Mécanisme | Idéal pour |
|---|---|
| Prompt ponctuel | Objectifs, contraintes et critères d'acceptation de cette tâche seulement |
| `AGENTS.md` | Règles de collaboration au niveau dépôt et contraintes à long terme |
| Mémoire | Préférences personnelles ou petit ensemble de faits non sensibles répétés entre sessions |
| Skill | Flux de travail réutilisables, listes de contrôle et playbooks spécialisés |
| MCP | Accès aux outils externes, sources de données et capacités système |

Si ce tableau ne suffit pas, continuez à lire.

## Méthode de décision en cinq étapes

### 1. Information qui s'applique uniquement à la tâche actuelle

Mettez ce type d'information dans **ce prompt** en premier.

Bon choix :

- « Modifier uniquement `docs/` cette fois ; ne pas toucher le code »
- « Produire un résumé en chinois et terminer par une question de confirmation »
- « Analyser la cause d'abord ; ne pas modifier les fichiers immédiatement »

Mauvais choix :

- L'équipe exige toujours `pnpm test`
- Répertoires interdits du dépôt
- Chaque revue PR doit suivre le même modèle

Ces règles à long terme doivent descendre plus bas.

### 2. Est-ce une règle de collaboration projet ou une habitude personnelle ?

Si c'est quelque chose que **chaque collaborateur devrait connaître**, mettez-le dans [`AGENTS.md`](/guide/customization/agents-md/what-is-agents-md/).

Par exemple :

- Commandes de test, lint et build
- Quels répertoires ne doivent pas être touchés
- Règles d'acceptation des messages de commit ou PR
- Conventions spéciales pour différents sous-répertoires en monorepo

Si c'est uniquement **votre préférence** — par exemple « expliquer en chinois » ou « conclusion d'abord, puis détails » — la [mémoire](/guide/customization/memories-and-persistent-context/) ou la configuration personnelle convient mieux.

Règle empirique :

- Si cela doit passer par une revue PR, préférez le dépôt
- Si que d'autres ne le voient pas est acceptable, envisagez la couche personnelle

### 3. Est-ce une « règle » ou une « procédure » ?

Beaucoup de docs sont difficiles à utiliser car elles mélangent règles et étapes.

| Si c'est… | Meilleur choix |
|---|---|
| « Ne pas push directement sur main » | `AGENTS.md` |
| « En revue, vérifier les tests d'abord, puis le risque, puis la régression » | Skill |
| « Exécuter ces 4 commandes avant la release » | Skill ou script |
| « Autoriser uniquement l'accès en lecture seule aux données d'issues » | MCP + configuration des permissions |

Pour décider, concentrez-vous sur ces deux points :

- **Les règles** répondent à « ce qui est permis et ce qui ne l'est pas »
- **Les étapes** répondent à « comment ce type de travail est habituellement fait »

Les étapes réutilisables conviennent généralement mieux en tant que [Skill](/skills/overview/).

## Combinaisons courantes, pas l'un ou l'autre

Les équipes matures n'utilisent généralement pas un seul mécanisme ; elles les combinent.

### Combinaison 1 : `AGENTS.md` + Skill

Idéal pour : revue de code, vérifications de release, triage d'incidents.

Division des responsabilités :

- `AGENTS.md` contient les contraintes strictes : pas d'auto-merge, quelles vérifications doivent s'exécuter
- Le Skill contient le processus : comment revoir, quel modèle produire, comment classer les issues

### Combinaison 2 : Skill + MCP

Idéal pour : lire les tickets, interroger les bases de données, récupérer les fichiers de design, générer les rapports hebdomadaires.

Division des responsabilités :

- Le Skill définit l'ordre d'exécution et le format de sortie
- MCP fournit « ce qui peut être connecté, interrogé et modifié »

Vous pouvez les penser séparément :

> Un Skill est comme une instruction de travail ; MCP est la boîte à outils que vous branchez.

### Combinaison 3 : `AGENTS.md` + mémoire

Idéal pour : règles d'équipe stables avec différentes habitudes d'expression personnelles.

Division des responsabilités :

- `AGENTS.md` contient les normes d'équipe partagées
- La mémoire garde les préférences personnelles comme la langue, le style d'explication et la structure de sortie par défaut

Ne faites pas l'inverse. Les règles d'équipe ne devraient pas vivre uniquement dans la mémoire d'une personne.

## Matrice de décision plus pratique

| Question | Oui | Non |
|---|---|---|
| N'affecte que la tâche actuelle ? | Prompt | Continuer à décider |
| Tout le monde devrait le suivre ? | `AGENTS.md` / configuration projet | Continuer à décider |
| Un flux de travail répétable ? | Skill | Continuer à décider |
| Nécessite des données ou actions externes en direct ? | MCP | Continuer à décider |
| Seulement une préférence personnelle à long terme ? | Mémoire / configuration utilisateur | Prompt |

Quand une exigence tombe dans deux colonnes en même temps, cela signifie généralement qu'il faut **diviser les couches** plutôt que tout forcer dans un seul endroit.

## Trois exemples typiques

### Exemple 1 : L'équipe oublie toujours les tests de régression

Ne dites pas seulement « n'oubliez pas les tests » dans le chat.

Une approche plus stable :

1. Écrire dans `AGENTS.md` : « les changements de logique métier doivent exécuter `pnpm test` »
2. Si le flux est complexe, ajouter un Skill d'exécution de tests
3. Utiliser la CI comme filet de sécurité final

### Exemple 2 : Chaque revue PR doit suivre le même format de sortie

Ne collez pas le modèle entier à chaque fois.

Une approche plus stable :

1. Transformer la structure de sortie en Skill
2. Dans `description`, indiquer clairement « utiliser quand l'utilisateur dit revue, audit ou vérification pré-merge »
3. Si l'équipe l'utilise uniformément, ajouter le chemin du Skill à la doc projet

### Exemple 3 : Besoin de lire les tickets Linear avant de modifier le code

Ne collez pas les tokens API dans la conversation.

Une approche plus stable :

1. Connecter Linear via MCP
2. Permissions en lecture seule par défaut
3. Si vous voulez un flux fixe, utiliser un Skill pour exiger « lire le ticket d'abord, puis le code, puis proposer un plan »

## Pièges les plus faciles

### Transformer `AGENTS.md` en encyclopédie

Le résultat est que les contraintes strictes ne sont pas visibles, et les commandes et zones interdites les plus importantes sont noyées. `AGENTS.md` fonctionne mieux quand il est court, strict et exécutable.

### Utiliser un Skill comme « fourre-tout universel »

Un Skill qui contient revue, release, débogage et rapports quotidiens devient difficile à activer et à maintenir.

### Traiter MCP comme la réponse par défaut

Si le dépôt a déjà l'information, vous n'avez pas besoin d'un outil externe juste pour paraître « avancé ». MCP est une extension de capacité, pas une récompense de complexité.

### Laisser la mémoire porter les faits d'équipe

Le compte qui le retient « possède » la règle ; quand il part ou change de machine, la règle disparaît. Cette information devrait retourner au dépôt.

## Ordre de déploiement recommandé

Si l'équipe est encore en désordre, vous pouvez converger dans cet ordre :

1. Écrire d'abord un `AGENTS.md` minimal viable
2. Transformer les flux répétés trois fois ou plus en Skills
3. Introduire MCP uniquement quand vous avez vraiment besoin de systèmes externes
4. Enfin organiser la mémoire personnelle et les préférences

Cela facilite la stabilisation du **consensus de collaboration** d'abord, puis l'expansion des capacités.

## Pour aller plus loin

- [Qu'est-ce que AGENTS.md](/guide/customization/agents-md/what-is-agents-md/)
- [Mémoires et contexte persistant](/guide/customization/memories-and-persistent-context/)
- [Vue d'ensemble des Skills](/skills/overview/)
- [Vue d'ensemble MCP](/skills/mcp/mcp-overview/)
- [Choisir une méthode d'extension](/skills/choosing-an-extension-method/)

## Références
- Documentation officielle OpenAI Codex (selon la version actuelle)
---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Recoupement avec les chapitres vérifiés du handbook sur `AGENTS.md`, contexte, Skills, MCP et qualité ; cette page ne conserve que le cadre de décision stable que les exigences temporaires, les règles projet, les préférences personnelles, le packaging de flux de travail et les capacités externes doivent être stockés dans des couches séparées.  
**Dernière vérification :** 2026-07-26

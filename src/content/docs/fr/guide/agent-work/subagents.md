---
title: Sous-agents
description: Déléguer des sous-Tâches à un Contexte isolé — quand diviser, comment transférer, comment accepter.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un **Sous-agent** est une **unité de travail indépendante** que l'Agent principal démarre pour un sous-problème spécifique — Contexte relativement isolé, résultats résumés vers le fil principal.

Considérez-le comme confier une petite Tâche clairement bornée à un assistant qui ne se concentre que sur cette pièce. La valeur n'est pas « plus cool » — c'est un focus plus propre, une parallélisation plus facile.

## Concept fondamental

| Agent principal | Sous-agent |
|---|---|
| Porte l'objectif global et la conversation utilisateur | Se concentre sur une sous-Tâche |
| Le Contexte inclut l'historique complet | Contexte plus propre pour l'exploration profonde |
| Coordonne et fusionne les résultats | Exécute exploration, recherche, implémentation spécialisée |

vs [Agents parallèles](/guide/desktop-app/parallel-agents/) : les sous-agents sont généralement **délégués par l'Agent principal**, pas plusieurs fenêtres que vous ouvrez manuellement (les implémentations produit peuvent se chevaucher — suivre l'UI actuelle).

## Quand la division paie

Toutes les grandes Tâches n'ont pas besoin d'une division — envisagez-la quand :

- Un sous-problème nécessite sa propre exploration profonde
- Ce sous-problème est un type de travail différent de la ligne principale
- Vous voulez une conclusion indépendante avant de continuer

Alors un sous-agent bat généralement le fil principal jonglant détail global et local en même temps.

## Cas d'usage

| Bon choix | Mauvais choix |
|---|---|
| Recherche ciblée : « comment le module auth valide le token » dans un grand repo | Nécessite des clarifications continues avec vous |
| Recherche parallèle sur deux options techniques | Sous-Tâches nécessitent des éditions mutuellement exclusives du même fichier |
| Analyse longue en lecture seule sans polluer le Contexte principal | Pas de livrable clair — « juste regarder » |

## Idées reçues courantes

### 1. Plus de sous-agents n'est pas toujours mieux

Trop nombreux ajoute du coût :

- Plus de résultats à lire
- Conclusions conflictuelles
- Overhead de coordination peut excéder le bénéfice

### 2. Tâche complexe → toujours sous-agents ?

Pas si fortement couplée et nécessite des confirmations fréquentes — le fil principal peut être moins coûteux.

### 3. Les sous-agents peuvent aussi faire toutes les éditions ?

Dépend de la délégation — mais défaut plus sûr :

- Sous-agent fait analyse lecture seule, comparaison, localisation
- Fil principal décide s'il modifie après lecture des conclusions

## Workflow recommandé

### 1. L'Agent principal écrit le contrat de sous-Tâche

```text
Sous-Tâche : analyse lecture seule de la logique de refresh de session dans packages/auth.
Livrable : résumé dans 1 page + chemins de fichiers clés + risques.
Interdit : changer un fichier ; ne pas pousser.
```

Ce qui compte est clarifier quatre choses :

- Exactement ce qu'il gère
- À quoi ressemble la sortie
- Actions interdites
- Qui décide après le retour

### 2. Le sous-agent exécute et retourne un résultat structuré

Format attendu :

```text
## Conclusion
## Preuves (fichier:ligne)
## Prochaines étapes suggérées
## Questions ouvertes
```

### 3. L'Agent principal fusionne et décide

Le fil principal (ou vous) choisit un chemin, puis entre en exécution selon [explorer—planifier—exécuter—vérifier](/cases/workflows/explore-plan-execute-verify/).

### 4. Acceptation

- La sortie du sous-agent peut être vérifiée indépendamment (ouvrir les fichiers et vérifier) ?
- A-t-il modifié le repo sans permission ?
- Si plusieurs sous-agents sont en conflit, est-ce signalé ?

## Quand envisager une division

Si une sous-Tâche remplit deux sur trois :

1. Peut être décrite indépendamment
2. A un livrable clair
3. N'a pas besoin de partage constant de Contexte fin avec le fil principal

## Avec Skills et MCP

- **Skill** : format de livrable standard pour sous-Tâches (ex. checklist de revue sécurité)
- **MCP** : sous-agent interroge en lecture seule les tickets externes ; Agent principal synthétise

## Erreurs courantes

- Périmètre sous-agent trop grand — devient un second Agent principal
- Pas de retour structuré — fil principal re-lit de longs logs
- Plusieurs sous-agents éditant le même répertoire en parallèle

Les sous-agents conviennent aux sous-problèmes avec limites claires, livrables clairs et complétion indépendante — pas dupliquer toute la Tâche principale.

## Lectures complémentaires

- [Coordination multi-agents](/cases/workflows/multi-agent-coordination/)
- [Transfert et reprise](/guide/agent-work/handoff-and-resume/)

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / Cloud  
**Base de vérification :** Vérifié croisé avec le matériel public OpenAI Developers sur les workflows multi-agents, longue durée et parallèles ; cette page confirme des principes stables — sous-Tâches isolées, limites claires, livrables explicites — tandis que les détails UI et planification restent non contractuels « selon le produit actuel ».  
**Dernière vérification :** 2026-07-26

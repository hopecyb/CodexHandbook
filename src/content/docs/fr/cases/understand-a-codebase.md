---
title: Comprendre une base de code
description: Exploration en lecture seule d'un dépôt inconnu pour établir une carte cognitive actionnable.
locale: fr
source_locale: zh-CN
source_revision: cb227a1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Comprendre une base de code

## Métadonnées

| Champ | Contenu |
|---|---|
| Public visé | Développeurs |
| Client | CLI / IDE |
| Durée estimée | 30–60 minutes |

## 1. Objectif et contexte

**Objectif :** Comprendre les frontières des modules, les points d'entrée et les zones à risque avant toute modification.

**Critères de succès :** Pouvoir expliquer à quelqu'un le chemin principal « de la requête à la réponse » ou « de la commande à la sortie ».

## 2. Prompt recommandé

```text
Ne modifiez pas encore le code. Lisez @src/ et @README, et expliquez en 8 points maximum :
1. Objectif du projet et pile technique
2. Responsabilités des répertoires principaux
3. Points d'entrée de démarrage/tests
4. Les 3 fichiers les plus pertinents pour [mon objectif]
5. 3 questions à me confirmer
```

## 3. Vérification

- Vérifier par échantillonnage le `package.json` réel et les fichiers d'entrée
- Consigner les conclusions dans une issue ou un résumé `AGENTS.md`

## 4. Voir aussi

- [Modèle de compréhension](/fr/prompts/templates/understand/)
- [Explorer—Planifier—Exécuter—Vérifier](/fr/cases/workflows/explore-plan-execute-verify/)

---

**Statut :** verified  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Les cas d'usage Codex actuels d'OpenAI Developers incluent toujours « Understand large codebases », avec un accent sur le suivi du chemin principal, l'identification des modules clés et la localisation rapide des fichiers pertinents ; cet exemple relève d'une exploration en lecture seule, cohérente avec le positionnement officiel actuel.

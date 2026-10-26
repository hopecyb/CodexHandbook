---
legacyVerification:
  status: "verified"
  products: "ChatGPT Web, bureau et mobile ; Codex bureau et CLI ; Plugins non pris en charge dans l’extension IDE"
  checkedAt: "2026-08-26"
title: Plugins
description: Parcourir, installer et gérer des ensembles réutilisables de Skills, connecteurs, MCP, Hooks et modèles de tâches.
locale: fr
source_locale: zh-CN
source_revision: '8917a59'
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Un Plugin regroupe et distribue des capacités. Il peut comprendre des Skills, des connecteurs, des serveurs MCP, des extensions de navigateur, des Hooks et des modèles de Scheduled tasks. Ce sont ces composants qui exécutent le travail.

## Pour qui ?

- Les personnes qui souhaitent installer depuis un catalogue public un ensemble de capacités prêtes à l’emploi.
- Les responsables qui veulent distribuer processus, outils et garde-fous d’équipe comme une unité versionnée.
- Les administrateurs chargés d’examiner la provenance, les permissions des services externes et les Hooks d’un Plugin.

## Surfaces actuellement prises en charge

| Surface | Parcourir et installer | Utiliser |
|---|---|---|
| ChatGPT Web et application de bureau | Onglet Plugins | Chat et Work |
| ChatGPT Mobile | Pas un point d’entrée principal pour la gestion | Utiliser les Plugins déjà installés sur le compte |
| Codex dans l’application de bureau ChatGPT | Onglet Plugins | Tâches Codex |
| Codex CLI | Navigateur `/plugins` ; ouvrir une nouvelle session après installation | Environnement Codex |
| Extension IDE | **Plugins non pris en charge** | Utilisation séparée des capacités prises en charge par l’IDE, comme MCP ou Skill |

## Par où commencer ?

- [Présentation des Plugins](/fr/skills/plugins/plugins-overview/) : comprendre les composants, la prise en charge, la vérification de l’installation et l’examen de sécurité.
- [Carte des capacités d’extension](/fr/skills/capability-map/) : comparer Plugin, Skill, MCP, Hook et Scheduled task.

## Questions à poser avant l’installation

1. Quelle est la provenance du Plugin et qui le maintient ?
2. Quels Skills, connecteurs, MCP, capacités de navigateur et Hooks contient-il ?
3. Faut-il connecter un compte externe et quelles permissions cela donnera-t-il ?
4. Les Hooks ont-ils été examinés et approuvés dans `/hooks` ?
5. Comment l’équipe peut-elle le désactiver, le mettre à jour, revenir à une version précédente et retirer les autorisations ?

## Source officielle

- [OpenAI : Plugins](https://learn.chatgpt.com/docs/plugins)

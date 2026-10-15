---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Cette page présente uniquement les couches de contexte et le parcours de lecture. Les liens internes et les concepts ont été revus ; le texte ne dépend pas de versions, de tarifs ou de détails d'interface susceptibles de changer."
  checkedAt: "2026-07-26"
title: "Contexte"
description: "Gérer le contexte du projet, des fichiers et de la conversation."
locale: fr
source_locale: zh-CN
source_revision: d2baf42
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 16
---

Le contexte est l'information que le modèle peut **utiliser efficacement maintenant**. S'il est mal géré, même un bon prompt se perd dans le bruit.

En pratique, il s'agit de ce que Codex a effectivement vu pendant cette tâche, peut consulter et peut utiliser pour décider. Ce que vous savez mais ne lui avez pas fourni ne fait pas partie du contexte de cette tâche.

![Illustration : règles du projet, fichiers choisis et conversation descendent vers l’agent en trois couches, un entonnoir écarte le superflu](/illustrations/context-layers.webp)

## Pourquoi ce chapitre est important

Bien des situations où l'on se demande « pourquoi s'est-il encore trompé ? » tiennent à une mauvaise gestion du contexte plutôt qu'à un prompt trop court.

- Trop d'informations sans rapport
- Un fichier essentiel n'a pas été fourni
- Une ancienne conversation détourne la nouvelle tâche
- Des informations contradictoires ne précisent pas quelle source s'applique

## Comment lire ce chapitre

Pour une première lecture suivie, procédez dans cet ordre :

1. Comprendre ce que contient le contexte
2. Distinguer le contexte du projet, des fichiers et de la conversation
3. Examiner ensuite la priorité, la compaction, le ciblage et les données sensibles

## Navigation dans ce chapitre

- [Contexte du projet](/fr/guide/context/project-context/)
- [Contexte des fichiers et dossiers](/fr/guide/context/file-and-folder-context/)
- [Contexte de conversation](/fr/guide/context/conversation-context/)
- [Priorité du contexte](/fr/guide/context/context-priority/)
- [Compaction](/fr/guide/context/compaction/)
- [Garder le contexte ciblé](/fr/guide/context/keep-context-focused/)
- [Contexte sensible](/fr/guide/context/sensitive-context/)

Ce chapitre rappelle constamment que le contexte dépend de ce que Codex a réellement vu pour cette tâche. S'il devrait, selon vous, savoir quelque chose que vous ne lui avez pas fourni cette fois, cela ne fait pas partie du contexte.

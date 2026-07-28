---
title: Contexte et fichiers
description: Gérer les projets, les fichiers, le Contexte de conversation et les types d'entrée courants.
sidebar:
  order: 15
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Contexte et fichiers

Le **Contexte** est ce que Codex peut voir, référencer et traiter à cet instant.

Vous savez peut-être exactement ce que vous voulez, mais si des éléments clés manquent, le travail dérive — comme un nouveau collègue sans le bon arrière-plan. Une mauvaise gestion du Contexte noie même de bons Prompts dans le bruit.

## Ce que le Contexte inclut

Imaginez ce dont un nouveau collègue aurait besoin dans un chat de groupe :

- Vos instructions de Tâche — la question actuelle
- Les fichiers que vous ouvrez pour cela — le matériel de fond
- Les docs de règles du dépôt — les accords d'équipe
- L'historique de conversation — la mémoire de cette Tâche

Ensemble, c'est le Contexte que Codex utilise.

## Modes d'échec courants

Beaucoup de cas « il a encore mal compris » sont des problèmes de Contexte :

- Trop peu d'information — il devine
- Trop d'information — la focalisation se perd
- Vous avez supposé qu'il connaissait un fichier mais ne l'avez jamais indiqué
- Longs fils anciens — les détails du début ne sont plus pertinents

Un critère simple pour cette page :

> **Montrez ce qui compte vraiment ; gardez le matériel non pertinent à l'écart.**

## Gestion du Contexte

- [Contexte de projet](/guide/context/project-context/) — `AGENTS.md`, conventions du dépôt
- [Contexte de fichiers et dossiers](/guide/context/file-and-folder-context/) — références @ et périmètre
- [Contexte de conversation](/guide/context/conversation-context/) — fils et compaction
- [Garder le Contexte focalisé](/guide/context/keep-context-focused/) — éviter le bruit non lié
- [Contexte sensible](/guide/context/sensitive-context/) — secrets et confidentialité

Comment organiser l'arrière-plan dans les Prompts : [objectifs et Contexte](/prompts/goals-and-context/).

## Fichiers et artefacts

Outre dire à Codex quoi faire, vous devez souvent **lui montrer des choses** :

- Code ou documents
- Captures d'écran
- PDF
- Feuilles de calcul
- Présentations

Différents types de fichiers impliquent différentes façons de lire, de prompter et de Vérifier.

## Fichiers et artefacts

- [Fichiers texte et code](/guide/files-and-artifacts/text-and-code-files/)
- [Images et captures d'écran](/guide/files-and-artifacts/images-and-screenshots/)
- [PDF et documents](/guide/files-and-artifacts/pdf-and-documents/)
- [Tableaux et feuilles de calcul](/guide/files-and-artifacts/tables-and-spreadsheets/)
- [Présentations](/guide/files-and-artifacts/presentations/)

## Ordre de lecture suggéré

Pas besoin de tout lire d'un coup :

1. [Contexte de fichiers et dossiers](/guide/context/file-and-folder-context/) — quels fichiers montrer
2. [Garder le Contexte focalisé](/guide/context/keep-context-focused/) — éviter de disperser la Tâche
3. Lisez les chapitres par type de fichier correspondant à ce sur quoi vous travaillez

Le Contexte est la pile d'informations dont Codex juge — bien le préparer rend les résultats plus faciles à obtenir.

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Page de navigation et méthodologie ; cadre selon lequel exigences de Tâche, matériel fichier, règles de projet et historique de conversation forment le Contexte, recoupé avec les chapitres actuels sur le Contexte et la gestion des fichiers — sans dépendre de détails d'interface volatils.  
**Dernière vérification :** 2026-07-26

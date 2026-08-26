---
title: Dépannage
description: Orienter les symptômes vers les bons tutoriels et pages produit.
sidebar:
  order: 18
locale: fr
source_locale: zh-CN
source_revision: d1ad457
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Si quelque chose est déjà cassé mais que vous ne savez pas dans quelle catégorie cela tombe, commencez ici.

Pas besoin de diagnostiquer CLI vs IDE vs Cloud vs permissions vs Prompt d'abord. Classez par symptôme, puis ouvrez le bon chapitre.

## Ce que vous pouvez faire ici

- Où trier quand quelque chose échoue
- Point de départ minimal quand vous ne pouvez pas classer l'erreur
- Problèmes d'installation, permissions, Contexte ou description de Tâche

# Dépannage

| Symptôme | Aller vers |
|---|---|
| Échec d'installation | [Dépannage bureau](/fr/guide/desktop-app/troubleshooting/) · [Dépannage CLI](/fr/guide/cli/troubleshooting/) · [Dépannage IDE](/fr/guide/ide/troubleshooting/) |
| Échec connexion/auth | [Connexion](/fr/guide/getting-started/sign-in-and-authentication/) |
| Client incertain | [Choisir votre client](/fr/guide/choose-your-client/) · [Comparaison des fonctionnalités](/fr/guide/reference/feature-comparison/) |
| Résultats mauvais ou hors périmètre | [Cas première Tâche](/fr/cases/first-task/) · [Débogage de Prompt](/fr/prompts/prompt-debugging/) · [Annuler](/fr/guide/getting-started/undo-and-recover/) |
| Confusion de Contexte | [Garder le Contexte focalisé](/fr/guide/context/keep-context-focused/) |
| Questions permissions/Bac à sable | [Permissions et Bac à sable](/fr/guide/permissions-and-sandbox/) |

## Quand vous ne savez pas où chercher

Au premier passage de dépannage, choisissez un :

- Ne démarre pas du tout
- Démarre mais erreur en cours d'exécution
- Pas d'erreur, mais mauvais résultats
- Pas une erreur — entrée ou façon de Tâche peu claire

Classer en ces quatre accélère la suite.

## Idées reçues courantes

### 1. Le dépannage exige d'abord un vocabulaire expert

Non.

Le premier passage concerne la grande catégorie — pas mémoriser le jargon.

### 2. Pas de message d'erreur signifie pas un problème de dépannage

« Mauvais résultats », « dérive continuelle » et « ne sais pas comment commencer » appartiennent aussi ici.

### 3. Quand bloqué, cliquer au hasard sur des pages

Mieux vaut souvent faire une pause, classer le problème, puis ouvrir une page ciblée.

Triage avant réparation.

Plus de référence : [FAQ](/fr/guide/reference/faq/) · [Référence des erreurs](/fr/guide/reference/error-reference/) · [Docs officielles Codex](https://developers.openai.com/codex)

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** Routage par symptôme uniquement vers chapitres installation, connexion, permissions, Contexte et qualité des résultats ; chemins liés vérifiés ; la page ne dépend pas de codes d'erreur, versions ou libellés d'interface spécifiques.  
**Dernière vérification :** 2026-07-26

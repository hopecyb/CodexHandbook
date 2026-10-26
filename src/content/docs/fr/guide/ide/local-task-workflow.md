---
legacyVerification:
  status: verified
  products: IDE
  basis: 'L''aide actuelle d''OpenAI décrit toujours l''extension IDE comme un client utilisé avec un dépôt local. Ce flux suit une boucle de collaboration stable : ouvrir l''espace de travail, limiter les fichiers, décrire la tâche, examiner le diff, lancer les tests et créer le commit soi-même. Il ne dépend pas d''une interface précise de l''extension.'
  checkedAt: '2026-07-26'
title: Flux d'une tâche locale
description: Lancer, suivre et terminer une tâche Codex locale dans l'IDE à partir des fichiers ouverts et des sélections.
sidebar:
  order: 50
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "0264d4d"
reviewed_at: '2026-10-26'
---
Une tâche locale dans l'IDE suit la boucle **ouvrir → sélectionner → décrire → examiner → tester**. Elle convient aux petites modifications fréquentes. Voici un parcours pratique courant ; pour les détails du contexte, voir [code sélectionné et fichiers ouverts](/fr/guide/ide/selected-code-and-open-files/).

## Flux recommandé

1. **Ouvrez la racine de l'espace de travail** : tout le dépôt, pas un seul fichier.
2. Ouvrez les fichiers concernés et [sélectionnez un passage de code](/fr/guide/ide/selected-code-and-open-files/) si nécessaire.
3. Dans le panneau Codex, indiquez l'objectif, les contraintes et la [définition du travail terminé](/fr/prompts/define-done/).
4. Si la tâche est complexe, [demandez un plan](/fr/prompts/ask-for-a-plan/) avant l'exécution.
5. [Examinez les changements](/fr/guide/ide/reviewing-changes/) dans le diff ou la vue intégrée.
6. Exécutez les tests du projet dans le terminal de l'IDE.
7. Créez vous-même le `git commit`, sauf si votre équipe a explicitement autorisé l'agent à le faire.

## Exemple de consigne

```text
Modifie seulement src/auth/login.ts et les tests correspondants.
Objectif : quand l'adresse e-mail est vide, remplacer la réponse 500
par 400 avec un message d'erreur.
Ne modifie pas package-lock et n'exécute pas git push.
Terminé : lance npm test -- auth et résume les changements.
```

## Quand choisir une autre entrée

| Situation | Entrée suggérée |
|---|---|
| Tâches parallèles ou arbres de travail | [Application de bureau](/fr/guide/desktop-app/) |
| Scripts ou CI | [CLI non interactif](/fr/guide/cli/non-interactive-mode/) |
| Environnement distant standardisé et création de PR | [Tâche cloud dans l'IDE](/fr/guide/ide/cloud-task-workflow/) |

## Erreurs courantes

- Ne pas ouvrir l'espace de travail et manquer ainsi `AGENTS.md`.
- Accepter toutes les suggestions intégrées en un clic.
- Créer le commit sans avoir lancé les tests.

Pour le contexte, voir [contexte de l'éditeur](/fr/guide/ide/editor-context/) et [contexte des fichiers et dossiers](/fr/guide/context/file-and-folder-context/).

## Questions courantes

### 1. Pourquoi ouvrir absolument la racine de l'espace de travail ?

Une grande partie du contexte de l'extension dépend du projet complet, et non d'un fichier isolé.

### 2. Comme les modifications dans l'IDE sont faciles, peut-on moins les examiner ?

Non. Cette facilité encourage à accepter sans réfléchir ; elle rend l'habitude de vérifier d'autant plus importante.

### 3. Quelle tâche choisir pour une première fois ?

Une tâche qui modifie un ou deux fichiers, produit un résultat facile à comprendre et se teste ou se prévisualise aisément.

Les tâches locales dans l'IDE gagnent à avancer par petites étapes ; la commodité ne remplace pas la revue et la vérification.

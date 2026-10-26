---
legacyVerification:
  status: verified
  products: App
  basis: 'La documentation actuelle d''aide OpenAI sur l''application de bureau couvre encore l''installation, la connexion, l''accès aux projets et les autorisations de fichiers locaux. Cette page suit une méthode stable fondée sur les symptômes : installation, connexion, autorisations, tâches en attente d''approbation et problèmes de contexte ou de périmètre.'
  checkedAt: '2026-07-26'
title: Dépannage de l'application de bureau
description: Solutions courantes aux problèmes d'installation, de connexion et de tâche.
locale: fr
source_locale: zh-CN
source_revision: "c298f9f"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 100
reviewed_at: '2026-10-26'
---
Pour résoudre un problème, commencez par les causes les plus probables et les plus faciles à traiter.

| Symptôme | Première vérification |
|---|---|
| Impossible d'installer ou d'ouvrir l'application | Vérifiez la configuration requise et le programme d'installation officiel ; redémarrez et réessayez |
| Impossible de se connecter | Vérifiez le réseau, les droits du compte et le SSO ; effacez la session et reconnectez-vous |
| Les fichiers du projet sont invisibles | Vérifiez que le bon dossier a été ajouté et que les autorisations système d'accès aux fichiers sont accordées |
| Une tâche attend indéfiniment une approbation | Revenez à la vue de la tâche et traitez la demande en attente |
| Les modifications ne correspondent pas aux attentes | Resserrez les contraintes, ouvrez une nouvelle conversation et vérifiez le contexte |

Si le problème persiste, consultez [developers.openai.com/codex](https://developers.openai.com/codex) et l'[index de dépannage](/fr/guide/reference/troubleshooting/).

## Idées reçues

### 1. Un problème signifie-t-il que j'ai commis une grave erreur ?

Bien des problèmes viennent simplement de ce que :

- Le mauvais chemin a été sélectionné.
- Une autorisation n'a pas été accordée.
- La tâche attend votre confirmation.
- Le contexte de la conversation est devenu confus.

### 2. Si Codex ne voit pas un fichier, que vérifier d'abord ?

Vérifiez le dossier du projet et les autorisations avant de conclure que le modèle n'en est pas capable.

### 3. Comment corriger des modifications inattendues ?

Commencez par réduire le problème :

- Rappelez le périmètre autorisé.
- Indiquez précisément ce qui ne va pas.
- Ouvrez une nouvelle conversation si nécessaire.

Commencez par les causes courantes et faciles à corriger. Inutile de supposer d'emblée que le problème est complexe.

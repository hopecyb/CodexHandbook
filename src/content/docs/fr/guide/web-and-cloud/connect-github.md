---
title: Connecter GitHub
description: Configurez l'accès de Codex Cloud à GitHub avec le périmètre de dépôts le plus restreint possible.
locale: fr
source_locale: zh-CN
source_revision: b811894
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Codex Cloud se connecte à GitHub ou à GitLab (Beta) avant de créer un environnement pour un dépôt. Le périmètre de l'autorisation GitHub détermine les dépôts visibles. Un clone local et les modifications non poussées restent hors de ce périmètre.

## Établir la connexion

1. Ouvrez Codex Cloud et connectez-vous avec un compte ChatGPT.
2. Connectez GitHub lorsque le produit vous le demande.
3. Dans l'autorisation GitHub, sélectionnez l'organisation et **uniquement les dépôts requis**.
4. Revenez dans Codex, sélectionnez le dépôt et créez un environnement Cloud.
5. Vérifiez le checkout, la branche et le diff avec une tâche en lecture seule ou une petite modification.
6. Pour utiliser la révision de PR, activez Code review pour le dépôt dans les paramètres Codex.

N'autorisez que les dépôts nécessaires au travail. Pour un dépôt d'équipe, vérifiez que l'organisation permet l'intégration, que votre compte possède les droits requis et que la protection des branches reste active.

## Avant et après la connexion

- [ ] La cible n'est pas un fork involontaire portant le même nom.
- [ ] La branche par défaut et le point de départ de la tâche sont connus.
- [ ] Les modifications locales nécessaires sont poussées ou explicitement exclues.
- [ ] Les écritures directes et non révisées sur la branche principale sont bloquées.
- [ ] L'environnement ne contient aucun identifiant de production sans restriction.
- [ ] La première tâche ne modifie qu'un fichier à faible risque.

## Deux flux de travail GitHub

### Laisser Cloud implémenter une tâche

Sélectionnez l'environnement du dépôt et la branche de départ dans Codex Cloud, puis décrivez l'objectif. Examinez le diff avant de créer une PR.

### Demander à Codex de réviser une PR

Après avoir activé Code review, ajoutez ce commentaire à la PR :

```text
@codex review
```

Codex publie une revue GitHub standard. La révision automatique doit être activée séparément dans les paramètres Codex. Les équipes peuvent ajouter leurs règles propres au dépôt sous `## Code Review Rules` dans `AGENTS.md`.

## Diagnostiquer les erreurs d'autorisation

- Dépôt absent : examinez le périmètre de dépôts GitHub autorisé.
- Un dépôt d'organisation renvoie 403 : examinez la politique de l'organisation, le SSO et l'installation de l'intégration.
- La révision automatique ne peut pas être activée : vérifiez les droits GitHub requis pour pousser ou administrer le dépôt.
- Cloud ne voit pas un commit local : Cloud extrait le dépôt distant ; poussez le commit sur une branche explicite.

N'accordez pas l'accès à tous les dépôts privés pour résoudre un seul code 403. Identifiez d'abord la cible exacte et l'autorisation manquante.

## Sources officielles

- [Démarrage rapide de Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- [Révision de pull request GitHub](https://learn.chatgpt.com/docs/third-party/github)

---

**Statut :** verified

**Produits concernés :** Cloud, GitHub

**Dernière vérification :** 2026-08-26

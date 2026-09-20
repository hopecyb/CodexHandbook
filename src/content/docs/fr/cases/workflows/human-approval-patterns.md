---
title: "Modes d’approbation humaine"
description: "Distinguez l’autorisation de la tâche de l’approbation d’un outil ; préparez le résultat à examiner avant de suspendre une action précise nécessitant une autorisation."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Les rôles distincts du bac à sable et des approbations ont été vérifiés. Les modes de collaboration ci-dessous sont des recommandations du manuel, pas des règles uniformes de dialogue pour tous les clients."
  evidence:
    - label: "Guide officiel sur le bac à sable et les approbations"
      href: https://learn.chatgpt.com/docs/agent-approvals-security
locale: fr
source_locale: zh-CN
source_revision: f60dbb5
translation_status: draft
translated_at: 2026-09-20
---
L’approbation doit correspondre à une action précise et à ses effets. L’autorisation de la tâche décrit ce que l’utilisateur veut obtenir ; l’approbation de l’outil détermine si une action peut être exécutée dans l’environnement actuel. Écrire un fichier, lancer une commande ou accéder au réseau n’exige pas systématiquement une nouvelle question. Le comportement dépend du périmètre autorisé, des politiques d’outils et du bac à sable. Voir le [guide officiel](https://learn.chatgpt.com/docs/agent-approvals-security).

## Trois modes de collaboration explicites

| Mode | Ce qui peut continuer | Quand attendre |
|---|---|---|
| Analyse en lecture seule | Lire, comparer et préparer une proposition | Ne pas modifier l’implémentation sans autorisation de l’utilisateur |
| Mise en œuvre dans le périmètre autorisé | Modifier la zone définie, vérifier et préparer un résultat examinable | Information indispensable manquante, changement de périmètre ou nouvelle action non autorisée |
| Approbation distincte pour l’action finale | Terminer brouillons, builds, aperçus et préparation du retour arrière | Avant publication, envoi ou autre action expressément réservée |

Ce sont des accords de collaboration, pas de nouveaux modes du produit. Si une autorisation claire reste valable, ne la redemandez pas. Si une politique impose une approbation interactive, suivez le mécanisme en place.

## Mode 1 : ne proposer qu’un plan cette fois

```text
Cette fois, travaille en lecture seule : examine le projet et propose des modifications. Ne change pas le code et ne crée pas de commit.
Si une vérification écrit un cache, une capture ou un fichier de sortie, signale-le ; ne suppose pas que tout « test » est en lecture seule.
```

Ce mode convient lorsque l’objectif n’est pas arrêté et que des solutions doivent être comparées. Même en lecture seule, vérifiez les effets réels des commandes. N’associez pas sans vérification « tests autorisés » et « aucune écriture sur disque ».

## Mode 2 : terminer le travail local sans pauses répétées

```text
Tu peux modifier ces trois documents et les liens internes associés, puis exécuter les vérifications de build existantes.
Achève le travail dans ce périmètre sans attendre à chaque étape ; règle les détails ordinaires et signale-les.
Ne publie pas le site et n’envoie pas de messages. Explique d’abord tout choix nécessaire ou action hors périmètre.
```

La modification et la vérification sont déjà autorisées ici : inutile de redemander avant chaque écriture. L’autorisation d’une commande précise dépend toujours de l’environnement ; un prompt ne peut contourner un refus.

## Mode 3 : approuver une publication précise

Préparez d’abord une version examinable, puis indiquez :

- La version ou le livrable exact à publier et ses résultats de vérification.
- L’environnement cible, le destinataire ou les personnes concernées.
- Les effets externes prévus et la méthode de récupération nécessaire.
- Les autorisations ou conditions encore manquantes.

Approuver « cette version sur le site de test » n’autorise pas toute version future en production. À l’inverse, une même action déjà clairement approuvée ne doit pas susciter une nouvelle demande à cause d’un modèle générique.

## Continuer après un refus

Conservez le refus d’origine et distinguez autorisation manquante, interdiction par politique et panne d’environnement. Continuez si une solution plus étroite reste valide pour la tâche. Ne contournez pas la même restriction en changeant d’outil, d’orthographe de commande ou de prompt. Si une action de l’utilisateur est nécessaire, expliquez l’action bloquée, la raison et les options suivantes.

## Ce que vérifie la personne chargée de la revue

Elle vérifie que périmètre et résultat correspondent, que les contrôles ont réellement eu lieu et que les effets externes sont compris. Un plan n’est pas une approbation automatique et « aucune anomalie » ne garantit pas un risque nul.

Pour la méthode, voir la [classification des tâches](/fr/prompts/ask-for-a-plan/) ; pour les conflits d’instructions, la [priorité du contexte](/fr/guide/context/context-priority/) ; pour les workflows sans surveillance, les [mécanismes d’arrêt, d’échec et de notification](/fr/skills/automations/scheduled-tasks/).

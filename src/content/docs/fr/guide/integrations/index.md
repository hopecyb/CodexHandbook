---
legacyVerification:
  status: verified
  products: Integrations
  basis: L'aide actuelle d'OpenAI sur les plugins et apps décrit toujours l'intégration par plugins, apps et modèles d'app, avec des contrôles administrateur distincts pour les rôles, les actions de lecture et d'écriture, les confirmations et les limites de données. Cette page traite des principes de conception, niveaux de permission et étapes de déploiement, sans dépendre de l'interface actuelle d'un système externe.
  checkedAt: '2026-07-26'
title: Intégrations (vue d'ensemble)
description: Comprendre les limites, permissions et boucles de retour en reliant GitHub, les tickets, la messagerie et les plateformes internes à Codex.
sidebar:
  order: 55
locale: fr
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: 140102c
---

L'intérêt d'une intégration ne tient pas seulement à l'ajout d'un outil. Elle place l'agent dans vos chaînes de travail existantes : hébergement du code, tickets, notifications, plateformes internes et bases de connaissances.

Avant de connecter quoi que ce soit, décidez :

- Qui peut déclencher cette automatisation ?
- Que Codex peut-il lire et écrire en retour ?
- Qui sera informé en cas d'échec, qui en répond et comment annuler le changement ?

## Que change réellement une intégration ?

Une intégration **fait entrer Codex dans vos systèmes habituels pour travailler avec vous**, au lieu de le limiter à une réponse dans une conversation.

Il peut, par exemple, lire une PR GitHub et préparer un commentaire, consulter un ticket et proposer une réponse, ou envoyer le résultat d'une tâche dans un outil de messagerie. Le changement essentiel est son entrée dans le travail réel.

## Idées reçues

### Plus d'intégrations n'est pas toujours mieux

Une équipe peut vouloir relier d'un coup GitHub, Jira, Slack, une base de connaissances et une API interne. Pour un premier essai, mieux vaut souvent un seul flux court dont la valeur est facile à observer. Plus il y a de connexions, plus les permissions sont difficiles à expliquer, les pannes à localiser et la confiance à préserver.

### « Automatisable » ne signifie pas « entièrement automatique dès le départ »

On peut être tenté d'automatiser immédiatement les changements d'état, de code, les notifications et les fusions. Une progression plus claire consiste à lire d'abord les données, produire ensuite des propositions, ajouter une confirmation humaine, puis seulement envisager l'écriture automatique. Les limites et les responsabilités deviennent ainsi plus compréhensibles.

## Trois questions avant de connecter des systèmes

### 1. S'agit-il de lire des données ou de modifier l'état du système ?

| Type | Risque | Approche proposée |
|---|---|---|
| Consultation seule | Relativement faible | Commencer ici |
| Rédaction d'un brouillon ou commentaire | Moyen | Ajouter une revue humaine |
| Changement d'état, création de PR ou envoi de messages | Plus élevé | Limiter les droits, journaliser et préparer un retour arrière |

Même lorsqu'une équipe réclame une modification automatique, une première étape utile consiste souvent simplement à **lire le contexte et formuler des propositions**.

### 2. L'usage est-il interactif ou asynchrone ?

| Scénario | Mécanisme adapté |
|---|---|
| Vous demandez à Codex d'examiner une issue pendant une session | MCP ou tâche interactive |
| L'ouverture d'une PR déclenche un brouillon de revue | Cloud, CI ou automatisation |
| Un état récapitulatif quotidien | Tâche planifiée ou en arrière-plan |

Un même système peut être connecté de plusieurs façons ; il n'est pas nécessaire d'imposer un mécanisme unique.

### 3. L'intégration aide-t-elle une personne ou décide-t-elle à sa place ?

Par défaut, placez Codex dans une **couche de proposition**, pas de décision finale. Il peut préparer un commentaire de revue de PR ou résumer des issues. La fusion automatique, la modification de la production ou la clôture de tickets à haut risque ne devraient pas être le réglage initial.

## Types courants d'intégration

### GitHub et hébergement de code

C'est une catégorie courante et mature. Elle peut servir à faire lire des dépôts à des tâches cloud, créer des branches et PR, exécuter des revues non interactives dans la CI et corriger un changement à partir de commentaires. Commencez par [Intégration GitHub](/fr/guide/integrations/github/) et [Web et Cloud](/fr/guide/web-and-cloud/).

### Tickets et gestion de projet

Linear, Jira, Trello ou un système interne de demandes en sont des exemples. Codex peut lire le contexte d'une issue avant de modifier le code, proposer un aiguillage selon les étiquettes ou états et résumer l'avancement. Une **connexion MCP en lecture seule associée à un flux Skill** est souvent un bon premier pas.

### Messagerie et notifications

Slack, l'e-mail et les messageries d'entreprise peuvent signaler la fin d'une tâche, un échec ou une attente d'approbation, ainsi que diffuser des résumés quotidiens ou hebdomadaires. La messagerie ne doit pas être la seule trace d'audit : conservez journaux et tickets pour les tâches importantes.

### Plateformes internes et bases de connaissances

Portails de développeurs, guides d'astreinte, API internes et sites de documentation peuvent apporter des règles d'équipe au contexte et permettre à Codex d'appeler des fonctions internes dans des limites définies. Les niveaux de permission et la fiabilité du contenu y sont particulièrement importants.

## Décider quoi essayer d'abord

Pour un premier tri, posez trois questions :

1. Ce travail se répète-t-il déjà dans l'équipe ?
2. Lire et organiser des informations suffit-il à créer une première valeur ?
3. Une personne peut-elle facilement corriger un résultat imparfait ?

Si les trois réponses sont oui, cette intégration mérite d'entrer dans un premier pilote.

## Ordre de déploiement conseillé

Pour une première intégration, progressez du risque le plus faible au plus élevé :

1. Reliez une source externe en lecture seule.
2. Faites produire à Codex un résumé ou une proposition sans exécution.
3. Ajoutez approbation humaine et notification.
4. N'envisagez l'écriture automatique qu'ensuite.

Vous vérifiez ainsi la valeur avant d'élargir les permissions.

## Une intégration minimale utile

Pour un brouillon de revue de PR :

1. GitHub déclenche une tâche.
2. Codex lit le diff et les règles pertinentes.
3. Il produit un brouillon de commentaire ou une liste de vérification.
4. Une personne décide de l'utiliser ou non.

Ce flux est plus facile à lancer et à faire accepter qu'une modification suivie d'une fusion automatiques du code.

## Liste de contrôle des risques

- [ ] Chaque intégration a un responsable nommé.
- [ ] Les permissions de lecture, commentaire et écriture sont distinctes.
- [ ] Il est possible de retracer ce qu'une tâche a lu et écrit.
- [ ] Un échec provoque une notification au lieu d'attendre d'être découvert.
- [ ] L'accès à des données sensibles fait l'objet d'une évaluation de sécurité.

Pour un premier essai, laisser Codex **observer et proposer** est généralement plus simple que lui faire immédiatement **modifier et exécuter**.

## Navigation dans le chapitre

| Intégration | Page |
|---|---|
| GitHub | [Intégration GitHub](/fr/guide/integrations/github/) |
| Slack, Linear, Jira, etc. | Consultez la documentation officielle et les chapitres MCP et automatisation du manuel au fur et à mesure de leur développement |

## Chapitres associés

- Pour les connecteurs et leur distribution, voir [Vue d'ensemble des plugins](/fr/skills/plugins/plugins-overview/).
- Pour les données externes, voir [Vue d'ensemble de MCP](/fr/skills/mcp/mcp-overview/).
- Pour l'exécution planifiée ou en arrière-plan, voir [Tâches planifiées et en arrière-plan](/fr/skills/automations/scheduled-tasks/).
- Pour la collaboration sur les dépôts cloud, voir [Web et Cloud](/fr/guide/web-and-cloud/).

## Source de référence

- Documentation officielle d'OpenAI sur les intégrations et le développement Codex.

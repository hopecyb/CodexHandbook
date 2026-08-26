---
title: Tâches Cloud depuis l'IDE
description: Déléguer depuis l'IDE une tâche longue à Codex Cloud, puis revenir à un résultat prêt à être révisé.
locale: fr
source_locale: zh-CN
source_revision: ea8a618
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

L'IDE permet de conserver les itérations rapides en local ou de se connecter à Codex web pour déléguer les travaux plus longs à Cloud. L'éditeur reste le point d'entrée, mais l'environnement d'exécution, l'état du dépôt et les limites réseau passent dans le cloud.

## Quand déléguer

| Rester en local | Déléguer à Cloud |
|---|---|
| Vous avez besoin d'échanges rapides sur la sélection actuelle | La tâche comporte de nombreuses étapes ou s'exécute longtemps |
| Elle dépend d'un état local non validé | Les entrées existent déjà dans un dépôt distant ou peuvent être importées |
| Elle exige un outil disponible uniquement en local | L'environnement cloud peut recréer les dépendances et les vérifications |
| Vous devez contrôler un processus local en cours d'exécution | Vous souhaitez poursuivre un autre travail en local |

Cloud ne dispose pas automatiquement de vos fichiers locaux non validés, de vos identifiants ni de vos processus en cours. Indiquez explicitement le dépôt, la branche et le commit de départ de la tâche.

## Liste de contrôle avant délégation

- [ ] Vous êtes connecté avec un compte ChatGPT ; Codex Cloud n'accepte pas la connexion par clé API.
- [ ] GitHub est connecté, ou l'intégration GitLab Beta actuellement prise en charge est utilisée.
- [ ] L'environnement cloud peut exécuter les scripts de configuration et de vérification.
- [ ] Les variables et Secrets requis sont configurés dans l'environnement, et non collés dans le prompt.
- [ ] Les modifications locales non validées sont prises en compte ou explicitement exclues.
- [ ] L'objectif, les chemins autorisés, les exclusions et les commandes d'acceptation sont explicites.

## Exemple de bout en bout

```text
Objectif : corriger le module de nouvelle tentative qui attend une fois de trop après avoir atteint sa limite.
Point de départ : acme/retry-service, branche fix/retry-limit.
Périmètre : modifier uniquement src/retry.ts et ses tests.
Contraintes : ne pas mettre à niveau les dépendances, modifier l'API publique ni pousser vers main.
Acceptation : exécuter pnpm test -- retry et pnpm typecheck ; afficher le diff et les résultats des commandes.
```

Workflow recommandé :

1. Joignez les fichiers ou les sélections utiles dans l'IDE pour confirmer le périmètre.
2. Choisissez Cloud pour poursuivre la tâche longue.
3. Examinez le plan, la progression et les résultats des vérifications dans Cloud.
4. Revenez dans l'IDE ou sur le web et examinez le résultat prêt à être révisé.
5. Récupérez la branche ou utilisez une pull request pour obtenir les modifications.
6. Relancez les tests dans un environnement local de confiance et effectuez une révision manuelle avant la fusion.

Dans le cloud, « terminé » signifie que l'exécution distante est achevée. Cela ne signifie pas que le code est prêt à être fusionné. Les dépendances distantes, le comportement du système d'exploitation ou les identifiants peuvent différer des environnements local et CI.

## Conflits et sécurité

- Ne laissez pas des exécutions locales et cloud modifier simultanément le même fichier.
- Ne collez pas d'identifiants de production dans les prompts ; utilisez les Secrets de l'environnement.
- Ne considérez pas l'accès Internet de Cloud comme une capacité activée par défaut ; configurez les domaines autorisés pour chaque environnement.
- Le push, l'ouverture d'une PR et la fusion sont des actions distinctes. Conservez une validation humaine ou par la CI avant la fusion.

Poursuivez avec [Environnements Cloud](/fr/guide/web-and-cloud/cloud-environments/) et [Créer des pull requests](/fr/guide/web-and-cloud/create-pull-requests/).

## Sources officielles

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**Statut :** vérifié

**Produits concernés :** IDE, Cloud

**Dernière vérification :** 2026-08-26

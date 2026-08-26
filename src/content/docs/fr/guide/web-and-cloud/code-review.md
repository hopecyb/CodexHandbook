---
title: Révision de code dans Cloud et GitHub
description: Révisez un diff Cloud et utilisez Codex sur GitHub comme réviseur complémentaire à signal fort.
locale: fr
source_locale: zh-CN
source_revision: a74296a
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 50
---

Une tâche Cloud terminée fournit un résumé et un diff. Vous pouvez poursuivre la conversation, demander des modifications ou créer une PR. La fin de la tâche ne vaut pas approbation de fusion : la CI, la protection des branches et le jugement humain restent applicables.

## Deux types de révision

| Type | Éléments examinés | Résultat |
|---|---|---|
| Révision du résultat Cloud | Résumé de la tâche, journaux et diff | Décider de poursuivre ou de créer une PR |
| Révision GitHub par Codex | Diff de la PR et règles `AGENTS.md` du dépôt connecté | Publier une revue de code GitHub |

Ajoutez ce commentaire à une PR GitHub :

```text
@codex review
```

Codex publie ses constats sous forme de revue GitHub standard. Selon les recommandations officielles actuelles, ses commentaires GitHub ciblent les problèmes prioritaires P0/P1 ; s'il ne trouve rien, Codex peut ne laisser qu'une réaction. Un faible nombre de commentaires ne dispense jamais d'une révision humaine.

## Ordre de révision

1. **Périmètre :** les fichiers, répertoires, dépendances et artefacts générés correspondent-ils à la tâche ?
2. **Comportement :** les chemins de réussite, d'échec et de limites respectent-ils l'exigence ?
3. **Sécurité :** examinez l'authentification, l'autorisation, le traitement des entrées, les identifiants et les accès réseau sortants.
4. **Preuves :** quels tests ont réellement été exécutés, et les échecs ont-ils été signalés ?
5. **Retour arrière :** la modification peut-elle être annulée de manière ciblée ou mélange-t-elle un refactoring sans rapport ?

Exemple de prompt :

```text
Révise cette PR. Signale uniquement les constats susceptibles de provoquer un
comportement incorrect, une perte de données, une faille de sécurité ou une
régression de compatibilité. Pour chaque constat, indique la gravité,
l'emplacement exact, la condition de déclenchement et l'impact. Ne présente pas
les préférences de style comme des défauts.
```

## Règles propres au dépôt

Ajoutez ceci au fichier `AGENTS.md` applicable :

```md
## Code Review Rules

### Authentication boundaries

- Flag any path that logs access tokens or sends them to non-allowlisted hosts.
  Safe path: keep tokens in the credential provider and redact diagnostic output.
```

Les règles de la racine s'appliquent à tout le dépôt ; un fichier `AGENTS.md` imbriqué peut ajouter des contrôles propres à un service. Commencez par deux ou trois règles stables qui décrivent un chemin sûr, plutôt que par une longue liste de noms de fonctions susceptibles de changer.

## Limite de la révision automatique

Les utilisateurs disposant des droits GitHub requis pour pousser ou administrer peuvent activer les révisions automatiques d'un dépôt dans les paramètres Codex. La révision automatique est un contrôle complémentaire et ne doit pas avoir le pouvoir de fusionner automatiquement. Les dépôts à haut risque ont toujours besoin de réviseurs obligatoires, de la CI et de la protection des branches.

## Liste de contrôle d'acceptation

- [ ] Une personne a révisé le diff de la logique principale.
- [ ] Les constats P0/P1 sont corrigés ou le risque est accepté par écrit.
- [ ] La CI réussit et toute nouvelle exécution est expliquée.
- [ ] Aucun Secret, fichier généré involontaire ou changement de lockfile sans rapport.
- [ ] La tâche, la description de la PR et le diff réel concordent.

## Sources officielles

- [Révision de pull request GitHub](https://learn.chatgpt.com/docs/third-party/github)
- [Révision de code entre clients](https://learn.chatgpt.com/docs/code-review)

---

**Statut :** verified

**Produits concernés :** Cloud, GitHub

**Dernière vérification :** 2026-08-26

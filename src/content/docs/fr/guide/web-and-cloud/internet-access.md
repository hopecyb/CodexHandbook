---
title: Accès à Internet
description: Distinguez la connectivité du setup de celle de l'Agent, puis limitez les risques par domaine et méthode HTTP.
locale: fr
source_locale: zh-CN
source_revision: 1e2d815
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 70
---

Cloud comporte deux phases réseau distinctes :

| Phase | Valeur par défaut | Objectif principal |
|---|---|---|
| Script de setup | Internet disponible | Installer les dépendances et les outils |
| Phase Agent | Désactivée par défaut | Permettre à l'Agent d'accéder à des ressources externes pendant la tâche |

La réussite de `pnpm install` pendant le setup ne signifie pas que l'Agent pourra ensuite appeler n'importe quel site avec `curl`.

## Pourquoi l'accès de l'Agent est désactivé par défaut

L'accès Internet de l'Agent augmente les risques d'injection de prompt, d'exfiltration de code ou de données, de dépendances malveillantes et d'introduction de contenus incompatibles avec les licences du dépôt. Une issue, une page Web ou le README d'une dépendance non fiables peuvent contenir des instructions conçues pour provoquer une exfiltration.

N'autorisez que les cibles et les actions nécessaires à la tâche, puis examinez les journaux du travail.

## Options

Configurez l'accès Internet de l'Agent pour chaque environnement :

- **Off :** bloquer tout accès Internet de l'Agent.
- **On :** autoriser l'accès, éventuellement limité par domaine et méthode HTTP.

Partez d'une liste de domaines vide, utilisez le préréglage Common dependencies ou sélectionnez All (sans restriction). N'utilisez pas un accès sans restriction comme raccourci de dépannage en production.

Pour consulter de la documentation ou télécharger en lecture seule, n'autorisez que `GET`, `HEAD` et `OPTIONS`. Vous bloquez ainsi `POST`, `PUT`, `PATCH` et `DELETE`, qui peuvent envoyer ou modifier des données.

## Exemple d'accès minimal

Une tâche doit lire la documentation publique d'une API :

1. Conservez l'accès sur Off et confirmez que l'échec est lié au réseau.
2. Activez l'accès Internet de l'Agent.
3. Ajoutez uniquement le domaine officiel de la documentation à l'allowlist.
4. Autorisez uniquement `GET`, `HEAD` et `OPTIONS`.
5. Relancez la tâche et examinez chaque requête sortante dans le journal.
6. Décidez ensuite s'il faut rétablir Off.

## Relation avec les Secrets

Les Secrets Cloud sont retirés avant la phase Agent, ce qui réduit le risque d'exfiltration directe d'un Secret de setup. Les variables d'environnement ordinaires, le contenu du dépôt et les données générées peuvent néanmoins être envoyés. Ne déguisez jamais une donnée sensible en variable ordinaire pour contourner le cycle de vie des Secrets.

## Liste de contrôle d'acceptation

- [ ] La nécessité d'un accès Internet pour l'Agent est documentée.
- [ ] L'allowlist contient uniquement les domaines nécessaires.
- [ ] Les méthodes HTTP sont réduites au strict minimum.
- [ ] Les entrées sont fiables ou le risque d'injection de prompt est pris en compte.
- [ ] Les journaux ne contiennent aucune commande téléversant le dépôt, l'environnement ou des identifiants.
- [ ] La source, la version et la licence des nouvelles dépendances ont été vérifiées.

## Sources officielles

- [Accès Internet de l'Agent](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Environnements Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)

---

**Statut :** verified

**Produit concerné :** Cloud

**Dernière vérification :** 2026-08-26

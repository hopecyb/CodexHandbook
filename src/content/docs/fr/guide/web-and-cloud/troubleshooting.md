---
title: Dépannage de Cloud
description: Diagnostiquez les échecs Cloud dans les couches dépôt, setup, réseau, Agent et livraison.
locale: fr
source_locale: zh-CN
source_revision: 4ba9a4d
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 80
---

Relancer une tâche Cloud prend plus de temps, mais n'ajoute ni autorisation, ni dépendance, ni configuration réseau manquantes. Commencez par identifier l'étape qui échoue.

## Triage en cinq couches

| Étape | Symptôme courant | Premier contrôle |
|---|---|---|
| Connexion du dépôt | Dépôt absent, erreur 403, branche absente | Périmètre d'autorisation GitHub, politique de l'organisation, branche de départ |
| Conteneur/setup | `command not found`, échec d'installation d'une dépendance | Runtime fixé, script de setup, Secret |
| Réseau de l'Agent | Le setup télécharge correctement, mais `curl` échoue dans l'Agent | Accès Agent sur Off par défaut, allowlist, méthodes HTTP |
| Exécution de l'Agent | Modifications hors périmètre, commande de test absente | Périmètre du prompt, `AGENTS.md`, journal du travail |
| Livraison | Diff incomplet, impossible d'ouvrir une PR | État de la branche, droits d'écriture, règles de protection |

## Conserver d'abord les preuves

Consignez le dépôt, le commit de départ, le nom de l'environnement, l'étape en échec, la première erreur significative et la commande complète. Ne conservez pas uniquement « exit 1 ».

```text
Environment: api-node22
Starting point: main@abc123
Stage: setup
Command: pnpm install --frozen-lockfile
First error: ERR_PNPM_FETCH_401 ...
Local difference: local uses ~/.npmrc; Cloud has no NPM_TOKEN configured
```

Ce relevé indique une piste de correction au lieu de forcer l'exécution suivante à deviner à nouveau.

## Échecs fréquents

### Le setup voit un Secret, mais pas l'Agent

C'est intentionnel : les Secrets sont retirés avant la phase Agent. Placez l'installation qui dépend d'identifiants dans le setup. Ne convertissez pas la valeur en variable d'environnement ordinaire pour contourner cette protection.

### Le setup accède à Internet, mais pas l'Agent

C'est également le comportement par défaut. Si la tâche exige réellement un accès Internet pendant la phase Agent, activez-le pour l'environnement, limitez les domaines et les méthodes, puis examinez les journaux.

### Les dépendances en cache sont obsolètes

Toute modification du setup, de la maintenance, des variables ou des Secrets invalide automatiquement le cache. Lorsque des changements dans le dépôt rendent le cache incompatible, utilisez **Reset cache** sur la page de l'environnement. Pour un environnement d'équipe partagé, évaluez d'abord les conséquences pour les autres utilisateurs.

### Le local est vert, mais Cloud est rouge

Comparez les versions de Node/Python, les lockfiles, les dépendances système, la configuration locale masquée, les services VPN ou localhost et la casse des chemins. Transformez ces différences en règles explicites de setup et de dépôt.

### La révision de PR ne s'est pas exécutée

Vérifiez la configuration Cloud du dépôt, l'activation de Code review, le commentaire exact `@codex review` et les autorisations de l'intégration GitHub. Les révisions automatiques doivent également être activées séparément.

## Quand revenir en local

Si le problème dépend d'un service local, ou si deux exécutions consécutives réparent l'environnement plutôt que le code métier, reproduisez-le d'abord en local. Ajoutez les commandes, versions et tests qui ont réussi à `AGENTS.md` ou au setup avant de déléguer de nouveau.

## Acceptation après correction

- [ ] Le même environnement s'exécute plusieurs fois depuis un point de départ propre.
- [ ] La correction ne masque pas le problème par un accès élargi au dépôt ou un réseau sans restriction.
- [ ] Les journaux n'exposent aucun Secret.
- [ ] Une personne révise toujours le diff et les tests du résultat.

## Sources officielles

- [Environnements Cloud](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Accès Internet de l'Agent](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

---

**Statut :** verified

**Produit concerné :** Cloud

**Dernière vérification :** 2026-08-26

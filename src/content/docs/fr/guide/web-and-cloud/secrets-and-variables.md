---
title: Secrets et variables d'environnement
description: Injecter en toute sécurité des clés API, tokens et configuration non sensible dans Cloud.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Les Tâches Cloud ont souvent besoin d'API privées, de registres de packages ou de bases de données. Les identifiants doivent être injectés via **Secrets et variables d'environnement** — pas écrits dans le code, les Prompts, les issues, les journaux de chat ou l'historique Git.

## Ce qui est couvert

- Secrets vs variables d'environnement ordinaires
- Comment configurer dans la console Cloud / paramètres du repo
- Relation avec les Secrets GitHub Actions

## Secret vs variable d'environnement

Une division simple :

- **Secret** : valeurs qui ne doivent pas être visibles par d'autres — clés API, mots de passe DB, clés privées
- **Variable d'environnement** : configuration que le programme lit — certaines sensibles, certaines non

Toutes les variables d'environnement ne sont pas des Secrets, mais les Secrets doivent utiliser une injection sécurisée — pas des valeurs codées en dur.

## Distinction conceptuelle

| Type | Exemples | Exigences de stockage |
|---|---|---|
| **Secret** | Clé API, clé privée, mot de passe DB | Chiffré, masqué dans l'UI, pas dans les logs |
| **Variable** | `NODE_ENV=production`, feature flags | Peut être non chiffré ; éviter quand même de divulguer la stratégie métier |
| **Repo `.env`** | Développement local | **Ne pas committer** ; Cloud utilise les Secrets de la console |

Vue d'ensemble du Contexte sensible : [Contexte sensible](/guide/context/sensitive-context/)

## Idées reçues courantes

### 1. « Je colle la clé juste une fois — quel risque ? »

Risque élevé. Une fois qu'une clé apparaît dans :

- La conversation
- Les issues
- Les descriptions de PR
- L'historique shell
- Les commits Git

elle peut se propager via les logs, notifications, captures d'écran, historique et collaborateurs.

### 2. « Je committerai `.env` pour que Cloud puisse le lire »

`.env` est pour le dev local, pas le contrôle de version. Dans Cloud, préférez la gestion de Secrets de la plateforme.

### 3. « Le nom du Secret n'a pas d'importance si la valeur est correcte »

Beaucoup d'échecs sont des problèmes de nommage/périmètre :

- Typos
- Mauvais périmètre
- Le code lit un nom de variable différent

Gardez les noms cohérents entre la doc, le code et les paramètres Cloud.

## Principes de configuration

1. **Moindre privilège** : chaque Secret seulement assez pour une classe de Tâche
2. **Isoler par repo/environnement** : séparer staging et production
3. **Rotation** : renouveler les tokens périodiquement ; accepter que les anciennes Tâches peuvent échouer
4. **Audit** : tracer qui a ajouté/modifié les Secrets (processus d'équipe)
5. **Ne jamais echo** : les logs de Tâche et commentaires PR ne doivent pas afficher les valeurs de Secret

## Flux de configuration minimal

1. Lister les services externes que la Tâche doit atteindre
2. Provisionner uniquement les Secrets nécessaires — éviter l'accès production complet dès le premier jour
3. Documenter les **noms** de Secret requis dans la doc — pas les valeurs
4. Exécuter une Tâche de test pour confirmer l'accès en lecture
5. Procéder au travail réel

## Workflow recommandé

```text
1. Ajouter Secret dans Cloud / paramètres GitHub (noms UPPER_SNAKE, ex. NPM_TOKEN)
2. Dans AGENTS.md noter « NPM_TOKEN requis pour packages privés » — pas la valeur
3. Démarrer Tâche Cloud ; confirmer que l'env peut lire (en cas d'échec vérifier nom et périmètre)
4. Aligner le nommage des Secrets GitHub Actions avec Cloud pour faciliter la documentation
```

Avec [l'intégration GitHub](/guide/integrations/github/), préférez les Secrets natifs de la plateforme plutôt que faire copier les clés par l'Agent depuis les corps d'issues.

## Quand traiter quelque chose comme un Secret

Si incertain, demandez :

- Une fuite causerait des dommages financiers, de données, de permissions ou métier ?

Si oui, cela ne doit pas apparaître dans la doc publique, les Prompts, le chat ou le repo.

## Accès Internet et Secrets

Certaines Tâches nécessitent des pulls de packages sortants ou des appels API :

- La politique sortante suit les règles de sécurité de l'org
- Même avec accès sortant, ne pas coller des Bearer tokens dans les Prompts
- Refus par défaut de l'accès Secret production pour les repos non fiables

## Erreurs courantes

| Erreur | Risque |
|---|---|
| Committer `.env` | Fuite permanente |
| Coller des clés dans issues/descriptions de Tâche | Propagation via logs et notifications |
| Secrets production sur des expériences | Changements production accidentels |
| Nom de Secret ne correspond pas au code | Échec silencieux de Tâche |
| Token admin pour la commodité | Rayon d'impact non contrôlé |

## Checklist d'acceptation

- [ ] Pas de clés codées en dur dans le repo (utiliser un scanner de secrets)
- [ ] Noms de Secret Cloud correspondent à la documentation
- [ ] Les logs d'échec ne contiennent pas le texte clair des Secrets
- [ ] Processus de départ/rotation défini

## Références

- OpenAI Codex Cloud secrets
- stormzhang `16-security.md`, `10-cloud.md`
- KimYx0207 sections sécurité et entreprise (vérifier les faits contre la doc officielle)

---

**Statut :** obsolète  
**Produits concernés :** Cloud  
**Note de revue :** Cette page décrit concrètement le placement des Secrets Cloud, le périmètre repo et les relations avec les Secrets GitHub Actions, mais manque de documentation officielle Secrets actuelle forte pour vérifier chaque affirmation ; mieux marqué `outdated` jusqu'à disponibilité de sources formelles.  
**Dernière vérification :** 2026-07-26

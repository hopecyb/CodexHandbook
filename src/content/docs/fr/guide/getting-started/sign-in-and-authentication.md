---
title: Connexion et authentification
description: Choisir la bonne méthode de connexion pour les clients locaux et Cloud, puis vérifier l'identité active en toute sécurité.
locale: fr
source_locale: zh-CN
source_revision: e17d14f
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Avec les modèles OpenAI, Codex propose deux méthodes de connexion personnelles :

- **Connexion avec ChatGPT :** utilisez l'allocation de votre abonnement et héritez des autorisations ainsi que de la politique de données de l'espace de travail ChatGPT.
- **Connexion avec une clé API :** utilisez une facturation à l'usage de l'API et héritez de la politique de données et d'administration de l'organisation API.

Le travail local dans l'App de bureau ChatGPT, Codex CLI et les intégrations IDE accepte les deux méthodes. **Codex Cloud exige une connexion avec ChatGPT.**

## Se connecter avec ChatGPT

Les clients locaux ouvrent un navigateur pour l'autorisation, puis transmettent les identifiants au client :

- App de bureau : choisissez de poursuivre la connexion depuis la page de déconnexion.
- CLI : exécutez `codex login`.
- IDE : sélectionnez la connexion avec ChatGPT depuis la page de déconnexion.

Vérifiez ensuite le compte et l'espace de travail actifs, en particulier lorsqu'un espace personnel et un espace d'entreprise utilisent la même adresse e-mail.

## Se connecter avec une clé API

Après avoir créé une clé dans OpenAI Platform, ne la saisissez pas directement dans l'historique des commandes. La CLI peut la recevoir sur l'entrée standard :

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

Dans l'App de bureau, choisissez l'autre méthode de connexion. Dans l'IDE, sélectionnez **Use API Key**. La connexion par clé API convient au travail local et à une CI de confiance, mais ne donne pas accès aux fonctions qui dépendent d'un espace de travail ChatGPT ou de Cloud.

## Vérifier et effacer l'identité de la CLI

```bash
codex login status
codex logout
```

La CLI et l'IDE partagent les informations de connexion mises en cache. Une déconnexion depuis l'un peut nécessiter une nouvelle connexion au prochain démarrage de l'autre.

## Sécurité des identifiants

- Ne validez jamais `~/.codex/auth.json` dans un dépôt et ne le collez pas dans un ticket, une conversation ou un journal.
- Privilégiez le stockage des identifiants fourni par le système d'exploitation. Considérez les jetons enregistrés dans des fichiers comme des mots de passe.
- Pour la CI, utilisez des identifiants dédiés et révocables plutôt qu'une clé personnelle à longue durée de vie.
- Codex Cloud accède directement aux dépôts de code : activez l'authentification multifacteur pour le compte. Le SSO de l'organisation doit l'imposer.
- N'utilisez pas une clé personnelle pour contourner les restrictions de l'organisation ; commencez par examiner l'espace de travail et la politique gérée.

## Connecté, mais toujours incapable d'utiliser une fonctionnalité

Procédez dans cet ordre :

1. Le bon compte ou la bonne organisation API est-il actif ?
2. Êtes-vous dans le bon espace de travail ChatGPT ?
3. La fonctionnalité visée exige-t-elle une connexion avec ChatGPT plutôt qu'une clé API ?
4. Le forfait, la licence, le rôle ou la politique de l'administrateur limitent-ils l'accès ?
5. Examinez seulement ensuite le cache du client, le réseau et la version.

La CLI dispose de journaux de connexion dédiés à l'assistance et au dépannage. Vérifiez qu'ils ne contiennent aucune donnée sensible avant de les partager.

Consultez [Comptes, forfaits et accès](/fr/guide/getting-started/account-plans-and-access/) pour connaître les limites des forfaits et la [page officielle sur l'authentification](https://learn.chatgpt.com/docs/auth) pour les informations à jour.

---

**Statut :** vérifié

**Produits concernés :** App / CLI / IDE / Cloud

**Base de vérification :** comparaison avec la documentation actuelle sur l'authentification concernant la connexion locale avec ChatGPT et une clé API, l'obligation d'utiliser ChatGPT pour Cloud, les commandes de la CLI, le partage du cache d'identifiants et les limites de stockage.

**Dernière vérification :** 2026-08-26

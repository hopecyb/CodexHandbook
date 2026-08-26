---
title: Comptes, forfaits et accès
description: Distinguer l'accès lié à un forfait ChatGPT, l'utilisation d'une clé API et les autorisations de l'espace de travail d'une organisation.
locale: fr
source_locale: zh-CN
source_revision: 7e2e8e6
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

Codex peut actuellement être utilisé avec un **forfait ChatGPT** ou avec une **clé API facturée à l'usage**, mais ces deux méthodes ne donnent pas accès aux mêmes points d'entrée ni aux mêmes règles de gouvernance.

## Commencer par choisir une méthode d'accès

| Méthode | Idéale pour | Limites d'accès |
|---|---|---|
| Connexion avec ChatGPT | Travail interactif personnel, environnement de bureau, Cloud et espaces de travail d'organisation | Dépend des limites du forfait ChatGPT, des rôles dans l'espace de travail et des politiques de l'administrateur |
| Connexion avec une clé API | Codex en local, scripts et CI | Facturation selon l'utilisation de l'API ; certaines fonctions liées à l'espace de travail ChatGPT ou au Cloud ne sont pas disponibles |

La page officielle des tarifs inclut actuellement ChatGPT Work et Codex dans les forfaits Free, Go, Plus, Pro, Business, Edu et Enterprise. Les tarifs, limites, modèles et fonctionnalités incluses peuvent évoluer. Ce manuel ne reproduit donc pas la grille tarifaire ; consultez la [page officielle des tarifs à jour](https://learn.chatgpt.com/docs/pricing).

## Pourquoi un compte peut rester sans accès

La connexion n'est que la première étape. L'accès final dépend aussi des éléments suivants :

1. le forfait actuel inclut-il le client ou la fonctionnalité visée ?
2. le produit est-il disponible dans votre région ?
3. votre organisation vous a-t-elle attribué la licence, le rôle et les autorisations requis dans l'espace de travail ?
4. une configuration gérée limite-t-elle les méthodes de connexion, les modèles ou les fonctions locales ?
5. l'utilisation a-t-elle atteint la limite de la période en cours ou la limite hebdomadaire ?

## Liste de contrôle pour un accès personnel

- Vous pouvez vous connecter au bon compte ChatGPT depuis une page officielle.
- Vous savez si l'utilisation est déduite des limites du forfait ou facturée selon l'usage de l'API.
- Le client visé affiche l'identité attendue.
- Lorsqu'une limite apparaît, vous consultez l'utilisation en cours au lieu de réinstaller le client à répétition.

## Liste de contrôle pour les équipes et les entreprises

- Vous avez sélectionné le bon espace de travail, et non un espace personnel associé à la même adresse e-mail.
- Un administrateur a configuré l'adhésion, les licences et les rôles.
- Le SSO, l'authentification multifacteur, la conservation des données et les politiques régionales répondent aux exigences de l'organisation.
- La configuration gérée n'impose pas une autre méthode de connexion locale.
- La clé API appartient à la bonne organisation API et n'est pas confondue avec la politique de l'espace de travail ChatGPT.

## Exemple de diagnostic

Si la CLI fonctionne avec une clé API, mais que le bouton Cloud n'est pas disponible, l'installation n'est probablement pas en cause. Cloud exige une connexion avec ChatGPT et dépend du forfait ChatGPT ainsi que des droits dans l'espace de travail ; les clés API couvrent principalement les workflows locaux et programmatiques.

Poursuivez avec [Connexion et authentification](/fr/guide/getting-started/sign-in-and-authentication/).

---

**Statut :** vérifié

**Produits concernés :** App / CLI / IDE / Cloud

**Base de vérification :** comparaison avec les pages officielles actuelles sur les tarifs et l'authentification. Cette page décrit le modèle d'accès et l'ordre de diagnostic sans figer des tarifs, des limites ou des listes de fonctionnalités susceptibles d'évoluer.

**Dernière vérification :** 2026-08-26

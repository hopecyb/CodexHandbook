---
title: Dépannage Cloud
description: Index des symptômes pour la connexion GitHub, les environnements, les Secrets, l'accès sortant et les problèmes de PR.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Lorsque Cloud échoue, relancer ne corrige généralement pas la cause racine.

Les problèmes Cloud se situent souvent dans les **permissions, les différences d'environnement, les identifiants ou le réseau**. Cette page oriente les symptômes vers le bon sujet pour éviter de réessayer aveuglément dans le chat.

## Ce qui est couvert

- Ce qu'il faut vérifier en premier lorsqu'une Tâche échoue
- Comment le dépannage Cloud diffère du local
- Quand revenir à une validation locale par petites étapes

## Vérifier les conditions en premier

Si « Cloud rouge, local vert », vérifiez d'abord les conditions d'exécution.

Causes courantes :

- L'environnement distant diffère du local
- Cloud ne voit pas le travail local non poussé
- Secrets mal configurés
- Réseau ou permissions restreints

Vérifiez les prérequis avant de blâmer la Tâche elle-même.

## Tri rapide

| Symptôme | Vérifier en premier |
|---|---|
| Impossible de connecter au repo / 403 | [Connecter GitHub](/guide/web-and-cloud/connect-github/) |
| Échec d'installation des dépendances | [Accès Internet](/guide/web-and-cloud/internet-access/) · [Environnements Cloud](/guide/web-and-cloud/cloud-environments/) |
| Package privé / API 401 | [Secrets et variables](/guide/web-and-cloud/secrets-and-variables/) |
| Tâche bloquée en attente | [Déléguer et suivre](/guide/web-and-cloud/delegate-and-follow-up/) · Approbation en attente ? |
| Commit local invisible pour Cloud | Poussé ? Cloud ne lit pas les commits locaux non poussés |
| Impossible d'ouvrir une PR ou pousser | Protection de branche · [Créer une PR](/guide/web-and-cloud/create-pull-requests/) |
| Tests rouges dans Cloud, verts localement | Alignement version/env dans [Environnements Cloud](/guide/web-and-cloud/cloud-environments/) |

## Ordre de dépannage

1. Repo et branche corrects ?
2. Permissions et autorisation suffisantes ?
3. Environnement et dépendances en place ?
4. Secrets et réseau fonctionnels ?
5. Description de Tâche manquant des contraintes clés ?

Clarifier ces points vaut mieux que relancer immédiatement.

## Connexion et permissions

**Symptôme :** OAuth réussit mais la Tâche ne peut pas cloner.

**Vérifier :**

1. Le périmètre d'autorisation inclut l'org/repo cible
2. Repo archivé ou restrictions GitHub App activées
3. Compte personnel connecté à un repo d'org nécessitant SSO

**Symptôme :** push refusé.

**Vérifier :** protection de branche, revue requise, tentative de push direct sur `main`

## Idées reçues courantes

### 1. Les erreurs à l'installation sont toujours des problèmes de dépendances

Peut aussi être réseau, auth, Secrets ou permissions de registre privé.

### 2. Vert localement signifie que le code est bon et Cloud est instable

Signifie souvent :  
**votre environnement local a des prérequis que Cloud n'a pas.**

### 3. Tâche bloquée signifie que le modèle réfléchit

Peut être :

- En attente d'Approbation
- En attente sur le réseau
- En attente du démarrage de l'environnement
- Périmètre de Tâche trop large

## Environnement et dépendances

**Symptôme :** `command not found` (node, python, etc.).

**Vérifier :** l'image de base inclut le runtime requis ; `AGENTS.md` documente la version et les commandes d'installation.

**Symptôme :** conflit de lockfile ou timeout d'installation.

**Vérifier :** politique sortante ; miroirs de registre ; dépendances nécessitant VPN (Cloud généralement pas sur le réseau interne)

## Secrets et variables

**Symptôme :** variables d'environnement vides au moment du build.

**Vérifier :**

- Noms de Secret correspondent à la doc (sensibilité à la casse fréquente)
- Configuré dans le bon périmètre repo/environnement
- Secret accidentellement collé dans le Prompt et masqué

Plus : [Secrets et variables](/guide/web-and-cloud/secrets-and-variables/)

## Tâches bloquées et timeouts

| Cause | Action |
|---|---|
| Approbation humaine en attente | Approuver ou rejeter dans l'App/téléphone |
| Tâche trop grande | Diviser en délégations plus petites |
| Démarrage d'environnement lent | Cold start normal ; si persistant, vérifier la page de statut officielle |

Suivi : [Déléguer et suivre](/guide/web-and-cloud/delegate-and-follow-up/)

## Qualité de sortie

Cloud terminé mais résultat inutilisable :

1. Comparer à la description de Tâche — critères d'acceptation manquants ?
2. Checkout de la même branche localement et exécuter les tests
3. Ajouter un suivi avec [diagnostiquer avant de corriger](/cases/workflows/diagnose-before-fixing/) plutôt que relancer toute la Tâche

## Quand revenir au local

Si deux rounds ont été passés sur les conditions Cloud plutôt que sur la Tâche elle-même :

- Reproduire minimalement en local
- Documenter deps, commandes, Vérification
- Déléguer à Cloud à nouveau

Généralement plus rapide que deviner dans l'environnement distant.

## Relation avec l'index de dépannage global

Problèmes locaux CLI/IDE/App : [Référence · Dépannage](/guide/reference/troubleshooting/). Cette page couvre uniquement les chemins **spécifiques à Cloud**.

## Références

- Documentation de support OpenAI Codex Cloud
- stormzhang `10-cloud.md`
- KimYx0207 CX-10～CX-11

---

**Statut :** obsolète  
**Produits concernés :** Cloud  
**Note de revue :** Le cadre de tri aide, mais il suppose la connexion repo Cloud actuelle, les Secrets, l'Approbation, le réseau et le comportement PR ; à mesure que Cloud et les capacités multi-clients évoluent, le mapping symptôme-sujet nécessite une réécriture contre la documentation de support officielle la plus récente.  
**Dernière vérification :** 2026-07-26

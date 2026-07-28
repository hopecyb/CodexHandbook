---
title: "Types d'événements Hook"
description: Points de déclenchement Hook dans la chaîne d'exécution Codex — validation, journaux et blocage au bon moment.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Il s'agit de savoir **quand** déclencher une même vérification.

Les **événements Hook** sont les moments où le système appelle votre logique configurée. Les comprendre permet de déployer « audit et validation » de [Vue d'ensemble des Hooks](/skills/hooks/hooks-overview/) sans ralentir chaque appel d'outil.

## Contenu

- Phases d'événements courantes et cas d'usage
- Répartition avec [Règles de commandes](/guide/customization/rules/command-rules/)
- Performance et stratégie d'échec à la configuration

## Un principe de jugement

Ne commencez pas par « ce Hook peut-il le faire ».  
Demandez-vous : voulez-vous empêcher avant que ça arrive, ou enregistrer après ?

Beaucoup de Hooks mal placés viennent d'un mauvais choix de moment.

:::note
**Noms d'événements et champs : [documentation officielle Hooks](https://developers.openai.com/codex).** Le tableau ci-dessous est un regroupement conceptuel ; après mise à niveau CLI, vérifiez `--help` et les release notes.
:::

## Regroupement d'événements (concept)

| Phase | Événement typique (concept) | Convient à |
|---|---|---|
| Session | `session.start` / `session.end` | Vérification d'environnement, synthèse des changements, note de fin d'audit |
| Avant outil | `tool.call.before` / `pre_tool_use` | Bloquer commandes dangereuses, scanner motifs de secrets |
| Après outil | `tool.call.after` / `post_tool_use` | Journaux structurés, métriques, archivage désensibilisé |
| Prompt | `user_prompt.submit` | Scan de politique, limite de longueur |
| Artefact | `artifact.create` | En-tête de licence, liste blanche de types de fichier |
| Intégration | `pr.before_create` (si supporté) | Numéro d'issue, format changelog |

Ne pas accrocher la même logique sur plusieurs événements ; choisir le point **le plus tôt où le blocage est possible**.

## Comment lire ces phases

- **Session** : début ou fin de la tâche
- **Avant outil** : commande ou outil pas encore exécuté
- **Après outil** : action faite — journal, synthèse, contrôle supplémentaire
- **Prompt** : contenu utilisateur vient d'être soumis
- **Artefact** : fichier ou résultat vient d'être créé

Comprenez d'abord ce niveau, sans mémoriser tous les noms.

## Rapport avec le moteur de règles

```text
Prompt utilisateur → (optionnel) Hook prompt
    → modèle propose appel d'outil
    → moteur de règles allow/deny
    → (optionnel) Hook pre_tool → exécution → Hook post_tool
```

- **Règles** : déclaratif, rapide, motifs de commandes connus
- **Hook** : script impératif, politiques complexes et systèmes externes

## Idées reçues courantes

### 1. Avant ou après, peu importe si ça détecte

La différence est grande.

Pour empêcher un effet de bord, accrochez le plus tôt possible.  
Si l'action est déjà faite, un `post_tool` trop tardif ne suffit souvent pas.

### 2. Plus d'événements = configuration plus professionnelle

Visez « peu mais juste » — un seul bon point d'accrochage.

### 3. Les types d'événements Hook sont un détail technique

Ils affectent directement :

- Si le risque est bloqué à temps
- Si le journal est utile
- Si l'interaction ralentit

## Stratégies d'échec

| Stratégie | Quand l'utiliser |
|---|---|
| `block` | Violation sécurité, exigence conformité stricte |
| `warn` | Style, vérifications recommandées |
| `log` | Observation seule, pas de blocage |

Timeout ou crash du Hook : **sécurité par défaut** — en production tendre vers block ou fail closed, avec erreur journalisée pour débogage.

## Si vous hésitez sur le point d'accrochage

Règle simplifiée :

- Empêcher une action dangereuse : événement en amont
- Enregistrer ce qui s'est passé : événement en aval
- Contrôle d'ouverture ou synthèse de fin : événements de session

Suffisant pour la plupart des configurations.

## Idée de configuration minimale

1. Choisir un événement (commencer par journal `post_tool` en lecture seule)
2. Script stdin reçoit charge JSON (nom outil, résumé paramètres, répertoire de travail)
3. Code de sortie `0` = OK, non `0` selon stratégie block/warn
4. Test unitaire : fixture JSON fixe sur le script

Clarifiez d'abord bloquer ou enregistrer, puis choisissez l'événement.

Exemples complets : [Exemples de configuration Hook](/skills/hooks/hooks-examples/).

## Erreurs courantes

- Bloquer dans `post_tool` ce qui devrait être dans `pre_tool` (effet de bord déjà produit)
- LLM ou réseau lent dans le Hook, interaction dégradée
- Charge d'événement avec secrets écrits en clair dans le journal
- Hook non versionné, environnements incohérents

## Limites de sécurité

- Permissions du script Hook ≤ permissions de l'Agent surveillé
- Voir [Cas d'usage Hook en équipe](/skills/hooks/hooks-overview/#recommended-team-use-cases) et [Modèle de menace](/guide/team-enterprise/security/threat-model/)

## Liste de validation

- [ ] Pouvoir nommer l'événement le plus utilisé par l'équipe et pourquoi
- [ ] Message d'erreur lisible en cas d'échec
- [ ] Script avec test unitaire ou fixture
- [ ] Configuration soumise à revue de code

## Sources de référence

- Référence OpenAI Codex Hooks
- stormzhang `22-hooks.md`
- KimYx0207 CX-08

---

**Statut :** obsolète  
**Produits concernés :** CLI / App (selon version)  
**Dernière vérification :** 2026-07-26  
**Base de vérification :** Cœur de page : regroupement d'événements Hook, charges et stratégies d'échec — détails à haute volatilité ; documentation publique officielle insuffisante pour stabiliser au 2026-07-26.

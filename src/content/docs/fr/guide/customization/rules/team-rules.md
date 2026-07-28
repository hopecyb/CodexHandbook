---
title: "Politique de règles d'équipe"
description: Gouvernance en couches des règles de commandes et de chemins entre organisation, dépôt et individu — revueable et réversible.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Quand les équipes utilisent Codex, la **politique de règles** répond : quelles contraintes sont à l'échelle de l'entreprise, quelles le dépôt maintient et si les individus peuvent relaxer quoi que ce soit. Ce chapitre est la vue gouvernance des [Règles de commandes](/guide/customization/rules/command-rules/) et des [Modèles Allow et Deny](/guide/customization/rules/allow-and-deny-patterns/).

## Contenu

- Politique gérée organisation vs règles projet vs préférences personnelles
- Comment les changements de règles passent par revue et release
- Coordination avec `AGENTS.md`, Hooks et CI

## Ce que fait la politique de règles d'équipe

La politique de règles d'équipe répond : quelles frontières l'entreprise définit, quelles le projet définit et quelles sont une habitude personnelle.

Si cette couche est floue, vous obtenez souvent :

- Des règles qui devraient être à l'échelle de l'équipe vivant sur la machine d'une personne
- Une commodité personnelle temporaire prise pour un standard d'équipe

## Pour qui

| Rôle | Focus |
|---|---|
| Lead engineering | Baseline deny, exigences d'audit |
| Mainteneur de dépôt | Liste d'autorisation projet, commandes de test |
| Développeur individuel | Supplément local dans la politique |

## Idées reçues courantes

### Les règles d'équipe n'ont pas besoin d'uniformité maximale

Certaines frontières devraient être à l'échelle de l'organisation, comme le deny à haut risque.

Forcer chaque dépôt dans des règles identiques cause un autre problème : règles trop lâches ou trop strictes — finalement personne ne les croit.

Le point est de séparer les couches organisation, projet et personnelle — pas de faire toutes les règles identiques.

### Les suppléments personnels ne doivent pas affaiblir les lignes de base d'équipe

Vous pouvez ajouter de la commodité sur votre machine, mais pas contourner les lignes de base organisation ou équipe.

Sinon ça ressemble à « plus rapide en local » tout en plantant des mines pour la collaboration.

## Modèle de couche recommandé

```text
L1 Organisation gérée (Managed)     → ne peut pas être annulée par projet/individu
L2 Dépôt modèle d'équipe            → snippets de règles que les nouveaux dépôts héritent
L3 Règles projet + AGENTS.md        → revue PR Git
L4 Configuration personnelle          → local uniquement ; ne doit pas affaiblir L1
L5 Prompt de tâche unique           → renforcement temporaire OK ; relaxation temporaire limitée par L1
```

Comparer avec [Portée AGENTS.md](/guide/customization/agents-md/scope-and-precedence/) : **les règles penchent vers l'application d'exécution ; AGENTS.md penche vers la description de comportement** ; elles devraient être d'accord — ne pas écrire des exigences contradictoires à deux endroits.

## Pratique de base

1. **Écrire d'abord la liste « jamais autorisé »** (deny) : `git push --force`, lecture `~/.ssh`, POST contenu du dépôt vers l'internet public
2. **Puis la liste « autorisé quotidiennement »** (allow) : tests, lint, git en lecture seule
3. **Déployer L1 via la gestion** (si l'organisation active la configuration Managed)
4. **Chaque service/sous-paquet monorepo** peut ajouter L3 mais ne doit pas entrer en conflit avec L1
5. **Revue trimestrielle** : « faux blocage » et « faux autorisation » des logs d'approbation remontent dans les PR de règles

## Flux de travail recommandé : changements de règles

```text
Proposition (issue ou RFC) → revue sécurité/plateforme → PR modifiant les fichiers de règles
    → essai de tâches typiques dans dépôt staging → merge → annonce + mise à jour handbook
```

Les grands changements (ex. autoriser le réseau outbound) devraient mettre à jour [audit Hooks](/skills/hooks/hooks-overview/) et [usage acceptable](/guide/team-enterprise/governance/acceptable-use/) ensemble.

## Alignement avec Hooks et CI

| Mécanisme | Rôle |
|---|---|
| Règles | Allow/deny avant exécution |
| Hooks | Validation complexe, journalisation, format conformité |
| CI | Porte de merge ; scripts alignés avec les règles locales |

Éviter trois logiques séparées : préférer une **source unique de vérité** (ex. `tools/codex-rules.json`) référencée par CLI et CI.

## Erreurs courantes

- « Ne pas push » verbal uniquement ; fichiers de règles non mis à jour
- Machine personnelle relaxe le bac à sable ; capture d'écran traitée comme « standard d'équipe »
- Sous-projets monorepo différents mais partagent une liste d'autorisation globale trop large
- Changement de règles sans annonce ; coéquipiers frappés soudainement par beaucoup d'échecs d'approbation

## Quelle couche une règle appartient

Demandez :

1. Est-ce une ligne de base que chaque dépôt doit suivre ?
2. Cela ne tient que pour le projet actuel ?
3. Est-ce seulement ma commodité personnelle ?

Généralement :

- Couche organisation
- Couche projet
- Couche personnelle

## Frontières de sécurité

- Les règles ne peuvent pas remplacer le [modèle de menace](/guide/team-enterprise/security/threat-model/) et la réponse aux incidents
- Pour les données réglementées, les règles nécessitent une revue conjointe avec classification des données et politique de rétention
- Le contournement d'urgence nécessite un **enregistrement d'audit** et une revue post-incident

## Liste de contrôle d'acceptation

- [ ] Vous pouvez diagrammer la division des responsabilités L1–L3 de votre organisation
- [ ] Les fichiers de règles du dépôt ont un propriétaire clair et des exigences de revue
- [ ] Aucune contradiction avec `AGENTS.md`, Hooks et CI
- [ ] Canal pour le feedback « faux blocage » (modèle d'issue ou formulaire interne)

La partie la plus importante de la politique de règles d'équipe est de savoir qui définit les frontières à quelle couche — puis comment écrire les règles.

---

**Statut :** vérifié  
**Produits concernés :** CLI / App / Cloud (selon les fonctionnalités organisation)  
**Base de vérification :** Les matériaux actuels au niveau organisation sur les plugins, apps et permissions d'OpenAI accentuent encore l'accès par rôle, l'approbation d'actions, la configuration gérée et la couche de contrôle au niveau équipe ; cette page abstrait la politique de règles en gouvernance organisation, projet et personnelle et exige que les changements de règles passent par revue et annonce — un résumé de pratique de gouvernance stable.  
**Dernière vérification :** 2026-07-26

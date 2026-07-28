---
title: "Modèle de menace"
description: Surfaces de risque principales pour Codex en environnements d'équipe — données, outils, extensions et supply chain.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Un modèle de menace signifie penser au risque avant qu'il arrive :

> **Si Codex se connecte vraiment à notre code, commandes et outils externes, qu'est-ce qui est le plus susceptible d'aller mal ?**

La **modélisation des menaces** décompose cela. Codex n'est pas « juste une autre fenêtre de chat » — il peut **lire le code, exécuter des commandes, appeler des outils externes**. Ce chapitre mappe les surfaces de risque principales ; les contrôles vivent dans [Matrice des permissions](/guide/reference/permission-matrix/) et [Bac à sable](/guide/foundations/sandbox-and-network/).

## Ce que cette page couvre

- Actifs et frontières de confiance
- Menaces typiques et directions de mitigation
- Comment règles, Hooks et CI divisent les responsabilités

## Pas seulement travail « équipe sécurité »

Si vous construisez, exploitez la plateforme, écrivez la doc ou menez des projets, vous vous souciez quand les équipes :

- Donnent des tokens sur-privilégiés à l'automatisation
- Exécutent des actions à haut risque sur entrée non fiable
- Ne savent pas quelles données peuvent quitter l'org
- Ajoutent des extensions pour les fonctionnalités sans permissions et provenance

La modélisation des menaces aide à fixer les frontières avant les incidents.

## Actifs et frontières

| Actif | Exemples |
|---|---|
| Source et IP | Dépôts privés, designs non publiés |
| Identifiants | Clés API, `.env`, IAM cloud |
| Données utilisateur | PII, contenu tickets clients |
| Infrastructure | CI, pipelines de déploiement production |

**Frontière de confiance :** modèle et extensions par défaut sur le côté **pas entièrement fiable** ; revue humaine et politique appliquent à la frontière.

## Deux questions centrales

Avant déploiement à l'échelle équipe, demandez :

1. Que ne devons-nous pas perdre ?
2. Que Codex ne doit pas faire par erreur ?

La première identifie les actifs importants ; la seconde identifie les actions dangereuses. La plupart des contrôles enveloppent ces deux.

## Scénario

- Codex lit votre dépôt privé
- Accède à un système de tickets avec permissions
- Exécute des commandes shell
- Poste les résultats dans les commentaires

Puis surveillez :

- Voir ce qu'il ne devrait pas
- Faire ce qu'il ne devrait pas
- Prendre des informations internes à l'extérieur

Ce cadrage transforme la modélisation des menaces en liste de contrôle de risque pré-lancement.

## Vue d'ensemble des menaces

| Menace | Description | Direction mitigation |
|---|---|---|
| Injection de prompt | Issue/web malveillant oriente emprise excessive | Hygiène entrée, CI lecture seule, [sujet injection](/guide/team-enterprise/security/prompt-injection/) |
| Sur-permission | Token, bac à sable trop large | Privilège minimum, protection de branche |
| Exfiltration données | Commandes/MCP fuient le dépôt | Politique réseau, DLP, Hooks d'audit |
| Extension malveillante | Plugin/MCP non revu | [Risque extension](/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Supply chain | Tampering dépendance/script | SCA existant, revue de code |
| Mauvaise manipulation | Agent drop DB, mauvais push | Deny commande, CI no-push |

## Quand prioriser dans le modèle de menace

Si une capacité à la fois :

- Touche des actifs importants
- Exécute des actions réelles

Exemples : lire dépôts privés, appeler APIs production, MCP avec écriture, auto-push code.

## Ne pas tout couvrir le premier jour

Beaucoup d'équipes essaient d'écrire toute la politique d'un coup et ne shipent rien.

Le premier déploiement a souvent besoin seulement de :

1. Top 3 classes d'actifs
2. Top 3 actions que vous craignez le plus
3. Un contrôle direct par item

Exemples :

- Peur fuite DB prod → limiter creds prod et chemins d'export
- Peur mauvais push sur main → protection de branche et approbation
- Peur issue/web oriente → renforcer entrée externe et revue lecture seule

Pas complet — mais plus utile qu'un méga-doc non lu.

## Contrôles en couches recommandés

```text
L1 Identité et tenant (SSO, groupes)
L2 Config gérée org et politique modèle
L3 Règles dépôt + AGENTS.md
L4 Bac à sable / approbation / Hooks
L5 Revue humaine et protection de branche
```

## Erreurs courantes

- Formation uniquement, pas de contrôles techniques
- Supposer « le modèle est assez intelligent »
- Secrets production sur chemins écrivables par l'Agent
- Collapser tout le risque sur « la revue humaine rattrapera »

## Version minimale viable

Établir :

- Actions à haut risque nécessitent approbation
- Données sensibles denied par défaut
- Automatisation lecture seule par défaut

Cela supprime déjà beaucoup de risque d'équipe ; affiner la gouvernance plus tard.

## Liste de contrôle d'acceptation

- [ ] Peut lister Top 3 actifs org préoccupants
- [ ] Chaque menace a contrôle ou enregistrement risque accepté
- [ ] Contacts réponse incident alignés

## Lié

- [Contexte sensible](/guide/context/sensitive-context/)
- [Modèles d'approbation humaine](/cases/workflows/human-approval-patterns/)

## Sources de référence
- Livre blanc sécurité entreprise OpenAI (officiel)
---

**Statut :** vérifié  
**Produits concernés :** Équipe / entreprise  
**Base de vérification :** La doc plugin, app et intégration OpenAI distingue encore l'accès aux données externes, permissions d'actions, exigences d'approbation et frontières des systèmes source ; cette page organise le risque d'équipe comme actifs, frontières de confiance, menaces typiques et contrôles en couches — sans dépendre d'un toggle produit spécifique.  
**Dernière vérification :** 2026-07-26

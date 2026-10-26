---
title: Modèle de menace
description: Surfaces de risque principales pour Codex en environnements d'équipe — données, outils, extensions et chaîne d’approvisionnement.
locale: fr
source_locale: zh-CN
source_revision: "4ec320d"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: '2026-10-26'
sidebar:
  order: 10
legacyVerification:
  status: verified
  products: Équipe / entreprise
  basis: La doc plugin, app et intégration OpenAI distingue encore l'accès aux données externes, permissions d'actions, exigences d'approbation et frontières des systèmes source ; cette page organise le risque d'équipe comme actifs, frontières de confiance, menaces typiques et contrôles en couches — sans dépendre d'un réglage précis d’un produit.
  checkedAt: '2026-07-26'
---
Un modèle de menace signifie penser au risque avant qu'il arrive :

> **Si Codex se connecte vraiment à notre code, commandes et outils externes, qu'est-ce qui est le plus susceptible d'aller mal ?**

La **modélisation des menaces** décompose cela. Codex n'est pas « juste une autre fenêtre de chat » — il peut **lire le code, exécuter des commandes, appeler des outils externes**. Ce chapitre présente les principaux risques ; les mesures de contrôle sont décrites dans [Matrice des permissions](/fr/guide/reference/permission-matrix/) et [Bac à sable](/fr/guide/foundations/sandbox-and-network/).

## Ce que cette page couvre

- Actifs et frontières de confiance
- Menaces typiques et directions de mitigation
- Comment règles, Hooks et CI divisent les responsabilités

## Ce n’est pas seulement l’affaire de l’équipe sécurité

Si vous construisez, exploitez la plateforme, écrivez la doc ou menez des projets, ces situations vous concernent aussi :

- Donnent des tokens sur-privilégiés à l'automatisation
- Exécutent des actions à haut risque sur entrée non fiable
- Ne savent pas quelles données peuvent quitter l'org
- Ajoutent des extensions pour leurs fonctions sans vérifier leurs permissions ni leur provenance

La modélisation des menaces aide à fixer les frontières avant les incidents.

## Actifs et frontières

| Actif | Exemples |
|---|---|
| Source et IP | Dépôts privés, designs non publiés |
| Identifiants | Clés API, `.env`, IAM cloud |
| Données utilisateur | PII, contenu tickets clients |
| Infrastructure | CI, pipelines de déploiement production |

**Frontière de confiance :** le modèle et les extensions se trouvent par défaut du côté **non entièrement fiable** ; la revue humaine et les politiques font respecter cette frontière.

## Deux questions centrales

Avant déploiement à l'échelle équipe, demandez :

1. Que ne devons-nous pas perdre ?
2. Que Codex ne doit pas faire par erreur ?

La première identifie les actifs importants ; la seconde identifie les actions dangereuses. La plupart des contrôles s’organisent autour de ces deux questions.

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
| Injection de prompt | Une issue ou une page malveillante pousse à des actions non autorisées | Hygiène entrée, CI lecture seule, [sujet injection](/fr/guide/team-enterprise/security/prompt-injection/) |
| Sur-permission | Token, bac à sable trop large | Privilège minimum, protection de branche |
| Exfiltration données | Des commandes ou outils MCP transmettent le contenu du dépôt à l’extérieur | Politique réseau, DLP, Hooks d'audit |
| Extension malveillante | Plugin/MCP non revu | [Risque extension](/fr/guide/team-enterprise/security/plugin-and-mcp-risk/) |
| Chaîne d’approvisionnement | Dépendance ou script compromis | SCA existant, revue de code |
| Mauvaise manipulation | Suppression d’une base de données ou push erroné par l’agent | Deny commande, CI no-push |

## Quand prioriser dans le modèle de menace

Si une capacité à la fois :

- Touche des actifs importants
- Exécute des actions réelles

Exemples : lire dépôts privés, appeler APIs production, MCP avec écriture, auto-push code.

## Ne pas tout couvrir le premier jour

Beaucoup d'équipes essaient d'écrire toute la politique d'un coup et ne mettent rien en place.

Le premier déploiement a souvent besoin seulement de :

1. Top 3 classes d'actifs
2. Top 3 actions que vous craignez le plus
3. Un contrôle direct par item

Exemples :

- Risque de fuite de données de production → limiter les identifiants de production et les chemins d’export
- Risque de push erroné sur main → protection de branche et approbation
- Risque de détournement par une issue ou une page → restreindre les entrées externes et les procédures de revue en lecture seule

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
- Réduire tous les risques à « la revue humaine rattrapera »

## Version minimale viable

Établir :

- Actions à haut risque nécessitent approbation
- Accès aux données très sensibles refusé par défaut
- Automatisation lecture seule par défaut

Cela supprime déjà beaucoup de risque d'équipe ; affiner la gouvernance plus tard.

## Liste de contrôle d'acceptation

- [ ] Peut lister Top 3 actifs org préoccupants
- [ ] Chaque menace a contrôle ou enregistrement risque accepté
- [ ] Contacts réponse incident alignés

## Lié

- [Contexte sensible](/fr/guide/context/sensitive-context/)
- [Modèles d'approbation humaine](/fr/cases/workflows/human-approval-patterns/)

## Sources de référence
- Livre blanc sécurité entreprise OpenAI (officiel)

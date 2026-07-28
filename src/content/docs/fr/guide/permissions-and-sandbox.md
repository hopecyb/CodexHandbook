---
title: Permissions et Bac à sable
description: Comprendre les Approbations, l'isolation d'exécution et les limites réseau pour une utilisation sûre de Codex.
sidebar:
  order: 14
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Permissions et Bac à sable

Codex ne doit pas effectuer d'actions à haut risque sans consentement. Les **Approbations** sont la porte clé dans la collaboration humain–agent ; le **Bac à sable** limite les capacités système et fichiers que l'Agent peut atteindre.

## Ce qui est couvert

Beaucoup traitent permissions, Approbations, Bac à sable et accès réseau comme les mêmes « paramètres de sécurité ».

La confusion risquée : vous pensez n'avoir autorisé que la poursuite — mais vous avez peut-être ouvert écriture fichier, shell ou réseau sortant en même temps.

Cette page sépare les concepts pour que vous sachiez ce que chaque confirmation libère réellement.

## Séparer les concepts

Pensez-y comme :

- **Approbation** : doit-il vous demander d'abord
- **Bac à sable** : même si autorisé, ce qu'il peut toucher au maximum
- **Accès réseau** : si l'information peut sortir ou être tirée de l'extérieur

Ils interagissent — mais ce n'est pas la même chose.

## Ce qui vous concerne généralement

- Lecture/écriture hors du chemin de projet actuel
- Si le réseau est autorisé
- Si des commandes shell spécifiques sont autorisées
- Si l'équipe impose une politique obligatoire (config gérée)

## Bac à sable et réseau

Le **Bac à sable** réduit le rayon d'action accidentel. L'**accès réseau** est une autre couche de risque : exfiltration de contenu sensible du Prompt ou récupération de données non fiables.

Au début :

1. Pour la première pratique, désactivez le réseau inutile ou autorisez seulement ce dont vous avez clairement besoin
2. Ne mettez pas de secrets de production dans les projets d'entraînement
3. Quand vous voyez « besoin réseau / écriture chemin sensible », pausez, lisez, puis approuvez

## Idées reçues courantes

### Un Prompt ne signifie pas toujours danger

Beaucoup d'opérations normales déclenchent une Approbation :

- Installation de dépendances
- Écriture hors du répertoire de projet
- Ouverture du navigateur ou d'apps système
- Accès à des sites ou API externes

Jugez si l'étape est **requise pour la Tâche actuelle** — pas seulement si une boîte de dialogue est apparue.

### Pas de Prompt ne signifie pas zéro risque

Si le Bac à sable autorise déjà une action — ou si vous avez assoupli les règles auparavant — Codex peut ne plus demander.

Ne comptez pas seulement sur « y avait-il une boîte de dialogue » ; vérifiez comment l'environnement est configuré.

## Quand vous voyez une demande de permission

Posez trois questions :

1. Cette étape est-elle nécessaire pour terminer la Tâche actuelle ?
2. Les données ou le chemin dépassent-ils ce que j'attendais ?
3. Si ça tourne mal, sais-je comment annuler ou récupérer ?

Si vous ne pouvez pas répondre à deux sur trois, n'approuvez pas — demandez à Codex pourquoi l'étape est nécessaire.

## Guide par couches

| Couche | Ce qu'elle couvre | Où lire |
|---|---|---|
| Concepts (cette page) | Pourquoi Approbations et isolation comptent | — |
| Différences produit | Comment chaque client demande | [Approbations et Bac à sable CLI](/guide/cli/approvals-and-sandbox/) · [Paramètres App de bureau](/guide/desktop-app/settings/) |
| Stratégie de Prompt | Déclarer les limites dans les Tâches | [Contraintes et limites](/prompts/constraints-and-boundaries/) |

La politique et les valeurs par défaut officielles peuvent changer — vérifiez sur [OpenAI Codex](https://developers.openai.com/codex).

L'Approbation demande s'il faut continuer ; le Bac à sable limite jusqu'où continuer peut aller. Lisez les deux ensemble pour des limites plus claires.

---

**Statut :** vérifié  
**Produits concernés :** App / CLI / IDE / Cloud  
**Base de vérification :** OpenAI Developers fournit encore l'entrée officielle Codex ; cette page explique Approbations, Bac à sable et réseau comme limites distinctes et renvoie aux chapitres produit sans prétendre aux valeurs par défaut actuelles ou matrices de permission exactes.  
**Dernière vérification :** 2026-07-26

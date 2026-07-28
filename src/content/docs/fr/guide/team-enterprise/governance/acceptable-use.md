---
title: "Politique d'usage acceptable"
description: Accord au niveau équipe sur ce que Codex peut et ne peut pas faire — aligné avec les contrôles techniques et la formation.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Une **Politique d'usage acceptable (AUP)** transforme « peut-on utiliser Codex pour ceci ? » en consensus org au lieu de jugement individuel. Elle complète le [modèle de menace](/guide/team-enterprise/security/threat-model/) : le modèle de menace couvre le risque ; l'AUP couvre les **frontières de comportement**.

## Ce que cette page couvre

- Sujets qu'une AUP devrait couvrir
- Lier HR/conformité et contrôles techniques
- Outline de clauses starter (nécessite localisation juridique)

## Ce qu'une AUP gouverne

Même si techniquement possible, est-ce permis dans notre équipe ?

Elle ne remplace pas la politique technique — elle énonce des frontières que les gens peuvent lire et suivre.

:::caution
Ce qui suit est un **outline éducatif**, pas un conseil juridique. Revue juridique et conformité requise avant publication.
:::

## Idées reçues courantes

### L'AUP compte pour les praticiens

Pas seulement « paperasse ». Les questions quotidiennes incluent :

- Quelles données ne doivent pas aller à Codex
- Quand la revue humaine est requise
- Quelles extensions et connexions externes sont interdites

### Politique sans application se dégrade

Si la politique dit « changements prod nécessitent approbation » mais les outils permettent le contournement, l'AUP ne fonctionne plus.

L'AUP doit s'aligner avec formation, permissions, config et audit — pas seulement la longueur.

## Sujets recommandés

| Sujet | Points |
|---|---|
| Usage permis | Développement, docs, recherche, automatisation interne |
| Usage interdit | Accès non autorisé, harcèlement, contournement sécurité |
| Classification des données | Quels dépôts/données autorisés ; règles PII clients |
| Responsabilité des sorties | Revue humaine avant merge ; pas de conseil juridique/médical externe |
| Extensions | Liste Plugin/MCP approuvée uniquement |
| Comptes | Pas de sièges personnels partagés ; révoquer à l'offboarding |
| Incidents | Comment signaler comportement suspect |

## Structure de base

1. **Objectif et portée**
2. **Scénarios permis** (lien [Carte des capacités](/guide/start-here/codex-capability-map/))
3. **Scénarios interdits**
4. **Données et confidentialité**
5. **Supervision humaine** (merge, changements production)
6. **Conséquences** (référence manuel employé)
7. **Contacts et date de révision**

## Alignement avec les contrôles techniques

| Clause AUP | Implémentation technique |
|---|---|
| Pas d'exfiltration source | Politique réseau, approbation MCP |
| Changements prod nécessitent approbation | Protection de branche, deny `git push` |
| Modèles approuvés uniquement | Configuration gérée org |

## Erreurs courantes

- AUP publiée, pas de formation
- Politique contredit la réalité des outils (interdit mais permis)
- Années sans mise à jour alors que les fonctionnalités évoluent (Computer Use, etc.)

## Une AUP est-elle efficace ?

Demandez :

1. Répond-elle aux vraies frontières d'équipe ?
2. Peut-elle mapper vers formation, config ou flux d'approbation ?
3. En violation, l'équipe peut détecter et répondre ?

Plus de « oui » → plus probablement efficace.

## Liste de contrôle d'acceptation

- [ ] L'onboarding inclut l'accusé de réception AUP
- [ ] Pas de conflit avec [Règles d'équipe](/guide/customization/rules/team-rules/)
- [ ] Revue annuelle ou sur releases majeures de fonctionnalités

La valeur d'une AUP est des frontières d'équipe claires pour l'usage Codex — et l'alignement avec les contrôles réels.

---

**Statut :** vérifié  
**Produits concernés :** Organisation / équipe  
**Base de vérification :** La doc entreprise OpenAI accentue encore l'accès par rôle, les permissions d'actions et les frontières des systèmes source pour plugins et apps ; cette page définit l'AUP comme frontière de comportement organisationnelle avec « outline éducatif, localisation juridique requise » — pas un modèle de politique officiel.  
**Dernière vérification :** 2026-07-26

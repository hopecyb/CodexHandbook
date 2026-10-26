---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique seulement les notions de base des tokens, de la fenêtre de contexte et de la compaction. Les liens internes et les exemples ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Tokens, contexte et compaction
description: Comprendre la fenêtre de contexte, son occupation et la compaction.
locale: fr
source_locale: zh-CN
source_revision: "cd44efe"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 100
reviewed_at: '2026-10-26'
---
Cette page peut sembler abstraite au début ; vous n'avez pas besoin de comprendre immédiatement les mécanismes internes. La mémoire d'un modèle n'est pas illimitée. Quand les informations s'accumulent et se dispersent, il peut perdre de vue l'essentiel et les contraintes anciennes peuvent s'estomper.

Trois termes reviennent ici : tokens, contexte et compaction.

Un **token** est une unité servant à mesurer le texte traité par le modèle. La **fenêtre de contexte** désigne la quantité maximale d'informations qu'il peut exploiter efficacement à un moment donné.

Quand une conversation ou ses fichiers deviennent trop volumineux, le système peut effectuer une **compaction** : garder un résumé et perdre des détails. L'agent peut alors « oublier » des contraintes formulées plus tôt.

![Illustration : un long rouleau de conversation passe dans une presse et ressort en courte fiche de synthèse qui tient dans une fenêtre limitée](/illustrations/tokens-compaction.webp)

## Distinguer les trois notions

On peut les voir ainsi :

- **Token** : une unité de volume d'information pour le modèle
- **Fenêtre de contexte** : la quantité d'informations qu'il peut emporter à la fois
- **Compaction** : lorsque le contenu est trop abondant, la conversation précédente est résumée pour libérer de la place

Le problème est qu'**un résumé ne peut pas préserver tous les détails**.

Plus l'échange dure, plus une exigence mentionnée une seule fois, longtemps auparavant, risque de perdre en importance.

## Idées reçues

### 1. Si je l'ai dit une fois, Codex devrait-il s'en souvenir toujours ?

Si cette phrase est enfouie loin dans l'historique et ne figure plus parmi les informations importantes du moment, elle peut disparaître lors de la compaction.

### 2. Plus de contexte est-il toujours préférable ?

Un contexte pertinent aide, mais trop d'informations sans rapport posent deux problèmes :

- L'essentiel devient moins visible.
- Les contraintes importantes sont plus faciles à noyer.

### 3. La compaction signifie-t-elle que le modèle ne fonctionne plus ?

La compaction est une façon de gérer des ressources limitées. Quand il y a trop d'informations, le système poursuit avec une version condensée.

## Que faire dans ce cas ?

Si vous craignez l'oubli d'une exigence importante :

- Répétez les contraintes essentielles dans votre message actuel.
- Placez les règles durables dans les instructions du projet ou un document stable.
- Ouvrez une nouvelle tâche ou conversation quand le sujet change clairement.
- Ne formulez pas une limite importante une seule fois.

## En pratique

- Placez les contraintes clés dans le message actuel ou les instructions du projet, pas seulement loin dans un ancien échange.
- Ouvrez une nouvelle conversation quand le sujet change.
- Pour les explications et méthodes, voir [Compaction du contexte](/fr/guide/context/compaction/) et [Garder le contexte ciblé](/fr/guide/context/keep-context-focused/).

Cette page présente les notions. La section `05` aborde les moyens de les maîtriser.

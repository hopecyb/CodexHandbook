---
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Cette page explique comment vérifier les livrables finaux. Les liens internes, les catégories de livrables et l'ordre des contrôles ont été revus ; le texte ne dépend pas de faits produits susceptibles de changer.
  checkedAt: '2026-07-26'
title: Vérifier les livrables
description: Contrôler les documents, pages et autres éléments produits.
locale: fr
source_locale: zh-CN
source_revision: "7a6a12e"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 30
reviewed_at: '2026-10-26'
---
Ici, un « livrable » désigne le résultat remis à la fin d'une tâche, par exemple :

- Un document
- Une page
- Une image
- Un tableur
- Un fichier généré

Ne supposez pas que le livrable est correct simplement parce que le code paraît correct.

## Pourquoi vérifier le livrable séparément ?

De nombreuses tâches ne livrent pas seulement un diff de code, mais aussi un élément que des personnes vont voir et utiliser.

Pour contrôler un livrable, demandez-vous :

- Le résultat final est-il réellement utilisable ?
- Son apparence correspond-elle aux attentes ?
- Paraîtra-t-il maladroit, incorrect ou incomplet à quelqu'un d'autre ?

Certains problèmes se situent dans le rendu final plutôt que dans le code.

Par exemple :

- Le code de la page fonctionne, mais la mise en page est mauvaise.
- Le texte a la bonne structure, mais sa lecture est peu naturelle.
- Un lien est bien formaté, mais mène au mauvais endroit.
- Un tableau a été généré, mais l'ordre des colonnes gêne son utilisation.

« Il a été généré » ne signifie donc pas « il est utilisable ».

Pour un livrable autre que du code, ouvrez le fichier, vérifiez les liens, comparez-le à la maquette et lisez le texte à voix haute. Pour une page, prévisualisez-la dans un navigateur ou sur un véritable appareil au lieu de ne regarder que le code généré.

## Contrôler selon le type de livrable

Adaptez les vérifications :

- **Page** : rendu réel, mise en page, liens et interactions
- **Document** : structure, terminologie, lisibilité et liens
- **Image** : dimensions, netteté, texte et détails
- **Tableur ou fichier exporté** : champs, ordre, ouverture du fichier et lisibilité

## Idées reçues

### 1. Une compilation réussie ne prouve pas que la page est correcte

Elle montre seulement que la page peut être générée. Elle ne garantit ni son apparence, ni son contenu, ni ses interactions.

### 2. Les documents doivent eux aussi être vérifiés

Oui, surtout sur ces points :

- Les niveaux de titres sont-ils cohérents ?
- Les liens fonctionnent-ils et mènent-ils au bon endroit ?
- La terminologie est-elle uniforme ?
- Le texte est-il naturel et lisible ?

### 3. Une capture d'écran ne suffit pas

Elle permet un premier coup d'œil, mais certains problèmes n'apparaissent qu'en ouvrant le véritable fichier ou la véritable page.

## À utiliser directement

Vous pouvez demander :

```text
Après avoir terminé, vérifie le livrable final du point de vue de son utilisateur. Indique-moi ce que tu as réellement ouvert et contrôlé, ce que tu as constaté et ce qui reste non vérifié.
```

## Ordre des contrôles

Procédez ainsi :

1. Ouvrez le véritable livrable.
2. Comparez-le point par point aux critères d'acceptation.
3. Cherchez les petits problèmes d'utilisation.

Le fait que le résultat fonctionne indique que la base tient ; pour savoir s'il est prêt à être livré, il faut encore examiner l'expérience finale.

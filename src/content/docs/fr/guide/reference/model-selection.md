---
title: Choisir les modèles ChatGPT et Codex
description: Choisissez un modèle et un niveau de réflexion pour discuter, écrire, analyser des tableaux, programmer ou rechercher, puis évaluez les offres et l’utilisation réelle.
contentType: reference
audiences: [beginner, creator, developer, team]
level: beginner
editorialStatus: review
sidebar:
  order: 5
verification:
  kind: source-checked
  checkedAt: "2026-10-24"
  summary: Documentation officielle des modèles, des niveaux de réflexion de Chat et des offres vérifiée ; les recommandations sont éditoriales, sans mesure du taux de réussite, de la vitesse ou du coût des modèles.
  evidence:
    - label: Modèles Work et Codex
      href: https://learn.chatgpt.com/docs/models
    - label: Modèles et niveaux de réflexion de Chat
      href: https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt
    - label: Offres et utilisation
      href: https://learn.chatgpt.com/docs/pricing
locale: fr
source_locale: zh-CN
translation_status: stale
reviewed_at: '2026-10-26'
translated_at: 2026-10-25
source_revision: '20eb508'
---

**Essayez GPT‑6.1 Sol pour les tâches complexes, Luna pour les petites tâches bien définies et Astra pour les problèmes particulièrement exigeants. Dans Chat, choisissez Instant, Thinking ou Pro.** Identifiez d’abord le produit utilisé, puis consultez le tableau correspondant.

[Work / Codex](#work-codex) · [Chat](#chat) · [Offres et prix](/fr/chatgpt-pricing/) · [Mesurer l’utilisation réelle](/fr/guide/quality/usage-time-and-model-choice/)

:::note[Périmètre · 2026-10-24]
Les modèles, réglages et quotas varient selon le compte, le client, l’espace de travail et le déploiement. Cette référence est datée ; les recommandations sont des points de départ et ne garantissent pas l’accès de votre compte. Vérifiez séparément les menus et les règles d’utilisation de Chat, Work et Codex.
:::

<span id="work-codex"></span>

## Work / Codex : partir de la tâche

Ces scénarios sont des recommandations de la rédaction. Commencez par le niveau de raisonnement par défaut pris en charge par votre client. Vérifiez les documents fournis et le périmètre avant de choisir un modèle plus puissant.

| Tâche | Point de départ conseillé | Quand augmenter le niveau ou changer de modèle | Mise en pratique et vérification |
|---|---|---|---|
| Extraire des champs, convertir des formats, reformuler un court passage | GPT‑6 Luna | Essayez Sol si des données claires produisent encore des champs manquants ou des erreurs sur les cas limites | [Mesurer l’utilisation et les reprises](/fr/guide/quality/usage-time-and-model-choice/) |
| Rédiger à partir de plusieurs documents | GPT‑6.1 Sol | Envisagez Astra si les contradictions entre sources restent irrésolues ou si des exigences sont régulièrement oubliées | [Rédiger un article](/fr/cases/write-an-article/) |
| Analyser les ventes et préparer un rapport hebdomadaire | GPT‑6.1 Sol | Augmentez le niveau si le traitement des remboursements, la déduplication ou les calculs d’évolution par rapport à la période précédente restent incorrects ; vérifiez les résultats à l’aide de calculs indépendants | [Rapport de ventes](/fr/cases/analyze-a-spreadsheet/) |
| Corriger un bug ou modifier plusieurs fichiers | GPT‑6.1 Sol | Envisagez Astra si les dépendances entre fichiers sont difficiles à localiser ou si les corrections échouent à répétition | [Corriger et vérifier un bug](/fr/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| Mener une recherche multisource avec des exigences strictes | GPT‑6.1 Sol ; envisagez Astra pour les problèmes difficiles | Augmentez le niveau si le raisonnement ne concilie pas les preuves contradictoires ou omet régulièrement certaines contraintes | [Vérifier le résultat](/fr/guide/quality/) |

## Caractéristiques des modèles et compromis

| Modèle | Rôle principal | Compromis et limites |
|---|---|---|
| GPT‑6 Luna | Modèle efficace pour les tâches claires, répétitives et fréquentes | Utile pour de petites tâches ; les jugements complexes demandent une vérification plus attentive |
| GPT‑6.1 Sol | Modèle principal conciliant capacités et coût pour les travaux complexes | Présenté officiellement comme proche d’Astra à moindre coût, sans résultat identique sur toutes les tâches |
| GPT‑6 Astra | Option la plus capable pour les tâches difficiles comportant plusieurs étapes | À envisager lorsque les exigences de résultat sont élevées ; la consommation supplémentaire peut être peu utile pour une tâche simple |
| GPT‑6 Sol et gamme GPT‑5.6 | Modèles antérieurs susceptibles de rester disponibles dans le client | Conservez un processus déjà validé ; comparez les modèles actuellement recommandés pour une nouvelle tâche |

Le [guide officiel des modèles](https://learn.chatgpt.com/docs/models) indique que 6.1 Sol est disponible dans Work et Codex. N’en déduisez pas que Chat propose un choix du même nom. Les descriptions des modèles Work/Codex et le libellé GPT‑6 dans Chat doivent être interprétés dans leur produit respectif.

<span id="chat"></span>

## Chat : choisir le niveau de réflexion

| Option | Utilisation conseillée | Compromis |
|---|---|---|
| Instant | Questions courantes, traduction, reformulations courtes | Privilégie la rapidité de réponse |
| Thinking · Medium | Apprentissage, comparaison d’options, analyse générale | Point de départ pour une analyse approfondie |
| Thinking · High | Mathématiques, décisions à plusieurs critères, questions de code complexes | Davantage de temps de réflexion pour les problèmes complexes |
| Extra High | Problèmes particulièrement difficiles nécessitant plusieurs vérifications | Selon les besoins et l’offre souscrite |
| Pro / GPT‑6 Pro | Tâches difficiles et processus plus longs | Fonctionne avec Astra, sous réserve de l’offre et des quotas |

Lors de la vérification, la documentation de Chat indique Medium et High pour Plus ; Extra High et Pro relèvent d’offres supérieures. Think sur Free / Go ne doit pas être assimilé aux capacités homonymes des offres payantes. Demander à Instant de « réfléchir en profondeur » sur Plus / Pro n’augmente pas automatiquement le niveau de réflexion : utilisez le menu. [Documentation officielle de Chat](https://help.openai.com/en/articles/20001354-gpt-6-and-other-models-in-chatgpt)

## Quand augmenter ou réduire le niveau

- Le résultat satisfait les critères d’acceptation : conservez le réglage ou essayez un niveau plus léger sur la même tâche.
- Des sources ou des objectifs manquent : complétez d’abord les entrées et les exigences ; davantage de raisonnement ne crée pas les preuves absentes.
- Des conditions sont régulièrement oubliées ou la logique se rompt : gardez les mêmes entrées et augmentez progressivement le niveau de réflexion ou changez de modèle.
- Les réglages élevés échouent encore : fractionnez la tâche et vérifiez les autorisations des outils ainsi que la méthode de validation.

Le modèle et l’intensité du raisonnement sont deux choix distincts. Un niveau plus élevé consomme généralement davantage de temps et de tokens. Vérifiez les réglages disponibles pour chaque modèle et client ; ne transposez pas directement les options de Chat dans Codex. [Notions de base sur les modèles et le raisonnement](/fr/guide/foundations/models-and-reasoning/)

## Faut-il changer d’offre ?

Pour un usage occasionnel, essayez l’accès gratuit. Comparez d’abord Plus si vous écrivez, analysez ou programmez souvent. Comparez Pro lorsque vous atteignez régulièrement les limites ou avez réellement besoin de capacités ou de quotas supplémentaires. L’intérêt de Go dépend des fonctions nécessaires et de l’écart de prix local.

Il s’agit d’un ordre de décision, pas d’un classement universel du rapport qualité-prix. **Les offres Pro imposent aussi des limites d’utilisation des modèles.** Vérifiez séparément l’abonnement, les crédits supplémentaires et les frais API ; un rapport entre tarifs unitaires ne correspond pas à l’économie réalisée sur une tâche complète.

[Choisir une offre et consulter les sources des prix](/fr/chatgpt-pricing/) · [Comptes, offres et accès](/fr/guide/getting-started/account-plans-and-access/)

## Comment évaluer le rapport coût-résultat

Comparez avec les mêmes entrées, outils autorisés et critères d’acceptation. Mesurez séparément l’attente, les échecs et nouvelles tentatives, la vérification humaine et les reprises. Privilégiez le réglage le plus léger qui satisfait régulièrement vos critères, plutôt que la seule vitesse de réponse.

[Téléchargez et remplissez les relevés d’utilisation](/fr/guide/quality/usage-time-and-model-choice/), ou réutilisez les [trois exercices de comparaison de prompts](/fr/prompts/comparison-lab/). L’expérience existante sur les prompts n’a pas enregistré les libellés réels des modèles et **ne peut pas servir de preuve pour les classer**.

## Que faire si le modèle est indisponible ?

Vérifiez d’abord si vous utilisez Chat, Work ou Codex, puis la version du client, l’offre, les autorisations de l’espace de travail et le moment de réinitialisation du quota. Utilisez un modèle disponible pour une tâche plus limitée, ou sauvegardez votre progression en attendant. Choisir un nom de modèle ne donne pas de droit d’accès.

[Résoudre les problèmes d’accès](/fr/guide/getting-started/account-plans-and-access/) · [Dépannage](/fr/guide/reference/troubleshooting/)

## Sources et mises à jour

Les faits concernant les produits proviennent des sources officielles citées en haut de page ; les recommandations par tâche relèvent du jugement de la rédaction. Cette page ne présente aucun test de performance des modèles. Les prix sont tenus à jour séparément sur la page dédiée ; vérifiez les informations de paiement avant tout achat.

- 2026-10-24 : première version du guide distinguant Chat de Work/Codex, avec des liens vers les cas pratiques, les relevés d’utilisation et les sources des prix.

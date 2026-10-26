---
title: "Exemple : un Skill de rédaction avec sources et échantillon de style"
description: "Téléchargez un dossier complet pour apprendre à relier les affirmations aux sources, réviser le style, conserver les contradictions et vérifier manuellement."
contentType: skill
audiences: [creator]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Les contrôles de structure des sources et citations ainsi que huit contrôles de régression ont réussi. L’article et le style ont été relus par l’auteur ; les cas de déclenchement sont des attentes de conception. La qualité de rédaction du modèle et le routage automatique n’ont pas été testés."
  environment: "Python 3.12.11 / Darwin arm64 ; trois sources synthétiques originales, copies temporaires, aucune dépendance tierce."
  evidence:
    - label: "Périmètre de vérification et journal de relecture de l’auteur"
      href: /downloads/skills/source-backed-writer/validation/record.md
assets:
  - path: /downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip
    purpose: "Skill, échantillon de style, sources synthétiques, version de référence, tableau des affirmations, diff de révision et contrôles de structure"
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: "cbaec37"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---
Ce Skill transforme les sources fournies en article dont on peut retrouver les justifications, tout en conservant les exigences de style, les preuves et les points non résolus. Il convient à la rédaction fondée sur des sources et à la vérification factuelle ; corriger une simple coquille ne nécessite pas ce processus complet.

[Télécharger source-backed-writer v1.0.0](/downloads/skills/source-backed-writer/source-backed-writer-1.0.0.zip) · [Voir SKILL.md](/downloads/skills/source-backed-writer/SKILL.md) · [Instructions d’installation](/downloads/skills/source-backed-writer/README.md)

## Contenu du dossier

| Matériel | Utilité |
|---|---|
| Trois sources synthétiques et index des empreintes | Travailler sur des entrées fixes sans prendre un produit fictif pour une vraie recommandation d’achat |
| Échantillon de style et contre-exemple conçu | Voir comment remplacer des promesses de résultat non étayées par des gestes précis |
| Plan, premier jet, version finale et diff | Distinguer modifications factuelles, structurelles et stylistiques |
| Sept affirmations reliées aux sources et liste des points non résolus | Séparer ce que les sources attestent, les déductions de l’auteur et l’inconnu |
| Cas positifs et négatifs de déclenchement, scripts et journal | Définir le périmètre et les limites des contrôles |

Le dossier réutilise l’outil fictif « Shiye (拾页) » de l’[exercice d’article fondé sur des sources](/fr/cases/write-an-article/). Vous pouvez faire cet exercice d’abord, puis enregistrer cette méthode dans un Skill.

## Installer et lancer pour la première fois

Placez le dossier complet dans `.agents/skills/source-backed-writer/` de votre projet d’exercice, avec `SKILL.md` au premier niveau. Si un Skill du même nom existe, comparez-les sans écraser le Skill existant. Consultez [Utiliser un Skill](/fr/skills/use-a-skill/) pour la découverte ; après avoir confirmé qu’il est disponible dans votre client, appelez-le explicitement :

```text
$source-backed-writer Lis les trois documents de sources/ de ce dossier pédagogique.
Rédige une présentation destinée aux auteurs individuels selon references/style.md,
et enregistre article.md, claim-map.csv et unresolved.md dans my-output/.
Préserve leur caractère synthétique et ne publie rien.
```

Lire et rédiger ne nécessitent pas Python. Le contrôle de structure facultatif n’utilise que la bibliothèque standard de Python 3.10+. Dans le dossier Skill décompressé :

```sh
# Vérifier la version de référence du dossier
python3 scripts/check_article.py
# Vérifier votre version au format du dossier
python3 scripts/check_article.py --output my-output
# Reproduire huit contrôles dans des copies temporaires
python3 validation/test_checks.py
```

Cette page a exécuté les scripts, sans tester la découverte automatique ni l’appel du modèle dans un client donné. Dans une vraie tâche dont le format de sortie diffère, vérifiez votre propre contrat sans imposer le format pédagogique.

## Influence du style sur l’article

L’[échantillon de style](/downloads/skills/source-backed-writer/references/style.md) propose une comparaison conçue pour l’exercice :

> Contre-exemple : Shiye est une solution universelle qui traite sans effort tous les formats et double votre productivité.

Remplacez-le par : « La notice ne mentionne que Markdown et le texte brut. Essayez d’abord sur une petite copie de vos notes, puis retournez au texte d’origine cité par le résumé. » La première phrase vient de la source ; la seconde est un conseil de l’auteur. Distinguez-les dans le tableau des affirmations. Si l’utilisateur demande un ton ou une structure différents, suivez sa demande réelle.

[Version finale de référence](/downloads/skills/source-backed-writer/solution/article.md) · [Tableau des affirmations](/downloads/skills/source-backed-writer/solution/claim-map.csv) · [Diff de révision](/downloads/skills/source-backed-writer/solution/revision.diff)

## Traiter contradictions et informations manquantes

La description du produit P3 dit que l’envoi des diagnostics est désactivé par défaut, alors que le résumé de version C2 dit qu’il est activé pour les nouvelles installations. La version finale présente les deux affirmations, sans présumer que la plus récente est exacte. Les champs envoyés ne sont pas précisés et restent dans la [liste des points non résolus](/downloads/skills/source-backed-writer/solution/unresolved.md).

L’entretien synthétique ne fournit ni mesure du temps ni échantillon d’évaluation fixe. Il ne justifie donc ni « productivité doublée » ni taux de précision. Corrigez en supprimant les chiffres sans preuve, en rétablissant les réserves et en mettant à jour le tableau des affirmations ; chercher une réponse plausible pour un produit fictif ne résout rien.

## Critères de réussite et limites des contrôles

Après rédaction, vérifiez chaque point :

- Les affirmations clés renvoient à un emplacement vérifiable ; faits, conseils et inconnues sont distincts.
- L’identité fictive, les limites des entrées et la contradiction non résolue figurent toujours dans l’article.
- La révision de style n’a supprimé aucune réserve nécessaire ni changé la structure demandée.
- Après validation de la forme des citations, confrontez chaque phrase aux sources ; la seule présence d’un identifiant ne suffit pas.

Le script détecte les changements d’empreinte des sources et les erreurs de structure des citations, mais ne juge pas si une source soutient vraiment une affirmation. Le dossier teste volontairement une fausse promesse de capacité qui passe le contrôle structurel avec un identifiant valide. Une relecture factuelle humaine reste nécessaire.

## Quand ne pas déclencher le Skill

Corriger une coquille, examiner un patch Git ou ajouter une fonction logicielle ne devrait pas devenir automatiquement une rédaction complète. Terminer l’article n’accorde pas le droit de le publier. Les [cas de déclenchement](/downloads/skills/source-backed-writer/fixtures/trigger-cases.json) représentent des attentes de conception, pas un taux de réussite du routage.

Revenez ensuite au [parcours créateur](/fr/guide/learning-paths/creator/) et consignez le style et les critères de réussite utilisés dans vos propres instructions réutilisables.

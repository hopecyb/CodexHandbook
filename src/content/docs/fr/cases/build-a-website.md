---
caseCategory: creation
directoryOrder: 40
title: 'Créer un site web : des informations événementielles à une page prévisualisable'
description: Téléchargez les exigences, une page de départ et un exemple final pour travailler la mise en page adaptative, le clavier et la réparation reproductible d’un bouton.
contentType: case
audiences: [creator, developer]
level: beginner
outputs: [html, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  environment: Python 3.12.11 / Darwin arm64 ; navigateur intégré de Codex (version exacte du moteur inconnue), fenêtres de 1280×720 et 375×812.
  summary: La page de référence a été vérifiée dans un navigateur en vue bureau et étroite, ainsi que pour le bouton et le clavier. Un lien défectueux a été reproduit puis corrigé. Cela ne prouve ni la compatibilité entre navigateurs, ni les performances du modèle, ni la réussite des lecteurs.
  evidence:
    - label: Revue dans le navigateur et correction visuelle réelle
      href: /downloads/reading-event/validation/browser-review.md
    - label: Journal du lien défectueux et de sa réparation
      href: /downloads/reading-event/validation/recovery.json
assets:
  - path: /downloads/reading-event/reading-event-1.0.0.zip
    purpose: Exigences fixes, faits fictifs, HTML de départ, page de référence, exemple défectueux, modèle de validation et script de validation
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "55fd86a"
reviewed_at: 2026-10-26
---

Transformez les informations d’un événement en site d’une page ouvrable dans un navigateur. Vous livrerez une page statique locale et un compte rendu de validation. L’événement et le lieu sont fictifs ; le mode d’inscription reste à déterminer.

[Télécharger le dossier complet](/downloads/reading-event/reading-event-1.0.0.zip) · [Ouvrir la page de référence](/downloads/reading-event/solution/index.html) · [Lire la présentation des fichiers](/downloads/reading-event/README.md)

## Objectif et préparation

La page présente l’événement, l’horaire, le lieu, la capacité, le prix, les préparatifs et les points à confirmer. Le bouton principal renvoie uniquement aux modalités de participation sur cette même page ; il ne doit pas faire croire que l’inscription est ouverte.

Après extraction, copiez `starter` dans un nouveau dossier `work` et autorisez le modèle à modifier uniquement `work/index.html`. Fournissez `facts.md`, `brief.md` et `prompt.md` à la racine du dossier comme entrées en lecture seule. Ne consultez `solution` qu’une fois votre travail terminé. Le HTML s’ouvre directement dans un navigateur, sans dépendance front-end.

Pour utiliser un serveur local, suivez la commande Python facultative du README. Si le port est occupé, choisissez-en un libre sans arrêter un service inconnu.

## Soumettre la tâche

```text
À partir de facts.md et brief.md, terminez le fichier index.html actuel pour
créer une page consacrée à une rencontre de lecture. Ne modifiez que index.html ;
utilisez HTML et CSS intégré, sans nouvelle dépendance, accès réseau, déploiement
ni envoi. Le mode d’inscription doit rester « à confirmer » ; le bouton principal
renvoie seulement aux modalités de participation sur cette page. À la fin,
vérifiez l’affichage bureau et étroit à 375 px, le focus clavier et les liens
internes. Indiquez les contrôles réellement effectués et les points inachevés ;
ne déclarez pas réussis des contrôles non exécutés.
```

Le [schéma de mise en page](/downloads/reading-event/wireframe.md) décrit l’ordre de lecture en deux colonnes sur ordinateur et une seule sur mobile. Les couleurs et la décoration peuvent varier, mais les faits, les inconnues et les critères de validation doivent rester exacts.

## Vérifier le résultat

| Contrôle | Critère de validation |
|---|---|
| Faits | 17 octobre 2026, 14 h 00–15 h 30, salle de lecture fictive, 18 personnes, gratuité et livre apporté volontairement : tout correspond aux documents |
| Inconnues | L’inscription reste à confirmer ; aucun QR code, numéro de téléphone ou lien inventé |
| Mobile | Lisible à 375 px, sans débordement horizontal |
| Interaction | La touche Tab atteint le bouton principal, le focus est visible ; Entrée ou un clic mène aux modalités de participation |
| Portée | Seul `work/index.html` a changé ; aucune dépendance, aucun formulaire de collecte ni publication externe |

Copiez le [modèle de validation](/downloads/reading-event/review-template.md) hors du dossier de travail et renseignez vos propres résultats. La page de référence a été rédigée par l’auteur ; son compte rendu ne remplace pas la validation du résultat produit ici par le modèle.

## Reproduire et réparer un bouton défectueux

Dans le dossier, le bouton de `fixtures/broken.html` pointe à tort vers `#signup`, alors que la section réelle est `#participation`. La page semble complète, mais le bouton n’atteint pas sa destination.

Exécution facultative :

```sh
python3 validation/reproduce.py
```

Dans un dossier temporaire, le reproducteur vérifie la page défectueuse, quitte avec le code 1 et signale `missing-fragment`. Il ne remplace ensuite que le `href`, relance le contrôle et quitte avec le code 0. Le fichier d’origine reste intact. Le [journal conservé](/downloads/reading-event/validation/recovery.json) contient les deux résultats.

Ne « réparez » pas le problème en supprimant le bouton ou en ignorant le contrôle. Corrigez seulement le lien cible, puis cliquez pour vérifier. Le script de liens ne peut juger ni la conception, ni les faits, ni l’expérience au clavier ; vérifiez-les séparément.

## Correction visuelle réelle et limites de vérification

Lors du premier contrôle mobile de l’auteur, le texte décoratif d’un livre débordait de sa carte. L’auteur a ajusté la taille de police et les marges intérieures en vue étroite, puis revérifié. Les observations sur ordinateur et mobile, le focus clavier, le bouton principal et les faits F1–F7 figurent dans la [revue du navigateur](/downloads/reading-event/validation/browser-review.md).

Cet exercice n’a pas testé tous les navigateurs, un téléphone physique, l’usage complet d’un lecteur d’écran ni la réussite de lecteurs indépendants. Aucun site n’a été publié et aucun taux de réussite du modèle n’a été mesuré. Avant toute publication, confirmez séparément l’hébergement, le contenu public et l’autorisation de déploiement.

Suite : [examiner les différences](/fr/guide/quality/review-diffs/) · [laboratoire de reprise après échec](/fr/guide/reference/troubleshooting/failure-recovery-lab/)

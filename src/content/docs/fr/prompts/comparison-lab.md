---
title: "Trois comparaisons de prompts : douze exécutions et revue par critère"
description: Comparez A/B sur un rapport hebdomadaire, un article et une correction de bug. Téléchargez entrées fixes, prompts et modèles de relevé sans supposer qu'un prompt plus long est meilleur.
contentType: prompt
audiences: [creator, developer]
level: intermediate
outputs: [markdown, json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  environment: Darwin arm64 ; Codex 26.911.61220 / build 9647 ; douze contextes Agent indépendants ; modèles et réglages de raisonnement réellement utilisés inconnus.
  summary: Chacune des trois paires A/B a été répétée deux fois ; livrables, durées et erreurs d'outil sont conservés. L'Agent principal a évalué sans aveuglement et certains journaux sont incomplets. Les résultats ne démontrent pas un effet général et ne constituent pas des tests avec de vrais lecteurs.
  evidence:
    - label: Notes par critère et limites des douze exécutions
      href: /downloads/prompt-comparison-results/review.md
    - label: Exécutions et durées réelles
      href: /downloads/prompt-comparison-results/runs.json
    - label: Contrôles ultérieurs des livrables
      href: /downloads/prompt-comparison-results/reviewer-checks.json
assets:
  - path: /downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip
    purpose: Douze tâches, entrées, copies publiques des livrables bruts, journaux, durées, notes par critère et scripts de revue
    license: CC0-1.0
    version: 1.0.0
  - path: /downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip
    purpose: Neuf fichiers d'entrée fixes, six prompts, dimensions de notation communes, critères de revue humaine et registre vierge
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: "e6a23bb"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Comparer permet de découvrir quelles exigences changent le livrable, pas de prouver qu'un prompt plus long est meilleur. Cette page rassemble trois jeux d'entrées fixes et les relevés de douze exécutions réelles achevées le 18 septembre 2026. Ces échantillons montrent surtout des différences dans les preuves livrées, insuffisantes pour établir un effet général.

[Télécharger tous les supports de comparaison](/downloads/prompt-comparisons/prompt-comparisons-1.0.0.zip) · [Protocole d'exécution](/downloads/prompt-comparisons/README.md) · [Registre vierge](/downloads/prompt-comparisons/blank-run.json)

## Trois tâches, une même méthode

Dans chaque paire, A et B utilisent les mêmes entrées et le même périmètre d'outils. B conserve toute la tâche de A et ajoute seulement un groupe de critères d'acceptation explicites. Une différence de résultat ne peut donc pas être attribuée à un mot isolé de ce groupe.

| Tâche | Entrée fixe | Exigences ajoutées dans B | Observation principale |
|---|---|---|---|
| Rapport hebdomadaire des ventes | CSV synthétique de 46 lignes et dictionnaire des données | Décision pour chaque ligne, explication des anomalies, relevé de vérification indépendante | Au-delà des bons chiffres, peut-on retracer remboursements, doublons et base nulle ? |
| Article fondé sur des sources | Trois documents synthétiques contenant volontairement des contradictions | Tableau des faits, questions ouvertes, aucun arbitrage inventé entre sources en conflit | Les inconnues sont-elles préservées et chaque formulation précise étayée ? |
| Correction de bug | Implémentation d'un panier et tests d'origine | Tests d'origine rouges avant correction, verts après, journaux et diff | La correction a-t-elle été réellement vérifiée sans modifier les tests pour contourner le bug ? |

[Rapport A](/downloads/prompt-comparisons/cases/sales/A.md) / [B](/downloads/prompt-comparisons/cases/sales/B.md) · [Article A](/downloads/prompt-comparisons/cases/article/A.md) / [B](/downloads/prompt-comparisons/cases/article/B.md) · [Bug A](/downloads/prompt-comparisons/cases/bug/A.md) / [B](/downloads/prompt-comparisons/cases/bug/B.md)

A peut vérifier spontanément les données et exécuter des tests ; B peut aussi échouer. Ne confondez pas attentes et résultats.

## Cinq dimensions de notation communes

A et B utilisent le même [rubric.json](/downloads/prompt-comparisons/rubric.json) : exactitude de la tâche, traçabilité des preuves, contrôle du périmètre, traitement de l'incertitude et reproductibilité. Pour chacune, 0 signifie non satisfait, 1 partiellement satisfait et 2 satisfait avec preuve consultable. Utilisez null pour un cas non exécuté ou impossible à juger.

Chaque note doit renvoyer à une preuve précise. Une prose fluide ne suffit pas à bien noter un rapport aux chiffres faux ; une liste de liens ne prouve pas les faits d'un article ; du code qui affirme « tests réussis » n'est pas vérifié pour autant. Une moyenne ne doit pas masquer une erreur factuelle décisive.

## Les douze exécutions réelles

[Télécharger résultats et journaux](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) · [Notes par critère et durées](/downloads/prompt-comparison-results/review.md) · [Conditions d'échantillonnage](/downloads/prompt-comparison-results/README.md)

Chaque groupe a suivi l'ordre A1 → B1 → B2 → A2, avec trois tâches différentes en parallèle à chaque tour. Chaque exécution utilisait un nouveau contexte Agent et un répertoire de travail, sans corrigé de notation. Modèle et réglage de raisonnement n'ont pas été remplacés explicitement ; leurs étiquettes réelles sont inconnues. L'isolement des répertoires reposait sur des instructions, pas sur une séparation au niveau du système d'exploitation. L'Agent principal a évalué sans aveuglement ; aucune note humaine indépendante n'a été recueillie.

| Tâche | Deux observations A | Deux observations B | Ce que ces essais montrent |
|---|---|---|---|
| Rapport de ventes | Chiffres, registre et traitement des anomalies corrects ; vérification spontanée aussi | Chiffres corrects, explication de contrôle ajoutée ; une exécution n'a pas conservé toute la commande de calcul | Les exigences supplémentaires n'ont pas garanti des journaux complets |
| Article sourcé | Faits, sources et conflits traités correctement, article livré | Mêmes limites factuelles conservées, avec tableau des faits et liste de questions ouvertes | Davantage de documents sont disponibles pour la revue |
| Bug | Tests d'origine inchangés, trois réussites après correction ; journal d'échec avant correction absent | Échecs initiaux, réussites après correction, codes de sortie et diffs conservés | Chaîne de vérification plus complète, mais les quatre exécutions ont omis la version de Node |

Les tableaux complets montrent les cinq notes de 0 à 2 sans établir de classement général. L'absence de tableau des faits dans Article A affecte le critère de reproductibilité convenu, pas la justesse de son texte. Bug A et B ont tous deux une reproductibilité partielle, mais pour des raisons différentes : ne regardez pas seulement le chiffre.

Les hash des entrées et des textes de tâche sont restés identiques. Une revue ultérieure a recalculé le CSV de ventes et vérifié les quatre corrections de bug avec les tests d'origine inchangés. Ces [contrôles ultérieurs](/downloads/prompt-comparison-results/reviewer-checks.json) sont conservés séparément des journaux des Agents expérimentaux.

## Conserver aussi les échecs et limites

- Le prompt commun de vente nommait `data-dictionary.md`, alors que le fichier se trouvait dans `input/data-dictionary.md`. Les quatre exécutions ont d'abord rencontré cette erreur de chemin, puis l'ont corrigée. Il s'agit d'un défaut des supports, pas d'un effet des critères A/B. Pour garder les entrées figées, le prompt n'a pas été modifié en cours de série.
- Pour `run-07`, seule une synthèse de la commande Python a été gardée, pas le code complet. Le paquet de résultats laisse visible cette lacune au lieu de prétendre qu'une commande complète avait été enregistrée.
- Les Agents ont compilé leurs propres journaux ; ce ne sont pas des exports d'audit complets de la plateforme. Les copies publiques remplacent seulement les chemins absolus locaux. Les hash des fichiers originaux et publics sont conservés séparément.
- La durée comprend l'attente des outils et la rédaction des journaux, alors que les tâches étaient parallèles. Il n'y a ni base humaine comparable ni mesure de coût. Modèle et raisonnement étant inconnus, on ne peut classer les modèles par vitesse ou temps gagné.

Chaque tâche et variante n'a eu que deux exécutions. La notation n'était pas aveugle et certains critères rappellent les exigences supplémentaires de B. Cette page illustre des différences de livrables et de preuves, sans publier un taux de réussite général ni affirmer que « B gagne » ou que « plus long est meilleur ».

## Exécuter et consigner votre comparaison

1. Créez des répertoires de travail distincts pour A et B, copiez les mêmes entrées et vérifiez leurs hash ; ne donnez pas au modèle le corrigé de notation.
2. Lancez une tâche neuve à chaque essai et fixez modèle, raisonnement, client, outils et limite de temps ; indiquez honnêtement les réglages inconnus. Ne partagez pas le résultat précédent avec l'essai suivant.
3. Décidez à l'avance du nombre de répétitions et des conditions d'arrêt, alternez les ordres A→B et B→A, et conservez échecs, interruptions et reprises plutôt que le seul meilleur résultat.
4. Notez chemins réels des sorties, étiquette du modèle, environnement, durée, erreurs d'outils et hash des entrées. Notez séparément le temps humain de reprise et n'inscrivez pas zéro pour un essai non exécuté.
5. Notez chaque dimension selon la même règle, si possible avec les étiquettes de variante masquées à la personne qui révise. Comparez dimensions et types d'échec avant d'adopter les exigences supplémentaires.

Un petit nombre d'observations ne concerne que ces entrées et cet environnement. Il ne permet pas de déduire un taux de réussite général ni d'attribuer causalement une amélioration à une phrase du prompt.

## Ce qui a été vérifié et ce qui manque

Le contrôle des supports peut être lancé :

```sh
python3 scripts/check_materials.py
```

Les neuf fichiers d'entrée fixes, trois paires de prompts A/B additifs et registres vierges ont été contrôlés pour l'absence de notes fictives. Ce script ne contacte pas de modèle et ne mesure pas l'efficacité des prompts.

Les douze exécutions, notes par critère et durées sont enregistrées. Les étiquettes réelles des modèles, les journaux complets de la plateforme et une revue humaine indépendante manquent encore. Le paquet de résultats contient aussi `python3 scripts/check_results.py`, qui revérifie les livrables sauvegardés sans relancer de modèle. Les exercices d'origine sont le [rapport](/fr/cases/analyze-a-spreadsheet/), l'[article](/fr/cases/write-an-article/) et le [parcours développeur](/fr/guide/learning-paths/developer/).

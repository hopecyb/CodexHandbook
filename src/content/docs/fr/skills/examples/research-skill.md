---
title: "Exemple : un Skill de recherche qui distingue les contradictions des lacunes"
description: "Téléchargez un dossier de recherche complet et entraînez-vous sur des sources synthétiques fixes à qualifier leur état, les contradictions, les questions ouvertes et un rapport traçable."
contentType: skill
audiences: [creator, developer]
level: intermediate
outputs: [markdown, csv]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "Les contrôles des sources locales et huit tests de régression ont réussi. Le rapport de référence a été vérifié par son auteur contre les sources ; le routage du modèle, la qualité de la recherche et les pannes réseau n'ont pas été mesurés."
  environment: "Python 3.12.11 / Darwin arm64 ; bibliothèque standard, trois sources synthétiques et un fichier local délibérément absent."
  evidence:
    - label: Portée réelle des vérifications et limites
      href: /downloads/skills/evidence-research/validation/record.md
assets:
  - path: /downloads/skills/evidence-research/evidence-research-1.0.0.zip
    purpose: "Skill de recherche, sources fixes, tableau des preuves, rapport et vérificateur d'état des sources"
    license: CC0-1.0
    version: 1.0.0
locale: fr
source_locale: zh-CN
source_revision: "cf2b232"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Une source inaccessible, une source muette sur un point et deux sources contradictoires exigent des traitements différents. Ce Skill conserve ces distinctions pour que les lecteurs sachent quelles conclusions sont vérifiables et lesquelles demandent encore des preuves.

[Télécharger evidence-research v1.0.0](/downloads/skills/evidence-research/evidence-research-1.0.0.zip) · [SKILL.md](/downloads/skills/evidence-research/SKILL.md) · [Instructions d'installation](/downloads/skills/evidence-research/README.md)

## Question et documents fixes

Le dossier reprend l'outil fictif « Shiye (拾页) » de l'[exercice de rédaction d'article](/fr/cases/write-an-article/). Il faut étudier ses formats d'entrée, le réglage par défaut du diagnostic et les champs téléversés. Trois sources synthétiques originales sont fournies ; une quatrième note du mainteneur figurant au catalogue manque délibérément. Ne cherchez pas ce produit fictif sur le vrai Web et n'inventez pas de réponse.

| État des preuves | Exemple du dossier | Comment le présenter |
|---|---|---|
| `supported` : étayé | P1 ne cite que Markdown et le texte brut | Indiquez la portée étayée et son emplacement, sans prétendre avoir testé le produit |
| `conflict` : contradiction | P3 indique désactivé par défaut, C2 activé par défaut | Présentez les deux versions et conservez les lacunes sur les versions et conditions |
| `unknown` : inconnu | Les champs téléversés pour le diagnostic ne sont pas listés | Précisez ce qui manque sans deviner le contenu téléversé |
| `unavailable` : source indisponible | Le fichier local de M n'a pas été fourni | Gardez trace de la source inaccessible et de son effet, sans prétendre l'avoir lue |

[Rapport de référence](/downloads/skills/evidence-research/solution/report.md) · [Tableau des preuves](/downloads/skills/evidence-research/solution/evidence.csv) · [Format de sortie](/downloads/skills/evidence-research/references/evidence-format.md)

## Installation et appel

Placez le dossier complet dans `.agents/skills/evidence-research/` du projet d'exercice, avec `SKILL.md` comme point d'entrée. N'écrasez pas un Skill personnalisé du même nom. Après avoir confirmé qu'il est sélectionnable dans le client avec le [guide d'utilisation des Skills](/fr/skills/use-a-skill/), appelez-le :

```text
$evidence-research À partir des sources de sources/catalog.json dans ce dossier,
détermine si l'on peut confirmer les formats d'entrée, le réglage par défaut
du diagnostic et les champs téléversés de Shiye (拾页) 1.2. Produis
my-output/report.md et evidence.csv en signalant les contradictions
et les sources inaccessibles. Conserve l'identité synthétique ;
ne cherche pas ce produit fictif sur de vrais sites Web.
```

Le fichier `fixtures/trigger-cases.json` contient des exemples positifs et négatifs : comparer des sources et vérifier des preuves correspond à ce Skill ; écrire un poème ou compter simplement des fichiers ne demande pas ce processus. Il s'agit d'intentions de conception ; le déclenchement automatique n'a pas été mesuré.

## Vérifier les sources et le rapport

Les contrôles facultatifs exigent Python 3.10+ sans dépendance tierce. Dans le dossier décompressé :

```sh
# Afficher l'état réel de chaque source
python3 scripts/check_evidence.py --inspect-only
# Vérifier le rapport de référence
python3 scripts/check_evidence.py
# Vérifier un rapport respectant le format du dossier
python3 scripts/check_evidence.py --output my-output
# Exécuter les tests de régression sur des copies temporaires
python3 validation/test_checks.py
```

Le résultat attendu est P/I/C `available`, M `missing` et quatre entrées de preuve conformes à la structure. Le code de sortie 0 signifie que le contrôle s'est terminé et que la structure est conforme ; il ne signifie pas que toutes les sources sont disponibles. Lisez chaque état, surtout avec `--inspect-only`.

Le vérificateur repère les changements de hachage, les fichiers manquants ou illisibles et ceux sans hachage attendu. Une source indisponible ne doit ni servir de preuve lue ni disparaître silencieusement du rapport. Le script ne traite que des fichiers locaux ; il ne teste ni les statuts HTTP ni l'accessibilité des pages Web.

## Reprendre après un échec

- **Fichier manquant :** vérifiez le chemin. Si la source n'a vraiment pas été fournie, conservez son état indisponible et livrez les autres conclusions étayées.
- **Contenu modifié :** comparez versions et différences, puis revérifiez les citations. Ne changez pas simplement le hachage pour faire passer le contrôle.
- **Preuves contradictoires :** vérifiez versions, conditions d'installation et public concerné. Si le conflit demeure, laissez la question ouverte au lieu de choisir uniquement selon la date.
- **Fait manquant :** listez les champs ou explications attendus du mainteneur. Ne présentez pas une recommandation comme un fait confirmé.

L'exemple ne demande pas de résoudre les questions auxquelles les entrées fixes ne répondent pas. Si une recherche réelle autorise des sources de remplacement, consignez pourquoi vous les avez choisies et ce que vous avez effectivement consulté.

## Critères de fin et limites

Le rapport doit couvrir les questions, les sources lues, les sources inaccessibles, les preuves de chaque conclusion et les compléments à obtenir. L'auteur a confronté le rapport de référence aux sources fixes, sans revue par un lecteur indépendant ou un second relecteur.

Les huit tests montrent aussi une faiblesse : l'affirmation fausse « prend en charge tous les formats avec une précision parfaite » peut passer un contrôle de structure si une citation valide lui est attachée. Le script ne prouve pas que le sens est étayé et ne peut déterminer si deux passages se contredisent vraiment. Lisez donc chaque source avant livraison.

Ensuite, utilisez le [Skill de rédaction](/fr/skills/examples/writing-skill/) pour transformer les conclusions vérifiées en article, en conservant contradictions et inconnues.

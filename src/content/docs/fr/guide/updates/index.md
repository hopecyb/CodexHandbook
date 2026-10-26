---
title: Mises à jour et corrections du manuel
description: Consultez les modifications du manuel, les exercices concernés, les limites de vérification et la procédure de signalement liée à une page précise.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Rédigé d'après le contenu actuel du dépôt et les journaux d'exécution. Il s'agit des changements du manuel, pas des nouveautés produit d'OpenAI ni d'une confirmation de déploiement public.
locale: fr
source_locale: zh-CN
source_revision: "3c99d35"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---
Cette page indique ce qui a changé dans le manuel, les opérations concernées et ce qui a été vérifié. Les dates correspondent à la préparation du contenu ; pour l'état réel de publication, référez-vous à la version du site que vous consultez. Pour les changements de fonctionnalités, consultez les sources officielles citées dans les tutoriels concernés.

## 2026-09-18 : exercices réalisables et limites de vérification

| Changement | Conséquence pour les lecteurs | Compte rendu |
|---|---|---|
| Le [rapport hebdomadaire des ventes](/fr/cases/analyze-a-spreadsheet/) comporte désormais entrées et livrables complets | Téléchargez 46 lignes de données synthétiques pour pratiquer remboursements, dédoublonnage et variation d'une période à l'autre | [Contrôle indépendant des calculs](/downloads/sales-weekly-report/record.md) |
| L'[article fondé sur des sources](/fr/cases/write-an-article/) inclut une carte des faits et des documents contradictoires | Gardez les inconnues et ne présentez pas une interview synthétique comme un témoignage réel | [Contrôles des sources et de la structure](/downloads/source-backed-article/validation/record.md) |
| La [présentation](/fr/cases/create-a-slide-deck/) fournit PPTX, PDF et aperçu de huit pages | Examinez le texte modifiable et l'apparence des diapositives ; la compatibilité avec tous les logiciels n'est pas garantie | [Compte rendu logiciel et rendu](/downloads/article-to-slides/validation/record.md) |
| Le [parcours créateur](/fr/guide/learning-paths/creator/) et le [parcours développeur](/fr/guide/learning-paths/developer/) suivent désormais les livrables | Chaque étape comprend documents, critères d'acceptation et suite ; les développeurs peuvent noter tests rouges puis verts | [Compte rendu de reprise du parcours développeur](/downloads/developer-path/run-record.json) |
| [Quatre types de Skill](/fr/skills/examples/) ont des paquets complets à télécharger | Revue, rédaction, recherche et automatisation comportent références et contrôles ; les échantillons de déclenchement ne sont pas des mesures de routage | « Environnement de vérification et preuves » sur chaque page détaillée |
| Le [triage d'Issues](/fr/cases/use-cases/team-automation/issue-triage-suggestions/) corrige son schéma et son seuil de mise en service | « Trois échantillons et 80 % d'accord » ne justifient plus une mise en service ; une revue humaine reste conseillée | [Essai à blanc](/downloads/issue-triage/validation/record.md) |
| La [vérification de liens](/fr/cases/use-cases/team-automation/scheduled-link-check/) et la [récupération après échec](/fr/guide/reference/troubleshooting/failure-recovery-lab/) incluent des supports exécutés | Reproduisez erreurs locales et récupération ; les liens externes, la planification réelle et les échecs de connexion restent non testés | [Compte rendu de récupération](/downloads/failure-recovery/validation/record.md) |

## 2026-09-18 : filtrage des cas et navigation des parcours

Le [répertoire des cas](/fr/cases/) permet de filtrer par type de tâche et mot-clé, avec des URL filtrées partageables. Les cartes tirent livrables et état de vérification des métadonnées des cas. Dans les versions chinoises simplifiée et traditionnelle, la barre latérale des parcours affiche seulement le parcours actuel, ses étapes et l'aide associée ; la vue d'ensemble débutant est épinglée en premier et les cinq étapes sont numérotées. Un résultat vide peut être réinitialisé. Sans scripts, tous les cas restent consultables.

## 2026-09-18 : douze exécutions de comparaison de prompts

Les [trois comparaisons de prompts](/fr/prompts/comparison-lab/) comprennent désormais deux exécutions réelles de A et de B pour un rapport de ventes, un article fondé sur des sources et une correction de bug, avec livrables, durée et notes par critère. Le [paquet de résultats](/downloads/prompt-comparison-results/prompt-comparison-results-1.0.0.zip) conserve erreurs d'outil, champs manquants dans les journaux et hash de chemins anonymisés. L'Agent principal a évalué sans aveuglement, les modèles réellement utilisés sont inconnus et ces données ne prouvent ni taux de réussite général ni gain de temps.

## 2026-09-18 : exercice complet de création de site

Le [cas de création de site](/fr/cases/build-a-website/) inclut besoins fixes, page HTML initiale, résultat de référence, modèle d'acceptation et panne d'ancre de bouton. La page de référence a été contrôlée sur ordinateur et à 375 px de largeur ; les corrections et journaux de liens sont conservés. Aucun déploiement, inscription ni effet du modèle n'est revendiqué.

## 2026-09-18 : point d'entrée chinois recentré

La page d'accueil organise tâches, parcours par rôle, recherche d'aide et ressources réutilisables, en supprimant les répétitions sur le positionnement et les capacités. La navigation principale en chinois simplifié et traditionnel met en avant tâches, parcours et références. La feuille de route passe dans le menu des ressources ; la version mobile propose les mêmes entrées.

## 2026-09-18 : supports fixes pour débutants et exercice de récupération

Le [parcours débutant en cinq étapes](/fr/guide/learning-paths/beginner/) utilise un même jeu de documents synthétiques sur un événement, une annonce de référence, quatre exemples d'erreur et des modèles de revue et de passation. L'exercice va de la lecture seule et d'une modification de fichier à la restauration réelle d'une copie. Le [journal de script de l'auteur](/downloads/first-project/validation/record.json) démontre uniquement les opérations sur les fichiers ; aucune évaluation indépendante de modèle ni réussite de lecteurs n'est établie.

## 2026-09-18 : dates de la feuille de route et exercices pratiques

La [feuille de route des applications d'IA](/fr/ai-roadmap/) distingue désormais articles de recherche, lancements de produit, articles d'ingénierie et sujets de projet non classés par première date de publication. Chaque sujet propose des sources précises et un exercice. La date d'un article ne représente plus la généralisation dans le secteur, et un contrôle de structure d'un paquet Skill ne vaut pas test de déclenchement dans le client. Les anciennes URL sont conservées ; les anciens mois et années ne sont pas des dates d'événements actuels. Sources et périmètre de vérification figurent en tête de chaque sujet.

## 2026-09-18 : clarifications contre les erreurs de lecture

- L'entrée des tarifs devient « Référence de prix ». Les relevés sourcés dans leur devise d'origine sont séparés des inconnues ; une estimation ne sert plus à classer les prix mondiaux. Vérifiez le prix affiché par le vendeur avant d'acheter.
- Les en-têtes distinguent état éditorial, contrôle des sources, exécution d'exemple et note historique. « Exécuté » ne concerne que les scripts et environnements nommés ; ce n'est pas un taux de fiabilité des sorties du modèle.
- La [priorité des instructions](/fr/guide/context/context-priority/) distingue rôles des messages, découverte des instructions du projet et permissions d'exécution, sans affirmer globalement que les instructions les plus récentes ou strictes l'emportent toujours.
- Les pages [SDK](/fr/guide/developer-platform/sdk-overview/) et [Webhook](/fr/guide/developer-platform/webhooks/overview/) distinguent exécution locale, service auto-hébergé et conception des rappels ; elles ne présentent pas des interfaces proposées comme des contrats officiels.
- Les [niveaux de tâche](/fr/prompts/ask-for-a-plan/) distinguent exécution directe, planification préalable et approbation d'action, sans imposer une pause à chaque étape.

Les sources et limites de vérification de ces mécanismes figurent en tête des pages concernées. Ce résumé ne constitue pas une référence complète des interfaces.

## Signaler un problème sur une page

Chaque article en chinois comporte en bas un lien « Signaler un problème sur cette page (brouillon GitHub) ». Il ouvre un brouillon d'Issue non soumis avec titre de la page, chemin sur le site et date de vérification enregistrée. Vérifiez son contenu avant de le soumettre vous-même ; un compte GitHub est nécessaire.

Indiquez le passage précis, l'écart entre comportement attendu et constaté, l'environnement utile et, si nécessaire, une source publique. Ne partagez que des informations anonymisées : pas de clés API, données de compte, répertoires privés, données client ou journaux bruts complets. Le brouillon ne collecte pas automatiquement vos journaux de tâche et n'inclut pas les paramètres de requête de la page.

Sans compte GitHub, copiez le chemin de la page et la description du problème dans une note locale, puis demandez à un collaborateur autorisé de soumettre l'Issue. Aucun délai de réponse n'est promis et aucun message n'est envoyé automatiquement.

## Traitement par les responsables du manuel

Après reproduction ou vérification des sources, notez pourquoi le signalement est accepté, corrigé ou encore incertain. Si vous modifiez un fait produit, mettez à jour sa preuve sans renouveler en masse les dates de vérification d'autres pages. Si vous modifiez un exercice, synchronisez documents source, paquet téléchargeable et article. Quand une conclusion antérieure devient invalide, expliquez l'impact de l'ancienne méthode et les étapes de migration, pas seulement une « amélioration du contenu ».

Lors de la mise à jour de cette page, liez les pages et comptes rendus de vérification précis et conservez ce qui n'a pas été testé. C'est le journal des changements d'un manuel communautaire, pas les notes de version officielles d'OpenAI.

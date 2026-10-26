---
title: "Thèmes pour Codex"
description: "Vérifier la source, la version, les interactions et la procédure de restauration d'un thème tiers, en distinguant les affirmations du projet des tests de ce manuel."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Le dépôt du projet, ses versions et sa documentation d'installation ont été lus. Le thème n'a pas été installé, son interface ni sa désinstallation n'ont été testées ; aucune compatibilité n'est garantie."
  evidence:
    - label: "Présentation du projet Dream Skin"
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: "Instructions d'installation et de désinstallation sur macOS"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: "Paquets publiés et historique des versions"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
locale: fr
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
source_revision: "4ecfa1c"
reviewed_at: 2026-10-26
---

Codex Dream Skin est un projet tiers de thème pour l'application de bureau. Selon sa documentation, il modifie l'apparence au moyen d'une connexion CDP locale sans changer le paquet officiel. Il s'agit de la description du projet ; ce manuel n'a pas vérifié le comportement des fichiers, du réseau ou de l'interface pour toutes les versions.

![Illustration de l'apparence du thème](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

L'illustration déjà hébergée ici ne constitue pas une preuve issue de la présente vérification. Elle ne prouve pas non plus que la zone de saisie, les boutons d'approbation et toutes les vues de tâches fonctionnent correctement.

## Version et état de vérification

| Élément | Constat de cette vérification |
|---|---|
| Source | [Dépôt du projet](https://github.com/Fei-Away/Codex-Dream-Skin) et [versions publiées](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| Version observée | [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18), vérifiée le 18 septembre 2026, commit `34335d27d54300eccb325cc652f6c93fef428b84` ; non installée |
| Client local | Info.plist lu sans modification : 26.911.61220, build 9647, identifiant com.openai.codex |
| Association thème/client testée | Aucune ; installation, interactions et désinstallation non testées |
| Compatibilité Windows | Non testée par ce manuel |
| Résultat de la restauration | Non testé ; procédure et critères de contrôle ci-dessous |

Les notes de version indiquent que certaines corrections d'interface ont été vérifiées avec macOS Codex 26.901.41123 en amont. Cette version diffère de la 26.911.61220 relevée ici ; on ne peut donc pas en déduire la compatibilité de cette combinaison. Le lien d'installation macOS de cette page pointe précisément vers v1.5.18 ; consultez le tag correspondant pour une autre version.

La lecture de la version du client renseigne sur l'environnement, pas sur la compatibilité du thème. Utilisez la [fiche de compatibilité et de restauration](/fr/guide/reference/resource-compatibility/) pour consigner vos propres essais.

## Avant l'installation

1. Choisissez une version précise dans les publications du projet. Notez le nom du paquet, son URL et son SHA-256 ; si l'éditeur fournit un fichier de sommes de contrôle, comparez-le au téléchargement. Un hachage identique prouve une correspondance de fichiers, pas la sûreté du logiciel.
2. Enregistrez les versions du client et du système, les réglages du thème, une copie des images personnalisées que vous êtes autorisé à utiliser et l'emplacement de la sauvegarde.
3. Examinez d'abord l'accueil, les tâches, la saisie, le défilement, la recherche et l'interface d'approbation sans thème, pour disposer d'une référence.
4. Lisez les instructions d'installation, de mise à jour et de désinstallation propres à la version choisie. La documentation de la branche main peut être plus récente que l'installeur.

Pour macOS, lisez le [guide d'installation du projet](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md) ; pour Windows, son [guide Windows](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md). N'attribuez pas systématiquement un avertissement « endommagé » ou un blocage système à l'absence de signature. Vérifiez la source, l'intégrité du paquet et l'erreur précise avant de décider de poursuivre.

## Contrôles après avoir changé d'image

Le projet propose une gestion des images de fond et des thèmes ; les noms de menus dépendent de la version. Utilisez des images dont vous avez les droits et vérifiez les modes clair et sombre, la taille de fenêtre et les pages de tâches réelles.

- La zone de saisie, les boutons et les informations d'approbation restent-ils lisibles, cliquables et accessibles au clavier ?
- Le fond masque-t-il les résultats de recherche, les longues sorties, les diffs de code ou les erreurs ?
- Après un changement de page ou un redémarrage, le thème affiché correspond-il au choix ?
- Après désactivation du thème, l'interface d'origine revient-elle et le problème se reproduit-il encore ?

Si des éléments sont masqués ou inutilisables, cessez d'utiliser le thème et suivez la restauration. N'empilez pas d'autres styles pour cacher le problème.

## Désinstallation et restauration

Le guide macOS du projet demande d'utiliser d'abord « Restaurer l'original et désinstaller » dans la barre de menus, puis de retirer l'application du thème. Les thèmes et images de l'utilisateur peuvent être conservés ou supprimés séparément. Sauvegardez les ressources personnalisées avant l'opération. Sous Windows, suivez les instructions de la version concernée au lieu de reprendre les chemins macOS.

Les étapes suivantes sont des contrôles recommandés par ce manuel, et non un compte rendu de test déjà effectué :

1. Enregistrez votre travail dans le client et notez le thème actuel et les fichiers à conserver.
2. Utilisez la procédure de restauration de l'outil et conservez tout message de réussite, d'échec ou d'état incertain.
3. Rouvrez Codex par son accès normal et vérifiez le fond, le texte, la saisie et la navigation entre les tâches.
4. Confirmez que l'outil ne se lance plus automatiquement et ne réinjecte pas le thème. Si une vérification technique est nécessaire, examinez processus et connexions de débogage sans tuer au hasard des processus de même nom.
5. Ne retirez l'application qu'après ces contrôles. Gardez les images personnalisées jusqu'à décider séparément qu'elles ne sont plus utiles.

Une sauvegarde, la fin du programme de désinstallation ou la fermeture de la fenêtre du thème ne prouve pas à elle seule la restauration. Si le résultat reste incertain, gardez les journaux, consultez les Issues du projet et n'affirmez pas que l'état est rétabli. Ne supprimez pas tout le répertoire de configuration de Codex pour désinstaller le thème.

## Portée de ces conclusions

CDP peut modifier le contenu de la page : « ne modifie pas le paquet officiel » ne signifie pas « sans effet sur l'utilisation ». Vérifiez à nouveau après une mise à jour de l'interface. Examinez pour chaque version les affirmations du projet sur le traitement local, l'accès réseau et la restauration. Ce manuel ne garantit ni l'absence de téléversement des images, ni une restauration en un clic pour toutes les versions, ni l'absence de perte de données lors d'une mise à jour par écrasement.

---
title: "Animaux et thèmes : registre de compatibilité et de restauration"
description: Consignez, par version, la provenance, le chargement, l'interaction, la désactivation et la restauration des ressources visuelles, sans confondre lecture de la documentation et essai d'installation.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Méthode de test à renseigner. Ce site ne dispose actuellement d'aucun essai terminé d'installation et de désinstallation d'un animal ou d'un thème dans le client.
locale: fr
source_locale: zh-CN
source_revision: 96ff34f
translation_status: draft
translated_at: 2026-09-20
---

La compatibilité concerne une combinaison précise de versions. Une structure de paquet valide, des images aux bonnes dimensions ou une interface qui s'ouvre ne prouvent pas, à eux seuls, que les états d'animation fonctionnent ni que la désactivation et la restauration réussissent.

## Éléments disponibles actuellement

Le 2026-09-18, une vérification en lecture seule du fichier `Info.plist` de l'application locale a relevé l'identifiant client `com.openai.codex`, la version `26.911.61220` et le build `9647`. Aucun animal ni thème n'a été chargé et aucun réglage du client n'a été modifié. **Combinaisons de versions pour lesquelles installation, animation, changement et restauration ont été entièrement testés : aucune à ce jour.**

Suivez les instructions d'[installation d'un animal](/fr/pets/install/), de [création d'un animal](/fr/pets/create/) et de [thèmes](/fr/theme/) en tenant compte des versions de la ressource et du client. Attribuez séparément les affirmations de projets tiers à leurs sources ; ne les présentez pas comme des essais réalisés par ce site.

## Modèle de registre à copier

```text
Type de registre : animal / thème
État : non exécuté / en cours / réussi / échoué / résultat incertain
Date du test :
Personne chargée du test :
Système et architecture :
Version et build du client :
Nom et version de la ressource ou de l'outil :
URL de la source d'origine et tag/commit correspondant :
Nom du fichier téléchargé et SHA-256 :
Auteur des ressources et licence :
État avant installation et emplacement de la sauvegarde (masquer avant publication) :
Étapes d'installation réellement suivies :
Preuves du chargement et de l'interface :
Contrôles des animations ou interactions :
Étapes et résultat de la désactivation :
Étapes et résultat de la restauration :
Contrôle après redémarrage :
Journaux d'échec et questions ouvertes :
Plateformes, états ou fonctions non testés :
```

Laissez les éléments non exécutés vides ou marquez-les « non exécuté ». N'indiquez ni durée nulle, ni réussite, ni version supposée. Dans un registre public, masquez les chemins sensibles et utilisez des captures de test sans contenu de tâches réelles.

## Contrôles pour les animaux

Validez d'abord le JSON et les chemins des ressources. Vérifiez ensuite dans le client la sélection, le chargement, la transparence de l'arrière-plan, le changement d'action et le redimensionnement de la fenêtre. Si l'atlas contient un champ de version, vérifiez qu'il correspond à la convention de lignes et colonnes. Le fait qu'une image s'ouvre ne prouve pas que le client l'a interprétée selon la bonne version du format.

Pour désactiver un animal, revenez d'abord à une ressource intégrée ou désactivez les animaux. Déplacez le paquet personnalisé vers une sauvegarde hors du répertoire analysé, puis actualisez ou redémarrez et vérifiez qu'il n'apparaît plus. Pour le restaurer, replacez le même paquet et contrôlez son chargement. Le renommer dans le répertoire analysé ne suffit pas ; ne supprimez pas tout le répertoire de configuration.

## Contrôles pour les thèmes

Comparez l'apparence et les interactions des mêmes pages avant et après activation. Couvrez au minimum l'accueil, une tâche, le champ de saisie, la recherche, les messages d'erreur et tout écran d'approbation accessible. Marquez comme non testés les écrans que vous ne pouvez pas déclencher. Ne réalisez pas d'action réellement risquée dans le seul but de tester un bouton.

Après restauration, rouvrez le client normal et vérifiez l'apparence et les commandes, ainsi que l'absence de redémarrage ou de nouvelle injection du thème. Vérifiez séparément le retour de l'interface et la fermeture de la connexion de débogage. Conservez une question ouverte si l'un des deux résultats ne peut pas être confirmé.

## Quand refaire la vérification

Reprenez les mêmes étapes après un changement du client, du système, du moteur de thèmes, du format des animaux ou du paquet de ressources. Gardez l'ancien registre et ajoutez la nouvelle combinaison de versions ; ne changez pas simplement la date de vérification. En cas d'échec, restaurez d'abord une configuration connue comme fonctionnelle, puis recherchez séparément la cause du changement.

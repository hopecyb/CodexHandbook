---
title: Outil navigateur
description: Laisser Codex ouvrir des pages, inspecter l'état de l'interface et Vérifier le comportement frontend — capacités et limites.
locale: fr
source_locale: zh-CN
source_revision: 97ba90e
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

L'**outil navigateur** permet à l'Agent d'accéder à de vraies pages dans un environnement contrôlé : lire le DOM, capturer des captures d'écran, parfois effectuer des interactions simples. Bon pour l'acceptation frontend, vérification de liens doc et comparaison de design — pas un substitut aux audits de sécurité ou à l'admin production occasionnelle.

Il diffère de la recherche : la recherche trouve de l'information ; l'outil navigateur ouvre réellement la page.

## Problèmes qu'il aide à résoudre

Questions courantes :

- À quoi ressemble cette page en ce moment ?
- Que se passe-t-il quand je clique ce bouton ?
- Cette mise en page casse-t-elle à une vraie largeur de viewport ?

La revue de code ou le texte seul ne suffisent souvent pas — il faut la page ouverte.

## Ce qui est couvert

- Ce que l'outil navigateur peut et ne peut pas faire
- Comment il diffère de la recherche web et Computer Use
- Autorisation sûre et contraintes

## Vue d'ensemble des capacités

| Bon cas | Mauvais cas |
|---|---|
| Ouvrir des pages serveur de dev local pour la mise en page | Crawler en masse des sites restreints par les CGU |
| Vérifier que les liens doc publics ne sont pas en 404 | Auto-connexion sur systèmes non autorisés |
| Comparer page statique à l'implémentation | Remplacer les frameworks de test E2E complets |
| Lire le texte visible de la page pour déboguer | Sites avec CAPTCHA lourd |

Contexte : [sélection d'outils](/fr/guide/tools/tool-selection/)

## Comparaison avec d'autres outils

| Outil | Entrée | Sortie |
|---|---|---|
| Recherche web | Requête | Résumé et liens |
| Navigateur | URL / adresse locale | Structure de page, captures, résultats d'interaction |
| Computer Use | GUI plein écran | Toute opération d'app (plus lourd, plus sensible) |

## Idées reçues courantes

### 1. Pas un remplacement des tests automatisés

Il peut inspecter des pages, capturer et cliquer certaines interactions — il ne remplace pas un système de test complet.

### 2. La page charge ≠ la page est correcte

Charger ne prouve que l'existence ; mise en page, texte, interaction et liens nécessitent encore une revue.

### 3. Quand l'utiliser ?

Cas typiques :

- Problèmes de mise en page locale
- Vérifications de liens 404
- Alignement grossier du design
- Confirmer « le code a l'air bon mais la vraie page ? »

## Critères de décision

Si votre question est :

- « Comment ça s'affiche réellement ? »
- « Qu'est-ce qui est visible sur la page ? »
- « Quel retour après cette interaction ? »

L'outil navigateur bat généralement l'analyse texte pure.

## Flux de travail recommandé

1. **Frontend local** : lancer `npm run dev`, puis fournir `http://localhost:PORT/chemin`
2. **Tâche spécifique** : « Vérifier le débordement du formulaire de connexion à 375px » — pas « regarder le site »
3. **Limites d'état** : pas de réseau externe, pas de soumission de formulaires en production
4. **Acceptation** : comparer avec [Vérifier les artefacts](/fr/guide/quality/verify-artifacts/) et captures d'écran

## Exemple de Prompt

```text
Visiter uniquement http://localhost:4321/guide/foundations/local-vs-cloud/ et vérifier la mise en page above-the-fold et l'apparence de l'image hero.
Ne pas accéder à l'internet public ni soumettre de formulaires.
Si vous trouvez des problèmes, fournir preuves par capture et suggestions de correction.
```

## Limites de sécurité

- Hypothèse par défaut : le navigateur peut atteindre **tout ce que votre machine/environnement peut** — y compris l'admin interne
- Déclarer dans la Tâche : `localhost only` ou une liste blanche de domaines
- Ne pas exécuter des Tâches de dépôts non fiables dans un profil navigateur connecté à des comptes personnels
- La politique navigateur Cloud suit [Environnements Cloud](/fr/guide/web-and-cloud/cloud-environments/) et règles réseau

Approbations : [permissions et Approbations](/fr/guide/foundations/permissions-and-approvals/)

## Erreurs courantes

- URL de production sans limites lecture seule
- Traiter les captures comme « tests passés » sans tests automatisés
- Utiliser la recherche web quand une vérification de rendu réel est nécessaire

## Liste de contrôle d'acceptation

- [ ] Périmètre d'accès fixé dans le Prompt
- [ ] Problèmes visuels clés ont captures ou texte clair
- [ ] Cohérent avec résultats unit/E2E — ou écarts connus documentés

---

**Statut :** vérifié  
**Produits concernés :** App / Codex (selon version et permission)  
**Base de vérification :** Le centre d'aide OpenAI documente actuellement le navigateur intégré dans l'App de bureau — ouvrir des pages dans Work ou Codex, changer d'onglets, télécharger des fichiers, mode annotation, Approbation par site. Cette page se concentre sur les cas d'usage, la distinction recherche/Computer Use et les limites de sécurité.  
**Dernière vérification :** 2026-07-26

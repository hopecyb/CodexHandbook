---
title: Contexte sensible
description: Secrets, confidentialité et documents qui ne doivent pas être partagés.
locale: fr
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ne fournissez pas à Codex (entraînement ou production) :

- Clés API, mots de passe, cookies de session
- Données clients non masquées, numéros d'identité, etc.
- Documents internes non publiés interdits de partage externe par contrat

Utilisez des placeholders : `YOUR_API_KEY`. En cas de fuite, faites pivoter les identifiants selon le processus de votre organisation.

---

**Statut :** review  
**Produits concernés :** App / CLI / IDE / Cloud  
**Dernière vérification :** 2026-07-25

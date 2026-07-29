---
title: Búsqueda web
description: Complementar hechos con búsqueda y citar fuentes.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

La búsqueda web sirve para complementar hechos; no sirve para que te dé directamente la conclusión final.

Adecuada para: consultar documentación pública, códigos de error, notas de versión. No adecuada para: tomar el resultado de búsqueda como conclusión legal/médica definitiva.

Exige fuentes adjuntas y ábrelas a mano para contrastar. Úsala junto con [Validar fuentes](/guide/quality/validate-sources/).

## Para qué sirve la búsqueda

La búsqueda ayuda sobre todo a localizar:

- Dónde mirar
- Qué información merece contrastarse más
- Si hay una fuente más autoritativa

Su papel es sacar primero el material; después vuelves al original a contrastar.

## Malentendidos habituales

### 1. ¿Si encuentra resultados, la respuesta es fiable?

No. Encontrar ≠ creíble; un resumen fluido ≠ exacto.

### 2. ¿En qué casos encaja la búsqueda?

Escenarios habituales:

- Consultar documentación oficial
- Consultar mensajes de error
- Consultar cambios de versión
- Consultar hechos en páginas públicas

### 3. ¿Se puede citar directamente el resumen del resultado de búsqueda?

No cites de entrada. Puedes tratarlo así:

1. Mira qué fuentes hay en el resultado
2. Abre la página original
3. Resume con tus palabras

### 4. ¿Cuándo no basta solo con buscar?

Cuando el problema es:

- Juicio legal/médico/financiero de alto riesgo
- Necesitas confirmar el comportamiento real de una página
- Necesitas contrastar archivos locales del proyecto, no material de la red pública

Entonces hace falta combinar otras herramientas o verificación humana.

## Orden de búsqueda

Puedes tratarlo en este orden:

1. Busca primero las palabras clave más cercanas al problema
2. Prioriza documentación oficial o fuentes de primera mano
3. Abre el original y confirma el detalle
4. Luego decide si la conclusión entra en el resultado

## Prompt usable directamente

Puedes añadir:

```text
Busca primero y prioriza fuentes oficiales; al dar una conclusión, adjunta enlaces clicables a las fuentes; no te quedes solo en el resumen de búsqueda.
```

La búsqueda te da pistas y fuentes; al final hay que volver al original a contrastar.

---

**Estado:** verificado  
**Productos aplicables:** App / CLI / IDE / Cloud  
**Base de verificación:** La documentación actual de modelos de la OpenAI API sigue listando `Web search` como una capacidad de herramienta disponible; esta página solo enfatiza el método «buscar para complementar hechos, priorizar fuentes originales, volver al original a contrastar la conclusión» y no depende de una interfaz de producto concreta.  
**Última verificación:** 2026-07-26

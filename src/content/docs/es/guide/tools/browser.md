---
title: Herramienta de navegador
description: Dejar que Codex abra páginas web, compruebe el estado de la UI y verifique comportamiento frontend — capacidades y límites.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 40
---

La **herramienta de navegador** permite al Agent acceder a páginas reales en un entorno controlado: leer el DOM, hacer capturas y a veces interacciones simples. Sirve para aceptación frontend, comprobar enlaces de documentación y contrastar con diseños; no sustituye una auditoría de seguridad ni debe usarse para operar a la ligera paneles de producción.

Es una herramienta distinta de la búsqueda: la búsqueda encuentra información de páginas; el navegador abre la página de verdad.

## Qué problemas resuelve

Suele usarse para:

- Cómo se ve ahora de verdad esta página
- Qué ocurre al pulsar este botón
- Si el layout se rompe a un ancho real

Para esas preguntas, leer solo el código o la descripción textual suele no bastar: hay que abrir la página.

## Contenido de esta página

- Qué puede y qué no puede hacer la herramienta de navegador
- Diferencia respecto a búsqueda web y Computer Use
- Cómo autorizar y restringir con seguridad

## Resumen de capacidades

| Adecuado | No adecuado |
|---|---|
| Abrir la página del dev server local y mirar el layout | Rastreo masivo de sitios con ToS restrictivo |
| Verificar 404 en enlaces de documentación pública | Iniciar sesión automática en sistemas no autorizados |
| Contrastar página estática e implementación | Sustituir un framework completo de tests E2E |
| Leer texto visible de la página para depurar | Sitios que exigen CAPTCHA / verificación humana compleja |

Contexto de selección: [Selección de herramientas](/guide/tools/tool-selection/)

## Comparación con otras herramientas

| Herramienta | Entrada | Salida |
|---|---|---|
| Búsqueda web | Consulta | Resumen y enlaces |
| Navegador | URL / dirección local | Estructura de página, capturas, resultado de interacción |
| Computer Use | GUI de pantalla completa | Operación de cualquier aplicación (más pesada y sensible) |

## Malentendidos habituales

### 1. La herramienta de navegador no sustituye la automatización de tests

Puede ayudarte a revisar páginas, capturas y algunas interacciones, pero no sustituye un sistema de tests completo.

### 2. Que la página se abra no significa que no haya problemas

Que se abra solo dice «la página existe»; layout, copy, interacción y enlaces hay que seguir mirándolos.

### 3. ¿Cuándo usarla?

Los escenarios más habituales:

- Ver si la página local tiene problemas de layout
- Comprobar si un enlace es 404
- Contrastar a grandes rasgos página y diseño
- Confirmar «el código parece bien, ¿y la página real también?»

## Criterio de decisión

Si tu pregunta es:

- «¿Cómo se renderiza de verdad?»
- «¿Qué se ve en la página?»
- «¿Qué feedback da la página tras esa interacción?»

la herramienta de navegador suele encajar mejor que el análisis de texto puro.

## Flujo de trabajo recomendado

1. **Frontend local**: primero `npm run dev`, luego da `http://localhost:PORT/path`
2. **Tarea clara**: «comprueba si el formulario de login desborda a 375px de ancho», no «mira la web»
3. **Límites claros**: prohibir acceso a internet externo; prohibir enviar formularios a producción
4. **Aceptación**: contrastar con [Verificar artefactos](/guide/quality/verify-artifacts/) y capturas

## Formulación usable directamente

Puedes pedir así:

```text
Accede solo a http://localhost:4321/guide/foundations/local-vs-cloud/ y revisa el layout de la primera pantalla y la sensación de la imagen de cabecera.
No accedas a internet externo; no envíes ningún formulario.
Si hay problemas, da evidencia en captura y sugerencias de cambio.
```

## Límites de seguridad

- Por defecto, asume que el navegador puede acceder a **todo lo que tu máquina o entorno pueda acceder** — incluido admin de intranet
- Declara en la tarea: `solo localhost` o lista blanca de dominios
- No ejecutes tareas de repositorios no confiables en un perfil de navegador ya logueado con tu cuenta personal
- La política de navegador en Cloud la definen [Entornos Cloud](/guide/web-and-cloud/cloud-environments/) y la política de red

Concepto de aprobación: [Permisos y aprobaciones](/guide/foundations/permissions-and-approvals/)

## Errores frecuentes

- Dar URL de producción sin limitar a solo lectura
- Tomar la captura del navegador como «tests pasados» sin ejecutar tests automatizados
- Mezclar con búsqueda web: la búsqueda no sustituye la comprobación del render real

## Checklist de aceptación

- [ ] El alcance de acceso está fijado en el prompt
- [ ] Los problemas visuales clave tienen captura o explicación textual
- [ ] Coincide con la conclusión de tests unitarios/E2E o la diferencia conocida está documentada

---

**Estado:** verificado  
**Productos aplicables:** App / Codex (según versión y permisos)  
**Base de verificación:** El OpenAI Help Center ya publica explicaciones del navegador integrado en la App de escritorio: se pueden abrir páginas en Work o Codex, cambiar pestañas, descargar archivos, usar modo de anotación y aprobar el acceso sitio a sitio. Esta página se centra en escenarios adecuados de la herramienta de navegador, la diferencia con búsqueda/Computer Use y los límites de seguridad.  
**Última verificación:** 2026-07-26

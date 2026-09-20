---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Contrastado con las páginas oficiales actuales de Pricing y Authentication. Esta página describe las formas de acceso y el orden de diagnóstico, sin fijar precios, límites ni listas de funciones que cambian con frecuencia."
  checkedAt: "2026-08-26"
title: Cuentas, planes y acceso
description: Distingue los planes de ChatGPT, el uso con API key y los permisos del workspace de la organización.
locale: es
source_locale: zh-CN
source_revision: ecfa8f9
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 10
---

Actualmente puedes usar Codex mediante un **plan de ChatGPT** o con una **API key facturada según el uso**. Sin embargo, ambos métodos no ofrecen exactamente los mismos puntos de acceso ni los mismos límites de administración.

## Elegir primero la forma de acceso

| Método | Adecuado para | Límites de acceso |
|---|---|---|
| Iniciar sesión con ChatGPT | Trabajo interactivo personal, escritorio, Cloud y workspaces de organizaciones | Sujeto a los límites del plan de ChatGPT, los roles del workspace y las políticas del administrador |
| Usar una API key | Codex local, scripts y CI | Facturado según el uso de la API; algunas funciones que dependen del workspace de ChatGPT o de Cloud no están disponibles |

La página oficial actual de Pricing incluye ChatGPT Work y Codex en planes como Free, Go, Plus, Pro, Business, Edu y Enterprise, pero los precios, límites, modelos y funciones incluidas pueden cambiar. Este manual no reproduce la tabla de precios. Consulta directamente la [página oficial de Pricing actualizada](https://learn.chatgpt.com/docs/pricing).

## Por qué puedes tener cuenta y seguir sin acceso

Iniciar sesión es solo la primera etapa. El acceso final también depende de:

1. Que el plan actual incluya el punto de acceso o la función que quieres usar.
2. Que el producto esté disponible en tu región.
3. Que la organización te haya asignado el puesto, el rol y los permisos necesarios en el workspace.
4. Que el administrador no haya restringido el método de inicio de sesión, el modelo o las funciones locales mediante configuración administrada.
5. Que no hayas alcanzado el límite de uso de la ventana actual o el semanal.

## Lista de comprobación para usuarios individuales

- Puedes iniciar sesión en la cuenta correcta de ChatGPT desde una página oficial.
- Sabes si consumes la cuota del plan o si pagas según el uso de la API.
- El cliente que quieres usar muestra la identidad correcta.
- Si aparece un aviso de límite, consultas el uso actual en vez de reinstalar repetidamente el cliente.

## Lista de comprobación para equipos y empresas

- Has elegido el workspace correcto, no el espacio personal asociado al mismo correo.
- El administrador ha configurado miembros, puestos y roles.
- SSO, MFA, retención de datos y políticas regionales cumplen los requisitos de la organización.
- La configuración administrada no impone otro método de inicio de sesión local.
- La API key pertenece a la API organization correcta, sin confundir sus políticas con las del workspace de ChatGPT.

## Un ejemplo de diagnóstico

Si la CLI acepta una API key pero el botón de Cloud no está disponible, puede que la instalación funcione bien. Cloud exige iniciar sesión con ChatGPT y está sujeto al plan de ChatGPT y a los permisos del workspace; la API key se usa principalmente en flujos locales y programáticos.

A continuación, consulta [Inicio de sesión y autenticación](/es/guide/getting-started/sign-in-and-authentication/).

---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Contrastado con la página oficial actual de Authentication para verificar el inicio de sesión local con ChatGPT o API key, el requisito de ChatGPT en Cloud, los comandos de la CLI, el uso compartido de la caché y los límites de almacenamiento de credenciales."
  checkedAt: "2026-08-26"
title: Inicio de sesión y autenticación
description: Elige el método de inicio de sesión adecuado en los clientes locales y Cloud, y comprueba de forma segura la identidad activa.
locale: es
source_locale: zh-CN
source_revision: 'ea83fa6'
translation_status: reviewed
translated_at: "2026-09-20"
sidebar:
  order: 60
reviewed_at: '2026-10-25'
---

Al utilizar modelos de OpenAI, Codex ofrece dos formas de inicio de sesión personal:

- **Iniciar sesión con ChatGPT**: consume la cuota de la suscripción y hereda los permisos y la política de datos del workspace de ChatGPT.
- **Iniciar sesión con una API key**: se factura según el uso de la API y hereda las políticas de datos y administración de la API organization.

El trabajo local en la aplicación de escritorio ChatGPT, Codex CLI y las integraciones con IDE admite ambos métodos. **Codex Cloud exige iniciar sesión con ChatGPT.**

## Iniciar sesión con ChatGPT

Los clientes locales abren el navegador para autorizar el acceso y luego devuelven las credenciales al cliente:

- Aplicación de escritorio: en la pantalla de sesión cerrada, elige continuar con el inicio de sesión.
- CLI: ejecuta `codex login`.
- IDE: en la pantalla de sesión cerrada, elige iniciar sesión con ChatGPT.

Después, comprueba qué cuenta y workspace están activos, sobre todo si tienes un espacio personal y otro de la empresa.

## Iniciar sesión con una API key

Después de crear una key en OpenAI Platform, no la escribas directamente en el historial de comandos. La CLI la recibe por la entrada estándar:

```bash
printenv OPENAI_API_KEY | codex login --with-api-key
```

En la aplicación de escritorio, entra por «usar otro método de inicio de sesión»; en el IDE, selecciona **Use API Key**. La API key sirve para trabajo local y CI de confianza, pero no da acceso a las funciones que dependen de un workspace de ChatGPT o de Cloud.

## Comprobar y cerrar la sesión en la CLI

```bash
codex login status
codex logout
```

La CLI y el IDE comparten la información de inicio de sesión en caché. Si cierras la sesión en uno, es posible que debas volver a iniciarla cuando abras el otro.

## Seguridad de las credenciales

- No incluyas `~/.codex/auth.json` en un commit ni lo pegues en una incidencia, conversación o registro.
- Prefiere el almacén de credenciales del sistema operativo; trata los tokens guardados en archivos como contraseñas.
- En CI, utiliza credenciales específicas y revocables; no reutilices una key personal de larga duración.
- Codex Cloud accede directamente a los repositorios de código, así que activa MFA en la cuenta. Si la organización usa SSO, el administrador debe exigir MFA.
- No utilices una key personal para eludir restricciones de la organización; comprueba primero el workspace y la política administrada.

## Sesión iniciada, pero la función sigue sin estar disponible

Comprueba por este orden:

1. ¿Están activos la cuenta o la API organization correctas?
2. ¿Estás en el workspace de ChatGPT adecuado?
3. ¿La función exige iniciar sesión con ChatGPT en lugar de una API key?
4. ¿El plan, el puesto, el rol o la política del administrador restringen el acceso?
5. Solo entonces revisa la caché del cliente, la red y la versión.

La CLI tiene registros específicos de inicio de sesión que pueden ayudar al soporte oficial o a resolver problemas de autenticación. Antes de compartirlos, comprueba que no contienen datos sensibles.

Consulta [Cuentas, planes y acceso](/es/guide/getting-started/account-plans-and-access/) para los límites de los planes y la [página oficial de Authentication](https://learn.chatgpt.com/docs/auth) para los detalles actuales.

---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Solución de problemas de Cloud
description: Localiza los fallos de Cloud en las capas de repositorio, setup, red, Agent y entrega.
locale: es
source_locale: zh-CN
source_revision: '019fac1'
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 80
reviewed_at: 2026-10-25
---

Reintentar una tarea Cloud consume tiempo de nuevo, pero no soluciona por sí solo los permisos, las dependencias o la configuración de red que faltan. Primero identifica en qué etapa ocurre el fallo.

## Diagnóstico en cinco capas

| Etapa | Síntomas frecuentes | Primera comprobación |
|---|---|---|
| Conexión con el repositorio | El repositorio no aparece, error 403, la rama no existe | Alcance de la autorización de GitHub, política de la organización, rama inicial |
| Contenedor/setup | `command not found`, falla la instalación de dependencias | Versiones del entorno, setup script, Secret |
| Red del Agent | El setup puede descargar, pero `curl` falla en el Agent | Agent access desactivado por defecto, allowlist, métodos HTTP |
| Ejecución del Agent | Cambios fuera de alcance, comando de pruebas inexistente | Alcance del prompt, `AGENTS.md`, registro de trabajo |
| Entrega | Diff incompleto, no se puede abrir un PR | Estado de la rama, permiso de escritura, reglas de protección |

## Conserva primero las evidencias

Anota el repositorio, el commit inicial, el nombre del entorno, la etapa del fallo, el primer error útil y el comando completo. No guardes solo la última línea «exit 1».

```text
Entorno: api-node22
Punto de partida: main@abc123
Etapa: setup
Comando: pnpm install --frozen-lockfile
Primer error: ERR_PNPM_FETCH_401 ...
Diferencia local: el equipo local usa ~/.npmrc; Cloud no tiene NPM_TOKEN configurado
```

Este registro permite orientar directamente la corrección sin obligar al siguiente intento a partir de nuevas conjeturas.

## Problemas frecuentes

### El Secret está disponible en setup, pero vacío en el Agent

Es el comportamiento previsto: el Secret se elimina antes de la etapa del Agent. Realiza en setup la instalación que necesita credenciales; no lo conviertas en una variable de entorno normal para eludir la protección.

### El setup tiene acceso a internet, pero el Agent no

También es el comportamiento predeterminado. Si la tarea necesita que el Agent acceda a la red, habilítalo en el entorno, limita dominios y métodos HTTP y revisa después los registros.

### La caché conserva dependencias antiguas

Los cambios en setup, maintenance, variables o secrets invalidan la caché automáticamente. Si una modificación del propio repositorio la vuelve incompatible, usa Reset cache en la página del entorno. En un entorno compartido, evalúa primero el efecto sobre otras personas.

### Funciona en local, pero falla en Cloud

Compara las versiones de Node/Python, el lockfile, las dependencias del sistema, la configuración local oculta, los servicios accesibles por VPN o localhost y las rutas sensibles a mayúsculas y minúsculas. Expresa esas diferencias en el setup y en las reglas del repositorio.

### No se activó la revisión del PR

Confirma que Cloud está configurado para el repositorio, que Code review está habilitado, que el comentario dice `@codex review` y que la integración con GitHub tiene los permisos necesarios. Las revisiones automáticas requieren activación aparte.

## Cuándo volver al trabajo local

Si el problema depende de un servicio del equipo o si dos intentos consecutivos se han dedicado a corregir el entorno en vez del código, haz primero una reproducción mínima en local. Después, incorpora los comandos, versiones y pruebas que funcionaron a `AGENTS.md` o al setup antes de volver a delegar la tarea en Cloud.

## Criterios de aceptación tras resolverlo

- [ ] La tarea puede repetirse en el mismo entorno desde un punto de partida limpio.
- [ ] No se ha ocultado el problema con permisos más amplios en el repositorio ni con acceso ilimitado a la red.
- [ ] Los registros no exponen Secrets.
- [ ] El diff y las pruebas resultantes siguen pasando por revisión humana.

## Fuentes oficiales

- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)
- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Codex Cloud](https://learn.chatgpt.com/docs/cloud)

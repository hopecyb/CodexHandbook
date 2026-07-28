---
title: Secrets y variables de entorno
description: Inyectar con seguridad API keys, tokens y variables de configuración no sensibles en Cloud.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Las Tareas Cloud suelen necesitar acceder a APIs privadas, registries de paquetes o bases de datos. Esas credenciales deben inyectarse con **Secrets y variables de entorno**, no escribirse en código, Prompt, issue, chat o historial de Git.

## Contenido

- Diferencia entre Secrets y variables de entorno normales
- Cómo configurarlas en la consola Cloud / ajustes del repo
- Relación con los Secrets de GitHub Actions

## Distinguir Secret y variable de entorno

Puedes distinguir así:

- **Secret**: valor que no debe verse a la ligera — API Key, contraseña de BD, clave privada
- **Variable de entorno**: configuración que ve el programa; algunas sensibles, otras no

No toda variable de entorno es un Secret, pero los Secrets deberían pasar por un mecanismo de inyección seguro, no ir hardcodeados.

## Distinción conceptual

| Tipo | Ejemplo de contenido | Requisitos de almacenamiento |
|---|---|---|
| **Secret** | API key, clave privada, contraseña de BD | Almacenamiento cifrado, enmascarado en UI, no en logs |
| **Variable** | `NODE_ENV=production`, feature flags | Puede no cifrarse; aun así evita filtrar estrategia de negocio |
| **`.env` en el repo** | Uso en desarrollo local | **No committear**; en Cloud usa Secrets de la consola |

Principio general de Contexto sensible: [Contexto sensible](/guide/context/sensitive-context/)

## Malentendidos frecuentes

### 1. «Solo pego la key un momento; no pasa nada, ¿verdad?»

El riesgo es alto. En cuanto la pegas en:

- Conversación
- Issue
- Descripción del PR
- Historial de shell
- Commit de Git

puede difundirse por logs, notificaciones, capturas, historial y otros colaboradores.

### 2. «Si la meto en `.env` y hago commit, Cloud la leerá, ¿no?»

`.env` sirve más para desarrollo local, no para entrar en el control de versiones. En Cloud, prioriza la gestión de Secrets de la plataforma.

### 3. «El nombre del Secret da igual mientras el valor sea correcto»

Muchos fallos de Tarea no están en el valor, sino en:

- Nombre mal escrito
- Alcance incorrecto
- El código lee otro nombre de variable

Unifica el naming en documentación, código y ajustes de Cloud.

## Principios de configuración

1. **Privilegio mínimo**: cada Secret solo basta para un tipo de Tarea
2. **Aislamiento por repo/entorno**: staging y production separados
3. **Rotación**: actualiza tokens periódicamente; aceptar que Tareas antiguas fallen
4. **Auditoría**: registra quién añadió/modificó qué Secrets (proceso de equipo)
5. **Nunca eco**: logs de Tarea y comentarios de PR no deben imprimir valores de Secret

## Flujo mínimo de configuración

Puedes seguir este orden:

1. Lista qué servicios externos necesita realmente la Tarea
2. Prepara solo los Secrets necesarios para esta Tarea; no des de entrada privilegios completos de producción
3. En la documentación escribe «qué nombres de Secret hacen falta», no los valores
4. Corre una Tarea de prueba y verifica la lectura
5. Luego la Tarea real

## Flujo de trabajo recomendado

```text
1. Añadir Secret en ajustes de Cloud / GitHub (nombre en SNAKE_CASE mayúsculas, p. ej. NPM_TOKEN)
2. En AGENTS.md indicar «hace falta NPM_TOKEN para instalar paquetes privados», sin el valor
3. Lanzar Tarea Cloud y confirmar que el entorno lee (si falla, revisa ortografía del nombre y alcance)
4. CI usa Secrets de GitHub Actions con naming alineado al de Cloud para documentar mejor
```

Al combinar con [Integración con GitHub](/guide/integrations/github/), prioriza Secrets nativos de la plataforma; no dejes que el Agent copie claves del body del issue.

## Cuándo tratarlo como Secret

Si no tienes claro si un valor debe ser Secret, pregunta:

- Si se filtra, ¿implica riesgo de dinero, datos, Permisos o negocio?

Si la respuesta es «sí», no debería aparecer en documentación pública, Prompt, chat ni repo.

## Acceso a internet y Secrets

Algunas Tareas necesitan salir a red para bajar paquetes o llamar APIs:

- La política de salida la marcan las normas de seguridad de la organización
- Aunque haya salida, no pegues Bearer tokens en el Prompt
- En repos no confiables, prohíbe por defecto leer Secrets de producción

## Errores frecuentes

| Error | Riesgo |
|---|---|
| Committear `.env` al repo | Filtración permanente |
| Pegar la key en issue/descripción de Tarea | Difusión por logs y notificaciones |
| Usar Secret de producción en Tareas experimentales | Operación errónea sobre datos de producción |
| Nombre de Secret distinto del código | Fallo silencioso de la Tarea |
| Por comodidad, dar un token con privilegios de admin | Superficie de descontrol demasiado grande |

## Lista de aceptación

- [ ] Sin secretos hardcodeados en el repo (puedes usar un secret scanner)
- [ ] Lista de Cloud Secrets alineada con los nombres de la documentación
- [ ] Logs de fallos de Tarea sin texto en claro de Secrets
- [ ] Proceso de salida/rotación definido

## Fuentes de referencia

- OpenAI Codex Cloud secrets
- stormzhang `16-security.md`, `10-cloud.md`
- Capítulos de seguridad y empresa de KimYx0207 (hechos sujetos a contraste oficial)

---

**Estado:** outdated  
**Productos aplicables:** Cloud  
**Nota de revisión:** Esta página concreta bastante la ubicación de configuración de Cloud Secrets, el alcance por repo y la relación con Secrets de GitHub Actions, pero falta documentación oficial vigente de gestión de Secrets lo bastante sólida para demostrarlo ítem a ítem; hasta completar esa base, conviene `outdated`.  
**Última verificación:** 2026-07-26

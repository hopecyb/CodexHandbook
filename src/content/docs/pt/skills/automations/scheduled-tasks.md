---
title: Tarefas agendadas e em segundo plano
description: Automations — rode o Codex sem supervisão sob triggers; desenhe Aprovação e condições de saída.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Automations** fazem o Codex executar Tarefas automaticamente sob **agenda, eventos de repositório ou triggers externos** — por exemplo checagem de atualização de dependências, sync de docs, scan periódico de saúde.

## Conteúdo desta página

- Quando vale automatizar e quando humanos devem permanecer no loop
- Quatro pontos de desenho: trigger, execução, notificação, falha
- Relação com Tarefas Cloud e scripts CLI locais

## Comparação com Tarefas manuais

| | Tarefa manual | Automation |
|---|---|---|
| Início | Você inicia | Agendamento/evento |
| Supervisão | Você pode interromper a qualquer momento | Precisa de notificação e logs |
| Risco | Você julga na hora | Erros podem se espalhar em lote |
| Adequado para | Exploração, refatoração | Repetição, regras claras |

## Desenho de automação segura

### 1. Condições de trigger claras

```text
Bom: toda segunda 09:00, checar links quebrados em docs/
Ruim: vigiar continuamente e alterar código automaticamente
```

### 2. Permissão mínima

- Scan só leitura é melhor que commit automático
- Se abrir PR automaticamente, use conta bot dedicada e proteção de branch

### 3. Condições de saída

- Pausar após N falhas consecutivas
- Diff acima do limiar de linhas → humano
- Abortar se tocar diretórios proibidos em `AGENTS.md`

### 4. Notificações

- Slack/e-mail/mobile: conclusão, falha, precisa de Aprovação
- Logs preservados para auditoria

### 5. Pontos de revisão humana

| Pode ser totalmente automático | Precisa de humano |
|---|---|
| Gerar PR rascunho | Merge em main |
| Listar dependências desatualizadas | Upgrade de versão major |
| Sync de docs públicas | Publicar anúncio externo |

## Padrões típicos

### Manutenção periódica

- Relatório de vulnerabilidades de dependências → abrir issue, sem alterar lockfile direto
- Aviso de diff entre arquivos de tradução e copy de origem

### Orientado a eventos

- Novo PR aberto → rodar Skill de review (comentar sugestões, sem push)
- Issue com label `bug` → gerar rascunho de passos de reprodução

### Tarefas longas

Divida em várias Automations + [transferência e retomada](/guide/agent-work/handoff-and-resume/), para não esgotar o Contexto de uma só vez.

## Relação com Cloud / CLI

- **Cloud**: adequado a automação remota com integração profunda ao GitHub
- **CLI + cron/CI**: adequado a intranet e pipelines customizados
- Seleção: [local vs nuvem](/guide/foundations/local-vs-cloud/) e [Web e Cloud](/guide/web-and-cloud/)

## Erros comuns

- Automação faz `git push` direto no branch principal
- Sem alerta de falha — o repositório apodrece em silêncio
- Tarefa exploratória no agendamento — gasta cota e é difícil aceitar

## Checklist de aceite

- [ ] Trigger, Permissão, notificação e condições de saída documentados
- [ ] Ciclo completo ensaiado em fork ou repositório de teste
- [ ] Equipe conhece a conta bot e as regras de Aprovação

## Fontes
- Documentação oficial OpenAI Codex Cloud / Automations
---

**Status:** outdated  
**Produtos aplicáveis:** Cloud / App / CLI  
**Nota de revisão:** Esta página descreve capacidades atuais de execução automática por agenda, evento e segundo plano, mas triggers e governança ainda mudam com facilidade, e a base oficial pública é incompleta.  
**Última Verificação:** 2026-07-26

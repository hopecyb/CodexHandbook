---
title: Integrações (visão geral)
description: 'Ao ligar GitHub, sistemas de tickets, chat e plataformas internas ao Codex, clarifique limites, permissões e o desenho do circuito.'
sidebar:
  order: 55
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O valor das integrações do Codex não é só «ligar mais uma ferramenta» — é colocar o Agent na cadeia de colaboração que você já usa: hospedagem de código, tickets, notificações, plataformas internas, bases de conhecimento.

Antes de agir, vale esclarecer:

- Quem pode disparar essa automação
- O que o Codex pode ler e o que pode escrever de volta
- Em caso de erro, quem sabe, quem responde e como reverter

## O que a integração realmente muda

Dá para entender «integração» assim: **fazer o Codex ajudar não só numa janela de chat, mas dentro dos sistemas que você já usa.**

Por exemplo:

- Ir ao GitHub ler PRs e comentar
- Ir ao sistema de tickets ler o contexto e gerar sugestões
- Após a tarefa, enviar o resultado para o chat

O que muda de verdade é se o Codex entra no fluxo de trabalho real — e não fica só a responder na conversa.

## Mal-entendidos comuns

### Integração não é «quanto mais, melhor»

Muitas equipes, no primeiro piloto, querem ligar GitHub, Jira, Slack, base de conhecimento e API interna de uma vez.

No primeiro piloto, costuma ser melhor: **ligar só o caminho mais curto e com valor mais fácil de ver.**

Motivos práticos:

- Quanto mais ligações, mais difícil explicar o limite de permissão
- Em falha, mais difícil saber qual elo quebrou
- A equipe perde confiança no sistema com mais facilidade

### «Pode executar automaticamente» não significa «deve executar automaticamente desde o início»

O impulso mais comum na integração é querer logo mudança de status automática, alteração de código automática, notificação automática, merge automático.

Um início mais comum:

- Primeiro ler dados
- Depois gerar sugestões
- Depois acrescentar confirmação humana
- Só então considerar escrita automática de volta

Assim é mais fácil deixar claros limites e responsabilidades.

## Três perguntas antes de integrar

### 1. É ler dados ou alterar o estado do sistema?

| Tipo | Risco | Sugestão |
|---|---|---|
| Consulta só leitura | Relativamente baixo | Comece por aqui |
| Gerar rascunhos / comentários | Médio | Acrescente revisão humana |
| Mudar status / abrir PR / enviar mensagem | Mais alto | Limitar permissão + auditoria + plano de rollback |

Muitas equipes querem «alterar automaticamente» de imediato, mas o primeiro passo muitas vezes só precisa **ler contexto e gerar sugestões**.

### 2. Uso síncrono ou automação assíncrona?

| Cenário | Mais adequado |
|---|---|
| Você pede ao Codex, na sessão, para consultar um issue | MCP / tarefa interativa |
| Após abrir PR, gerar rascunho de review automaticamente | Cloud / CI / Automation |
| Resumo fixo diário de status | Tarefa agendada / automação em background |

O mesmo sistema pode ter várias formas de ligação — não force uma única.

### 3. A integração ajuda a pessoa ou decide por ela?

Por padrão, deixe o Codex na **camada de sugestão**, não na de decisão final.

Por exemplo:

- Pode gerar automaticamente rascunhos de comentário de review de PR
- Pode organizar automaticamente resumos de issue
- Não recomenda merge automático, mudança automática de config de produção ou fecho automático de tickets de alto risco

## Tipos comuns de integração

### GitHub e hospedagem de código

A mais comum e madura.

Adequado para:

- Tarefas Cloud lerem o repositório, abrirem branch e PR
- Review não interativo no CI
- Segunda correção a partir de comentários de review

Entrada: [Integração com GitHub](/guide/integrations/github/) e [Web e Cloud](/guide/web-and-cloud/).

### Tickets e gestão de projeto

Por exemplo Linear, Jira, Trello ou sistema interno de requisitos.

Adequado para:

- Ler o contexto do issue antes de alterar código
- Gerar sugestões de triagem por rótulo ou status
- Resumir progresso da iteração

Costuma funcionar bem primeiro como **MCP só leitura + fluxo Skill**.

### Chat e notificações

Por exemplo Slack, e-mail, IM empresarial.

Adequado para:

- Notificar conclusão, falha ou espera por Aprovação
- Empurrar diários, semanais, resumos de mudança

Atenção: a ferramenta de notificação não deve ser a única fonte de auditoria — tarefas importantes ainda precisam de log e registro em ticket.

### Plataformas internas e bases de conhecimento

Por exemplo portal de desenvolvedores, Runbook, API interna, site de docs.

Adequado para:

- Trazer normas da equipe e manuais de plantão para o Contexto
- Deixar o Codex chamar capacidades internas dentro de limites fixos

Aqui o foco é **camadas de permissão e confiabilidade do conteúdo**.

## Como julgar antes de implementar

Se quiser decidir rápido se «esta integração vale a pena primeiro», veja estas três:

1. É trabalho que a equipe já repete
2. Gera valor sobretudo lendo e organizando informação
3. Mesmo com resultado imperfeito, um humano consegue cobrir com facilidade

Se as três forem verdadeiras, costuma entrar bem no primeiro lote de candidatos.

## Ordem recomendada de implementação

Na primeira integração, avance do menor para o maior risco:

1. Ligar uma fonte externa só leitura
2. Deixar o Codex gerar resumo ou sugestão, sem executar
3. Acrescentar Aprovação humana e notificação
4. Só então considerar escrita automática de volta no sistema externo

Assim você valida valor antes de ampliar permissão.

## Um esquema mínimo viável

Exemplo: «gerar automaticamente rascunho de review de PR»:

1. GitHub dispara a tarefa
2. Codex lê o diff e as regras relevantes
3. Produz rascunho de comentário ou checklist
4. Pessoa confirma antes de adotar

É mais fácil de colocar em produção do que «alterar código e fazer merge automaticamente» — e ganha confiança da equipe com mais facilidade.

## Checklist de controlo de risco

- [ ] Owner claro de cada integração
- [ ] Distinguir três níveis: só leitura, comentário, escrita de volta
- [ ] Rastrear o que uma tarefa leu e o que escreveu
- [ ] Notificação em falha — não depender de sorte humana
- [ ] Dados sensíveis passam por avaliação de segurança

Na primeira integração, deixar o Codex «ver» e «sugerir» costuma ser mais fácil de implantar do que já o deixar «alterar» e «executar».

## Navegação do capítulo

| Integração | Página |
|---|---|
| GitHub | [Integração com GitHub](/guide/integrations/github/) |
| Slack / Linear / Jira etc. | Principalmente docs oficiais e capítulos MCP/Automation; este manual completa aos poucos |

## Relação com outros capítulos

- Conectores e distribuição empacotada: ver [Visão geral de Plugins](/skills/plugins/plugins-overview/)
- Dados externos: ver [Visão geral de MCP](/skills/mcp/mcp-overview/)
- Agendamento e background: ver [Tarefas agendadas e em background](/skills/automations/scheduled-tasks/)
- Colaboração em repositório na nuvem: ver [Web e Cloud](/guide/web-and-cloud/)

## Fontes

- Documentação oficial de integrações e desenvolvedores do OpenAI Codex
- Capítulos de integração e automação Codex em KimYx0207《AI-Coding-Guide-Zh》
- stormzhang `26-git-github.md` e capítulos de automação
- [codex.bozhouai.com](https://codex.bozhouai.com/)


---

**Status:** verified  
**Produtos aplicáveis:** Integrations  
**Base da verificação:** o Help Center da OpenAI continua a enfatizar que as capacidades de integração de Codex/ChatGPT entram via plugins, apps e app templates, e que administradores controlam separadamente acesso por papel, ações de leitura/escrita, requisitos de confirmação e limites de dados. Esta página foca princípios de desenho, camadas de permissão e ordem de implementação — sem depender da UI momentânea de um sistema externo específico.  
**Última verificação:** 2026-07-26

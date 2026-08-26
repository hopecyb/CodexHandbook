---
title: Integração com GitHub
description: 'Conexão de repositório, PR, Review e CI — o lugar do Codex no fluxo de trabalho do GitHub.'
locale: pt
source_locale: zh-CN
source_revision: 5585550
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 10
---

O GitHub é a superfície de colaboração de código mais comum do Codex: tarefas Cloud, revisão de PR, Actions e push local giram em torno do mesmo conjunto de branches e permissões.

Aqui o foco é como o Codex se encaixa no fluxo «repositório, branch, PR, Review».

Mesmo sem ser desenvolvedor experiente, você pode começar vendo que tipos de coisa ele trata:

- Onde o código fica
- Como a mudança é proposta para outros verem
- Como revisão e merge acontecem

## Mapa de capacidades

| Capacidade | Entrada típica | Onde no manual |
|---|---|---|
| Conectar repositório remoto | Configuração Cloud | [Conectar GitHub](/pt/guide/web-and-cloud/connect-github/) |
| Alterar código na nuvem e abrir PR | Tarefa Cloud | [Criar Pull Request](/pt/guide/web-and-cloud/create-pull-requests/) |
| Revisar diff localmente | App desktop / IDE | [diff e comentários](/pt/guide/desktop-app/diffs-comments-and-review/) |
| Rodar Codex no CI | GitHub Actions | Roadmap `08-developer-platform/ci-cd/` |
| Comentários automáticos de review no PR | Actions + exec | [Modo não interativo](/pt/guide/cli/non-interactive-mode/) |

## Normas recomendadas para equipes

```md
## GitHub × Codex (pode ir no AGENTS.md)

- Proteger a branch padrão main; o Codex só faz push em feature branches
- PR deve linkar issue; a descrição inclui notas de teste
- Proibir o Codex de fazer merge de PR, salvo bot de release com autorização explícita
- Segredos em GitHub Secrets / environment secrets — nunca no Prompt
```

## Cloud vs Git local

| | Clone local | Cloud |
|---|---|---|
| Origem do código | Workspace na sua máquina | Clone remoto |
| Commits não enviados | Visíveis | Invisíveis — precisa fazer push antes |
| Ambiente | Sua versão de Node/sistema | Imagem de ambiente configurada |
| Adequado para | Desenvolvimento do dia a dia | Tarefas longas assíncronas, builds padronizados |

## Fluxo de Review

1. Codex ou pessoa abre o PR
2. Pessoa lê o diff (ou Skill `$pr-review`)
3. CI roda testes
4. Comentários guiam revisões — pode usar nova tarefa Codex «tratar só comentários de review»
5. Pessoa faz o merge

## Mal-entendidos comuns

### 1. Integração com GitHub não significa «deixar o Codex desenvolver sozinho por mim»

Usos mais comuns:

- Ler o contexto do repositório
- Ajudar a organizar diff ou review
- Auxiliar a abrir PR e responder comentários

### 2. Ainda não entendo bem PR e Review — e agora?

Entenda de forma grosseira:

- **PR**: você apresenta formalmente as mudanças para outros verem
- **Review**: alguém revisa essas mudanças

Isso já basta para a maior parte desta página.

### 3. No primeiro contato, o mais importante é distinguir isto

Não é o token nem o Actions — é:

> **Mudança local, repositório na nuvem e revisão de PR não são a mesma coisa.**

O ponto da integração com GitHub é conectar o Codex ao fluxo de colaboração de código que você já usa.

## Segurança

- Minimizar o escopo do GitHub Token
- Cuidado com padrões sensíveis de Actions como `pull_request_target` (superfície de injeção)
- Automação em PR de fork precisa de isolamento extra

## Erros comuns

- Tarefa Cloud assumir que mudanças locais não commitadas existem
- Deixar o Codex executar instruções não sanitizadas na descrição do PR (injeção de Prompt)
- Misturar formatação e mudança funcional no mesmo PR

## Fontes
- Documentação de integração GitHub do OpenAI Codex
---

**Status:** verified  
**Produtos aplicáveis:** Cloud / App / CLI  
**Base da verificação:** os use cases atuais de Codex em OpenAI Developers ainda incluem «Review GitHub pull requests»; o Help Center continua a enfatizar que o acesso a repositórios externos depende de permissões do app, acesso por papel e limites de ação. Esta página só resume o lugar de repositório, branch, PR, Review e CI, e as diferenças de visibilidade de código entre local e Cloud.  
**Última verificação:** 2026-07-26

---
title: Web e Cloud (visão geral)
description: Navegação de entrada para Tarefas Cloud, ambientes, Secrets e revisão de PR.
sidebar:
  order: 13
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O Cloud serve para correr Tarefas num **ambiente remoto padronizado**, ligar ao GitHub e produzir PRs. Antes de começares, vê [Local vs Cloud](/guide/foundations/local-vs-cloud/) e lê a [documentação oficial Cloud](https://developers.openai.com/codex).

A Tarefa não corre no teu computador — continua a correr no ambiente remoto.

Cenários típicos:

- A Tarefa demora muito
- Não queres ficar à espera na máquina local
- Precisas de ligar diretamente ao repositório remoto e ao fluxo de PR

O Cloud pode não ser a primeira coisa que tocas, mas quando começas com repositórios remotos, PRs e Tarefas longas assíncronas, quase sempre entra em jogo.

## Navegação do capítulo

| Fase | Página |
|---|---|
| Ligação | [Ligar o GitHub](/guide/web-and-cloud/connect-github/) |
| Ambiente | [Ambientes Cloud](/guide/web-and-cloud/cloud-environments/) |
| Credenciais | [Secrets e variáveis de ambiente](/guide/web-and-cloud/secrets-and-variables/) |
| Entrega | [Criar Pull Request](/guide/web-and-cloud/create-pull-requests/) |
| Qualidade | [Revisão de código Cloud](/guide/web-and-cloud/code-review/) |
| Colaboração | [Delegar e acompanhar](/guide/web-and-cloud/delegate-and-follow-up/) |
| Rede | [Acesso à Internet](/guide/web-and-cloud/internet-access/) |
| Diagnóstico | [Diagnóstico Cloud](/guide/web-and-cloud/troubleshooting/) |
| Integração | [Integração GitHub](/guide/integrations/github/) |

Iniciar Tarefas Cloud a partir da App de ambiente de trabalho: [Tarefas locais e Cloud](/guide/desktop-app/local-and-cloud-tasks/). Delegar a partir do IDE: [Fluxo de Tarefa Cloud no IDE](/guide/ide/cloud-task-workflow/).

## Ordem de leitura sugerida

Na primeira vez com Cloud, lê nesta ordem:

1. [Ligar o GitHub](/guide/web-and-cloud/connect-github/)
2. [Secrets e variáveis de ambiente](/guide/web-and-cloud/secrets-and-variables/)
3. Fluxos de PR, revisão de código e colaboração

Percebe bem «como liga ao repositório, como obtém Permissões e como trata chaves» antes dos detalhes de automatização — poupa esforço.

O Cloud serve para Tarefas de repositório remoto que continuam fora da máquina local, não só para «mover o fluxo local para a web».

---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud  
**Nota de revisão:** Como página de navegação Cloud ainda tem valor estrutural, mas depende de capacidades em zona de produto muito volátil (ligar GitHub, Secrets, PR, acompanhamento móvel, acesso à rede); até as páginas refletirem a documentação oficial Cloud atual, é mais adequado marcar como `outdated`.  
**Última verificação:** 2026-07-26

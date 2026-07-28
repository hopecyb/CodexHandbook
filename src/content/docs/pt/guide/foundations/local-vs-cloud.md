---
title: Local e Cloud
description: Compara cenários adequados para Tarefas locais e Tarefas Cloud.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


«Local» e «Cloud» soam técnicos; em termos simples, local é trabalhar no seu computador, Cloud é trabalhar numa máquina remota.

Se você só quer começar a usar o Codex, costuma ser mais simples começar pelo **local**.

| | Tarefa local | Tarefa Cloud |
|---|---|---|
| Onde roda | Sua máquina / ambiente local | Ambiente Cloud |
| Ideal para | Iteração rápida, arquivos locais, debug que precisa de chaves locais | Conectar repositórios remotos, Tarefas longas, ambientes padronizados |
| Atenção | Permissão local e risco de alteração errada | Configuração de ambiente, injeção de chaves, política de rede |

## Sensação de uso

Em linhas gerais:

- **Tarefa local**: como você sentado no seu computador, com o Codex ajudando a alterar o projeto atual
- **Tarefa Cloud**: como entregar a Tarefa a uma máquina de trabalho remota para ela continuar lá

A diferença não é só «lugar diferente» — inclui também:

- Que arquivos pode acessar
- Se pode usar direto o software e o ambiente que já estão na sua máquina
- Por quanto tempo a Tarefa pode rodar
- Se a equipe precisa de ambiente unificado

## Por que muitos iniciantes começam pelo local

Porque o local é mais fácil de entender e de verificar.

- Você sabe que os arquivos estão no seu computador
- É mais fácil abrir o projeto, ver o resultado e corrigir à mão
- Quando erra, o caminho para desfazer fica mais claro

Para quem está começando, fechar o ciclo da Tarefa importa mais do que ir para a nuvem de cara.

## Mal-entendidos comuns

### 1. Cloud não é necessariamente mais avançado, nem necessariamente melhor para trabalho formal

Se a Tarefa é alterar um projeto local, olhar arquivos da máquina e testar rápido algumas vezes, o local é mais direto.

### 2. Local é «menos profissional»?

Muito trabalho real de desenvolvimento já acontece no local. Usar Cloud ou não depende do tipo de Tarefa — não use «sensação de avançado» como critério.

### 3. Como escolher

Use este julgamento:

- **Alterar um projeto que já está no seu computador**: escolha local
- **Tarefa longa, quer deixar rodando, quer ambiente ligado a repositório remoto**: aí considere Cloud

## Como escolher quando estiver em dúvida

Se ainda não separar bem, use esta regra: se dá para fazer no local, não corra para a nuvem.

Só mude para Cloud quando de fato precisar de:

- Tarefa muito longa
- Ambiente unificado
- Conexão a repositório remoto ou recursos remotos
- Não ocupar a máquina local

Muitos iniciantes começam com **local + App desktop**. Detalhes de Cloud: [Visão geral de Web e Cloud](/guide/web-and-cloud/). Alternar no App: [Tarefas locais e Cloud](/guide/desktop-app/local-and-cloud-tasks/).

O local serve melhor para entender o fluxo e fazer mudanças pequenas. O Cloud serve melhor para Tarefas mais longas, mais padronizadas e com mais colaboração remota.


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** O artigo atual «Using Codex with your ChatGPT plan» no OpenAI Help Center ainda distingue “local workflows run on your device” e “cloud tasks run in OpenAI-managed environments”; «ChatGPT Work and Codex» também confirma que Work on web/mobile roda na nuvem. Esta página só resume cenários e trade-offs de Tarefas locais e Cloud, sem vincular planos ou detalhes de entrada específicos.  
**Última verificação:** 2026-07-26

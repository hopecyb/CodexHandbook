---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "A página foi comparada com a documentação oficial do App, CLI, IDE, Cloud, Authentication e Pricing disponível na data de verificação. A matriz se limita a capacidades explícitas, como local de trabalho, contexto, forma de revisão e limites de acesso; não classifica funcionalidades voláteis como fortes, médias ou fracas."
  checkedAt: "2026-08-26"
title: "Comparação de funcionalidades"
description: "Compare o App para desktop, o CLI, a IDE e o Cloud por ambiente de trabalho, local de execução e forma de revisão."
sidebar:
  order: 30
locale: pt
source_locale: zh-CN
source_revision: b3d30b0
translation_status: draft
translated_at: 2026-09-20
---

Esta tabela compara apenas as **principais formas de trabalho que se mantêm relativamente estáveis**. Ela não transforma pequenas funcionalidades que mudam rapidamente em promessas permanentes. Use primeiro o [diagrama para escolher um cliente](/pt/guide/choose-your-client/) e depois confira as diferenças aqui.

## Comparação principal

| Ponto de acesso | Onde o trabalho acontece | Contexto mais forte | Principal forma de revisão | Tarefas típicas |
|---|---|---|---|---|
| App do ChatGPT para desktop | Projetos, conversas e arquivos locais | Pastas, projetos e tarefas abertos | Resumo da tarefa, arquivos, diff e interface de aprovação | Coordenação entre projetos, tarefas longas, operações com arquivos e com o computador |
| Codex CLI | Terminal atual e repositório local | Diretório de trabalho, saída dos comandos e estado do Git | Comandos, diff e resumo dos resultados no terminal | Investigação, alterações, testes, scripts e CI |
| Integração com a IDE | Editor atual | Arquivos abertos, seleção e conversa recente | Resumo das alterações e diff ao lado do código | Explicações pontuais, alterações em etapas pequenas e revisão no editor |
| Codex Cloud | Ambiente remoto isolado | Repositório conectado e configuração do ambiente | Logs, resumo, diff e PR na nuvem | Tarefas longas em segundo plano, tentativas paralelas e colaboração remota |

## Instalação e identidade

| Item | App para desktop | CLI | IDE | Cloud |
|---|---|---|---|---|
| Ponto de acesso | Aplicativo para macOS, Windows ou Linux | Linha de comando local | Extensão compatível com VS Code; integrações próprias para Xcode e JetBrains | Web e integrações remotas compatíveis |
| Login com ChatGPT | Compatível | Compatível | Compatível | Obrigatório |
| Login local com chave de API | Compatível | Compatível | Compatível | Não compatível |
| Forma principal de cobrança | Plano do ChatGPT ou uso da API | Plano do ChatGPT ou uso da API | Plano do ChatGPT ou uso da API | Plano do ChatGPT e permissões do workspace |

O trabalho local com login por chave de API segue políticas de cobrança, administração e tratamento de dados diferentes das aplicadas ao login com ChatGPT. Uma chave de API também não dá acesso a capacidades que exigem um workspace do ChatGPT ou o Cloud. Para planos e limites específicos, consulte sempre as páginas oficiais atualizadas.

## Combinações comuns

### Ciclo de desenvolvimento individual

```text
IDE identifica um problema pontual → CLI executa um teste preciso → App para desktop revisa a tarefa longa e o diff
```

### Ciclo remoto em equipe

```text
Iniciar pelo GitHub / GitLab / Linear / Slack → Cloud executa em ambiente isolado → pessoa revisa o resumo e o diff → criar PR
```

### Ciclo de aprendizagem para iniciantes

```text
Abrir a pasta de exercícios no App para desktop → pedir uma tarefa pequena → examinar a solicitação de permissão → examinar o diff → executar a verificação
```

## A matriz não substitui a confirmação no momento do uso

Plugins, Scheduled tasks, notificações, modelos e políticas das organizações mudam rapidamente. Para responder às perguntas abaixo, consulte diretamente a interface atual do cliente e a documentação oficial:

- Esta funcionalidade está disponível para a conta atual?
- O plano, a região ou uma política do administrador restringe esta capacidade?
- Quais são os comandos, atalhos ou nomes da interface na versão atual?
- O login com chave de API permite usar determinada capacidade do ChatGPT ou do Cloud?

A regra de escolha é simples: **use a IDE para código pontual, o CLI para o ciclo completo no terminal, o App para desktop para coordenar tarefas locais e o Cloud para execução remota isolada.**

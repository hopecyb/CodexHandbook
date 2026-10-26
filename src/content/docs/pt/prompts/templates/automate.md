---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página oferece um template de tarefas de automação; links e estrutura foram revistos; o corpo não depende de fatos voláteis do produto."
  checkedAt: "2026-07-26"
title: Template de automação
description: tarefas repetidas e fluxos reutilizáveis.
locale: pt
source_locale: zh-CN
source_revision: "2aff2e7"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
---


O equívoco comum em tarefas de automação: pensar só «consegue correr sozinho?», sem perguntar antes:

- o que fazer se falhar
- quem vê o resultado
- se consegue parar em segurança quando há erro

O foco deste template: a tarefa continua controlável quando algo corre mal.

## Template

```text
Objetivo: automatizar 【tarefa repetida】 como 【script/Skill/tarefa agendada】.
Gatilho: 【manual / agendado / CI】
Entradas: 【fonte de dados, arquivos de configuração】
Restrições:
- em falha, código de saída e localização dos logs claros
- sem segredos hardcoded; usar variáveis de ambiente
- fornecer modo dry-run
Aceitação:
- com 【entrada de exemplo】 produz o resultado esperado
- a documentação explica como executar e diagnosticar
```

## Quando usar este template

- tarefas repetidas com regras claras
- Fluxos a scriptar ou agendar
- Querer primeiro dry-run, logs e códigos de saída como barreiras

## Ideias erradas habituais

### 1. Automatizar = eliminar julgamento humano

Muita automação viável só faz checagem automática, resumo automático ou rascunho automático.

### 2. Correu uma vez = pronto para automatizar

Para automação de longo prazo, ainda falta:

- logs
- códigos de saída
- dry-run
- documentação de diagnóstico

O valor deste template é permitir execução longa e segura.

## Relacionado

- [Prompts para tarefas longas](/pt/prompts/long-running-tasks/)
- [Caso: automatizar um relatório diário](/pt/cases/automate-a-daily-report/)

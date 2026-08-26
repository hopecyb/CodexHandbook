---
title: "Personalização e configuração do projeto"
description: Preferências pessoais, AGENTS.md, configuração e prioridade das regras — para que o Codex continue a trabalhar à sua maneira ao longo do tempo.
sidebar:
  order: 40
locale: pt
source_locale: zh-CN
source_revision: 3a2992b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

O Codex não depende só de «como pergunta desta vez»; também usa uma **configuração persistente** para lembrar as suas convenções e as da equipa. Este capítulo separa principalmente o que deve ficar na conversa do que deve ancorar-se no projeto.

Se já começou a repetir as mesmas coisas — como «não toque neste diretório», «execute primeiro os testes» ou «use este modelo por defeito» —, este capítulo trata desse tipo de problema.

## Conteúdo

- Quem anula quem entre preferências pessoais, instruções do projeto, regras de equipa e prompts temporários
- O que pertence a `AGENTS.md` e o que não
- Em que camada se gerem os ficheiros de configuração e a política de Aprovação/Sandbox

## Para quem

| Leitor | Comece aqui |
|---|---|
| Acaba de concluir a primeira Tarefa | [Instruções do projeto](/pt/guide/customization/project-instructions/) |
| Quer fixar normas de colaboração no repositório | [O que é AGENTS.md](/pt/guide/customization/agents-md/what-is-agents-md/) |
| Quer unificar o comportamento de CLI/App | [Fundamentos de configuração](/pt/guide/customization/configuration/config-basics/) |

## O que este capítulo trata

Depois de algum tempo a usar o Codex, muita gente tropeça no mesmo tipo de problema: há muitas regras escritas, mas não parecem aplicar-se de todo, ou sítios diferentes se contradizem.

Este capítulo fala principalmente de como estratificar bem as regras de colaboração:

- O que é um hábito pessoal
- O que é uma regra partilhada do repositório
- O que é um limite rígido a nível de organização
- O que é só um requisito temporário desta Tarefa

Quando as camadas não estão claras, é fácil acabar com «muito escrito, mas não se aplicou quando devia».

## Camadas habituais (conceito)

Compreender as camadas ajuda a evitar a confusão de «escrevi regras mas não se aplicaram». Os clientes, as capacidades geridas pela organização e as implementações por versão podem diferir, mas costuma bastar começar com estas camadas:

```text
1. Política gerida de organização/equipa (se estiver implantada)
2. AGENTS.md / instruções de projeto a nível de projeto (no repositório)
3. Configuração e preferências de utilizador (máquina local, p. ex. ~/.codex)
4. Requisitos temporários e referências @ na Tarefa atual
```

**Princípio:** Quanto mais perto de «imposto pela organização», menos deve relaxar-se à ligeira por uma só Tarefa; quanto mais perto de «a Tarefa atual», mais flexível — e mais fácil de perder ao terminar a sessão. A prioridade real segue o cliente atual e a documentação oficial.

## Mal-entendidos habituais

### 1. Se sei escrever prompts, não preciso de configuração a longo prazo?

Para Tarefas curtas talvez baste a duras penas, mas assim que a colaboração é contínua, vai querer ir ancorando os requisitos repetidos para baixo.

### 2. Pode meter-se tudo em `AGENTS.md`?

Tampouco.  
Algumas coisas encaixam melhor em:

- Preferências pessoais
- Ficheiros de configuração
- Política gerida pela organização
- O Prompt da Tarefa atual

### 3. Mais configuração nem sempre é melhor

Quando a configuração está dispersa, as regras são demasiado longas e as camadas estão desordenadas, pessoas e Ferramentas têm mais dificuldade em saber a quem seguir.

## Navegação do capítulo

| Tema | Páginas |
|---|---|
| AGENTS.md | [Resumo](/pt/guide/customization/agents-md/what-is-agents-md/) · [Âmbito e prioridade](/pt/guide/customization/agents-md/scope-and-precedence/) · [Escrever instruções eficazes](/pt/guide/customization/agents-md/writing-effective-instructions/) |
| Instruções do projeto | [Instruções do projeto](/pt/guide/customization/project-instructions/) |
| Memória | [Memórias e Contexto persistente](/pt/guide/customization/memories-and-persistent-context/) |
| Escolha de mecanismo | [Escolher o mecanismo adequado](/pt/guide/customization/choosing-the-right-mechanism/) |
| Configuração | [Fundamentos de configuração](/pt/guide/customization/configuration/config-basics/) · [Profiles](/pt/guide/customization/configuration/profiles/) |
| Preferências pessoais | [Preferências pessoais](/pt/guide/customization/personal-preferences/) |
| Regras | [Permitir e negar](/pt/guide/customization/rules/allow-and-deny-patterns/) · [Regras de comandos](/pt/guide/customization/rules/command-rules/) · [Política de equipa](/pt/guide/customization/rules/team-rules/) |
| Exemplos | [AGENTS.md num monorepo](/pt/guide/customization/examples/monorepo-agents-md/) |

A cobertura de Rules já começou; irão acrescentar-se mais páginas de detalhe de configuração à medida que crescer o módulo de personalização.

## Ordem sugerida

Na primeira vez que organizar de forma sistemática as regras de colaboração do Codex, pode seguir esta ordem:

1. Organize primeiro as regras do projeto
2. Depois complete `AGENTS.md`
3. A seguir separe as preferências pessoais
4. Por último trate os ficheiros de configuração e os controlos de regras mais finos

Assim há menos caos do que mudar de uma vez um monte de chaves de config.

As regras não precisam de ser muitas; o importante é colocá-las no sítio certo.

## Erros habituais

- Meter um longo documento de arquitetura em `AGENTS.md` e afogar as restrições-chave
- Repetir normas de equipa no chat sem as fazer commit no repositório, com experiências inconsistentes para os colaboradores
- Relaxar o Sandbox na sua máquina pessoal assumindo que os colegas num repositório partilhado têm as mesmas Permissões

## Lista de verificação

- [ ] Consegue explicar a prioridade das quatro camadas de configuração
- [ ] O repositório tem um `AGENTS.md` breve (ou instruções de projeto equivalentes)
- [ ] As operações sensíveis continuam a passar por Aprovação, em vez de confiar em que as regras de texto «assustem» o modelo

## Referências
- Documentação OpenAI Codex: [https://developers.openai.com/codex](https://developers.openai.com/codex)
---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Os materiais atuais do Help Center da OpenAI e de configuração do Codex continuam a descrever com clareza a estratificação entre configuração de utilizador `~/.codex`, capacidades geridas pela organização e instruções de colaboração a nível de projeto; esta página reescreve a «prioridade» como uma descrição de camadas habituais mais conservadora, para evitar converter detalhes de implementação concretos em regras absolutas.  
**Última verificação:** 2026-07-26

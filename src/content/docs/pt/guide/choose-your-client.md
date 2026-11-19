---
title: Escolher o cliente Codex
description: Escolha entre App para desktop, CLI, integração com IDE e Cloud conforme o local de trabalho e a forma de interação.
sidebar:
  order: 2
locale: pt
source_locale: zh-CN
source_revision: 'efaef36'
translation_status: reviewed
translated_at: 2026-08-26
reviewed_at: 2026-10-26
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Conferido com as explicações oficiais atuais do App para desktop do ChatGPT, Codex CLI, IDE e Cloud. As recomendações seguem o local de trabalho e a forma de interação, distinguindo a extensão compatível com VS Code das integrações próprias de Xcode e JetBrains.", "checkedAt": "2026-08-26"}
---

Ao escolher sua primeira forma de usar o Codex, não é preciso comparar dezenas de recursos. Comece por uma pergunta: **onde este trabalho acontece principalmente?**

![Escolha do cliente Codex: parta do local de trabalho para escolher App para desktop, CLI, integração com IDE ou Cloud](/illustrations/flow-client-selection.webp)

## Escolha em 30 segundos

| Onde o trabalho acontece | Entrada preferida | Interação mais adequada |
|---|---|---|
| Entre vários projetos e tarefas paralelas no computador | **App para desktop** | Acompanhar tarefas, revisar diffs, tratar aprovações e gerenciar trabalhos longos |
| No terminal, em scripts ou em um fluxo de linha de comando existente | **CLI** | Passar tarefas diretamente, executar comandos e combinar scripts e automação |
| No VS Code, em editores compatíveis, Xcode ou JetBrains | **Integração com IDE** | Perguntar com o contexto do editor, alterar e revisar no mesmo lugar |
| Em repositórios remotos conectados e ambientes isolados | **Cloud** | Delegar a execução à nuvem, trabalhar em paralelo e revisar depois |

Sem uma preferência clara, o **App para desktop** costuma ser o início mais intuitivo. Se você já trabalha diariamente no terminal ou no VS Code, permanecer nesse ambiente reduz a troca de ferramentas.

## O que cada entrada resolve

### App para desktop: central de trabalho local

O App para desktop é adequado quando você precisa enxergar o estado das tarefas, as alterações nos arquivos e o processo de aprovação. É especialmente útil para:

- Acompanhar várias tarefas ou projetos ao mesmo tempo
- Isolar alterações paralelas com worktrees
- Revisar um diff e continuar com perguntas ou correções
- Organizar trabalhos contínuos em projetos locais

Exemplo: uma tarefa corrige uma regressão no login; outra analisa um gargalo de desempenho somente em leitura. Ao final, você revisa cada resultado separadamente.

### CLI: Codex no fluxo do terminal

A CLI é adequada para quem já gerencia projetos pela linha de comando. Ela fica próxima dos comandos de teste, do Git e dos scripts, e facilita registrar as mesmas operações na documentação da equipe.

```bash
codex
```

Exemplo: inicie o Codex na raiz do repositório e peça que execute o teste que falha, encontre a causa raiz, faça a menor alteração e valide novamente com o mesmo comando.

### Integração com IDE: trabalhar no código atual

A integração com IDE é adequada quando a pergunta está diretamente ligada ao arquivo, à seleção ou ao diff que você está vendo. Há duas formas de integração: VS Code, Cursor, Windsurf e outros editores compatíveis usam a extensão Codex; Xcode e os IDEs JetBrains oferecem suas próprias integrações com o Codex.

Exemplo: selecione uma função difícil de entender, peça ao Codex que explique entradas, saídas e caminhos de erro e depois solicite testes para os casos-limite.

### Cloud: delegar em um ambiente remoto isolado

Cloud é adequado quando você já conectou um repositório remoto e quer que a tarefa rode independentemente do computador local. As tarefas são executadas em ambientes isolados, úteis para exploração paralela, trabalhos longos e revisão conjunta dos resultados.

Exemplo: delegue três problemas independentes do repositório a tarefas na nuvem. Espere pelas alterações e evidências de verificação e revise cada resultado.

## As quatro entradas podem trabalhar juntas

Um mesmo fluxo pode passar por várias entradas:

1. Esclareça a questão no IDE com o contexto do arquivo atual.
2. Delegue a exploração mais longa ao App para desktop ou ao Cloud.
3. Execute na CLI os comandos de verificação definidos pela equipe.
4. Volte ao App para desktop ou à interface de revisão para confirmar o diff final.

O critério é **qual entrada está mais próxima do contexto atual e facilita verificar o resultado**.

## Dois cenários comuns

### Primeiro bug em um projeto real

Prefira o App para desktop. Você pode ver a conversa, as alterações e os pedidos de permissão juntos. Depois de concluir um ciclo completo, experimente a CLI ou o IDE.

### A equipe já tem comandos e convenções de CI

Prefira a CLI e registre em `AGENTS.md` os comandos de instalação, testes e formatação. Assim, o Codex pode seguir as mesmas regras do projeto em cada tarefa.

## Verifique logo depois de escolher

Não confira apenas se o cliente abre. Em um repositório de prática:

1. Peça ao Codex que leia e explique um arquivo.
2. Solicite uma alteração pequena e reversível.
3. Revise o diff, não apenas a resposta final.
4. Execute um comando de verificação.
5. Confirme que sabe recusar ou restringir um pedido de permissão.

Veja a [comparação de recursos](/pt/guide/reference/feature-comparison/) e os limites em [permissões e sandbox](/pt/guide/permissions-and-sandbox/).

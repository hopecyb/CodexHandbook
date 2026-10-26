---
legacyVerification:
  status: verified
  products: CLI
  basis: 'Conferido com o guia de início rápido e a documentação de autenticação atuais do Codex CLI: instalador oficial para macOS/Linux, arranque com `codex`, início de sessão com ChatGPT e comando de estado da sessão. Para outros métodos de instalação, remete-se para os separadores oficiais atualizados.'
  checkedAt: '2026-08-26'
title: Instalar a CLI
description: Instalar o Codex CLI e verificar a versão, o estado de autenticação e a primeira tarefa num repositório.
locale: pt
source_locale: zh-CN
source_revision: "564bd75"
translation_status: reviewed
translated_at: '2026-09-20'
sidebar:
  order: 40
reviewed_at: '2026-10-26'
---

O Codex CLI permite explorar, alterar, testar e rever sem sair do terminal. A página oficial de instalação apresenta opções para macOS/Linux, Windows, npm e Homebrew. Escolha a que corresponde ao seu sistema e à forma como gere software.

## Instalador autónomo oficial para macOS e Linux

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

Para atualizar a CLI, volte a executar o mesmo comando oficial. Se usar Windows, npm ou Homebrew, escolha o separador correspondente na [página oficial do Codex CLI](https://learn.chatgpt.com/docs/codex/cli). Não aplique indiscriminadamente o comando para macOS/Linux a todos os sistemas.

## Verificações após a instalação

Abra uma nova janela do terminal e execute os comandos num repositório de teste:

```bash
codex --version
codex login status
```

Se ainda não iniciou sessão:

```bash
codex login
```

Depois de autorizar no navegador, inicie uma sessão interativa na pasta do repositório:

```bash
codex
```

A primeira tarefa pode limitar-se à leitura:

```text
Não altere ficheiros ainda. Explique como instalar as dependências, executar os testes e compilar este projeto. Indique os caminhos dos ficheiros que consultou.
```

## Resolver problemas por ordem

1. Se `codex --version` não encontrar o comando, reabra o terminal e verifique o `PATH` da shell atual.
2. Se o comando existir mas não conseguir usar o Codex, execute `codex login status` para distinguir um problema de instalação de um de autenticação.
3. Se a conta ativa não for a correta, execute `codex logout` e inicie sessão novamente.
4. Se o ambiente da empresa recusar o acesso, verifique o workspace, o método de autenticação e a configuração administrada. Não contorne a política usando credenciais pessoais.

Não cole uma API key no histórico da shell, em pedidos de suporte ou em conversas. Se precisar de iniciar sessão com uma API key, siga o método de entrada padrão descrito em [Início de sessão e autenticação](/pt/guide/getting-started/sign-in-and-authentication/).

Continue em [Modo interativo da CLI](/pt/guide/cli/interactive-mode/). Para outros problemas, consulte [Resolver problemas da CLI](/pt/guide/cli/troubleshooting/).

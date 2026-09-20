---
title: Definições da extensão IDE
description: Distingue a configuração partilhada do Agent das definições de comportamento dos editores da família VS Code.
locale: pt
source_locale: zh-CN
source_revision: 6f28910
translation_status: draft
translated_at: 2026-09-20
sidebar:
  order: 80
---

No IDE existem duas camadas de definições:

| Camada | Localização | O que controla |
|---|---|---|
| Definições do Codex Agent | `config.toml` | Modelo, intensidade de raciocínio, permissões, sandbox, MCP e personalização; partilhadas com a CLI |
| Definições do editor | Sistema de definições do VS Code, com chaves `chatgpt.*` | Barra lateral, fila de mensagens, tecla de envio, apresentação do review, idioma e fontes |

As regras do repositório continuam a pertencer ao `AGENTS.md`, não às definições pessoais do editor.

## Abrir as definições

Seleciona a roda dentada na barra lateral do Codex e depois **Codex Settings**. Podes alterar opções comuns do Agent no painel ou escolher **Open config.toml** para editar a camada de configuração atualmente ativa.

Para alterar o comportamento do editor, procura nas Settings por `@ext:openai.chatgpt`, `Codex` ou pelo nome de uma chave específica.

## Definições que vale a pena compreender primeiro

| Chave | Valor predefinido | Quando alterar |
|---|---:|---|
| `chatgpt.openOnStartup` | `false` | Queres que a extensão foque a barra lateral ao arrancar |
| `chatgpt.followUpQueueMode` | `queue` | Muda para `steer` se quiseres que uma mensagem nova oriente a execução em curso |
| `chatgpt.composerEnterBehavior` | `enter` | Envias prompts com várias linhas por engano com frequência |
| `chatgpt.reviewDelivery` | `inline` | Usa `detached` para mostrar `/review` numa conversa separada |
| `chatgpt.localeOverride` | Automático | Precisas de fixar o idioma da interface |
| `chatgpt.runCodexInWindowsSubsystemForLinux` | `false` | O repositório e a cadeia de ferramentas estão no WSL2 |

`chatgpt.cliExecutable` destina-se apenas ao desenvolvimento da Codex CLI. Utilizadores comuns não devem substituir manualmente o executável incluído na extensão, pois algumas funcionalidades podem deixar de funcionar.

## Como entender a prioridade da configuração

- As políticas da organização definem limites que não podem ser ultrapassados.
- `config.toml` determina o comportamento predefinido do Agent.
- `AGENTS.md` fornece regras do repositório e dos diretórios.
- As definições do editor só alteram a experiência no IDE.
- Um prompt pontual acrescenta objetivos e limites à tarefa atual.

Se uma definição parecer não produzir efeito, confirma primeiro qual a camada que alteraste e depois verifica se uma política superior a limita. A explicação completa está em [Âmbito e precedência](/pt/guide/customization/agents-md/scope-and-precedence/).

## Verificar após uma alteração

Altera apenas uma definição de cada vez. Por exemplo, depois de definir `chatgpt.reviewDelivery` como `detached`, executa `/review` num repositório Git e confirma se abre uma conversa de revisão separada. Regista o valor anterior; se o resultado não corresponder ao esperado, repõe-no e reinicia o editor.

## Fontes oficiais

- [Referência das definições do Codex IDE](https://learn.chatgpt.com/docs/ide/settings)
- [Fundamentos da configuração](https://learn.chatgpt.com/docs/config)

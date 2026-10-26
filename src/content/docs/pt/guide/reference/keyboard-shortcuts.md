---
legacyVerification:
  status: verified
  products: App, CLI, IDE
  checkedAt: '2026-08-26'
title: Atalhos de teclado
description: Lista apenas os atalhos do App e da IDE que podem ser conferidos na documentação oficial atual.
sidebar:
  order: 90
locale: pt
source_locale: zh-CN
source_revision: "4f812d9"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: '2026-10-26'
---

Os atalhos variam conforme a plataforma, o cliente e as configurações personalizadas. Esta página reúne apenas as combinações descritas explicitamente na documentação oficial atual; para a lista completa, consulte **Keyboard Shortcuts** no aplicativo.

## Aplicativo para desktop

| Ação | macOS | Windows |
|---|---|---|
| Abrir Settings | `Cmd + ,` | `Ctrl + ,` |
| Abrir ou fechar Activity | `Cmd + Option + U` | `Ctrl + Alt + U` |
| Abrir o terminal integrado | `Ctrl` + tecla de acento grave | `Ctrl` + tecla de acento grave |
| Abrir a paleta de comandos do aplicativo | `Cmd + K` | Consulte Keyboard Shortcuts |
| Limpar a exibição do terminal | `Ctrl + L` | `Ctrl + L` |

`Cmd + K` abre a paleta de comandos do aplicativo; não limpa o terminal.

A seção Keyboard Shortcuts em Settings permite procurar pelo nome do comando, descobrir comandos pela combinação de teclas, alterar as associações e restaurar os padrões. Depois de personalizar um atalho, a configuração local prevalece sobre as listas de referência disponíveis na internet.

## IDE

Nos editores da família VS Code, a configuração `chatgpt.composerEnterBehavior` determina como Enter e `Cmd/Ctrl + Enter` enviam prompts com várias linhas. Não presuma que todas as máquinas usam a mesma combinação para enviar.

Enquanto o Codex está executando uma tarefa, `chatgpt.followUpQueueMode` determina se uma nova mensagem entra na fila ou orienta imediatamente a execução. Para inverter o comportamento padrão em um único envio, pressione `Cmd/Ctrl + Shift + Enter`.

Se não encontrar a barra lateral do Codex, execute este comando na paleta de comandos do editor:

```text
Codex: Open Codex Sidebar
```

## CLI

Consulte `/help` e as instruções exibidas na interface textual da versão atual do CLI. Esta página não presume teclas de aprovação como `y` ou `n`, pois o terminal, o modo e a versão podem alterar a interação.

O sinal comum de terminal `Ctrl + C` pode interromper um comando ou uma sessão em execução. Confira o estado atual antes de usá-lo; não o trate como uma tecla de “voltar” sem efeitos colaterais.

## Ordem de aprendizagem

Comece por aprender a abrir Settings, consultar Activity, abrir o terminal e enviar prompts com várias linhas. Para outras ações frequentes, pesquise os atalhos no aplicativo. A documentação da equipe deve mencionar os nomes das ações, sem exigir que todas as pessoas usem as mesmas teclas personalizadas.

## Fontes oficiais

- [Configurações do aplicativo para desktop](https://learn.chatgpt.com/docs/app/settings)
- [Notificações e Activity](https://learn.chatgpt.com/docs/notifications)
- [Terminal integrado](https://learn.chatgpt.com/docs/integrated-terminal)
- [Configurações da IDE](https://learn.chatgpt.com/docs/ide/settings)

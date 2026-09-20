---
legacyVerification:
  status: "verified"
  products: "IDE"
  checkedAt: "2026-08-26"
title: Instalar e ativar a integração no IDE
description: Abrir o Codex corretamente em editores da família VS Code, no Xcode e nos IDE da JetBrains.
locale: pt
source_locale: zh-CN
source_revision: 85e1691
translation_status: draft
translated_at: "2026-09-20"
sidebar:
  order: 20
---

Há dois tipos de acesso ao Codex a partir de um IDE; os métodos de instalação não são intercambiáveis.

| Editor | Forma de acesso atual | Como abrir |
|---|---|---|
| Visual Studio Code, Cursor, Windsurf, VS Code Insiders | Extensão Codex | Selecionar o ícone do Codex ou executar `Codex: Open Codex Sidebar` |
| Xcode | Integração com o coding assistant do Xcode | Criar uma conversa e selecionar o Codex agent |
| IDE da JetBrains | Integração com o JetBrains AI Chat | Abrir o AI Chat e selecionar o Codex |

Consulte [Editores suportados](/pt/guide/ide/supported-editors/) para conhecer todo o âmbito de suporte e os pontos de acesso oficiais.

## Instalação e verificação em editores da família VS Code

1. Instale a extensão Codex a partir da ligação oficial para o Marketplace.
2. Abra um projeto de teste, não uma janela vazia.
3. Selecione o ícone do Codex. Se não aparecer, execute `Codex: Open Codex Sidebar` na Command Palette.
4. Autentique-se com uma conta ChatGPT ou uma API key.
5. Crie uma conversa, refira o ficheiro aberto e faça uma pergunta que só exija leitura.

Prompt mínimo para verificar a integração:

```text
Leia apenas o ficheiro que tenho aberto, sem modificar o código.
Explique em três pontos a sua responsabilidade, as entradas e as saídas; em cada ponto, cite o nome de um símbolo concreto.
```

Se a resposta corresponder ao ficheiro e aos símbolos abertos, o contexto do editor foi transmitido corretamente. Antes de pedir alterações, crie um ponto de controlo no Git.

## Problemas frequentes

- **A barra lateral não aparece**: execute `Codex: Open Codex Sidebar` na Command Palette.
- **O contexto está errado**: confirme que a janela do projeto, o ficheiro aberto e a seleção pertencem ao repositório esperado.
- **O início de sessão repete-se**: a CLI e o IDE partilham a autenticação em cache; verifique a conta ativa e volte a iniciar sessão.
- **A cadeia de ferramentas Windows está no WSL**: ative `chatgpt.runCodexInWindowsSubsystemForLinux` se necessário. Alterar esta definição reinicia o VS Code.
- **Um editor de terceiros comporta-se de outra forma**: confirme primeiro se a sua versão é compatível com a extensão VS Code. Não copie para esse editor as instruções de acesso do Xcode ou da JetBrains.

Para um percurso mais detalhado de introdução, consulte [Instalar a integração no IDE](/pt/guide/getting-started/install-ide-extension/).

## Fontes oficiais

- [Codex IDE](https://learn.chatgpt.com/docs/codex/ide)
- [Definições do IDE](https://learn.chatgpt.com/docs/ide/settings)

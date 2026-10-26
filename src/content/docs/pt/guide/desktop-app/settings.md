---
title: Definições
description: Configura o comportamento diário da aplicação de desktop, os atalhos, as notificações e o aspeto visual.
locale: pt
source_locale: zh-CN
source_revision: "7a6d2fe"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 90
legacyVerification:
  status: verified
  products: App
  checkedAt: '2026-08-26'
reviewed_at: '2026-10-26'
---

A página de definições personaliza o comportamento da aplicação; não contém toda a configuração de permissões do Codex. Mantém primeiro os valores predefinidos e só os alteres depois de compreenderes o seu alcance.

No macOS, prime `Cmd + ,`; no Windows, prime `Ctrl + ,`. Também podes abrir Settings pelo menu da aplicação.

## Quatro secções a consultar primeiro

### General

- Se é necessário premir `Cmd + Enter` para enviar um prompt com várias linhas.
- Se **Prevent sleep while running** permite que uma tarefa local longa continue enquanto estás afastado do computador.
- Follow-up behavior determina se uma mensagem nova durante o trabalho orienta imediatamente a execução atual ou fica em espera para a interação seguinte.

A última opção muda o efeito de uma frase adicional tua. Para uma correção urgente, orienta a execução em curso; para um pedido novo e sem relação, inicia outra conversa.

### Keyboard shortcuts

Podes pesquisar comandos, alterar atalhos ou repor os valores predefinidos. Se um atalho encontrado na Internet for diferente do teu, segue a combinação apresentada aqui.

### Notifications

Define quando aparecem os avisos de conclusão de uma interação e controla as notificações de pedidos de permissão e perguntas. Consulta [Notificações e vista de atividade](/pt/guide/desktop-app/notifications/) para recomendações completas.

### Appearance

Podes escolher o modo claro, escuro ou conforme o sistema e ajustar a cor de destaque, o fundo, a cor do texto, a fonte da interface, a fonte do código e o tamanho da letra. Ao rever código extenso, dá prioridade ao contraste e à legibilidade, não apenas ao aspeto do tema.

## O que estas definições não resolvem

- As regras do repositório ficam em `AGENTS.md`.
- A configuração persistente da CLI e do Agent fica sobretudo em `config.toml`.
- A disponibilidade de ficheiros, rede e comandos depende em conjunto da sandbox, das aprovações e das políticas da organização.
- As políticas geridas pela organização podem limitar as funcionalidades que cada pessoa pode escolher.

Por isso, uma opção visível nas definições não garante que a tarefa atual tenha essa permissão. Se uma operação for recusada, lê [permissões e sandbox](/pt/guide/permissions-and-sandbox/) antes de ampliar o acesso.

## Verificar uma alteração

Altera apenas uma categoria de definições de cada vez e verifica o efeito numa conversa de baixo risco. Regista o valor anterior e confirma o efeito antes de continuar. Se o comportamento não corresponder ao esperado, repõe primeiro o valor predefinido e depois verifica a versão da aplicação, as permissões do sistema operativo e a política da organização.

## Fontes oficiais

- [Definições da aplicação de desktop do ChatGPT](https://learn.chatgpt.com/docs/app/settings)
- [Fundamentos da configuração do Codex](https://learn.chatgpt.com/docs/config)
- [permissões](https://learn.chatgpt.com/docs/permissions)

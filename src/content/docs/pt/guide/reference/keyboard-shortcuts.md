---
title: Atalhos de teclado
description: "Índice de aprendizagem de atalhos habituais na App, TUI do CLI e extensão IDE — conforme a versão atual."
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Os atalhos variam muito segundo **cliente e versão**. Esta página classifica-os por **intenção de operação**, para julgar se há uma forma mais rápida; a tecla concreta, na ajuda ou definições do produto.

Não precisas de memorizá-los todos de uma vez. Usar com fluidez os poucos que mais interrompem o ritmo já ajuda muito.

:::caution
A tabela seguinte é **esquemática**, não uma tabela completa de bindings. Após atualizar, as teclas podem mudar.
:::

## Índice de intenções gerais

| Intenção | App de ambiente de trabalho (esquema) | TUI do CLI (esquema) | Extensão IDE (esquema) |
|---|---|---|---|
| Nova Tarefa/sessão | `Cmd/Ctrl+N` ou barra lateral | Sair e voltar a entrar / comando de nova Thread | Paleta de comandos «Codex» |
| Enviar mensagem | `Enter` / `Cmd+Enter` | Conforme o produto | Enviar no painel |
| Nova linha sem enviar | `Shift+Enter` | Conforme a TUI | Conforme o painel |
| Abrir paleta de comandos | Tipo `Cmd/Ctrl+K` | Slash commands `/` | `Cmd/Ctrl+Shift+P` |
| Procurar histórico | Pesquisa na barra lateral | Pesquisa na sessão (se existir) | Histórico do chat |
| Aprovar chamada a Ferramenta | Botão do painel | `y` / setas (conforme a TUI) | Notificação ou botão em linha |
| Recusar | Botão do painel | `n` | Recusa em linha |

**Prevalece a UI da versão que tiveres instalada.**

## Que ações priorizar

O valor dos atalhos está sobretudo em reduzir estes bloqueios:

- Querer enviar e ter de procurar o botão
- Querer nova linha e enviar por engano
- Querer Aprovar e fazê-lo aos tropeções
- Querer abrir uma Tarefa nova e não saber a entrada

Mais do que memorizar o conjunto completo, convém familiarizar-te primeiro com estas 4 classes:

- Enviar / nova linha
- Nova Tarefa
- Paleta de comandos
- Aprovar / recusar

## Slash commands vs teclado

- **Slash commands**: `/review`, `/help`, etc. — ver [Slash commands](/guide/reference/slash-commands/)
- **Atalhos**: disparam uma ação de UI sem escrever texto

Podem combinar-se: primeiro `Cmd+K` para focar a entrada, depois `/review`.

## Utilizadores de terminal CLI

- Aprende **Ctrl+C** para interromper saída descontrolada (cuidado com interromper estado sem guardar)
- Multiplexor de terminal (tmux) em ecrã partido: Codex de um lado, `git diff` do outro
- Empacota `codex exec` habituais como alias de shell — ver [Comandos e atalhos](/guide/cli/commands-and-shortcuts/)

## Mal-entendidos frequentes

### 1. Não precisas de dominar os atalhos para começar a usar

Usar com fluidez as poucas classes de ação que mais se disparam já baixa muito o custo.

### 2. Outro usá-los com à-vontade não significa que tu sejas desajeitado agora

Os atalhos são memória muscular que se forma com a familiaridade, não um limiar de entrada.

### 3. Não precisas de forçar as mesmas teclas em todos os clientes

Mais importante é saber:

- Se essa ação tem atalho
- Onde ver e mudar bindings
- Que ações merecem priorizar

## Ao começar, familiariza-te primeiro com estas

Ao começar:

1. Como enviar
2. Como fazer nova linha sem enviar
3. Como abrir a paleta de comandos
4. Como Aprovar ou recusar
5. Como abrir uma Tarefa nova

Com essas 5 fluidas, o resto dos atalhos pode ir-se completando ao usar.

## Utilizadores de IDE

- Liga «explicar o código selecionado com Codex» a uma tecla cómoda
- Combina com o Diff nativo do editor e «ir à definição» para menos copiar e colar

[Definições do IDE](/guide/ide/settings/) · [Código selecionado e ficheiros abertos](/guide/ide/selected-code-and-open-files/)

## Acessibilidade e personalização

A maioria dos clientes permite mudar bindings nas definições. A equipa pode documentar **bindings recomendados**, sem exigir que todos coincidam.

Os atalhos não são matéria de exame. Usar com fluidez os poucos que mais te interrompem costuma bastar.

## Fontes de referência

- Páginas oficiais de Settings / Keyboard shortcuts de cada produto
- stormzhang `35-cheatsheet.md`
- KimYx0207 CX-03

---

**Estado:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Embora declare várias vezes «esquema», o corpo continua a incluir pressupostos de atalhos atuais, forma de envio, paleta de comandos e teclas de Aprovação; dependem muito de versão e plataforma, e falta documentação oficial unificada de atalhos suficientemente sólida.  
**Última verificação:** 2026-07-26

---
title: Rodar a primeira Tarefa
description: Complete uma mudança pequena com um Prompt claro.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


O exemplo abaixo assume o **App desktop** por padrão; CLI/IDE podem usar o mesmo Prompt.

Muita gente, na primeira vez com o Codex, quer pedir de cara «faça um site completo» ou «refatore o projeto inteiro». Assim é fácil perder o controle de uma vez.

Uma primeira Tarefa pequena é mais estável. Fechar o fluxo completo importa mais do que começar grande.

## Por que a primeira Tarefa deve ser tão pequena

A primeira Tarefa idealmente atende a estas três condições:

- Alcance de mudança pequeno
- Resultado fácil de verificar de relance
- Fácil de desfazer se der errado

Por isso usamos aqui um exemplo de prática bem pequeno.

## Exemplo de Tarefa

No projeto de prática, diga ao Codex:

```text
Objetivo: no final de hello.md, acrescentar uma seção «Prática de hoje» com uma lista de três pontos.
Restrições: alterar só hello.md; não apagar conteúdo existente; não fazer pedidos de rede.
Aceite: no final do arquivo aparecem esse título e exatamente três itens de lista.
Se faltar informação, pergunte antes — não adivinhe.
```

## Papel de cada parte do Prompt

Este Prompt separa com clareza várias coisas importantes:

- **Objetivo**: o que fazer
- **Restrições**: o que não pode alterar à toa
- **Aceite**: o que conta como «pronto»
- **Se faltar informação, pergunte**: evita que ele adivinhe por conta própria

Não é um template fixo — só deixa claras as partes mais fáceis de ficar vagas.

## Mal-entendidos comuns

### 1. Quanto maior a primeira Tarefa, mais se aprende de verdade

Na primeira vez, o mais importante é percorrer o ciclo completo — não fazer a coisa grande de uma vez.

### 2. Com o Prompt escrito, o resto fica com ele

Na primeira Tarefa, o foco é vigiar três coisas:

- O alcance ultrapassou?
- Ele está agindo no arquivo que você disse?
- O resultado final atende ao aceite?

### 3. Se a primeira vez der errado, é porque eu não sei usar

A primeira Tarefa já inclui:

- Descobrir o que está errado
- Conseguir apontar o problema
- Saber como fazê-lo voltar atrás

## Atenção na execução

1. Peça um plano curto (ou peça o plano de forma ativa)
2. Ao aprovar a escrita de arquivo, confirme que o caminho está certo
3. Ao terminar, vá a [Revisar o resultado](/guide/getting-started/review-the-result/)

## Ordem de execução

Dá para seguir estes 5 passos:

1. Escolher um projeto de prática seguro
2. Dar uma Tarefa pequena que altera só um arquivo
3. Antes de aprovar, ver com clareza o que ele vai mexer
4. Depois, verificar alcance e resultado
5. Se não gostar, desfazer ou continuar com correção precisa

Depois destes 5 passos, o ritmo de colaboração fica mais familiar.

## O que verificar depois de concluir

Foque nestas três coisas:

1. Ele alterou só `hello.md`?
2. No final do arquivo realmente apareceu aquela seção?
3. A quantidade de itens da lista é exatamente três?

Se as três estiverem certas, esta Tarefa pequena basicamente fechou bem.

## Se ele errar

Errar na primeira vez é normal. Você pode continuar assim:

```text
Você alterou demais. Desfaça as mudanças nos outros arquivos e mantenha só a alteração em hello.md.
```

Ou:

```text
Não continue alterando. Diga-me o que você alterou agora há pouco.
```

Princípios de Prompt: [Fundamentos de Prompt](/prompts/basics/).


---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE  
**Base de verificação:** Cruzado com os capítulos já verificados deste handbook sobre fundamentos de Prompt, revisão de resultado, desfazer/recuperar e projeto de prática; o conteúdo se limita ao método estável de «na primeira vez, só uma Tarefa de alcance pequeno, verificável e reversível».  
**Última verificação:** 2026-07-26

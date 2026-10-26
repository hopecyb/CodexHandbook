---
title: contexto de arquivos e pastas
description: Indicar arquivos relevantes e evitar ruído irrelevante.
locale: pt
source_locale: zh-CN
source_revision: "e9148a3"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 20
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Esta página só explica como delimitar o alcance de arquivos e pastas; formulações de exemplo e conceitos foram revistos, e o corpo não depende de fatos voláteis como versão do produto, preço ou interface.", "checkedAt": "2026-07-26"}
---

Não diga só «ajude a alterar um pouco»: diga também ao Codex que arquivos deve ver e quais não.

Pode já saber que o problema está nalgum diretório; mas se o alcance não estiver claro, o Codex pode puxar também arquivos irrelevantes.

## Por que o alcance importa

Quando o alcance é demasiado amplo, estes problemas aparecem juntos:

- Lê muitos arquivos irrelevantes
- O Contexto fica ocupado por informação inútil
- Trata outro arquivo semelhante como alvo
- O alcance das mudanças ultrapassa o esperado

Por isso o contexto de arquivos e pastas serve para desenhar fronteiras.

## Por que delimitar o alcance dos arquivos

Pense nisto como levar alguém ao escritório a procurar documentos:

- Se disser só «vá procurar», pode revolver meio piso
- Se disser «olhe só a pasta azul do terceiro armário», a eficiência sobe muito

Com o Codex é igual. Quanto mais claro o alcance, menos precisa de completar por adivinhação.

## Um exemplo simples

Indique caminhos relevantes:

```text
Leia apenas src/components/Button.tsx e o respetivo arquivo de teste; não percorra o repositório inteiro.
```

Esta frase deixa claro ao mesmo tempo:

- Onde olhar
- Onde não olhar
- Não alargar o alcance por conta própria

## Mal-entendidos frequentes

### 1. Quanto mais arquivos relevantes, melhor?

Demasiado poucos fazem-no adivinhar; demasiados diluem o foco.
O mais adequado: **dar só o que a tarefa atual realmente precisa.**

### 2. Não sei onde estão os arquivos relevantes — o que fazer?

Pode pedir-lhe primeiro para reduzir o alcance, mas com o objetivo claro, por exemplo:

```text
Primeiro ajude a encontrar os arquivos relacionados com o estilo do botão de login; ainda não altere nada.
```

Localizar primeiro e executar depois costuma ser mais estável do que «percorrer o repositório inteiro e alterar pelo caminho».

### 3. Sem indicar alcance não importa — ele encontra sozinho?

Pode encontrar, mas o custo costuma ser:

- Lê mais
- Fica mais lento
- É mais fácil arrastar arquivos semelhantes
- É mais provável alterar sítios que não esperava

### 4. É preciso indicar pasta e arquivo?

Não necessariamente, mas quanto mais concreto, melhor.

- Já sabe o arquivo: aponte o arquivo
- Só sabe a zona aproximada: aponte primeiro o diretório
- Totalmente incerto: peça primeiro só localização e explicação

## Três coisas que convém acrescentar no prompt

Se recear que altere demais, acrescente no prompt:

1. Só olhar que arquivos ou diretórios
2. Não percorrer onde
3. Antes de modificar, dizer que arquivos serão afetados

No IDE, confirme se a raiz da área de trabalho atual está correta.

## Formulações prontas a usar

Pode usar esta forma:

```text
Olhe primeiro só `src/pages/home/` e `src/components/Hero.tsx`.
Não percorra `backend/` nem `scripts/`.
Se precisar de outros arquivos, diga-me primeiro porquê e só depois continue.
```

Indicar o alcance de arquivos ao Codex é reduzir adivinhação, ruído e alterações erradas.

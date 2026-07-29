---
title: Contexto de ficheiros e pastas
description: Indicar ficheiros relevantes e evitar ruído irrelevante.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 20
---

Não diga só «ajude a alterar um pouco»: diga também ao Codex que ficheiros deve ver e quais não.

Pode já saber que o problema está nalgum diretório; mas se o alcance não estiver claro, o Codex pode puxar também ficheiros irrelevantes.

## Por que o alcance importa

Quando o alcance é demasiado amplo, estes problemas aparecem juntos:

- Lê muitos ficheiros irrelevantes
- O Contexto fica ocupado por informação inútil
- Trata outro ficheiro semelhante como alvo
- O alcance das mudanças ultrapassa o esperado

Por isso o Contexto de ficheiros e pastas serve para desenhar fronteiras.

## Por que delimitar o alcance dos ficheiros

Pense nisto como levar alguém ao escritório a procurar documentos:

- Se disser só «vá procurar», pode revolver meio piso
- Se disser «olhe só a pasta azul do terceiro armário», a eficiência sobe muito

Com o Codex é igual. Quanto mais claro o alcance, menos precisa de completar por adivinhação.

## Um exemplo simples

Indique caminhos relevantes:

```text
Leia apenas src/components/Button.tsx e o respetivo ficheiro de teste; não percorra o repositório inteiro.
```

Esta frase deixa claro ao mesmo tempo:

- Onde olhar
- Onde não olhar
- Não alargar o alcance por conta própria

## Mal-entendidos frequentes

### 1. Quanto mais ficheiros relevantes, melhor?

Demasiado poucos fazem-no adivinhar; demasiados diluem o foco.  
O mais adequado: **dar só o que a Tarefa atual realmente precisa.**

### 2. Não sei onde estão os ficheiros relevantes — o que fazer?

Pode pedir-lhe primeiro para reduzir o alcance, mas com o objetivo claro, por exemplo:

```text
Primeiro ajude a encontrar os ficheiros relacionados com o estilo do botão de login; ainda não altere nada.
```

Localizar primeiro e executar depois costuma ser mais estável do que «percorrer o repositório inteiro e alterar pelo caminho».

### 3. Sem indicar alcance não importa — ele encontra sozinho?

Pode encontrar, mas o custo costuma ser:

- Lê mais
- Fica mais lento
- É mais fácil arrastar ficheiros semelhantes
- É mais provável alterar sítios que não esperava

### 4. É preciso indicar pasta e ficheiro?

Não necessariamente, mas quanto mais concreto, melhor.

- Já sabe o ficheiro: aponte o ficheiro
- Só sabe a zona aproximada: aponte primeiro o diretório
- Totalmente incerto: peça primeiro só localização e explicação

## Três coisas que convém acrescentar no Prompt

Se recear que altere demais, acrescente no Prompt:

1. Só olhar que ficheiros ou diretórios
2. Não percorrer onde
3. Antes de modificar, dizer que ficheiros serão afetados

No IDE, confirme se a raiz da área de trabalho atual está correta.

## Formulações prontas a usar

Pode usar esta forma:

```text
Olhe primeiro só `src/pages/home/` e `src/components/Hero.tsx`.
Não percorra `backend/` nem `scripts/`.
Se precisar de outros ficheiros, diga-me primeiro porquê e só depois continue.
```

Indicar o alcance de ficheiros ao Codex é reduzir adivinhação, ruído e alterações erradas.

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica como delimitar o alcance de ficheiros e pastas; formulações de exemplo e conceitos foram revistos, e o corpo não depende de factos voláteis como versão do produto, preço ou interface.  
**Última verificação:** 2026-07-26

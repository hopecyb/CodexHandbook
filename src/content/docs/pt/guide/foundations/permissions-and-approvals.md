---
title: Permissões e Aprovação
description: Explica quando o Codex precisa da sua Aprovação para operar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

O Codex não deve executar operações de alto risco sem consentimento. A **Aprovação** é a trava na colaboração humano–máquina.

Se o Codex pudesse ler qualquer arquivo, acessar a rede à vontade e rodar comandos à vontade, o custo de entender mal a Tarefa seria alto.

## O que você precisa acompanhar

- Se permite ler/escrever caminhos fora do projeto atual
- Se permite acesso à rede
- Se permite executar certos comandos de shell
- Se a equipe aplicou políticas obrigatórias (configuração gerenciada)

## O que ela controla

Dá para ver a Aprovação como «caixa de confirmação antes de um passo perigoso».

Nestes casos, por exemplo, ele deve parar e perguntar:

- Vai escrever em arquivos
- Vai rodar comandos que podem alterar o sistema
- Vai acessar caminhos fora do projeto
- Vai ler ou enviar conteúdo pela rede

Ver um pop-up ou pedido de confirmação não significa que o Codex errou — muitas vezes ele só está respeitando o limite de segurança.

## Mal-entendidos comuns

### 1. Por que às vezes ele faz direto e às vezes pergunta?

Porque o risco das operações é diferente.

- Ler um arquivo comum: risco menor
- Alterar muitos arquivos, acessar a rede, executar comandos: risco maior

### 2. Eu deveria sempre clicar em permitir?

Olhe pelo menos estas três coisas:

1. O que ele quer fazer
2. Onde vai impactar
3. Se é o que você queria que ele fizesse

### 3. Se eu recusar, a Tarefa inteira se perde?

Em geral, não. Você pode recusar e pedir que ele continue de um jeito mais seguro.

## Princípios simples ao usar

- Se não entender, não aprove ainda
- Cuidado extra fora do alcance do projeto atual
- Olhe com mais atenção ao sair à rede, rodar comandos ou alterar arquivos em lote
- Em dúvida, peça que explique «por que precisa desta Permissão»

## Explicação por camadas

| Camada | O que cobre | Onde ler |
|---|---|---|
| Conceito (esta página) | Por que a Aprovação é necessária | — |
| Diferenças de produto | Como cada entrada mostra a confirmação | [Guias de produto](/guide/) |
| Estratégia de Prompt | Como declarar limites de Permissão na Tarefa | [Definir restrições](/prompts/constraints-and-boundaries/) |

Políticas oficiais e valores padrão podem mudar; confira [https://developers.openai.com/codex](https://developers.openai.com/codex).

O papel da Aprovação é manter a decisão de «pode ou não pode» sempre com você.

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** A documentação atual de introdução ao Codex CLI no OpenAI Help Center ainda distingue approval modes e estratifica por risco ações como ler arquivos, escrever arquivos e executar comandos; esta página só explica por que a Aprovação existe, quando aprovar com cautela e como julgar o alcance do impacto — sem declarar valores padrão fixos do produto.  
**Última verificação:** 2026-07-26

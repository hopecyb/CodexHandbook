---
title: Saída estruturada
description: Fazer o exec produzir resultados parseáveis por máquina — para passos seguintes, painéis e portões de qualidade.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Na primeira automatização, muita gente deixa o Codex escrever um parágrafo «que soa razoável». Serve para uma pessoa ler; não tanto para um script.

A saída estruturada resolve algo direto: o Codex devolver o resultado no formato que defines.

Se uma Tarefa não interativa só produz texto livre, o passo seguinte tem dificuldade em decidir automaticamente «passou ou falhou?», «quantos achados?», «que gravidade?». A saída estruturada torna o resultado mais apto a um programa continuar a processar.

## Conteúdo desta página

- Quando pedir JSON / tabela Markdown / campos fixos
- Como definir o schema no Prompt
- Estratégia de degradação se o parse falhar

## Mal-entendidos frequentes

### A saída estruturada existe para o passo seguinte se encaixar

Muita gente ouve JSON e schema e toma por mania de engenharia.

A razão prática: se o passo seguinte é um script que julga sucesso/falha, um bot que comenta ou um painel que mostra resultados, precisas de um formato estável — não que o programa adivinhe cada vez o que estás a dizer.

### Formato estável ≠ conclusão fiável

A saída estruturada só garante que «parece o que pediste»; não garante que a Tarefa foi bem compreendida.

Resolve a interface de saída; não substitui a definição da Tarefa nem a Verificação do resultado.

## Uma distinção direta

- Texto livre: para pessoas
- Saída estruturada: para programas

Se o passo seguinte é `jq`, um script, um painel, um portão de qualidade ou um bot de comentários, não deves depender só de linguagem natural livre.

## Prática mínima utilizável

No fim do Prompt, fixa o formato:

```text
…(corpo da Tarefa)…

Requisitos de saída:
- Só um objeto JSON, sem cercas de código markdown
- Campos: {"pass": boolean, "findings": [{"severity":"P0|P1|P2", "file":"", "message":""}]}
- Se não houver problemas, findings é um array vazio
```

Parse em Shell (esquema):

```bash
result=$(codex exec --cwd . "$(cat prompts/structured-review.md)")
echo "$result" | jq -e '.pass == true'
```

## Armadilhas frequentes

### 1. Dizer «saída JSON» sem dizer «só JSON»

O modelo explica primeiro e depois dá o JSON: o parse falha.

### 2. Um nome de campo hoje, outro amanhã

Se o script depende de um campo, trata o schema como interface — não o mudes à ligeira.

### 3. Querer que a saída estruturada resolva toda a vaguidade

Resolve «formato estável». Se a Tarefa em si está mal definida, o JSON só emitirá de forma estável um resultado confuso.

## Fluxo de trabalho recomendado

```text
Definir schema (versão v1)
    → O Prompt referencia o ficheiro de schema @schemas/review-output.json
    → Executar exec
    → Validar com jq / validador próprio
    → Se não passar, exit 1
```

Com saídas grandes podes pedir um campo de caminho de ficheiro; o Agent escreve em `artifacts/` e a CI sobe o artifact.

## Como julgar

Se o resultado o consome «o programa seguinte», estrutura.  
Se é sobretudo para ler e discutir, o texto livre costuma ser mais natural.

Enquanto o resultado tiver de continuar a ser processado por um programa, faz o Codex devolvê-lo com campos acordados e estáveis.

## Comparação com o SDK

| | CLI + Prompt JSON | SDK |
|---|---|---|
| Custo de integração | Baixo | Médio |
| Segurança de tipos | Por convenção + validação | Tipos do SDK |
| Adequado | Scripts de CI | Serviços multi-tenant |

Ver [Visão geral do SDK](/guide/developer-platform/sdk-overview/).

## Erros frequentes

- O modelo mistura texto explicativo e o JSON falha — enfatiza «só JSON» no Prompt
- Mudança de schema sem subir versão; CI antiga faz parse mal
- Meter secrets em campos JSON que voltam aos logs
- Sem comportamento de saída claro perante falha de parse

## Lista de aceitação

- [ ] Há ficheiro de schema ou campos documentados
- [ ] A CI falha de forma explícita se o parse falhar
- [ ] Saídas de exemplo em `fixtures/` para regressão
- [ ] Alinhado com a estratégia de [códigos de saída](/guide/developer-platform/non-interactive/exit-codes-and-retries/)

## Fontes de referência
- Práticas gerais de structured outputs da OpenAI (alinhamento conceptual)
---

**Estado:** verified  
**Produtos aplicáveis:** CLI / API  
**Base de verificação:** A documentação atual de modelos/comparação da API da OpenAI continua a listar a capacidade `Structured outputs`; o conteúdo limita-se à prática geral de «desenhar uma interface de saída estável para Tarefas não interativas»; o schema JSON, a validação e a degradação do exemplo são padrões de engenharia.  
**Última verificação:** 2026-07-26

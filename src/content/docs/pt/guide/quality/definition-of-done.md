---
title: Definição de concluído
description: Abordagem de checklist de concluído partilhada por equipas e indivíduos.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

«Definição de concluído» é direto: declarar de antemão até que ponto conta como realmente concluído desta vez.

Sem este passo, o comum é:

- Você acha que ainda falta um pouco
- O Codex acha que já acabou
- Nenhum dos dois está errado — o padrão é que não estava alinhado

## Porque este passo importa

Muito retrabalho nasce de o padrão de «concluído» não ter sido clarificado no início.

Por exemplo:

- Basta alterar o texto, ou a pré-visualização da página também tem de estar correta?
- Basta o build passar, ou também validar manualmente que o botão é clicável?
- Basta a funcionalidade funcionar, ou também acrescentar documentação?

Se isto não for dito de antemão, cada um fala a sua língua.

Exemplo mínimo pessoal de definição de concluído:

- [ ] Diff revisto
- [ ] Critérios de aceitação marcados um a um
- [ ] Testes ou Verificação manual concluídos
- [ ] Sem segredos no repositório
- [ ] Problemas a acompanhar já registados

A versão de equipa será alargada em marcos posteriores de governação.

## Mal-entendidos habituais

### 1. A definição de concluído não precisa de ser muito formal nem complexa

Na primeira fase, três linhas já ajudam:

- O que alterar
- Como aceitar
- Em que situações ainda não está concluído

### 2. Não é a mesma coisa que «objetivo»

Pode distinguir assim:

- **Objetivo**: que resultado quer
- **Definição de concluído**: como provar que esse resultado foi alcançado

Por exemplo:

- Objetivo: corrigir o texto do botão na página inicial
- Definição de concluído: só alterar a página inicial; o texto do botão passa à nova versão; a pré-visualização da página está correta

### 3. Não precisa de escrever muito de cada vez

Não.

Clareza importa mais do que extensão.

## Um modelo breve

Pode começar com esta versão:

```text
Critérios de conclusão:
1. Só modificar o âmbito indicado
2. O resultado cumpre os requisitos que indiquei
3. Passos de Verificação concluídos, e diga-me como verificar
```

A «definição de concluído» clarifica sobretudo «até que ponto conta como acabado», para o seu juízo e o do Codex não divergirem.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica o papel e a forma de escrever a definição de concluído; conceitos, exemplos e checklists foram revistos, e o corpo não depende de factos voláteis de produto.  
**Última verificação:** 2026-07-26

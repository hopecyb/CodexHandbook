---
title: Pesquisa Web
description: Usar a pesquisa para complementar factos e indicar fontes.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 30
---

A pesquisa Web serve para complementar factos — não para substituir a sua conclusão final.

Adequado: consultar documentação pública, códigos de erro, notas de versão. Inadequado: tratar o resultado da pesquisa como conclusão jurídica/médica final.

Exija fontes anexas e abra-as manualmente para conferir. Use em conjunto com [Validar fontes](/guide/quality/validate-sources/).

## Para que serve a pesquisa

A pesquisa ajuda sobretudo a localizar:

- Onde ir ver
- Que informação vale a pena conferir a seguir
- Se há fontes mais autoritativas

O papel é encontrar primeiro o material; depois volta ao original para conferir.

## Mal-entendidos habituais

### 1. Encontrou resultados = a resposta é fiável?

Não. Encontrar ≠ fiável; resumo fluido ≠ preciso.

### 2. Em que situações a pesquisa encaixa?

Cenários comuns:

- Consultar documentação oficial
- Consultar mensagens de erro
- Consultar mudanças de versão
- Verificar factos em páginas web públicas

### 3. Pode citar diretamente o resumo dos resultados?

Não cite direto. Trate assim:

1. Veja primeiro que fontes há nos resultados
2. Abra a página original
3. Resuma com as suas palavras

### 4. Quando não depender só da pesquisa?

Quando o problema for:

- Juízo jurídico/médico/financeiro de alto risco
- Precisar de confirmar o comportamento real da página
- Precisar de conferir ficheiros locais do projeto, não material público

Aí combine outras Ferramentas ou Verificação humana.

## Ordem da pesquisa

Pode seguir esta ordem:

1. Pesquise primeiro as palavras-chave mais perto da pergunta
2. Priorize documentação oficial ou fontes primárias
3. Abra o original e confirme detalhes
4. Só depois decida se mete a conclusão no resultado

## Frase de Prompt aplicável diretamente

Pode acrescentar:

```text
Pesquise primeiro e priorize fontes oficiais; ao dar conclusões, anexe ligações clicáveis — não só o resumo da pesquisa.
```

A pesquisa dá pistas e fontes; no fim ainda tem de voltar ao original para conferir.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** A documentação atual de modelos da OpenAI API continua a listar `Web search` como uma capacidade de Ferramenta disponível; esta página enfatiza só o método «pesquisa para complementar factos, priorizar fontes originais, conclusões voltam ao original para conferir», sem depender da UI concreta do produto.  
**Última verificação:** 2026-07-26

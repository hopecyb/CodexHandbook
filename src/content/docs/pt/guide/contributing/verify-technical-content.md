---
title: Verificar conteúdo técnico
description: Como marcar uma página como verified, incluindo passos de reprodução, bases oficiais e data.
locale: pt
source_locale: zh-CN
source_revision: abada81
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 30
---

No manual, comandos, permissões, preços e recursos do produto mudam com as versões. A **Verificação** garante que, ao seguir o documento, o leitor obtenha um resultado previsível.

## Conteúdo desta página

Muitas pessoas, na primeira vez que ajudam a manter a documentação, tratam «não vi nenhum problema» como «já verifiquei».

Num manual técnico, isso é bem diferente:

- O primeiro é só uma impressão subjetiva
- O segundo significa que você já testou de verdade com a versão, o ambiente e os passos atuais

O que resolvemos aqui é como passar de «parece certo» para «há evidência de que ainda está certo».

## O que a Verificação examina

«Verificar conteúdo técnico» significa: não basta checar se o texto flui — é confirmar que o leitor, seguindo o texto, ainda consegue fazer o que está escrito hoje.

Isso importa porque muita coisa não é estável para sempre, por exemplo:

- Comandos mudam
- Menus mudam de lugar
- Valores padrão de permissão mudam
- Capacidades e disponibilidade do produto se atualizam

Verificação não é perfeccionismo editorial — é evitar que o leitor tropece em documentação antiga.

## Significado dos estados

| Status | Significado |
|---|---|
| `planned` | Planejado, ainda não escrito |
| `draft` | Em redação, ainda sem fechamento completo |
| `review` | Conteúdo pronto, aguardando revisão |
| `verified` | Verificado conforme a base indicada |
| `outdated` | Precisa de atualização após mudança no produto |
| `archived` | Histórico preservado, fora da navegação principal |

## Mal-entendidos comuns

### `verified` representa evidência, não só confiança

Não é um tom de voz — é um estado de evidência.

Só marque `verified` quando você de fato reproduziu, confrontou a base oficial e confirmou que o escopo da página e a data batem.

### Artigos da comunidade ajudam a entender, mas não substituem a Verificação factual

Artigos comunitários ou outros materiais comunitários ajudam a descobrir temas a complementar.

Mas quando envolve:

- Nome de comando
- Comportamento de permissão
- Entrada do produto
- Preço, cota, diferença regional

volte à documentação oficial ou ao resultado real da execução atual.

### Verificar não é só olhar frases isoladas

Às vezes cada frase isolada parece ok, mas o conjunto não se sustenta, por exemplo:

- Produto aplicável e página real não batem
- Ordem dos passos errada
- Premissas padrão não escritas
- O título promete mais do que o corpo realmente validou

Verifique pela «cadeia operacional completa», não só pelo literal.

## Checklist de Verificação

1. **Marcar o escopo**: produto (App/CLI/IDE/Cloud), SO, versão do CLI
2. **Reproduzir passo a passo**: seguir do zero ou de um worktree limpo
3. **Base oficial**: pelo menos um link da documentação ou do help center da OpenAI
4. **Fontes da comunidade**: se usar materiais comunitários, só como referência de tema; fatos pela oficial
5. **Atualizar a data**: rodapé `Última verificação: YYYY-MM-DD`
6. **Revisão independente**: `verified` deve, de preferência, ser confirmado por segunda pessoa (não o autor)

## Ordem de Verificação

Esta ordem reduz falhas:

1. Confirmar de qual produto, entrada e cenário a página fala
2. Percorrer os passos do texto do início
3. Confrontar informações voláteis com a documentação oficial
4. Rebaixar o que estiver incerto ou não reproduzido
5. Só então atualizar status e data

É melhor manter `review` do que marcar `verified` sem evidência suficiente.

## Informações voláteis

Estas precisam de rechecagem trimestral ou a cada major release:

- Nomes de comandos e subcomandos, flags
- Padrões de permissão e comportamento do Sandbox
- Planos, nomes de modelo, disponibilidade regional
- Nomes de eventos MCP/Hook

## Em caso de falha

- Rebaixar para `review`, `draft` ou `outdated` conforme a realidade
- Explicar no PR qual passo divergiu do oficial
- Em desvio grande, abrir issue marcada `outdated`

## Relacionado

- [Política de versão do manual](/pt/guide/start-here/handbook-version-policy/)
- [Recursos oficiais](/pt/guide/reference/official-resources/)

`verified` significa «foi realmente verificado com a base atual indicada, e há rastreabilidade». Só a confiança do autor não basta.

---

**Status:** verified  
**Base da verificação:** cruzamento com o sistema de status atual do manual, práticas de revisão em lotes já concluídas e o princípio de prioridade oficial; esta página descreve o padrão interno e os princípios de rebaixamento para elevar uma página a `verified`.  
**Última verificação:** 2026-07-26

---
title: Shell e terminal
description: Capacidades e riscos da execução de comandos.
locale: pt
source_locale: zh-CN
source_revision: 0b4d40a
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 20
---

O terminal é uma das formas mais diretas de o Codex executar ações — por isso é eficiente e precisa que compreenda o risco.

## Porque é poderoso e perigoso

As Ferramentas de ficheiros tratam sobretudo texto; o terminal opera diretamente o sistema e o ambiente de execução.

Uma vez no terminal, as ações comuns deixam de ser só leitura e podem passar a:

- Instalar
- Construir
- Testar
- Apagar
- Fazer commit
- Fazer push

Antes de usar, esclareça o que vai alterar.

O terminal é poderoso e perigoso. Princípios:

- Antes da Aprovação, compreenda o comando
- Proíba `rm -rf`, push forçado, alterar configuração ssh, etc., salvo se compreender de todo e for necessário
- Meta os comandos de Verificação nos critérios de aceitação

Entrada no produto: [Terminal integrado](/pt/guide/desktop-app/integrated-terminal/)

## Porque o risco do terminal é maior

Não «dá só sugestões» — executa ações de verdade.

Por exemplo, pode:

- Instalar dependências
- Apagar ficheiros
- Correr testes
- Reescrever configuração
- Fazer push de código

Se não compreender um comando, pergunte primeiro e só depois decida se permite.

## Quando o terminal encaixa

Estas coisas encaixam no terminal:

- Correr testes
- Correr build
- Ver o estado dos ficheiros
- Executar scripts já existentes no projeto

Se só quiser:

- Ver como a página está
- Consultar material público atualizado
- Alterar um ou dois textos conhecidos

O terminal pode não ser a primeira escolha.

## Mal-entendidos habituais

### 1. Sem saber comandos, também não fica totalmente impedido de usar o terminal

No início não precisa de saber escrever muitos comandos, mas pelo menos deve conseguir perceber:

- O que este comando pretende fazer aproximadamente
- Se altera ficheiros ou o sistema
- Se está mesmo relacionado com a Tarefa atual

### 2. Comando de teste = sempre seguro?

Também não.  
A maioria dos comandos de teste tem risco baixo, mas ainda veja:

- Se escreve muitos ficheiros
- Se liga à rede
- Se chama scripts que não conhece

### 3. E se não compreender?

Pode perguntar diretamente, por exemplo:

```text
O que faz este comando? Que conteúdos altera? Se não o correr, que impacto tem?
```

## Redação aplicável diretamente

Pode acrescentar:

```text
Antes de correr um comando, explique o propósito, se escreve ficheiros, se liga à rede, e como recuperar após falha.
```

Antes de correr, confirme o que este comando vai alterar.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica que a execução no terminal tem mais capacidade de ação e risco do que a edição de ficheiros, e enfatiza compreender o comando antes da Aprovação, confirmar âmbito de escrita, rede e forma de recuperação; os princípios foram cruzados com capítulos de Permissões, Verificação e Ferramentas do site.  
**Última verificação:** 2026-07-26

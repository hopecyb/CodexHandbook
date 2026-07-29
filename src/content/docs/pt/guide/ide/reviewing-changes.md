---
title: Rever mudanças no IDE
description: Ler Diff, comentar e aceitar/rejeitar sugestões do Codex no editor.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

A experiência de revisão da extensão IDE fica entre «completar linha a linha» e «review completa de PR»: as mudanças aparecem muitas vezes diretamente no editor ou na vista lateral de Diff. Esta página explica como aceitar resultados com segurança.

Mesmo perante uma mudança «pronta a aceitar» no IDE, não tome «aceitar com um clique» como ação predefinida.

## Conteúdo desta página

- Formas habituais de UI de revisão no IDE
- Estratégias para aceitar, rejeitar e aceitar parcialmente
- Ligação com Git, testes e fluxo de PR

## Fluxo de revisão

1. **Ver o alcance**: que ficheiros mudaram? Há eliminações ou tempestades de formatação não pedidas?
2. **Ler a lógica**: ramos condicionais, tratamento de erros, casos limite
3. **Verificar segurança**: chaves, injeção, elevação de Permissões, envenenamento de dependências
4. **Correr Verificação**: testes / lint acordados no projeto (no terminal do IDE ou em scripts de Tarefa)
5. **Decidir**: aceitar, pedir alterações, ou anular e voltar a enviar a Tarefa

Metodologia: [Rever Diff](/guide/quality/review-diffs/)

## Operações típicas do IDE (conceito)

| Operação | Sugestão |
|---|---|
| Diff inline / texto fantasma | Veja bloco a bloco antes de aceitar; evite aceitar tudo de uma vez |
| Aceitar um ficheiro | Aceite primeiro o de menor risco (por exemplo testes) |
| Rejeitar e tentar de novo | No follow-up, diga «altere só X, não mexa em Y» |
| Integração com Git | Depois de aceitar, confira ainda com `git diff` antes do commit |

As funções de [Diff, comentários e revisão](/guide/desktop-app/diffs-comments-and-review/) da App de desktop são mais completas; no IDE, a revisão é sobretudo **leve e frequente**.

## Hábitos recomendados de Prompt

Antes de iniciar a Tarefa, inclua:

- Glob de caminhos permitidos
- Proibido: `git push`, alterar lockfile (salvo pedido explícito)
- Ao concluir: listar um resumo das mudanças, **sem commit automático**

Ver [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/)

## Erros comuns

- Confiar no ícone verde de testes sem ter corrido pessoalmente
- Esconder mudanças de lógica dentro de um Diff grande de formatação automática
- Depois de aceitar, fazer push direto sem PR / proteção de ramo

## Lista de aceitação

- [ ] `git status` coincide com os ficheiros esperados
- [ ] Testes passam (local ou CI)
- [ ] Sem resíduos de `.env`, token ou `console.log` de depuração
- [ ] A mensagem de commit foi escrita ou confirmada por si

## Dúvidas frequentes

### 1. A sugestão inline parece pequena — posso aceitar já?

Melhor não criar esse hábito.

Muitos problemas não estão em «a mudança ser grande», mas em «parecer pequena e por isso ninguém olhou com atenção».

### 2. Não sou forte a rever lógica — o que olhar primeiro que seja útil?

Estas três coisas já têm muito valor:

- São os ficheiros que pediu?
- Apagou algo que não deveria?
- Há resíduos evidentes de depuração ou desvio de estilo?

### 3. Aceitar já equivale a concluir?

Ainda não.

Aceitar só coloca as mudanças na área de trabalho; a seguir ainda tem de verificar e decidir se faz commit.

No IDE, «aceitar mudanças» é só um passo intermédio, não a aceitação final.

## Fontes de referência
- [Verificação e revisão humana](/guide/foundations/verification-and-human-review/)
---

**Estado:** outdated  
**Produtos aplicáveis:** IDE  
**Nota de revisão:** Esta página depende de a extensão IDE oferecer atualmente Diff inline, Diff lateral, aceitar/rejeitar sugestões por bloco, etc.; o material oficial público vigente não basta para confirmar item a item essas capacidades de interface; até completar a documentação da nova extensão, não convém marcar como `verified`.  
**Última verificação:** 2026-07-26

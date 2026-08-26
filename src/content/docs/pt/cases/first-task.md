---
title: Primeira tarefa
description: Conclua uma pequena alteração com um prompt claro e aprenda a rever o resultado.
locale: pt
source_locale: zh-CN
source_revision: a9bcbce
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

# Primeira tarefa

Os exemplos abaixo pressupõem a **App de ambiente de trabalho**; o mesmo prompt funciona no CLI/IDE.

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Principiantes |
| Cliente | App de ambiente de trabalho (recomendado) |
| Tempo estimado | 15–20 minutos |

## 1. Objetivo e contexto

**Objetivo:** Concluir uma alteração segura a um ficheiro num projeto de prática.

**Critérios de sucesso:** Alterar apenas o ficheiro indicado, o resultado corresponde à descrição de aceitação e consegue ler o diff.

## 2. Preparação

- Cliente instalado e sessão iniciada
- Projeto de prática criado (com `hello.md` ou ficheiro semelhante)

## 3. Prompt recomendado

```text
Objetivo: no final de hello.md, acrescentar uma secção «Exercício de hoje» com uma lista de três pontos.
Restrições: alterar apenas hello.md; não apagar conteúdo existente; não fazer pedidos de rede.
Aceitação: o ficheiro termina com esse título e exatamente três itens de lista.
Se faltar informação, pergunte-me primeiro — não invente.
```

## 4. Execução e revisão

1. Peça primeiro um plano breve (ou exija um plano)
2. Ao aprovar a escrita do ficheiro, confirme que o caminho está correto
3. No fim, verifique o diff ponto a ponto face aos critérios de aceitação

## 5. Próximos passos

- [Fundamentos de prompts](/pt/prompts/basics/)
- [Verificação](/pt/guide/verification/)
- [Começar aqui](/pt/guide/start-here/)
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página é um exercício de introdução de baixo risco no manual: altera apenas um ficheiro, proíbe rede, exige ler o diff e verificar ponto a ponto segundo os critérios de aceitação; os capítulos prévios (instalação, projeto de prática, verificação) foram cruzados; o conteúdo não depende de detalhes de versão de produto.  
**Última verificação:** 2026-07-26

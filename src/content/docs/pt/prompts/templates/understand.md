---
title: Template de compreensão
description: Construa compreensão primeiro; só depois altere.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

# Template de compreensão

Muitas tarefas emperram porque ainda não há compreensão partilhada mínima.

O template de compreensão serve tarefas do tipo «entender primeiro, decidir o próximo passo depois».

## Template

```text
Objetivo: entender 【tema/módulo/área do código-base】, em preparação para 【implementação/alteração/revisão】.
Contexto: 【tipo de projeto, stack, issue relacionado】
Entradas: 【@caminho de arquivo, link de docs, captura】
Restrições: análise somente leitura; não modificar nenhum arquivo; não executar comandos destrutivos.
Saída:
1. Explique em 5–8 pontos os conceitos centrais ou as responsabilidades do módulo
2. Indique os 3 arquivos/diretórios mais relevantes para 【objetivo】 e o motivo
3. Liste 3 perguntas a confirmar
Aceitação: consigo decidir o alcance da próxima tarefa com base na saída.
```

## Quando usar este template

- Assumir um código-base novo
- Explorar um módulo desconhecido
- Antes de alterar, mapear o alcance relacionado

## Ideias erradas habituais

### 1. Tarefa de compreensão ≠ «peça um resumo»

Peça também que indique:

- quais arquivos são mais relevantes
- o que ainda não está claro
- por onde começar o próximo passo

### 2. Na fase de compreensão, mais detalhe não é sempre melhor

Clarificar a linha principal importa mais do que escavar todos os detalhes de uma vez.

O valor deste template é fechar primeiro o alcance da próxima tarefa.

## Relacionado

- [Explorar—planejar—executar—verificar](/cases/workflows/explore-plan-execute-verify/)
- [Caso: entender um código-base](/cases/understand-a-codebase/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página oferece um template de tarefas de compreensão; links e estrutura foram revistos; o corpo não depende de factos voláteis do produto.

---
title: Ficheiros de texto e código
description: Fazer o Codex ler e escrever corretamente ficheiros de texto — código-fonte, configuração e documentação.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

A maioria das Tarefas de desenvolvimento cai em **ficheiros de texto e código**: código-fonte, testes, configuração, Markdown. Esta página explica como limitar o âmbito, manter o estilo e fazer merge com segurança.

Ao pedir ao Codex para alterar texto ou código, o essencial é alterar no sítio certo, da forma certa — e não alterar a mais de passagem.

## Conteúdo desta página

- Como fazer as alterações cair no caminho e encoding corretos
- Como organizar edições em vários ficheiros
- Coordenação com formatter e linter

## Tipos de ficheiro e cuidados

| Tipo | Cuidados |
|---|---|
| Código-fonte `.ts` `.py` etc. | Seguir `AGENTS.md` e padrões existentes |
| Configuração `.json` `.yaml` `.toml` | Fácil de partir a estrutura; exigir sintaxe válida |
| Documentação `.md` | Caminhos relativos de ligações; normas de mistura PT/EN |
| Código gerado | Indicar se deve ser submetido ou gitignore |

Contexto: [Contexto de ficheiros e diretórios](/guide/context/file-and-folder-context/)

## Porque estes ficheiros falham com mais facilidade

Os pontos realmente problemáticos costumam ser:

- Escrever num ficheiro que não se deveria
- Para alterar um pouco, reescrever um bloco enorme
- Estilo inconsistente com o projeto
- Sintaxe de configuração partida em silêncio

## Estrutura de Prompt recomendada

```text
Objetivo: <uma frase>
Permitido alterar: <glob de caminhos>
Proibido: alterar lockfile, diretórios irrelevantes
Estilo: alinhado com <ficheiro de exemplo>
Conclusão: listar ficheiros alterados + correr <comando de teste>
```

Ver [Anatomia de uma boa Tarefa](/prompts/task-anatomy/)

## Mal-entendidos habituais

### 1. Só dizer «ajude-me a alterar este ficheiro»

Normalmente falta informação.

É melhor acrescentar:

- Que ficheiros pode alterar
- Quais não tocar
- Quem é a referência de estilo
- Como verificar no fim

### 2. Configuração e texto comum são a mesma coisa

Também não.

Em `.json`, `.yaml`, `.toml`, o problema mais comum é estrutura, indentação ou sintaxe partidas.

### 3. Quanto mais abrangente a alteração, mais poupa trabalho

Muitas vezes, alterações «de âmbito pequeno, explicáveis, fáceis de rever» são mais estáveis do que «otimizações amplas de passagem».

## Encoding e fim de linha

- Predefinição **UTF-8**; projetos com encoding especial devem declarar em `AGENTS.md`
- Alinhar com `.editorconfig` / `prettier`, para evitar diff de fim de linha no ficheiro inteiro
- Ficheiros grandes: alterar por secções — @ a uma função concreta, não reescrever o ficheiro inteiro

## Quando tem medo de alterar a mais, limite assim

Se tem medo de alterações a mais, exija estas três coisas:

1. Declarar primeiro que ficheiros serão afetados
2. Só o âmbito mínimo necessário à Tarefa atual
3. Listar as ações de Verificação depois de alterar

## Pontos de revisão

- [Revisar diffs](/guide/quality/review-diffs/): lógica, âmbito, eliminações
- [Correr testes](/guide/quality/run-tests/)
- Introdução involuntária de `TODO` placeholder por implementar

## Erros habituais

- «Refatorar o projeto inteiro» → centenas de ficheiros
- Edição de texto forçada em binários ou ficheiros minificados
- Ligações de documentação em caminho absoluto → 404 no site

O pior em texto e código é alterar muito e de forma dispersa, difícil de rever. Com âmbito, estilo e Verificação claros, poupa muitas idas e voltas.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre Contexto de ficheiros/diretórios, anatomia de Tarefas, revisar diffs e correr testes; esta página confirma só o princípio estável de «limitar caminhos, manter estilo, clarificar Verificação» para ficheiros de texto/código.  
**Última verificação:** 2026-07-26

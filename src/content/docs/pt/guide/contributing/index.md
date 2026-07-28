---
title: Contribuir
description: Como contribuir com corpo, casos, exemplos de Prompts e traduções para este manual — fluxo e padrões de qualidade.
sidebar:
  order: 80
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O **Codex Handbook** é um site de documentação mantido pela comunidade. São bem-vindas correções de erros, páginas novas, casos reproduzíveis e exemplos de Prompts em [examples/](/examples/README.md).

## Conteúdo desta página

- Tipos de contribuição e entradas
- Padrões de escrita e Verificação
- Expectativas de PR e publicação

## Que contribuições são mais valiosas

Se no site vir:

- Um sítio que você próprio não compreendeu
- Entrada no índice, mas o conteúdo não guia o caminho
- Comandos, ecrãs ou explicações já desatualizados

Já são pistas de contribuição muito valiosas.

Não precisa de ser «a pessoa que mais sabe do tema» para ajudar. Muitas melhorias úteis vêm precisamente de quem, na primeira vez, aponta: «aqui assume-se que eu sei, mas na verdade não percebi».

## Tipos de contribuição

| Tipo | Descrição | Guia |
|---|---|---|
| Correção/pequena alteração | Ortografia, ligações, uma frase desatualizada | PR direto |
| Nova página de guia | Corpo de capítulo sob `src/content/docs/` | [Escrever uma página de guia](/guide/contributing/write-a-guide/) |
| Caso | `src/content/docs/cases/` | [Modelo de caso](/cases/use-cases/case-study-template/) |
| Exemplo de Prompt | `examples/prompts/` | [Adicionar um exemplo de Prompt](/guide/contributing/add-a-prompt-example/) |
| Verificação técnica | Marcar `verified`, atualizar data | [Verificar conteúdo técnico](/guide/contributing/verify-technical-content/) |
| Tradução | `en/`, `zh-tw/`, etc. | Roteiro M6; estabilize primeiro o texto-fonte |

## Mal-entendidos habituais

### Contribuir ≠ ter de escrever um capítulo novo inteiro

Muita gente, na primeira vez, pensa que «contribuir» exige um bloco grande de conteúdo.

Mas estes também são muito valiosos:

- Acrescentar uma explicação que principiantes compreendem
- Corrigir uma formulação enganosa
- Acrescentar uma entrada de índice em falta
- Despromover ou datar um comando desatualizado

### «Não sou especialista» ≠ «o meu feedback não serve»

Se o público-alvo inclui principiantes, o ponto onde você ficou preso na leitura já é um sinal de alto valor.

A condição é: concretize o problema e transforme-o numa expressão mais clara — não deixe só «não percebi aqui».

## Princípios básicos

1. **Chinês simplificado `root` é o texto-fonte** (salvo indicação em contrário)
2. **Não copiar** texto original de tutoriais externos; ver [plano de integração de fontes externas](/docs/planning/external-source-integration.md)
3. **Factos voláteis** devem marcar a data de `Última verificação`
4. **Cada slug da sidebar** precisa do markdown correspondente; senão `npm run build` falha
5. Páginas novas devem atualizar em sincronia a sidebar em `astro.config.mjs`

## Na primeira contribuição, comece assim

Ordem mais estável na primeira vez:

1. Escolha um ponto onde acabou de ficar realmente preso
2. Decida se é corrigir texto, acrescentar página, acrescentar exemplo ou verificar informação desatualizada
3. Altere só esse bloco pequeno, mas clarifique premissas e perspetiva do leitor
4. Corra o build e confirme que não partiu a estrutura do site

Assim tem mais sucesso do que começar por um refactor grande do capítulo — e é mais fácil de rever.

## Desenvolvimento local

```bash
source ~/.nvm/nvm.sh && nvm use 22
pnpm install
pnpm dev
```

Antes do merge:

```bash
npm run build
```

## Código de conduta

- Respeite o trabalho dos outros; discuta o assunto, não a pessoa
- Não submeta segredos reais nem dados de clientes
- Antes de refactors amplos, discuta em issue ou RFC

A primeira contribuição não precisa de ser longa. Clarificar um ponto onde principiantes ficam presos e confirmar que passa a Verificação de build já é muito valioso.

## Ligações relacionadas

- Repositório: <https://github.com/hopecyb/CodexHandbook>
- [Esboço de capítulos](/docs/planning/chapter-outline.md) (para planeamento)

---

**Estado:** verificado  
**Base de verificação:** Revista item a item com a estrutura atual de diretórios deste repositório, a forma de manter a sidebar, o sistema de estado das páginas e o fluxo de contribuição; o conteúdo pertence às regras de manutenção do manual e não depende de comportamentos voláteis de UI de um cliente Codex.  
**Última verificação:** 2026-07-26

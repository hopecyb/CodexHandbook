---
title: Adicionar um exemplo de Prompt
description: Submeter Prompts reproduzíveis em examples/prompts, com metadados e critérios de aceitação.
locale: pt
source_locale: zh-CN
source_revision: cd78464
translation_status: reviewed
translated_at: 2026-08-26
sidebar:
  order: 20
reviewed_at: 2026-08-26
---

Os exemplos de Prompts ficam na raiz do repositório em [`examples/prompts/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/prompts), referenciados pelo corpo do manual. Normas de desenho: [`docs/planning/examples-system.md`](https://github.com/hopecyb/CodexHandbook/blob/main/docs/planning/examples-system.md).

## Conteúdo desta página

Pontos onde se costuma ficar preso:

- Não saber «que tipo de Prompt vale a pena incluir»
- Não saber em que formato escrever para outros reutilizarem diretamente

Esta página resolve como submeter um exemplo que **outros possam mesmo experimentar, aprender e reproduzir**.

## Critérios de inclusão

Aqui entram «exemplos reproduzíveis com Contexto, limites e critérios de aceitação» — não fragmentos de inspiração.

Um exemplo de Prompt aceitável responde pelo menos a três coisas:

- Quando usar
- Como dizer em concreto
- Depois de usar, como julgar se correu bem

Se for só uma frase que parece inteligente, sem premissas nem aceitação, parece mais uma nota do que um exemplo.

## Nomeação de ficheiros

```text
examples/prompts/<category>/<slug>.md
```

Exemplos de `category`: `development`, `research`, `meta-workflows`, `team`.

## Metadados obrigatórios (YAML frontmatter)

```yaml
---
id: prompt.fix-bug-with-tests
title: Corrigir Bug e acrescentar testes
content_type: prompt
audience: [beginner, developer]
difficulty: beginner
products: [app, cli, ide]
capabilities: [planning, file-editing, testing]
status: draft
last_verified: YYYY-MM-DD
---
```

## Secções obrigatórias no corpo

1. **Cenário de uso**
2. **Preparação** (Permissões, branch, ficheiros de Contexto)
3. **Prompt recomendado** (completo e copiável)
4. **Critérios de aceitação** (checklist, verificável objetivamente)
5. **Formas comuns de falhar**
6. **Páginas relacionadas do manual** (ligações a `src/content/docs/`)

Opcional: versão mínima, desmontagem pedagógica, variáveis substituíveis.

## Mal-entendidos habituais

### Não disperse o essencial

Alguns contribuidores escrevem muito fundo, teoria e extensões, e o Prompt realmente copiável fica escondido no meio.

Mais estável:

- Escreva primeiro o Prompt recomendado completo
- Depois premissas, variáveis e formas de falhar
- Por fim conteúdo explicativo

### Usar uma vez ≠ exemplo completo

Você sabe que premissas tinha em mente; o leitor não.

Escreva essas premissas, por exemplo:

- A que entrada de produto se aplica
- Que ficheiros, ecrãs ou Contexto precisa
- Se por defeito permite alterar ficheiros, correr comandos, ligar à rede

### Não meta informação sensível real no exemplo

Se o exemplo tiver Tokens reais, contas, ligações internas ou dados de clientes, não serve para repositório público.

O exemplo ensina o método — não expõe o seu ambiente de produção.

## Exemplo de critérios de aceitação

```markdown
## Critérios de aceitação

- [ ] O teste que falhava passa
- [ ] A suite de testes do âmbito acordado passa
- [ ] O diff só envolve ficheiros relacionados com a Tarefa
- [ ] Não se executou git push
```

## Limiar de qualidade

- Objetivo e definição de concluído claros
- Explicação de Permissões e limites de segurança
- Sem segredos reais nem PII
- Estado `verified` exige [Verificação independente](/pt/guide/contributing/verify-technical-content/)

## Fluxo de submissão

Ordem mais estável:

1. Determine que tipo de Tarefa real este exemplo resolve
2. Escreva uma versão de Prompt que outros possam copiar diretamente
3. Dê as precondições e limites mínimos necessários
4. Clarifique «o que conta como sucesso»
5. Por fim verifique fugas de informação sensível e o diretório certo

## Verificação do PR

- [ ] O caminho do ficheiro novo está no índice de `examples/README.md` (se o índice for mantido)
- [ ] Pelo menos uma página de caso ou fluxo liga a este exemplo (opcional mas recomendado)

Um bom exemplo de Prompt permite a outros reproduzir diretamente e obter um resultado próximo.

---

**Estado:** verificado  
**Base de verificação:** Revista item a item com o diretório atual `examples/`, o frontmatter dos exemplos, a forma de indexação e o fluxo de contribuição; os requisitos da página alinham-se com a estrutura atual de ligações de casos/fluxos e não dependem de comportamentos voláteis de um cliente Codex.  
**Última verificação:** 2026-07-26

---
title: AGENTS.md num monorepo
description: Padrão de exemplo para colocar instruções de projeto, âmbito e comandos de teste numa estrutura multi-pacote num só repositório.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

Num monorepo convivem várias apps, pacotes partilhados e stacks diferentes — um `AGENTS.md` gigante facilita o Agent **alterar o pacote errado** ou correr os testes errados. Esta página dá um padrão reutilizável de **instruções em camadas** (exemplo; adapte ao repositório).

## O que esta página cobre

- Como a raiz e os subpacotes dividem as instruções
- Como alinhar referências @ e restrições de caminho com os limites dos pacotes
- Consistência com comandos de CI / ambiente Cloud

## Porque este tipo de repositório precisa mais de instruções em camadas

Se um repositório comum é uma casa, um monorepo é um prédio.

Há salas diferentes, moradores diferentes, regras diferentes.  
Se só afixar um cartaz enorme à entrada, o Codex facilmente cai em dois problemas:

- Vê tudo, mas não sabe que camada cumprir agora
- Só queria alterar um pacote e acaba por mexer noutro

O ponto é clarificar as regras junto com os limites de diretório — não multiplicar mecanicamente ficheiros `AGENTS.md`.

## Estrutura recomendada (exemplo)

```text
repo-root/
  AGENTS.md              # Global: estratégia de branches, normas de commit, proibições
  apps/web/AGENTS.md     # Frontend: framework, comandos de teste, convenções de rotas
  apps/api/AGENTS.md     # Backend: estilo de API, disciplina de migrações
  packages/shared/       # Pode só ligar na documentação da raiz, ou nota curta de subpacote
```

O `AGENTS.md` da raiz deve incluir:

- Que diretórios o Agent **não pode** modificar (p. ex. `infra/prod/`)
- **Responsáveis ou ligações à documentação** de cada subpacote
- Comando global de instalação: `pnpm install` na raiz

## Mal-entendidos habituais

### 1. Com mais diretórios, não empilhe tudo na raiz

Na primeira vez com instruções monorepo, muita gente mete todas as restrições no `AGENTS.md` da raiz.

Resultado:

- Ficheiro muito longo
- Regras realmente relevantes para a Tarefa atual pouco salientes
- Convenções especiais dos subpacotes facilmente afogadas

Mais estável: a raiz escreve o consenso global; o subpacote escreve regras locais especiais.

### O papel das notas de subpacote é reduzir o âmbito de alterações erradas, não repetir as regras da raiz

Se `apps/web` e `apps/api` têm comandos de desenvolvimento, testes e restrições diferentes, escrever essas diferenças nos respetivos diretórios ajuda o Codex a errar menos.

## Fragmento de modelo de AGENTS.md de subpacote

```markdown
## Âmbito
Só modificar `apps/web/**`, salvo se a Tarefa exigir explicitamente alterações entre pacotes.

## Desenvolvimento
- Instalação: na raiz do repositório `pnpm install`
- Desenvolvimento: `pnpm --filter web dev`
- Testes: `pnpm --filter web test`
- Verificação de tipos: `pnpm --filter web typecheck`

## Dependências
Tipos partilhados importados de `@acme/shared`; não copiar e colar.
```

## Coordenação com o Prompt da Tarefa

Em refactors entre pacotes, **liste caminhos explicitamente**:

```text
Objetivo: em apps/web usar o novo cliente de API
Permitido alterar: apps/web/**, packages/api-client/**
Proibido: alterar diretamente o servidor em apps/api
Aceitação: pnpm --filter web test && pnpm --filter api-client test
```

Ver [Contexto de ficheiros e diretórios](/guide/context/file-and-folder-context/)

## Cloud e CI

Em Cloud, monorepos falham muitas vezes por **não instalar na raiz** ou por filter errado. No `AGENTS.md` da raiz declare:

- Diretório de trabalho predefinido = raiz do repositório
- Comandos filter para Tarefas de um só pacote
- Estratégia de cache (se usar turborepo/nx, indique o grafo de Tarefas)

[Ambientes Cloud](/guide/web-and-cloud/cloud-environments/)

## Erros habituais

- Só escrever notas em `apps/web`; o Agent na raiz altera o lockfile à toa
- Comandos de teste dos subpacotes inconsistentes e sem documentação
- AGENTS.md de subpacote em conflito com a documentação da raiz

## Como decidir: raiz ou subpacote

Se não souber onde colocar uma nota, pergunte:

1. É consenso que todos os pacotes devem cumprir?
2. Só vale para um certo diretório?
3. Se estiver no sítio errado, o Agent pode alterar o âmbito errado?

Mais perto de 1 → raiz; mais perto de 2 ou 3 → subpacote.

## Lista de verificação

- [ ] Raiz e subpacotes têm pelo menos cada um uma nota de scope legível
- [ ] Qualquer pacote pode correr sozinho o comando de teste
- [ ] Tarefas entre pacotes listam caminhos permitidos no Prompt

Num monorepo, AGENTS.md não precisa de estar tudo concentrado; o melhor é «consenso global» e «regras locais de diretório» cada um no sítio certo.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos atuais deste manual sobre `AGENTS.md`, Contexto de ficheiros/diretórios e ambientes Cloud; o conteúdo limita-se ao padrão de exemplo de instruções em camadas em monorepo e à organização de comandos, sem tratar entradas concretas de produto ou implementações geridas como contrato fixo.  
**Última verificação:** 2026-07-26

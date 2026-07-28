---
title: Variáveis de ambiente
description: Uso, camadas e segurança das variáveis de ambiente relacionadas com o Codex — índice complementar da referência de configuração.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

As «variáveis de ambiente» levam a dois extremos: ou se veem como algo muito de baixo nível, ou se acredita que toda a configuração cabe aí. Em claro: uma variável de ambiente é uma forma de entregar valores ao programa em tempo de execução, especialmente adequada para informação sensível e interruptores.

Costumam usar-se para **injetar secrets, sobrescrever interruptores e adaptar CI**, sem escrever valores sensíveis no ficheiro de configuração ou em Git. Esta página é um índice conceptual; os nomes concretos de variáveis são definidos pela [documentação oficial](https://developers.openai.com/codex) e `codex --help`.

## Conteúdo desta página

- O que deve ir em variáveis de ambiente e não no ficheiro de config
- Como se dividem nível utilizador, nível projeto, Cloud Secrets e CI
- Naming habitual e riscos de fuga

## Critério de juízo

Se um valor cumprir qualquer destas, prioriza variável de ambiente:

- Não queres metê-lo em Git
- Muda conforme máquina, utilizador ou ambiente
- Só queres que aplique nesta execução

Por isso tokens, interruptores temporários e injeções de CI costumam ir por variáveis de ambiente, não hardcoded.

Conceitos de chaves de configuração: [Referência de configuração](/guide/reference/configuration-reference/); Cloud: [Secrets e variáveis](/guide/web-and-cloud/secrets-and-variables/).

## O que encaixa em variáveis de ambiente

| Tipo | Intenção de exemplo | Não |
|---|---|---|
| Token de autenticação | API key, GitHub PAT | Fazer commit ao repo |
| Interruptor temporário | Nível de log de depuração | Configuração de negócio a longo prazo |
| Injeção de CI | Modo de revisão só de leitura | Token de escrita de produção |
| Subprocesso MCP | Key de serviço de terceiros | Texto em claro em `AGENTS.md` |

## Não trates as variáveis de ambiente como uma gaveta universal

Muitas equipas acabam em «se cabe, à variável de ambiente».

Mais estável é distinguir:

- **Valores sensíveis, diferenças em runtime**: variáveis de ambiente
- **Acordos de equipa a longo prazo**: ficheiro de configuração ou documentação
- **Regras de fluxo de trabalho**: `AGENTS.md` ou Skill

Assim, ao diagnosticar, também sabes melhor onde olhar.

## O que é realmente `.env`

Na primeira vez com variáveis de ambiente, o primeiro que se encontra costuma ser um ficheiro `.env`. Aí também há mais mal-entendidos.

`.env` não é outro centro de configuração. É só um método habitual que muitas Ferramentas oferecem para **carregar variáveis de ambiente em lote** em desenvolvimento local.

Assim:

- A variável de ambiente é «o valor em si»
- `.env` é «um contentor habitual local para esses valores»

Por tanto:

- Que `.env` seja cómodo não implica que seja seguro
- `.env.example` é para nomes de exemplo, não para secrets reais
- Em produção ou CI, o habitual é um gestor de Secrets

## O que não convém resolver só com variáveis de ambiente

- Normas de código, estrutura de diretórios → `AGENTS.md`
- Valores por omissão de modelo consensuados pela equipa → configuração de projeto (parte não secreta)
- Allowlists complexas → [Regras](/guide/customization/rules/allow-and-deny-patterns/)

## Mal-entendidos frequentes

### 1. As variáveis de ambiente não servem para meter toda a configuração

Servem bem para «valores»; não para carregar todo o conjunto de regras de equipa e explicações a longo prazo.

### 2. Meter em `.env` já é seguro?

Se `.env` for commitado, se vir num ecrã partilhado ou se imprimir em logs, também se filtra.

### 3. Após `unset` já não há risco?

O risco pode continuar em:

- Histórico de shell
- Herança de subprocessos
- Logs
- Ficheiros ou capturas guardados antes

### 4. Se em local uso `.env`, em produção basta passar outro `.env`?

Muitas vezes não. Em CI, Cloud e plataformas geridas o habitual é:

- Configurar o Secret na consola da plataforma
- Injetar a variável de ambiente em runtime
- Não deixar o valor real como ficheiro do repo

## Camadas e prioridade (conceito)

```text
Política obrigatória da organização (se existir)
    ↓ sobrescreve
Variáveis de ambiente injetadas por Shell / CI
    ↓ fundem-se com o ficheiro de configuração (regras concretas conforme o oficial)
Ficheiro de config de nível utilizador / projeto
```

Quando a mesma chave está em vários sítios, prevalece a **prioridade da documentação oficial**; ao diagnosticar, imprime a «configuração efetiva» ou olha os logs.

## Uma ordem de juízo habitual

Ao configurar pela primeira vez:

1. É sensível este valor?
2. É para uso local pessoal, ou para CI / Cloud?
3. Há que conservá-lo a longo prazo, ou só existe nesta execução?
4. Vai a variável de ambiente local, Secret de CI ou Secret de Cloud?

Assim é menos fácil o «o valor está correto, mas está no sítio errado».

## Cenários habituais

| Cenário | Prática mais estável |
|---|---|
| Depurar API de terceiros na máquina local | Variável de ambiente local ou `.env`, e ignorar no commit |
| Exemplo de configuração partilhado pela equipa | Fazer commit de `.env.example`, não valores reais |
| GitHub Actions / CI | Secret da plataforma |
| Tarefa Cloud que chama um serviço privado | Cloud Secret |
| Servidor MCP que precisa de ler uma key | Variável de ambiente do processo pai ou injeção de Secret |

Se não tiveres claro: os secrets reais, na medida do possível, não deveriam ficar a longo prazo como conteúdo de ficheiro ordinário no repo.

## Cenários de uso habituais

### Desenvolvimento local

Exporta o token pessoal em `~/.zshrc` ou no `.envrc` de direnv — **não faças commit** de `.env`.

### CLI não interativo

A CI injeta variáveis a partir do armazenamento de secrets e depois corre `codex exec`. Ver [Modo não interativo](/guide/cli/non-interactive-mode/).

### Servidor MCP

O processo MCP costuma herdar o ambiente do pai; na configuração referencia `$VAR` em vez de hardcodificar. Ver [Ligar MCP](/skills/mcp/connect-an-mcp-server/).

### Cloud

Os Secrets ao nível do repo configuram-se na consola Cloud; o nome deve coincidir com a referência dentro da Tarefa.

As variáveis de ambiente encaixam em valores que mudam, são sensíveis ou só fazem falta em runtime; não carregam regras nem explicações a longo prazo.

## Lista de segurança

- [ ] `.env` está em `.gitignore`
- [ ] Desensibilizar tokens antes de imprimir logs
- [ ] Rotacionar keys que se tenham filtrado
- [ ] Scope de privilégio mínimo (token de CI só de leitura, etc.)

## Erros frequentes

- Preencher `.env.example` com keys reais e fazer commit
- Fazer `export` de um token visível num ecrã partilhado
- Assumir que após `unset` os subprocessos continuam seguros — há que olhar a árvore de processos

## Fontes de referência

- Documentação de configuration / environment OpenAI Codex
- stormzhang `18-config.md`
- KimYx0207 CX-04

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / App / IDE / Cloud  
**Base de verificação:** A documentação de configuração atual do OpenAI Help Center continua a oferecer expressões modernas de `~/.codex/.env`, injeção em CI/runtime e Secrets de plataforma; esta página centra-se em princípios estáveis —que valores encaixam em variáveis de ambiente, quais não, e que `.env` é só um contentor local— sem fixar uma lista concreta de nomes de variáveis.  
**Última verificação:** 2026-07-26

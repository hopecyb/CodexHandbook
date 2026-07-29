---
title: Referência de configuração
description: Índice conceptual de chaves de configuração de utilizador e de projeto do Codex — caminhos e campos conforme a documentação oficial.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 60
---

As páginas de «referência de configuração» enjoam fácil: chaves, camadas, sobrescritas por todo o lado. Se deixares clara uma pergunta, compreende-se muito melhor:

> **Que comportamentos devem mudar-se por configuração, e quais não convém resolver com configuração?**

Os ficheiros de configuração costumam unificar comportamentos de **modelo, Sandbox, Aprovação, MCP**, etc. Esta página é um **índice conceptual**; caminhos concretos de ficheiro e nomes de chaves TOML/YAML são definidos pela [documentação OpenAI Codex](https://developers.openai.com/codex) e pela versão que tiveres instalada.

## Um princípio de juízo

Na configuração costuma ir o que **queres que influencie a longo prazo o comportamento**; não convém meter:

- Valores sensíveis
- O texto completo de regras de equipa
- Instruções temporárias de uma só Tarefa

Dividi-lo em três classes clarifica:

- **Preferências de comportamento a longo prazo** → normalmente na configuração
- **Requisitos concretos da Tarefa** → normalmente no Prompt / `AGENTS.md` / Skill
- **Valores sensíveis** → normalmente em variáveis de ambiente ou Secret

Se não tiveres claro, pergunta: estás a mudar o hábito a longo prazo do Codex, ou a encarregar esta Tarefa?

- O hábito a longo prazo costuma ir à configuração
- A instrução da Tarefa atual costuma ir ao Prompt, `AGENTS.md` ou a descrição da Tarefa

## Camadas de configuração

| Camada | Localização (conceito) | Conteúdo típico |
|---|---|---|
| Nível utilizador | `~/.codex/`, etc. | Modelo por omissão, hábitos pessoais de Aprovação |
| Nível projeto | Ficheiro de configuração no repo | Sandbox de equipa, lista de MCP |
| Variáveis de ambiente | Injeção Shell / CI | Secrets, interruptores temporários |
| Gerida | Emitida pela organização | Política obrigatória não sobrescritível |

## O que gere cada camada

- **Nível utilizador**: os teus hábitos por omissão
- **Nível projeto**: o comportamento por omissão que o repo quer partilhar
- **Variáveis de ambiente**: valores temporários em tempo de execução
- **Política gerida**: o que a organização fixa e tu não podes mudar em local

Ao começar não precisas de memorizar «quem sobrescreve quem»; basta saber o que gere cada camada em traços gerais:

- Nível utilizador: «assim gosto de o usar no dia a dia»
- Nível projeto: «este repo quer que todos o usemos mais ou menos assim»
- Variáveis de ambiente: «valores temporários desta execução»
- Política gerida: «limites que a organização já fixou por ti»

Entrada: [Fundamentos de configuração](/guide/customization/configuration/config-basics/) · Enfoque terminal: [Configuração do CLI](/guide/cli/configuration/)

## Índice de domínios de configuração (conceito)

### Modelo e raciocínio

| Intenção | Explicação |
|---|---|
| Modelo por omissão | Model ID das sessões novas |
| Intensidade de raciocínio / reasoning | Nível para Tarefas complexas (se suportado) |
| Temperatura e amostragem | Costuma deixar-se por omissão; fixar ao scriptar |

Contexto: [Modelos e raciocínio](/guide/foundations/models-and-reasoning/)

### Sandbox e rede

| Intenção | Explicação |
|---|---|
| Alcance do sistema de ficheiros | Caminhos escrevíveis; se se permite escrever fora do projeto |
| Acesso à rede | Proibido / limitado / permitido |
| Domínios de saída | Allowlist (se suportado) |

Contexto: [Sandbox e rede](/guide/foundations/sandbox-and-network/)

### Política de Aprovação

| Intenção | Explicação |
|---|---|
| Antes de executar shell | Perguntar sempre / lista de confiança / automático (alto risco) |
| Antes de escrever ficheiros | Igual |
| Chamadas a Ferramentas MCP | Por servidor ou por Ferramenta |

Contexto: [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/) · Matriz: [Matriz de Permissões](/guide/reference/permission-matrix/)

### Espaço de trabalho e CLI

| Intenção | Explicação |
|---|---|
| `cwd` por omissão | Diretório de arranque |
| Por omissão não interativo | Aprovação e Sandbox para exec |
| Nível de log | Subi-lo ao diagnosticar |

### Servidores MCP

| Intenção | Explicação |
|---|---|
| Lista de servidores | Comando, URL, transporte |
| Injeção de variáveis de ambiente | Ligada ao processo MCP, não a Git |

[Ligar MCP](/skills/mcp/connect-an-mcp-server/)

### Extensões IDE / App

Alguns itens só estão na UI de definições da extensão e podem partilhar o mesmo backend de configuração de utilizador que o CLI — conforme a documentação do produto.

[Definições do IDE](/guide/ide/settings/) · [Definições da App de ambiente de trabalho](/guide/desktop-app/settings/)

## Mal-entendidos frequentes

### 1. Nem tudo o configurável deve ir ao ficheiro de configuração

Às vezes encaixa melhor em:

- `AGENTS.md`
- Variáveis de ambiente
- Skill
- Descrição da Tarefa atual

A configuração não é um contentor universal.

### 2. Não precisas de compreender cada chave de configuração desde o princípio

A maioria só precisa de compreender no início:

- Modelo
- Sandbox
- Aprovação
- MCP

Essas quatro classes cobrem a imensa maioria das dúvidas reais.

### 3. A configuração de projeto substitui por completo a documentação da equipa?

A configuração expressa bem «valores por omissão do comportamento do sistema»; não substitui explicações do tipo «porque se faz assim» ou «quando não o fazer».

### 4. Embora haja muitas chaves oficiais, não precisas de aprendê-las todas de uma vez

O que a maioria encontra primeiro são estas quatro:

- Modelo por omissão
- Alcance do Sandbox
- Política de Aprovação
- Ligação MCP

Compreender essas quatro já cobre a maior parte das perguntas da fase de entrada.

## Com variáveis de ambiente

| Tipo | Onde |
|---|---|
| API key, token | Variáveis de ambiente ou gestor de Secrets |
| Interruptores não sensíveis | Variáveis de ambiente ou configuração |
| Normas de código | `AGENTS.md`, não config |

## Como julgar se deve entrar na configuração

Perante «isto deve ir à configuração?», usa estas 4 perguntas:

1. Queres que aplique por omissão a longo prazo?
2. É informação sensível?
3. É hábito pessoal ou regra partilhada do projeto?
4. Estás a ajustar o comportamento do sistema ou só a encarregar esta Tarefa?

Com essas 4, costuma ser mais difícil colocá-lo mal.

## Como decidir ao ajustar o comportamento

Quando quiseres «ajustar o comportamento do Codex»:

1. É comportamento por omissão a longo prazo ou um requisito temporário desta Tarefa?
2. É um valor sensível ou configuração normal?
3. É preferência pessoal ou regra partilhada do projeto?

Assim costuma ficar claro se vai a:

- Ficheiro de configuração
- Variável de ambiente
- `AGENTS.md`
- Skill
- Prompt atual

## Cenários habituais

Estas são as que mais confundem principiantes:

| O que queres fazer | Onde costuma ir |
|---|---|
| Fixar um modelo a longo prazo | Configuração de utilizador ou de projeto |
| A equipa exige correr testes antes de alterar código | `AGENTS.md` |
| Esta Tarefa só permite alterar `docs/` | Prompt atual |
| API key / token | Variável de ambiente ou Secret |
| Ligar um serviço MCP | Configuração de projeto + variáveis de ambiente |

Assim compreende-se melhor do que olhar só a lista de chaves.

Secrets Cloud: [Secrets e variáveis de ambiente](/guide/web-and-cloud/secrets-and-variables/)

## Disciplina de mudança

1. Muda só uma classe de configuração de cada vez e observa uma semana
2. As mudanças de nível projeto passam por PR review
3. Após atualizar o CLI, faz Diff das notas oficiais de migration
4. Não escrevas secrets no ficheiro de configuração e os commits a Git

A configuração é para comportamento por omissão a longo prazo, não para valores sensíveis nem para substituir instruções de Tarefa e regras de equipa.

## Erros frequentes

- Nomes de chaves da documentação que não coincidem com um CLI antigo
- Aliviar o Sandbox na tua máquina pessoal e usá-lo no repo do cliente
- Contradição com instruções de `AGENTS.md` (a configuração permite o que o documento proíbe)

## Fontes de referência
- OpenAI Codex configuration reference
---

**Estado:** verified  
**Produtos aplicáveis:** CLI / App / IDE  
**Base de verificação:** O material de configuração atual do OpenAI Help Center continua a deixar claro que existem veículos de configuração de utilizador como `~/.codex/config.toml` e `~/.codex/.env`; esta página posiciona-se explicitamente como «índice conceptual» e evita fixar nomes de chaves, prioridade de caminhos ou campos de versões antigas como factos, pelo que pode marcar-se `verified`.  
**Última verificação:** 2026-07-26

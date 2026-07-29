---
title: Acesso à Internet
description: Política de saída do Ambiente Cloud, instalação de dependências e risco de fuga de dados — abrir o necessário e manter o limite.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

As Tarefas Cloud costumam precisar de **saída à rede**: descarregar pacotes npm/PyPI, chamar APIs, clonar submódulos. Ao mesmo tempo, o acesso à Internet é uma superfície de alto risco de **fuga de dados**, porque o Agent também pode levar conteúdo do repo ou de Secrets a serviços externos.

## Conteúdo

- Se o Ambiente Cloud pode aceder à Internet por omissão
- Quando abrir e como minimizar a exposição
- Combinação com Sandbox local e política de Secrets

## Limite básico

«Precisa de rede» não significa «deve ter rede sem limites».

Muita gente vê isto como uma disjuntiva:

- Ou não há rede de todo
- Ou, por comodidade, se abre tudo

O mais habitual é dar só a capacidade de rede que a Tarefa precisa, não a mais.

## Duas camadas de «rede»

| Camada | Significado |
|---|---|
| Saída do Ambiente Cloud | Se a máquina remota pode aceder à Internet pública ou APIs internas |
| Ferramentas de rede do Agent | web search, curl, etc. na sessão (a política varia por cliente) |

Esta página centra-se no **Ambiente Cloud**; conceitos gerais em [Sandbox e rede](/guide/foundations/sandbox-and-network/).

## Que local possa não implica que o Cloud possa

Em local podes ter rede porque:

- Já iniciaste sessão em algum serviço
- Tens `.npmrc`, chave SSH ou proxy local
- Estás na VPN da empresa

O Cloud não herda essas condições por omissão. Assim, «em local posso `npm install`» não implica «no Cloud também».

## Cenários típicos que precisam de saída

- Instalar dependências: `npm install`, `pip install`, `go mod download`
- Puxar de um registry privado (faz falta [Secrets](/guide/web-and-cloud/secrets-and-variables/))
- Chamar APIs de terceiros (pagamentos, mapas, gateway LLM, etc.)
- Clonar submódulos ou descarregar recursos de build

## Princípio de juízo

Se uma ação de rede não for imprescindível para completar esta Tarefa, não a abras primeiro.

Por exemplo:

- Aceder à origem de pacotes para instalar dependências costuma ser necessário
- Aceder a sites irrelevantes ou descarregar recursos extra «de passagem» costuma não o ser

## Estratégia recomendada

### Por omissão fechado; abrir conforme a necessidade

1. No [Ambiente Cloud](/guide/web-and-cloud/cloud-environments/), confirma a política de rede atual
2. Lista os **domínios imprescindíveis** (gestor de pacotes, API da empresa); evita «abrir toda a rede»
3. Em `AGENTS.md` indica: que URLs se permitem e proíbe escrever secrets no Prompt
4. Valida com uma Tarefa de teste: pode instalar dependências, mas não sites irrelevantes (se o produto suporte política fina)

### Divisão com Secrets

| Conteúdo | Onde |
|---|---|
| API key, token | Cloud Secrets; não no repo |
| Base URL de API permitida | Documentação ou nome de variável de ambiente (não o valor) |
| Proxy / URL de mirror | Configuração padrão da equipa |

## Mal-entendidos frequentes

### 1. Poder sair à rede é «só mais cómodo», não um tema de segurança

Assim que há rede, converte-se ao mesmo tempo em:

- Problema de download de dependências
- Problema de uso de credenciais
- Problema de saída de dados

### 2. «Se não colar o Secret no Prompt, estou totalmente a salvo»

Se o ambiente puder ler o Secret e além disso puder enviar resultados a um serviço externo, o risco continua a existir.

### 3. web search e saída Cloud são a mesma coisa

Uma é capacidade de rede ao nível de ambiente remoto; a outra, ao nível de Ferramenta de sessão. Não as mistures ao diagnosticar.

### Proteção perante fuga de dados

- Não ponhas a cadeia de ligação a BD de produção na descrição da Tarefa
- Revê se o Agent tenta enviar `.env` ou conteúdo de ficheiros de secrets para o exterior
- Na primeira Tarefa Cloud de um repo não fiável, **proíbe a saída ou experimenta em Sandbox só de leitura**

## Alinhamento com o desenvolvimento local

Que local possa `curl` não implica que o Cloud possa — causas habituais de «Cloud vermelho»:

| Fenómeno | Possível causa |
|---|---|
| Falha ao instalar dependências | Saída proibida ou registry que requer autenticação |
| Submódulo que não desce | Chave SSH não injetada em Secrets |
| Timeout de API interna | Cloud não está na VPN da empresa |

Direção de solução: HTTPS + token, mirror alcançável, ou documentar que o Cloud não suporta recursos de intranet.

## Erros frequentes

- Abrir toda a saída «por comodidade» e correr Tarefas sem limite num repo de produção com Secrets
- Assumir que o Cloud partilha o mesmo `.npmrc` que o portátil (sem push ou sem Secret)
- Confundir «precisa de rede» com «precisa da Ferramenta web search»
- Dar-se conta só ao falhar a instalação de que o Cloud não tem o estado de sessão local

## Lista de aceitação

- [ ] Listar domínios/serviços de saída imprescindíveis para Tarefas Cloud desse repo
- [ ] Secrets configurados e não commitados a Git
- [ ] Num branch de teste, uma instalação + teste completo correto
- [ ] A equipa sabe que dados não devem aparecer em Prompts com rede

## Fontes de referência
- Documentação de rede e segurança OpenAI Codex Cloud
---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud  
**Nota de revisão:** Esta página trata a capacidade de saída por omissão do Ambiente Cloud, a política de domínios e o controlo fino de rede, que dependem muito do produto e da configuração de segurança da organização; sem documentação oficial vigente de política de rede suficientemente sólida, não convém `verified`.  
**Última verificação:** 2026-07-26

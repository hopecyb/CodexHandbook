---
title: Diagnóstico Cloud
description: Índice de falhas habituais em ligação GitHub, ambiente, Secrets, saída à rede e PR.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Quando o Cloud falha, voltar a executar quase nunca ataca a causa raiz.

Os problemas Cloud costumam estar em quatro camadas: **Permissão, diferença de ambiente, credenciais ou rede**. Esta página aponta por sintoma ao tema correspondente, para não fazer retry às cegas no chat.

## Conteúdo

- Perante uma falha de Tarefa, que tipo de causa olhar primeiro
- Divisão com o diagnóstico local
- Quando voltar a validar em local a passos pequenos

## O que olhar primeiro

Se aparecer «Cloud vermelho, local verde», prioriza as condições de execução.

Causas habituais:

- O ambiente remoto não é como o local
- O Cloud não vê o que não fizeste push em local
- O Secret não está bem configurado
- Rede ou Permissões restritas

Ao diagnosticar, olha primeiro se se cumprem as condições; depois, se a Tarefa em si tem problema.

## Triagem rápida

| Sintoma | Olha primeiro |
|---|---|
| Não liga o repo / 403 | [Ligar o GitHub](/guide/web-and-cloud/connect-github/) |
| Falha ao instalar dependências | [Acesso à Internet](/guide/web-and-cloud/internet-access/) · [Ambiente Cloud](/guide/web-and-cloud/cloud-environments/) |
| Pacote privado / API 401 | [Secrets e variáveis](/guide/web-and-cloud/secrets-and-variables/) |
| A Tarefa fica à espera | [Delegar e acompanhar](/guide/web-and-cloud/delegate-and-follow-up/) · pendente de Aprovação? |
| Há commit em local, o Cloud não o vê | Já há push? O Cloud não lê conteúdo local sem push |
| Não abre PR ou não faz push | Proteção de branches · [Criar PR](/guide/web-and-cloud/create-pull-requests/) |
| Testes vermelhos no Cloud, verdes em local | Tabela de alinhamento de versão/ambiente em [Ambiente Cloud](/guide/web-and-cloud/cloud-environments/) |

## Ordem de diagnóstico

Podes seguir esta ordem:

1. Repo e branch corretos?
2. Permissões e autorização suficientes?
3. Ambiente e dependências completos?
4. Secret e rede funcionam?
5. Falta alguma restrição-chave na descrição da Tarefa?

Esvaziar estas camadas primeiro costuma ser mais efetivo do que voltar a correr.

## Ligação e Permissões

**Fenómeno:** OAuth correto mas a Tarefa não pode fazer clone.

**Verifica:**

1. Se o alcance de autorização inclui a organização/repo alvo
2. Se o repo está archived ou há restrições de GitHub App
3. Se usas uma conta pessoal contra um repo que exige SSO da org

**Fenómeno:** push rejeitado.

**Verifica:** proteção de branches, required review, se tentaste push direto a `main`

## Mal-entendidos frequentes

### 1. Um erro na fase de instalação é sempre um problema de dependências?

Também pode ser rede, autenticação, Secret ou Permissão do registry privado.

### 2. Se corre em local, o código está bem e o Cloud «falha às vezes»?

Muitas vezes significa:  
**o teu ambiente local tem precondições que o Cloud não tem.**

### 3. Uma Tarefa pendurada é o modelo «a pensar»?

Também pode ser:

- À espera de Aprovação
- À espera de rede
- À espera do arranque do ambiente
- A executar uma Tarefa de alcance demasiado amplo

## Ambiente e dependências

**Fenómeno:** `command not found` (node, python, etc.).

**Verifica:** se a imagem base inclui o runtime necessário; se em `AGENTS.md` estão versão e comando de instalação.

**Fenómeno:** conflito de lockfile ou timeout de instalação.

**Verifica:** política de saída; mirror do registry; se a dependência precisa de VPN (o Cloud normalmente não está na intranet)

## Secrets e variáveis

**Fenómeno:** variável de ambiente vazia no build.

**Verifica:**

- Se o nome do Secret coincide com a documentação (maiúsculas/minúsculas costumam importar)
- Se está configurado no alcance correto de repo/ambiente
- Se colaste o valor do Secret no Prompt e ficou desensibilizado

Mais: [Secrets e variáveis](/guide/web-and-cloud/secrets-and-variables/)

## Tarefa pendurada e timeout

| Causa | Tratamento |
|---|---|
| À espera de Aprovação humana | Aprovar ou recusar na App/telemóvel |
| Tarefa demasiado grande | Partir em várias delegações pequenas |
| Arranque lento do ambiente | O cold start na primeira vez é normal; se continuar lento, olha a página de estado oficial |

Método de acompanhamento: [Delegar e acompanhar](/guide/web-and-cloud/delegate-and-follow-up/)

## Qualidade da entrega

O Cloud terminou mas o resultado não serve:

1. Contrasta se à descrição da Tarefa faltam critérios de aceitação
2. Faz checkout local do mesmo branch e corre os testes
3. Acrescenta acompanhamento com [Diagnosticar antes de corrigir](/cases/workflows/diagnose-before-fixing/), em vez de refazer toda a Tarefa

## Quando voltar primeiro a local

Se levas duas rondas seguidas a diagnosticar condições Cloud em vez de avançar a Tarefa, volta primeiro a local:

- Faz a reprodução mínima em local
- Escreve com clareza dependências, comandos e forma de Verificação
- Volta a delegar ao Cloud

Costuma poupar mais tempo do que continuar a adivinhar no ambiente remoto.

## Relação com o índice global de diagnóstico

Problemas locais de CLI/IDE/App: [Referência · Diagnóstico](/guide/reference/troubleshooting/). Esta página só cobre a cadeia **específica de Cloud**.

## Fontes de referência

- Documentação de suporte OpenAI Codex Cloud
- stormzhang `10-cloud.md`
- KimYx0207 CX-10～CX-11

---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud  
**Nota de revisão:** O enquadramento de diagnóstico é útil, mas apoia-se em pressupostos atuais de ligação de repo Cloud, Secrets, Aprovação, rede e comportamento de PR; ao mudar o produto Cloud e as capacidades multiplataforma, o mapeamento de sintomas a páginas temáticas deve reescrever-se segundo a documentação oficial de suporte mais recente.  
**Última verificação:** 2026-07-26

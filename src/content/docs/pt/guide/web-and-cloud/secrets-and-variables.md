---
title: Secrets e variáveis de ambiente
description: Injetar com segurança API keys, tokens e variáveis de configuração não sensíveis no Cloud.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

As Tarefas Cloud costumam precisar de aceder a APIs privadas, registries de pacotes ou bases de dados. Essas credenciais devem injetar-se com **Secrets e variáveis de ambiente**, não escrever-se em código, Prompt, issue, chat ou histórico de Git.

## Conteúdo

- Diferença entre Secrets e variáveis de ambiente normais
- Como configurá-las na consola Cloud / definições do repo
- Relação com os Secrets de GitHub Actions

## Distinguir Secret e variável de ambiente

Podes distinguir assim:

- **Secret**: valor que não deve ver-se à ligeira — API Key, palavra-passe de BD, chave privada
- **Variável de ambiente**: configuração que o programa vê; algumas sensíveis, outras não

Nem toda a variável de ambiente é um Secret, mas os Secrets deveriam passar por um mecanismo de injeção seguro, não ir hardcoded.

## Distinção conceptual

| Tipo | Exemplo de conteúdo | Requisitos de armazenamento |
|---|---|---|
| **Secret** | API key, chave privada, palavra-passe de BD | Armazenamento cifrado, mascarado na UI, não em logs |
| **Variável** | `NODE_ENV=production`, feature flags | Pode não cifrar-se; mesmo assim evita filtrar estratégia de negócio |
| **`.env` no repo** | Uso em desenvolvimento local | **Não fazer commit**; no Cloud usa Secrets da consola |

Princípio geral de Contexto sensível: [Contexto sensível](/guide/context/sensitive-context/)

## Mal-entendidos frequentes

### 1. «Só colo a key um momento; não há problema, pois não?»

O risco é alto. Assim que a colas em:

- Conversação
- Issue
- Descrição do PR
- Histórico de shell
- Commit de Git

pode difundir-se por logs, notificações, capturas, histórico e outros colaboradores.

### 2. «Se a meter em `.env` e fizer commit, o Cloud lê-a, não?»

`.env` serve mais para desenvolvimento local, não para entrar no controlo de versões. No Cloud, prioriza a gestão de Secrets da plataforma.

### 3. «O nome do Secret é indiferente enquanto o valor estiver correto»

Muitas falhas de Tarefa não estão no valor, mas em:

- Nome mal escrito
- Alcance incorreto
- O código lê outro nome de variável

Unifica o naming na documentação, código e definições Cloud.

## Princípios de configuração

1. **Privilégio mínimo**: cada Secret só basta para um tipo de Tarefa
2. **Isolamento por repo/ambiente**: staging e production separados
3. **Rotação**: atualiza tokens periodicamente; aceitar que Tarefas antigas falhem
4. **Auditoria**: regista quem acrescentou/modificou que Secrets (processo de equipa)
5. **Nunca eco**: logs de Tarefa e comentários de PR não devem imprimir valores de Secret

## Fluxo mínimo de configuração

Podes seguir esta ordem:

1. Lista que serviços externos a Tarefa precisa realmente
2. Prepara só os Secrets necessários para esta Tarefa; não dês de entrada privilégios completos de produção
3. Na documentação escreve «que nomes de Secret fazem falta», não os valores
4. Corre uma Tarefa de teste e verifica a leitura
5. Depois a Tarefa real

## Fluxo de trabalho recomendado

```text
1. Acrescentar Secret nas definições Cloud / GitHub (nome em SNAKE_CASE maiúsculas, p. ex. NPM_TOKEN)
2. Em AGENTS.md indicar «faz falta NPM_TOKEN para instalar pacotes privados», sem o valor
3. Lançar Tarefa Cloud e confirmar que o ambiente lê (se falhar, revê ortografia do nome e alcance)
4. CI usa Secrets de GitHub Actions com naming alinhado ao do Cloud para documentar melhor
```

Ao combinar com [Integração com GitHub](/guide/integrations/github/), prioriza Secrets nativos da plataforma; não deixes que o Agent copie chaves do body do issue.

## Quando tratá-lo como Secret

Se não tiveres claro se um valor deve ser Secret, pergunta:

- Se se filtrar, implica risco de dinheiro, dados, Permissões ou negócio?

Se a resposta for «sim», não deveria aparecer em documentação pública, Prompt, chat nem repo.

## Acesso à Internet e Secrets

Algumas Tarefas precisam de sair à rede para descarregar pacotes ou chamar APIs:

- A política de saída é definida pelas normas de segurança da organização
- Mesmo com saída, não coles Bearer tokens no Prompt
- Em repos não fiáveis, proíbe por omissão ler Secrets de produção

## Erros frequentes

| Erro | Risco |
|---|---|
| Fazer commit de `.env` ao repo | Fuga permanente |
| Colar a key em issue/descrição de Tarefa | Difusão por logs e notificações |
| Usar Secret de produção em Tarefas experimentais | Operação errada sobre dados de produção |
| Nome de Secret distinto do código | Falha silenciosa da Tarefa |
| Por comodidade, dar um token com privilégios de admin | Superfície de descontrolo demasiado grande |

## Lista de aceitação

- [ ] Sem secrets hardcoded no repo (podes usar um secret scanner)
- [ ] Lista de Cloud Secrets alinhada com os nomes da documentação
- [ ] Logs de falhas de Tarefa sem texto em claro de Secrets
- [ ] Processo de saída/rotação definido

## Fontes de referência
- OpenAI Codex Cloud secrets
---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud  
**Nota de revisão:** Esta página concreta bastante a localização de configuração de Cloud Secrets, o alcance por repo e a relação com Secrets de GitHub Actions, mas falta documentação oficial vigente de gestão de Secrets suficientemente sólida para o demonstrar item a item; até completar essa base, convém `outdated`.  
**Última verificação:** 2026-07-26

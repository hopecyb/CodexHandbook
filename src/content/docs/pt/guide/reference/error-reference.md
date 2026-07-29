---
title: Referência de erros e avisos
description: Índice de aprendizagem de mensagens de erro habituais, códigos de saída e causas de falha — aponta a páginas de diagnóstico; não substitui o suporte oficial.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 100
---

Perante um erro, muita gente fica a olhar essa linha em inglês e tenta adivinhar. Classificar o problema primeiro costuma ser mais efetivo.

Ao ver um erro, julga primeiro se parece um problema de **autenticação, Permissão, ambiente, rede ou lógica da Tarefa**. Esta página resume o sentido de mensagens frequentes e o passo seguinte; não é um dicionário completo de erros. O comportamento mais recente é definido pela documentação oficial e pela saída do cliente.

## Como ler um erro ao vê-lo

Perante um erro, faz primeiro estes três passos:

1. Olha a que classe pertence a palavra-chave: autenticação, Permissão, ambiente, rede, Contexto
2. Olha em que fase ocorre: arranque, instalação, execução, push, saída
3. Salta para a página temática correspondente a diagnosticar

Costuma ser mais rápido do que adivinhar a causa.

Índice global: [Diagnóstico](/guide/reference/troubleshooting/)

## Autenticação e conta

| Mensagem ou fenómeno | Possível causa | Passo seguinte |
|---|---|---|
| Authentication failed / 401 | Token caducado, sem iniciar sessão | [Iniciar sessão e autenticação](/guide/getting-started/sign-in-and-authentication/) |
| Organization policy | A organização desativa a função ou o modelo | Contacta o administrador; olha o plano em [Conta e acesso](/guide/getting-started/account-plans-and-access/) |
| Rate limit / 429 | Demasiados pedidos ou quota | Tenta de novo mais tarde; olha o uso do plano |

## Mal-entendidos frequentes

### 1. Um erro longo não implica que o problema seja mais complexo

Muitos erros longos só empilham Contexto; o útil costuma ser esse pequeno troço de palavras-chave.

### 2. Um código de saída diferente de zero não implica que o modelo «não saiba fazê-lo»

Pode ser só:

- Sem Permissão
- Sem rede
- Formato de saída que não cumpre o requisito
- A Tarefa em si disparou uma condição de falha

### 3. 401 / 403 / 429 não são a mesma coisa

Diferem muito:

- `401` costuma ser «não autenticado bem»
- `403` costuma ser «sei quem és, mas não te deixo fazê-lo»
- `429` costuma ser «vais demasiado depressa; volta mais tarde»

### 4. A última linha nem sempre é a mais importante

Às vezes a última linha só é o «resumo final da falha»; a informação útil está umas linhas mais acima, por exemplo:

- Que passo o disparou
- Que ficheiro, comando ou Ferramenta falhou
- Se há uma pista de causa mais original

## CLI e comandos

| Mensagem ou fenómeno | Possível causa | Passo seguinte |
|---|---|---|
| command not found: codex | Não instalado ou PATH | [Instalar CLI](/guide/getting-started/install-cli/) |
| Config parse error | Sintaxe TOML/YAML | [Configuração do CLI](/guide/cli/configuration/) |
| Permission denied (write) | Sandbox ou Aprovação rejeitada | [Aprovações e Sandbox](/guide/cli/approvals-and-sandbox/) |
| Código de saída diferente de zero (exec) | Falha de Tarefa ou critério de finalização não cumprido | Olha logs de stderr; endurece o Prompt |

## Classifica primeiro

Se não souberes por onde começar, divide o erro em 5 classes:

| Classe | Olha primeiro |
|---|---|
| Autenticação | Conta, token, estado de início de sessão |
| Permissão | Aprovação, Sandbox, Permissões do repo |
| Ambiente | Instalação, PATH, configuração, dependências |
| Rede | Saída, proxy, alcançabilidade de serviços remotos |
| Lógica da Tarefa | Prompt, ficheiros de entrada, requisitos de saída |

Se chegares a classificá-lo assim, a direção de diagnóstico desvia-se menos.

## Como usá-lo

Usa-o como tabela de desvio de erros, não como dicionário completo:

- Vês a palavra-chave
- Encontras a classe correspondente
- Vais à página de diagnóstico mais concreta

Se ainda não perceberes, reformula o erro como uma pergunta mais direta:

- Não iniciei sessão bem?
- Sem Permissão?
- Este comando nem sequer está instalado?
- A rede não chega?
- O requisito que dei ao Codex não estava claro?

Se ainda não souberes aonde olhar, usa esta página para classificar o problema numa categoria ampla.

## Permissões e Sandbox

| Mensagem ou fenómeno | Possível causa | Passo seguinte |
|---|---|---|
| User rejected tool call | Tu ou a política rejeitastes a operação | Confirma se deveria Aprovar-se; ou muda a Tarefa |
| Sandbox violation | Caminho de escrita ou comando fora de alcance | [Sandbox e rede](/guide/foundations/sandbox-and-network/) |
| Network access denied | Saída à rede proibida | Cloud: [Acesso à Internet](/guide/web-and-cloud/internet-access/) |

## Cloud e GitHub

| Mensagem ou fenómeno | Possível causa | Passo seguinte |
|---|---|---|
| Repository access denied | Alcance OAuth insuficiente | [Ligar o GitHub](/guide/web-and-cloud/connect-github/) |
| Clone failed | Nome do repo, Permissão, rede | [Diagnóstico Cloud](/guide/web-and-cloud/troubleshooting/) |
| Secret not found | Nome incorreto ou alcance | [Secrets e variáveis](/guide/web-and-cloud/secrets-and-variables/) |
| Push rejected | Proteção de branches | [Criar PR](/guide/web-and-cloud/create-pull-requests/) |

## MCP e extensões

| Mensagem ou fenómeno | Possível causa | Passo seguinte |
|---|---|---|
| MCP server failed to start | Caminho do comando, dependências que faltam | [Ligar MCP](/skills/mcp/connect-an-mcp-server/) |
| Tool timeout | API externa lenta ou caída | Retry; olhar logs de MCP |
| Unknown tool | Configuração e versão do servidor inconsistentes | Reiniciar a sessão; atualizar a configuração |

## Contexto e modelo

| Mensagem ou fenómeno | Possível causa | Passo seguinte |
|---|---|---|
| Context length exceeded | Conversação ou ficheiros @ demasiado grandes | [Compactação](/guide/context/compaction/) · reduzir o alcance |
| Model not available | Região ou plano não o suportam | [Modelos e raciocínio](/guide/foundations/models-and-reasoning/) |

## Como usar esta página

1. **Copia a frase-chave** para a pesquisa do cliente ou deste manual
2. Salta pela tabela à página temática e executa a lista de verificação
3. Se continuar sem resolver: conserva o log completo e olha [Recursos oficiais](/guide/reference/official-resources/)

## Ao reportar um problema, isto ajuda mais

- Tipo e versão do cliente (App / CLI / IDE / Cloud)
- Sistema operativo
- Texto completo do erro desensibilizado
- Se é não interativo, se é CI

## Ordem de depuração

1. Captura ou copia o erro completo; não só a última frase
2. Classifica primeiro; não adivinhes detalhes técnicos de golpe
3. Lembra o que acabaste de mudar
4. Muda só uma variável e tenta de novo uma vez
5. Se continuar a falhar, pergunta ou consulta o oficial com a informação completa

Assim evitas misturar várias alterações, e a outros resulta mais fácil ajudar-te a localizar.

## Fontes de referência
- Documentação de suporte OpenAI Codex
---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página posiciona-se como «índice de desvio de erros», não como dicionário completo; o método de classificação são cinco classes —autenticação, Permissão, ambiente, rede, lógica da Tarefa— contrastadas com os capítulos atuais de CLI, Cloud, Permissões e configuração, sem depender de uma tabela fixa de códigos de erro.  
**Última verificação:** 2026-07-26

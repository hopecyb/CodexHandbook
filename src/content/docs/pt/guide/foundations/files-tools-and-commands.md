---
title: Arquivos, Ferramentas e comandos
description: Explica como o Codex lê e escreve arquivos, roda comandos e usa Ferramentas.
locale: pt
source_locale: zh-CN
source_revision: 8c0e875
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

A maior diferença em relação a um chatbot comum é que ele age por meio de **Ferramentas**.

Arquivos são onde ele altera coisas; comandos são como ele executa ações; Ferramentas são a porta de entrada para agir.

O Codex age no mundo real por meio de **Ferramentas**:

- Ler/escrever arquivos do projeto
- Rodar comandos no terminal (quando Permissão e política de Sandbox permitem)
- Buscar na web, abrir o navegador etc. (conforme capacidade e política do produto)

## Separe estes três termos primeiro

| Termo | Significado |
|---|---|
| Arquivo | Conteúdo real do projeto: código, docs, configuração |
| Comando | Uma ação no terminal: build, teste, busca |
| Ferramenta | Porta de capacidade do Codex para ler/alterar arquivos, rodar comandos, buscar na web |

Outro ângulo:

- **Arquivo** é o material
- **Comando** é a ação
- **Ferramenta** é o utensílio com que ele pega o material e age

## Processo de trabalho comum

Depois que você dá uma Tarefa, o Codex costuma fazer coisas assim:

1. Ler alguns arquivos relacionados para entender a estrutura do projeto
2. Se preciso, buscar texto, abrir diretórios, ver configuração
3. Se precisar verificar o resultado, rodar um comando — por exemplo teste ou build
4. Depois de alterar arquivos, entregar as mudanças para você revisar

Por isso, quando ele «quer ler um arquivo» ou «quer rodar um comando», em geral está dando um passo normal da Tarefa.

## Mal-entendidos comuns

### 1. Se ele pode rodar comandos, pode fazer qualquer coisa?

Não necessariamente.

Se pode ou não também depende de:

- Quais Ferramentas a entrada de produto atual oferece
- Se o Sandbox permite
- Se este passo precisa da sua Aprovação
- Se a política da equipe impõe limites extras

### 2. Ele deveria rodar menos comandos e só alterar arquivos — mais rápido?

Não necessariamente.

Às vezes rodar um comando de verificação detecta o problema mais cedo. Por exemplo: rodar testes depois de alterar código é mais estável do que descobrir depois que quebrou.

### 3. E se eu não entendo o comando?

Se não entender de imediato, pergunte de frente:

```text
O que este comando faz? O que ele altera? O que acontece se eu não rodá-lo?
```

## Um critério simples de julgamento

Quando o Codex for ler, alterar arquivos ou rodar comandos, use estas três perguntas:

1. Este passo tem relação com o meu objetivo?
2. O alcance está no diretório ou nos arquivos que eu esperava?
3. Se der errado, consigo desfazer com facilidade?

Se alguma das três não tiver resposta, peça explicação primeiro.

## Princípios de uso

1. **Alcance mínimo necessário**: indique diretórios e arquivos; evite «alterar o repositório inteiro à vontade»
2. **Comandos perigosos precisam de Aprovação**: apagar, fazer push, alterar configuração do sistema etc.
3. **Há método na escolha de Ferramentas**: veja [Escolha de Ferramentas](/pt/guide/tools/tool-selection/)

Entradas de produto diferentes têm painéis de Ferramentas e formas de confirmação diferentes; detalhes nos guias de cada produto.

O Codex não só «fala» — ele age de verdade por arquivos, comandos e Ferramentas. Por isso alcance e risco precisam de atenção.

Próximas leituras sugeridas:

1. [Permissões e Aprovação](/pt/guide/foundations/permissions-and-approvals/)
2. [Sandbox e rede](/pt/guide/foundations/sandbox-and-network/)
3. [Rodar a primeira Tarefa](/pt/guide/getting-started/run-your-first-task/)

---

**Status:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Esta página só explica a distinção conceitual entre arquivos, comandos e Ferramentas e o método de julgamento de risco; links internos e formulações de exemplo foram revisados, e o texto não depende de fatos de produto voláteis.  
**Última verificação:** 2026-07-26

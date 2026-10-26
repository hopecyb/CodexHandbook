---
title: Permissões e sandbox
description: Compreenda sandbox, aprovações, acesso à rede e limites entre execução local e Cloud numa única sequência de decisão.
legacyVerification:
  status: verified
  products: App / CLI / IDE / Cloud
  basis: Comparado com as orientações atuais do Codex sobre sandbox, aprovações e segurança. Esta página distingue os limites de execução impostos pelo sistema operativo, a política de aprovação, as restrições da tarefa e a revisão humana, e explica separadamente os modelos de rede local e Cloud.
  checkedAt: '2026-08-26'
locale: pt
source_locale: zh-CN
source_revision: "6b5fcb8"
translation_status: reviewed
translated_at: 2026-09-20
sidebar:
  order: 14
reviewed_at: '2026-10-26'
---

Para usar o Codex em segurança, considere duas camadas de controlo ao mesmo tempo: **a sandbox determina até onde uma ação pode chegar tecnicamente; a política de aprovação determina se é preciso pedir-lhe autorização antes de ultrapassar o limite atual.**

![Fluxo da sandbox e da aprovação no Codex: a ação encontra o limite da sandbox, pede aprovação humana ao ultrapassá-lo e deixa provas para verificação](/diagrams/sandbox-approval-flow-pt.svg)

## Comece por esta distinção

| Controlo | Pergunta a que responde | Objetos típicos |
|---|---|---|
| Sandbox | Até onde esta ação pode chegar? | Ficheiros do projeto, caminhos exteriores, capacidades do sistema, rede |
| Política de aprovação | É preciso perguntar a uma pessoa antes de ultrapassar o limite atual? | Instalar dependências, aceder à rede, escrever fora do projeto, iniciar aplicações |
| Restrições da tarefa | O que deve ou não acontecer nesta tarefa? | Diretórios permitidos, ações proibidas, comandos de aceitação |
| Revisão humana | O resultado executado é aceitável? | diff, registos, testes, efeitos externos |

As restrições da tarefa não substituem a sandbox, e a sandbox não substitui a revisão final. Cuidam, respetivamente, da intenção, do limite de execução e da aceitação do resultado.

## Como uma ação atravessa os limites de segurança

Quando o Codex se prepara para executar um comando ou chamar uma ferramenta, pode compreender a sequência assim:

1. Verificar primeiro se a ação cabe na sandbox atual.
2. Se couber, executá-la e registar a saída; pode não aparecer qualquer janela de aprovação.
3. Se ultrapassar o limite, pedir autorização de acordo com a política ou recusá-la diretamente.
4. Pode recusar, pedir uma ação mais limitada ou aprovar apenas esta operação concreta.
5. Depois da execução, verificar o diff, os testes e o estado dos sistemas externos para confirmar que o resultado cumpre o objetivo.

A sandbox também limita os subprocessos e comandos iniciados pelo Codex. Uma ação não contorna o limite só por ocorrer dentro de um script.

## Os limites locais e os do Cloud são diferentes

| Ambiente | Principal forma de isolamento | Rede | O que deve verificar |
|---|---|---|---|
| tarefa local na App / CLI / IDE | Sandbox ao nível do sistema operativo e política de aprovação atual | Uma tarefa local não deve depender por defeito da Internet; aprove ou configure explicitamente quando necessário | Âmbito do workspace, comandos, caminhos exteriores e finalidade do acesso à rede |
| tarefa Cloud | Contentor isolado gerido pela OpenAI | A fase de preparação pode ter rede conforme a configuração; na fase Agent a rede fica desligada por defeito, salvo ativação explícita | Repositório, configuração do ambiente, domínios permitidos, diff devolvido e provas de verificação |

Os secrets do ambiente Cloud são usados na fase de preparação e removidos antes do início da fase Agent. Continue a aplicar privilégios mínimos e não coloque credenciais de produção sem relação com a tarefa no ambiente.

## Quatro verificações perante um pedido de aprovação

### 1. Comparar com a tarefa

Esta ação serve realmente o objetivo atual? «Pode ser útil» não é justificação suficiente para a aprovar.

### 2. Comparar com o âmbito

O pedido acede ao projeto, a um diretório exterior, à rede ou a uma aplicação do sistema? Caminhos, domínios e comandos concretos são mais fáceis de avaliar.

### 3. Comparar os efeitos

A ação limita-se a ler ou vai escrever ficheiros, instalar software, enviar dados ou alterar um estado remoto? Os efeitos externos exigem normalmente mais cautela do que uma alteração local reversível.

### 4. Comparar verificação e recuperação

Como confirmar o sucesso depois da execução? É possível reverter em caso de falha? Se não houver resposta a estas perguntas, peça primeiro ao Codex que explique ou proponha uma alternativa menor.

## Exemplo concreto: instalar dependências

Suponha que o Codex pede para executar:

```bash
pnpm install
```

Não avalie apenas se o comando lhe é familiar. Confirme:

- se a tarefa precisa realmente de dependências em falta;
- se o comando será executado no diretório correto do repositório;
- a que registo de pacotes terá de aceder;
- se vai alterar o lockfile;
- que teste ou build será executado depois da instalação.

Se a tarefa consiste apenas em verificar código existente e as dependências já estão instaladas, pode recusar e pedir que se use primeiro o ambiente atual.

## Declarar limites no prompt

Pode indicar o âmbito executável diretamente na tarefa:

```text
Modifica apenas src/auth e tests/auth.
Usa primeiro as dependências já instaladas; não acedas à Internet nem atualizes versões.
Se for indispensável aceder a um caminho fora do projeto ou à rede, explica
primeiro o objetivo, o destino e a operação mínima.
No fim, executa pnpm test --filter auth e comunica a saída e os riscos restantes.
```

Este texto esclarece a intenção, mas os limites reais de execução continuam a ser definidos pela sandbox, pela política de aprovação e pela configuração gerida pela equipa.

## Equívocos frequentes

- **Uma janela de aprovação significa sempre perigo**: instalações normais, acesso à rede ou escrita fora do projeto também podem desencadear aprovação; o essencial é a necessidade e o âmbito.
- **Se não houver janela, a ação é completamente segura**: pode já estar dentro da sandbox, mas as alterações reais continuam a exigir revisão.
- **Uma aprovação abre o acesso para sempre**: duração e âmbito dependem do produto e da política; leia o pedido com atenção.
- **Os sub-Agents têm outras permissões**: herdam a sandbox e o modo de permissões da tarefa principal; não recebem naturalmente poderes superiores.
- **Hooks substituem a sandbox**: são uma camada adicional de proteção e auditoria, não uma alternativa ao isolamento imposto pelo sistema operativo.

Para definições do produto, consulte [Aprovações e sandbox na CLI](/pt/guide/cli/approvals-and-sandbox/) e [Definições da App de desktop](/pt/guide/desktop-app/settings/). Para formular tarefas, consulte [Restrições e limites](/pt/prompts/constraints-and-boundaries/).

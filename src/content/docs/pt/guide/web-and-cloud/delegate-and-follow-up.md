---
title: Delegar e acompanhar
description: Entregar Tarefas ao Cloud a partir da App, IDE ou telemóvel, e continuar a ver, Aprovar e iterar longe do computador.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Delegar** é entregar a Tarefa ao Cloud para que se execute num ambiente remoto; **acompanhar** é, enquanto corre ou ao terminar, ver o progresso, completar o Contexto, Aprovar operações perigosas e pedir alterações. É o fluxo central de «continuar a avançar longe do posto de trabalho».

## Conteúdo

- Quando delegar ao Cloud em vez de correr em local
- Diferenças ao lançar a delegação a partir de cada entrada
- Como fazer um acompanhamento efetivo e evitar «lanço e esqueço»

## Como vai este tipo de fluxo

Uma Tarefa Cloud parece-se mais a isto:

- Primeiro formular bem a Tarefa
- Começa a correr em remoto
- A meio do caminho pode fazer falta uma restrição ou uma Aprovação
- Ao terminar ainda há que olhar o Diff, o PR e decidir se continuar

O Cloud só muda o lugar de execução; o acompanhamento e o juízo continuam a ser teus.

## Para quem

| Cenário | Sugestão |
|---|---|
| Build/testes longos | Delega ao Cloud; em local continua com outra coisa |
| Trajeto / intervalos entre reuniões | Ver estado e Aprovar passos-chave no telemóvel |
| Precisas de ambiente padronizado | Cloud + [configuração de ambiente](/guide/web-and-cloud/cloud-environments/) |
| Tentativa-erro rápida em local | Prioriza [App de ambiente de trabalho](/guide/desktop-app/) ou [IDE](/guide/ide/local-task-workflow/) |

## Quando convém delegar

Se não tiveres claro se delegar:

- A Tarefa ainda se experimenta uma e outra vez e queres ir vendo e mudando: primeiro local
- A Tarefa demora muito, queres afastar-te do computador ou entregá-la a um ambiente unificado: então Cloud

## Verificação antes de delegar

- [ ] [GitHub ligado](/guide/web-and-cloud/connect-github/); estratégia de branch alvo clara
- [ ] A descrição da Tarefa inclui: objetivo, alcance, proibições, forma de aceitação (ver [Anatomia de uma boa Tarefa](/prompts/task-anatomy/))
- [ ] Se fizerem falta commits locais sem push, faz push primeiro ou faz-o em local
- [ ] Secrets / [necessidade de saída à rede](/guide/web-and-cloud/internet-access/) prontos

## Mal-entendidos frequentes

### 1. Após delegar, já não é preciso olhar

É o que mais tempo perde. Se a direção se desviar, quanto mais tarde o detetares, mais retrabalho.

### 2. Acompanhar é «empurrar o progresso»

O acompanhamento de mais valor são estas ações:

- Completar Contexto que faltava
- Acotar o alcance
- Recusar operações perigosas que não devem passar
- Ao terminar, pedir mais correções

### 3. Delegar e local são opostos

Um fluxo real muito habitual é:  
**explorar em local → delegar a Tarefa longa → retomar o fecho em local.**

## Delegação a partir de cada entrada (conceito)

| Entrada | Peculiaridade |
|---|---|
| [App de ambiente de trabalho · Tarefas locais e Cloud](/guide/desktop-app/local-and-cloud-tasks/) | Mesma vista de projeto; mudar entre local/Cloud |
| [IDE · Tarefa Cloud](/guide/ide/cloud-task-workflow/) | Leva o código selecionado e o Contexto de ficheiros abertos |
| Web / telemóvel | Ver leve, Aprovar, acrescentar uma linha de acompanhamento |

Botões e nomes conforme o produto atual.

## Ritmo de acompanhamento recomendado

```text
Lançar delegação → confirmar que o ambiente arrancou → (opcional) olhar logs a meio
    → Aprovar em pontos de operação perigosa → ao terminar olhar Diff/PR
    → Se não convencer: instrução adicional ou nova Tarefa de acompanhamento
```

Ordem de ação:  
**Após enviá-la, olha pelo menos uma vez a meio do caminho e uma vez ao terminar.**

### Intervenção a meio do caminho

- **Completar Contexto**: se faltava um ficheiro ou uma restrição, diz-o numa mensagem de acompanhamento; evita reabrir a Tarefa e perder histórico
- **Acotar alcance**: se se desviar, deixa claro «deixa de alterar X; só faz Y»
- **Aprovar**: ver [Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/) — melhor um passo mais lento do que aprovar em lote shells desconhecidos

### Ao terminar

- Rever o Diff no fluxo de [Criar PR](/guide/web-and-cloud/create-pull-requests/)
- Validar com [Revisão de código Cloud](/guide/web-and-cloud/code-review/) ou fazendo checkout local do branch
- Se for preciso continuar a alterar: delegar de novo sobre o mesmo PR, ou retomar em local

## Combinar com notificações

Ativa [notificações de ambiente de trabalho](/guide/desktop-app/notifications/) ou push móvel para evitar que a Tarefa fique pendurada sem Aprovação. A equipa deveria acordar: em que franjas deve haver alguém que possa Aprovar repos relacionados com produção.

## Erros frequentes

- Texto de delegação demasiado vago; o Cloud «compreende» sozinho e faz um refactor amplo
- Local a meio sem commit, e se delega ao Cloud a partir de main remoto
- Nunca olhar a meio; ao terminar descobres que a direção era incorreta e se perde toda a ronda de ambiente
- No PR só «LGTM» sem correr testes
- Confundir «execução remota» com «responsabilidade remota»

## Lista de aceitação

- [ ] Podes lançar e completar uma Tarefa Cloud a partir de pelo menos uma entrada
- [ ] Podes acrescentar uma restrição efetiva enquanto a Tarefa corre
- [ ] Produz PR ou branch, e passou por revisão humana do Diff

## Fontes de referência

- Documentação de Tarefas OpenAI Codex Cloud
- stormzhang `10-cloud.md`, `27-mobile.md`
- KimYx0207 CX-10
- Capítulos de colaboração App/Cloud de codex.bozhouai.com

---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud / App / IDE / Mobile  
**Nota de revisão:** Esta página depende da forma atual do produto para lançar ou acompanhar Tarefas Cloud a partir da App, IDE, Web e telemóvel; essas capacidades multiplataforma mudaram depressa nos últimos meses; até alinhar item a item com a documentação oficial vigente, convém `outdated`.  
**Última verificação:** 2026-07-26

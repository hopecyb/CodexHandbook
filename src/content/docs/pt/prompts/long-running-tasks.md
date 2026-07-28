---
title: Prompts para tarefas longas
description: Divida em fases, checkpoints e informação de transferência.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Falhas habituais em tarefas longas:

- fazer demais de uma vez
- sem checkpoints a meio
- a Thread alonga-se e restrições anteriores e posteriores começam a contradizer-se

O essencial numa tarefa longa não é alongar o Prompt — é dividir a tarefa numa sequência de fases com checkpoints.

Divida a tarefa longa em fases; cada fase com aceitação:

```text
Fase 1: só investigar e listar opções (sem alterar código)
Fase 2: implementar a mudança mínima
Fase 3: acrescentar testes e executar…
No fim de cada fase, pare e espere a minha confirmação.
```

## Por que tarefas longas desviam com facilidade

Costumam misturar vários tipos de trabalho:

- entender o problema
- desenhar a abordagem
- implementar mudanças
- correr verificação
- escrever notas de transferência

Se tudo for «faça tudo de uma vez», o risco sobe de forma clara.

## Mal-entendidos comuns

### 1. Tarefa longa ≠ tarefa curta com mais detalhe

Tarefas longas pedem **gestão por fases**, não só mais contexto.

### 2. Listar fases ainda não basta

Cada fase deve ter uma saída clara, por exemplo:

- só plano, sem alterar código
- só implementação mínima
- só testes e verificação

### 3. Uma Thread até ao fim não é sempre melhor

Quando a tarefa é longa, transferir, resumir e reabrir a Thread costuma ficar mais claro.

## Uma divisão suficiente

Diante de uma tarefa longa, comece por estas 4 fases:

1. Investigação: entender o problema, sem agir
2. Plano: passos, riscos, verificação
3. Execução: mudança mínima
4. Verificação: correr checagens, escrever conclusões, preparar transferência

## Uma formulação mais prática

```text
Fase 1: investigue e liste opções; não altere código; espere a minha confirmação
Fase 2: faça só a mudança mínima; ao terminar, relate o alcance do impacto
Fase 3: acrescente verificação e execute as checagens relevantes
Fase 4: resuma mudanças, riscos e recomendações seguintes
```

O melhor é poder parar e inspecionar em cada fase — não fazer tudo de um fôlego.

Combinar com: [Progresso e reorientação](/guide/agent-work/progress-and-steering/) · [Transferência e retoma](/guide/agent-work/handoff-and-resume/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve divisão de tarefas longas e transferência; links e exemplos de fases foram revistos; o corpo não depende de factos voláteis do produto.

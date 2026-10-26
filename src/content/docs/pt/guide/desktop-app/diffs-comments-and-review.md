---
title: Diferenças, comentários e revisão
description: Antes de fazer commit ou push, use o painel de revisão para confirmar as alterações reais e deixar comentários por linha.
legacyVerification:
  status: "verified"
  products: "App、CLI、IDE"
  checkedAt: "2026-08-26"
locale: pt
source_locale: zh-CN
source_revision: "32ee40c"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
sidebar:
  order: 50
---

O resumo da conversa é a explicação do Codex sobre o trabalho; o diff de Git mostra o que realmente mudou nos arquivos. O painel de revisão da App de desktop permite ver diferenças, acrescentar comentários a linhas específicas e decidir que alterações preparar, reverter, submeter ou enviar.

O projeto tem de estar num repositório Git para utilizar o painel de revisão completo e `/review`.

## Dois níveis de revisão

Primeiro, verifique pessoalmente o escopo das alterações. Depois, invoque um reviewer independente para procurar problemas na implementação:

1. Abra o painel de revisão e examine a quantidade de arquivos e os respetivos caminhos.
2. Escolha **Last turn** para confirmar exatamente o que mudou nesta interação.
3. Alterne entre **Unstaged**, **Staged**, **Commit** e **Branch** para confirmar o escopo da revisão.
4. Execute `/review` na área de entrada.
5. Escolha comparar com uma branch de referência, rever alterações ainda não submetidas, inspecionar um commit específico ou usar critérios personalizados.
6. Leia as conclusões por ordem de prioridade e só depois decida o que corrigir.

O reviewer de `/review` é, por predefinição, apenas de leitura e não modifica o worktree. Se depois pedir ao Codex que corrija uma conclusão, continuam a aplicar-se as regras originais de sandbox e aprovação.

## Critérios de revisão reutilizáveis

```text
Revise as alterações ainda não submetidas, concentrando-se em:
- alterações fora do escopo da tarefa;
- regressões de comportamento, casos-limite ou problemas de segurança;
- cobertura dos caminhos de falha pelos testes;
- coerência entre documentação e implementação.

Apresente primeiro os problemas por ordem de gravidade. Para cada um,
indique arquivo, localização, prova e a menor correção razoável.
Se não encontrar problemas, diga isso explicitamente e aponte os riscos
de teste ainda não cobertos.
```

## Reduzir ambiguidades com comentários por linha

Passe o cursor sobre uma linha suspeita, selecione o **+** que aparece e escreva um comentário concreto. Depois de deixar todos os comentários, envie uma instrução clara:

```text
Resolva os comentários que deixei nas linhas. Mantenha as alterações tão
limitadas quanto possível; no fim, execute novamente os testes relevantes
e apresente o novo diff.
```

Um comentário útil explicita o risco ou a condição de aceitação, por exemplo: «O que devolve isto quando o array está vazio?». Dizer apenas «Isto está errado» costuma ser insuficiente.

## Preparar e reverter alterações

O painel de revisão permite preparar, retirar da preparação ou reverter o diff inteiro, um arquivo ou um hunk isolado. Reverter descarta alterações. Antes de o fazer, confirme que não está a descartar alterações do usuário que já existiam antes de a tarefa começar.

Use uma ordem de aceitação consistente: escopo → comportamento → testes → segurança → facilidade de manutenção. Para mais métodos, consulte [Rever diferenças](/pt/guide/quality/review-diffs/).

## Fonte oficial

- [Revisão de código](https://learn.chatgpt.com/docs/code-review)

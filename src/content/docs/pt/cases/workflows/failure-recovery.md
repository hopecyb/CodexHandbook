---
title: Recuperação de falhas
description: Quando a tarefa se desvia, os testes ficam vermelhos ou o contexto se esgota — como recuar com segurança e continuar.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Recuperação de falhas** trata de como estabilizar a cena quando a tarefa se desvia ou é interrompida e depois avançar. Este capítulo oferece um ciclo repetível **detetar → conter → recuperar → retrospectiva**, combinável com [desfazer e recuperar](/guide/getting-started/undo-and-recover/) e [gestão de tarefas longas](/cases/workflows/long-running-task-management/).

## Foco desta página

- Quando fazer `git stash`, reverter commit ou abrir uma nova thread
- Como organizar a informação de falha no prompt da ronda seguinte
- Como a equipa regista problemas recorrentes

## Sinais de falha

| Sinal | Ação possível |
|---|---|
| Falhas de teste em larga escala | Parar a execução; reduzir o diff |
| Diretório/ramo errado | Desfazer; `@` novamente o caminho correto |
| Plano e implementação muito desalinhados | Voltar à fase de explorar ou planear |
| Contexto demasiado longo; restrições esquecidas | Nova thread + transferência com resumo |
| Aprovação/regras a rejeitar repetidamente | Verificar se regras e tarefa se contradizem |

## Fluxo mínimo de recuperação

```text
1. Parar de alterar (diga claramente «não escreva código por agora»)
2. Guardar o estado: git status / stash / registar o thread ID
3. Resumir em no máximo 5 pontos: objetivo, feito, sintoma da falha, hipóteses
4. Escolher: recuar / reduzir âmbito / continuar em nova thread
5. Após sucesso, escrever em AGENTS.md ou na retrospectiva do caso
```

Exemplo de prompt:

```text
As alterações atuais fazem falhar 12 testes. Não continue a corrigir.
Liste os ficheiros afetados pelos últimos 3 commits, sugira o ponto mínimo de rollback
e apresente um plano de correção mais pequeno.
```

## Fluxo recomendado

```text
Detetar (testes/humano/CI)
    → Conter (parar de escrever, isolar o ramo)
    → Diagnosticar (ver «diagnosticar antes de corrigir»)
    → Retentar em passos pequenos
    → Retrospectiva e consolidação
```

Em cenários multi-Agent, ver [colaboração multi-Agent](/cases/workflows/multi-agent-coordination/): em falha, clarifique que subtarefa é responsável pelo rollback.

## Erros comuns

- Empilhar patches «só mais um pouco» na direção errada
- Não guardar logs de falha — a nova thread repete o mesmo erro
- Forçar `git push` para «salvar a situação»
- Não distinguir ambientes (local vs Cloud) — passos de recuperação inválidos

## Limites de segurança

- As próprias operações de recuperação estão sujeitas às [regras de comando](/guide/customization/rules/command-rules/)
- Em incidentes de produção, rollback primeiro e análise de causa raiz depois; não deixe o Agent ligar-se à produção para «corrigir dados»

## Lista de aceitação

- [ ] Consegue explicar a estratégia de recuperação escolhida e o porquê
- [ ] O repositório volta a um estado construível/testável
- [ ] Causa da falha e lições registadas (issue ou AGENTS.md)
- [ ] Se precisar de nova thread, há um resumo das restrições-chave

## Capítulos relacionados

- [Diagnosticar antes de corrigir](/cases/workflows/diagnose-before-fixing/)
- [Transferência e retoma](/guide/agent-work/handoff-and-resume/)
- [Referência de erros](/guide/reference/error-reference/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre transferência e retoma, diagnóstico, regras de comando e referência de erros; esta página descreve o método geral de contenção de falhas e avanço contínuo, sem transformar botões ou comandos de um cliente específico em regra fixa.  
**Última verificação:** 2026-07-26

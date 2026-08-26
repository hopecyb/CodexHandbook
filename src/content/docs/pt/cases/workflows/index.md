---
title: Métodos de fluxo de trabalho
description: Métodos de colaboração repetíveis — sem amarrar a uma única UI de produto; ênfase em checkpoints e aceitação.
locale: pt
source_locale: zh-CN
source_revision: 2306981
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Os [prompts](/pt/prompts/) ensinam a **dizer**; os fluxos de trabalho ensinam a **organizar um assunto completo**. Os métodos deste capítulo aplicam-se a App, CLI, IDE e Cloud.

## Porque precisa de um fluxo de trabalho

Tutoriais externos contam muitas vezes a narrativa «uma conversa resolve tudo»; projetos reais costumam ser:

```text
Explorar → Planear → Executar → Verificar → (eventualmente) transferir ou automatizar
```

Sem checkpoints, é fácil alterar o diretório errado, saltar testes, fundir por engano ou perder conclusões quando o contexto se esgota.

## Fluxos principais

| Fluxo de trabalho | Que problema resolve |
|---|---|
| [Explorar—Planear—Executar—Verificar](/pt/cases/workflows/explore-plan-execute-verify/) | Cadeia principal geral, adequada à maioria das tarefas |
| [Brainstorm antes de construir](/pt/cases/workflows/brainstorm-before-building/) | Divergir e convergir quando a solução ainda não está definida |
| [Trabalho orientado por especificação](/pt/cases/workflows/specification-driven-work/) | Escrever uma especificação aceitável antes de implementar |
| [Trabalho orientado por testes](/pt/cases/workflows/test-driven-work/) | Testes primeiro a conduzir a implementação |
| [Padrões de aprovação humana](/pt/cases/workflows/human-approval-patterns/) | Quando parar, quando aprovar, quando rejeitar |
| [Diagnosticar antes de corrigir](/pt/cases/workflows/diagnose-before-fixing/) | Evitar «adivinhar a correção» |
| [Revisão antes de fundir](/pt/cases/workflows/review-before-merge/) | Revisão estruturada do PR antes da fusão |
| [Investigação com fontes](/pt/cases/workflows/research-with-sources/) | Pesquisa, comparação e verificação de fontes |
| [Artefato primeiro](/pt/cases/workflows/artifact-first-work/) | Acordar o entregável antes de derivar os passos |
| [Colaboração multi-Agent](/pt/cases/workflows/multi-agent-coordination/) | Paralelismo e divisão de trabalho |
| [Gestão de tarefas longas](/pt/cases/workflows/long-running-task-management/) | Checkpoints entre sessões e condições de saída |
| [Recuperação de falhas](/pt/cases/workflows/failure-recovery/) | Recuar quando o trabalho se desvia ou os testes ficam vermelhos |
| [Consolidar como Skill](/pt/cases/workflows/turn-a-workflow-into-a-skill/) | Escrever fluxos repetidos como Skill |

## Outros capítulos relacionados com fluxos

- Qualidade: [capacidades essenciais · qualidade e verificação](/pt/guide/quality/)
- Agent: [planeamento](/pt/guide/agent-work/planning/), [Subagents](/pt/guide/agent-work/subagents/)
- Consolidação: [Skill](/pt/skills/overview/), [AGENTS.md](/pt/guide/customization/agents-md/what-is-agents-md/)
- Casos: [cenários e biblioteca de casos](/pt/cases/use-cases/)

## Princípios de desenho

1. **Cada fase tem um artefato:** plano, diff, relatório de testes, registo de decisão
2. **Passos pequenos por omissão:** incrementos revíveis valem mais do que uma alteração enorme de uma só vez
3. **Falhas recuperáveis:** saber como desfazer e como fazer fork da thread para continuar
4. **Consolidar quando possível:** à terceira repetição, escrever o fluxo como Skill ou modelo

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre prompts, qualidade, trabalho com Agents e Skills; esta página só faz navegação de métodos e checkpoints por fase, sem transformar fluxos concretos de cliente em contrato de longo prazo.  
**Última verificação:** 2026-07-26

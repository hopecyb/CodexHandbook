---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Confrontado com as páginas verificadas do manual sobre planejamento, diagnóstico, definição de concluído, testes e AGENTS.md. Esta página limita-se ao fluxo de colaboração em quatro fases e aos seus pontos de controle, sem opções de produto sujeitas a mudança."
  checkedAt: "2026-07-26"
title: "Explorar—planejar—executar—verificar"
description: "Ajuste a exploração, o planejamento, a execução e a verificação ao escopo e à incerteza da tarefa, identificando as decisões que exigem uma pausa."
locale: pt
source_locale: zh-CN
source_revision: "4a95760"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Esta é a forma de organizar tarefas recomendada pelo manual, desde «ainda não sei como fazer» até «pronto para aceitação». Quatro fases não significam quatro aprovações. Uma tarefa pequena com escopo claro pode avançar sem interrupções; espere por uma decisão quando a abordagem estiver por definir ou faltar uma autorização necessária. Comece pelos [níveis de tarefa](/pt/prompts/ask-for-a-plan/).

## Visão geral das quatro fases

```text
① Explorar Explore   → Perceber o estado atual, o escopo e os riscos
② Planejar Plan       → Passos, arquivos, critérios de aceitação e escolhas necessárias
③ Executar Execute   → Alterar código, documentação ou configuração no escopo autorizado
④ Verificar Verify   → Testes, revisão do diff e confronto com a definição de concluído
```

Quando o estado atual não estiver claro, explore e planeje antes de corrigir por suposição. Uma gralha bem delimitada não precisa de quatro interações. Veja [Diagnosticar antes de corrigir](/pt/cases/workflows/diagnose-before-fixing/).

## ① Explorar

**Objetivo:** Descrever primeiro o estado atual e só depois decidir como alterar.

Exemplo de prompt:

```text
Não altere código. Leia @src/auth/ e os testes relacionados e, em lista, explique:
1. O fluxo de login atual
2. Arquivos possivelmente relacionados com o bug de layout no Safari
3. Um ponto em que não tem a certeza e precisa da minha confirmação
```

Artefato: enunciado do problema, escopo de impacto, itens a confirmar.

## ② Planejar

**Objetivo:** Uma lista de passos revisável.

```text
Com base na exploração anterior, apresente o plano: passos numerados, arquivos envolvidos e como verificar cada passo.
Não escreva código até eu responder «executar conforme o plano».
```

O prompt acima limita expressamente o pedido ao plano, pelo que a execução tem de esperar. Se a implementação já estiver autorizada, peça antes um plano breve seguido de execução e verificação contínuas no escopo acordado. A pausa depende da autorização, das escolhas necessárias e das permissões reais, não do número de passos do plano.

## ③ Executar

**Objetivo:** Manter as alterações pequenas e reversíveis.

- Concentrar-se num subobjetivo de cada vez
- Privilegiar caminhos cobertos por testes
- Para detalhes normais de implementação, atualizar o plano e continuar; se as premissas ou o escopo mudarem, voltar a ② para decidir se é necessária uma nova decisão

Frase orientadora: «Conclua o trabalho no escopo autorizado; se precisar de o ampliar, explique o impacto concreto e as opções».

## ④ Verificar

**Objetivo:** Provar que a «definição de concluído» está cumprida.

| Tipo de verificação | Prática |
|---|---|
| Automática | Testes unitários, lint, verificação de tipos |
| Humana | Ler o diff, testar manualmente caminhos críticos |
| Artefato | Capturas, excertos de log, respostas de API |

Listas relacionadas em [definir concluído](/pt/prompts/define-done/) e [correr testes](/pt/guide/quality/run-tests/).

## Ajustar à escala da tarefa

| Escala | Explorar | Planejar | Executar | Verificar |
|---|---|---|---|---|
| Corrigir gralha | Conferir o texto-alvo | Pode ficar implícito | Curto | Rever o diff e verificar segundo as regras do projeto |
| Bug num arquivo | Leve | 3–5 passos | Médio | Testes + diff |
| Funcionalidade entre módulos | Identificar dependências | Plano escrito; confirmar escolhas necessárias | Concluir por fases no escopo autorizado | Testes segundo o impacto + revisão manual |
| Incidente de produção | Diagnóstico primeiro | Plano de reversão primeiro | Passos mínimos | Monitoramento + retrospectiva |

## Com o modelo de caso EPXV

A equipe pode escrever as quatro fases no [modelo de caso](/pt/cases/use-cases/case-study-template/) e na descrição do PR, criando uma linguagem comum.

## Erros comuns

- Plano só na cabeça — a execução desvia-se
- Verificar só se «parece que corre»
- Exploração insuficiente — módulo errado alterado

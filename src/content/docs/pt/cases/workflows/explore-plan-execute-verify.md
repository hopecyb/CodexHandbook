---
title: Explorar—Planear—Executar—Verificar
description: Fluxo principal geral do Codex — quatro fases com checkpoints, mais estável do que «tudo de uma vez».
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Este é o fluxo de trabalho predefinido recomendado por este manual — adequado desde «ainda não sei como fazer» até «pode fundir».

## Visão geral das quatro fases

```text
① Explorar Explore   → Clarificar estado atual, âmbito e riscos
② Planear Plan       → Passos, ficheiros, critérios de aceitação (tarefas grandes precisam da sua confirmação)
③ Executar Execute   → Alterar código/documentação/configuração, commits pequenos
④ Verificar Verify   → Testes, revisão do diff, confronto com a «definição de concluído»
```

Não salte ①② e vá direto a ③ — isso vira facilmente «adivinhar a correção». Ver [diagnosticar antes de corrigir](/cases/workflows/diagnose-before-fixing/).

## ① Explorar

**Objetivo:** Descrever primeiro o estado atual e só depois decidir como alterar.

Exemplo de prompt:

```text
Não altere código. Leia @src/auth/ e os testes relacionados e, em lista, explique:
1. O fluxo de login atual
2. Ficheiros possivelmente relacionados com o bug de layout no Safari
3. Um ponto em que não tem a certeza e precisa da minha confirmação
```

Artefato: enunciado do problema, âmbito de impacto, itens a confirmar.

## ② Planear

**Objetivo:** Uma lista de passos revível.

```text
Com base na exploração anterior, apresente o plano: passos numerados, ficheiros envolvidos e como verificar cada passo.
Não escreva código até eu responder «executar conforme o plano».
```

Tarefas grandes ou alterações de alto risco exigem confirmação prévia. Em tarefas pequenas, pode acordar «plano com no máximo 3 passos pode executar automaticamente» e registar em [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/).

## ③ Executar

**Objetivo:** Manter as alterações pequenas e reversíveis.

- Focar um subobjetivo de cada vez
- Preferir caminhos cobertos por testes
- Se surgir algo fora do plano, **volte a ②** em vez de forçar

Frase de orientação: «Execute o passo 2; se precisar de alterar o plano, pare e explique primeiro.»

## ④ Verificar

**Objetivo:** Provar que a «definição de concluído» está cumprida.

| Tipo de verificação | Prática |
|---|---|
| Automática | Testes unitários, lint, verificação de tipos |
| Humana | Ler o diff, testar manualmente caminhos críticos |
| Artefato | Capturas, excertos de log, respostas de API |

Listas relacionadas em [definir concluído](/prompts/define-done/) e [correr testes](/guide/quality/run-tests/).

## Ajustar à escala da tarefa

| Escala | Explorar | Planear | Executar | Verificar |
|---|---|---|---|---|
| Correção de typo | Pode omitir | 1 passo oral | Curto | lint |
| Bug num único ficheiro | Leve | 3–5 passos | Médio | testes + diff |
| Funcionalidade entre módulos | Obrigatório | Plano escrito + confirmação | Por fases | suíte completa + teste manual |
| Incidente em produção | Diagnóstico primeiro | Plano de rollback primeiro | Passos mínimos | monitorização + retrospectiva |

## Com o modelo de caso EPXV

A equipa pode escrever as quatro fases no [modelo de caso](/cases/use-cases/case-study-template/) e na descrição do PR, criando uma linguagem comum.

## Erros comuns

- Plano só na cabeça — a execução desvia-se
- Verificar só se «parece que corre»
- Exploração insuficiente — módulo errado alterado

## Fontes de referência

- Métodos de desenho de tarefas e verificação do CodexGuide
- Livro Laranja «da necessidade à entrega»

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com as páginas já verificadas deste manual sobre planeamento, diagnóstico, definição de concluído, correr testes e `AGENTS.md`; o conteúdo limita-se à cadeia principal de colaboração em quatro fases e aos checkpoints, sem parâmetros de produto voláteis nem detalhes de entrada.  
**Última verificação:** 2026-07-26

---
title: Brainstorm antes de construir
description: Antes de escrever código ou textos longos, use exploração estruturada para convergir na solução — menos retrabalho.
locale: pt
source_locale: zh-CN
source_revision: 9bf8989
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

**Brainstorm antes de construir** adequa-se a tarefas com objetivo vago e mais do que uma solução possível: novas funcionalidades, redesigns, temas de conteúdo, seleção tecnológica. Liga-se à fase ① Explorar de [Explorar—Planear—Executar—Verificar](/pt/cases/workflows/explore-plan-execute-verify/), mas enfatiza **divergir e convergir**, em vez de ler código e alterar ficheiros de imediato.

## Que problema resolve esta página

- Quando vale brainstorm primeiro e quando ir direto a EPXV
- Como limitar o âmbito da divergência e evitar conversa vazia
- Artefatos: tabela de opções, registo de decisão, plano seguinte

## Para quem

| Cenário | Exemplo |
|---|---|
| Produto/funcionalidade | «Acrescentar exportação ao utilizador; há três UIs» |
| Conteúdo | «Para quem é este tutorial e como estruturar» |
| Tecnologia | «Fila ou cron para tarefas agendadas» |

## Prática mínima viável

**Fase A — Divergir (com limite de tempo)**

```text
Não altere nenhum ficheiro. Para o requisito «exportar CSV», liste 3 caminhos de implementação:
para cada um, prós/contras, módulos envolvidos, esforço estimado (S/M/L).
Não escolha a solução final.
```

**Fase B — Convergir**

```text
Com base na tabela acima, recomende 1 solução predefinida e 1 alternativa;
indique 2 pontos de decisão que preciso de confirmar (formato, permissões).
```

**Fase C — Entrar no plano**

Após confirmação, passe a [trabalho orientado por especificação](/pt/cases/workflows/specification-driven-work/) ou à fase ② Planear de EPXV.

## Fluxo recomendado

```text
Clarificar restrições (tempo, stack, partes imutáveis)
    → Divergir 3–5 opções (proibido escrever código)
    → Ordenar por «valor / risco / custo»
    → Escolha humana ou pedido de informação adicional
    → Plano escrito + execução
```

Defina uma **caixa de tempo**: por exemplo, concluir a divergência em 15 minutos para evitar deriva da discussão.

## Erros comuns

- Tratar o brainstorm como execução — o modelo já altera ficheiros; use a restrição «não altere ainda»
- Demasiadas opções sem ordenação — fadiga de decisão
- Não registar opções rejeitadas — o mesmo debate volta duas semanas depois
- Saltar restrições — solução «bonita» mas inviável

## Limites de segurança

- Na fase de brainstorm ainda se podem ler ficheiros sensíveis — use `@` para delimitar o âmbito com precisão
- Soluções com conformidade ou privacidade exigem revisão humana jurídica/de segurança; o modelo não decide sozinho

## Lista de aceitação

- [ ] Pelo menos 2 opções viáveis e uma recomendação clara
- [ ] Pontos de decisão marcados, à espera de confirmação humana
- [ ] Sem escrita não autorizada no repositório
- [ ] O passo seguinte liga a um plano escrito

## Capítulos relacionados

- [Explorar—Planear—Executar—Verificar](/pt/cases/workflows/explore-plan-execute-verify/)
- [Trabalho orientado por especificação](/pt/cases/workflows/specification-driven-work/)
- [Pedir um plano](/pt/prompts/ask-for-a-plan/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre EPXV, planeamento, especificação e prompts; esta página descreve apenas o método estável «divergir, convergir, depois entrar no plano», sem depender de detalhes de entrada de produto.  
**Última verificação:** 2026-07-26

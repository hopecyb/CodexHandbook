---
title: Trabalho orientado por especificação
description: Escreva primeiro uma especificação aceitável e deixe o Codex implementar conforme o plano — adequado a entregas com requisitos claros.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Trabalho orientado por especificação** significa preparar uma especificação curta — objetivo, âmbito, interfaces e critérios de aceitação — antes de alterar muitos ficheiros. Pode seguir [brainstorm](/cases/workflows/brainstorm-before-building/) ou, com requisitos já clarificados, entrar diretamente em [EPXV](/cases/workflows/explore-plan-execute-verify/).

## Foco desta página

- Quão detalhada deve ser a especificação
- Como fazer o Codex seguir a especificação sem alargar o âmbito por conta própria
- Relação entre especificação, descrição de PR e issues

## Modelo mínimo de especificação

```markdown
## Objetivo
Valor para o utilizador numa frase

## Âmbito
- Inclui: …
- Exclui: …

## Interface/comportamento
- Entrada / saída / casos de erro

## Critérios de aceitação
- [ ] Itens verificáveis automaticamente
- [ ] Itens que exigem verificação humana

## Restrições
- Módulos imutáveis, desempenho, compatibilidade
```

Pode colocar o modelo em `docs/specs/` do repositório ou no corpo do issue e referenciá-lo com `@` na tarefa.

## Fluxo recomendado

```text
① Redigir a especificação (Codex pode ajudar; humano revê)
② Confirmar a especificação → responder «executar conforme a especificação»
③ Executar por passos, confrontando cada passo com os itens de aceitação
④ Alterações à especificação devem atualizar explicitamente a versão ou o changelog
```

Exemplo de prompt:

```text
Leia @docs/specs/export-csv.md. Confrontando com a especificação, liste primeiro o plano de implementação e os riscos;
não acrescente funcionalidades não listadas na especificação. Espere a minha confirmação antes de escrever código.
```

## Combinação com trabalho orientado por testes

Os itens de aceitação na especificação devem ser, tanto quanto possível, **testáveis**; o que puder ser teste, escreva o teste primeiro — ver [trabalho orientado por testes](/cases/workflows/test-driven-work/).

## Erros comuns

- Especificação tão longa como um documento de desenho — as restrições críticas ficam perdidas
- O âmbito cresce em silêncio durante a execução sem atualizar a especificação
- Critérios de aceitação vagos («mais fácil de usar») geram discussão
- Conflito com as convenções de arquitetura em `AGENTS.md`

## Limites de segurança

- Só autorize implementação relacionada com rede se a especificação disser «chamadas a API externas permitidas»
- Tratamento de campos com PII deve estar marcado na especificação

## Lista de aceitação

- [ ] Itens fora de âmbito explicitamente excluídos
- [ ] Pelo menos 3 critérios de aceitação verificáveis
- [ ] Confirmação humana ou escrita antes da execução
- [ ] Alterações sincronizadas de volta para o ficheiro de especificação

## Fontes de referência

- Capítulos de requisitos e decomposição de tarefas de KimYx0207
- Especificação e listas de aceitação de freestylefly/CodexGuide

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre brainstorm, EPXV, trabalho orientado por testes e `AGENTS.md`; o conteúdo limita-se ao método estável «escrever especificação aceitável primeiro, depois executar conforme a especificação».  
**Última verificação:** 2026-07-26

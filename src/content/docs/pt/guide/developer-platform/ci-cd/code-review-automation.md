---
title: Automatização de revisão de código
description: Ligar a revisão do Codex a CI ou ao fluxo de PR — Prompt, Permissões e portão humano.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Meter o Codex no **pipeline de Pull Request** pode apanhar problemas evidentes antes da review humana, mas **não substitui** a revisão responsável nem os testes. Esta página descreve padrões de automatização aplicáveis.

## O que esta página cobre

- Como chamar o Codex com segurança em CI
- O que o Prompt de revisão deve incluir
- Como devolver o resultado ao PR sem merge automático

## Primeiro compreende o seu papel

Podes ver a «automatização de revisão de código» assim: o Codex faz um primeiro filtro para a equipa, mas quem decide no fim continua a ser uma pessoa.

O que faz melhor:

- Sinalizar riscos evidentes com antecedência
- Ajudar a ordenar os pontos-chave do Diff
- Antecipar algumas verificações repetitivas

Não serve para decidir por ti «este PR pode fazer-se merge com segurança».

Relacionado: [Modo não interativo](/guide/cli/non-interactive-mode/) · [Visão geral do SDK](/guide/developer-platform/sdk-overview/)

## Arquitetura recomendada

```text
PR opened / updated
    → CI job (token só de leitura)
    → codex exec ou API revê o Diff
    → Subir relatório / comentário no PR
    → Uma pessoa decide se fazer merge
```

## Mal-entendidos frequentes

### Revisão automática ≠ Aprovação automática

Ao integrar pela primeira vez, muitas equipas sobrestimam: se já pode olhar sozinho, também pode decidir sozinho?

A realidade mais adequada: encaixa como «camada de sugestão» e «camada de pré-filtro», não como camada de responsabilidade final.

### Nem todo o PR merece uma revisão pesada desde o princípio

Se o PR é pequeno, de pouco valor, ou as regras ainda não estão claras, uma revisão automática muito pesada só gera ruído.

Um bom ponto de partida costuma ser: revisão leve do Diff e ver se poupa tempo de forma estável.

## Pontos-chave do template de Prompt

```text
És assistente de revisão de código. Revê apenas o Diff relativamente ao branch base.
Saída: problemas graves / sugestões / nit; cada um com ficheiro e número de linha.
Não modifiques o repositório; não faças pedidos de rede.
Se o Diff for demasiado grande, revê apenas <lista de caminhos>.
```

Versiona o ficheiro em `prompts/ci-review.md`.

## Permissões e segurança

| Princípio | Prática |
|---|---|
| Só leitura | Token de CI sem push (ou só bot com comment) |
| Modelo fixo | Facilita comparar a qualidade histórica da revisão |
| Anti-injeção | Não cole a descrição do PR sem sanitizar no system prompt |
| Secrets | Guarda o token em GitHub Secrets |

[Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/) · [Variáveis de ambiente](/guide/reference/environment-variables/)

## Portões de qualidade

- Falha do job de revisão ≠ bloquear o merge (pode ser advisory primeiro)
- Distingue dos status checks obrigatórios: testes a vermelho devem bloquear; nits de IA podem avisar
- Amostra periodicamente à mão para comparar falsos negativos/positivos da revisão IA

## Relação com Cloud

Em repos complexos podes correr testes completos no [Cloud](/guide/web-and-cloud/) e rever depois; o exec dentro de CI encaixa em **revisão leve do Diff**.

## Erros frequentes

- CI com Permissão de escrita e Prompt injetado com «faz push do fix»
- Resultado de revisão tão longo que afoga a review humana
- Sem limite de tamanho do Diff → timeout e quota queimada

O mais valioso da automatização de revisão é filtrar problemas evidentes antes da review humana, não substituir a pessoa na responsabilidade do merge.

## Lista de aceitação

- [ ] Comportamento seguro de CI em PRs de fork (sem filtrar secrets)
- [ ] Saída de revisão estruturada e parseável por máquina (opcional)
- [ ] Documentação da equipa que clarifique o papel da revisão IA

## Fontes de referência

- Exemplos de CI do OpenAI Codex
- Capítulos Review/PR de KimYx0207
- Tutoriais de CI de stormzhang
- Secção Git/GitHub de codex.bozhouai.com

---

**Estado:** verified  
**Produtos aplicáveis:** CLI / API / Cloud  
**Base de verificação:** A página de desenvolvedores da OpenAI continua a descrever o Codex como utilizável para testar, rever e preparar alterações prontas para entregar; os casos de uso oficiais do Codex continuam a incluir «Review GitHub pull requests». Esta página só resume princípios de ligação segura a CI e padrões de portão, sem declarar um comando fixo nem uma única implementação.  
**Última verificação:** 2026-07-26

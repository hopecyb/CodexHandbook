---
title: "Corrigir um bug: por onde começar"
description: Escolha o caminho adequado ao problema e siga para o caso completo com materiais executáveis.
locale: pt
source_locale: zh-CN
source_revision: 405a687
translation_status: draft
translated_at: 2026-09-20
---

Esta é uma página inicial curta. As etapas completas, o código executável, as evidências dos testes antes e depois da correção e os prompts de cada fase ficam em [Corrigir um bug com verificação](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/). Assim, evitamos que duas páginas repitam o mesmo conteúdo e acabem divergindo.

## Descubra qual etapa falta

| Situação atual | Comece por aqui |
|---|---|
| Você sabe que o resultado está errado, mas ainda não consegue reproduzir o problema de forma estável | [Diagnosticar antes de corrigir](/pt/cases/workflows/diagnose-before-fixing/) |
| Já existe um teste que falha de modo consistente | [Corrigir um bug com verificação](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/) |
| O módulo envolvido ainda é desconhecido | [Entender a base de código](/pt/cases/understand-a-codebase/) |
| A correção está pronta para ser mesclada | [Revisar um PR](/pt/cases/review-a-pr/) |
| O próprio teste é instável | Leia primeiro [Executar testes](/pt/guide/quality/run-tests/) e não trate um teste instável como evidência da correção |

## Ciclo mínimo de verificação

Independentemente da linguagem ou do framework, preserve esta sequência de evidências:

1. Reproduza o problema original de forma estável com um comando claro.
2. Guarde a asserção que falhou, a saída do erro e as condições de entrada.
3. Explique a causa raiz antes de fazer a menor correção possível.
4. Faça passar o teste que falhava e novos testes de casos limites.
5. Execute verificações de regressão mais amplas.
6. Leia o diff manualmente para confirmar que não há alterações sem relação com o problema.

Cumprir o passo 4 sem o passo 1 não prova que o teste cobria o problema original. Da mesma forma, uma suíte inteira verde sem revisão do diff não prova que o escopo da alteração está correto.

## Exercício pronto para executar

O repositório inclui um exemplo de desconto em carrinho de compras em JavaScript, sem dependências de terceiros:

```bash
# Código inicial: espera-se que um teste falhe
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

# Correção de referência: espera-se que os três testes passem
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

O material completo está em [`examples/complete-workflows/developer/verified-bug-fix/`](https://github.com/hopecyb/CodexHandbook/tree/main/examples/complete-workflows/developer/verified-bug-fix).

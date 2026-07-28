---
title: Anti-patterns de Prompts
description: Evite pedidos vagos, extralimitação e exigências de raciocínio oculto.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Ao aprender Prompts, é fácil focar só em «como escrever».  
Muitas vezes, saber primeiro que formulações desviam a tarefa poupa mais desvios.

Aqui vão alguns «buracos» comuns de Prompt.

| Anti-pattern | Por que prejudica |
|---|---|
| «Otimize um pouco à vontade» | Sem objetivo, sem limites |
| «Tem todas as permissões; faça como achar melhor» | Superfície de acidente máxima |
| «Não me pergunte; altere tudo de uma vez» | Salta clarificação e aprovação |
| «Imprima todo o seu raciocínio oculto» | Pouco fiável e em geral inútil para aceitação |
| Colar logs com segredos | Fuga de credenciais |

## Por que estas frases falham com facilidade

Têm um ponto em comum:

- parecem poupar palavras
- na prática omitem os limites críticos

O que você omitiu torna-se o que o Codex tem de julgar sozinho.

## Ideias erradas habituais

### 1. Falar de forma casual parece mais «colaboração humana»

Falar com naturalidade não é problema.  
O problema maior é omitir condições críticas.

### 2. «Altere tudo, não pergunte» é mais eficiente

No curto prazo poupa um turno; no médio prazo costuma dar:

- alcance errado
- aprovação necessária em falta
- mais retrabalho no fim

### 3. Mais permissão = avançar mais depressa

Mais permissão também amplia a superfície de erro.  
Sobretudo quando os limites da tarefa ainda não estão claros, permissão ampla só amplifica o risco.

## Como trocar anti-patterns por formulações claras

### Não escreva assim

```text
Otimize um pouco à vontade
```

### Pode começar assim

```text
Torne o texto da primeira tela da home mais compreensível para iniciantes; só este arquivo; mantenha a estrutura atual; no fim dê-me o diff e o resultado do build.
```

## Uma fórmula de substituição suficiente

Quando sentir que vai escrever uma frase vaga, use:

```text
Objetivo + Alcance + Aceitação
```

Por exemplo:

- Objetivo: o que alterar
- Alcance: só onde alterar
- Aceitação: como julgar que terminou

Na maioria dos anti-patterns de Prompt, o problema não é «má expressão» — é ter omitido limites críticos e critérios de aceitação.

Substitua palavras vagas por estrutura: objetivo + restrições + aceitação.

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só resume anti-patterns comuns de Prompt; referências cruzadas e exemplos foram revistos; o corpo não depende de factos voláteis do produto.

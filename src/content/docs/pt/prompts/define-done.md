---
title: Definir o concluído
description: Escreva condições de conclusão verificáveis.
locale: pt
source_locale: zh-CN
source_revision: b9d3ef1
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Muita gente formula a tarefa dizendo «o que quero», mas não «até que ponto conta como feito». No fim, só se julga a olho se terminou.

Critérios de conclusão são, na prática, como você vai verificar o resultado.

Os critérios de aceitação têm de ser **observáveis**:

- Fraco: «melhorar a qualidade do código»
- Bom: «`npm test` passa; o componente `Button` suporta `disabled`; o screenshot do Storybook coincide com o design»

## Por que tantas tarefas ficam ambíguas no «está feito?»

Muitas vezes objetivo e critérios de conclusão se misturam.

- **Objetivo:** que resultado você quer
- **Critérios de conclusão:** como confirmar que esse resultado foi realmente atingido

Por exemplo, «corrigir este bug» é objetivo;  
«reproduzir de forma estável a correção, testes relacionados passam, sem novos erros no console» aproxima-se de critérios de conclusão.

## Ideias erradas habituais

### 1. Se o resultado «parece quase igual», está feito

Em tarefas pequenas isto enterra armadilhas. «Parece quase» costuma omitir testes, casos limite e efeitos colaterais.

### 2. Critérios de conclusão = elogiar o resultado em mais frases

Têm de ser verificáveis, não um discurso de encerramento.

### 3. Build a passar = concluído

Nem sempre.

Build a passar é só um ponto de verificação; não prova:

- que a funcionalidade está correta
- que o alcance não foi excedido
- que o texto serve o leitor
- que as fontes foram verificadas

## Uma formulação habitual

Se não souber por onde começar, escolha entre estes 3 tipos:

- **Checagem funcional:** o comportamento corresponde ao esperado?
- **Checagem técnica:** build / testes / lint passam?
- **Checagem de alcance:** só alterou o âmbito combinado?

Por exemplo:

```text
Critérios de aceitação:
- só alterar o texto da home de docs; não alterar layout nem componentes
- `pnpm build` passa
- o texto da primeira tela é mais adequado a iniciantes; não assume jargão do leitor
```

## Método de julgamento

Depois de escrever, pergunte-se:

> **Se entregar isto a outra pessoa, ela consegue decidir «passa» ou «não passa»?**

Se não, ainda está demasiado vago.

No fundo: não deixe «está feito?» depender de adivinhação.

Inclua comandos de verificação nos critérios — assim o Agent tem mais probabilidade de os executar: [Correr testes](/pt/guide/verification/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Última verificação:** 2026-07-26  
**Base de verificação:** Esta página só descreve aceitação e critérios de conclusão; os links internos foram revistos; o corpo não depende de factos voláteis do produto.

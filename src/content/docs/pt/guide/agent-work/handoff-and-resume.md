---
title: transferência e retoma
description: Continuar trabalho inacabado entre sessões.
locale: pt
source_locale: zh-CN
source_revision: "1ee17e9"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 40
legacyVerification: {"status": "verified", "products": "App / CLI / IDE / Cloud", "basis": "Cruzada com a documentação pública atual da OpenAI Developers sobre tarefas longas, objetivos contínuos e formas de colaboração do Codex; o conteúdo mantém só o método estável «o resumo de transferência deve ajudar a continuar da próxima vez», sem transformar botões ou fluxos concretos de um produto em regras fixas.", "checkedAt": "2026-07-26"}
---

Aqui trata-se de um problema muito comum:

> **Desta vez não acabou — como continuar da próxima?**

Sem transferência, ao reabrir da próxima vez acontecem facilmente três coisas:

- Você próprio esqueceu onde ficou
- O Codex não sabe que restrições ainda valem
- A nova conversa dispersa o contexto antigo e volta a dar voltas do zero

![Ilustração: um agente entrega notas de passagem e um cartão de progresso a outro, com um calendário e um quadro de tarefas marcado ao fundo](/illustrations/handoff-and-resume.webp)

## O que a transferência deixa de facto

transferência e retoma é deixar um cartão de instruções para «quem continuar da próxima vez».

Esse «quem» pode ser:

- Você próprio daqui a algumas horas
- Outra tarefa nova
- Outra pessoa a colaborar
- O Codex que assume a continuação do trabalho

Por isso transferência não é um resumo longo — é deixar a **informação realmente necessária para continuar a trabalhar**.

## O que deixar pelo menos na transferência

O resumo de transferência deve incluir pelo menos:

- Objetivo e estado atual
- Arquivos já alterados
- Restrições ainda válidas
- Única ação seguinte
- Como verificar

Se puder acrescentar mais uma frase, clarifique:

- Porque parou aqui

Assim, na próxima continuação, não vê só «a meio» sem saber se foi falta de tempo, necessidade de aprovação ou um bloqueio real.

## Mal-entendidos habituais

### 1. Reencaminhar a conversa antiga inteira = transferência

Normalmente não conta.

Na conversa antiga há muita exploração, tentativa e erro e ramos já inválidos. O que vale de verdade são as **conclusões que ainda se mantêm agora**.

### 2. Quanto mais escrever, melhor

Há dois problemas comuns em um resumo de transferência:

- Demasiado curta — falta informação-chave
- Demasiado longa — não se vê o que fazer a seguir

O mais útil para continuar a executar costuma ser **curto, preciso, continuável**.

### 3. Só escrever «falta um pouco, continua até acabar»

Quase não serve.

Traduza «continua até acabar» numa ação clara, por exemplo:

- Correr uma vez `pnpm build`
- Continuar a escrever `guide/verification.md`
- Verificar o aspeto da imagem de capa em `/guide/foundations/local-vs-cloud/`

## Como retomar de forma mais estável

Depois de colar o resumo numa thread nova, não altere em grande de imediato — faça primeiro estes três passos:

1. Confirme se o objetivo mudou
2. Confirme se o estado dos arquivos coincide com a descrição da transferência
3. Comece pela «única ação seguinte», em vez de voltar a dispersar

Assim evita depender de contexto antigo já comprimido, omisso ou deformado.

Boa transferência não é recontar a história — é fazer quem abrir a tarefa da próxima vez saber de imediato: onde está, o que fazer a seguir, como verificar no fim.

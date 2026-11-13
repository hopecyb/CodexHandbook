---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Esta página explica apenas um método de estruturação de tarefas; os exemplos e links internos foram conferidos, e o texto não depende de fatos sujeitos a mudanças, como versões, preços ou interfaces do produto."
  checkedAt: "2026-08-25"
title: "A estrutura de uma boa tarefa"
description: "Objetivo, contexto, entradas, restrições, critérios de aceitação e limites de permissão."
locale: pt
source_locale: zh-CN
source_revision: "98c0511"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

Ao descrever uma demanda, é fácil dispersar as informações quando há muito a dizer: os materiais estão presentes, mas o resultado esperado, os limites e os critérios de aceitação ficam misturados. O Codex acaba tendo que preencher as lacunas por conta própria.

Esta página oferece uma ficha de tarefa reutilizável. Você verá que problema cada parte resolve e como a descrição da tarefa entra no ciclo de “explorar, planejar, executar e verificar”.

## Para quem é esta página

- Pessoas que já conseguem abrir o Codex, mas frequentemente se deparam com alterações além do necessário, tarefas inacabadas ou resultados difíceis de avaliar.
- Desenvolvedores, criadores e equipes que querem transformar pedidos feitos verbalmente em tarefas executadas por um Agent.
- Quem precisa definir o escopo, as permissões e as condições de parada de uma tarefa longa.

## Estrutura da tarefa

Você pode organizar a tarefa nesta ordem:

- Qual é o resultado esperado?
- Por que o trabalho é necessário?
- Que materiais serão necessários?
- Onde estão os limites?
- Como saber se o trabalho terminou?

A ordem não precisa ser fixa. Mas, quando esses pontos estão claros, a execução tende a ser muito mais estável.

## Modelo recomendado

```text
Objetivo: … (qual é a entrega final)
Contexto: … (por que importa, situação atual)
Entradas: … (arquivos, links ou conteúdo fornecido)
Restrições: … (o que pode ser alterado, estilo, ações proibidas)
Critérios de aceitação: … (condições de conclusão que podem ser verificadas)
Limites de permissão: … (pode acessar a internet, instalar dependências ou alterar configurações?)
Se faltarem informações: pergunte antes, não adivinhe.
```

![Ciclo da descrição da tarefa até um resultado verificável](/illustrations/flow-task-loop.webp)

Os seis itens à esquerda do diagrama não existem para alongar o prompt, mas para eliminar lacunas essenciais. Depois que a tarefa entra em execução, a evidência da verificação determina o próximo passo: entregue somente se passar; se falhar, leve as informações da falha de volta à descrição da tarefa ou ao plano, em vez de continuar editando às cegas.

## Para que serve cada parte

- **Objetivo:** evita que a tarefa descreva apenas uma ação, sem dizer qual resultado se espera.
- **contexto:** ajuda o Codex a entender por que o trabalho deve ser feito daquela maneira.
- **Entradas:** coloca ao alcance os arquivos, links e materiais que ele realmente precisa consultar.
- **Restrições:** evita ultrapassar o escopo e fazer mudanças adicionais por conveniência.
- **Critérios de aceitação:** transforma “está pronto?” em algo que pode ser verificado.
- **Limites de permissão:** esclarece antecipadamente se é permitido acessar a internet, instalar dependências ou alterar configurações.

## Equívocos comuns

### 1. É preciso preencher todas as partes em detalhe

Este modelo se parece mais com uma lista de verificação do que com um formulário.
Algumas tarefas não exigem um contexto extenso, mas omiti-lo também reduz as informações disponíveis para tomar decisões.

### 2. Objetivo e aceitação não são a mesma coisa

São coisas diferentes.

- **Objetivo** descreve o resultado que você quer obter.
- **Aceitação** descreve como você saberá que ele foi alcançado.

### 3. Entradas significam colar um monte de material

Mais material não significa uma entrada melhor; a relevância importa mais.
O essencial é indicar claramente quais materiais precisam ser consultados.

## Modelo mínimo de tarefa

Se você quiser apenas uma versão inicial que já possa usar, reduza o modelo a isto:

```text
Objetivo: transformar o quê em qual resultado
Entradas: estes são os arquivos ou páginas relevantes
Restrições: onde pode alterar e no que não pode mexer
Aceitação: como vou verificar que você realmente terminou
Em caso de dúvida: pergunte antes
```

## De um pedido vago a uma tarefa executável

### Pedido original

```text
Melhore a página inicial da documentação.
```

Essa frase não informa quem é o leitor, qual é o escopo das alterações nem o que tornaria a página melhor. Mesmo que o Codex produza algo, será difícil julgar se ele ultrapassou os limites.

### Versão executável

```text
Objetivo: reescrever o texto da primeira tela da página inicial da documentação para que um leitor que nunca usou o Codex entenda, em 30 segundos, o que ele é e por onde começar.
Contexto: a página atual pressupõe que o leitor já entenda Agent, contexto e Skill; as orientações de entrada não são suficientemente diretas.
Entradas: src/content/docs/guide/index.md
Restrições: alterar somente esse arquivo; não modificar a navegação, os estilos nem os componentes; explicar Agent em linguagem simples na primeira menção.
Critérios de aceitação:
- A primeira tela explica claramente a finalidade do manual, a quem ele se destina e qual é a primeira página a ler.
- O frontmatter e a hierarquia dos títulos existentes são preservados.
- Nenhum termo técnico novo é introduzido sem explicação.
- pnpm build passa.
Limites de permissão: pode ler páginas relacionadas do site; não pode acessar a internet, instalar dependências nem criar commit no Git.
Se faltarem informações: liste primeiro o que falta e o escopo das alterações propostas; aguarde minha confirmação.
```

### Processo de execução esperado

1. Primeiro, ler a página inicial e as páginas de entrada próximas e explicar os problemas atuais.
2. Apresentar um plano curto limitado a um arquivo.
3. Alterar o texto e mostrar um resumo do diff.
4. Executar `pnpm build`.
5. Relatar, item por item, as evidências referentes aos quatro critérios de aceitação.

## Como revisar sua própria descrição de tarefa

Antes de enviá-la, pergunte-se:

- O objetivo descreve um resultado ou apenas ações como “melhorar”, “tratar” ou “dar uma olhada”?
- As entradas contêm somente os arquivos e materiais realmente relevantes?
- As restrições dizem o que não pode ser alterado?
- Outra pessoa conseguiria avaliar se cada critério de aceitação “passou” ou “falhou”?
- Acesso à internet, instalação de dependências, escritas em serviços externos e commits precisam de autorização prévia?
- Se faltarem informações, o Agent deve perguntar, investigar ou parar primeiro?

Você pode reduzir o modelo conforme o tamanho da tarefa, mas remover uma parte significa perder um tipo de informação para decidir. Corrigir um erro de digitação em um arquivo não exige um contexto longo; uma migração entre módulos não pode ser descrita apenas por uma frase de objetivo.

## Próximos passos

- [Definir critérios de conclusão](/pt/prompts/define-done/)
- [Restrições e limites](/pt/prompts/constraints-and-boundaries/)
- [Pedir um plano primeiro](/pt/prompts/ask-for-a-plan/)
- [Explorar, planejar, executar e verificar](/pt/cases/workflows/explore-plan-execute-verify/)

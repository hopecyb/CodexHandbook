---
title: "Percurso de desenvolvedor: ler código, corrigir, revisar e passar adiante"
description: "Um bug de carrinho conecta leitura de código, testes vermelho/verde, revisão do diff e passagem de trabalho, com três modelos preenchíveis."
contentType: path
audiences: [developer]
level: beginner
outputs: [javascript, markdown, test-log]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: "2026-09-18"
  summary: "O exercício de referência foi executado novamente: um dos três testes falhou no início, os três passaram após a correção de referência e os dois arquivos de teste eram idênticos. Os modelos foram revistos pelo autor; nenhum leitor independente concluiu o percurso."
  environment: "Node.js v22.16.0 / Darwin arm64; node:test integrado, sem dependências de terceiros."
  evidence:
    - label: "Resumo da execução real"
      href: /downloads/developer-path/run-record.json
    - label: "Referência de revisão do autor e limites do escopo"
      href: /downloads/developer-path/review-reference.md
sidebar:
  order: 20
prev:
  link: /pt/guide/learning-paths/
  label: "Escolher um percurso de aprendizagem"
next:
  link: /pt/cases/use-cases/software-development/fix-a-bug-with-verification/
  label: "Começar uma correção de bug verificada"
locale: pt
source_locale: zh-CN
source_revision: 22d8bd3
translation_status: draft
translated_at: 2026-09-20
---
Use um pequeno exercício de carrinho para fazer quatro coisas: explicar o código, corrigir um erro, revisar as diferenças e passar as evidências adiante. Não é preciso aprender todos os clientes, configurações ou recursos multiagente antes.

Pré-requisito: conseguir ler JavaScript simples e executar testes Node.js em um terminal local. O ambiente de referência usa Node.js 22.16.0; não há dependências de terceiros. Você pode usar a CLI, um IDE ou outro cliente com acesso a arquivos locais e ao terminal; o comportamento dos testes é determinado pelo Node.js.

## Preparar o código e a pasta de evidências

Use `examples/complete-workflows/developer/verified-bug-fix/` no [repositório de origem do manual](https://github.com/hopecyb/CodexHandbook). Leia primeiro `brief.md` e `README.md`, sem olhar `solution/`. Os passos completos estão em [Corrigir um bug com verificação](/pt/cases/use-cases/software-development/fix-a-bug-with-verification/).

Na pasta do exercício:

```sh
# work/ ainda não pode existir; se já tiver um exercício próprio, escolha outro nome em vez de sobrescrevê-lo.
cp -R starter work
mkdir -p evidence
```

Faça a correção em `work/`. Preserve `starter/` como o estado inicial com falha e `solution/` como a resposta de referência. Salve os modelos abaixo em `evidence/`. Os modelos baixados não incluem todo o código; use-os com o exercício do repositório.

| Marco | Pré-requisito | Entrega | Critério de conclusão |
|---|---|---|---|
| 1. Ler código | `brief.md` e `starter/` | `code-map.md` | Entrada, percurso de dados, falha e causa têm base nos arquivos |
| 2. Corrigir e verificar | Causa e testes inalterados | `work/cart.js`, `red.txt`, `green.txt` | Reproduzir a falha antes de passar nos mesmos testes |
| 3. Revisar o diff | Mudança e duas saídas de teste | `review.md`, diff da implementação | Expectativas e API inalteradas, sem mudanças alheias |
| 4. Passar adiante | Evidências das três primeiras etapas | `handoff.md` | Outra pessoa encontra os arquivos atuais e repete a próxima etapa |

## 1. Ler o código e criar um mapa verificável

[Baixe o modelo de leitura de código](/downloads/developer-path/code-map-template.md). Peça ao Codex para ler `brief.md`, `starter/cart.js` e `starter/cart.test.js` e explicar, sem alterar nada, a entrada, o percurso dos dados, a entrada que dispara a falha, os valores real e esperado, a linha da causa e os limites do escopo.

Registre em `evidence/code-map.md`. Este exercício tem só dois arquivos principais, portanto um diagrama de arquitetura complexo é desnecessário. Para concluir, explique que `10` significa dez por cento, por que a implementação errada transforma subtotal 40 em total -360 e por que o correto é 36.

Consulte a [referência de leitura do autor](/downloads/developer-path/code-map-reference.md) se precisar, mas confira suas conclusões no código real. Só depois altere a implementação.

## 2. Salvar o vermelho e fazer a menor correção

Execute os comandos a seguir em `verified-bug-fix/`:

```sh
node --test work/cart.test.js > evidence/red.txt 2>&1
```

O código de saída esperado é 1: um de três testes falha. Abra `evidence/red.txt` e confirme que o teste de desconto mostra -360 como valor real e 36 como esperado. Se todos passarem, verifique se usou a solução de referência ou editou um arquivo antes; não presuma que reproduziu a falha.

Você pode delimitar toda a execução assim:

```text
Com base em brief.md e evidence/code-map.md, corrija somente a conversão de percentual em work/cart.js.
Mantenha a assinatura da função e as assertivas de work/cart.test.js. Não acrescente dependências nem refatore.
Depois execute node --test work/cart.test.js e salve a saída real em evidence/green.txt.
Se o resultado for inesperado, preserve a evidência da falha e investigue a causa; não altere as assertivas para caber na implementação.
Entregue um resumo das mudanças e dos testes. Não faça commit nem push.
```

A conclusão exige os três testes originais aprovados com código de saída 0 e mudança restrita à causa. Um comando de teste com falha também pode gerar log; só existir `green.txt` não prova aprovação.

## 3. Revisar diferenças e lacunas

[Baixe o modelo de revisão](/downloads/developer-path/review-template.md) e informe a comparação real: o `starter/` preservado contra seu `work/`, não `main` por padrão. A comparação não depende de mudanças não commitadas no repositório.

```sh
diff -u starter/cart.js work/cart.js
diff -u starter/cart.test.js work/cart.test.js
```

O primeiro comando deve mostrar a conversão percentual; código de saída 1 indica diferença, não falha do comando. O segundo deve ficar sem saída e retornar 0. Peça ao Codex uma revisão somente de leitura do diff real e dos logs vermelho/verde; registre descobertas, evidências, lacunas e decisões em `evidence/review.md`.

Para concluir, confirme que testes não foram afrouxados, a API não mudou e não há dependências extras ou alterações alheias. Precisão monetária, impostos e entradas inválidas não são cobertos; três testes aprovados não comprovam segurança em produção. Compare com a [referência de revisão do autor](/downloads/developer-path/review-reference.md).

## 4. Escrever a passagem e retomar pelos arquivos

[Baixe o modelo de passagem](/downloads/developer-path/handoff-template.md). Em `evidence/handoff.md`, anote pasta atual, arquivos modificados, restrições ainda válidas, caminhos das evidências, próximo comando e resultado esperado. Em um projeto Git real, inclua também branch, commit e estado da árvore de trabalho.

Uma tarefa somente de leitura após a passagem pode ser:

```text
Leia evidence/handoff.md e primeiro confira se os arquivos atuais em work/ correspondem à descrição da passagem.
Na raiz do exercício, execute node --test work/cart.test.js e registre o código de saída e o resumo reais.
Compare implementação e testes de work com starter. Se o estado for diferente, descreva a diferença; não reutilize um resultado verde antigo.
Não altere código, não faça commit nem push.
```

Execute em uma nova tarefa ou peça a outra pessoa para conferir. Reabrir você mesmo é um ensaio de retomada, não revisão humana independente. Veja o [registro de passagem do autor](/downloads/developer-path/handoff-reference.md).

A passagem termina quando o arquivo sozinho permite localizar código, testes e limites e executar o resultado atual. Se essa execução ainda não ocorreu, marque “aguardando verificação após a passagem” no registro.

## A que etapa voltar quando houver problemas

- Arquivo não encontrado: confira a pasta do terminal e se `work/` existe; volte à preparação.
- Não apareceu vermelho: verifique estado inicial e testes; o verde da solução de referência não reproduz a falha.
- Testes só passam após mudá-los: restaure as assertivas originais e retorne à análise da causa.
- Alterações alheias: preserve o diff, reduza a correção e rode os testes outra vez.
- Passagem não corresponde aos arquivos: use os arquivos atuais como base, atualize o registro e prossiga.

Em um projeto real, acrescente a esta estrutura lint, checagem de tipos e suíte completa exigidos pelo repositório. Determine a necessidade e os comandos pelas instruções do projeto. O exercício não tem essas verificações adicionais; não invente aprovações.

---
caseCategory: development
directoryOrder: 50
contentType: case
outputs: [code, tests, markdown]
legacyVerification:
  status: "verified"
  products: "CLI / IDE"
  basis: "O exemplo inicial foi verificado com uma falha esperada em três testes; a solução de referência passou nos três. A página organiza as evidências em teste vermelho, causa raiz, correção mínima, teste verde, regressão e revisão humana."
  checkedAt: "2026-08-25"
title: "Caso: correção de bug com verificação"
description: "Use um bug executável no cálculo de descontos para reproduzir a falha, identificar a causa, fazer a menor correção, repetir os testes e revisar o diff."
locale: pt
source_locale: zh-CN
source_revision: "42d842e"
translation_status: reviewed
reviewed_at: 2026-10-26
translated_at: 2026-09-20
---

Isto não é um modelo de prompt que se completa apenas trocando nomes de arquivos. Você usará o código inicial real do repositório, verá um teste falhar e depois examinará como a correção de referência faz a mesma bateria de testes passar.

## Metadados

| Campo | Conteúdo |
|---|---|
| Público | Desenvolvedores |
| Cliente | CLI ou IDE (repositório local) |
| Tempo estimado | 25–45 minutos |
| Conhecimentos prévios | Saber executar um comando Node.js no terminal e ler JavaScript simples |
| Dependências do exemplo | `node:test`, integrado ao Node.js; nenhum pacote de terceiros |
| Data da verificação | 2026-08-25 |

## 1. Objetivo e contexto

**Contexto de negócio:** a função `calculateTotal` do carrinho recebe um desconto em porcentagem. Sem desconto, o resultado está correto. Porém, quando recebe `10` para representar 10% de desconto, a função multiplica diretamente por `10`, como se fosse uma proporção, e produz um valor negativo.

**Objetivo:** encontrar o erro no cálculo do desconto, fazer a menor correção possível e usar os mesmos testes para demonstrar a passagem de vermelho para verde.

**Critérios de sucesso:**

- Os testes iniciais apresentam de forma consistente uma falha cuja asserção mostra “esperado 36, obtido -360”.
- Após a correção, os três testes passam.
- A correção altera apenas a conversão da porcentagem de desconto, sem reescrever a API do carrinho.
- Você consegue explicar por que a evidência verde após a correção precisa ser guardada junto da evidência vermelha anterior.

**Fora do escopo:** bibliotecas de precisão monetária, impostos, conversão de moedas, atualização de dependências e interface de usuário.

![Fluxo de correção de bug com verificação](/illustrations/flow-bug-fix.webp)

Os dois caminhos de retorno do diagrama são os mais importantes: se o teste relacionado falhar, volte à correção mínima; se a regressão completa ou a revisão do diff falhar, volte à análise da causa raiz. Não remova asserções nem amplie a alteração apenas para obter testes verdes mais rápido.

## 2. Preparar o material

Para seguir a sequência completa de aprendizagem, use a [trilha para desenvolvedores](/pt/guide/learning-paths/developer/): ela liga este exercício à leitura de código e aos modelos de revisão e passagem de contexto, e pede que você pratique em uma cópia separada de `work/`. O novo [resumo da execução de 2026-09-18](/downloads/developer-path/run-record.json) registra uma nova verificação do ponto de partida e da solução de referência; a data de 2026-08-25 abaixo é a verificação original deste caso.

Diretório do exemplo:

```text
examples/complete-workflows/developer/verified-bug-fix/
├── brief.md
├── starter/
│   ├── cart.js
│   └── cart.test.js
├── prompts/
│   ├── 01-explore.md
│   ├── 02-fix-and-verify.md
│   └── 03-review.md
├── solution/
│   ├── cart.js
│   └── cart.test.js
└── validation.md
```

`starter/` é o ponto de partida do exercício e contém um bug intencional; `solution/` é a solução de referência, executável de forma independente. Não pratique diretamente na solução.

## 3. Primeiro passo: reproduzir o teste vermelho

Execute na raiz do repositório:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js
```

Resultado esperado: o comando termina com código de saída diferente de zero e um dos três testes falha. A evidência principal se parece com isto:

```text
Expected values to be strictly equal:

-360 !== 36
```

Se nenhum teste falhar, pare primeiro. Verifique se executou o arquivo de `starter/`, qual é a versão do Node.js e se os arquivos foram alterados antes. Sem um teste vermelho reproduzível, não há evidência de referência para o problema original.

## 4. Segundo passo: pesquisa somente de leitura

### Explorar

```text
Não altere os arquivos ainda. Leia:
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.js
- examples/complete-workflows/developer/verified-bug-fix/starter/cart.test.js

Explique em até seis pontos:
1. qual entrada provoca a falha;
2. o valor esperado e o valor obtido;
3. a diferença entre porcentagem e proporção na fórmula;
4. em qual linha deve ser feita a correção mínima;
5. quais comportamentos públicos não podem mudar;
6. quais verificações executar após a correção.
```

Uma explicação correta da causa raiz deve apontar que a chamada passa `10` para representar 10%, mas a implementação calcula diretamente `subtotal * 10`, sem dividir por `100`.

## 5. Terceiro passo: planejar e executar a correção mínima

```text
Altere apenas a conversão da porcentagem de desconto em starter/cart.js.
Não mude o nome da função, os parâmetros, as asserções dos testes nem a estrutura dos arquivos. Não adicione dependências.

Após a correção, faça nesta ordem:
1. execute starter/cart.test.js;
2. mostre o resumo real dos testes;
3. explique a linha alterada e o motivo;
4. não faça commit nem push no Git.
```

O ponto central da correção mínima é:

```js
const discount = subtotal * (discountPercent / 100);
```

Não troque o `36` esperado no teste por `-360` só para obter verde. Isso reescreve a expectativa, mas não corrige a regra de negócio.

## 6. Quarto passo: verificar o teste verde

Se preferir não alterar o ponto de partida do exercício, execute diretamente a solução de referência:

```bash
node --test examples/complete-workflows/developer/verified-bug-fix/solution/cart.test.js
```

Resultado esperado: os três testes passam e o processo termina com código de saída `0`.

O registro da verificação deve conter, no mínimo:

| Evidência | Pergunta a responder |
|---|---|
| Comando que falhou antes da correção | O problema original pode ser reproduzido de forma consistente? |
| Asserção que falhou | O teste realmente cobre este bug? |
| Diff do código | A mudança atinge apenas a causa raiz? |
| Teste relacionado após a correção | O mesmo comportamento agora está correto? |
| Testes mais amplos | Alguma funcionalidade próxima foi afetada? |

O diretório deste exercício contém apenas uma bateria de testes. Em um projeto real, execute também lint, verificação de tipos e a bateria completa conforme o `AGENTS.md`.

## 7. Quinto passo: revisão

```text
Revise esta correção sem alterar arquivos. Liste primeiro os achados e depois a conclusão:
- A conversão da porcentagem foi realmente corrigida, em vez de o teste ter sido afrouxado?
- A assinatura da função ou alguma lógica não relacionada mudou?
- Carrinho vazio, ausência de desconto e desconto de 10% estão cobertos?
- Quais riscos de precisão monetária permanecem fora do escopo deste caso?
```

Uma pessoa também deve confirmar que não foram adicionadas dependências nem mensagens de depuração, que o arquivo inteiro não foi reformatado e que nenhuma operação Git foi feita.

## 8. Falhas e recuperação

| Problema | Ação |
|---|---|
| O teste inicial não falha | Confirme que executou `starter/cart.test.js` e restaure o ponto de partida sem alterações |
| O teste fica verde após uma mudança no próprio teste | Restaure a asserção; altere apenas a conversão da porcentagem na implementação |
| O teste relacionado ainda falha | Compare os valores da falha e verifique onde colocou `/ 100` |
| Surgem novas falhas na bateria completa | Volte à análise da causa raiz e confira o comportamento público e o alcance da mudança |
| O teste falha de modo intermitente | Primeiro estabilize o ambiente de testes; uma única execução verde não é evidência suficiente |

## 9. Levar o exercício para um repositório real

Substitua os caminhos do exemplo pelos seus arquivos, mas preserve a estrutura das evidências:

```text
Objetivo: corrigir [comportamento incorreto observável].
Comando de reprodução: [comando exato]; a falha atual e consistente é [asserção principal].
Escopo: alterar somente [arquivo de implementação] e os testes necessários; sem refatoração nem atualização de dependências.
Aceitação: o teste que falhava passa; os novos testes de casos-limite passam; [comando da bateria completa] passa; o diff não contém mudanças não relacionadas.
Permissões: não fazer push, publicar nem modificar dados de produção; parar e explicar antes de solicitar acesso adicional.
Primeiro investigue a causa raiz e os riscos em modo somente de leitura; aguarde minha confirmação do plano antes de editar.
```

## 10. Registrar o aprendizado

- Se esta classe de bug reaparecer, acrescente uma regra ao `AGENTS.md`.
- Você pode extrair um Skill `regression-guard` que exija o registro das evidências vermelha, verde e de regressão.
- Inclua no CI os testes frequentes de casos-limite, em vez de deixá-los apenas na conversa.

## 11. Capítulos relacionados

- [Diagnosticar antes de corrigir](/pt/cases/workflows/diagnose-before-fixing/)
- [Trilha de aprendizagem para desenvolvedores](/pt/guide/learning-paths/developer/)
- [Executar testes](/pt/guide/quality/run-tests/)
- [Revisar diffs](/pt/guide/quality/review-diffs/)
- [Definir critérios de conclusão](/pt/prompts/define-done/)

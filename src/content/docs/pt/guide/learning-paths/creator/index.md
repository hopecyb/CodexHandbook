---
title: 'Percurso do criador: fontes, artigo, apresentação e reutilização'
description: Use as mesmas fontes para produzir tabela de fatos, artigo, apresentação editável de oito slides e instruções reutilizáveis, com materiais e critérios de aceitação em cada etapa.
contentType: path
audiences:
- creator
- beginner
level: beginner
outputs:
- markdown
- csv
- pptx
- png
editorialStatus: review
verification:
  kind: editorial
  checkedAt: '2026-09-18'
  summary: Quatro marcos foram organizados a partir dos materiais reais do artigo e da apresentação, e a ligação entre entradas e saídas foi conferida. As validações individuais estão nos casos; o percurso completo ainda não foi cronometrado nem concluído de forma independente por leitores.
  evidence:
  - label: Materiais do artigo e registro de verificação do autor
    href: /downloads/source-backed-article/validation/record.md
  - label: Registro do ambiente e da renderização da apresentação
    href: /downloads/article-to-slides/validation/record.md
sidebar:
  order: 10
prev:
  link: /pt/guide/learning-paths/
  label: Escolher um percurso de aprendizagem
next:
  link: /pt/cases/write-an-article/#1-organizar-primeiro-fatos-e-conflitos
  label: Começar a organizar três fontes
locale: pt
source_locale: zh-CN
source_revision: "d1b46b1"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: '2026-10-26'
---

Use um conjunto de fontes para escrever um artigo, transformá-lo em apresentação editável e guardar instruções que poderá reutilizar. Cada etapa deixa arquivos com os quais você pode verificar se terminou.

É preciso conseguir abrir uma pasta local no Codex. A apresentação também exige uma ferramenta capaz de criar PPTX e um programa que o abra; o ambiente específico consta do caso. Nem todos os clientes precisam ter as mesmas ferramentas. Se ainda não conhece operações com arquivos, conclua antes [Trabalhar com arquivos](/pt/guide/learning-paths/beginner/02-work-with-files/).

## Percurso e materiais

| Etapa | Entrada necessária | Produto da etapa | Próximo passo |
|---|---|---|---|
| 1. Organizar evidências | Três fontes sintéticas e um índice | Tabela de fatos, lista de conflitos e lacunas | Escrever o artigo |
| 2. Escrever e revisar | Tabela de fatos, público e roteiro | Artigo, mapa de afirmações, notas de revisão | Criar a apresentação |
| 3. Criar a apresentação | Artigo, mapa de afirmações e objetivo da exposição | PPTX de oito slides, oito prévias, notas e registro de conferência | Guardar instruções reutilizáveis |
| 4. Guardar instruções | Produtos e experiência das três etapas anteriores | Modelo de tarefa, lista de aceitação e registro de uma adaptação | Repetir com novas fontes |

[Baixar o pacote do artigo](/downloads/source-backed-article/source-backed-article-1.0.0.zip) · [Baixar o pacote da apresentação](/downloads/article-to-slides/article-to-slides-1.0.0.zip)

Os dois pacotes também funcionam separadamente. Ao seguir o percurso inteiro, prefira seu próprio artigo concluído na etapa 3. O diretório `input/` do pacote de apresentação traz entradas de referência para quem não concluiu o artigo ou quer comparar. Todos os produtos, pessoas e entrevistas são materiais didáticos sintéticos.

## 1. Organizar evidências e preservar conflitos

Descompacte o pacote do artigo e leia `brief.md`, `sources/index.csv` e as três fontes listadas. Siga a [primeira parte do caso do artigo](/pt/cases/write-an-article/#1-organizar-primeiro-fatos-e-conflitos) para organizá-las, sem começar logo o texto corrido.

Guarde os resultados em `my-output/` do pacote, preservando as fontes originais. Na tabela de fatos, registre ID da fonte, seção, afirmação apoiada e tipo de evidência. Escreva também `unresolved.md` com as questões que as fontes não resolvem.

A etapa termina quando você localiza o conflito entre P3 e C2 sobre o padrão de diagnóstico sem escolher por conta própria uma resposta final. A entrevista sintética deve permanecer identificada como tal; não invente números de precisão ou economia de tempo ausentes das fontes.

Se uma fonte não abrir ou um ID não corresponder, restaure primeiro os arquivos e o índice; não deduza o conteúdo pelo nome. Depois avance.

## 2. Escrever o artigo e revisá-lo contra as fontes

Parta da tabela de fatos e das pendências. Continue com o [caso do artigo](/pt/cases/write-an-article/): defina o público, faça um roteiro, escreva continuamente dentro do escopo definido, depois revise fatos e linguagem.

Entregue `article.md`, `claim-map.csv`, `unresolved.md` e notas de revisão. Aponte pelo menos uma correção factual e uma de redação. O pacote de referência contém um rascunho inicial construído e um diff real de texto; não trate o contraexemplo planejado como falha real do modelo.

A etapa termina quando os fatos principais podem ser localizados, as sugestões do autor estão separadas dos fatos sustentados pelas fontes e o conflito de diagnóstico continua visível. Se houver Python, execute a validação estrutural do caso; mesmo que passe, avalie frase por frase se as fontes sustentam as conclusões.

Guarde os arquivos como entrada da próxima etapa. Seu artigo pode diferir do rascunho de referência, mas não pode perder limitações essenciais.

## 3. Transformar o artigo em oito slides

Parta do artigo pronto e da tabela de fatos. Siga o [caso da apresentação](/pt/cases/create-a-slide-deck/) para definir público, objetivo de cerca de cinco minutos e narrativa de oito slides. Confirme o layout primeiro com a capa e o slide de limitações; depois faça os restantes.

Copie artigo e tabela de fatos para o diretório de entrada da tarefa e diga que são suas versões. Não cite seu artigo pressupondo que todas as conclusões do rascunho de referência ainda se aplicam.

Entregue um PPTX de oito slides, oito prévias, notas por slide e registro de validação. Para concluir, ele deve abrir no programa de apresentação registrado, o texto principal deve ser editável, e cada slide precisa de conferência do texto chinês e dos limites. Os conflitos das fontes precisam continuar claros depois da síntese.

Se não houver ferramenta PPTX, salve o roteiro e anote a capacidade ausente. A etapa permanece incompleta até ser retomada em um ambiente adequado. Depois prossiga à reutilização.

## 4. Guardar instruções reutilizáveis

Comece com o artigo e a apresentação já concluídos e conferidos. Crie `workflow.md` com o modelo abaixo, descrevendo o método realmente usado; não guarde apenas um último prompt de “continue”.

```md
# Das fontes à apresentação

## Esta tarefa
- Público e finalidade:
- Diretório de entrada, índice de fontes e arquivos originais imutáveis:
- Diretório de saída e formatos exigidos:

## Sequência
1. Listar fatos, inferências, conflitos e lacunas antes de escrever.
2. Definir público e estrutura, escrever continuamente e revisar contra as fontes.
3. Condensar o artigo em oito slides; conferir primeiro capa e limitações.
4. Conferir texto nativo, fontes chinesas, todas as prévias e notas.

## Aceitação
- Fatos importantes remontam às fontes; questões pendentes continuam visíveis.
- Separar sugestões do autor e fatos do produto; não apresentar material sintético como depoimento real.
- PPTX abre e pode ser editado; registrar software e fontes ao conferir cada slide.
- Indicar verificações feitas e não feitas; manter a entrega local.

## Experiência desta vez
- Problemas encontrados, alterações e como a recuperação foi confirmada:
- Etapas que podem permanecer da próxima vez:
- Fatos e ambiente a reconfirmar:
```

Faça uma adaptação pequena: mude o público de “autores individuais em seu primeiro teste” para “colegas preparando a revisão dos materiais”. Mantenha as fontes e gere novamente apenas o roteiro. Em `reuse-check.md`, registre mudanças de título, ênfase e ordem, além dos limites factuais inalterados. O exercício testa se o modelo de instruções se adapta à nova tarefa, sem afirmar que realizou nova pesquisa factual.

A etapa termina quando outra pessoa consegue achar entradas e saídas em `workflow.md` e sabe quando o trabalho está completo. O registro de adaptação deve apontar diferenças concretas e não continuar escrevendo para o público original. Se a sequência estiver estável, leia [Transformar um fluxo em Skill](/pt/cases/workflows/turn-a-workflow-into-a-skill/). O [exemplo de Skill de escrita](/pt/skills/examples/writing-skill/) oferece pacote completo com amostras de estilo, tabela de fatos e tratamento de conflitos; validação estrutural não substitui a revisão factual humana.

## Opcional: começar com uma tarefa de números explícitos

Quem prefere análise de escritório pode começar pelo [relatório semanal de vendas](/pt/cases/analyze-a-spreadsheet/). Ele inclui CSV, reembolsos e linhas duplicadas, resumo de referência e script de conferência independente. Depois, acrescente “calcular números principais independentemente e explicar o critério de anomalias” à lista de aceitação; não é preciso forçá-lo no artigo sobre o produto fictício.

Ao terminar todo o percurso, você deve ter fontes, artigo e tabela de fatos, apresentação editável, registros de validação e instruções reutilizáveis. Apenas ler os links ou baixar as respostas de referência não conclui o exercício.

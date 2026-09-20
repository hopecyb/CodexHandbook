---
caseCategory: creation
directoryOrder: 30
title: Criar oito slides editáveis a partir de um artigo
description: Baixe o artigo, roteiro de oito slides, PPTX com texto nativo e prévias para praticar síntese narrativa, preservação de fontes e revisão da tipografia chinesa.
contentType: case
audiences: [creator, beginner]
task: editable-presentation
level: beginner
estimatedMinutes: 75
outputs: [pptx, pdf, png, markdown]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: O PPTX de referência foi importado em software, os oito slides renderizados e um texto nativo alterado; isso vale apenas para o ambiente registrado e é autoverificação do autor.
  environment: Artifact Tool JS / Node.js 24.19.0; LibreOfficeDev 26.8.0.0.alpha0 / Darwin arm64; Arial Unicode MS, com diretório de fontes do sistema configurado explicitamente.
  evidence:
    - label: Processo de validação, correção da fonte e escopo das verificações
      href: /downloads/article-to-slides/validation/record.md
assets:
  - path: /downloads/article-to-slides/article-to-slides-1.0.0.zip
    purpose: Entradas, prompts, PPTX, PDF, oito prévias e registro de validação para exercício independente
    license: CC0-1.0
    version: 1.0.0
prev:
  link: /pt/cases/write-an-article/
  label: Concluir primeiro o artigo com fontes
next:
  link: /pt/guide/learning-paths/creator/#4-guardar-instruções-reutilizáveis
  label: Guardar instruções reutilizáveis
locale: pt
source_locale: zh-CN
source_revision: '7189374'
translation_status: draft
translated_at: '2026-09-20'
---

Condense um artigo em oito slides e entregue PPTX com texto editável, prévias e notas de apresentação. Preserve limites e conflitos das fontes, sem inventar números ou gráficos para preencher páginas.

Dificuldade inicial. Duração de 60–90 minutos é estimativa editorial, não medida com leitores. Requer leitura de arquivos locais e ferramenta de criação de PPTX ou software de apresentação. O pacote já traz artigo de entrada: pratique de forma independente ou após o [caso do artigo](/pt/cases/write-an-article/).

[Baixar pacote completo v1.0.0 (ZIP)](/downloads/article-to-slides/article-to-slides-1.0.0.zip) · [Ver PPTX editável](/downloads/article-to-slides/solution/source-backed-writing.pptx) · [Ver PDF](/downloads/article-to-slides/solution/source-backed-writing.pdf)

## Resultado final

![Primeiro slide da referência: conferir um resumo antes de ampliar o uso; produto fictício e material sintético identificados](/downloads/article-to-slides/previews/slide-01.png)

A referência usa caixas de texto nativas; o texto principal é editável. Fontes, produto “Shiye” e pessoa “Xiaolin” são materiais didáticos fictícios sob CC0 1.0; arquivos de fonte tipográfica não são distribuídos.

| Slide | Uma ideia por página | Prévia real |
|---|---|---|
| 1 | Conferir antes de ampliar o uso | [Capa](/downloads/article-to-slides/previews/slide-01.png) |
| 2 | Formatos e evidências têm limites | [Questão do público](/downloads/article-to-slides/previews/slide-02.png) |
| 3 | As três fontes têm papéis de evidência distintos | [Fontes](/downloads/article-to-slides/previews/slide-03.png) |
| 4 | Teste restrito em quatro passos | [Método](/downloads/article-to-slides/previews/slide-04.png) |
| 5 | Remover propaganda sem fundamento | [Revisão](/downloads/article-to-slides/previews/slide-05.png) |
| 6 | Configuração de diagnóstico segue conflitante | [Limites](/downloads/article-to-slides/previews/slide-06.png) |
| 7 | Registrar conferência e completar incógnitas | [Próximo passo](/downloads/article-to-slides/previews/slide-07.png) |
| 8 | Fontes e propósito sintético rastreáveis | [Página de fontes](/downloads/article-to-slides/previews/slide-08.png) |

## 1. Ler entradas e definir o fio condutor

Descompacte `article-to-slides/` e leia `brief.md`, `input/article.md`, `input/claim-map.csv` e `input/unresolved.md`. Não copie imediatamente a referência.

```text
Leia brief.md e o artigo, a tabela de fatos e as questões pendentes em input/.
Planeje oito slides para um autor individual que experimenta pela primeira vez uma ferramenta de organização de notas, com duração-alvo de cerca de cinco minutos.
Em my-output/outline.md, escreva conclusão, pontos principais e IDs de fontes por slide.
Preserve o caráter fictício, os limites de formatos aceitos e o conflito de diagnóstico.
Não invente números de precisão, preço ou economia de tempo; separe sugestões do autor e fatos do produto.
```

O roteiro está pronto quando há oito papéis, uma ideia por slide e cada fato aponta para uma seção da fonte. Cinco minutos é meta, não evidência de ensaio realizado. O prompt completo está em `prompts/01-outline.md`.

## 2. Conferir o layout com dois exemplos

Faça primeiro a capa e o sexto slide de limitações: a primeira verifica o título grande; o segundo, o texto mais denso. A referência usa azul escuro, branco quente e texto nativo, sem exigir decoração.

```text
Com o roteiro de oito slides aprovado, crie primeiro amostras dos slides 1 e 6.
Use formato 16:9 e caixas de texto nativas; escolha fonte chinesa disponível no ambiente.
No slide 6, mantenha P3 “desligado por padrão” e C2 “ligado por padrão em novas instalações” e marque o resultado como não confirmado.
Renderize e confira chinês, quebras, margens e legibilidade das fontes. Depois de aprovar o layout, termine os outros seis slides.
Salve PPTX, oito prévias, notas por slide e registro de validação em my-output/.
```

A referência usa Arial Unicode MS. Se não houver essa fonte, escolha outra fonte chinesa disponível legalmente e valide novamente. Sem ferramenta PPTX, entregue o roteiro e registre a capacidade faltante; só o roteiro não conclui o exercício.

## 3. Conferir edição, oito slides e fontes

Abra seu PPTX no software de apresentação, salve cópia de teste, selecione e mude texto importante, salve e reabra. Exporte prévias de cada slide e confira chinês, quebras, sobreposição, número de páginas e notas. Oito imagens de página inteira não substituem arquivo editável.

A referência foi importada e exportada com LibreOffice headless. Em uma cópia temporária, o título em texto nativo mudou de “uma” para “duas”; o texto alterado foi lido após a exportação. Isso não equivale a teste de edição por cliques em GUI nem prova comportamento idêntico em todo software.

![Sexto slide: duas fontes contradizem a configuração padrão e a conclusão fica não confirmada](/downloads/article-to-slides/previews/slide-06.png)

O slide 6 é decisivo: não apague um lado do conflito nem resuma como “desligado por padrão”. A coluna esquerda do slide 5 é contraexemplo criado pelo autor e deve ser distinguida da redação correta à direita. As fontes detalhadas estão nas notas do PPTX e em `solution/slide-notes.md`.

## 4. Conferir arquivos de referência e registrar sua verificação

No pacote completo, execute para verificar os arquivos de referência baixados (Python 3.10+, somente biblioteca padrão):

```sh
python3 validation/check.py
```

O comando confere hashes, oito slides, texto nativo, notas e prévias da referência. Ele não valida seu novo arquivo em `my-output/`; confira-o no software como acima e registre versão, fonte, resultados e limites remanescentes.

Sem o script, ainda é possível abrir PPTX/PDF e conferir cada página, mas não afirme ter concluído a verificação de hash ou estrutura. O [registro de validação](/downloads/article-to-slides/validation/record.md) descreve o escopo real.

## Recuperação em caso de falha

| Sintoma | Ação | Evidência de recuperação |
|---|---|---|
| Chinês vira quadrados | Verificar acesso do renderizador a fonte chinesa; substituir em cópia se necessário | Oito páginas renderizadas novamente e legíveis |
| Texto transborda após troca de fonte | Reduzir texto, ajustar caixas e espaços mantendo os limites principais | Prévias sem cortes ou sobreposições |
| Texto não pode ser selecionado separadamente | Usar objetos de texto nativos, não PNG de página inteira | Selecionar, alterar, salvar e reabrir no software |
| Conflito foi “suavizado” | Rever P3, C2, C3 e restaurar as duas versões e “não confirmado” | Slide 6 coincide com a tabela de fatos |
| Arquivo não abre ou número de páginas errado | Reexportar e importar no software, guardar falha para diagnóstico | Oito páginas presentes e abertura normal |

O primeiro problema ocorreu de verdade: LibreOffice inicialmente não lia as fontes chinesas do sistema. Depois de configurar o diretório de fontes para o processo de renderização, o chinês voltou e os oito slides passaram por nova conferência. Páginas com caracteres faltando não foram usadas como prévias finais.

## Critérios de conclusão e próximo passo

- PPTX de oito páginas abre no software registrado e o texto importante é editável.
- Há oito prévias; chinês, quebras e limites foram vistos página por página.
- Fontes, identidade sintética, conselhos do autor e conflito pendente seguem claros.
- O registro indica verificações realizadas e não realizadas; os produtos permanecem locais.

Continue no [percurso do criador: guardar instruções reutilizáveis](/pt/guide/learning-paths/creator/#4-guardar-instruções-reutilizáveis). Passos estáveis podem virar um modelo próprio; depois veja [Transformar um fluxo em Skill](/pt/cases/workflows/turn-a-workflow-into-a-skill/).

---
title: 'Exemplo: Skill de revisão com escopo de diff explícito'
description: Baixe o pacote scoped-review, diferencie revisões staged, unstaged e de branch, e reproduza um cenário do Git fácil de deixar passar.
contentType: skill
audiences:
- developer
level: intermediate
outputs:
- markdown
- json
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Sete testes de regressão do coletor de diffs e as verificações estruturais do Skill passaram. Os exemplos de acionamento e achados da revisão foram criados pelo autor; não houve roteamento automático entre modelos nem experimento de taxa de detecção de defeitos.
  environment: Python 3.12.11 / Git / Darwin arm64; repositórios sintéticos temporários, sem dependências de terceiros.
  evidence:
  - label: Escopo e limites da execução real
    href: /downloads/skills/scoped-review/validation/record.md
assets:
- path: /downloads/skills/scoped-review/scoped-review-1.0.0.zip
  purpose: Skill, coletor, guia de escopos, entradas sintéticas, revisão de referência e testes de regressão
  license: CC0-1.0
  version: 1.0.0
locale: pt
source_locale: zh-CN
source_revision: "e29d1b3"
translation_status: reviewed
translated_at: '2026-09-20'
reviewed_at: 2026-10-26
---

Antes da revisão, defina o que será comparado. Este Skill evita confundir “mudanças locais ainda não commitadas” com “commits relativos à main”, ou deixar passar um erro no índice porque a árvore de trabalho parece correta.

[Baixar scoped-review v1.0.0](/downloads/skills/scoped-review/scoped-review-1.0.0.zip) · [Ver SKILL.md](/downloads/skills/scoped-review/SKILL.md) · [Guia de instalação e uso](/downloads/skills/scoped-review/README.md)

## O que ele faz

| Pedido | Escopo coletado | Não inclui |
|---|---|---|
| Revisar apenas mudanças staged | HEAD → índice | Conteúdo unstaged |
| Revisar apenas mudanças unstaged | Índice → árvore de trabalho | Patch staged |
| Revisar mudanças locais ainda não commitadas | Manter os dois patches separados; listar arquivos novos | Ler separadamente o conteúdo dos arquivos novos |
| Revisar commits relativos a um branch indicado | Base de merge única → HEAD | Conteúdo local não commitado |

Ele não presume `main` como padrão. Se a base não existir, dá erro em vez de alterar o escopo silenciosamente. O coletor fornece evidências; avaliar defeitos ainda requer código e testes relevantes.

## Instalação e primeira chamada

Você precisa de Python 3.10+, Git e um repositório local de prática com ao menos um commit. Coloque o `scoped-review/` extraído em `.agents/skills/` do projeto de destino, confirmando a entrada `.agents/skills/scoped-review/SKILL.md`. Se houver um Skill com o mesmo nome, compare as versões primeiro e não sobrescreva o Skill existente.

Use o [guia oficial](https://learn.chatgpt.com/docs/build-skills) para descobrir Skills locais e suas entradas. Confirme que ele está disponível após instalar e chame explicitamente:

```text
$scoped-review Revise as mudanças de código locais ainda não commitadas neste repositório de prática.
Não altere arquivos. Liste primeiro os achados e depois explique a cobertura
de arquivos staged, unstaged e novos.
```

O pacote didático não se instala automaticamente na sua configuração pessoal. Você também pode executar diretamente o script incluído para observar o escopo coletado.

## Reproduza um cenário fácil de perder

A entrada sintética fica em `fixtures/scenario.json`:

1. A fórmula de desconto de base está correta.
2. Coloque em stage a fórmula errada: `amount * (1 - percent)`.
3. Restaure na árvore de trabalho a fórmula correta: `amount * (1 - percent / 100)`, sem colocar a correção em stage.

Nesse ponto, `git diff HEAD` pode não mostrar alteração, mas commitar o índice ainda introduziria o erro. Com `amount=40, percent=10`, a versão staged produz -360 em vez de 36.

Uma revisão correta aponta tanto o erro staged quanto o patch unstaged que o corrige. A [referência completa do autor](/downloads/skills/scoped-review/fixtures/expected-review.md) também explica por que o modo branch não deve ser misturado a esse problema local; ela não é saída real de um modelo.

## Execute as verificações incluídas

No diretório do Skill extraído, rode:

```sh
python3 validation/test_scopes.py
```

Sete testes em repositórios Git temporários verificam o escopo, a regressão de revisão perdida, a rejeição de base inválida, a lista de novos arquivos e a ausência de alteração no repositório revisado. O êxito termina com código 0. Os testes não escrevem no seu projeto real.

Para usar o coletor em um repositório:

```sh
python3 scripts/collect_diff.py --repo /path/to/your/repo --mode working-tree
```

Substitua o caminho por um repositório cuja revisão esteja autorizada. O modo branch também exige `--base`. A saída JSON pode conter código privado e não é enviada automaticamente. Os comandos completos estão no [guia de escopos](/downloads/skills/scoped-review/references/scopes.md).

## Quando não acionar

Revisão de texto e implementação de novas funções não pertencem a este Skill. Para um “review” vago, use o contexto para definir o escopo e pergunte se ainda estiver incerto. Os [casos de acionamento](/downloads/skills/scoped-review/fixtures/trigger-cases.json) incluem sete pedidos esperados; o roteamento automático real não foi medido.

## Critérios de conclusão e limites

- O relatório informa o snapshot, a base e os arquivos de fato revisados.
- Achados têm local, condição de disparo, efeito e evidências; preferências de estilo não viram bloqueios.
- O conteúdo de arquivos relevantes não rastreados foi examinado ou claramente indicado como não revisado. Binários, arquivos ignorados e submódulos não são apresentados como cobertos.
- Informe quais verificações foram ou não executadas. A ausência de achados não garante que não haja defeitos.
- A revisão termina no relatório; ela não altera, commita ou envia mudanças automaticamente.

Use os modelos de revisão e passagem de contexto da [trilha de desenvolvedor](/pt/guide/learning-paths/developer/) para guardar o resultado. O esqueleto curto `pr-review` ainda ajuda a entender a estrutura; o pacote tem outro nome para evitar substituir uma versão pessoal.

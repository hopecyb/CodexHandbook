---
legacyVerification:
  status: "verified"
  products: "App / CLI / IDE / Cloud"
  basis: "Princípios de seleção de ferramentas orientados pela tarefa: ler/alterar projeto → arquivos; validar comandos → terminal; fatos públicos → pesquisa; página real → navegador; este quadro foi cruzado com o capítulo de ferramentas do manual e com as categorias reais de ferramentas."
  checkedAt: "2026-07-26"
title: Seleção de ferramentas
description: Quando usar terminal, pesquisa, navegador ou outras ferramentas.
locale: pt
source_locale: zh-CN
source_revision: "9fdb366"
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-10-26
sidebar:
  order: 10
---

«Seleção de ferramentas» é: que forma usar para fazer isto — eficaz e segura.

Ao escolher, julgar pelo tipo de tarefa costuma ser mais claro.

## O que se olha ao escolher ferramenta

Ao escolher, veja sobretudo:

- Qual está mais perto da tarefa atual
- Qual obtém o resultado com o menor custo
- Qual tem o menor risco e é mais fácil de verificar

O mesmo objetivo com a ferramenta errada pode não falhar de todo, mas costuma ser mais lento, mais indireto e com mais surpresas.

| Necessidade | Prioridade |
|---|---|
| Alterar arquivos no repositório | ferramentas de arquivos |
| Correr testes/build | Terminal |
| Verificar fatos públicos | Pesquisa Web |
| Ver o estado real da página | Navegador (avançado) |

No Prompt, declare ferramentas permitidas e proibidas — reduza saída de rede não autorizada ou instalação aleatória de dependências.

## Como escolher quando não tem a certeza

Se não souber de imediato:

1. Está a tratar o projeto local ou a verificar fatos externos?
2. Precisa de «executar uma ação» ou só de «ver o resultado»?
3. Qual ferramenta completa este passo no menor escopo?

Por exemplo:

- Ver alterações de código → arquivos
- Confirmar se o build passa → terminal
- Confirmar como a página está agora → navegador
- Confirmar informação pública atualizada → pesquisa Web

## Mal-entendidos habituais

### 1. ferramenta mais forte ≠ melhor

ferramentas mais fortes costumam também significar:

- Maior superfície de impacto
- Mais risco
- Mais necessidade de compreender o que fazem

### 2. O terminal faz tudo — não tem de ser a primeira escolha

Se só quer ver como a página está, o navegador costuma ser mais direto.
Se só quer um número de versão público, a pesquisa Web encaixa melhor do que correr comandos por todo o lado.

### 3. E se não souber escolher?

Regra prática:

- **Ler/alterar conteúdo do projeto** → arquivos
- **Validar comando ou build** → terminal
- **Verificar fatos públicos** → pesquisa
- **Ver a apresentação real da página** → navegador

### 4. Uma tarefa costuma usar mais do que uma ferramenta

Muitas tarefas reais combinam, por exemplo:

- Ler arquivos e depois correr o build
- Pesquisar fatos públicos e voltar a reescrever a documentação
- Ver a página no navegador e depois corrigir no código

O essencial é, em cada passo, usar a ferramenta mais adequada — não teimar em «só pode escolher uma».

## Redação aplicável diretamente

Pode acrescentar na tarefa:

```text
Priorize ficheiros e terminal; não pesquise na rede; se precisar do browser para verificar a página, explique primeiro o motivo.
```

Escolha primeiro a ferramenta mínima e mais alinhada com a tarefa — não comece pela de maior superfície de impacto.

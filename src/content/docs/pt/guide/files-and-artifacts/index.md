---
title: Ficheiros e Artefatos
description: Como o Codex lê e escreve vários tipos de ficheiros, gere entregáveis gerados e pontos de aceitação.
sidebar:
  order: 30
locale: pt
source_locale: zh-CN
source_revision: 3a5cc3b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

O núcleo do que o Codex produz costuma ser **alterações de ficheiros no repositório** ou **Artefatos novos** (documentos, imagens, configuração). Este tema explica boas práticas por tipo de ficheiro, para evitar «gerou mas não se usa».

Também sendo «ficheiros», tipos diferentes pedem formas diferentes de encomendar e de aceitar.

«Alterar código», «tratar tabelas», «gerar ecrãs», «exportar PPT» parecem todos Tarefas de ficheiros, mas os pontos onde mais se erra não são os mesmos.

## Navegação do capítulo

| Tema | Página |
|---|---|
| Código e texto | [Ficheiros de texto e código](/pt/guide/files-and-artifacts/text-and-code-files/) |
| Ecrãs e entrada de design | [Imagens e ecrãs](/pt/guide/files-and-artifacts/images-and-screenshots/) |
| PDF e documentos longos | [PDF e documentos](/pt/guide/files-and-artifacts/pdf-and-documents/) |
| Dados tabulares | [Tabelas e folhas de cálculo](/pt/guide/files-and-artifacts/tables-and-spreadsheets/) |
| Diapositivos | [Apresentações](/pt/guide/files-and-artifacts/presentations/) |
| Saídas do Agent | [Aceitação de Artefatos gerados](/pt/guide/files-and-artifacts/generated-artifacts/) |

Método geral: [Verificar Artefatos](/pt/guide/quality/verify-artifacts/).

## O que este capítulo cobre

Este capítulo trata sobretudo de três coisas:

- Como encomendar a Tarefa com clareza
- Onde mais facilmente erra em silêncio
- Como aceitar no fim

É mais um conjunto de instruções por tipo de ficheiro do que uma lista de funcionalidades.

## Princípios unificados

1. **Caminho claro**: no Prompt, declare caminho de saída e nomenclatura
2. **Formato acordado**: extensão, encoding (UTF-8), fim de linha alinhados com o projeto
3. **Consciência de volume**: binários grandes fora do Git, ou LFS/CDN
4. **Aceitação humana**: gerar ≠ concluir; compare com [Definição de concluído](/pt/guide/quality/definition-of-done/)
5. **Dados sensíveis**: ver [Contexto sensível](/pt/guide/context/sensitive-context/)

## Mal-entendidos habituais

### 1. Ficheiro gerado ≠ Tarefa concluída

Em muitas Tarefas de ficheiros o problema não é «gerou ou não», e sim:

- O formato está certo?
- O conteúdo está preciso?
- O caminho está certo?
- O downstream consegue continuar a usá-lo?

### 2. A forma de encomendar é mais ou menos a mesma em todos os tipos?

Também não.  
Por exemplo:

- Ficheiros de código: âmbito, lógica e testes
- Tabelas: colunas, tipos e regras de agregação
- Imagens: conteúdo visual e dimensões
- Documentos: estrutura, tom e factos

### 3. Se abrir, já está bem?

Também não.  
«Abrir» é só o passo mais básico — não significa que esteja pronto para commit, publicação ou entrega.

## Ordem de leitura sugerida

Na primeira vez a tratar ficheiros com o Codex:

1. Encontre o tipo de ficheiro mais parecido com a Tarefa atual
2. Veja onde esse tipo mais erra
3. Depois veja a forma de aceitação correspondente

Assim não fica esmagado pela informação do capítulo inteiro de uma vez.

## Relação com as Ferramentas

- Ler/escrever ficheiros: Ferramentas de ficheiros + terminal
- Ver imagens: [Prompt com imagens](/pt/prompts/prompting-with-images/)
- Ver páginas: [Ferramenta de browser](/pt/guide/tools/browser/)
- Gerar imagens: [Geração de imagens](/pt/guide/tools/image-generation/)

Em Tarefas de ficheiros é comum o resultado já estar gerado, mas o formato, as regras ou o conteúdo já terem desviado em silêncio.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com a estrutura atual do subcapítulo files-and-artifacts e com capítulos já verificados deste manual sobre Verificar Artefatos, definição de concluído, Contexto sensível e imagens; esta página limita-se ao princípio estável de escolher forma de encomenda e aceitação por tipo de ficheiro.  
**Última verificação:** 2026-07-26

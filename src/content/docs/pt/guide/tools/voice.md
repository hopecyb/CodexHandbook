---
title: Entrada e saída de voz
description: Cenários, limitações e cuidados de privacidade ao interagir com o Codex por voz.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 70
---

Alguns clientes Codex suportam **voz**: você enuncia a Tarefa ou ouve um resumo da resposta. Serve para mãos ocupadas e ditado rápido de ideias — **não** para ler segredos em voz alta, nem substitui o registo escrito de aceitação.

A voz encaixa melhor em direção, contexto suplementar ou follow-up rápido; detalhes precisos, pesquisáveis e revisáveis voltam ao texto.

## Conteúdo desta página

- Que formas de Tarefa a voz serve
- Como combinar com o Prompt escrito
- Cuidados de privacidade e precisão

## Cenários adequados

| Adequado | Inadequado |
|---|---|
| Ditado de objetivos de alto nível, brainstorming | Instruções de código precisas até ao nome da variável |
| Follow-up breve em telemóvel | Ler em voz alta API keys ou palavras-passe |
| Necessidades de acessibilidade | Documentação normativa que precisa de pesquisa e diff |

Após ditar, peça ao Codex para **repetir a compreensão** ou gerar um plano escrito, e só então confirme. Ver [Pedir um plano](/prompts/ask-for-a-plan/).

## Para que serve a voz

Principais vantagens:

- Rápida
- Liberta as mãos
- Adequada a descarregar primeiro as ideias da cabeça

Problemas comuns:

- Fácil omitir palavras
- Fácil ouvir mal
- Não adequada a caminhos precisos, nomes de variáveis, parâmetros de linha de comando

Prática comum: ditar primeiro a direção e depois complementar em texto para confirmar.

## Sugestões de uso

1. Ambiente calmo, frases curtas; diga por secções «objetivo / restrições / critérios de conclusão»
2. Em caminhos de ficheiros e nomes de branches, **passe a escrever** ou peça ao Agent para repetir a ortografia
3. Em projetos sensíveis, desative o processamento de voz na cloud (se o produto oferecer opção local/desativar)
4. Em decisões importantes, conserve registo escrito em issue ou PR

## Mal-entendidos habituais

### 1. A voz pode substituir completamente a escrita?

Não.  
Estes conteúdos é melhor escrever:

- Caminhos de ficheiros
- Nomes de branches
- Comandos
- Parâmetros
- Critérios de aceitação

### 2. Quanto mais detalhado o ditado, menos erros?

Um ditado longo sem estrutura dispersa o essencial com mais facilidade.

### 3. A resposta por voz substitui a revisão do resultado?

Não.  
O resumo por voz ajuda a apanhar a ideia depressa; para confirmar alterações, ficheiros, diffs e resultados de testes, volte ao texto e aos Artefatos.

## Ordem habitual de formulação

Ao pedir a Tarefa por voz:

1. O que quero fazer
2. O que não fazer
3. Como verificar no fim

Depois, peça-lhe para organizar numa versão escrita para confirmar.

## Privacidade

- A voz pode passar por transcrição na cloud; não leia PII de clientes nem credenciais
- Em locais públicos, atenção a quem ouve
- Políticas de equipa podem proibir funções de gravação em nomes de código confidenciais

## Relação com multimodalidade

- **Entrada de imagem**: mockups, ecrãs → [Prompt com imagens](/prompts/prompting-with-images/)
- **Entrada de voz**: esta página
- **Saída**: continua a centrar-se em código, ficheiros e diffs escritos; o resumo por voz não substitui a revisão

## Erros habituais

- Ditado longo sem estrutura; o Agent omite restrições
- Aceitar por voz alterações de código em massa sem ver o diff
- Descrever por voz detalhes de incidentes de produção sem desmascarar

A voz serve para arrancar e acompanhar — não para substituir instruções precisas, tratamento de informação sensível e aceitação final.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / Desktop Voice (conforme plano e definições da área de trabalho)  
**Base de verificação:** Os artigos atuais do OpenAI Help Center 《ChatGPT Voice》 e 《ChatGPT Work and Codex》 deixam claro: Voice pode combinar-se com Work / Codex na App de ambiente de trabalho para arrancar Tarefas, acompanhar progresso e coordenar trabalho; capacidades e disponibilidade dependem do plano, das definições da área de trabalho e da versão. Esta página foca cenários de voz, cuidados de privacidade e o método «após ditar, voltar ao texto para confirmar».  
**Última verificação:** 2026-07-26

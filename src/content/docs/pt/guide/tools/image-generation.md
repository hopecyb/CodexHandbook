---
title: Geração de imagens
description: Gerar ou editar imagens em Tarefas Codex — Prompt, formato e aceitação.
locale: pt
source_locale: zh-CN
source_revision: 67d0eb7
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Em alguns cenários, o Codex pode chamar capacidades de **geração de imagens**: ilustrações, rascunhos de ícones, conceitos de UI, diagramas. O resultado deve tratar-se como **Artefato por aceitar**, não como ativo de marca pronto a publicar.

Serve para dar primeiro um rascunho visual — não para tratar como produto final direto.

## Conteúdo desta página

- Quando gerar imagens no Codex vs usar Ferramentas profissionais
- Como escrever o Prompt de imagem e as restrições
- Direitos de autor, marca e gestão de ficheiros

## Cenários adequados

| Adequado | Inadequado |
|---|---|
| Rascunhos de imagem para blog, diagramas de documentação interna | Materiais externos sujeitos a manual de marca rigoroso |
| Explorar depressa o ambiente de layout de UI | Entrega de design com fidelidade ao pixel |
| Ícones de exemplo em tutoriais | Cenas com retratos reais sem autorização |

Complementa [Prompt com imagens](/pt/prompts/prompting-with-images/): essa página trata de imagens de **entrada**; esta, de imagens de **saída**.

## Para que serve a geração de imagens

A geração de imagens encaixa melhor em:

- Dar direção depressa
- Ajudá-lo a ver um conceito visual
- Dar um esboço utilizável a artigos, documentação ou protótipos

Estes usos não devem ir direto para o resultado gerado:

- Fingir que é material formal de marca
- Fingir que é um mockup de design preciso
- Fingir que é o visual final pronto a publicar

## Fluxo de trabalho recomendado

1. Declare uso, proporção de tamanho, palavras-chave de estilo (evite empilhar nomes de estilos que violem direitos)
2. Exija formato de saída (PNG/SVG se suportado) e caminho de gravação
3. Após gerar, [Verificar Artefatos](/pt/guide/quality/verify-artifacts/): abrir o ficheiro, verificar resolução e legibilidade
4. Antes de publicação externa, revisão de design ou jurídica

## Mal-entendidos habituais

### 1. Imagem bonita = já pode usar?

Ainda veja:

- O cenário corresponde ao uso
- Há detalhes estranhos
- O texto tem caracteres estranhos
- O estilo combina com o seu conteúdo

### 2. Basta «gere-me uma imagem»?

Muitas vezes não.  
Clarifique pelo menos:

- Uso
- Formato ou proporção
- Direção de estilo
- Se deve haver texto
- Formato do ficheiro

### 3. A geração de imagens substitui o designer?

Aproxima-se mais de:

- Ferramenta de exploração inicial
- Ferramenta de imagem de apoio a conteúdo
- Ferramenta de esboço conceptual

Não é substituto de entrega rigorosa de design.

## Como escrever

Pode pedir nesta estrutura:

1. Para que serve esta imagem
2. Horizontal, vertical ou quadrada
3. Que atmosfera e cores quer
4. Se deve aparecer texto
5. Como vai verificar após a saída

## Ficheiros e repositório

- Imagens grandes em `assets/` ou CDN; avalie o volume do Git
- No PR, indique o Prompt de geração e a versão do modelo (auditoria interna)
- Ver [Imagens e ecrãs](/pt/guide/files-and-artifacts/images-and-screenshots/)

## Segurança e conformidade

- Não gere conteúdo enganoso com identificadores sensíveis, documentos falsos ou retratos de terceiros
- Políticas empresariais podem proibir certos temas; cumpra [uso aceitável](https://openai.com/policies/) e regras internas

## Referências
- OpenAI Help Center: Images in ChatGPT
- OpenAI Academy: Creating images with ChatGPT
## Erros habituais

- Commit direto de imagens 4K sem compressão
- Usar imagem gerada como se fosse foto real ou logo oficial
- Não restringir «sem texto» no Prompt → legendas ilegíveis

A geração de imagens serve melhor para direção e rascunhos; na entrega externa, continue a aceitar com o padrão de Artefato formal.

---

**Estado:** verificado  
**Produtos aplicáveis:** App / Cloud (conforme a versão)  
**Base de verificação:** Revista com materiais oficiais OpenAI de geração e edição de imagens quanto a cenários, redação de Prompts e limites de aceitação; o corpo mantém a conclusão conservadora «rascunho primeiro; Artefato formal precisa de revisão».  
**Última verificação:** 2026-07-26

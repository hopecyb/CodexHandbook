---
title: Apresentações
description: Gerar, rever e exportar diapositivos e decks — acordos de estrutura, master e notas de apresentação.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Apresentações (PPT, Keynote, Google Slides, Marp/Reveal, etc.) valorizam **estrutura narrativa** e **consistência visual**. O Agent é forte em esboço e rascunho; master e normas de marca ainda precisam de revisão humana.

Com o Codex em decks, o maior valor é montar primeiro estrutura, ordem de páginas e lógica de discurso; o fecho final continua consigo.

## Conteúdo desta página

- Fluxo de trabalho recomendado para diapositivos com o Codex
- Escolhas entre formatos (`.pptx`, diapositivos Markdown)
- Como evitar «cada página com estilo desligado»

## Defina primeiro o formato de entrega

| Formato | Adequado para |
|---|---|
| Marp / Slidev / reveal.md | Programadores; amigável a controlo de versões |
| `.pptx` | Relatórios de negócio; partilha com clientes |
| Google Slides | Colaboração em tempo real (muitas vezes via exportação ou MCP) |
| Exportação PDF | Distribuição só de leitura |

No início da Tarefa, fixe o formato — evite misturar várias cadeias de Ferramentas.

Escolha pelo destinatário final:

- Cliente, chefe ou colega que abre e edita → normalmente `.pptx`
- Versionar junto com o código → normalmente diapositivos Markdown
- Só versão de leitura → normalmente exportação PDF final

## Fluxo de trabalho recomendado

```text
1. Esboço: audiência, duração, 3–5 mensagens centrais
2. Título por página + 3 bullets; pontos-chave nas notas
3. Escolher Ferramenta e gerar o rascunho
4. Ajuste humano de master, gráficos e fontes de dados
5. Exportar PDF e ensaiar com cronómetro
```

Alinhado com [Explorar—planear—executar—verificar](/cases/workflows/explore-plan-execute-verify/): aceite o esboço antes de preencher detalhes.

## Porque controlar a estrutura primeiro

Sem controlo de estrutura, o Codex facilmente espalha muitas páginas com:

- Ordem confusa
- Número de páginas descontrolado
- Cada página como um cartaz isolado, não o mesmo relatório

Costuma ser mais estável avançar nestas 3 camadas:

1. Definir «o que esta apresentação tem de esclarecer»
2. Definir «que mensagem central cada página carrega»
3. Só depois deixar o Agent preencher texto, legendas de gráficos e notas

## Mal-entendidos habituais

### 1. PPT vistoso = comunicação mais forte?

Muitas vezes o que realmente afeta a compreensão é:

- O título diz o essencial numa frase
- Há relação de progressão entre páginas
- Os dados têm fonte

### 2. Se o Agent gera o rascunho inteiro, não precisa de revisão humana?

Também não.  
Revise sempre:

- Marca e master da empresa
- Conclusões-chave
- Números e gráficos
- Versão para envio externo

### 3. Página mais cheia = informação mais completa?

Normalmente fica mais difícil de apresentar.  
Com demasiados bullets, figuras e conclusões numa página, a audiência não apanha o foco.

## Ordem habitual de produção

Se quiser que o Codex faça um deck agora:

1. Diga quem é a audiência
2. Diga a duração
3. Diga os 3 pontos que quer que fiquem
4. Peça primeiro o esboço
5. Com o esboço confirmado, expanda cada página
6. Por fim acrescente notas, requisitos visuais e formato de exportação

Nesta ordem costuma fechar melhor: primeiro estrutura, depois texto, por último estilo.

## Pontos-chave do Prompt

- **Audiência**: colegas técnicos vs gestão — profundidade de jargão
- **Limite de páginas**: evitar 80 páginas de enchimento
- **Marca**: cor principal, caminho do logo, proibir clipart (se a empresa tiver norma)
- **Gráficos de dados**: indique o ficheiro-fonte; exija atualizável, não inventar a partir de ecrã

Também pode formular assim:

> «Faça primeiro um esboço de no máximo 10 páginas; audiência de gestão não técnica; uma conclusão central por página; no fim acrescente notas.»

Isto costuma produzir uma versão mais trabalhável do que «faça um PPT impressionante».

Necessidades de imagem: [Imagens e ecrãs](/guide/files-and-artifacts/images-and-screenshots/); só geração de imagens: [Geração de imagens](/guide/tools/image-generation/).

## Aceitação

- Tamanho de letra legível na resolução do projetor
- Animação moderada (demasiada animação é difícil de manter)
- Números alinhados com [Validar fontes](/guide/quality/validate-sources/)
- Notas suficientes (se necessárias)

## O que entregar ao Codex e o que decidir você

| Mais adequado ao Codex | Melhor decisão humana |
|---|---|
| Dividir o esboço em páginas | Formulação final das conclusões |
| Rascunho de títulos | Consistência de marca |
| Rascunho de notas | Dados sensíveis |
| Texto de legendas de gráficos | Versão para publicação externa |

Esta divisão costuma poupar tempo e facilitar o controlo de qualidade.

## Erros habituais

- Sem esboço, pedir direto «faça um PPT de relatório trimestral»
- Alterar `.pptx` binário à mão repetidamente sem manter a fonte Markdown
- Dados dos gráficos inconsistentes com o CSV do repositório
- Pedir ao Agent para decidir de uma vez estrutura, design, conclusões e critérios de dados

## Lista de verificação

- [ ] Esboço confirmado por humano antes de gerar o texto completo
- [ ] Abre no ambiente de apresentação alvo sem fontes erradas
- [ ] Dados-chave rastreáveis até ao ficheiro-fonte

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre prioridade de Artefatos, Validar fontes, imagens/ecrãs e Verificar Artefatos; o conteúdo limita-se ao método estável «primeiro estrutura, depois texto, por último estilo e exportação».  
**Última verificação:** 2026-07-26

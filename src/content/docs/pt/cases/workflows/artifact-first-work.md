---
title: Artefato primeiro
description: Acordar primeiro a forma e o caminho do artefato final, depois derivar os passos — adequado a documentação, configuração, relatórios e entregáveis semelhantes.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

**Artefato primeiro** significa clarificar a forma e a localização do entregável antes de deixar o Codex derivar os passos. Adequado a tarefas com saída clara — documentos Markdown, OpenAPI, scripts de migração, esboços de apresentação — e pode combinar-se com [trabalho orientado por especificação](/cases/workflows/specification-driven-work/).

## Foco desta página

- Como descrever a estrutura do artefato em vez dos detalhes do processo
- Verificação de consistência em artefatos multi-ficheiro
- Alinhamento com as capacidades de [ficheiros e artefatos](/guide/files-and-artifacts/)

## Prática mínima viável

```text
Artefato-alvo:
- docs/api/auth.md (com 3 subsecções: visão geral, endpoints, códigos de erro)
- Estilo consistente com @docs/api/users.md

Primeiro produza o esboço do sumário e os pontos de cada secção; não escreva o texto completo;
após a minha confirmação, gere e verifique se as ligações internas são válidas.
```

## Fluxo recomendado

```text
Definir a lista de artefatos (caminho + formato + referência de exemplo)
    → Esboço ou ficheiros-esqueleto
    → Confirmação humana
    → Preencher conteúdo + ligações cruzadas
    → Verificar (lint, verificação de ligações, pré-visualização)
```

Para artefatos visuais, peça capturas ou notas de pré-visualização; ver [verificar artefatos](/guide/quality/verify-artifacts/).

## Erros comuns

- Caminho do artefato inconsistente com as convenções do repositório (diretório errado)
- Gerar só um ficheiro e ignorar navegação e atualização do index
- Não confrontar com o exemplo — estilo fragmentado
- Artefatos binários (pptx/docx) sem explicar como o humano abre e aceita

## Limites de segurança

- Se o gerado incluir conteúdo com direitos de terceiros, é necessária verificação humana de conformidade
- Não sobrescrever caminhos de configuração de produção; produza primeiro num ramo ou sob `draft/`

## Lista de aceitação

- [ ] Todos os ficheiros declarados existem e abrem
- [ ] Formato consistente com o exemplo citado
- [ ] Ligações / sumário / frontmatter válidos
- [ ] Cumpre [definir concluído](/prompts/define-done/)

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os capítulos já verificados deste manual sobre ficheiros e artefatos, definição de concluído e verificação de artefatos; o conteúdo foca o método estável «acordar o entregável primeiro, depois derivar os passos».  
**Última verificação:** 2026-07-26

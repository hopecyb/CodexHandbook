---
title: Plugins
description: Páginas sobre distribuição de extensões em equipe — Plugin é camada de empacotamento, não um tipo novo de capacidade.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Plugin resolve principalmente: como empacotar um conjunto de capacidades de extensão para outros instalarem e gerenciarem.

Inclina-se para:

- Empacotamento
- Distribuição
- Atualização
- Governança de Permissão

Não inventa um tipo novo de capacidade por conta própria.

## Cenários de uso

Este grupo cobre sobretudo dois casos:

- Você vai distribuir um conjunto unificado de extensões para a equipe
- Quer decidir se um plugin vale a pena instalar

Para aprendizado pessoal, uma página de conceitos costuma bastar.

## Entrada deste grupo

- [Visão geral de Plugins](/skills/plugins/plugins-overview/): entenda a relação de Plugin com Skill e MCP, e por que ele se parece mais com camada de distribuição

## Equívocos comuns

### 1. Instalar Plugin = automático e seguro

Plugin só facilita a distribuição da capacidade; não significa confiança padrão nem baixa Permissão por padrão.

### 2. Quanto mais recursos, mais vale instalar

Antes, olhe:

- Se a origem é confiável
- Se o escopo de Permissão é amplo
- Se a equipe consegue atualizar, reverter e auditar

Plugin é um pacote de distribuição de extensões — não substitui Skill nem MCP.

---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI  
**Nota de revisão:** O diretório de plugins, a política de instalação e o suporte de superfície ainda evoluem; estas páginas fixaram demais esses detalhes, por isso marcadas como `outdated` até reescrita conforme o catálogo Plugin vigente.  
**Última Verificação:** 2026-07-26

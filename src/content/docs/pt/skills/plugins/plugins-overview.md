---
title: Visão geral de Plugins
description: Empacote Skills, MCP e conectores de app para distribuição e gestão unificadas na equipe.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Plugin pode ser visto como um pacote de instalação: empacota um conjunto de extensões já configuradas para outros instalarem direto.

**Plugin (plugin/conector)** empacota Skills, servidores MCP, integrações de app etc. em unidades **instaláveis, atualizáveis e governáveis** — especialmente útil quando «uma pessoa configura, a equipe inteira reutiliza».

## Diferença central

| Uso isolado | Via Plugin |
|---|---|
| Copiar diretório Skill à mão | Instalar/atualizar com um clique |
| Cada um configura MCP JSON | Servidores e notas de Permissão pré-definidos |
| Docs espalhados | Publicador fornece inventário e notas de versão |

Plugin é **camada de distribuição e composição**. A capacidade em si continua em Skill, MCP e conectores — veja [Mapa de capacidades de extensão](/skills/capability-map/).

## Diferença entre Plugin, Skill e MCP

Versão curta:

- **Skill**: diz ao Codex «quais passos seguir»
- **MCP**: diz ao Codex «quais ferramentas externas pode chamar»
- **Plugin**: empacota o acima para instalação e governança fáceis

Muita confusão vem de tratar essas três camadas como a mesma coisa.

## Composição típica

```text
Pacote Plugin
├── Skills (opcional)
├── Definições de servidor MCP (opcional)
├── Conectores de app / fluxo OAuth (opcional)
└── Metadados: versão, declaração de Permissão, changelog
```

## Quando usar Plugin

| Use Plugin | Não use Plugin |
|---|---|
| Equipe instala unificada o pacote Figma/Linear/GitHub | Script pessoal único |
| Precisa de versionamento e rollback | Um `SKILL.md` basta |
| Empresa só permite extensões na whitelist | Protótipo em fase experimental |

## Quando se importar com Plugin

- Só estudo pessoal, alguns Skills próprios: pode deixar para depois
- Vai distribuir um kit unificado de extensões para a equipe: aí importa Plugin

Plugin resolve sobretudo **distribuição e governança** — não é obrigatório no primeiro contato com o Codex.

## Instalação e gestão (conceito)

1. Escolha Plugin no **marketplace oficial ou lista aprovada da equipe**
2. Leia a declaração de Permissão: quais repositórios lê, quais SaaS acessa
3. Após instalar, reinicie a sessão e valide a lista de ferramentas e Skills
4. Atualize periodicamente; versões major, teste antes em repositório staging

Botões e comandos concretos seguem a UI atual do App desktop / CLI.

## Equívocos comuns

### 1. Instalar Plugin ≠ automaticamente seguro

Plugin só facilita a distribuição; não torna a Permissão segura por natureza. Ainda olhe:

- O que pode acessar
- Se age em seu nome em ações externas
- Se a origem é confiável

### 2. Se dá para instalar, vale instalar

Só extensões que a equipe consegue manter, revogar e auditar cabem no longo prazo.

## Segurança e privacidade

- Instale só de fontes confiáveis; revise o OAuth scope pedido pelo Plugin
- Distinga Permissão de «ler design» vs «enviar mensagem em seu nome»
- Ao sair ou mudar de função, revogue autorização de conectores
- Some a [Permissão e Aprovação](/guide/foundations/permissions-and-approvals/) — não assuma que Plugin traz segurança embutida

## Comparação com Claude Code / outros ecossistemas

«Plugin» não significa exatamente a mesma coisa em cada produto. Ao comparar, olhe: **o que empacota, modelo de Permissão, se é open source auditável** — veja [comparação de recursos](/guide/reference/feature-comparison/).

## Erros comuns

- Um Plugin para cada Skill pequeno — custo de manutenção explode
- Instalar e nunca atualizar — perde correções de segurança
- Ativar Plugin experimental em repositório de produção

## Fontes
- Documentação OpenAI Codex Plugins
---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI  
**Nota de revisão:** O OpenAI Help confirma Plugin como contêiner que empacota Skills, Apps e app templates, mas esta página ainda detalha demais instalação, upgrade e governança além da base pública estável.  
**Última Verificação:** 2026-07-26

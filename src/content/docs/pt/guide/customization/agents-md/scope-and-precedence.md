---
title: "Âmbito e prioridade de AGENTS.md"
description: Vários ficheiros, monorepo e «regras do projeto vs Prompt da conversa» — quem manda.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Quando existem vários `AGENTS.md`, ficheiros de configuração e a conversa atual ao mesmo tempo, é preciso saber **qual regra se aplica**.

Aqui trata-se disto: quando duas regras parecem diferentes, a quem se obedece.

## Visão geral de prioridade

```text
Política gerida da organização > AGENTS.md do diretório mais próximo > AGENTS.md da raiz > configuração de utilizador > conversa atual
```

«Mais próximo» significa o ficheiro de subdiretório **mais perto do caminho de trabalho atual**. Por exemplo, ao trabalhar sob `packages/web/AGENTS.md`, esse ficheiro combina-se com o da raiz; em conflito, **o subdiretório tem prioridade**.

## Como entender «o mais próximo vence»

Pode vê-lo assim:

- As regras da raiz são a «lei predefinida de todo o repositório»
- As regras de subdiretório são a «nota especial desta zona local»

Quanto mais perto da posição de trabalho atual, mais concretas — e mais devem ter prioridade.

## Relação com o Prompt da conversa

| Fonte | Persistência | O que escrever |
|---|---|---|
| AGENTS.md | Entre sessões, versionável | Consenso de equipa, comandos de build, zonas proibidas |
| Prompt da Tarefa | Só esta sessão | Objetivo desta vez, âmbito, prazo |
| Referência @ a ficheiros | Reforço de Contexto nesta sessão | Ficheiros de implementação concretos, mockups |

**Não** cole o `AGENTS.md` inteiro na conversa; se precisar de enfatizar uma regra, cite numa frase: «Cumpra os requisitos de teste de AGENTS.md; nesta vez, além disso, não altere o diretório `legacy/`.»

## Padrão monorepo

```text
repo/
├── AGENTS.md              # Comum a todo o repositório: gestor de pacotes, CI, segurança
├── apps/
│   └── web/
│       └── AGENTS.md      # Frontend: biblioteca de componentes, comandos E2E
└── packages/
    └── api/
        └── AGENTS.md      # Backend: convenções de migração de base de dados
```

Princípios:

- **Ficheiro da raiz**: 10–20 regras rígidas partilhadas por todo o repositório
- **Ficheiros de subpacote**: só comandos e notas de diretório próprios desse pacote
- Evite três ficheiros com 80% de repetição — o comum na raiz; o subpacote só o incremento

## Limite com preferências pessoais

Hábitos pessoais (tema, modelo predefinido, caminhos locais) vão para a **configuração de utilizador**, não para o `AGENTS.md` do repositório da equipa — senão os colaboradores sofrem danos colaterais.

## Mal-entendidos habituais

### 1. O que se diz na conversa atual é o mais recente, logo tem a prioridade mais alta

A conversa serve para acrescentar «requisitos extra desta vez», mas isso não equivale a poder sobrescrever à vontade regras rígidas de equipa ou de organização.

### 2. O `AGENTS.md` de subdiretório é só uma cópia das regras da raiz

Também não deve ser assim.

Melhor abordagem:

- Regras da raiz escrevem o comum
- O subdiretório só escreve incrementos e exceções

### 3. Só memorizar a ordem não chega

Não chega.

Mais importante é saber:

- Que tipo de informação vai em cada camada
- Porque, em conflito, uma certa camada prevalece

## Como julgar em conflito

Quando duas regras parecem conflituar, veja por esta ordem:

1. Qual está mais perto do diretório de trabalho atual
2. Qual é regra de projeto de longo prazo e qual é só suplemento temporário desta vez
3. Há política de organização ou gerida numa camada superior que restringe diretamente

Em conflito, priorize normalmente a camada mais próxima, mais rígida e mais explícita — não assuma que «a frase mais recente» ganha sempre.

## Erros habituais

- `AGENTS.md` de subdiretório contradiz o da raiz sem dizer quem manda
- Escrever segredos sensíveis em `AGENTS.md` e fazer commit no Git — use gestão de segredos e variáveis de ambiente
- Esperar que um «relaxamento temporário» na conversa sobrescreva a política gerida pela equipa (normalmente não consegue)

## Lista de verificação

- [ ] Divisão clara entre `AGENTS.md` da raiz e ficheiros de subpacote
- [ ] Consciência explícita de «subdiretório tem prioridade» em regras conflituantes
- [ ] O Prompt da Tarefa só escreve o incremento, sem copiar o manual inteiro do projeto

---

**Estado:** desatualizado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Nota de revisão:** Esta página apresenta a prioridade entre `AGENTS.md`, configuração de utilizador e conversa atual como uma ordem linear demasiado determinada; a precedence real pode diferir entre clientes, capacidades geridas pela organização e ambientes de execução — é preciso reescrever após complementar a base oficial atual.  
**Última verificação:** 2026-07-26

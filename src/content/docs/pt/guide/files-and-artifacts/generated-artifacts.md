---
title: Aceitação de Artefatos gerados
description: Aceitação sistemática de ficheiros, relatórios e saídas de build novos ou exportados pelo Codex.
locale: pt
source_locale: zh-CN
source_revision: 4b46d0b
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 60
---

Ao concluir uma Tarefa, o Agent pode criar relatórios, scripts, sites estáticos, dados de teste e outros **Artefatos**. Nem sempre passam pelo caminho familiar de revisão de código — precisa de um hábito de aceitação à parte.

O ficheiro ser novo no Codex não significa que já possa usá-lo diretamente.

## Conteúdo desta página

- Diferença de aceitação entre Artefatos e «alterar código existente»
- Checklist
- Quando rejeitar e pedir refazer

## Tipos de Artefato

| Tipo | Foco da aceitação |
|---|---|
| Scripts `.sh` `.py` | Executáveis, inofensivos, idempotentes |
| Relatórios `.md` `.html` | Factos corretos, ligações válidas |
| Saída de build `dist/` | Se deve ir para gitignore |
| Fixtures de teste | Sem PII real |
| Modelos de configuração | Sem palavras-passe fracas por defeito |

## O que são «Artefatos» aqui

Aqui, «Artefato» é:

- Ficheiros novos que escreveu por si
- Relatórios que exportou
- Páginas, diretórios ou pacotes que construiu

Diferem de «só alterou umas linhas de código existente», porque é mais fácil ignorar o conteúdo real.

## Fluxo de aceitação

```text
1. Abrir o Artefato (não ler só o resumo textual do Agent)
2. Comparar com a «definição de concluído» da Tarefa
3. Correr testes relacionados ou comandos de pré-visualização
4. Verificar caminho, Permissões, volume
5. Decidir: aceitar / alterar parcialmente / descartar e refazer
```

Métodos: [Verificar Artefatos](/pt/guide/quality/verify-artifacts/), [Definição de concluído](/pt/guide/quality/definition-of-done/)

## Mal-entendidos habituais

### 1. Dizer «concluído» ≠ dispensar ver o Artefato real

O resumo só diz «o que ele pensa que fez»; não substitui abrir o ficheiro e ver «como é o Artefato real».

### 2. Ficheiro novo não é necessariamente mais seguro do que alterar o antigo

Ficheiros novos também podem ter:

- Conteúdo errado
- Dependências a mais
- Fuga de informação
- Ficheiros grandes que não devem ir para o repositório

### 3. Se corre ≠ vale a pena fazer commit

Alguns Artefatos só servem localmente e temporariamente — não para o Git.

## Relação com o Git

- Declare quais Artefatos **devem ser submetidos** e quais vão para `.gitignore`
- Evite misturar megabytes de cache de build num PR
- Artefatos grandes: CI artifact ou armazenamento externo

## Ordem habitual de aceitação

Ao receber um lote de Artefatos:

1. Confirme que ficheiros foram gerados
2. Abra o Artefato mais crítico
3. Veja se cai no diretório permitido
4. Veja se deve ir para o repositório
5. Depois decida aceitar, alterar ou refazer

## Artefatos não fiáveis

Em Tarefas com repositório não fiável ou dados externos:

- Leia o script antes de executar
- Desconfie de `curl | bash` e payloads ofuscados
- Pré-visualize em Sandbox ou contentor

Artefatos não se julgam só por «já gerados». Pelo menos abra, verifique e saiba se devem ser submetidos.

## Erros habituais

- Só ler o resumo em bullets do Agent, sem abrir ficheiros
- Submeter saída de debug pontual em main
- Relatórios HTML com pixel de tracking ou scripts externos não revistos

## Lista de verificação

- [ ] Cada ficheiro novo está no âmbito de caminhos permitido
- [ ] Abriu e leu o conteúdo principal
- [ ] Verificações automáticas (lint/test/link check) já correram
- [ ] Sem secrets, sem diretórios gerados a mais

## Referências
- [Lidar com incerteza](/pt/guide/quality/handle-uncertainty/)
---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre Verificar Artefatos, definição de concluído, lidar com incerteza e Artefatos de ficheiros; esta página foca o método estável «gerar ≠ entregável; abrir e verificar; clarificar se deve fazer commit».  
**Última verificação:** 2026-07-26

---
title: Preferências pessoais
description: Configuração de utilizador, modelo predefinido e hábitos de interface, sem poluir as convenções de equipa no repositório.
locale: pt
source_locale: zh-CN
source_revision: e447e66
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
sidebar:
  order: 40
---

As **preferências pessoais** são definições que se aplicam na sua máquina em todos os projetos: modelo predefinido, tema, hábitos de Aprovação, caminhos de Skills pessoais, etc. Ao contrário de `AGENTS.md` no repositório, as preferências pessoais **não devem** assumir que os colegas têm as mesmas.

## Conteúdo

- O que deve ficar na camada pessoal e o que na camada de projeto
- Como combinar com [Profiles](/pt/guide/customization/configuration/profiles/) para mudar de cenário
- Evitar que definições pessoais permissivas se infiltrem no repositório da equipa

Visão geral de prioridade: [Personalização](/pt/guide/customization/) · [Âmbito e prioridade](/pt/guide/customization/agents-md/scope-and-precedence/)

## Porque separar esta camada

Muita gente começa por misturar estas coisas:

- Como eu gosto de trabalhar
- O que este repositório exige
- O que a empresa ou a equipa impõe

Se estas três classes não forem separadas, depois aparece facilmente:

- Na sua máquina corre tudo bem, mas os colegas não conseguem reproduzir
- Pensa que a regra já está em vigor, mas na verdade só a sua máquina a cobre
- Leva definições permissivas para projetos mais sérios

## Conteúdo de equipa que não deve ficar só na camada pessoal

- Estilo de código, comandos de teste, estrutura de diretórios → **`AGENTS.md` do projeto**
- Política obrigatória de Sandbox → **configuração do projeto ou gestão da organização**
- Requisitos de conformidade de repositórios de clientes → **documentação + CI**, não memória pessoal

## Práticas recomendadas

1. **Separar Profiles de trabalho / pessoais**: projetos de clientes com Profile estrito; projetos de prática podem ser mais permissivos
2. **Ao entrar num repositório novo, leia primeiro as regras do projeto**, e só depois decida se sobrescreve temporariamente os seus defaults
3. **Limpe periodicamente** MCP e Skills pessoais; remova fontes de terceiros que já não usa
4. Ao mudar de máquina ou reinstalar, exporte uma lista de configuração (sem valores de segredos)

## Mal-entendidos habituais

### 1. O que gosto no dia a dia não deve tornar-se automaticamente o default global

Se o seu hábito predefinido for permissivo, em projetos de clientes ou de equipa pode deixar de ser adequado.

### 2. Preferências pessoais e regras de projeto são quase a mesma coisa?

Diferem muito.  
Preferências pessoais são «eu costumo assim»; regras de projeto são «neste repositório todos devem tentar assim».

### 3. «Na minha máquina está bem» não basta para julgar se o conjunto é razoável

Critérios mais adequados:

- Não polui o repositório
- Não depende de defaults que só você conhece
- Ao mudar para um projeto estrito, não causa danos colaterais

## Decidir se deve ficar na camada pessoal

Quando não tiver a certeza se uma definição deve ir para a camada pessoal, pergunte-se:

1. É um hábito que só eu valorizo?
2. Afeta a capacidade de outros reproduzirem o resultado?
3. É adequado levar isto a todos os projetos?

Se a resposta às perguntas 2 ou 3 for preocupante, não faça disso o default global à ligeira.

As preferências pessoais existem para lhe ficar à mão — não para substituir as regras da equipa, nem para levar definições permissivas a todos os projetos de uma vez.

## Relação com a função de memória

Se o produto oferecer «memória» ou preferências persistentes, veja [Memórias e Contexto persistente](/pt/guide/customization/memories-and-persistent-context/). A memória serve para hábitos estáveis; **as restrições específicas do projeto devem continuar a basear-se nos ficheiros do repositório**.

## Erros habituais

- Fixar chaves de API da empresa na configuração pessoal
- Aprovar automaticamente shell a nível global pessoal ao tratar código de clientes
- Colegas que fazem clone do repositório e reclamam que «as regras não se aplicam» — as regras nunca foram submetidas

## Lista de verificação

- [ ] Consegue dar um exemplo de cada uma das três camadas: pessoal vs projeto vs organização
- [ ] Configurou pelo menos um Profile estrito para um projeto de cliente
- [ ] Não há segredos pessoais dentro do repositório

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE  
**Base de verificação:** Cruzada com capítulos já verificados deste manual sobre instruções de projeto, Profiles, divisão de definições e limites de segurança; esta página explica apenas o princípio estável de que «hábitos pessoais não devem poluir as regras do repositório da equipa», sem transformar a UI atual de um cliente concreto num contrato fixo.  
**Última verificação:** 2026-07-26

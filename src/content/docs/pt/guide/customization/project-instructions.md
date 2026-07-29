---
title: Instruções do projeto
description: Contexto a nível de projeto além de AGENTS.md — divisão de papéis entre README, docs e referências na conversa.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
sidebar:
  order: 10
---

As «instruções do projeto» são o **Contexto estático** com que o Codex compreende o repositório; não se limitam a um único formato de ficheiro.

## Conteúdo

- Além de `AGENTS.md`, onde mais deve viver a informação a nível de projeto
- Como dividir papéis entre README, docs e ficheiros de scripts
- Que informação deve ir para o repositório e qual só deve ficar na conversa atual

## Composição do Contexto do projeto

| Fonte | Função |
|---|---|
| `AGENTS.md` | Regras de colaboração e comandos (autoridade: série AGENTS deste capítulo) |
| `README.md` | O que é o projeto e como o arrancar |
| `docs/` | Arquitetura, ADR, manuais de operação |
| Dependências e scripts | `package.json`, `Makefile`, etc. — verdade executável |

O Codex combina Ferramentas para ler estes materiais; o essencial é que a **verdade seja única**: o comando de arranque no README tem de funcionar de facto.

## Prática básica

1. Garanta que o `README.md` da raiz tem quatro secções: propósito, instalação, desenvolvimento, testes
2. Afunde as **explicações que repete ao Codex** em `AGENTS.md`
3. Nas Tarefas, use `@` para apontar ficheiros concretos em vez de colar o texto inteiro:

```text
Segundo os requisitos de teste de @AGENTS.md, corrija o null pointer em @src/auth/login.ts.
O desenho relacionado está em @docs/auth-flow.md
```

## Porque é importante

Situações comuns:

- O README diz uma coisa
- Os docs dizem outra
- O comando que realmente corre está escondido no `package.json`

Aí não só as pessoas se confundem — o Codex também. O ponto é concentrar e alinhar a «verdade do projeto» no repositório.

## Divisão com o «Contexto da conversa»

- **Instruções do projeto**: relativamente estáveis ao longo de meses
- **Contexto da conversa**: objetivo desta vez, restrições, conclusões intermédias

Em Tarefas longas, se uma regra for mencionada repetidamente, deve **reescrever-se** em `AGENTS.md` ou `docs/`, em vez de copiar e colar em dez Threads. Ver [Manter o Contexto focado](/guide/context/keep-context-focused/).

## Erros habituais

- README desatualizado; o Codex opera com comandos errados
- Meter toda a documentação num `CONTEXT.md` gigante que ninguém mantém
- Informação sensível nas instruções de um repositório público

## Mal-entendidos habituais

### 1. Se eu explicar bem na conversa, a documentação do repositório pode estar um pouco desorganizada

A curto prazo talvez dê; a longo prazo piora.

Porque na próxima vez terá de explicar outra vez, e os outros não veem o que disse desta.

### 2. `AGENTS.md` resolve todos os problemas de instruções do projeto

Também não.

`AGENTS.md` serve melhor para regras e restrições de colaboração; não substitui a introdução do projeto, o contexto de arquitetura e as instruções de operação completas.

### 3. Quanto mais documentação, melhor

Mais importante é:

- Divisão de papéis clara
- Conteúdo consistente
- Comandos-chave executáveis

## Sugestão de divisão

- `README.md`: o que é o projeto, como arrancar, como testar
- `AGENTS.md`: regras de colaboração, zonas proibidas, definição de concluído
- `docs/`: contexto mais longo, arquitetura, fluxos
- Scripts e ficheiros de configuração: verdade executável

O foco das instruções do projeto é facilitar a pessoas e ao Codex encontrarem a mesma «verdade do repositório». A quantidade de documentos em si não é o ponto.

## Lista de verificação

- [ ] Quem clona o repositório de novo (ou o Codex) consegue correr os testes com README + AGENTS.md
- [ ] Os Prompts de Tarefa usam sobretudo referências @, evitando repetir longos contextos

---

**Estado:** verificado  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzada com a documentação pública atual da OpenAI Developers sobre Contexto de projeto e colaboração com ficheiros, e com capítulos já verificados deste manual sobre Contexto, ficheiros e fluxos de trabalho; o conteúdo limita-se ao princípio estável de divisão entre README, `AGENTS.md`, `docs/` e a conversa da Tarefa.  
**Última verificação:** 2026-07-26

---
title: Ligar o GitHub
description: Associar o Codex Cloud a repositórios GitHub — Permissões, branches e ambiente.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


Depois de ligar o GitHub, o Codex pode clonar o repo num **ambiente remoto**, abrir branches, fazer push e abrir PRs: é o pré-requisito do fluxo Cloud.

## Conteúdo

- Porque é preciso ligar e que Permissões autorizar
- Lista de verificação antes e depois de ligar
- Divisão com as Tarefas locais de ambiente de trabalho

## Diagrama de relação

```text
O teu repositório GitHub
    ↕ (OAuth / GitHub App, conforme o produto)
Ambiente Cloud do Codex
    ↕
Tarefas Cloud que lanças na Web/App
```

A [App de ambiente de trabalho](/guide/desktop-app/) local continua a poder editar o clone na tua máquina; o Cloud encaixa em **ambiente padronizado, continuar a correr longe do computador, Aprovar a partir do telemóvel**, etc. Ver [Local vs Cloud](/guide/foundations/local-vs-cloud/).

## Mal-entendidos frequentes

### 1. Já tenho o repo em local; porque ligar outra vez o GitHub?

As Tarefas Cloud olham para o repo remoto, não para a cópia na tua máquina.

### 2. Ligar o GitHub implica que vê todas as minhas alterações locais?

Alterações locais sem push, o Cloud normalmente não vê.  
É um ponto de confusão habitual.

### 3. O que convém olhar ao ligar?

Confirma primeiro:

- Se o alcance de repos não é demasiado amplo
- Como está a proteção de branches
- Se os secrets estão no sítio seguro do Cloud

Depois de ligar o GitHub, o Cloud vê o repo remoto, não o estado local ainda sem push do teu computador.

## Verificação prévia

- [ ] Tens Permissão de push no repo alvo (ou estratégia de fork se só precisas de PR)
- [ ] Conheces as regras de proteção de branches: se proíbem push direto a main
- [ ] Os secrets não estão no repo; o Cloud usa [configuração de Secrets](/guide/web-and-cloud/secrets-and-variables/)
- [ ] A organização permite integrações de terceiros do GitHub

## Passos recomendados (conceito)

1. Na configuração do Codex Web/Cloud, abre **ligação GitHub**
2. Escolhe organização e alcance de repos (**lista mínima possível**)
3. Confirma a explicação de Permissões OAuth: costuma ser preciso ler código e abrir PRs; escrita conforme a Tarefa
4. Lança uma Tarefa Cloud pequena num repo de teste
5. Após o sucesso, configura branch por omissão e variáveis de ambiente (se aplicável)

Botões e interface conforme o produto atual.

## Permissões e segurança

| Prática | Motivo |
|---|---|
| Utilizador de máquina ou conta bot dedicada (equipa) | Auditoria e recuperação ao sair |
| Não autorizar todos os repos privados | Reduzir a superfície de erro |
| Ativar proteção de branches + review obrigatória | A entrega do Cloud continua a passar por review humana |
| Rever periodicamente a lista de repos ligados | Desligar a tempo projetos abandonados |

## Tarefas habituais após ligar

- Implementar um issue em remoto → [Criar Pull Request](/guide/web-and-cloud/create-pull-requests/)
- Rever e acompanhar um PR → integração [GitHub](/guide/integrations/github/)
- Combinar com [Automations](/skills/automations/scheduled-tasks/)

## Erros frequentes

- Ligar GitHub pessoal a repos da organização de produção com política pessoal
- Assumir que o Cloud vê commits locais sem push
- Na primeira tentativa, correr Tarefas sem limite num monorepo grande

## Fontes de referência

- Documentação de integração OpenAI Codex Cloud / GitHub
- KimYx0207 CX-10, CX-11
- stormzhang `26-git-github.md`, `10-cloud.md`

---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud / Web  
**Nota de revisão:** Esta página depende do método atual de ligação ao GitHub, do modelo de autorização, do alcance de repos e das entradas de botões no Cloud — informação de integração muito volátil; restaurar-se-á `verified` quando houver documentação oficial de ligação atualizada.  
**Última verificação:** 2026-07-26

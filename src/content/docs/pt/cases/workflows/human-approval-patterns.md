---
title: Padrões de aprovação humana
description: Quando aprovar, rejeitar ou pedir ao Codex para pausar — e como documentar essas regras com clareza.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---


A aprovação serve para deixar operações irreversíveis na decisão humana. Esta página reúne algumas práticas comuns.

## Camadas de aprovação

```text
Zona automática segura (ler, analisar, planear)
    ↓
Zona de confirmação pedida (escrever ficheiros, correr comandos, rede)
    ↓
Zona de intervenção humana obrigatória (push, apagar dados, enviar para fora, alterar configuração de produção)
```

O comportamento concreto dos diálogos varia conforme o [ponto de entrada do produto](/guide/); o princípio é o mesmo.

## Padrão 1: planear antes de executar

```text
Regra: sem ver a minha «aprovação do plano», não modificar ficheiros do repositório.
```

Adequado a: código-base desconhecido, relacionado com produção, diffs grandes.

## Padrão 2: lista branca de comandos

Em [AGENTS.md](/guide/customization/agents-md/writing-effective-instructions/), declare:

```md
Permitidos sem voltar a perguntar: pnpm test, pnpm lint, git status, git diff
Confirmação obrigatória de cada vez: git push, npm publish, migrate de base de dados
```

Em conflito com a política de hosting, prevalece a **mais estrita**.

## Padrão 3: fusão em duas fases

1. O Codex abre um draft PR ou um ramo local
2. Fusão só após CI + review humana a passar

Cenários Cloud em [criar Pull Requests](/guide/web-and-cloud/create-pull-requests/).

## Padrão 4: reconhecimento só de leitura

```text
Esta ronda é só de leitura: pode ler ficheiros, correr testes, curl a APIs locais;
proibido escrever em disco e git commit.
```

Usado em auditorias, aprendizagem de projetos desconhecidos e diagnóstico de problemas de produção.

## Quando rejeitar e recomeçar

| Sinal | Sugestão |
|---|---|
| Plano desalinhado com o objetivo | Recusar execução; pedir revisão do plano |
| Âmbito das alterações a crescer | Parar; dividir a tarefa |
| Testes saltados | Recusar fusão; exigir verificação complementar |
| Impossível explicar um comando | Recusar; exigir explicação |

## Relação com Automations

Tarefas sem supervisão também devem manter pontos de confirmação humana no desenho; ver [tarefas agendadas e em segundo plano](/skills/automations/scheduled-tasks/).

## Erros comuns

- Marcar «permitir sempre» a longo prazo e esquecer o risco
- Aprovação formal sem ler o diff
- Usar «não faças disparates» oral em vez de um padrão explícito

## Lista de aceitação

- [ ] Antes de iniciar a tarefa, declarar qual o padrão de aprovação
- [ ] Operações de alto risco com segundo revisor ou CI
- [ ] Política unificada da equipa para `git push` e comandos semelhantes

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com a orientação oficial atual da OpenAI Developers sobre autonomy / approval boundaries e com os capítulos já verificados deste manual sobre aprovação, regras de comando, PRs e automatização; esta página confirma apenas o princípio estável de colaboração «que ações podem continuar automaticamente e quais devem parar para aprovação humana».  
**Última verificação:** 2026-07-26

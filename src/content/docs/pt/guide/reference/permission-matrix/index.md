---
title: Matriz de Permissões
description: Tabela conceptual de tipos de operação Codex, pontos de Aprovação e diferenças entre produtos.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

A «matriz de Permissões» também serve ao utilizador quotidiano. Explica sobretudo: com a mesma frase, porque a reação do Codex muda conforme a entrada.

Operações distintas, em entradas de produto distintas, disparam comportamentos distintos de Aprovação e Sandbox. Esta matriz ajuda a equipa a alinhar «o que uma pessoa deve confirmar»; é uma **tabela de contraste de risco e comportamento**, não um texto de conformidade jurídica. Os valores por omissão são definidos pela [documentação oficial](https://developers.openai.com/codex) e pela política gerida pela organização.

## O que esta tabela olha

Na primeira vez que te deparas com Aprovação, restrição ou rejeição, costumas pensar:

- O modelo partiu-se
- Expressei-me mal
- Porque ontem sim e hoje não?

Muitas diferenças vêm na realidade da entrada atual, da política e do nível de risco.

## Ponto central

Nem todo «ajuda-me a fazer isto» é o mesmo risco.

Por exemplo:

- Ler um ficheiro
- Alterar um ficheiro
- Correr um comando
- Ligar à Internet
- Fazer push de código

Parecem «executar a Tarefa», mas o risco não é o mesmo nível. Por isso o produto acrescenta Aprovação, limites e bloqueios distintos em sítios distintos.

Base conceptual: [Permissões e Aprovações](/guide/foundations/permissions-and-approvals/)

## Níveis de risco de operação

| Nível | Exemplo de operação | Expectativa por omissão |
|---|---|---|
| L0 leitura | Ler texto do projeto, procurar código | Costuma automático |
| L1 escrita | Alterar ficheiros do projeto, formatar | Muitas vezes confirmação ou automático dentro do Sandbox |
| L2 execução | Shell, gestor de pacotes, testes | Costuma requerer confirmação |
| L3 saída à rede | curl, npm registry, API | Confirmação estrita ou proibido |
| L4 fora de alcance | Escrever fora do projeto, git push, apagar BD | Deve bloquear-se ou confirmar-se com força |
| L5 GUI | Computer Use, diálogos do sistema | Máxima sensibilidade; muitas vezes desativado por omissão |

## Como lê-la

Na primeira vez não precisas de memorizar cada célula. Usa-a assim:

- Julga a que classe de operação pertence esta Tarefa
- Olha se essa operação costuma bloquear-se na entrada atual
- Decide se completar a explicação, esperar Aprovação ou mudar para uma entrada mais adequada

A tabela também serve para antecipar.

## Matriz (conceito — valores típicos por omissão)

**Y** = em casos habituais faz falta consentimento explícito ou está limitada por política · **A** = pode ser automática com configuração de confiança · **—** = depende de versão/política · **N** = normalmente não permitido

| Operação | App de ambiente de trabalho | CLI interativo | IDE | Cloud |
|---|---|---|---|---|
| Ler ficheiros do repo | A | A | A | A |
| Escrever ficheiros dentro do repo | Y/A | Y | Y/A | Y/A |
| Correr comandos de teste | Y/A | Y | Y/A | Y/A |
| Instalar dependências globais | Y | Y | Y | Y |
| Aceder à Internet pública | Y | Y | Y | Y |
| Ler ficheiros sensíveis como `.env` | Y | Y | Y | Y |
| `git commit` | Y | Y | Y | Y |
| `git push` | Y | Y | Y | Y |
| Escrever fora do projeto | N/Y | N/Y | N/Y | N |
| Ferramentas MCP de terceiros | Y | Y | Y | Y |
| Abrir URL no browser | Y | — | — | Y |
| Computer Use | Y/— | — | — | — |

Notas:

- **Cloud** corre num Sandbox remoto e não pode aceder ao sistema de ficheiros do teu portátil
- **IDE** é semelhante à App, mas a forma de Aprovação na UI é distinta
- A **política gerida** pode forçar tudo a Y ou N

## Mal-entendidos frequentes

### 1. Poder ou não fazê-lo não depende só de se o modelo «quer»

Muitas vezes o que mais afeta o resultado é:

- Se a entrada atual o permite
- Se a política atual o deixa passar
- Se a Permissão atual basta

### 2. Cloud não é necessariamente mais livre nem necessariamente mais seguro

A segurança depende de se Sandbox, rede, Secrets, proteção de branches e política de Aprovação vão juntos.

### 3. Escrever regras não faz desaparecer o risco sozinho

Regras de documentação, política de Aprovação, limites técnicos e revisão humana costumam usar-se juntos.

### 4. Que te bloqueiem não implica que tenhas feito mal

Muitas vezes só indica:

- Este passo tem mais risco
- A entrada atual não encaixa para o fazer
- Faz falta Aprovação mais explícita ou uma abordagem mais leve

## Como aterrizam configuração e documentação

| Mecanismo | Função |
|---|---|
| Modo Sandbox | Limitar L3/L4 mesmo que o Agent «queira» fazê-lo |
| Política de Aprovação | Controlar se L1–L3 mostram diálogo |
| `AGENTS.md` | Declarar proibições ao nível do projeto (p. ex. proibir push) |
| Proteção de branches | No GitHub, bloquear merge sem review |
| Hooks | Verificação automática antes do commit (ver a página de Hooks no roteiro) |

[Padrões de Aprovação humana](/cases/workflows/human-approval-patterns/) · [Referência de configuração](/guide/reference/configuration-reference/)

## Quando elevar o alerta

Se uma ação cumprir qualquer destas, eleva o alerta:

- Vai alterar ficheiros
- Vai correr comandos
- Vai aceder à Internet
- Vai tocar informação sensível
- Vai enviar o resultado para fora do repo

Não precisas de recordar se é L-quê; sim saber que já não é um risco de «olhar um momento».

A matriz de Permissões é sobretudo uma Ferramenta de antecipação: porque este passo se bloquearia, se convém mais cautela, ou se há uma abordagem mais leve.

## Estratégia recomendada de equipa (exemplo)

| Cenário | Sugestão |
|---|---|
| Repo de prática open source | Sandbox padrão + permitir comandos de teste |
| Monorepo de empresa | Estrito + proibir push + PR com review humana obrigatória |
| CI `codex exec` | Só leitura ou diretório limitado + sem push |
| Cloud relacionado com produção | Secrets ao mínimo + proteção de branches |

## Mal-entendidos habituais

| Mal-entendido | Facto |
|---|---|
| «Cloud é mais seguro» | Depende de secrets, review e política de rede |
| «O IDE não corre shell» | Pode executá-lo via Ferramentas do Agent |
| «Se escrevi proibir push, de certeza que não faz push» | Faz falta Sandbox + Permissões de Git + review humana em camadas |

---

**Estado:** outdated  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Nota de revisão:** A ideia de níveis de risco continua útil, mas a matriz faz bastantes pressupostos concretos sobre comportamento por omissão, pontos de Aprovação e capacidades disponíveis por entrada; sem documentação oficial atual de matriz de Permissões por entrada, esta tabela não deveria continuar marcada como `review` ou `verified`.  
**Última verificação:** 2026-07-26

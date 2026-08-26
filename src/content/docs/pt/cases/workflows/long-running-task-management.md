---
title: Gestão de tarefas longas
description: Tarefas grandes que atravessam horas ou várias sessões — checkpoints, compactação, delegação e condições de saída.
locale: pt
source_locale: zh-CN
source_revision: 199bbe5
translation_status: reviewed
translated_at: 2026-07-28
reviewed_at: 2026-08-26
---

Problemas comuns em tarefas longas: **contexto cheio**, **pessoa a sair**, **deriva de direção**, **não saber quando parar**. Esta página coloca [Explorar—Planear—Executar—Verificar](/pt/cases/workflows/explore-plan-execute-verify/) no cenário de várias horas ou várias sessões.

## Foco desta página

- Quando dividir a tarefa e quando delegar à Cloud
- O que escrever em checkpoints e registos de estado
- Condições de saída para tarefas longas automatizadas

Relacionado: [delegar e acompanhar](/pt/guide/web-and-cloud/delegate-and-follow-up/) · [Automations](/pt/skills/automations/scheduled-tasks/)

## Sinais de tarefa longa

- Tempo de máquina estimado acima de 30 minutos
- Vários subsistemas ou >20 ficheiros envolvidos
- Espera por feedback humano ou API externa
- Necessidade de E2E completo / testes de desempenho

Se qualquer condição se cumprir, escreva o plano primeiro — não converse até ao fim sem estrutura.

## Gestão em três fases

### 1. Congelar o plano

Produza um plano escrito: âmbito, não-objetivos, marcos, comandos de aceitação. Confirmação humana antes de execução em larga escala.

[Planeamento](/pt/guide/agent-work/planning/) · [Subagents](/pt/guide/agent-work/subagents/)

### 2. Checkpoints

A cada marco concluído:

- Commit ou stash de incremento revível
- Atualizar `PROGRESS.md` ou comentário no issue: o que ficou feito, próximo passo, bloqueios
- Com o contexto cheio, use [compactação](/pt/guide/context/compaction/) ou abra uma nova sessão + ligue o ficheiro de progresso

### 3. Encerrar ou delegar

- Quando o local não chega → [delegação Cloud](/pt/guide/web-and-cloud/delegate-and-follow-up/)
- Quando precisa de monitorização contínua → Automation + **max iterations / prazo** claros

## Condições de saída (obrigatórias em automatização)

| Condição | Descrição |
|---|---|
| Limite de tempo | Sem progresso em 4h → alerta |
| Limite de iterações | O mesmo teste falha 3 vezes → parar |
| Portão humano | Antes de alterar configuração de produção, deve @ alguém |
| Condição de sucesso | Testes verdes + PR aberto |

## Erros comuns

- Sem ficheiro PROGRESS — trabalho repetido após trocar de sessão
- Tarefa longa sem não-objetivos — o Agent «organiza o repositório inteiro» de passagem
- Tarefa Cloud sem aprovação humana a correr a noite toda

## Lista de aceitação

- [ ] Documento de plano antes de iniciar a tarefa longa
- [ ] Pelo menos dois checkpoints com diffs revíveis
- [ ] Saber como pausar, retomar ou transferir

---

**Estado:** verified  
**Produtos aplicáveis:** App / CLI / IDE / Cloud  
**Base de verificação:** Cruzado com os use cases públicos atuais de OpenAI Developers sobre objetivos de longo prazo e colaboração em tarefas longas e com os capítulos já verificados deste manual sobre transferência/retoma, planeamento, compactação e delegação; esta página explica apenas métodos estáveis de checkpoints, transferência e condições de saída em tarefas longas.  
**Última verificação:** 2026-07-26

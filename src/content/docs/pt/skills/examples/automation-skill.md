---
title: 'Exemplo: Skill de automação que registra apenas mudanças'
description: Baixe quiet-link-monitor e verifique manualmente as checagens repetidas, a recuperação, os eventos persistentes e a parada.
contentType: skill
audiences: [developer, team]
level: intermediate
outputs: [json]
editorialStatus: review
verification:
  kind: run-tested
  checkedAt: '2026-09-18'
  summary: Oito testes de estado e três execuções CLI passaram. Uma falha repetida não gera evento novo, e o conserto registra a recuperação. Não foram testados agendamento real, roteamento do modelo nem entrega de mensagens.
  environment: Python 3.12.11 / Darwin arm64; site estático sintético temporário, biblioteca padrão, sem rede.
  evidence:
    - label: Registro da execução real
      href: /downloads/skills/quiet-link-monitor/validation/record.md
assets:
  - path: /downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip
    purpose: Skill de automação, verificador de links, script de estado persistente, exemplo de falha e registro de validação
    license: CC0-1.0
    version: 1.0.0
locale: pt
source_locale: zh-CN
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
source_revision: "6c758b9"
---

Executar uma verificação repetidamente não significa notificar a cada vez. Este Skill reutiliza o [exercício de verificação de links](/pt/cases/use-cases/team-automation/scheduled-link-check/) e registra mudanças, recuperação e erros de execução. Quando o resultado não muda, fica em silêncio.

[Baixar quiet-link-monitor v1.0.0](/downloads/skills/quiet-link-monitor/quiet-link-monitor-1.0.0.zip) · [SKILL.md](/downloads/skills/quiet-link-monitor/SKILL.md) · [README](/downloads/skills/quiet-link-monitor/README.md)

## Instalação e ensaio manual

Coloque o diretório completo em `.agents/skills/quiet-link-monitor/` do projeto de treino, sem substituir um Skill existente com o mesmo nome. Confirme que ele pode ser selecionado seguindo [como usar Skills](/pt/skills/use-a-skill/) e invoque:

```text
$quiet-link-monitor Ensaiar falha, verificações repetidas e recuperação com
as amostras do pacote. Trabalhar em cópia temporária, manter estado separado
e relatar as mudanças de eventos ao final. Não enviar notificações.
```

Você pode executar o script sozinho, sem modelo nem conta. Ele só precisa da biblioteca padrão do Python 3.10+:

```sh
python3 validation/test_monitor.py
```

Para um ensaio manual, copie `fixtures/broken` para seu próprio `work-site`. No diretório do Skill, execute duas vezes:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json
python3 scripts/run_once.py --site work-site --state run-state.json
```

A primeira execução termina com código 1 e registra um evento de falha. A segunda também termina com 1, mas `new_event` é null. Corrija esse mesmo diretório usando `fixtures/fixed` como referência e execute outra vez: saída 0 e `recovered`. Não troque o caminho do site para simular recuperação; a validação de estado rejeitará a mudança de escopo.

[Resumo real das três execuções CLI](/downloads/skills/quiet-link-monitor/validation/manual-run.json)

## O que é registrado e quando parar

Mantenha o arquivo de estado fora do diretório verificado. Ele guarda o resultado de cada execução, a contagem de falhas de execução consecutivas e eventos persistentes. O script escreve nesse arquivo e em um arquivo de bloqueio ao lado; portanto não é totalmente somente leitura. O conteúdo do site não é alterado.

| Situação | Comportamento |
|---|---|
| Saudável na primeira execução | Criar linha de base, sem evento novo |
| Primeira falha ou mudança nos problemas encontrados | Salvar evento de mudança |
| Mesmo resultado outra vez | Não criar evento novo |
| Falha corrigida | Salvar evento de recuperação |
| Três erros consecutivos de execução da verificação | Salvar evento de parada e pausar |
| Estado danificado, conflito de bloqueio ou site diferente | Parar imediatamente sem sobrescrever o estado original |

Um link quebrado é um resultado de verificação válido, não um erro de execução. Depois da pausa, uma chamada comum não verifica novamente. Investigue e corrija a causa e retome explicitamente:

```sh
python3 scripts/run_once.py --site work-site --state run-state.json --resume
```

Não apague automaticamente bloqueio ou estado para contornar uma falha. Uma interrupção inesperada pode deixar um bloqueio; primeiro confirme que não há processo ativo. O [guia de estado e recuperação](/downloads/skills/quiet-link-monitor/references/operations.md) lista códigos de saída, retenção e limites de concorrência.

## Candidato a notificação não é mensagem enviada

O script só registra eventos locais. Todo `delivery` é `not-sent`; ele não cria agendamento nem envia mensagens. Cada evento tem um ID estável para aquele registro e o resultado repetido não recria evento para o mesmo estado.

Ao conectar um remetente autorizado, leia os eventos persistentes não entregues, elimine duplicatas pelo ID e salve confirmações de entrega. Ler apenas o `new_event` do terminal desta execução pode perder eventos após uma interrupção do processo. O pacote não fornece remetente e não promete entrega exatamente uma vez entre sistemas.

## Do ensaio manual às execuções recorrentes

Confirme que a compilação terminou antes de conferir a saída mais recente. Se ela falhar, pare em vez de verificar um diretório antigo. Use o mesmo site e arquivo de estado em cada execução programada, evitando escritas simultâneas. Acione manualmente no ambiente de destino para verificar logs e comportamento de parada antes de definir a recorrência. Canal, destinatários e escopo das notificações reais devem vir de autorização existente.

Agendamento real e entrega de mensagens não foram testados aqui. Links externos continuam `unchecked`; um resultado local saudável não significa que “todos os links do site funcionam”.

## Escopo e aceite

Auditorias repetidas de links da documentação cabem neste Skill. Relatórios gerais de vendas, escrita criativa e instalação automática em produção ficam fora do seu alcance. Os casos de acionamento são expectativas de projeto, não medições do roteamento do modelo.

Para concluir, apresente registros da primeira falha, da repetição silenciosa e da recuperação, além de evidências da pausa e retomada explícita. Os oito testes do pacote verificaram esses comportamentos locais de estado. Eles não provam julgamento do modelo, alcance da rede nem confiabilidade em produção.

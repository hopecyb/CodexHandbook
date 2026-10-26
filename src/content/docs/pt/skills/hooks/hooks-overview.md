---
legacyVerification:
  status: "verified"
  products: "Ambientes que usam um host Codex local; a CLI fornece `/hooks` para gerir a confiança"
  checkedAt: "2026-08-25"
title: Visão geral dos Hooks
description: Compreender a descoberta da configuração, a revisão de confiança, os processadores e os limites de segurança dos Hooks.
locale: pt
source_locale: zh-CN
source_revision: "ac7889b"
translation_status: reviewed
translated_at: "2026-09-20"
reviewed_at: 2026-10-26
---

Os Hooks permitem executar scripts de comando ou ferramentas de servidores MCP já ligados durante o ciclo do Agent Codex. Usos comuns incluem detectar segredos em prompts, aplicar regras às chamadas de ferramentas, manter logs de auditoria, resumir sessões e verificar o trabalho antes da paragem.

![Ciclo de vida dos Hooks Codex: sessões, turnos, chamadas de ferramentas, compactação e eventos dos subagentes](/diagrams/hook-lifecycle-events-pt.svg)

A distinção mais importante no diagrama é que `PreToolUse` pode recusar ou alterar a entrada de uma ferramenta local suportada antes da execução. `PostToolUse` ocorre depois e não consegue desfazer os efeitos já produzidos.

## Onde se encontra a configuração

O Codex procura Hooks junto às camadas de configuração ativas:

- `~/.codex/hooks.json`
- `[hooks]` em `~/.codex/config.toml`
- `<repo>/.codex/hooks.json`
- `[hooks]` em `<repo>/.codex/config.toml`
- Hooks incluídos em Plugins ativados
- Hooks administrados distribuídos por política do sistema, MDM, Cloud ou `requirements.toml`

O conteúdo `.codex/` de um projeto só é carregado se o projeto for considerado de confiança. Todos os Hooks correspondentes de várias fontes são executados; uma camada de maior prioridade não substitui em bloco os Hooks de uma camada inferior.

Se uma camada contiver simultaneamente `hooks.json` e uma secção `[hooks]` integrada, o Codex combina-os e apresenta um aviso no arranque. Sempre que possível, use apenas uma das formas em cada camada.

## Rever todos os Hooks não administrados

O Codex regista a confiança com base no hash da definição do Hook. Hooks não administrados novos ou alterados ficam pendentes de revisão e são ignorados até o usuário confiar na nova definição.

Na CLI, `/hooks` permite ver as fontes, rever alterações, confiar num Hook não administrado individual ou desativá-lo. Os Hooks de Plugins seguem o mesmo processo de confiança. Os Hooks administrados são considerados de confiança pela política da organização e não podem ser desativados no navegador pessoal de Hooks do usuário.

## Dois processadores executáveis

| Processador | Utilização | Limite principal |
|---|---|---|
| `command` | Executar um script local que recebe o JSON do evento por stdin | O script tem capacidades de processo local; rever dependências e saída |
| `mcp_tool` | Chamar uma ferramenta de um servidor MCP já ligado | Não inicia nem volta a ligar o servidor; não é suportado em `SessionEnd` |

Segundo a documentação oficial atual, os processadores `prompt` e `agent` podem ser analisados, mas são ignorados. Não os inclua numa configuração que deva funcionar.

## Comportamento durante a execução

- Vários Hooks `command` correspondentes começam em paralelo; um Hook não consegue impedir o arranque de outro que já corresponda.
- O `timeout` padrão da maioria dos Hooks é 600 segundos. Em `SessionEnd`, é 1 segundo, com um máximo de 3 segundos. Scripts de proteção em produção devem definir explicitamente um timeout mais curto.
- O diretório de trabalho de um Hook `command` é o `cwd` da sessão. Resolva os caminhos dos scripts do repositório a partir da raiz Git para que um arranque numa subpasta não quebre caminhos relativos.
- Hooks assíncronos servem para logs e análise, mas não podem bloquear, aprovar, alterar ou controlar a operação que os acionou.

## Relação com outras camadas de segurança

| Camada | Responsabilidade |
|---|---|
| Sandbox | Limites de acesso a arquivos, rede e capacidades do sistema |
| aprovação | Decisão humana antes de ações de alto risco |
| Regras de comandos | Permitir ou recusar declarativamente padrões de comandos conhecidos |
| Hook | Lógica personalizada e testável em pontos do ciclo de vida |
| permissões do serviço | Autoridade final de leitura e escrita em sistemas externos |

A cobertura de ferramentas pelos Hooks não constitui uma fronteira de segurança completa. A documentação oficial indica que alguns percursos de ferramentas especializadas podem contornar o percurso Hook padrão; ferramentas alojadas, como WebSearch, também não passam pelos Hooks locais `PreToolUse` ou `PostToolUse`.

## Ordem de adoção

1. Comece com logs sem dados sensíveis em `PostToolUse` ou `SessionEnd` para observar o comportamento real.
2. Para problemas de elevada confiança, use `systemMessage` ou contexto adicional como aviso.
3. Bloqueie em `PreToolUse` apenas se a regra for inequívoca, o script tiver fixtures e os falsos positivos forem aceitáveis.
4. Alinhe os Hooks com a CI, as verificações antes do commit e as permissões do serviço para evitar políticas contraditórias.

## Lista de verificação

- [ ] Os nomes dos eventos vêm da lista oficial atual.
- [ ] Os matchers abrangem apenas as ferramentas ou fontes necessárias.
- [ ] Os scripts têm testes com entradas fixas e mensagens de erro compreensíveis.
- [ ] Os logs não guardam tokens, prompts completos nem parâmetros sensíveis de ferramentas.
- [ ] Os percursos de falha, timeout e desativação dos Hooks foram testados.
- [ ] A equipe compreende o significado das alterações de confiança apresentadas em `/hooks`.

## Fonte oficial

- [OpenAI: Hooks](https://learn.chatgpt.com/docs/hooks)

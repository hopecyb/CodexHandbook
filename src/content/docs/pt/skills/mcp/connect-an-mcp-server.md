---
title: Conectar um servidor MCP
description: Configure, autentique, valide e resolva problemas — conecte com segurança a primeira ferramenta MCP.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

Esta página foca em conexão e Verificação; detalhes do protocolo e desenvolvimento de servidor estão na documentação oficial de MCP.

## Antes de começar

- [ ] Entendeu os limites de segurança em [Visão geral de MCP](/skills/mcp/mcp-overview/)
- [ ] Tem conta de teste só leitura ou em Sandbox
- [ ] Confirmou que a versão atual do cliente Codex suporta MCP (documentação oficial)

## Fluxo recomendado

### 1. Escolher o tipo de servidor

| Tipo | Descrição | Risco |
|---|---|---|
| Servidor stdio local | Processo iniciado na máquina | Médio: Permissão do processo = Permissão do seu usuário |
| HTTP/SSE remoto | Serviço hospedado | Médio-alto: precisa de TLS e rotação de token |

Na primeira conexão, comece por **exemplo oficial ou servidor local só leitura**.

### 2. Adicionar configuração

O local da configuração varia entre CLI/App; o comum é um bloco `mcp` no nível do usuário ou do projeto. Estrutura ilustrativa (**nomes de campos conforme a documentação oficial**):

```json
{
  "mcpServers": {
    "example-readonly": {
      "command": "npx",
      "args": ["-y", "@example/mcp-server"],
      "env": {
        "API_TOKEN": "Ler de variável de ambiente; não hardcodeie no repositório"
      }
    }
  }
}
```

Princípios:

- Segredos via variável de ambiente ou gerenciador de segredos
- Mudanças de configuração passam por revisão Git (exceto secrets)

### 3. Reiniciar ou recarregar o cliente

Após alterar a configuração MCP, em geral é preciso reiniciar a sessão do Codex para atualizar a lista de servidores.

### 4. Validar que as ferramentas estão visíveis

Na Tarefa, peça de forma explícita:

```text
Liste as ferramentas MCP disponíveis agora (só nome e uma frase de descrição).
Depois chame uma ferramenta de teste em modo só leitura e mostre o resultado.
Não execute operações de escrita.
```

### 5. Experimentar em passos pequenos

Escolha uma Tarefa real e de baixo risco — por exemplo: «Use MCP para consultar o título do ticket #123; não altere o status.»

## Modos de autenticação

| Modo | Adequado para |
|---|---|
| API Key / PAT | Desenvolvimento pessoal, rotação periódica |
| OAuth | Autorização no nível do usuário, adequado a SaaS |
| Local sem autenticação | Só mock na máquina; não exponha na rede |

Em falha, confira: token expirado, variável de ambiente não injetada, proxy corporativo bloqueando.

## Checklist de depuração

| Sintoma | Possível causa |
|---|---|
| Lista de ferramentas vazia | Caminho de configuração errado, falha ao iniciar o processo |
| Timeout na chamada | Rede, VPN, servidor fora do ar |
| Permissão negada | Scope do token insuficiente |
| Modelo nunca chama a ferramenta | A descrição da Tarefa não pediu; ou o description da ferramenta está pouco claro |

## Coordenação com Aprovação

Na primeira chamada a uma ferramenta desconhecida, o cliente pode pedir confirmação — isso é esperado. Não incentive nas normas da equipe «permitir para sempre todas as escritas MCP».

## Fontes
- Documentação de configuração OpenAI Codex MCP
- Exemplos de servidor em modelcontextprotocol.io
---

**Status:** outdated  
**Produtos aplicáveis:** App / CLI / IDE  
**Nota de revisão:** Esta página descreve diretamente configuração, reload e Verificação atuais de servidor MCP; esses passos são muito sensíveis a versão e implementação do cliente — não marcar como `verified` por enquanto.  
**Última Verificação:** 2026-07-26

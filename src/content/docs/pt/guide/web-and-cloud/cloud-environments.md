---
title: Ambiente Cloud
description: Composição, ciclo de vida e pontos de configuração de equipa do ambiente remoto de execução do Codex Cloud.
locale: pt
source_locale: zh-CN
source_revision: 5f36443
translation_status: draft
translated_at: 2026-07-28
---

O «Ambiente Cloud» é a máquina de trabalho que o Codex usa ao executar Tarefas em remoto.

Afeta diretamente o resultado: sistema operativo, versões de linguagem, toolchain, política de rede e que branch do repo recebe. Esta camada responde sobretudo a:

> **Porque em local corre e no Cloud falha?**

## Conteúdo

- Diferenças entre o Ambiente Cloud e a máquina de desenvolvimento local
- Como o ambiente se liga ao repo e ao branch de GitHub
- Como a equipa mantém uma configuração Cloud reproduzível

## Olha primeiro estas três coisas

- O Cloud não «lê todo o teu computador atual»; só vê o que há no ambiente remoto
- Ao correr a Tarefa, o Cloud também enfrenta dependências, versões e rede
- O que não fizeste commit nem push em local, o Cloud por omissão não vê

Podes pensar o Cloud como «mudar de máquina para trabalhar».

## Conceito central

```text
Repo de GitHub (algum branch)
        ↓ clone / checkout
Instância de Ambiente Cloud (contentor ou VM, conforme o produto)
        ↓
O Agent executa a Tarefa: instalar dependências, alterar código, testar, push
```

Combina com [Ligar o GitHub](/guide/web-and-cloud/connect-github/); o ambiente **não** pode aceder a commits do teu portátil sem push.

## Diferenças entre local e Cloud

- **Tarefa local**: o Codex trabalha à tua frente, em torno do teu computador atual
- **Tarefa Cloud**: envias o Codex a uma máquina remota

Daí vêm as confusões habituais ao usar Cloud pela primeira vez:

- «Porque não vê o ficheiro que acabei de alterar em local?»
- «Porque não tem a Ferramenta instalada globalmente na minha máquina?»
- «Porque não liga à base de dados que tenho aberta em local?»

Na maioria dos casos, **essa máquina remota simplesmente não tem essas coisas**; o problema está no ambiente.

## O que o ambiente inclui (camada conceptual)

| Componente | Explicação |
|---|---|
| Imagem base | OS, Ferramentas de build habituais |
| Runtime | Node, Python, Go, etc. (conforme imagem e Tarefa) |
| Diretório de trabalho | Caminho do repo após o clone |
| Política de rede | Se se permite saída, a que domínios |
| Injeção de credenciais | [Secrets e variáveis](/guide/web-and-cloud/secrets-and-variables/) |

Lista concreta de imagens e personalização conforme a [documentação oficial Cloud](https://developers.openai.com/codex).

## Mal-entendidos frequentes

### 1. Acreditar que o Cloud herda automaticamente o teu ambiente local

Não.

Node, Python, Homebrew, Chrome ou o cliente de BD que tenhas em local não aparecem no Cloud «porque os tenhas tu».

### 2. Acreditar que fazer push do repo basta para que tudo esteja pronto

O código do repo é só o ponto de partida; o sucesso também depende de:

- Como se instalam as dependências
- Quais são os comandos de arranque ou teste
- Que Secrets fazem falta
- Se a política de rede permite recursos externos

### 3. Acreditar que uma falha Cloud significa que o Codex «não serve»

Muitas falhas Cloud são ambiente incompleto, não incapacidade de fazer a Tarefa.

Ordem de diagnóstico:

1. Repo e branch corretos?
2. Dependências e versões de runtime corretas?
3. Secret e rede disponíveis?
4. O Prompt da Tarefa está claro?

## Fluxo de configuração recomendado

1. Completa a primeira Tarefa Cloud num **repo de teste** e regista os comandos de instalação de dependências
2. Escreve os passos repetidos na documentação do repo (`README`, `AGENTS.md` ou o ficheiro de environment que o produto suporte)
3. Configura [Secrets](/guide/web-and-cloud/secrets-and-variables/) (registry privado, API key)
4. Confirma que a política de [acesso à Internet](/guide/web-and-cloud/internet-access/) cumpre os requisitos de segurança
5. Com o mesmo template de ambiente, valida o ciclo issue → PR

## Quando convém Cloud

Podes decidir assim:

- Só alteras o projeto na tua máquina e queres ver o resultado já: primeiro local
- Queres deixar a Tarefa a correr, um ambiente unificado para a equipa ou ligar GitHub em remoto: então Cloud

Se o fluxo local ainda não está fluido, não precisas de converter o problema em «configuração Cloud» de golpe.

## Alinhamento com o ambiente local

Para evitar «verde em local, vermelho no Cloud»:

| Prática | Motivo |
|---|---|
| Fixar versões de dependências (lockfile) | Instalação reproduzível |
| Em `AGENTS.md`, escrever comandos de instalação e teste | O Agent não adivinha |
| CI e Cloud com versões próximas de Node/Python | Menos deriva de versão |
| Ficheiros grandes com Git LFS ou download no build | Tamanho de clone controlável |

## Ciclo de vida

Tarefa Cloud típica:

1. **Criar/reutilizar** instância de ambiente
2. **Preparar**: clone, checkout de branch, instalar dependências
3. **Executar**: o Agent altera código e corre comandos
4. **Entregar**: push de branch, PR, log artifact
5. **Destruir ou recuperar** (a política varia conforme o produto)

As Tarefas longas podem seguir-se com [notificações da App de ambiente de trabalho](/guide/desktop-app/notifications/) ou a partir do telemóvel.

## Erros frequentes

- Assumir que o Cloud já traz toda a toolchain do monorepo privado
- Depender de serviços `localhost` (BD, mock API) sem os providenciar no ambiente
- Na primeira tentativa, correr Tarefas sem limite no repo de produção
- Confundir «problema de ambiente» com «problema de capacidade do modelo»

## Limites de segurança

- Trata o ambiente como **semi-fiável**: continua a ser preciso code review e proteção de branches
- A cadeia de ligação a BD de produção só por Secrets, não no Prompt
- Limpa periodicamente templates de ambiente e Secrets em desuso

## Fontes de referência

- OpenAI Codex Cloud environments
- stormzhang `10-cloud.md`
- KimYx0207 CX-10, CX-11

---

**Estado:** outdated  
**Produtos aplicáveis:** Cloud  
**Nota de revisão:** Esta página toca forma de instância, ciclo de vida, templates de ambiente e ligação a branches de GitHub — detalhes de implementação; falta documentação oficial vigente suficientemente sólida para os confirmar um a um; até completar materiais formais de ambiente Cloud, não convém `verified`.  
**Última verificação:** 2026-07-26

---
legacyVerification:
  status: "verified"
  products: "Cloud"
  checkedAt: "2026-08-26"
title: Acesso à Internet
description: Distingue o acesso durante a instalação do acesso do Agent e limita o risco por domínio e método HTTP.
locale: pt
source_locale: zh-CN
source_revision: "5bbb905"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
sidebar:
  order: 70
---

No Cloud existem duas fases distintas de acesso à rede:

| Fase | Comportamento padrão | Utilização principal |
|---|---|---|
| setup script | Pode aceder à Internet | Instalar dependências e ferramentas |
| Fase do Agent | Acesso desligado por padrão | Aceder a recursos externos durante a tarefa |

Por isso, um `pnpm install` bem-sucedido no setup não significa que o Agent possa depois executar `curl` para qualquer site.

## Porque está desligado por padrão

O acesso do Agent à Internet aumenta os riscos de injeção de instruções, envio de código ou dados para fora, dependências maliciosas e entrada de conteúdos com licenças incompatíveis no repositório. Uma issue, página Web ou README de uma dependência não confiável pode conter instruções destinadas a levar o Agent a enviar dados para terceiros.

O princípio é permitir apenas os destinos e ações necessários à tarefa e rever os registros do trabalho.

## Opções de configuração

O acesso do Agent à Internet é configurado por ambiente:

- **Off**: impede completamente o acesso do Agent à Internet.
- **On**: permite o acesso, com a opção de o limitar por domínio e método HTTP.

A lista de domínios pode começar vazia, usar a padrão Common dependencies ou escolher All (unrestricted). Num repositório de produção, não uses acesso sem restrições como atalho para resolver problemas.

Se a tarefa só precisa de ler documentação ou baixar conteúdo, limita os métodos HTTP a `GET`, `HEAD` e `OPTIONS`. Assim bloqueias `POST`, `PUT`, `PATCH` e `DELETE`, que podem enviar ou modificar dados.

## Exemplo de abertura mínima

Uma tarefa precisa de consultar documentação pública de uma API:

1. Mantém Off e confirma que a falha é realmente causada pela falta de rede.
2. Ativa Agent access.
3. Acrescenta à allowlist apenas o domínio oficial da documentação.
4. Permite só `GET`, `HEAD` e `OPTIONS`.
5. Repete a tarefa e verifica todos os pedidos de saída nos registros.
6. No fim, avalia se deves voltar a Off.

## Relação essencial com Secret

Os Secrets do Cloud são removidos antes da fase do Agent, o que reduz o risco de este enviar diretamente um Secret usado no setup. Mesmo assim, variáveis de ambiente normais, conteúdo do repositório e dados produzidos pela tarefa ainda podem ser enviados para fora. Não disfarces valores sensíveis de variáveis normais para contornar o ciclo de vida dos Secrets.

## Lista de aceitação

- [ ] A necessidade de acesso do Agent à Internet está explicada.
- [ ] A allowlist contém apenas os domínios necessários.
- [ ] Os métodos HTTP estão limitados ao conjunto mínimo.
- [ ] As fontes de entrada são confiáveis ou o risco de injeção de instruções foi considerado.
- [ ] Os registros não contêm comandos que enviem dados do repositório, ambiente ou credenciais.
- [ ] A origem, a versão e a licença das novas dependências foram verificadas.

## Fontes oficiais

- [Agent internet access](https://learn.chatgpt.com/docs/cloud/internet-access)
- [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environment)

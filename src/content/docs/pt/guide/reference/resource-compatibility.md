---
title: "Pets e temas: registro de compatibilidade e recuperação"
description: Registre por versão a origem, o carregamento, a interação, a desativação e a recuperação de recursos visuais, sem tratar a revisão da documentação como teste de instalação.
contentType: reference
editorialStatus: review
verification:
  kind: editorial
  checkedAt: "2026-09-18"
  summary: Oferece um procedimento de teste a preencher. Este site ainda não possui registro concluído de instalação e desinstalação de pets ou temas no cliente.
locale: pt
source_locale: zh-CN
source_revision: "96ff34f"
translation_status: reviewed
translated_at: 2026-09-20
reviewed_at: 2026-10-26
---

A compatibilidade diz respeito a uma combinação específica de versões. Um pacote com estrutura válida, imagens nas dimensões corretas ou uma interface que abre não comprovam, isoladamente, que os estados de animação funcionam ou que a desativação e a recuperação dão certo.

## Evidências atuais

Em 2026-09-18, o arquivo `Info.plist` do aplicativo local foi conferido apenas para leitura. O identificador do cliente era `com.openai.codex`, a versão `26.911.61220` e o build `9647`. Essa verificação não carregou pets nem temas e não alterou a configuração do cliente. **Combinações de versões com testes concluídos de instalação, reprodução, alternância e recuperação: nenhuma até agora.**

Use as instruções de [instalação de pets](/pt/pets/install/), [criação de pets](/pt/pets/create/) e [temas](/pt/theme/) de acordo com as versões do recurso e do cliente. Atribua separadamente às fontes as alegações de projetos de terceiros; não as apresente como testes realizados por este site.

## Modelo de registro para copiar

```text
Tipo de registro: pet / tema
Estado: não executado / em andamento / aprovado / falhou / resultado inconclusivo
Data do teste:
Responsável pelo teste:
Sistema e arquitetura:
Versão e build do cliente:
Nome e versão do recurso ou ferramenta:
URL da fonte original e tag/commit correspondente:
Nome do arquivo baixado e SHA-256:
Autor dos recursos e licença:
Estado antes da instalação e local do backup (remover dados sensíveis antes de publicar):
Etapas de instalação realizadas:
Evidências do carregamento e da interface:
Verificações de animação ou interação:
Etapas e resultado da desativação:
Etapas e resultado da recuperação:
Nova verificação após reiniciar:
Logs de falhas e questões pendentes:
Plataformas, estados ou recursos não testados:
```

Deixe os itens não executados em branco ou marque-os como não executados. Não registre tempo zero, aprovação nem uma versão presumida. Registros públicos devem usar caminhos anonimizados e capturas de teste sem conteúdo de tarefas reais.

## Verificações de pets

Primeiro valide o JSON e os caminhos dos recursos. Depois, verifique no cliente a seleção, o carregamento, o fundo transparente, a alternância de ações e o redimensionamento da janela. Se o atlas tiver um campo de versão, confirme que ele corresponde ao contrato de linhas e colunas. Conseguir abrir a imagem não prova que o cliente a interpretou segundo a versão correta do formato.

Para desativar um pet, primeiro volte a um recurso integrado ou desligue os pets. Mova o pacote personalizado para um backup fora do diretório examinado. Atualize ou reinicie e confirme que ele não aparece mais. Para restaurar, devolva o mesmo pacote e confira o carregamento. Renomeá-lo dentro do diretório examinado não basta; não exclua o diretório inteiro de configuração.

## Verificações de temas

Registre a aparência e a interação das mesmas páginas antes e depois de ativar o tema. Cubra pelo menos a página inicial, uma tarefa, o campo de entrada, a busca, as mensagens de erro e as telas de aprovação disponíveis. Marque como não testadas as telas que você não consegue abrir. Não execute ações reais de alto risco apenas para testar um botão.

Após a recuperação, reabra o cliente normal e confirme que a aparência e os controles funcionam, e que o tema não reinicia nem é injetado novamente. Verifique separadamente a restauração da interface e o fechamento da conexão de depuração. Se não puder confirmar algum resultado, mantenha-o como pendência.

## Quando verificar de novo

Repita as etapas após mudanças no cliente, no sistema, no mecanismo de temas, no formato dos pets ou no pacote de recursos. Preserve o registro antigo e acrescente a nova combinação de versões, em vez de apenas atualizar a data da verificação. Em caso de falha, restaure primeiro uma configuração sabidamente funcional e só então investigue a nova mudança em separado.

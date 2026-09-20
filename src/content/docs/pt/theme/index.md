---
title: "Temas do Codex"
description: "Verifique a origem, versão, interações e recuperação de um tema de terceiros, distinguindo afirmações do projeto dos testes deste manual."
contentType: guide
editorialStatus: review
verification:
  kind: source-checked
  checkedAt: "2026-09-18"
  summary: "Foram lidos o repositório, as versões e o guia de instalação do projeto. O tema não foi instalado, a interface e a recuperação após desinstalação não foram testadas; não há garantia de compatibilidade."
  evidence:
    - label: "Descrição do projeto Dream Skin"
      href: https://github.com/Fei-Away/Codex-Dream-Skin
    - label: "Instruções de instalação e remoção no macOS"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md
    - label: "Pacotes e histórico de versões"
      href: https://github.com/Fei-Away/Codex-Dream-Skin/releases
locale: pt
source_locale: zh-CN
translation_status: draft
translated_at: 2026-09-20
source_revision: "4ecfa1c"
---

Codex Dream Skin é um tema de desktop de terceiros. Segundo a documentação do projeto, injeta alterações visuais por uma ligação CDP local sem modificar o pacote oficial. Essa é a descrição do projeto; este manual não verificou comportamento de ficheiros, rede ou compatibilidade da interface em todas as versões.

![Ilustração do aspeto do tema](/theme/codex-dream-skin/article/codex-dream-skin-home.jpg)

A ilustração já presente aqui não é prova desta verificação de versão. Também não demonstra que a caixa de entrada, os botões de aprovação e todas as vistas de tarefas funcionem corretamente.

## Versão e estado da verificação

| Item | Resultado desta verificação |
|---|---|
| Origem | [Repositório do projeto](https://github.com/Fei-Away/Codex-Dream-Skin) e [versões](https://github.com/Fei-Away/Codex-Dream-Skin/releases) |
| Versão observada | [v1.5.18](https://github.com/Fei-Away/Codex-Dream-Skin/releases/tag/v1.5.18), verificada em 18-09-2026, commit `34335d27d54300eccb325cc652f6c93fef428b84`; não instalada |
| Cliente local | Info.plist lido sem alterações: 26.911.61220, build 9647, identificador com.openai.codex |
| Combinação de tema e cliente testada | Nenhuma; instalação, interações e remoção não testadas |
| Compatibilidade Windows | Não testada por este manual |
| Resultado da recuperação | Não testado; seguem passos e critérios de aceitação |

As notas de versão referem que algumas correções de interface foram verificadas com o macOS Codex 26.901.41123. Esta versão difere da 26.911.61220 registada aqui, pelo que não comprova compatibilidade da combinação. A ligação macOS desta página está fixada em v1.5.18; para outras versões, consulte a tag correspondente.

Ler a versão do cliente fornece contexto do ambiente, não prova compatibilidade do tema. Use o [registo de compatibilidade e recuperação](/pt/guide/reference/resource-compatibility/) para guardar os seus testes.

## Antes de instalar

1. Escolha uma versão definida nas publicações do projeto. Registe o nome do pacote, URL e SHA-256. Se o editor fornecer um ficheiro de verificações, compare-o com o pacote. Um hash igual mostra que os ficheiros correspondem, não que o programa é seguro.
2. Guarde versões do cliente e do sistema, definições do tema e cópias de imagens personalizadas que tem direito a usar. Registe o local do backup.
3. Verifique primeiro a página inicial, tarefas, entrada, deslocação, pesquisa e aprovações sem tema como referência.
4. Leia as instruções de instalação, atualização e remoção da versão escolhida. A documentação da branch main pode ser mais recente do que o instalador.

Para macOS, consulte o [guia de instalação do projeto](https://github.com/Fei-Away/Codex-Dream-Skin/blob/v1.5.18/docs/install-macos.md); para Windows, o [guia Windows](https://github.com/Fei-Away/Codex-Dream-Skin/blob/main/docs/install-windows.md). Não atribua automaticamente um aviso de «danificado» ou bloqueio do sistema à falta de assinatura. Verifique origem, integridade e erro concreto antes de avançar.

## O que verificar depois de trocar uma imagem

O projeto oferece gestão de imagens de fundo e temas; os nomes dos menus variam por versão. Use imagens com direitos adequados e verifique modos claro e escuro, escala da janela e páginas de tarefas reais.

- Entrada, botões e informações de aprovação continuam legíveis, clicáveis e focáveis?
- O fundo tapa resultados de pesquisa, saídas longas, diffs de código ou erros?
- Depois de mudar de página e reiniciar, o tema mostrado corresponde ao escolhido?
- Depois de desligar o tema, a interface original regressa e o problema ainda se reproduz?

Se houver conteúdos tapados ou controlos inoperantes, pare de usar o tema e siga a recuperação. Não esconda o problema acrescentando mais estilos.

## Remoção e recuperação

O guia macOS do projeto pede «Restaurar original e desinstalar» na barra de menus antes de remover a aplicação do tema. Temas e imagens do utilizador podem ser guardados ou apagados separadamente. Faça backup dos recursos próprios antes. No Windows, siga o guia da versão respetiva, sem reutilizar caminhos macOS.

Os passos seguintes são recomendações deste manual para aceitar a recuperação, não um registo de testes já feitos:

1. Guarde o trabalho no cliente e registe o tema atual e os ficheiros a manter.
2. Use o fluxo de recuperação da ferramenta e conserve as mensagens de conclusão, falha ou estado incerto.
3. Abra o Codex pelo acesso normal e verifique fundo, texto, entrada e navegação nas tarefas.
4. Confirme que a ferramenta não inicia automaticamente nem reinjeta o tema. Se necessário, examine processos e ligações de depuração sem terminar indiscriminadamente processos de nome semelhante.
5. Remova a aplicação apenas depois dos controlos. Guarde imagens personalizadas até decidir separadamente que não precisa delas.

Backup existente, saída do desinstalador ou fecho da janela do tema não provam, por si só, recuperação bem-sucedida. Se o resultado for incerto, guarde registos e consulte os Issues do projeto; não declare a restauração concluída. Não apague todo o diretório de configuração do Codex para remover o tema.

## Limites destas conclusões

CDP pode alterar conteúdo das páginas; «não modifica o pacote oficial» não significa que não afete o funcionamento. Volte a verificar após alterações na interface. Analise por versão as afirmações do projeto sobre processamento local, acesso à rede e recuperação. Este manual não garante que imagens nunca sejam enviadas, que todas as versões ofereçam recuperação com um clique ou que uma atualização por cima nunca perca dados.

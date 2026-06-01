# Análise IA Tarefas

## Análise do projeto
O projeto Módulo Maternidade trata-se da extensão de um sistema de Prontuário Eletrônico em Saúde (RES) hospitalar existente (Klinikos), visando a incorporação de fluxos assistenciais específicos para maternidade: desde o pré-atendimento, passando pelo atendimento de urgência e emergência obstétrica, até a internação em alojamento conjunto e UTI neonatal (binômio mãe e bebê).

A estrutura atual conta com uma base em React (Vite, TailwindCSS) e uma interface padronizada, porém carecia de integração para as abas de Atendimento e Internação com suas respectivas fichas e formulários. A estratégia foi reaproveitar e conectar os componentes já existentes (formulários específicos de maternidade, como FUGULIN Neonatal, Avaliação de Cesariana, etc.) para criar as novas seções de navegação do usuário de forma alinhada ao protótipo e fluxos documentados.

Na execução da Sequência 2, além de manter os fluxos funcionais, o foco passou a ser a padronização visual e de estrutura conforme o documento `TELA PADRÃO.png` em `/documentos_base/MODELOS/`, aproximando o protótipo do padrão de navegação e organização do Klinikos.

## Análise de todo o código
O código fonte revela uma estrutura madura em React:
- Utiliza **React Router v7** para gerenciamento de rotas.
- **TailwindCSS** e **shadcn/ui** (customizado) para componentes visuais, favorecendo uma interface coesa e responsiva.
- Separação em `components`, `design-system` e `modules`.
- Os formulários solicitados já existiam no diretório de `pages` do módulo maternidade (ex: `AdmissaoRN.jsx`, `NovoAtendimento.jsx`), porém estavam isolados e não acessíveis através das rotas do sistema.

Pontos relevantes observados:
- Existiam divergências entre o formato de dados do contexto (`ClinicalContextProvider`) e o esperado por algumas páginas, o que poderia gerar tela em branco.
- Parte dos componentes estava com navegação não SPA (uso de `<a href>`), o que causava recarregamento e perda de estado.
- Componentes de UI possuíam diferenças de API (ex.: `Select` do design-system esperava `children`, enquanto as páginas passavam `options`), exigindo ajuste para padronização.

## Ajustes realizados (de-para)
- **De:** `ClinicalShell.jsx` contendo apenas a navegação fixa para o dashboard principal sem diferenciação de abas (Pré-Atendimento, Atendimento e Internação).
- **Para:** Inserção de uma barra de navegação secundária no `ClinicalShell.jsx` abaixo do cabeçalho do paciente, exibindo as abas "Pré-Atendimento" (Dashboard), "Atendimento" e "Internação".
- **De:** Falta de visualização e entrada para os fluxos de "Atendimento" e "Internação".
- **Para:** Criação das páginas `AtendimentoTab.jsx` e `InternacaoTab.jsx` que agrupam os atalhos para os diversos formulários pertinentes a cada fase do cuidado.
- **De:** Rotas do React Router desatualizadas sem mapeamento dos componentes de maternidade.
- **Para:** Atualização do arquivo `routes.jsx` importando e definindo as rotas `/atendimento`, `/internacao` e todas as fichas pertinentes como `admissao-rn`, `fugulin`, etc.
- **Geração do Protótipo:** Execução do build com Vite para entregar o código funcional e agrupado para o cliente.

Atualização (Sequência 2):
- **De:** Layout do módulo com sidebar/topbar em estilo “dashboard”, distante do padrão do Klinikos.
- **Para:** Estrutura principal alinhada ao `TELA PADRÃO.png`, com barra superior (KLINIKOS), abas principais horizontais (Pré-Atendimento, Atendimento, Internação), painel de identificação do paciente e barra de abas secundárias/apoio para navegação dos conteúdos.
- **De:** Botões levando a telas sem conteúdo/dados reais e sem persistência de alterações.
- **Para:** Formulários e telas com exemplos similares ao real, com “Salvar” atualizando estado no contexto e refletindo na Linha do Tempo clínica.
- **De:** Saída do protótipo (HTML/MD) sem padronização de pasta.
- **Para:** Geração de protótipo automatizada para `/documentos_base/` via `npm run build:prototipo`.

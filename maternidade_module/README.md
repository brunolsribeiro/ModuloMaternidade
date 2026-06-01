# Módulo Maternidade - Klinikos

Este projeto é um módulo integrado ao sistema hospitalar Klinikos, desenvolvido em React com Vite e TailwindCSS. Ele atende ao fluxo de pacientes na Maternidade (binômio mãe e bebê), abrangendo:
- Pré-Atendimento
- Atendimento (Urgência e Emergência Obstétrica)
- Internação (Alojamento Conjunto, UTI Neonatal)

## Requisitos

- Node.js (v16 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório ou navegue até o diretório do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução em Desenvolvimento

Para rodar o servidor de desenvolvimento localmente:

```bash
npm run dev
```

Acesse o sistema no navegador através do endereço exibido no terminal (ex.: `http://localhost:5173/`). Se a porta estiver em uso, o Vite escolherá automaticamente outra.

## Build (Produção)

Para gerar os arquivos otimizados e a versão HTML funcional para produção:

```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`. O arquivo `index.html` gerado no build atua como o protótipo funcional "Maternidade.html" solicitado, e pode ser aberto num servidor web estático.

## Build do Protótipo (HTML + MD em /documentos_base)

Para gerar o protótipo em arquivo único (HTML com scripts e estilos embutidos) e a documentação `.md`, ambos versionados com data/hora e salvos em `/documentos_base/`:

```bash
npm run build:prototipo
```

## Estrutura do Projeto

- `/src/components/maternidade`: Componentes visuais do layout e de domínio da maternidade.
- `/src/modules/maternidade/pages`: Páginas e formulários específicos (ex: `AtendimentoTab`, `InternacaoTab`, `AdmissaoRN`, etc).
- `/descricao_projeto` e `/descricao_tarefas`: Documentos de referência e análise.
- `/documentacao_processos`: Histórico de execução de tarefas.

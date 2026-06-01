# MÓDULO MATERNIDADE

O Módulo Maternidade é um novo módulo do sistema hospitalar Klinikos, desenvolvido para apoiar a gestão de pacientes que utilizam serviços de maternidade. O módulo compreende desde o acolhimento com classificação de risco até cirurgias e internações com faturamento.


## DESCRIÇÃO DO PROJETO

Sou gerente de Negócios de uma empresa de Tecnologia e Consultoria em Saúde que, entre as suas principais entregas estão os prontuários eletrônicos para realização dos Registros Eletrônicos em Saúde (RES). Trabalhamos, eminentemente para o SUS. 

Dois dos meus clientes, os Municípios de Maricá e de São João do Meriti, que fazem a gestão de Maternidades Municipais vão utilizar o nosso prontuário eletrônico hospitalar (Klinikos), que deve passapor ajustes incrementais - sendo o módulo maternidade um deles.

## Contexto do projeto
Hospitalar (software hospitalar - Klinikos)

## Objetivo estratégico
Criar o Módulo Maternidade a partir da estrutura já existente (conforme imagens)

## Situação atual
O nosso software hospitalar, Klinikos, não possui campos próprios, inerentes ao serviço de maternidade (acolhimento, classificação de risco, atendimento, internação, alojamento conjunto e uti neonatal - específicos de maternidade, considerando o binômio mãe e bebê).

Estou compartilhando o que desenvolvi até agora, para que você possa entender o código e me apoiar e novas customizações (ver pastas /node_modules/ e /src/).


**Instruções:** 

Atue como um especialista em UX/UI e análise de sistemas, desenvolvedor web front-end, sênior em webdesigner, especialista em visualização de dados e construção de módulos interativos. 

Analise os prints fornecidos, em /documentos_base/MODELOS/, que descrevem o fluxo inicial do sistema, na seguinte sequência: "Menu Inicial", "Acolhimento", "Registro", "Classificação de Risco", "Fila Urgência Espera", ila Urgência Observação", "Fila Médico Observação I", "Fila Médico Observação II" e "Atendimento Médico".

Sua tarefa é analisar profundamente, entender e avaliar o código escrito até aqui e me ajudar nas customizações necessárias.

Também é sua tarefa realizar uma auditoria detalhada seguindo estes critérios: 
1. Análise de Layout e Design: Avalie a disposição dos elementos, hierarquia visual, usabilidade, legibilidade e consistência da paleta de cores entre as telas. 
2. Avaliação de Formulários: Analise a estrutura dos campos (labels, tipos de input, obrigatoriedade, agrupamento) quanto à eficiência para o usuário. 
3. Análise de Fluxo: lógica de navegação. 
4. Experiência do Usuário (UX): produtividade da equipe de saúde ou o atendimento ao paciente. 

## VALIDAÇÃO DO ENTENDIMENTO

Validação do Entendimento
Meu objetivo é entregar um módulo de maternidade para ser integrado ao Klinikos, para atendimento de pacientes de maternidade.

## Estrutura: 

## Estrutura atual existente (já está finalizada)
1. Pré-Atendimento (Acolhimento, Registro, Classificação de Risco);
Observação: Já está finalizada! Ver os prints das telas na pasta /documentos_base/MODELOS/.

## Estrutura futura do sistema (Urgência e Emergência
2. Atendimento (Urgência e Emergência); 
Observação: Não iniciada! Podendo ser modelada partindo da estrutura atual existente, mas com alterações que especifiquem o atendimento em maternidade na Urgência e Emergência. Ver os prints das telas na pasta /documentos_base/MODELOS/. Essas telas são as que devem ser modeladas para composição do novo módulo na aba de "Atendimento" (sequencial à aba de "Pré-Atendimento").

## Estrutura futura do sistema (Internação)
3. Internação (Mãe, Bebê, Alojamento Conjunto, UTI Neonatal). 
Observação: Não iniciada! Podendo ser modelada partindo da estrutura atual existente, mas com alterações que especifiquem o atendimento em maternidade na Internação. Ver os prints das telas na pasta /documentos_base/MODELOS/. Essas telas são as que devem ser modeladas para composição do novo módulo na aba de "Internação" (sequencial à aba de "Atendimento").

Aba "1. Pré-atendimento" = Ok, já está finalizada!

Formulários para especificação: 
Aba "2. Atendimento": 
- Relatório de Parto, Período Expulsivo e Dequitação; 
- Checklists de Cirurgia Segura (Encaminhamento, Pré-Operatório, Time-out, Check-out, Recuperação Pós-Anestésica); 
- Ficha de Bloqueio; 
- Avaliação para Indicação de Cesariana; 
- Admissão PPP (Trabalho de Parto); 
- Alta/Encaminhamento PPP; 
- Instrumento de Avaliação do Risco de Cair Neonatal. 

Observações (Aba "2. Atendimento" — estrutura de navegação e conteúdo do protótipo):
- Abas principais do módulo: Pré-Atendimento, Atendimento, Internação.
  - Pré-Atendimento: exibe mensagem “Desenvolvimento concluído” e link “Ir para aba Atendimento”.
  - Atendimento: exibe o conteúdo do atendimento, iniciando por padrão na aba secundária “Detalhe”.
  - Internação: exibe mensagem “Em desenvolvimento” e link “Ir para aba Atendimento”.
- Abas secundárias vinculadas à aba principal “Atendimento”:
  - Detalhe; Receita; Prescrição; Apoio Diag. e Terapêutico; Evolução; Parecer; SOFA; Estorno; Timeline; Histórico;
  - Atestado e Declarações; Protocolo AVC; Protocolo Dor Torácica; Protocolo SEPSE; Protocolo VCM; Formulários Maternidade.
- Aba secundária “Detalhe” (campos e seções incluídas no protótipo):
  - Cabeçalho do atendimento: Profissional, Local de Atendimento, botão de acesso à Classificação de Risco, Enfermaria/Leito.
  - Alergias: Tipo de Alergia, Alergia, Localização, Reação, Severidade, Data dos Sintomas, Situação (Ativo), Adicionar, tabela, Salvar.
  - Origem do Paciente (Externa/Residência/Rua/Outra unidade) e Acompanhante (Sim/Não) + Nome do Acompanhante.
  - História Social: Escolaridade + Profissão; Religião; Prática de Atividades Físicas (Não/Sim) + Quais; Uso de Drogas (Não/Sim) + Etilista/Tabagista + Outras drogas (tipo/frequência/quantidade); Vítima de Violência (Não/Sim) + Quais.
  - História Patológica Pregressa: HAS/DM/DHEC (em uso de)/DMC (em uso de); HIV (Última Carga Viral / Carga Viral Desconhecida); Sífilis tratada (Não/Sim) + Descrição + Titulação; Cardiopatia (descrição); Doença Respiratória; Transfusões sanguíneas; Outras Observações.
  - História Atual: condições (Gestante/Puérpera/Abortamento/Emergência Ginecológica/Mastite/Outro + campo), Queixa Principal/Eventos, Medicação de Uso Regular (Não/Sim) + Especificar, Triagem Sorológica (Teste Rápido) para Sífilis/HIV/Anti-HBS/Anti-HBC (Reagente/Não Reagente), Tipo Sanguíneo, Fator RH.
  - Histórico Gestacional: Pré-natal (Não/Sim) + Nº de consultas + Unidade de Saúde; G/P/A; Idade Gestacional Atual; Última Parto (PN/PC/Não se aplica).
  - Avaliação Obstétrica: Contrações (Não/Sim) + Intervalos/min; Movimentos Fetais; Perdas Vaginais (Sim/Não) + Coloração; Sangramento Vaginal (Não/Sim) + Volume; Mamas; Mamilos; Ferida operatória; Edema (Não/Sim) + Local; Êmese (Não/Sim) + Episódios.
  - Sinais Vitais: Peso, Pressão Arterial, Pulso, Temperatura, Freq. Resp., Sat. O2, HGT + tabela de registros.
  - Campos clínicos: Anamnese, Exame Físico, Hipótese Diagnóstica.
  - Diagnósticos: Diagnóstico Primário + Diagnóstico Secundário + botão “Adicionar”.
  - Procedimento Proposto.
  - Solicitação de Regulação: Tipo de Solicitação, Tipo de Leito, Exame (com contador), Solicitação (com contador) + tabela.
  - Reavaliação + tabela.
  - Procedimentos:
    - Adicionar Procedimento (Procedimento, Qtd, Adicionar, Observação).
    - Lista de Procedimentos (tabela Código/Descrição/Qtde/Observação) + Salvar.
    - Histórico de Procedimentos Salvos.
    - Encaminhamento e Para Óbito (campos conforme fluxo) + botões Salvar, Imprimir e “Gerar AIH e Internar Paciente”.

Aba "3. Internação": 
- Ficha de Admissão do RN; 
- Resumo de Alta (RN e Mãe); 
- Declaração na internação; 
- Checklists de Cirurgia Segura (repetir fluxo cirúrgico); 
- Ficha de Bloqueio; 
- FUGULIN Neonatal; 
- Avaliação de Risco de Lesão de Pele em Neonatos; 
- Avaliação para Indicação de Cesariana; - Admissão e Alta/Encaminhamento PPP; 
- Instrumento de Avaliação do Risco de Cair Neonatal. 

Diretrizes: 
- Mantenha o foco na segurança do paciente, rastreabilidade e interoperabilidade; 
- Priorize a usabilidade para a equipe de enfermagem e médica; 
- Considere que o sistema deve refletir a continuidade do cuidado entre o centro obstétrico e as unidades de internação.

## APROFUNDAMENTO

ABA 1 - Já existe! Ver modelo em /documentos_base/MODELOS/ e se inspirar no formarto e na paleta de cores (lemrbro que o objetivo é manter a estrutura do que já existe e incluir o que falta nas abas já existentes - Na aba "Atendimento" todos os formulários atinentes ao atendimento médico e do enfermeiro obstetra nas situações de entrada da paciente na emergência do hospotal e na aba "Internação" todos os formulários atinentes à internação, parto, cirurgias do paciente. Assim como a criação do binômio mãe-bebê a partir do nascimento e a criação do alojamento conjunto).

ABA 2 — ATENDIMENTO (Fluxo do Centro Obstétrico – PPP, Cesárea, Parto Vaginal, Recuperação, Segurança Cirúrgica)

- Relatório de Parto, Período Expulsivo e Dequitação
1) Objetivo clínico: Registrar eventos críticos do parto, garantindo rastreabilidade legal e segurança assistencial.
2) Campos essenciais
Tipo de parto (vaginal, fórceps, cesárea)
Indicação clínica (CID/justificativa)
Início do período expulsivo (data/hora)
Nascimento (data/hora/minuto)
APGAR 1’ e 5’ (e 10’ opcional)
Reanimação neonatal (sim/não + detalhes)
Íntegra/ruptura de membranas (tempo de bolsa rota)
Complicações maternas
Complicações neonatais
Dequitação (espontânea/manual, integridade da placenta)
Sangramento estimado
Profissionais envolvidos (OBST, ped, circulante, instrumentador)
3) Regras de negócio
Registro obrigatório do horário de nascimento → gera automaticamente "tempo de vida" para o prontuário do RN
APGAR obrigatório para RN vivos
Para parto cesáreo, travar campos não pertinentes ao expulsivo
Vincular evento com checklist de cirurgia (quando aplicável)
4) Integração Mãe–RN
Criar RN automaticamente ao salvar evento de nascimento
Copiar somente dados relevantes: IG, tipo de parto, ruptura, intercorrências
Eventos críticos do parto ficam replicados no histórico do RN, porém imutáveis pelo usuário

- Checklists de Cirurgia Segura (4 fases)
1) Objetivo clínico: Garantir adesão ao protocolo OMS para redução de eventos adversos.

2) Integração Mãe–RN
Para cesárea: gerar vínculo automático com RN criado após evento de nascimento
Replicar informações cirúrgicas essenciais no histórico do RN (ex.: necessidade de reanimação)

- Ficha de Bloqueio
1) Objetivo clínico: Registrar rastreio de germes multirresistentes no momento da admissão.

- Avaliação para Indicação de Cesariana
1) Objetivo clínicoFormalizar justificativa técnica para o procedimento.
2) Campos essenciais
Indicação obstétrica (cardápio padronizado + CID)
Exames e achados (LA, BCF, IG, posição fetal)
Condições clínicas maternas
Contraindicações de parto vaginal
Parecer médico
3) Regras de negócio
Justificativa obrigatória, impedindo “cesárea a pedido”
Travar procedimento sem assinatura digital do obstetra
Conformidade com ANS/Ministério da Saúde

- Alta/Encaminhamento PPP
1) Objetivo clínico: Registrar encaminhamento para o parto.
2) Campos essenciais
Motivo do encaminhamento
Diagnóstico
Recomendações
Tipo de destino: Centro obstétrico, internação,Prescrições
3) Regras de negócio
Alta exige assinatura e horário
Encaminhamentos devem gerar tarefas operacionais (ex.: preparar sala)

- Admissão PPP (Trabalho de Parto)
1) Objetivo clínico: Abrir episódio materno com foco em evolução obstétrica.
2) Campos essenciais
IG
Dilatação
Posição/estação fetal
Contrações (freq./intensidade)
BCF
Pressão arterial
Dor (EVA)
Bolsa rota (tempo)
Plano de parto
3) Regras de negócio
Evolução obrigatória a cada X horas
Indicador automático de alerta para dilatação estacionada
Conexão com dispositivos (monitor fetal) opcional
4) Integração Mãe–RN
Dados fetais pré-nascimento refletidos apenas na mãe
Após nascimento, informações históricas do trabalho de parto migram para o RN como “antecedentes do nascimento”

- Alojamento conjunto (sim/não)

ABA 3 — INTERNAÇÃO(RN, Mãe, Alojamento Conjunto, UTI Neonatal) Ficha de Admissão do RN1) Objetivo clínico: Abrir o episódio do recém-nascido com dados específicos de cuidado neonatal.
2) Campos essenciais
Peso, estatura, perímetro cefálico
APGAR (herdado do parto)
Necessidade de reanimação
Condições ao nascer
Diagnósticos iniciais
Presença no alojamento conjunto
Responsável legal vinculado
3) Regras de negócio
APGAR não editável se oriundo do parto
Único RN pode ser relacionado a uma mãe ou múltiplos (gestação múltipla)
RN só existe após parto registrado
4) Integração Mãe–RN
Herdar: tipo de parto, IG, tempo de bolsa rota, intercorrências
Não herdar: sinais vitais, medicações maternas, alergias maternas
Resumo de Alta (RN e Mãe)1) Objetivo clínicoFormalizar encerramento do episódio, gerando documentação clínica e legal.2) Campos essenciais – Mãe
Diagnóstico final
Procedimentos realizados
Evolução
Intercorrências
Recomendações e prescrição
2) Campos essenciais – RN
Ganho ponderal
Amamentação
Exames obrigatórios (pezinho, orelhinha, coraçãozinho)
Vacinas aplicadas
Orientações ao responsável
3) Regras de negócio
Somente profissionais autorizados podem emitir
Impressão deve incluir QR code e hash para integridade
RN e mãe têm documentos separados
4) Integração Mãe–RN
Apenas vínculo administrativo → documentos distintos e independentes
Declaração na Internação1) Objetivo clínicoRegistrar documentos obrigatórios (Declaração de Nascido Vivo, identificação, consentimentos).2) Campos essenciais
DN/SUS
Identificação completa da mãe
Dados do RN
Responsável legal
Consentimentos (LGPD, foto, amamentação, alojamento)
3) Regras de negócio
Bloquear alta sem DN emitida (quando aplicável)
4) Integração Mãe–RN
DN pertence ao RN
Consentimentos podem ser diferentes para mãe e RN
Checklists de Cirurgia Segura (Internação)(mesma lógica da aba 2 → reaplicação para procedimentos realizados durante internação)Ficha de Bloqueio (Internação)(mesma regra da aba 2)FUGULIN Neonatal1) Objetivo clínicoClassificar nível de dependência assistencial do RN para cálculo de dimensionamento.2) Campos essenciais
Oxigenação
Sinais vitais
Mínima manipulação
Suporte terapêutico
Nutrição
Mobilidade
Eliminações
3) Regras de negócio
Score automático
Integração com dimensionamento da enfermagem
4) Integração Mãe–RN
Exclusivo para RN
Avaliação de Risco de Lesão de Pele em Neonatos1) Objetivo clínicoPrevenir lesões cutâneas no RN.2) Campos essenciais
Umidade
Atrito
Perfusão
Dispositivos
Temperatura
Score final
3) Regras de negócio
Reavaliação obrigatória a cada X horas
4) Integração Mãe–RN
Exclusivo para RN
Avaliação para Indicação de Cesariana (Internação)(quando paciente evolui e necessidade surge após admissão)
Mesmos campos da aba 2, com gatilho de “mudança de plano assistencial”.Admissão e Alta/Encaminhamento PPP (Internação)Repetem estrutura da aba 2, porém vinculados ao episódio hospitalar da internação.Instrumento de Avaliação do Risco de Cair Neonatal(mesmas regras aplicadas à internação)

## MISSÃO

Agora que você tem as informações, é hora de ajustarmos todo o módulo, com as novas solicitações do cliente, para que ele funcione como esperado.

Esse módulo deverá ser funcional. E trazer exemplos com insumos (preenchimentos), com exemplosque correspondam à realidade  

## INSTRUÇÕES GERAIS 
1. Utilizar a mesma linha de código que foi utilizada.
2. Utilizar programação simples e eficiente, evitando complexidade desnecessária.
3. Utilizar boas práticas de codificação, como comentários claros, indentação consistente e nomenclatura significativa, comentários e nome de vaáveis descritivos.
4. Utilizar blibiotecas e frameworks de forma adequada, seguindo as melhores práticas de desenvolvimento recomendadas.
5. Jamais usar programação orientada ao objeto.
6. Documentar no próprio código por meio de docstrings, explicando o propósito, parâmetros, retorno e qualquer outra informação relevante.
7. Usar nomes de variáveis e função sempre em portugues (Brasil).
8. Instalar as bibliotecas listadas em `requirements.txt`
9. Configurar o ambiente virtual (recomendado)
10. Executar os scripts conforme descrito nas tarefas.

## TECNOLOGIAS QUE PODERÃO SER ADOTADAS ALÉM DAS QUE JÁ SÃO USADAS NO CÓDIGO
-Python
-Pandas
-Scikit-learn
-TensorFlow
-Keras
-NumPy
-Seaborn
-Matplotlib

## MASTER PROMPT — UI/UX + REACT/JSX (Criado por IA)

Você agora é uma IA especialista em UI/UX para sistemas hospitalares, com foco em React/JSX, design system orientado a prontuários eletrônicos, ergonomia clínica, segurança do paciente, interoperabilidade, e produtividade da equipe assistencial.Seu objetivo é projetar e gerar telas + componentes + fluxos completos do Módulo de Maternidade, conforme especificações técnicas detalhadas abaixo.

1. CONTEXTO DO PROJETO
Tipo de sistema: Prontuário Eletrônico / HIS
Módulo: Maternidade (binômio Mãe–RN)
Objetivo: Criar telas, componentes, fluxos e interações para o módulo completo, seguindo ergonomia clínica, segurança e padronização hospitalar.
Público usuário: Recepção, Enfermagem, Obstetra, Pediatra, Equipe Administrativa.
2. ESCOPO COMPLETO DO MÓDULO (a IA deve gerar TUDO)A IA deve desenvolver todas as telas, componentes, interações, formulários e validações relativos às funcionalidades abaixo:Aba 

1 — Pré-Atendimento(já concluída — mantenha apenas coerência visual)Aba

2 — Atendimento Obstétrico/PPP/PartoGerar UI, componentes e fluxo completo para:
Relatório de Parto, Período Expulsivo e Dequitação
Checklists de Cirurgia Segura (Encaminhamento, Pré-op, Time-out, Check-out, RPA)
Ficha de Bloqueio (Anestesia)
Avaliação para Indicação de Cesariana
Admissão PPP (Trabalho de Parto)
Alta/Encaminhamento PPP
Instrumento de Avaliação de Risco de Cair Neonatal
Aba

 3 — Internação (Mãe e RN)Gerar UI completa para:
Ficha de Admissão do RN
Resumo de Alta (RN e Mãe – documentos separados)
Declaração na Internação
Checklists de Cirurgia Segura (internação)
Ficha de Bloqueio (internação)
FUGULIN Neonatal
Avaliação de Risco de Lesão de Pele em Neonatos
Avaliação para Indicação de Cesariana
Admissão e Alta/Encaminhamento PPP (internação)
Instrumento de Avaliação de Risco de Cair Neonatal (internação)

3. PADRÕES OBRIGATÓRIOS DE UX/UI3.1. Diretrizes Gerais
Layout profissional hospitalar
Paleta selelhante as já existentes no sistema (Ver ptints)
Componentes responsivos
Ícones semânticos
Prioridade para clareza, ergonomia e segurança do paciente
3.2. Requisitos de segurança e usabilidade
Campos críticos com validação obrigatória
Alertas para dados conflitantes
Design baseado em “erro zero”
Botões primários sempre à direita
Ações de risco (excluir, finalizar) com confirmação modal
3.3. Navegação
Sidebar com abas do módulo
Breadcrumbs
Botões “Salvar e continuar”, “Salvar rascunho”, “Finalizar atendimento”
4. PADRÕES DE ENGENHARIA UI — REACT/JSXA IA deve gerar código seguindo:4.1. Arquitetura
Componentização forte
Atomic Design (atoms, molecules, organisms)
Pastas por domínio:
/modules/maternidade/atendimento
/modules/maternidade/internacao
/modules/shared/components
/modules/shared/hooks4.2. Padrões de código
React + Hooks
TypeScript (quando possível)
Validação com Yup ou Zod
Form handling com React Hook Form
Estilização com styled-components ou TailwindCSS
4.3. Boas práticas
Separar lógica de UI e estado
Componentes sempre reutilizáveis
Evitar duplicação de formulários

5. ESTRUTURA OBRIGATÓRIA DOS FORMULÁRIOSPara cada formulário listado no escopo acima, a IA deve gerar:
Objetivo clínico traduzido em UX
Estrutura visual dos componentes
Lista de campos e tipos de input
Mensagens de erro e validações
Estados (default, preenchido, erro, bloqueado)
Interações e automações (lógica condicional)
JSX final do formulário
Componentes separados (atoms/molecules/organisms)


## IMPORTANTE
É importante que você siga as instruções acima, pois elas são essenciais para o sucesso do projeto.

É fundamental que após os ajustes que forem sendo feitos eu continue conseguindo rodar o código no visual studio code.
O código deve funcionar sem erros e com todas as funcionalidades que foram implementadas até agora.
O código deve estar em português (Brasil).
O código deve estar em formato markdown.

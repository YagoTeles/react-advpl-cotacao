# Projeto de Integração Protheus - Cotações

Este projeto consiste em um sistema de integração entre o ERP Protheus, desenvolvido em AdvPL/TLPP, e um frontend em React para gerenciamento de cotações por fornecedores.

## Funcionalidades

### Backend (AdvPL/TLPP)

- **Agendamento de Envio de E-mails:**
  - Implementação de um agendador para envio automático de e-mails aos fornecedores com dados de cotação do Protheus.
  - Utilização de AdvPL para integração com dados do Protheus e geração de e-mails.

- **API REST:**
  - Criação de endpoints RESTful para comunicação com o frontend em React.
  - Funcionalidades incluem consulta e atualização de dados de cotação no Protheus.

### Frontend (React)

- **Login de Fornecedores:**
  - Interface de login para fornecedores utilizando código recebido por e-mail.

- **Gerenciamento de Cotações:**
  - Tela para visualização e edição de dados de cotação.
  - Integração via API REST para atualização de dados no Protheus.

## Tecnologias Utilizadas

- **Backend:**
  - AdvPL/TLPP
  - Scheduler para agendamento de tarefas
  - API REST com Protheus

- **Frontend:**
  - React
  - Gerenciamento de estado com Redux (opcional)
  - Requisições HTTP para comunicação com o backend




Obs: Em desenvolvimento.

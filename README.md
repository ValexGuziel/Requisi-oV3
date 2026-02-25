# MaintOS - Sistema de Gestão de Manutenção Industrial

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.7.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6.0.0-purple?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker" alt="Docker">
</p>

MaintOS é uma aplicação de classe empresarial projetada para otimizar o fluxo de ordens de serviço (OS) em ambientes industriais. O sistema permite gerenciar manutenção de ativos, desde o cadastro até a conclusão. 
## 📋 Funcionalidades

- **Dashboard** - Visualização consolidada de métricas e indicadores de manutenção
- **Criação de Ordens de Serviço** - Formulário completo para abertura de OS com seleção de ativos
- **Lista de Ordens** - Visualização e gerenciamento de todas as ordens de serviço


## 🏗️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 19.0.0 | Framework UI principal |
| TypeScript | 5.7.0 | Tipagem estática |
| Vite | 6.0.0 | Build tool e servidor de desenvolvimento |
| Recharts | 2.15.0 | Biblioteca de gráficos |
| Docker | - | Containerização |

## 🔧 Tipos de Manutenção Suportados

O sistema suporta três tipos principais de manutenção:

- **Corretiva** - Reparo de falhas e defeitos
- **Preventiva** - Manutenção programada para evitar falhas
- **Preditiva** - Análise preditiva baseada em dados históricos

## 📦 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Docker](https://www.docker.com/) e Docker Compose
- [Git](https://git-scm.com/) (opcional)

## 🚀 Como Executar

### 1. Configurar Variáveis de Ambiente

### 2. Executar com Docker (Recomendado)

```
bash
# Subir o container
docker-compose up -d --build

# Acessar a aplicação
# http://localhost:8080
```

### 3. Executar em Desenvolvimento Local

```
bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🛡️ Segurança da API

Para garantir a segurança da operação, siga estas diretrizes obrigatórias ao configurar sua chave do Google Gemini:

### Restrição de IP
No console do [Google Cloud](https://console.cloud.google.com/apis/credentials), edite sua chave de API e configure "Restrições de aplicativo" para permitir apenas o endereço IP fixo do seu servidor industrial ou a faixa de IPs da sua rede local.

## 📁 Estrutura do Projeto

```
├── components/          # Componentes React
│   ├── Dashboard.tsx   # Dashboard com métricas
│   ├── OrderForm.tsx   # Formulário de criação de OS
│   ├── OrderList.tsx   # Lista de ordens de serviço
│   └── Sidebar.tsx     # Menu de navegação lateral
├── services/           # Serviços de API
│   ├── assetService.ts # Serviço de gerenciamento de ativos
│   └── orderService.ts # Serviço de ordens de serviço
├── types.ts            # Definições de tipos TypeScript
├── constants.ts        # Constantes da aplicação
├── App.tsx             # Componente principal
├── index.tsx           # Ponto de entrada
├── docker-compose.yml  # Configuração Docker
├── Dockerfile          # Imagem Docker
└── package.json        # Dependências npm
```

## 📊 Dados de Ativos

O sistema carrega automaticamente os ativos do arquivo `Consulta.csv`, que deve conter as colunas:
- Tag do equipamento
- Nome do equipamento
- Setor (opcional)

## 🐳 Configuração Docker

O projeto inclui configuração Docker completa:

- **Imagem base**: Node.js + Nginx
- **Porta**: 8080 (mapped to 80 internally)
- **Restart**: always
- **Modo**: Production

## 📄 Licença

Este projeto é desenvolvido com foco em segurança e integridade operacional.

---

**Desenvolvido com ❤️ para a indústria**

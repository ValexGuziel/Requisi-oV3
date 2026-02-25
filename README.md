# MaintOS - Sistema de Gestão de Manutenção Industrial

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.7.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-6.0.0-purple?style=for-the-badge&logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker" alt="Docker">
</p>

MaintOS é uma aplicação de classe empresarial projetada para otimizar o fluxo de ordens de serviço (OS) em ambientes industriais. O sistema permite gerenciar完整的 manutenção de ativos, desde o cadastro até a conclusão, com suporte a análises inteligentes utilizando inteligência artificial.

## 📋 Funcionalidades

- **Dashboard** - Visualização consolidada de métricas e indicadores de manutenção
- **Criação de Ordens de Serviço** - Formulário completo para abertura de OS com seleção de ativos
- **Lista de Ordens** - Visualização e gerenciamento de todas as ordens de serviço
- **Análise Inteligente via IA** - Diagnósticos de causa raiz e sugestão de ferramentas baseadas no histórico de manutenção

## 🏗️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 19.0.0 | Framework UI principal |
| TypeScript | 5.7.0 | Tipagem estática |
| Vite | 6.0.0 | Build tool e servidor de desenvolvimento |
| Recharts | 2.15.0 | Biblioteca de gráficos |
| Google Gemini | 1.41.0 | API de Inteligência Artificial |
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

Na raiz do projeto, crie um arquivo chamado `.env`:

```
env
# Chave da API do Google Gemini
GOOGLE_API_KEY=SUA_CHAVE_AQUI

# Alternativamente (também funciona)
GEMINI_API_KEY=SUA_CHAVE_AQUI
```

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

### Restrição de API
Limite a chave para que ela possa acessar **exclusivamente** a "Generative Language API". Isso impede que a chave seja usada em outros serviços caso seja extraviada.

### Variáveis de Ambiente
Nunca escreva a chave diretamente no código. O sistema está configurado para ler das seguintes variáveis no servidor:
- `GOOGLE_API_KEY`
- `GEMINI_API_KEY`

## 🤖 Uso da Inteligência Artificial

O MaintOS utiliza o modelo `gemini-3-pro-preview` (ou versão mais recente disponível) para análise técnica avançada. No formulário de OS, o botão "Análise Inteligente" fornece:

- Diagnósticos de causa raiz
- Sugestão de ferramentas baseadas no histórico de manutenção do ativo
- Recomendações de peças de reposição

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

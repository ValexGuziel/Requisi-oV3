# TODO - Correção de Encoding (Acentos e Cedilhas)

## Problema
Os acentos e cedilhas não estão sendo exibidos corretamente no projeto.

## Análise
Após analisar o código, identifiquei que o problema está na configuração do charset:

1. **HTML (`index.html`)**: ✅ Tem `<meta charset="UTF-8" />`
2. **Backend Express (`backend/index.js`)**: ❌ Não especificava charset UTF-8 nos headers
3. **MySQL Connection (`backend/database.js`)**: ❌ Não especificava charset utf8mb4

## Correções Aplicadas

### 1. backend/database.js ✅
- Adicionado `charset: 'utf8mb4'` na configuração do pool MySQL

### 2. backend/index.js ✅
- Adicionado middleware para especificar charset UTF-8 nas respostas JSON

## Seguimento
- Reiniciar o backend para aplicar as alterações
- Testar a aplicação verificando se acentos (à, á, ã, ç, etc.) e cedilhas aparecem corretamente

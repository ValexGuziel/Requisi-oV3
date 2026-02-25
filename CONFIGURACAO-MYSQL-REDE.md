# Configuração do MySQL para Aceitar Conexões da Rede

## Problema
O container Docker precisa conectar ao MySQL que está rodando no host (sua máquina). O `host.docker.internal` já permite isso de dentro do container, mas precisamos verificar se o MySQL está configurado para aceitar conexões externas.

## Passos para Configurar o MySQL

### 1. Verificar a configuração do MySQL (my.cnf)

No XAMPP, o arquivo de configuração geralmente está em:
`C:\xampp\mysql\bin\my.ini` (Windows)

Procure a seção `[mysqld]` e verifique se tem:
```ini
bind-address = 0.0.0.0
```

Se estiver `bind-address = 127.0.0.1`, mude para `0.0.0.0` para aceitar conexões de qualquer interface.

### 2. Conceder permissões ao usuário root

Abra o phpMyAdmin e execute estes comandos SQL:

```
sql
-- Conceder permissões para o usuário root em qualquer host
GRANT ALL PRIVILEGES ON manutencao_os.* TO 'root'@'%' IDENTIFIED BY '';

-- Ou se preferir, criar um usuário específico para Docker
-- GRANT ALL PRIVILEGES ON manutencao_os.* TO 'docker'@'%' IDENTIFIED BY 'senha_docker';

-- Aplicar as mudanças
FLUSH PRIVILEGES;
```

### 3. Reiniciar o MySQL

Após fazer as alterações, reinicie o MySQL no XAMPP.

### 4. Testar a conexão

Após reiniciar, os outros computadores da rede deverão conseguir usar o banco de dados normalmente.

## Verificar se está funcionando

Se ainda não funcionar, verifique no phpMyAdmin:
1. Vá em "Contas de usuários"
2. Verifique se o usuário `root` tem um registro com Host = `%` (qualquer host)
3. Se não existir, crie um novo usuário com Host = `%`

## Reiniciar os Containers

Após configurar o MySQL, reinicie os containers:

```
bash
docker-compose down
docker-compose up -d --build

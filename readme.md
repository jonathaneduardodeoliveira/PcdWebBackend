# PcdWebBackend

Backend do sistema de gestão escolar **PcDWeb**, desenvolvido em Node.js utilizando o banco de dados MySQL e o ORM Sequelize.

## Funcionalidades

- **Cadastro de Alunos**: Permite cadastrar novos alunos com informações como nome, email, telefone, escolaridade e documentos.
- **Listagem de Alunos**: Exibe uma lista de todos os alunos cadastrados no sistema.
- **Banco de Dados**: Conexão com MySQL utilizando Sequelize para modelagem de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework web minimalista para criar APIs.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional.
- **Sequelize**: ORM para facilitar a manipulação de dados no MySQL.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **body-parser**: Middleware para processar dados enviados no corpo das requisições.

## Pré-requisitos

- Node.js (v14 ou superior)
- MySQL (versão 5.7 ou superior)
- Um gerenciador de pacotes como **npm**

## Instalação

1. Clone o repositório:
    ```
https://github.com/jonathaneduardodeoliveira/PcdWebBackend
2. Acesse o diretório do projeto:
    ```bash
    cd PcdWebBackend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie o banco de dados MySQL:
    ```sql
    CREATE DATABASE pcdweb;
    ```

5. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto, com as seguintes informações:
    ```
    DB_HOST=localhost
    DB_NAME=pcdweb
    DB_USER=seu_usuario_mysql
    DB_PASSWORD=sua_senha_mysql
    PORT=3000
    ```

6. Inicie o servidor:
    ```bash
    node server.js
    ```

## Rotas da API

### Cadastro de Aluno
- **POST** `/alunos/cadastrar`
  
  **Body** (JSON):
  ```json
  {
    "nomeCompleto": "Nome do Aluno",
    "email": "email@exemplo.com",
    "telefone": "11999999999",
    "escolaridade": "Ensino Médio Completo",
    "documentos": {
        "rg": "12345678",
        "cpf": "12345678901",
        "comprovanteEndereco": "Rua Exemplo, 123",
        "laudoMedico": "CID-10"
    }
  }
  ```

### Listagem de Alunos
- **GET** `/alunos/listar`

  **Resposta**:
  ```json
  [
    {
      "id": 1,
      "nomeCompleto": "Nome do Aluno",
      "email": "email@exemplo.com",
      "telefone": "11999999999",
      "escolaridade": "Ensino Médio Completo",
      "documentos": {
          "rg": "12345678",
          "cpf": "12345678901",
          "comprovanteEndereco": "Rua Exemplo, 123",
          "laudoMedico": "CID-10"
      },
      "dataCadastro": "2023-01-01T00:00:00.000Z"
    }
  ]
  ```

## Estrutura do Projeto

```
/PcdWebBackend
   ├── /models           # Modelos do banco de dados
   │   └── Aluno.js
   ├── /config           # Configurações de banco de dados
   │   └── database.js
   ├── /routes           # Rotas da API
   │   └── alunos.js
   ├── .env              # Variáveis de ambiente
   └── server.js         # Arquivo principal do servidor
```

## Contribuições

Contribuições são bem-vindas! ## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---
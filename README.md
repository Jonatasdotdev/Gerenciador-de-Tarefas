# Gerenciador de Tarefas

Este é um gerenciador de tarefas com funcionalidades de cadastro de usuário, login e gerenciamento de tarefas pessoais. O projeto utiliza uma API REST no backend e uma aplicação React no frontend. O banco de dados utilizado é o MySQL.

## Funcionalidades

- Cadastro de Usuário
- Login e Autenticação com JWT
- Criação, Atualização e Exclusão de Tarefas
- Listagem de Tarefas do Usuário Autenticado

## Tecnologias Utilizadas

### Backend
- **Node.js**
- **Express**
- **MySQL**
- **JWT para autenticação**

### Frontend
- **React**
- **CSS para estilização**
  
## Requisitos

- **Node.js** (v12+)
- **MySQL** (v5.7+)

## Instalação

### Backend

1. Clone o repositório:

   
   git clone https://github.com/seu-repositorio/task-manager.git
   cd task-manager
  

2. Instale as dependências:

  
   npm install
  

3. Configure o banco de dados MySQL e o arquivo `.env` com suas credenciais:

   ```
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_NAME=nome_do_banco
   JWT_SECRET=sua_chave_secreta
   ```

4. Execute o servidor backend:

   npm start

### Frontend

1. Vá para a pasta do frontend:

 
   cd frontend


2. Instale as dependências:

   npm install

3. Inicie o servidor de desenvolvimento do frontend:

   npm start

O frontend estará disponível em `http://localhost:3000`.

## Estrutura do Projeto


.
├── backend

│   ├── controllers

│   ├── middleware

│   ├── models

│   ├── routes

│   ├── db.js

│   ├── server.js

│   └── .env

└── frontend
    ├── public
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── services
    │   └── App.js


## Imagens

![Screenshot (525)](https://github.com/user-attachments/assets/ea532736-de46-4346-9f84-687bd81bcdfa)
![Screenshot (524)](https://github.com/user-attachments/assets/be18ded6-9d7e-444b-8b40-307e27664237)


Insomnia Requisições
![image](https://github.com/user-attachments/assets/5842d1fc-a61f-46b8-8caf-3a1ec0016b75)
![image](https://github.com/user-attachments/assets/6c866b9d-c346-4df4-8841-a06d9185878c)



## Contribuição

1. Faça um fork do projeto
2. Crie uma nova branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas alterações (`git commit -m 'Adiciona MinhaFeature'`)
4. Faça o push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

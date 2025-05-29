<div align="center"> <h1>Make Your Burger API</h1> </div>
 
<p align="center">
  <img alt="Github Top Language" src="https://img.shields.io/github/languages/top/mauricio071/Make-Your-Burger-api?color=00bfa6">
  <img width="1" />
  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/mauricio071/Make-Your-Burger-api?color=00bfa6">
</p>

## 📝 Sobre o projeto

Esta API, desenvolvida com Node.js, fornece funcionalidades essenciais para o sistema "Make Your Burger". Ela permite que os usuários montem hambúrgueres personalizados e gerenciem os pedidos. A API suporta operações como a criação, edição e exclusão de pedidos, além de oferecer endpoints para consultar o status dos pedidos.

## 🛠 Tecnologias utilizadas

-   **JavaScript** - Linguagem de programação
-   **Node.js** - Ambiente de execução para JavaScript no back-end
-   **Express** - Framework para construção de aplicações web em Node.js

## 🖥️ Como configurar o projeto
Siga os passos abaixo para instalar e executar a API em seu ambiente local:

### 1. Clone o repositório:
 
```bash
$ git clone https://github.com/mauricio071/Make-Your-Burger-api
```

### 2. Acesse o diretório do projeto:

```bash
$ cd Make-Your-Burger-api
```

### 3. Instale as dependências necessárias:

```bash
$ npm install
```

### 4. Inicialize a API:

```bash 
$ node index.js
```
Agora você pode acessar a API no navegador em http://localhost:3001/api (ou na porta indicada pelo terminal).

### 5. Configure o ambiente para o front-end:
Para que o projeto do front-end consiga consumir a API, instale o projeto do front-end [aqui](https://github.com/mauricio071/Make-Your-Burger) e configure o arquivo .env no projeto com a URL da API. Por exemplo:

```bash 
VUE_APP_BASE_URL=http://localhost:3001/api
```

Após configurar o arquivo .env, reinicie o servidor do front-end.

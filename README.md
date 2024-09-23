<div align="center"> <h1>Make Your Burguer API</h1> </div>

## 📝 Sobre o projeto

Esta API, desenvolvida com Node.js, fornece funcionalidades essenciais para o sistema "Make Your Burguer". Ela permite que os usuários montem hambúrgueres personalizados e gerenciem os pedidos. A API suporta operações como a criação, edição e exclusão de pedidos, além de oferecer endpoints para consultar o status dos pedidos.

## 🛠 Tecnologias utilizadas

-   **JavaScript** - Linguagem de programação
-   **Node.js** - Ambiente de execução para JavaScript no back-end

## 🖥️ Como configurar o projeto
Siga os passos abaixo para instalar e executar a API em seu ambiente local:

### 1. Clone o repositório:

```bash
$ git clone https://github.com/mauricio071/Make-Your-Burguer-api
```

### 2. Acesse o diretório do projeto:

```bash
$ cd Make-Your-Burguer-api
```

### 3. Instale as dependências necessárias:

```bash
$ npm install
```

### 4. Inicialize a API:

```bash 
$ node index.js
```
Agora você pode acessar a API no navegador em http://localhost:3000 (ou na porta indicada pelo terminal).

### 5. Configure o ambiente para o front-end:
Para que o projeto do front-end consiga consumir a API, configure o arquivo .env no projeto do front-end com a URL da API. Por exemplo:

```bash 
VUE_APP_BASE_URL=http://localhost:3000
```

Após configurar o arquivo .env, reinicie o servidor do front-end.

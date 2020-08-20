## 🚀 Desafio conceito NodeJs

## Instalar dependencias necessarias:

  yarn intasll

## Rotas necessarias

1. POST /repositories: A rota deve receber title, url e techs dentro do corpo da requisição, sendo a URL o link para o github desse repositório. 

2. GET /repositories: Rota que lista todos os repositórios;

3. PUT /repositories/:id: A rota deve alterar apenas o title, a url e as techs do repositório que possua o id igual ao id presente nos parâmetros da rota;

4. DELETE /repositories/:id: A rota deve deletar o repositório com o id presente nos parâmetros da rota;

5. POST /repositories/:id/like: A rota deve aumentar o número de likes do repositório específico escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de likes deve ser aumentado em 1
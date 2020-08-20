const express = require("express");
const cors = require("cors");
const {uuid}  = require('uuidv4')

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

//List Repositories
app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

//Creating new repositories
app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;

  let likes = 0;

  repository = {
    id: uuid(),
    title, 
    url, 
    techs, 
    likes
  }

  repositories.push(repository);

  return response.json(repository);

});

//Update repositories
app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const {title, url, techs} = request.body;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if(repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository not found'})
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: 0
  }

  repositories[repositoryIndex] = repository;

  return response.status(200).json(repository);

});

//Delete repositorios
app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < 0) response.status(400).json({ error: 'Repository not found' });

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

// Likes repositories
app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoryIndex = repositories.findIndex(repository => repository.id === id)

  if (repositoryIndex < 0 ){
    return response.send(400).json({ error: 'Repository not found '})
  }
  repositories[repositoryIndex].likes++

  return response.json(repositories[repositoryIndex]);
});

module.exports = app;

const express = require('express');

const TreeController = require('./controllers/TreeController'); //Acesso aos Métodos Controladores
const SelectController = require('./controllers/SelectController');
const routes = express.Router();


routes.get('/trees', TreeController.index); //Chama Método de Listagem
routes.post('/trees', TreeController.create); //Chama Método de Criação
routes.delete('/trees/:id', TreeController.delete); //Método de Deleção

routes.get('/tree/select/:id', SelectController.index);

module.exports = routes;
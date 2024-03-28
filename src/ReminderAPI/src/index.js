'use strict';
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
require("./db-connection.js");
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const notesRoutes = require('./routes/notesRoutes')
const userRoutes = require('./routes/userRoutes')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use('/notes', notesRoutes);
console.log("dsasd")

//swagger
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`********* Servidor rodando em http://localhost:${port} *********`);
});